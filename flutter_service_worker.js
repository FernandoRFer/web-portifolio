'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7642fe4daf0ff3bbbfe93bf8d050f850",
"assets/AssetManifest.bin.json": "35b6ff5f84b91a201e1ad8cb1e7a1a6a",
"assets/AssetManifest.json": "c245f06d9e1f0c5717cb463672826e9c",
"assets/assets/fonts/Chunk.ttf": "121c0534a4638305bbe716625832a5ba",
"assets/assets/fonts/Metropolis-Bold.otf": "dea4998b081c6c1133a3b5b08ff2218c",
"assets/assets/fonts/Metropolis-Thin.otf": "152ab0324f4452c56f2622dc6262e9b6",
"assets/assets/image/foto-perfil.jpg": "69c40d62bd8f2b2111cd20f80dc3a0b9",
"assets/assets/image/foto.jpg": "a107d215af0638407f3615d932a18ca6",
"assets/assets/image/fundo.jpg": "98754214baaeeedf55b1b65fe82d1ffc",
"assets/assets/image/IMG_5513-Editar.png": "19de513404ce21ee130991ebd2fc5dd1",
"assets/assets/image/mobile-flutter.png": "0beb64d3519131355f6b29a16962d615",
"assets/assets/image/mobile-profile-white.png": "57a86e50a3b4d2a3122b54e658655997",
"assets/assets/image/mobile-profile.png": "3cda2faa35c11feabd5f879c4ecd7d5f",
"assets/assets/logo/api_Logo.png": "38598c46ab174db17fd7687a67ec52ad",
"assets/assets/logo/Azure-functions.png": "2cb88bc0ee640703b8df790140da01ab",
"assets/assets/logo/Bd_Logo.png": "7e075bf9adfb671587f7dd76bb4bb460",
"assets/assets/logo/Csharp_Logo.png": "db57839e40e03bd671375bc623b9b4cf",
"assets/assets/logo/Dart_Logo.png": "9ca03b2ba3f2995f6f8d5c760294e087",
"assets/assets/logo/email_logo.png": "eb7e902ad140286730925bbe370ada7b",
"assets/assets/logo/Flutter_Logo.png": "b36c58c1f2e860299dbaae8e030a85bb",
"assets/assets/logo/github.png": "d956d000d8810d40402d5ea824f5355a",
"assets/assets/logo/githubbranco.png": "8568666357cb44e8ebd376b0d81ae847",
"assets/assets/logo/GitHub_Logo.png": "1d626624f9aa72d8d04d2983151e6765",
"assets/assets/logo/github_preto.png": "7433692cabbfa132f34adb034e7909fa",
"assets/assets/logo/kotlin.png": "759bfdeea60435b707ffa369ecd7f0ba",
"assets/assets/logo/linkedin.png": "3017ae54755ac48f9585bac8b01fdf15",
"assets/assets/logo/logo-2.png": "5b0925d916a442e222639c89d11f7046",
"assets/assets/logo/logo.png": "c2e129a225dc38f7e5eb549fb0f72530",
"assets/assets/logo/logolinkedin.png": "6b11303872207d20218914041afa21ed",
"assets/assets/logo/logowhatsappbranco.png": "f43755c648afa7724dce05c894bc1ac1",
"assets/assets/logo/logo_linkdin.png": "ebe1062b79169b93c029ee70ffbe4fef",
"assets/assets/logo/Whatsapp.png": "3650f49a9d501efa6b62c1c08f714d16",
"assets/FontManifest.json": "b1f76825ad4d6c7b7e467810eb11f80f",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "348fb5bcc6438426c101db6e553f5d24",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ac04bd918762cfc7466aeda8122c6d60",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "540a4b2c150f4e997378694e50ee7842",
"/": "540a4b2c150f4e997378694e50ee7842",
"main.dart.js": "02616b5da5423792f6594c4a8c6408c5",
"manifest.json": "9727dde90aa820b7aa416212dd6616de",
"version.json": "061068e2c9bf138d06622981ae841092"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
