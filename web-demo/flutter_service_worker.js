'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "78c64f3d21870dd23eeda0553906a4a2",
"assets/AssetManifest.bin.json": "26f70acaf96a71e314e63675535c0875",
"assets/AssetManifest.json": "7c59891b55cbe8068695931580be6a70",
"assets/assets/fonts/ariblk.ttf": "ec8b4d9c0e68604dfbeda73d0213c82e",
"assets/assets/fonts/IRANSans.ttf": "860ad172ae5c052dea861911dc17b92a",
"assets/assets/fonts/IRANSans_Black.ttf": "e54ac90b28d41bf268592f715c0bc04c",
"assets/assets/fonts/IRANSans_Bold.ttf": "da941c58b16727d4339a8c92c46f2704",
"assets/assets/fonts/IRANSans_Light.ttf": "c808fbd805760a0863244d366b953df8",
"assets/assets/fonts/IRANSans_Medium.ttf": "e9b0ec6a034860115fe80d833c51e303",
"assets/assets/fonts/IRANSans_UltraLight.ttf": "2ddb59ec93b6e61cda40f613e3dcaf5a",
"assets/assets/fonts/vazir/vazir.ttf": "b46a06e1aee6a50a737d076b6def91b9",
"assets/assets/fonts/vazir/vazirBlack.ttf": "5c22b11211911d18c51ce189f755eefd",
"assets/assets/fonts/vazir/vazirBold.ttf": "a1ca68e19b0456b1e49c266543b1a771",
"assets/assets/fonts/vazir/vazirLight.ttf": "d9502d4a8590a9a5537d8bc29542da97",
"assets/assets/fonts/vazir/vazirMedium.ttf": "76749b9f7113be14288f7e2b37f60d44",
"assets/assets/fonts/vazir/vazirThin.ttf": "ee54dc0f9e65bd28e54fec90e8d1b9ec",
"assets/assets/icons/icon.png": "e5bf578384682adc4f505316dd89be48",
"assets/assets/images/down.png": "bc456983019bf6d2556da0b9da09e451",
"assets/assets/images/versus.png": "e71bf9a5eb7abffe4d0cfd63ab829029",
"assets/assets/riv/404.riv": "230c149de049873e44150f87478fbe11",
"assets/assets/riv/alert.riv": "1ae8d1ba2bd75596ce425136a538f961",
"assets/assets/riv/basketball.riv": "04944ce46697fa3a18de9dfef1c26252",
"assets/assets/riv/checkmark.riv": "b3e1ec7a8af2df0cad563cda1591e166",
"assets/assets/riv/error.riv": "acf50e20c1d2ce743e987a28e0cacca4",
"assets/assets/riv/flower.riv": "88fe27ef3d07b9cf463491ed53d806d0",
"assets/assets/riv/V3Live.riv": "ce69ff8a5e589773102027a50900a97d",
"assets/assets/svg/icon.svg": "f54e96ca24fe9c8682be81e0a95c4bb4",
"assets/FontManifest.json": "855e6808c2a03f3670d46c04dc5f8baf",
"assets/fonts/MaterialIcons-Regular.otf": "1a2ede02eddd62ad44ecce3057fb8c70",
"assets/NOTICES": "d2cc6f4601efb797bdc93be89b6f2c6c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "f1bd69994b37aab28b9a357146c0c414",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "84f7c290bf8c88ad54e9902b31776db8",
"icons/Icon-512.png": "4c28abd0dee0fbf9b852f33e93ff8cfc",
"icons/Icon-maskable-192.png": "84f7c290bf8c88ad54e9902b31776db8",
"icons/Icon-maskable-512.png": "4c28abd0dee0fbf9b852f33e93ff8cfc",
"index.html": "7db778739be7f4ea61aecd7722cab651",
"/": "7db778739be7f4ea61aecd7722cab651",
"main.dart.js": "bec27b6fe1d74175d9b9a48646afc496",
"manifest.json": "aadbc378d3c551f1a4060ea9f917414d",
"version.json": "cb1238f1947556ed5d606ca243b59078"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
