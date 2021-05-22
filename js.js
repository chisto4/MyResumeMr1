var cacheName = 'shell-content';
var filesToCache = [
    'css/style.css',
    'js.js',
    'icon/icon.svg'
];
console.log('test')
window.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('serviceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

// $(document).bind( 'mousewheel', function (e) {
//   var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100);
//   e.preventDefault();
//   e.stopPropagation();
//   $(document.body).stop().animate( {
//     scrollTop : nt
//   } , 500 , 'easeInOutCubic' );
// } )
