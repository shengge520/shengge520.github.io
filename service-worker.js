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
    "revision": "c24fbe6a0c4fd201013fde8c776a1c6b"
  },
  {
    "url": "about/about.html",
    "revision": "c3d2ad5a9ca5c482f4156a5e0aa6b7e0"
  },
  {
    "url": "about/index.html",
    "revision": "e9a15a7d3f4cc14ccd315047da668475"
  },
  {
    "url": "assets/css/0.styles.ef302815.css",
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
    "url": "assets/js/10.7e661623.js",
    "revision": "ef0b5290070f2a2f6e9fe424f5313287"
  },
  {
    "url": "assets/js/11.ae627b6d.js",
    "revision": "504f3c03575d50673a5fe3f1cd4f2735"
  },
  {
    "url": "assets/js/12.b19e8911.js",
    "revision": "60b5bc12899b7090e76ea5acde5f1d54"
  },
  {
    "url": "assets/js/13.a065e8b5.js",
    "revision": "df0e28afaa3a1aa5b720e22e07a64cc0"
  },
  {
    "url": "assets/js/14.e7a7c253.js",
    "revision": "584526193c8cd7767bfa28ffacd13b3f"
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
    "url": "assets/js/22.680a3a14.js",
    "revision": "c18bb75f1f8c8b094b4e81a8f3168cbd"
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
    "url": "assets/js/25.8ca0c049.js",
    "revision": "5acd61acd96cf8a929082d98e80c6a0f"
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
    "url": "assets/js/3.3b36b699.js",
    "revision": "7ed279198d6fadff2daff5a1b0c1f8d0"
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
    "url": "assets/js/37.fac2b4be.js",
    "revision": "b9d40b6c09d3ca352b70711dd8c858b8"
  },
  {
    "url": "assets/js/38.e8d09be4.js",
    "revision": "bd1f3b6fbd6751edadeaf9a1939527c1"
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
    "url": "assets/js/40.c5cb53cc.js",
    "revision": "037fb78ae2b48d74bdf211071dccd535"
  },
  {
    "url": "assets/js/41.e13c831a.js",
    "revision": "6eda7d69b0ae44c8af975d6f990fb6ff"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.885dcc92.js",
    "revision": "da633394dc22a341a1176fd73b1e8191"
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
    "url": "assets/js/49.d295c7c6.js",
    "revision": "2d7c2cd0ac41c31dc317cbabfa490545"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.9a832101.js",
    "revision": "70452b856a970c023460c6a9f20cb0af"
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
    "url": "assets/js/53.cdb79bba.js",
    "revision": "a091c497bc44665057227eeb5e05e176"
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
    "url": "assets/js/6.9ffa83d3.js",
    "revision": "bc5d046420c3e4ddebd097d7904d612a"
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
    "url": "assets/js/66.9ea267ad.js",
    "revision": "370670b1d55763e7cabc1ffe0d35ddc4"
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
    "url": "assets/js/7.142000ff.js",
    "revision": "b7ae3f7f99b9f7451764a6d3d6c79ad5"
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
    "url": "assets/js/76.c006b218.js",
    "revision": "a0854a3cfb328af03e3f88c7d504ee66"
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
    "url": "assets/js/app.a5f7f12f.js",
    "revision": "25cafaf7a26a65491e97f981745885e7"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "9121f11c7e2c53645b9febb78f27c494"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "910878763f3387ee20a4c26d425d5000"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "b60d6b7e22d6bf6bc12a2971d8ba244d"
  },
  {
    "url": "fontend/index.html",
    "revision": "4d73c08ca25945006259c887ddb4a287"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "b31343ae4eacc939f3b4877c810a3312"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "84b2b45160b70f4ad8cef9067659a065"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "265a2d16eb796631c084d6df47b19286"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "a30db0b4ef22bb24ed97154465bc53a6"
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
    "revision": "67e6e78cfdf2da642d67ab94c756e0cf"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "d5a0f0dc968f59d74f74065cee0ac9e2"
  },
  {
    "url": "interview/css/index.html",
    "revision": "4edcd961a773c774662b1b82a6eb11e8"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "5a43b6fb7749c21f4309074ac051689b"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "c23584e302d358eb9db5d1979ceb86a0"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "e42f5cee0fc1bb982c05ee65bec1eb58"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "74dd9793b0f955922d6bc44dbd253e34"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "16d9beeb8737bcf534bcfd86ed247b0c"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "954e9ec44d2985537dc058368dcb7d7a"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "eda3cac914bb96981b47b2ceebd13b50"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "6c23bde9ad749f80270edc8b65ac2fed"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "d921be9c53c3b991a63dea4257311ce0"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "6f4b8f5e4c740feddfaaaf6e4e2c89a8"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "82482f5cae7f3274a9613447b67dbb67"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "31f60ef57a598c814cd921a62dc893be"
  },
  {
    "url": "interview/html/index.html",
    "revision": "786f0bb9010beaffe8a370bc010d2d0e"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "82a71e8a0a62f8366964b6b172c5e337"
  },
  {
    "url": "interview/http/index.html",
    "revision": "85abd315ad8a3a890c128ab5686d0c45"
  },
  {
    "url": "interview/index.html",
    "revision": "443c0a6936d4e4fc626f7d2e49094504"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "d9c2d0a90e32450067366bc8b9e1f1c4"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "d31da07fd0aa7fb26056f4281457ad72"
  },
  {
    "url": "interview/js/index.html",
    "revision": "b3d03c2871619ae495c252598e21c467"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "fa84bcd72da4dc4c2409b49ad4ab54c8"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "069ef43db82d94866a55240a50451c53"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "27d6b0242c906ff29e17bda35cff642a"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "5b82bafa06ad1463cc799249c54b0296"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "c30e870bda857a10c15bfc9903a01697"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "ee4f6ae3755bab91b75433ebbf7d2fff"
  },
  {
    "url": "interview/node/index.html",
    "revision": "bb75c11e3b9cb3b10f60a48977d792d6"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "2b6a21be065c00049cf3b687006f22bd"
  },
  {
    "url": "interview/react/index.html",
    "revision": "fe9f5597d390e6be6c375d71d57d97c0"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "ad1b3022d49769bee039d75404651916"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "1e9aad5b3492f8a8eb30c84e080b8fc5"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "15997794f29ac5b03f6af69acc862d51"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "adaaefb7b41aa4df5e3e063015828eae"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "89b4274a6e26e70d591dd4c3487ac5f7"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "f115ecce60ec89078b4be188098bac1b"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "ba1e75e648867499b304bbf018c88aeb"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "21b94b95481d6e37c5ed3099cb580258"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "91675dedb7ec456d6ea80ef4a1574e1e"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "aaf1b490769504f44c348eef06d8cab7"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "1d61edcd2226410b9739232271c4f612"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "0bb52bb1fcc8615670ed82b1d38e7cf2"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "757c7b633009ef8d99dd7b5741a8944a"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "9061c748561a97fe4d0ba2735e517619"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "34d756625927fb00af6142409c3f60ea"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "b32b61aeb1fb9dac7e1e45aa4d721623"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "020f085af4d2f8270db6a4072ebe5970"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "93afe82f1a7dda19dd462a3151a0f411"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "53078322545bcd629fd9e387fae4f4e5"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "b5b0dc91c7bc7294f8e6de37a24a7dd5"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "633b6df7519ad9649eb005365564c9ef"
  },
  {
    "url": "math/index.html",
    "revision": "3b956944e6f1bfd86c3a857b8e013699"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "63d87ae94a946ebce545c83650911ac1"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "3d20ef90aeb342d18dbae8e89fd5f2c9"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "6feeb36691ee4cb02e9c2f438cf4bc51"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "e856aed7ca6f04a111ab6c004077fba9"
  },
  {
    "url": "math/low/index.html",
    "revision": "6d004e2b8252592ed5f1f826bf38627b"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "2a09065783ada1566cb77330aac23fa0"
  },
  {
    "url": "math/mid/index.html",
    "revision": "7ef98c0ef2eceac18325de293ad8adc3"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "69bc428ec06a9482ea10c46679075c64"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "cb34c8317c85bb14dc56313f7d69c846"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "b9ec12b345602d3a4bb7dba9d188edcc"
  },
  {
    "url": "wechat/index.html",
    "revision": "fca42ee3db1a08360c7714305eff2e1f"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "fd4f197feb38017e9471ca4465bf7cc7"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "87f27c768474a945e37598067429e455"
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
