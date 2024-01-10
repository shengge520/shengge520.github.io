/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0f93b0479b5c1aff0e49945254826b56"
  },
  {
    "url": "about/about.html",
    "revision": "e04265d4731d1760129c97b537fc2062"
  },
  {
    "url": "about/index.html",
    "revision": "e316f150debecf34a943e37b496df9d6"
  },
  {
    "url": "assets/css/0.styles.441dfaff.css",
    "revision": "baafa525a13315b784b4f1f4d88ac8a7"
  },
  {
    "url": "assets/img/2-float-center.8e95d48e.png",
    "revision": "8e95d48ea30687cb7ef51201c2e789d7"
  },
  {
    "url": "assets/img/3-box-pack-center.1bcc0f9d.png",
    "revision": "1bcc0f9da35c4dbe8eb3d68ff3a356d2"
  },
  {
    "url": "assets/img/4-just-content.5c5315eb.png",
    "revision": "5c5315eb053e6f57a6a046a9f2396051"
  },
  {
    "url": "assets/img/5-transform.1fb87690.png",
    "revision": "1fb87690849ad4c67b7bb65e8c7f754e"
  },
  {
    "url": "assets/img/6-margin-left.6a0f7d6d.png",
    "revision": "6a0f7d6d7386028141d99172247e608a"
  },
  {
    "url": "assets/img/7-top-left-right-bottom.f2322043.png",
    "revision": "f2322043c9cb7a306a779811952cd79a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.61cc9bf9.js",
    "revision": "08fe8ff03c8464fa7ca9e05e47795efb"
  },
  {
    "url": "assets/js/11.7f833532.js",
    "revision": "699ce960a2d42977fe45e0baf2f4e169"
  },
  {
    "url": "assets/js/12.cf5950d6.js",
    "revision": "099a26c18d9c735132ca5a954c04bd5e"
  },
  {
    "url": "assets/js/13.3f7e88e1.js",
    "revision": "4bd12ddc6d4493206e455c9a97c7e290"
  },
  {
    "url": "assets/js/14.bf9bb8ed.js",
    "revision": "06f3893e5e00e565e8dc7bc63bd951c4"
  },
  {
    "url": "assets/js/15.10d42f4f.js",
    "revision": "3ce6fec18c8e5dd584b743f040d99b39"
  },
  {
    "url": "assets/js/16.00d0f328.js",
    "revision": "979e124414be5ff2dcef709bd2328537"
  },
  {
    "url": "assets/js/17.21ee6b66.js",
    "revision": "7683314d4a73e4539119463bc8d3ae9e"
  },
  {
    "url": "assets/js/18.57edf6ae.js",
    "revision": "36850c0e44dc9ffc45dfc09feef9c688"
  },
  {
    "url": "assets/js/19.e60f4daa.js",
    "revision": "42ea29124fa55f4af8ce541913b6ad5e"
  },
  {
    "url": "assets/js/2.9560d7c0.js",
    "revision": "d19b4cf833fa184340962ae0c2de72a1"
  },
  {
    "url": "assets/js/20.7591162d.js",
    "revision": "2b5ebe1286905ab6aba057c0bd29ee90"
  },
  {
    "url": "assets/js/21.c37d6d09.js",
    "revision": "61ab7ba9e1463bd73a38fd33698757e2"
  },
  {
    "url": "assets/js/22.bad5cf44.js",
    "revision": "c158135eea783586009d34ab92032706"
  },
  {
    "url": "assets/js/23.f55ec0a8.js",
    "revision": "26f65411e094263065435f6458e335ef"
  },
  {
    "url": "assets/js/24.06cc200f.js",
    "revision": "4921b70c68ba32c68396679a3f7cb06d"
  },
  {
    "url": "assets/js/25.d8b1587f.js",
    "revision": "0e16bb28cc5c6d993066e091f3108abd"
  },
  {
    "url": "assets/js/26.52a57881.js",
    "revision": "3fc8f6906aa2fb880ed929a1375efb8c"
  },
  {
    "url": "assets/js/27.6868c3d6.js",
    "revision": "cea56deb86fe8062237d6cad23c9dc3d"
  },
  {
    "url": "assets/js/28.dd6403a7.js",
    "revision": "686dee96513646b8317189014a293d57"
  },
  {
    "url": "assets/js/29.5b18e108.js",
    "revision": "336adf243570634e3c4dafd10517977e"
  },
  {
    "url": "assets/js/3.a5594c29.js",
    "revision": "5b0b5707bfc4f9900e504a8f136e0596"
  },
  {
    "url": "assets/js/30.6def31d8.js",
    "revision": "39914df71d558c6bfacdc40b8737835b"
  },
  {
    "url": "assets/js/31.705f8222.js",
    "revision": "85652a1b3e6d361ded186b2e8680bd77"
  },
  {
    "url": "assets/js/32.c7804b71.js",
    "revision": "80d2d97aef82c9463c3f3e552de36180"
  },
  {
    "url": "assets/js/33.2396d43b.js",
    "revision": "0e8a763b98b053a6f708692ac6867d36"
  },
  {
    "url": "assets/js/34.35675da8.js",
    "revision": "30869ffacd3ce4e731681a6bcfd73543"
  },
  {
    "url": "assets/js/35.b6f62261.js",
    "revision": "42d93d65a08d4410fa66eb09f43b97aa"
  },
  {
    "url": "assets/js/36.0d1a8530.js",
    "revision": "7d8650fec913f736efd6dfba6fd2d05a"
  },
  {
    "url": "assets/js/37.9b1cd3ac.js",
    "revision": "76012fc356d79bf5cdd0c51458ce24ae"
  },
  {
    "url": "assets/js/38.05049a34.js",
    "revision": "ecfcf47fc1423dc47683c4066aab4969"
  },
  {
    "url": "assets/js/39.522b2e76.js",
    "revision": "d3c211ad7eae2b2c4a43c004dc79bddd"
  },
  {
    "url": "assets/js/4.1169c5b8.js",
    "revision": "bb080edb48652c4cc3eb8da354a1d9c3"
  },
  {
    "url": "assets/js/40.9ecc4bd4.js",
    "revision": "8f9355f48cd3cc58c22f0070b9b450c7"
  },
  {
    "url": "assets/js/41.34fd4d79.js",
    "revision": "1fdf7969a85ad44c55e288041441fa6e"
  },
  {
    "url": "assets/js/42.7f151196.js",
    "revision": "709eadc6d83a506d5046536b76280ff4"
  },
  {
    "url": "assets/js/43.505a9823.js",
    "revision": "2ea41b5688932d0d043892ada1e0bb98"
  },
  {
    "url": "assets/js/44.1b6bd724.js",
    "revision": "dd66802160c398057c82885f728ccf38"
  },
  {
    "url": "assets/js/45.07de1d35.js",
    "revision": "2ff441b793d02d3301e27724b91c7880"
  },
  {
    "url": "assets/js/46.85da3b3d.js",
    "revision": "766680c7aaedcd0148b7a4c112902cf3"
  },
  {
    "url": "assets/js/47.84f92197.js",
    "revision": "fc293d08c4e68be0b32dd39f3f5fbfb9"
  },
  {
    "url": "assets/js/48.f5cbc490.js",
    "revision": "30a9b04379da570eb194369215d4fe09"
  },
  {
    "url": "assets/js/49.628e4f37.js",
    "revision": "7e5508aef9c6d255f1923e1d6dfebd31"
  },
  {
    "url": "assets/js/5.734ae56f.js",
    "revision": "975d0ea3ba85deb7787860888bf45e9a"
  },
  {
    "url": "assets/js/50.bc9d1f09.js",
    "revision": "1f152caca5dacdaadf31c44d5f3dc8df"
  },
  {
    "url": "assets/js/51.cc76a975.js",
    "revision": "db82011a018fab09397c763741765381"
  },
  {
    "url": "assets/js/52.3db35b21.js",
    "revision": "c7c589c43c37bb60714ce2ae43e8ba40"
  },
  {
    "url": "assets/js/53.d5c200ca.js",
    "revision": "74475afaa99c0a4ec1a268225029f112"
  },
  {
    "url": "assets/js/54.34ee9ddc.js",
    "revision": "058f9c146eab902a14d0959037df8a67"
  },
  {
    "url": "assets/js/55.5e796004.js",
    "revision": "6da2ca172f55c3c2d2cd14322478d5bc"
  },
  {
    "url": "assets/js/56.e9459174.js",
    "revision": "ad0ab73e366da4c9dd2d36bcef4bab72"
  },
  {
    "url": "assets/js/57.b2dcf54a.js",
    "revision": "f33cd6032b0b775f2410e7e3588c7ba4"
  },
  {
    "url": "assets/js/58.c8ce0d52.js",
    "revision": "588786ed65111f825daebbdaf83d89a6"
  },
  {
    "url": "assets/js/59.e91489ec.js",
    "revision": "65ac8c1675eff72a80c4d5e14d3949ab"
  },
  {
    "url": "assets/js/6.9ffa83d3.js",
    "revision": "bc5d046420c3e4ddebd097d7904d612a"
  },
  {
    "url": "assets/js/60.e5852956.js",
    "revision": "2f0fd14ee7b84331db9549953bc096aa"
  },
  {
    "url": "assets/js/61.6740dc14.js",
    "revision": "a1be477e54dc80032dbb75f44d727e89"
  },
  {
    "url": "assets/js/62.531b0ba0.js",
    "revision": "12365abf31b02de11ef512a6c42dc3aa"
  },
  {
    "url": "assets/js/63.860a51b2.js",
    "revision": "cf4a97a7073f6de0f574beb428a78103"
  },
  {
    "url": "assets/js/64.88eca636.js",
    "revision": "95e8ef1560f864f0e23be3cfbd0ec87b"
  },
  {
    "url": "assets/js/65.e2037c59.js",
    "revision": "5cd4206fac1eeb2ac20abf81a83d1433"
  },
  {
    "url": "assets/js/66.53b2c314.js",
    "revision": "610b71d1f83523dbb8f748271d55914d"
  },
  {
    "url": "assets/js/67.a57682bd.js",
    "revision": "453ed732e0b55de66b80803e3da51156"
  },
  {
    "url": "assets/js/68.b5f726fc.js",
    "revision": "fe9c80f6a95bc02b5b99d8d272292c85"
  },
  {
    "url": "assets/js/69.13c1fa4a.js",
    "revision": "62f46819141afceef3061f1e1f842a56"
  },
  {
    "url": "assets/js/7.142000ff.js",
    "revision": "b7ae3f7f99b9f7451764a6d3d6c79ad5"
  },
  {
    "url": "assets/js/70.4ff75cc9.js",
    "revision": "a4c2e58c2286cfbaabd1bcaca812d24f"
  },
  {
    "url": "assets/js/71.bf472dc9.js",
    "revision": "5cf257859b859445c93ac02bb15bf57d"
  },
  {
    "url": "assets/js/72.3eb9df7e.js",
    "revision": "4376958ac9ec289ea4130b9d03094440"
  },
  {
    "url": "assets/js/73.8081e459.js",
    "revision": "ad9d451d0d75b15b363abdf68e5f846b"
  },
  {
    "url": "assets/js/74.08b77db0.js",
    "revision": "360eddd6531896b14d61353eae0ddd39"
  },
  {
    "url": "assets/js/75.ac02747f.js",
    "revision": "609cd90215692aea6a9eeae1f88af91a"
  },
  {
    "url": "assets/js/76.255c1a46.js",
    "revision": "883a0ce20d5824ffae633f66e76ff7c4"
  },
  {
    "url": "assets/js/77.bc976716.js",
    "revision": "0b9e152c3254c0b54dcdb47740599ad6"
  },
  {
    "url": "assets/js/78.ffdf95c7.js",
    "revision": "0848d224c2aa78af3534e16463e05093"
  },
  {
    "url": "assets/js/79.c8a1dd17.js",
    "revision": "9815b51ca990ded45369a55e306a292f"
  },
  {
    "url": "assets/js/8.cd961958.js",
    "revision": "9d6f2283ddd1eff2c60ff81cc5a86a9a"
  },
  {
    "url": "assets/js/80.3ed24257.js",
    "revision": "b82995cb02eca2bbc750911d63723f0a"
  },
  {
    "url": "assets/js/81.73e83d41.js",
    "revision": "d2a7daa7939a5ac6603648a0f84d2627"
  },
  {
    "url": "assets/js/82.13ee745a.js",
    "revision": "c33fbfbbd26c2235b410672bac26024d"
  },
  {
    "url": "assets/js/83.1965c627.js",
    "revision": "6e5952343d8287ca0a0e8a2e4fd92699"
  },
  {
    "url": "assets/js/84.d18eb385.js",
    "revision": "6b3722ab88c34e6975ccc7d664b77380"
  },
  {
    "url": "assets/js/9.3e391902.js",
    "revision": "eb24bf3c3bb3e6ad0494335b012a5502"
  },
  {
    "url": "assets/js/app.2e11914e.js",
    "revision": "61597ddce595c32fe4e21922e507049b"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "cd2faca28e13e1fc5124f13592349daa"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "2166ec69abd36a9a3625357266687b79"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "46a15875dc72c3f884a14af62e4cefae"
  },
  {
    "url": "fontend/index.html",
    "revision": "3e4d23d39ec590b04cf86a86f45c92e5"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "688fa21ad1261fb790a258573f16179b"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "3aebe3a0f489703bb863124f2607c13f"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "24e2c95c23067eb393b70956aaa779be"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "f7aef066541fc0624e75ab8aecbe1d10"
  },
  {
    "url": "images/itclancoder.jpeg",
    "revision": "5cfa284c4fb53108a3571bd18b7024c7"
  },
  {
    "url": "images/itclancoder.jpg",
    "revision": "b9b2599ec38ad03da9464fc9ab2a5918"
  },
  {
    "url": "images/logo.png",
    "revision": "a655f8705181fb931a759389e442e3b1"
  },
  {
    "url": "index.html",
    "revision": "a98223edc81a289a046e4b15c337963e"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "21b1d7a84bd40c6c1208f81ba74c7be1"
  },
  {
    "url": "interview/css/index.html",
    "revision": "b48cd4af4b9e0acff4bd5bd5d4c5ac01"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "c257d1e79f3c5e0906ef2ef55cfc8f05"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "b4ff4a308912def36637f1ad184c22aa"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "71b2b25e89df9c20e4663fe9c114573e"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "53bf0d9311ce654afed7ebf6154871f2"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "8817173f5edda71fdfb74d5068b48d78"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "32a8340652f0f379d53f911ff60f08a5"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "7d763b5fda419a176fd3ddd4cbe47c2b"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "2350e9e1ebe5b7942c4ee30ffeb3861f"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "5b4fb22e770e5d3c0ff83971627715c0"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "770255e274a5361b7dcbad38069ad692"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "ea2134ad9cf944ee629d882e7257fca3"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "e0737e209befd85cb8204510ba3a2eac"
  },
  {
    "url": "interview/html/index.html",
    "revision": "c250e3d570b880e2057ded48a5c3b492"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "0af3dd8156f8bcee18a79dfa36904728"
  },
  {
    "url": "interview/http/index.html",
    "revision": "0d8b3d0f074e65fc3fb3298506282e93"
  },
  {
    "url": "interview/index.html",
    "revision": "28fec8ab57729d3bff71e55999d619d6"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "54fd80e50424147bca4b45ec12577b41"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "411e8a0816d2da3ff7e4bf0410a4d4cf"
  },
  {
    "url": "interview/js/index.html",
    "revision": "3eaf262de3c0a73f42d1aa1e1feba4a3"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "8aa04541644cb3bc3f046bf8d9e1724d"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "74e85161f5fcc4c4518230caf0917079"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "31d2a634c6346bb5cac81b71a2029b71"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "85a4a25f0ba44c4fdcf3db017ed65ec4"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "ceaf4de96d920dd302219fae7d80293d"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "524ded6c9cbe20faa67be128d369bd4f"
  },
  {
    "url": "interview/node/index.html",
    "revision": "6d8053a0c05d1b1ee7d97b3509a57866"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "4f09bb47b047a54b73fb6369e596bb4b"
  },
  {
    "url": "interview/react/index.html",
    "revision": "1ca710564d354e06b572ff3611cf70e6"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "13ef1768ae2bcf7732afe8d54a3d6d8e"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "4ac3f0f17a6fc18a7e4b8e0b4e96a59f"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "1a8c8d3e4f9c148129418f3871eca7bb"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "a73b6c67b81837c3da1c532067ba2c80"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "a81fd383c77a3874a00d70fbea8a7f3c"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "142c16ddb27bef84c69b6960549e48b0"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "edf0b77aa8c22c3705539c0c3e73c034"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "8b661ccb0005e89ec72ff4f39b89241c"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "494c1cb8b6d0023338594c1baef3b5e8"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "f0732d19c52ba5f7b4719ed4d5311ba3"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "33ffef634001e3a8086547338ba887ed"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "8ed0d21e54bd89a8bd079d4914b21776"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "ae68be874975bdb7600cebf270d72cfa"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "7668eed5863a6772f74c4b5b20302fbd"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "ed63aec57e1724cdba2faa432f9b658b"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "a36fc1dae35d93954dcbd08ca59c4a1c"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "910bc35e2d94ca0fc7969a809e4be950"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "1f9afa6f9e4fb2c07fa4aed30895b8cd"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "aa5af168e5e5682a9a158f72dcf49f03"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "888394f0157ef28c96593169515be0de"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "5f52b6de510b0ca4938492cf3dfa51d4"
  },
  {
    "url": "math/index.html",
    "revision": "f97389a8a49c2a0ef0611a8318ff4283"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "8a9eb7a61b04dbbab88859c0c0a25ea2"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "8bab90aef8fe30d8cc8439d837568d14"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "a15f97763c115e5a21c627a59ba4770b"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "c10b0a552579abf087739c91aebf873b"
  },
  {
    "url": "math/low/index.html",
    "revision": "3c1fdac774f300711a848f728f7c632f"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "b1546b26cd55c437913d7ace5f882cd4"
  },
  {
    "url": "math/mid/index.html",
    "revision": "720bcf22fa48de395cd93d5fd6b49335"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "204186b8c018f23056b84e47283a8b2e"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "e80b23370107e261ebf2f15e0201c508"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "440fbc3bdde051ad1dcbe7b3acffe6c7"
  },
  {
    "url": "wechat/index.html",
    "revision": "8059e215cce4716ff33c8b0b88f14474"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "fb1788a555817641928f6db3665a537f"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "4fe44dcfe2a978e32b710cee3767ab7e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
