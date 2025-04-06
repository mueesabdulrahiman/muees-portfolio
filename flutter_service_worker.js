'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5690b907c19d052eb278dff73645e17b",
".git/config": "9d60b9497191cefd64c13cd9d2a68f00",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "28454b32fb2e4d146cc70e24a9824492",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "543452703c96182cdf45e8f91caf453e",
".git/logs/refs/heads/main": "f373c18a1bc544f13bf2c796f2f5e7fc",
".git/logs/refs/remotes/origin/main": "daee6245350a1feae57eaf2633ab6acd",
".git/objects/00/41226f54537b72a37ea7668013d87978d77028": "7c44dc79fcd4eaab955bdf2cadb4ff54",
".git/objects/00/d694040e012f7ca0eeb9333e3f36e2050c1831": "b1a1084224c00edf28b1b10cd223ba8a",
".git/objects/02/1c25ce097f73ea543764ea298d221ffbaa7b2c": "4b6678ad40445f29ecd590ee93c57fd1",
".git/objects/04/4fb4bed3e8a70222fccdec03f3531d4c81f4a7": "7a8da257366b274ba628f1686db00776",
".git/objects/16/42406366cb87e2d7b6becd2c2500ee9bb4bcc8": "7060e5f7cdf565cb88586650c9a1f8aa",
".git/objects/18/6a0ba19186f7ea97b00df1c23a6b8ec1132ca5": "a39c0fb273638909e1f08911ddbe793c",
".git/objects/18/bb5b0c55beb9638b25f1601edb0380f1cb1249": "ca1ed550191bcdcc6fa397f02fcc6628",
".git/objects/19/07a78250788ba9aa75168e55defcdcc1548155": "1e7f680b71aa423899d8a544125b3203",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2c/67ae9059f3b142187d3ae90bdd2ce6a118d1e3": "644273f0f01e5878bcaa3221c5afe807",
".git/objects/31/1ac762edfaa47b276d34c4a8d8c437173d8db1": "0cc35f7c5ef9d338937e38cf9a5ec667",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/c0eb30e3529624e4638e06596f83cc4392b3c5": "af5d96fc37e26d2d9c2b93500e744301",
".git/objects/3e/5b0e9a66a014db3cc24cdd006762fc658f131e": "72b3dc246191ed7bc7a9b83f0ddc94da",
".git/objects/3f/a6857e47688908190207a3de659c0f70b0e3d6": "22d4910282967f020197a8a66790901e",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5c/e054e15b708af3ee69bef1388bfbdb4e0842df": "7dbf0eb4534e2c8bfef090fba4942c2a",
".git/objects/5e/2575eb961462d5f598e51cccf050a1c707cb81": "74760b86c702d11121371499fe47ac14",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/62/6bc6e113129b4bd660243512dcc53b742e31f3": "f08b86f75de1fa4b1c4fcbe89bf4e2df",
".git/objects/69/39157ab2f7a7d1c2a2407f4c17cd2a41770c1e": "4f08e76dc1f5c26e03cd1cdee1960310",
".git/objects/6a/e8c7ebbf60590b1b176fa7295dbe3c3ae884c8": "6333a0e933a71260751ba4c59851225d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/72/49cbd721ff37ff71f57ee933d2428a0b11f9bb": "5c40cd5d12b97d0cec2159dcb1d64254",
".git/objects/72/8759aa7dc2e1d9af9c598188237216b0d0782e": "2e00a0153e6aed354f5a107c36101dbf",
".git/objects/73/dab9933a998fd98dea05a2bcb8870f8da4e426": "714e526d62f4f6d895974e60a0477260",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/b86a2455735aae1971434964f8a6168d85642a": "6023cf3e3c509093dd72a3f4acc8c2a8",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/94/1adc53114c2e70646663d6d1c3c8ff07661a1e": "aaba05d48335b5b7a4ed27935ae779d4",
".git/objects/94/e8936a104155cca50dfae82dabc8d33ec32839": "918d6b044d45be0fcfef78abbac0a1ec",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a6/63e02430a655bbd75da8cf34d8dd0fae23792a": "56de6ce507d33a84f0fe280f6eb18c7f",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/8713a1860f978f5fc7fc498731d45e6dafa643": "187c22d19a7408c4714a67e4c906fd58",
".git/objects/ae/23c5a2a70d23ecaa2eadeca97f354bf321cdc1": "b9ca6299588a9e85fa8f78fc0f17728a",
".git/objects/ae/a1bfc926dd1f3ca9ce3c5f01b1a2e443418e2c": "42152ba5691470efe952deebc59df675",
".git/objects/b0/a721938b53fec2905e2c78227c374284555932": "97d2019e238e4a82971f84fec38f9098",
".git/objects/b2/37bbd3e96194069e184c148d8f417528441995": "2663fd1af2c8238eb4a2b99ab7f240eb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/18d63184e362c4e92269f88a3044257d9ac07f": "26a35a80b79609502f177cedc2a4b4d7",
".git/objects/c8/58de31c6201947a9a93f8dd71927993cd9cf82": "a7c1710e34e0b40fa22e5b5e226807ae",
".git/objects/cb/5b53d638bcb731780686a7267e4415f70a8c5f": "18b6c1313fd362107720d7a3ccfb13ed",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d1/dc45bd35cab156f9b8d1130652f875d8701e4c": "7592badf33e84a4964ac3417d8896dc3",
".git/objects/d1/ed4b6b6a705625de08ae86bb3624a698e07d1c": "762a03342e74c9490f9e6d92120aa413",
".git/objects/d3/5534e72d9c3348fba3093f0e4d9ca9996ba212": "a31d3ba82a9f23b317bf92a1c69f4c05",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/7b36f164566351f0fbf793780521cccb3f2d8e": "daa0420a3c1177ea94a7b42eb505e68e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/dc/c4e136361e7e55a7358979415bb3b8a0e8e14e": "8b12ab72dd2b98df03f671b6e8899809",
".git/objects/e5/61745bcdf5e4db2a6dd46f072231695224bc47": "516ce07db7954b3003d68b99ba8c7abc",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/34496c5decd1fba891b47ce96b8e4ee00bb185": "3a2534d54886226804cae22af25589e5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/0e48f006c62951be75b1ebe4772d6fb34d701f": "063b8d38889fa36ffbb59687cdc76f35",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "7b9fc23bd67e43a79c347c19a8adcffb",
".git/refs/remotes/origin/main": "7b9fc23bd67e43a79c347c19a8adcffb",
"assets/AssetManifest.bin": "2af933a823f05e8da4d2abb7c9109634",
"assets/AssetManifest.bin.json": "7aa517c5a2b3f863574a10486201a7a0",
"assets/AssetManifest.json": "a3bfe16bc286e55ba571a27b90aa7887",
"assets/assets/al-ameen-employee.png": "57ecebeaaedbd535c67259b18562872e",
"assets/assets/al-ameen-employer.png": "0d0c420b1531da94607f6e83609127ef",
"assets/assets/image2.png": "abcce168db11867b01bdcd2c5a84e62c",
"assets/assets/ismy.png": "414472430e2ee809a6b557330f083149",
"assets/assets/shopzo.png": "3fc347eba73c77e1f5d9151b2380de30",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "dc9670a262729805af3070bd178d82dc",
"assets/NOTICES": "750d367e6e5858a4911fb4f96a552952",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3bb40a664d30151784350a69dbd31308",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "a1a27662edf8a576f0d4a4100f5de1aa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5f599f1b2297570e6b3f77bd0324c1fd",
"/": "5f599f1b2297570e6b3f77bd0324c1fd",
"main.dart.js": "01ee15aa1b3896b8c060cc569906a962",
"manifest.json": "43be2446ea8870b59f066b31ba24f9d5",
"version.json": "27c3e41619608f2e89fae80296f0e318"};
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
