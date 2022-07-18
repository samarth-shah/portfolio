'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f195eb97eeca78c1201c0e2a93c9c8f4",
".git/config": "3a0f8d260edd4bfad2bfdc7b68cf9527",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "da04e82aa822d1b5a6283c2c2f3ac5e5",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "88705b01600d9d811e05447a698c4236",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "28cbba837b6adb8987fb41837e33f0cc",
".git/logs/refs/heads/master": "28cbba837b6adb8987fb41837e33f0cc",
".git/logs/refs/remotes/origin/master": "381e67a853cbab0c9574708dba4f6900",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/5a2272ab5171b83df60340519d62757da596bc": "b6be8d699d04fd472db9f082ca039a1a",
".git/objects/0f/0a482daf2beab01aa1219fdb76b110f26944c9": "a3282cc4a3e9c6d5b4f62166927158bf",
".git/objects/12/96b0282600c691ce5a06266aaf72340c4543e4": "287098226dcfd974dfa34b9d746349de",
".git/objects/1a/5957b9d2e0d197fa06630d9fa4471c9eeffae5": "c9b4e5173a20c7c46396ff46e2fb70ec",
".git/objects/1d/d33e3a28d82a1f2f24363cb449d24b4c352536": "7ee50ed3e5fab02abff3fcb4225f0133",
".git/objects/21/f092f4aa075c773a914d108ffa570800b8f6fb": "c344a0160d0719a7601f3a21c6f81264",
".git/objects/23/8a3834bb21421e3b1cbfaf83766a6431ff9b18": "f11bf0d83cb705a53390622e5d2824dd",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/b4f1cab02c1599971decb32e51b7d5da603526": "d0bdedf799a9bc86b69a041a3fa55548",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/2812c4d0f6696464d9a024cca27187f2d5ede1": "fd587a11e32d6ea21df19ff9a7c99882",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/40/2cef3891084c4d89e4bebe60cebd38a0a27789": "1238ddd1537f1e2a1b600a080ad715d8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/41a58d7ce75d9a694b0b385b3e7cce97da1f1f": "6b2a04292750d433eca2cec84c2acffe",
".git/objects/49/92629f597ff3634f8a82dcc4f45269779417c3": "3628edae3a3e0eaea967bff4962cdd99",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/57/cf24c3cf65701d4473ded62c791a91715ddb1d": "be544f14edc48cad068b59684a57e486",
".git/objects/5d/50f8fd58b834b9f62e3403546c17b67daeda70": "f2454383cb35d3e7a6a2be9f860e6e44",
".git/objects/63/8457c60c33cd44a977dc74e54fd17490b00023": "e3750cb3fd70282e0772228a60fb3bbf",
".git/objects/69/e231053dff7745f4b1d65b63c11ec57e32b8ab": "f3021572d613dff6fb75e7195d19ae42",
".git/objects/6c/e33d24f14d4510edceb825ab5aeafb95b8b1d8": "0ddbe92575a454b7f394124607a1b007",
".git/objects/70/1f32116e6ea5381a05f6caceaa870615c74210": "97c10d3da76e5f8a63efd895430424f8",
".git/objects/75/32651667c9be9dc3e2006b0a2b958e1e8aa619": "c283b62630c1d8aca0f4ebf9aa7b6472",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/96e9299921fb97cdba4b82fbf8d9b60cfc3db5": "b65df11ff922b907c280a6fb3081ed69",
".git/objects/7d/e890e9bb111eb252e3be1f114a0928017bd08a": "bccef5f830cdd530cc7a4e34fb09eb9a",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/86/21962ce1ff8c8be2212c9092691e16ff777518": "c0f1bbf49e1335345b1acd346a2b3597",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bf2d920700e58c71e4fe5067bfb4b1cf35e546": "00a9a89feba6ed106caad6e08ec32a68",
".git/objects/95/ec75c490c9060eefec0945ca0697cface8aa84": "d41694c1152de9ae15d897599557af7e",
".git/objects/96/7103b87f3c6ba6b70ea98fddfe354357fab999": "abd4db54fe46c84a41e0fe9e83c8b452",
".git/objects/9e/6ea95ee302b18aea9f7fca072456d76c486d27": "e1a279ceebdfde07d1de72d07ebcca8e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a6/114107c3435607e49a6eb2c1fe229c749f93a1": "edb7c5d395e8f6e95aebaf4c0ec7afc6",
".git/objects/a6/8c8218e9e0d663c937b3e9e5d3ce9c1e0e56f1": "5f1f0f461e84b50b8fea33dbe8c2d41d",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/b2/83528ac323c5b534ac20a692024b3bfdedb2c0": "d4ee1d612c8fd4608da3680811b82bf7",
".git/objects/b3/16d1399554e94093ef4985aaa051f1b664ccb1": "6a7e7f1de977a45116b14f63599243c9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/0efadfd3b29e71449fe720b0d503d3a71e78fc": "1e1acdc2ff3aebde051a6ce6c0c9315c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/bf/3b362ce587d5dfbc3611b3ae17876c0b0627f6": "34875aab068755605eed370b0d01232a",
".git/objects/ca/eb2a4ae92675804dd0eb3e1d7c1970a656b420": "ed82a4b8c322c9ef9b3a7805f2481a11",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/e67718ed3ce0a9edffd737898d64e3fe3ae5d8": "1af1ea50b54de76e1305406806f6c028",
".git/objects/d1/efdc0b37c9739a75de86532d9e43fc182d9ccb": "796f3fe4e5b6db0952171b246354c4a0",
".git/objects/d3/f9519835f665a0156839a84809ca5da6bcae53": "a14c4691a53e898477521a08e725e22a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e4/0a847523c436e4cf8973e59ace3ce0b0faea30": "40d91b6826d1a4152e24325591ea246b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d4ced57f9cd41c54e5c10eb5aa5255cf2e2767": "5ef5a2652f192f7abfe8860ea1f5c2a9",
".git/objects/f0/203a0dcc6dda72124aea3ef1ca98dcb398cc6a": "58f4075471a02339ad5b28328937d654",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f0/faf84a6e15b810b59339de63f29bd3cb889b1c": "49c356043dd7e447c8a51b725c43a422",
".git/objects/f1/07b612ea5b28cdc62f36e7c0fd6484f80f42be": "9601fcd72216296aea3fa8b816a67069",
".git/objects/f3/d2e81f8d3aa159b9f9d555bd8147bdd171a27c": "6383af57dc2eaa0f1cb856f22fa7a688",
".git/objects/fa/e9df6f7f6f8105e850c68937abc9ce90819765": "8a0a8dd3e0e562ea437673ab0d7d5b9c",
".git/ORIG_HEAD": "8bab8c21f65ff92c81c3c66ba47f8ba3",
".git/refs/heads/master": "ffde3c65381e0ba1a52146331c4c99b0",
".git/refs/remotes/origin/master": "ffde3c65381e0ba1a52146331c4c99b0",
"assets/AssetManifest.json": "cd2cb15d68ea22a2d9a9760ab1dbb84f",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/insta.svg": "62a0ad5eb8b42e5662908f0a09a73b5c",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/IMG_7344.JPG": "5afaf730ef493e0e8d013ef8987c344e",
"assets/assets/images/ProfilePic1.jpeg": "6a94c5bf1dbccbcbc056a7b6e8cc1b65",
"assets/assets/samResume.pdf": "d85b0c0fb7462cfd0eb5821f42b03d53",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "628401ea211746cad6e175387e7689f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/samResume.pdf": "d85b0c0fb7462cfd0eb5821f42b03d53",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4c6d0e011857e8dc6aef35a5ccbc9940",
"/": "4c6d0e011857e8dc6aef35a5ccbc9940",
"main.dart.js": "a83fae51300bdad3f65cfd0c4aa847c6",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"version.json": "1ac57eb0214a8f5216f1da7dd479b33f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
