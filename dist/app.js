(function() {
    var body = document.body;

    // handles strikethrough markdown support
    body.innerHTML = body.innerHTML.replace(/\[fa-([\w|-]+)\]/gi, '<i class="fa fa-$1"></i>')
})();

(function gtd(_, $, rivets) {

    var body = document.body;

    // handle checkboxes for tasks
    body.innerHTML = body.innerHTML
        // action
        .replace(/\[\](.+)\s@action/gi, '<gtd class="gtd-action"><span class="fa fa-square-o"></span> $1</gtd>')
        // later
        .replace(/\[\](.+)\s@later/gi, '<gtd class="gtd-later"><span class="fa fa-calendar"></span> $1</gtd>')
        // done
        .replace(/\[\](.+)\s@done/gi, '<gtd class="gtd-done"><span class="fa fa-check-square"></span> <del>$1</del></gtd>')
        .replace(/\[[x\/]\](.+)\n/gi, '<gtd class="gtd-done"><span class="fa fa-check-square"></span> <del>$1</del></gtd>')
        // inbox
        .replace(/\[\](.+)\n/gi,  '<gtd class="gtd-inbox"><span class="fa fa-square-o"></span> $1</gtd>')

    if(!_.isUndefined(GTD_NOTES)) {

        $('gtd-notes').show();

        tasks = [];

        _.each($('gtd'), function(item) {
            tasks.push({
                name: 'sacdas',
                state: item.className.split('-')[1]
            });
        })

        rivets.bind($('gtd-notes'), {
          action: _.where(tasks, {state: 'action'}),
          done: _.where(tasks, {state: 'done'}),
          inbox: _.where(tasks, {state: 'inbox'}),
          later: _.where(tasks, {state: 'later'}),
          tasks: tasks
        })
    }

})(_, jQuery, rivets);

(function notifications(_, $, rivets) {

    if(NOTIFICATIONS) {
        $('notifications').removeClass('hidden');
    }

})(_, jQuery, rivets);

(function($) {

  // widont
  $('h1,h2,h3,h4').each(function(){
      $(this).html($(this).text().replace(/([^\\s])\\s+([^\\s]{1,5})\\s*$/,"$1&nbsp;$2"));
  });

  // smooth scroll to anchors and footnotes
  $('a[href^=#]').click(function(){
      if( location.pathname.replace(/^\\/,'') === this.pathname.replace(/^\\/,'') && location.hostname === this.hostname) {
      var $target = $(this.hash);
      $target = $target.length ? $target : $('[id='+this.hash.slice(1)+']');
      if($target.length){
          var targetOffset = $target.offset().top;
          $('#contentdiv').animate({ scrollTop: targetOffset - 40 }, 1000);
          return false;
      }
      }
  });

  // back-to-top link fade in/out
  $(window).scroll(function(){
      if( $(window).scrollTop() > 150) {
          if(!$('#backtotop').length) {
              $('h1.doctitle')
                  .append($('<a href="javascript:void()" id="backtotop" />')
                  .text('Back to top')
                  .css({'float':'right','display':'none'})
                  .click(function(){
                      $('html,body').animate({scrollTop:0},500);
                  }));
              $('#backtotop').fadeIn(400);
          }
      } else {
          $('#backtotop').fadeOut(400,function(){
              $(this).remove();
          });
      }
  });

  $('p > code').each(function() {
    var $block = $(this),
        lines  = $block.text().split('\n');
    if (lines.length > 1) {
      $block.addClass(lines.shift());
      $block.text(lines.join('\n'));
      $block.wrapAll('<pre />');
    }
  })

})(jQuery);


hljs.initHighlightingOnLoad();