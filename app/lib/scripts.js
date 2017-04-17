function async_load() {
    /// Google maps
    (function() {
        var gm = document.createElement('script'); gm.type = 'text/javascript'; gm.async = true; gm.defer = true;
        var key = 'AIzaSyAQ28rO6f4H5I5WjaVJCkZuuNlY-RyhHOQ';
        gm.src = 'https://maps.googleapis.com/maps/api/js?key=' + key;
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gm, s); s.parentNode.removeChild(gm);
    })();
}

if (window.attachEvent) {
    window.attachEvent('onload', async_load);
} else {
    window.addEventListener('load', async_load, false);
}

window.prerenderReady = false;