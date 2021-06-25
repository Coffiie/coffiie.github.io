'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7ed00a909cfa560c0903885972a8567e",
".git/config": "c50dc93a2d1b7d76bfdb43601034b3d0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6b4a6243dea82180f55e08c48f8d4698",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "4ac6820cde741154179ba65b8ff9fe07",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f9de7409f57d1ded04f84d04f0def8e6",
".git/logs/refs/heads/master": "f9de7409f57d1ded04f84d04f0def8e6",
".git/logs/refs/remotes/origin/master": "f3febf885c69baf70e70ff04c4b0eb81",
".git/objects/07/f6bad9554ffadeaf4f96fce56d4589661164eb": "4e3bd3512a1d931b85366825b6188910",
".git/objects/08/4bae5507bf69273142a3f8d237d43f12fd0e1d": "4218fb5cdfb940e4577350a7bea6dd7e",
".git/objects/17/155996c729c87aa056ce9a12b959f2116b4d12": "58c46dc8914caf07a6cebeeccfa475e6",
".git/objects/1c/a1957e8428b3feebe9a2f363e15c87ad8bdbb8": "7c40c622483e056cd2fa9b11a175da10",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/objects/25/0598a0f911a8b542590a68154d8357cabec5b1": "f0026d531fb2e0d6ece2b0e574953691",
".git/objects/2c/6d715bbdf947df0546765139b6be408217dc85": "454669da748b0da044608193855f32e2",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/97532986b47a08c5ce4eb8911c674b29f6eee0": "24b1896fbc5fa8bfa20871e374021cf1",
".git/objects/3d/42213075fda4c706076e312e0f4f5adc168260": "834662d18271bb8c6d553ae54da41a65",
".git/objects/45/30580ecf1e0198dbc5eafa1bd402dd2f550f6a": "27f4f4a22edd198bbd0aa180f4603c5f",
".git/objects/4e/2f4c8bfb1eebaf939a1bfea9a669a5125ba795": "ac4f24cfb1af72ee19857c4a8071b447",
".git/objects/52/a73a556bca85f5599950789fd3cc3f6ca73fc8": "6013cf361d306c4b9f36910832677b4a",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/54/1dc4b43dec0970ae607806ae510d72df948f6e": "a480d13ec10df93ad543a35f833f2362",
".git/objects/64/c6ee4dec0c9ebc582f6a5bd656e993301c964b": "8f45d6a3406ba3ac24d7cc45222bb410",
".git/objects/66/912a4413c8c4088ab18c0ea2fb7a4c42e9de0f": "67953b013cb3637dad2a15674f302563",
".git/objects/6e/079f6984098cc53f68a24390936a73a6dcd944": "9860083b26475cb02af305975737a70b",
".git/objects/71/b5542b741fe2cd86570e735c6f237990166d91": "ddc0946a747c9271ab83b1c9b055b5dd",
".git/objects/76/1aaf38e8cad32c13fd9100594b74fa25aa3723": "70ae88cc9d2346b4bd5ba7a2027162b2",
".git/objects/77/fe2e32c414c2b23ab1922c5379388e40dcea13": "4f477018984025ac549144215d8f3da3",
".git/objects/78/df43e58124862ab856106a70dfad8dfc1dfdee": "ccb0265bce68522f37481d05e354acdf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/798c3d90f9a16b055affca2eb540e27f36ff03": "d87d8b4dbe47608ad18d5f7130bf906f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/59f1ba473d62aba76bcadef27257c3d3387328": "51d5b63490c181b00257250bf96a427d",
".git/objects/92/c3a16fed2bf030ef6c521a22917d34748967f8": "6fd01b5bab771a7789289ab883ba246f",
".git/objects/99/0857de8e03f4db6c2e1112045dfa37ed2d675d": "c6c0a2e381bb5650bc0bc39a55a42b2d",
".git/objects/9a/7d6c81fd2145401fab21229c14d62a67771e96": "fa89879fb1029807b8c5a9dc93d38d86",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/47913690227ca4d9fd9a6e2fcaa4365c7a6f18": "a580b66354afd961e800875267eac42b",
".git/objects/a7/0a7b8b7f3f17cb88d855ca7a04a7b16615f20e": "e6dac1d1d3bcf709eef22829a9af4ca8",
".git/objects/b3/8a1e6236af738e0656859eba642ed5b4154220": "38d4f1a3d0749e017e83e7fa39219add",
".git/objects/b5/3b32ecfa693cb5297b125378098e117f513b05": "29624ce4030350ee923102f487d35a64",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/858757eb98286718cc526d245ee2ed50e3b68b": "3b20615aa9092e71e91ac6624e0a8649",
".git/objects/bc/3eb622979f4720e48ed413530148010dd1f6e2": "d54176a1c49fa8b606edb6ae89a4a693",
".git/objects/bf/4e8beb1fcc69bf88e8cbd08d156c361ddd7d7c": "8167ca20d94b7361590a76b1e209bb80",
".git/objects/c6/a231a2b86a3f2d7f8fadef51fcf7e07d9b60cd": "c2e674ba996e946d16838cc85b83c7ac",
".git/objects/d6/0393f1d96c6b4227250b50293860f14070b60e": "db185f10e52c430353393dfa4aa080f0",
".git/objects/de/65d2f6bce0e7289b8ce374e7a7eed835e0d8ea": "02436a9b1e0f3c9c16da966d63b94c97",
".git/objects/df/1d990e9c9b0647e174ce7bd35e931b1a44af5d": "fde29918bc045ec939c80f42db0d013d",
".git/objects/e2/0edb572456b7c2ee38369c9ea08affbbfa9f4c": "f11a38261ff0904c5616b0763373ba13",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/70cf45931ea79d74a63e3212e10d50bc26b727": "b6af6de148e51c8b733451e1c77977e5",
".git/objects/e9/147cd7ae40d5915f5b18ba7b77717431e705f8": "5019e0b0626246f41ae3032e99cbc9c0",
".git/objects/ec/f13abbd71ffb7bf6edd670304711ba2bd792e2": "ff6b0d093b89250bf5475e54f2d566bb",
".git/objects/fa/9c224ae29a2f4ac3655cd4a28ea7530af1e07b": "d2b03c77b60ce9eb19b12bde2d8f2713",
".git/refs/heads/master": "5c174695a7ece6a4f94e460df6cd902b",
".git/refs/remotes/origin/master": "5c174695a7ece6a4f94e460df6cd902b",
"assets/AssetManifest.json": "029594d61d90e66584afaf5b29e20af8",
"assets/assets/pothole.png": "48247e8a0f9027ba43214aa5871e658a",
"assets/FontManifest.json": "cdb8b4bf859d5cb3811cc02665e7784e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/NOTICES": "5f9616687340374c80c6b49238367e89",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"assets/pothole.png": "48247e8a0f9027ba43214aa5871e658a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "56fcfe9ae48f3821a78d3e81d63943d0",
"/": "56fcfe9ae48f3821a78d3e81d63943d0",
"main.dart.js": "eadc7ab1a0cc32cfcc902c37f2bde9a6",
"manifest.json": "21b07dce9f151d92a1e680af3a2d3dd3",
"version.json": "5e3899f914126a1377434fde51022a0c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
