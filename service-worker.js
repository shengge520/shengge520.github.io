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
    "revision": "31f45931ecf79dca2d22e85f170355e2"
  },
  {
    "url": "about/about.html",
    "revision": "765b84dfe79e5631e5bea60fa894a68a"
  },
  {
    "url": "about/index.html",
    "revision": "63eea4c80060ab032158036748bf6937"
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
    "url": "assets/js/11.b263e515.js",
    "revision": "f13693eaa48dcb26d124151902e7a929"
  },
  {
    "url": "assets/js/12.b885fc62.js",
    "revision": "82c183eba44592637880424faf2ebb84"
  },
  {
    "url": "assets/js/13.a108f2e6.js",
    "revision": "bbb946597f760b6cd5935afd587ffa6e"
  },
  {
    "url": "assets/js/14.e7a7c253.js",
    "revision": "584526193c8cd7767bfa28ffacd13b3f"
  },
  {
    "url": "assets/js/15.70a6b9e3.js",
    "revision": "958eb27299ea29a0ec37f7f6d092caf8"
  },
  {
    "url": "assets/js/16.746f7e16.js",
    "revision": "d99ffe1df70e0eafc2193b6c7c128647"
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
    "url": "assets/js/22.5481217c.js",
    "revision": "566efa0473c15c0aeaf410f53f7ae1e7"
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
    "url": "assets/js/25.5b4f6765.js",
    "revision": "446025752a27f318ef649981e7cc4d35"
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
    "url": "assets/js/3.704df541.js",
    "revision": "c96e238fa016f86ae9346e766251cd9e"
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
    "url": "assets/js/37.975323ba.js",
    "revision": "7a8bb43d24b387a24c2152126eb4b98d"
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
    "url": "assets/js/45.a4ffe794.js",
    "revision": "118d4527ce6267252c27e549b518b3f2"
  },
  {
    "url": "assets/js/46.6a9cc358.js",
    "revision": "4ca4d381ab5ff9830bb77942d7649bf3"
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
    "url": "assets/js/49.d295c7c6.js",
    "revision": "2d7c2cd0ac41c31dc317cbabfa490545"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.eafdddfc.js",
    "revision": "e3e4d88288e81b00b960def89b26a4e7"
  },
  {
    "url": "assets/js/51.03aea9bc.js",
    "revision": "952490cbbfe2995d55b5e7a18eb19e6c"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.4131f176.js",
    "revision": "29656e058ae54846decd293b018292a5"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.4ddb18e3.js",
    "revision": "a1126625572c61ca87d8e01c973d8c82"
  },
  {
    "url": "assets/js/56.9bef3140.js",
    "revision": "4fcf8c76f0bdd86cfbce83f4e4a3897a"
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
    "url": "assets/js/72.066e5ddd.js",
    "revision": "2b6d992afb993ad735f1436183e34886"
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
    "url": "assets/js/76.e14d9f75.js",
    "revision": "f1d9df0b1b20d751c9ea7ecade5b6299"
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
    "url": "assets/js/9.c61f000a.js",
    "revision": "ddfb959a743b901defa95d9a631c4b0f"
  },
  {
    "url": "assets/js/app.aff0716b.js",
    "revision": "ae58de8f48b5acb854c1ab240797a1db"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "68e636acf379705cdccb42f458e3c344"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "af69a86e8ff42b13f1b2fa895dd7df61"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "71d6250b711143a9287220b45ce37dd3"
  },
  {
    "url": "fontend/index.html",
    "revision": "01205d58199f28e3bbe31296a0dae57d"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "182a778ade09a87d43860cd38e10c3d2"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "12dd888e9fc4b1f3e667cc76fd6e28bb"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "0c5782f3660dec8db784bc7bdd49ff75"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "c1e4f46ac7aaf0cee2a78299973f0237"
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
    "revision": "270d5986cfa31124d4f24d2ba321fdb3"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "e1913be39c6610b2f55aaa5f5871a2f9"
  },
  {
    "url": "interview/css/index.html",
    "revision": "0ec6f3792f0a0420e7918032aeda6865"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "0b71fd4ae4150e304020cd65d0ce486e"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "4ea097098015e44d1a49fa234a234d17"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "2407927489710ec3cf0ea1ccc9f52e72"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "7a6c61b7e8dcb958770a95cf272f1562"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "724051bb25f1771b4a7d7ea7fe9d52f3"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "5463a78f44dea11beb2433c46f14321a"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "d6b715f388893926a01a2995396ac70e"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "a316b36a788ebff4fe75b01220b011cb"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "4f8167604c5f8e3e7fbc6ae0ca58fbf1"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "7a6eeaf6d54413de61333b5aa8183435"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "19435d5db433d6c27838b2ee7a3110a3"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "2b916d3bd88eb81f13498b34d80e0175"
  },
  {
    "url": "interview/html/index.html",
    "revision": "38dc2e07334dd7f9786a9829b3677176"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "dddbafaa7d4ee53d649c627b13342ab7"
  },
  {
    "url": "interview/http/index.html",
    "revision": "70efa04fc69afa54cbad381521c1de1d"
  },
  {
    "url": "interview/index.html",
    "revision": "e866f46d4ff94306f77964c56a86c9b7"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "0f3e1a1c15399e25e6990d05860073d5"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "20133c0390ad48d4692d7b9758e513bc"
  },
  {
    "url": "interview/js/index.html",
    "revision": "3ba9a767419f422dd3438b868eb031aa"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "dcacbdfef63b5f2793cc686386a1ddf6"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "bbc3772fbf8b291823467704df161f7e"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "b7597be8eebf088a5495d6ed94e64263"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "1c3ab9e65c88da423f8e68cc1fc8b6f7"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "9ff8cfdb5a930246ad32d61a8954da09"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "59affe9326219a9908f816d8d9fdfaa3"
  },
  {
    "url": "interview/node/index.html",
    "revision": "7d0563651fafce0bf5c22b1a0e482a96"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "7100169fbffb10dce95453ef01c101f8"
  },
  {
    "url": "interview/react/index.html",
    "revision": "fc330ed401e38dae98e6af1908aaadbc"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "9a8faf641de33921823c4b075bf2cb29"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "3cebe86dadf1d40aebce7a28d037bc09"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "6cea4f589a8ec1988aebecabe8aa1e8f"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "4e429cf937ff5141afdac30650452fbd"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "cded772932452a057437b3a0d00819ae"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "2b9c7b8128758dfb062d9fa57b9ff79c"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "49326b9207305eac6ca01554acb54697"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "8d8a77c3f219e2760147fa994f3aa827"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "12c70842a89465c3b4097409fcfd4bc9"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "c595ae5fcf27cf8af9b98a4a3ced2fac"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "a2d9b8a53899485f3e4b4ed5d3923250"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "33b45870b54b6a5e38148b0276dc7f14"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "9aca7ee5211255d998fe109739ffbed6"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "0be5e489ea1f1c31439adf8da7bc2daa"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "0fc22bd70a501082efd20b64f97c2c70"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "540c5d41e3656dc713d095960c95695b"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "7b722a46b01f3ba552c9cfbafb2f7398"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "d81a2924e0967b035383df50e06da593"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "ee6dea8f76423d13d25099535f96b638"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "80b3cb20878731b4c00808b454b39279"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "e72351c679f83fbe92885f45373743fc"
  },
  {
    "url": "math/index.html",
    "revision": "54219b360382bc18fa2fb0ef58426098"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "5f09e1ff912104a13f3fbb545da8da61"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "edbae566cb765863c42e6885ecc33136"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "f0683ac8a8fc81b206d5afc1a4e8479a"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "578f10b251ff671c5d206b1a9d038b63"
  },
  {
    "url": "math/low/index.html",
    "revision": "64d2d009cf18df2cc468e9d812b41e58"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "30047e7a4b8a74b921b8aaa33406f87b"
  },
  {
    "url": "math/mid/index.html",
    "revision": "63ee3ac8f2c6c4f235d146d810a1adcd"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "01116fc2e92897b40ccc3cfc2cb448db"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "67d117fdba3f9daae83213a0fcd73ad8"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "d503b10ac66d3c64e6503d1bba4e1fbd"
  },
  {
    "url": "wechat/index.html",
    "revision": "0a73a8bb97d1e18798e2c0378ba5a7b3"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "0b6581e1476c3f1266c6977f45a6c353"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "0b14d6b0971512d8938d40d8cb804911"
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
