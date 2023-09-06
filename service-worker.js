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
    "revision": "113086251990cd8eb5032ed733884552"
  },
  {
    "url": "about/about.html",
    "revision": "4679679c5fb37706d6e82e8e13285f82"
  },
  {
    "url": "about/index.html",
    "revision": "1af3bfbd653aad2f0cb4fc492973d57f"
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
    "url": "assets/js/15.6e67d48b.js",
    "revision": "b1b0bfbe8da490ef7a8d9c888774fdcc"
  },
  {
    "url": "assets/js/16.746f7e16.js",
    "revision": "d99ffe1df70e0eafc2193b6c7c128647"
  },
  {
    "url": "assets/js/17.200264fa.js",
    "revision": "a4de1b4fec261fbd58df26ee9a5ba503"
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
    "url": "assets/js/3.997dfda8.js",
    "revision": "e99e4a123d98a95ed398ea32cf6706b6"
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
    "url": "assets/js/37.d99f6c6a.js",
    "revision": "02abf6103245a82f979db593b50e04a4"
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
    "url": "assets/js/43.74aae4b2.js",
    "revision": "5302653c5151b559ef1bfd3cf18e071a"
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
    "url": "assets/js/49.a5fe8b55.js",
    "revision": "60dcb6b961dddfd1c01adbbd6ed8d371"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
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
    "url": "assets/js/55.6dcc4c45.js",
    "revision": "078b06888a853dc9ba55fc83ab4b178e"
  },
  {
    "url": "assets/js/56.700953e8.js",
    "revision": "06e9fb67eab3f4d4636a3330dc1b8e8d"
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
    "url": "assets/js/66.70646fa8.js",
    "revision": "d2784820790e6a404c29f5242f5447f6"
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
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.1ab30571.js",
    "revision": "294d11b82ac9e9698b1f715ff2bb8294"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "39044fe78fc78e234d8ba8343a9b7734"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "ea0d289f2b3198a6832f41016ffdf2ae"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "70dbac8d6eeabd9902280816af8819b1"
  },
  {
    "url": "fontend/index.html",
    "revision": "85cc25ec2b97917a519f520a3e9fbe3b"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "490b9ad74b9b6fce58d700b7226a9cb2"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "ad602234e6d74957bbd157878b4c0e83"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "11109e04282fdebc1453040888a040f5"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "065e080f17d7ba2cae25fb82c545386b"
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
    "revision": "dd49f375d26c2821033490adcebd5548"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "e4a8c3e44a67658270cff64db3f7bf9c"
  },
  {
    "url": "interview/css/index.html",
    "revision": "faf40fa37875b3040cfc4088ac2411d1"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "2cbee3125077fb2129336e97869b2d1f"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "741c6d1b579526e4c455f00951282b66"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "737119166d10caf7ce644b2c94db9874"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "45819101b4f25298e6d75a7047830bb7"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "2054db1cf9da9ab62fb8919928e5f560"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "7e8fc93e0ffea87d55d990a9a987b473"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "8a2aa4899762d992c8aaf4ed3f54e73e"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "2ae66e60603a7aaa1fcd9823009d6d96"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "74d04ecc4374476f5d3cb31d91f366f4"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "e9dbf76d368c4cab3bfbf0a37fd1c7fc"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "53dc6ba8684f9220f709dc9ad94d4e2e"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "14f0c0d6bf174d05710b6d0f914fb09f"
  },
  {
    "url": "interview/html/index.html",
    "revision": "b1f3f234a63ae0c86ece6ca45d92d630"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "e6baced9d4f2fb642d1cad59d14f064b"
  },
  {
    "url": "interview/http/index.html",
    "revision": "53975c62f3d9624fdb50c8674d080efe"
  },
  {
    "url": "interview/index.html",
    "revision": "24c6cee86b881e0b09153413fcbffff6"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "07abe9a598f377848ea05ea7189639c1"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "6bd768e25675cd72c791a73f9e9dc461"
  },
  {
    "url": "interview/js/index.html",
    "revision": "4e972b72b878dfedb198b1b76c3ee70c"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "5da7af671643ff3bce26f632cc01342d"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "0f22737c08c0ef1684775d01d6e76e00"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "7a77e96ce66c400263f5ba10da683c5b"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "61d89a06b6dd0dce14564676a8baa8d1"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "94c47dc901087f1156cdac3c38b3bbf5"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "08700c4b71900784d37931db7b54c1d3"
  },
  {
    "url": "interview/node/index.html",
    "revision": "343adad806aee81151c37f8ef63ba2d9"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "a5aa86543effad003ebecae6407d21b0"
  },
  {
    "url": "interview/react/index.html",
    "revision": "74209b3ac0b7ae5140bb824f911e0fde"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "5d1e8ca0009da68ce34eeddec0553e0f"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "8aee18fbcb5e1156ac8004efe80d9780"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "8050aba8eced224140caa672d1846aa1"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "9b041595fe745bf4abe48abda2d913c3"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "a3dca5235252588192f58b30c659a703"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "35240f8d9399fa579a1ad392870307e8"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "8f8f10b206647b90dca71d669da11984"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "faa125c9071c2276c9d5619d1b276df7"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "6d8f483170bd1086cb57ca6b827e97ec"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "94442dc69fc2cb8d457492aa262c412c"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "8ae687bae5e075bef3489011f1eae251"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "b79393671aacfd7e76fbf197dc5fa341"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "f173805f2d21e0d6f47045d2ccaea667"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "1876ef79e6604c402fc0fa2e0a7aa84d"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "031171100de99baf75b67861467b494c"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "8fb4e73af923b981b19d051f2d1df032"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "73c3ebb1b0077eefb8fdd463121cd28d"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "50255408d80c37b3b5d1b1402a49164a"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "222a4c2b943ba7a7900eac726b036238"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "057471836b4d5caf04faf60eefacc512"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "c2fff3b78f912cb522734fe15803383a"
  },
  {
    "url": "math/index.html",
    "revision": "c99b5f50e7fea21c54dd3b7e5803e383"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "64fdaab70bfe98d5998d26ff6852c272"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "b89d420217f0e2e4c1516e85ef72b55a"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "95ac1e3856cbba2b8bff762abfccdeec"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "15eadbef0beaf18a0ae4874078643095"
  },
  {
    "url": "math/low/index.html",
    "revision": "6ce82dfe5d8ae37c62ce00923c12dd15"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "3da12b4c7bde4e9e076e734477d5e1f4"
  },
  {
    "url": "math/mid/index.html",
    "revision": "f5f8a2f4baa1b20eac0168293beae862"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "1741db9e1aac30e35419f7437b02fb7f"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "8717af232d8bae36b82bcd77005fa054"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "7155dde20f1773009e85f6dac1eff89c"
  },
  {
    "url": "wechat/index.html",
    "revision": "d15f64b6216b975476aaf7a7ad428b13"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "0fabf5b15f0f3d3a094d8959458b6a89"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "637a3e6d99845f1141de9684dc5e67b9"
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
