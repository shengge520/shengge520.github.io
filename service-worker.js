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
    "revision": "c425bd19440e437cfaf89cfef34c874c"
  },
  {
    "url": "about/about.html",
    "revision": "98deb82c65c8ae1b790177d22155ec70"
  },
  {
    "url": "about/index.html",
    "revision": "fc7d105073c130f5a16d37951fcc133e"
  },
  {
    "url": "assets/css/0.styles.b2391334.css",
    "revision": "d6cb02168b0732e3e7839c2947cc9359"
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
    "url": "assets/js/20.328df932.js",
    "revision": "bbb6b76d1604159ca0b3aa850b797e86"
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
    "url": "assets/js/35.4bc85d7d.js",
    "revision": "525700595a7d3c376f2d9e9020a2f38b"
  },
  {
    "url": "assets/js/36.7a7ce9b6.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.ab2d0e1c.js",
    "revision": "e7ecc7d8f3772b3f3a28f65086579ca0"
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
    "url": "assets/js/41.33fdc0e7.js",
    "revision": "507158c2619ac289c4b9837f11be7a51"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.29c7963a.js",
    "revision": "bd42009c653eec39844d62a5c31274e3"
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
    "url": "assets/js/49.6a9dfcd5.js",
    "revision": "68e9c3683d243718256e92c65c971359"
  },
  {
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.f7618694.js",
    "revision": "c6ecc9d8d5feb4d6acf29f252f2f2267"
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
    "url": "assets/js/55.eccafe0e.js",
    "revision": "65bc91de5164e2a4664f9478823ea46b"
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
    "url": "assets/js/6.5e9d1b20.js",
    "revision": "626e33ee005b1d9e99e69a5b42b8713c"
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
    "url": "assets/js/7.5f7fcddd.js",
    "revision": "fe5ab34006b88fb09226df2cb158835b"
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
    "url": "assets/js/72.05115e34.js",
    "revision": "d0d496414e57ea1eb9673c827d93ce2d"
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
    "url": "assets/js/76.e235ea51.js",
    "revision": "5c94a65c900a5169fb9b6c87cecc8a42"
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
    "url": "assets/js/9.7b6a8526.js",
    "revision": "727ad4f4bfc53cfd9fb0f4b89878d7e3"
  },
  {
    "url": "assets/js/app.aa141c63.js",
    "revision": "e84dfbf79b80847511155281327f7dc5"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "4449b6af8e33653c328afd7e663fa788"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "89881fbaab107106717c4995001fc23d"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "ee3c648bdd682fd3cb9ff25e4f298b48"
  },
  {
    "url": "fontend/index.html",
    "revision": "aebf518976b5a329399fcfa294321dbd"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "eccfb2e5ff932c1171a8221aa722f9e2"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "ead5c904a97e17459071d45bc21a2ce7"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "c7f9bf0a0068cdbe53ba0e1980efce09"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "3891dd99cb89b2919958ed8ddb2620c1"
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
    "revision": "dcabdc1175cc425a5fdad3b2e72c5cb2"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "b7af841288f67885a8fe72a8e90172ed"
  },
  {
    "url": "interview/css/index.html",
    "revision": "4f7775f0152d0ed55f56bbfca7106235"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "30fd82408f54009106fe59e375bdc92c"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "7098932f2ac0bdf388092dc8fb872e20"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "dc559d196b48fdad9571ea5dbdd25224"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "67c7fb456b3f00ae1658d2c16d32911f"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "3f2c2970004385c8c93fdb2b6165f42b"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "874a5c92e416d0e74b41cb00e7641aa8"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "12400f674e6f559cd7881fdd8596ae53"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "693528aa7e5b08ebf7e1b8e03cff8400"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "460652fc0c2bbc794fc7fe06aebadf49"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "75dce6c6c74a97cbd5f0f009fc578d44"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "e956c0d3d2d3b9990351ddc57ca2acf0"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "f542c659c1d073a16349d2137f2c3421"
  },
  {
    "url": "interview/html/index.html",
    "revision": "8e8e1022f8094ab8e0b8b7ec245439fd"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "fe0c0b05bbb5baad303c0e42c63c48f3"
  },
  {
    "url": "interview/http/index.html",
    "revision": "ada05b4a3984275003bccdeb430a7bf6"
  },
  {
    "url": "interview/index.html",
    "revision": "d1260dff972597653b3b82e00641aa0c"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "11c54df46a67c24c2bceb59ab0676aa0"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "8b5c4b3e81f8e1806e9123f67b413c2a"
  },
  {
    "url": "interview/js/index.html",
    "revision": "10c767062167bccba40284b8dbbca284"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "e379b0ffe09b56e634e4c4c80ff146fa"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "5625010aefe51d3db79c4c01bdbf248b"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "6ea9908ae8707162ff75d5b3090ab339"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "3988c5405fc709ff256e3ade6043d54b"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "cf087a49f856ea1f1847cc0d144c3212"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "f395aa5b816a73675a34bb32125d9dbe"
  },
  {
    "url": "interview/node/index.html",
    "revision": "427141d0b762830adc82893230679fb6"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "13e31d8d0c26ea9084fa2133021dee79"
  },
  {
    "url": "interview/react/index.html",
    "revision": "6c900ff3e09609811490211bea9da702"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "a9cd06b98d9fc49908a0aff1727e42ce"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "e9ffb349affdcf5fd0cb7b79d5949dd6"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "62f997f3d7c7e21d309e02c31d6c8cc9"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "a14f801628d6c935798864d8a8c44d3c"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "c182906043175ce2792c1b6a11eacc48"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "07bc3cf9e72a7fb569d59f7df2c6bb0e"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "4fe85ae90a0d99b7865fd62dddba757a"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "68e888366ad38407859e3052f4ec234c"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "7e976128632226913c6054d9587d533e"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "adb9aaac6622a25ddd5c8558e8aa47f6"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "1300ca10708d4a45d3ff6ffe93a4eb3c"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "9be43ae60dbf0226a01fb3009010a410"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "081946cb294760829ad8897f7f99348e"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "f3641127b6369c9d9abca17f6e59fc32"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "bda4ade43d2edbc64fbb8f1ea4b671be"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "7dc52eb3fe71960d5a6cff79e5f24e06"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "2c1621ca409ec486097100293ee54ef8"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "fbcb297aef9d5c704b9944f9aaa24307"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "1cf2347caea6cd8684af884939390f06"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "b97f6a746359b6c02629c1c2326338ac"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "6074615ee661092b7a4999b767c6fa25"
  },
  {
    "url": "math/index.html",
    "revision": "5681b1ba786f949de834cf02ae158b48"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "eb8bedc8462f2df3eab7bd2fc530205a"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "f8e050d56c97dac2a5a265b8e8f507bd"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "6508ac85fed08f3b177f1019b4e78bf7"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "030e586e5eaa3e31019f543211c720bc"
  },
  {
    "url": "math/low/index.html",
    "revision": "72e1c131ffebc016d9bb061bf77e9b80"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "51cc58c1b6a2b23f407ccb2a4c56d749"
  },
  {
    "url": "math/mid/index.html",
    "revision": "477c706b66319792cbd646a872cdeab2"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "6819f52e91ba575e30dfc2905320539c"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "0921a20b30138ef15aea6fafff7f85f6"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "974e21453d7e354ebe80550270cc47b6"
  },
  {
    "url": "wechat/index.html",
    "revision": "2c6ecf35aaaf676a0a53462e337ffc95"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "00c4e1d470f8c42bcc41a988cbb8ba9f"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "83022f622249c9cf34a3ab96bffb5304"
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
