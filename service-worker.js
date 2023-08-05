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
    "revision": "32bc790bff42305c3de2059a6989c087"
  },
  {
    "url": "about/about.html",
    "revision": "81c57ecb576d4c657bf0ac084175bbde"
  },
  {
    "url": "about/index.html",
    "revision": "2a12221352caba33d2092f3b5c1f23ff"
  },
  {
    "url": "assets/css/0.styles.482300ee.css",
    "revision": "bda627d1188b24f033cce5e220634731"
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
    "url": "assets/js/10.f9ca1139.js",
    "revision": "33ee81f3cbc71eda3ea6924bf3ac9baf"
  },
  {
    "url": "assets/js/11.abfb500d.js",
    "revision": "97ed49051a7bfa0826bac2525efcafcb"
  },
  {
    "url": "assets/js/12.b19e8911.js",
    "revision": "60b5bc12899b7090e76ea5acde5f1d54"
  },
  {
    "url": "assets/js/13.961227b9.js",
    "revision": "6b8afb3afc7a49b2a5db46755bf3ac4d"
  },
  {
    "url": "assets/js/14.7413730f.js",
    "revision": "e2fe7a1577929728ddbf33138895360b"
  },
  {
    "url": "assets/js/15.b8e4b359.js",
    "revision": "8f14ca0b88e0c56c82dbaeb804a02530"
  },
  {
    "url": "assets/js/16.c1f4a4b9.js",
    "revision": "5f6245a272d5822e85ed3cb3457cf1ed"
  },
  {
    "url": "assets/js/17.92107c7b.js",
    "revision": "31ea73e3d150420c55827299ba9713cb"
  },
  {
    "url": "assets/js/18.cee12c9b.js",
    "revision": "be8e49671442a8b2addff2420747d975"
  },
  {
    "url": "assets/js/19.858a64db.js",
    "revision": "477927907fa35be1786a9d980a8b9633"
  },
  {
    "url": "assets/js/2.9560d7c0.js",
    "revision": "d19b4cf833fa184340962ae0c2de72a1"
  },
  {
    "url": "assets/js/20.7cd560c5.js",
    "revision": "e39114416fa25d39cefc229c3552824f"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.4ddfe6b9.js",
    "revision": "14f770ec5049af7feb45627658227a4e"
  },
  {
    "url": "assets/js/23.4a3d901c.js",
    "revision": "98bb9cb1f8c498be67cf3153d8cc3687"
  },
  {
    "url": "assets/js/24.039db294.js",
    "revision": "100205e05b0dd8e3510d5e42620ba148"
  },
  {
    "url": "assets/js/25.20150c37.js",
    "revision": "86d2b8dc73eae3833a0840518f6e45ac"
  },
  {
    "url": "assets/js/26.b0298b47.js",
    "revision": "5d7f1c30f78710bfdeb4bcac8f698b50"
  },
  {
    "url": "assets/js/27.03d57e1d.js",
    "revision": "38d9e7496f8b6fafebe9bfcce92f1e2f"
  },
  {
    "url": "assets/js/28.da3e011c.js",
    "revision": "0492c387ff335fe48375aea675335283"
  },
  {
    "url": "assets/js/29.f701df9a.js",
    "revision": "bb988d1e1c53a8c3259d206e35a56f29"
  },
  {
    "url": "assets/js/3.6e2a0165.js",
    "revision": "f267567f957adb8ebe7d9b2558c20800"
  },
  {
    "url": "assets/js/30.6d7e8ffb.js",
    "revision": "7ffa8f67611e97e85a1c1bbbb17b5f11"
  },
  {
    "url": "assets/js/31.7f7c6c74.js",
    "revision": "7e0e851ff51f0f0729a6a65488bf5b63"
  },
  {
    "url": "assets/js/32.b5ec9ed8.js",
    "revision": "5d02d9a7eb1849ef88e299ae194927bd"
  },
  {
    "url": "assets/js/33.d4d46fe4.js",
    "revision": "6d0919d7f64541cd16b1b0147a86fc42"
  },
  {
    "url": "assets/js/34.47e3d495.js",
    "revision": "05b832344e195433d9fb6c4763941220"
  },
  {
    "url": "assets/js/35.818cca10.js",
    "revision": "b8d2e06526554f8e8b68792b98bf3504"
  },
  {
    "url": "assets/js/36.7a7ce9b6.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.72002827.js",
    "revision": "b26afd14cd010e83c9266f2a1e050a78"
  },
  {
    "url": "assets/js/38.1381c1d9.js",
    "revision": "5c2c883a25f34871053570486d335f24"
  },
  {
    "url": "assets/js/39.4fbdc2f3.js",
    "revision": "2f6eebdd734b6a0a0289cc1a146e50dc"
  },
  {
    "url": "assets/js/4.1169c5b8.js",
    "revision": "bb080edb48652c4cc3eb8da354a1d9c3"
  },
  {
    "url": "assets/js/40.cb002ff4.js",
    "revision": "8fee01f2a591418087758e0249f3a0fd"
  },
  {
    "url": "assets/js/41.cc02cf82.js",
    "revision": "929ce13262702aba1b9ece3bfeb90af6"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.6cfb5db7.js",
    "revision": "8b7fe73439553e63befc54b1b41707fc"
  },
  {
    "url": "assets/js/44.d5a40010.js",
    "revision": "0c609add0ba242e066be743d96189130"
  },
  {
    "url": "assets/js/45.cbea9397.js",
    "revision": "06d7e9d8709385909bd497c724886ba5"
  },
  {
    "url": "assets/js/46.c96f3f55.js",
    "revision": "182cd4b905e11f909e861860986eeb48"
  },
  {
    "url": "assets/js/47.f55bd2cc.js",
    "revision": "9d5d3a2b36f3675ad8eca7a96f2bdbf6"
  },
  {
    "url": "assets/js/48.2d66ac69.js",
    "revision": "f99b700ad3ff849b2df9705aa0313017"
  },
  {
    "url": "assets/js/49.a3c42e88.js",
    "revision": "048a968cc9663f0bacea261f96e1e356"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.33edf329.js",
    "revision": "cc2fa754a51d7eb72d14a48d9fadab5d"
  },
  {
    "url": "assets/js/51.6cda0830.js",
    "revision": "46c1704a4dbbe1a3a7a6b7f0d34dffb8"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.90f2ea47.js",
    "revision": "17fb40244921a80ca7ab1b8fd8fe7d8f"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.5890f64b.js",
    "revision": "a64a9774e80e31d09ae88bffeda731e3"
  },
  {
    "url": "assets/js/56.901177ef.js",
    "revision": "ba4dcdd5be504c0f351dcce0073f2ece"
  },
  {
    "url": "assets/js/57.c08def0c.js",
    "revision": "7d94f028d62ae8a2d9cc2a5e3aa8b452"
  },
  {
    "url": "assets/js/58.3dcb605e.js",
    "revision": "509ebafbaa8d1a2e1481d64dcabcbf11"
  },
  {
    "url": "assets/js/59.82825efe.js",
    "revision": "48745a5e3f8fbef6d811d2f8d6b87318"
  },
  {
    "url": "assets/js/6.9f215a01.js",
    "revision": "db568c754a8fff1819565a3b47adde80"
  },
  {
    "url": "assets/js/60.556a88a5.js",
    "revision": "8ba5dc49f8b673df36a48bab5ee533d7"
  },
  {
    "url": "assets/js/61.f2e27dbd.js",
    "revision": "51995493477c39facb4d98e4b08b02be"
  },
  {
    "url": "assets/js/62.5394816e.js",
    "revision": "1dcb1c15b9b4365630fc7bc1e7796cc5"
  },
  {
    "url": "assets/js/63.b4ed9255.js",
    "revision": "d7c6f56236b2977b2b77170f86146203"
  },
  {
    "url": "assets/js/64.c154466d.js",
    "revision": "7f16bb7e6d5fe7e89c6ff490879ffa0b"
  },
  {
    "url": "assets/js/65.093928b2.js",
    "revision": "7b0dab07b77eded8d3a85247ea7ee4a7"
  },
  {
    "url": "assets/js/66.f67bf1a3.js",
    "revision": "ff209a660e0094bb2d39af641fa14724"
  },
  {
    "url": "assets/js/67.71958da6.js",
    "revision": "06c518b6fff95d82c1d5afab4f44b538"
  },
  {
    "url": "assets/js/68.bd9bbcb9.js",
    "revision": "51d5580afa24129c8d100566c646ca00"
  },
  {
    "url": "assets/js/69.4035bfb6.js",
    "revision": "fb7222ac63f37d85904e321490dc0ec9"
  },
  {
    "url": "assets/js/7.18c4d082.js",
    "revision": "65769df73aa7da262e6c948e61fed0ec"
  },
  {
    "url": "assets/js/70.07443618.js",
    "revision": "b1e7c85d88149bb4967822913977ea8e"
  },
  {
    "url": "assets/js/71.fc88c8e1.js",
    "revision": "ed9d0e8ac740553be79ff5ea6e70284b"
  },
  {
    "url": "assets/js/72.60e01c6d.js",
    "revision": "ea92ab0654d9d93dfad8f42932cebcff"
  },
  {
    "url": "assets/js/73.c17124d7.js",
    "revision": "a1fa5761e8eeb66ced5b079dcf0755e0"
  },
  {
    "url": "assets/js/74.5e2609ca.js",
    "revision": "cee82e0316239133fc449feb32726d56"
  },
  {
    "url": "assets/js/75.e933d79e.js",
    "revision": "1b53c53e85ae4d7eedc7efb9198900e8"
  },
  {
    "url": "assets/js/76.db49177a.js",
    "revision": "3a7f9e1993783c7fc2e6219eeffee079"
  },
  {
    "url": "assets/js/77.46ca6511.js",
    "revision": "cd2d1e143b17b7cd0436b7a6353e663c"
  },
  {
    "url": "assets/js/78.3e404995.js",
    "revision": "472ed725781c33f136353b2806b954c7"
  },
  {
    "url": "assets/js/79.838f371c.js",
    "revision": "dd8c32070695c5bef8eddcea07a09d7a"
  },
  {
    "url": "assets/js/8.cd961958.js",
    "revision": "9d6f2283ddd1eff2c60ff81cc5a86a9a"
  },
  {
    "url": "assets/js/80.4ff35858.js",
    "revision": "c216eb3ac29000bcd6dbdf9027eb4987"
  },
  {
    "url": "assets/js/81.d0d15a7c.js",
    "revision": "eec88ebb7b52374e30e9c8c580b1e147"
  },
  {
    "url": "assets/js/82.df262114.js",
    "revision": "e80c103267f11a8a2f827b93615c0d98"
  },
  {
    "url": "assets/js/83.15306ee3.js",
    "revision": "7c4917732acd94c7e200421c69ac7d4d"
  },
  {
    "url": "assets/js/84.d18eb385.js",
    "revision": "6b3722ab88c34e6975ccc7d664b77380"
  },
  {
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.92ec5611.js",
    "revision": "b94ba885033199565727ed5d76db6f28"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "d3603998f635cb40ae8b90c557fbe653"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "774ef38d9b1b29fd2d10edecb2f5c8f6"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "dc987fa0df82a639c9c2c32eb8d9b818"
  },
  {
    "url": "fontend/index.html",
    "revision": "e105abbece3785714c514a8cd4bfb523"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "72263f8e0135b5322e424d26cadaae53"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "9bf2ef34b6838269b69fd99e4a419196"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "2c3366fe8ad768f54ce6fe05c68377a9"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "849c7d961563607cd37c488a68dfb166"
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
    "revision": "e683cd9d24de65fa18516893b9ecc8a6"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "080352f9b2cfdc11b74fc9484e3ee741"
  },
  {
    "url": "interview/css/index.html",
    "revision": "8c52a16c705e9510af5f0b066cddf2bb"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "0fa217cefed49136054e0438eceff77d"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "eb420945141a87d808c59bfd81020f47"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "b8bdb8e6d9f91c383b3b540283fd304b"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "de66c172ec7b561a902b95c05b69f54d"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "95500ab17a8c0990e1d1436e77ec7002"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "a05594aa209dbefaa19848c0154e33c2"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "c73e63feda3c07ec2636808c5b0c40d7"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "8dceda5313a2a53fc46cb6eb95c37e94"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "f5fc9594609b780b944fdb7acc9a6faa"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "f00fcb6d08d6ad829e90703960708e2f"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "8de23e36bad1e7170153f1edc90f15eb"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "047267b9b829a82ed85698b96e79c531"
  },
  {
    "url": "interview/html/index.html",
    "revision": "aa02ad501b3aa26d90212960a89e5269"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "38b8b65ad02c8033bb1704bc7c60078c"
  },
  {
    "url": "interview/http/index.html",
    "revision": "e73b3d56ff0cae2162ba7004b71aa403"
  },
  {
    "url": "interview/index.html",
    "revision": "a6fa23051b25fe81f48adaff4f79bfbb"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "ae27cad3f8d92567da03e128bf030365"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "ceb3200fa4b72ec4f5f7f54b1b611863"
  },
  {
    "url": "interview/js/index.html",
    "revision": "be62e70067a2f6c0d44da06105e68a1b"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "2cdf94dce880995e76248e545f6860e5"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "7adb65ce83db30de845389a737a2dee4"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "30a91556b7e5df3b0f2340d4c156ce84"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "49a1bfc51a80a5b041f2762eb4aafc47"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "5b500ac3bb768bb13fe9d9f3ed7ea7bf"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "49946208358031fd5a65a4c3ccdaaaa4"
  },
  {
    "url": "interview/node/index.html",
    "revision": "0e0eee7d0f5bee175523807d151c3c41"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "67f4a66d3a30b6aacfe621280e047afd"
  },
  {
    "url": "interview/react/index.html",
    "revision": "127de800dec8e50b5b7346e9d19cb9e8"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "03a0d7a4ebe3f79c588a9f6efe7abd95"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "414ca2aeaf6337ccb4fb3b2e8ff734aa"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "78a3652fbb778b61622d04d3c041d438"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "81cf326ac7a98445cd9c9c0fcf199db6"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "61fab3ce0b5f8b582eaa844e5c269a31"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "9effbcb9ec4071b86a07680c2c34b83f"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "abcf1ddbdeb55b621c39c923486b7bf4"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "667fcb208a57bee3167f7c2fe48e8cdf"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "c13b9bf34889df053c0fb86d3feb6599"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "1e20f0fb556ea905481e6c3973360d8f"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "b1df5927fa9b0d41b433c8f24e2c9bb8"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "82e6d03f5cf6f48c504d00cd07c0959a"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "7645e9902fff2b2d83c886a20e258bb6"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "92ac15628a01cfb7fa752d22c567a6b3"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "dc9952cf70f8f2c4acc6a179b665cf79"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "4bc79aac1967c32f7d0a12fbdb317619"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "9f8ede0d58e32d8970a51ccd6176ec0f"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "e37a19a25ef938bcb1ec991d4a18f4c8"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "0b5451b471ef50b931b38ee50846d38a"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "91f47b53a3e311624cb4e449eb3cd1e0"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "2b9484b7299e842f1c544fe847ce5f2e"
  },
  {
    "url": "math/index.html",
    "revision": "6b505286f91274ebd43b22ffe18ab478"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "c6a197cff4d1dbeeff202f127bfb1b1d"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "fe935b0d50a489e51421ffda8121bee9"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "710bf5777526ea718dbdc34f1bd53231"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "f856e88b4950b05dc5f2ebceb50cb145"
  },
  {
    "url": "math/low/index.html",
    "revision": "908f8721fbac4533f0959f6a402ee7e9"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "20cf9817d2f1765b647c0d24e946435d"
  },
  {
    "url": "math/mid/index.html",
    "revision": "6e151491156939a17bfa1efd97caa9fa"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "7d36d037a51e8f47286db48ad0ea444d"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "4ad2852b8c1a116498e002e26bbce151"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "7c6887a66bf489e138fb79d47ed28af2"
  },
  {
    "url": "wechat/index.html",
    "revision": "2227322136406e9d0a0cae78edf93602"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "a15276e337a2e37fb26084251aa32b68"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "b67063fd399831fe4c9c275ab82c946c"
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
