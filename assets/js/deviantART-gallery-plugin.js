function deviantARTGalleryPlugin(username, id, ratio) {
    // Inject the gallery markup
    var gallery = document.getElementById('deviantART-gallery');
    gallery.innerHTML = '<div id="ss__wrapper"></div><div id="ss__controls"><div id="ss__prev"><div id="ss__prevChev"></div></div><div id="ss__next"><div id="ss__nextChev"></div></div><div id="ss__dots"></div></div></div>';

    var deviations = [];

    (function queryYQL() {
        // thanks http://stackoverflow.com/a/7369516/1696757
        var url = 'http://backend.deviantart.com/rss.xml?q=gallery:' + username + '/' + id;

        window['callback'] = callback;
        var s = document.createElement('script');
        s.src = "https://api.rss2json.com/v1/api.json?callback=callback&rss_url=" + escape(url);
        document.body.appendChild(s);
        
        function callback(json) {
            var items = json.items;

            for(var i = 0, l = items.length; i < l; i++) {
                var object = {};

                object.title = items[i].title;
                object.image = items[i].enclosure.link;

                deviations.push(object);
            }

            // async function is complete, move on
            var images = '';

            for(var i = 0, l = deviations.length; i < l; i++) {
                images += '<img src="' + deviations[i].image + '" alt="' + deviations[i].title + '"/>';
            }

            document.getElementById('ss__wrapper').innerHTML = images;

            simpleslider(ratio);
        }
    })();
}