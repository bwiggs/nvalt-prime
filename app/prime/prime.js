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

