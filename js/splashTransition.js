function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 9)
    : cb();
};

ready( function() {

    var App = {
        init: function() {
            var xhr = new XMLHttpRequest();
            setTimeout(() => {
                this.pageTransition(xhr);
            }, 3000);
        },
        pageTransition: function(xhr) {
            xhr.open('GET', 'home.html', true);
            xhr.send(null);
            var url = 'home.html';

            xhr.onload = function() {
                if(xhr.status === 200) {
                    console.log("test");
                    document.documentElement.innerHTML = xhr.responseText;
                    window.open("home.html", "_self");
                }
            }
        }

    }

    App.init();
});