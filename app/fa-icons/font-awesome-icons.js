(function() {
    var body = document.body;

    // handles strikethrough markdown support
    body.innerHTML = body.innerHTML.replace(/\[fa-([\w|-]+)\]/gi, '<i class="fa fa-$1"></i>')
})();
