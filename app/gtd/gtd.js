(function gtd(_, $, rivets) {
  'use strict';

  var body = document.body;

  // handle checkboxes for tasks
  body.innerHTML = body.innerHTML
    // action
    .replace(/\[\](.+)\s@action/gi, '<gtd class="gtd-action"><span class="fa fa-square-o"></span> $1</gtd>')
    .replace(/\[ \](.+)\s@action/gi, '<gtd class="gtd-action"><span class="fa fa-square-o"></span> $1</gtd>')
    // later
    .replace(/\[\](.+)\s@later/gi, '<gtd class="gtd-later"><span class="fa fa-calendar"></span> $1</gtd>')
    .replace(/\[ \](.+)\s@later/gi, '<gtd class="gtd-later"><span class="fa fa-calendar"></span> $1</gtd>')
    // done
    .replace(/\[\](.+)\s@done/gi, '<gtd class="gtd-done"><span class="fa fa-check-square"></span> <del>$1</del></gtd>')
    .replace(/\[ \](.+)\s@done/gi, '<gtd class="gtd-done"><span class="fa fa-check-square"></span> <del>$1</del></gtd>')
    .replace(/\[[x\/]\](.+)\n/gi, '<gtd class="gtd-done"><span class="fa fa-check-square"></span> <del>$1</del></gtd>')
    // inbox
    .replace(/\[\](.+)\n/gi,  '<gtd class="gtd-inbox"><span class="fa fa-square-o"></span> $1</gtd>')
    .replace(/\[ \](.+)\n/gi,  '<gtd class="gtd-inbox"><span class="fa fa-square-o"></span> $1</gtd>');

  // $('gtd-notes').show();

  var tasks = [];

  _.each($('gtd'), function(item) {
    tasks.push({
      name: 'sacdas',
      state: item.className.split('-')[1]
    });
  });

  rivets.bind($('gtd-notes'), {
    action: _.where(tasks, {state: 'action'}),
    done: _.where(tasks, {state: 'done'}),
    inbox: _.where(tasks, {state: 'inbox'}),
    later: _.where(tasks, {state: 'later'}),
    tasks: tasks
  });

})(_, jQuery, rivets);
