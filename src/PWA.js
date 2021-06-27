// This code wa below taken from https://developers.google.com/web/fundamentals/primers/service-workers/
export default {
    init()
    {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service_worker.js')
                    .then(function(registration) {
                        console.log('ServiceWorker registration successful with scope: ',
                            registration.scope);
                    }, function(err) {
                        console.log('ServiceWorker registration failed: ', err);
                    });
            });
        }
    }
}
// This code wa above taken from https://developers.google.com/web/fundamentals/primers/service-workers/
