"use strict";var precacheConfig=[["/index.html","839987e967f0126a39cc09e327755e90"],["/static/css/main.1caa58bc.css","dd6ac0ecf1572555d63836fa9c756f1a"],["/static/js/main.41b7ac78.js","2f216f81c4aa2b62a21b80a1ef8fd7b5"],["/static/media/Roboto-Light.c6cdfded.ttf","c6cdfded4630ba6d9a2dceb70aa4fe0f"],["/static/media/Roboto-Medium.d52f011b.ttf","d52f011be65b281ba8ca1c3f689cf133"],["/static/media/Roboto-Regular.18d44f79.ttf","18d44f79b3979ec168862093208c6d7d"],["/static/media/background.b5b4e9b5.png","b5b4e9b5d1fa548fe1a43ae3d47e975e"],["/static/media/background_1.05d57327.png","05d57327a5e3406d0c1b3c0563483194"],["/static/media/background_2.0e0890b4.png","0e0890b42f38536dd2f82aea89aa0e9b"],["/static/media/background_3.70d79608.jpg","70d7960847d5c20f0cd623435c83ab8f"],["/static/media/img_harman_logo.22ebf96e.png","22ebf96e5ce1e7a19329413c72aba2c2"],["/static/media/img_info.5409160e.jpg","5409160e9e8a3a1d0cabedfd5e255108"],["/static/media/map.a645fa03.png","a645fa03309aaf21c4ced0fb4c91a058"],["/static/media/sonique img.e0da28a4.png","e0da28a40c07e5804870286bb0bc5327"],["/static/news/Earebel.jpg","780fc654afacae40aed587042f9aec60"],["/static/news/News_Header.jpg","8d9ac63666645f5512929144f9f8acd1"],["/static/news/banner_news_2.jpg","0bc057d38129e16c1f64611cd9bd15ad"],["/static/news/banner_news_4.jpg","0653cf6f35461d53ef5d16e46d6d89f4"],["/static/news/netgear.jpg","69032c99748c9ff1821b8875610c6001"],["/static/news/news.json","77b337cbc20b684dabdecdcd22cf441b"],["/static/news/panasonic.jpg","161f5d9c4154cb2a1f35119d5a8bf890"],["/static/news/shadecraft.png","747d8b67a4c560a0b91beb15167be912"],["/static/news/smartbeings.png","edbda0478ce65a77364814b2034622cc"],["/static/news/viewsonic.png","24e5a46e3f70b39ebb3221ab20bd8723"],["/static/news/zoe-small.png","57390d89fa87b189aa431902ff349915"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});