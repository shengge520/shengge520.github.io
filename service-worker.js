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
    "revision": "bb3c7ea5df377ffc92a74b9e06708318"
  },
  {
    "url": "about/about.html",
    "revision": "72364c9a04fa9c296568939597fc5102"
  },
  {
    "url": "about/index.html",
    "revision": "1941898b3916fc87648fc6d73e44e5ff"
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
    "url": "assets/js/10.7e661623.js",
    "revision": "ef0b5290070f2a2f6e9fe424f5313287"
  },
  {
    "url": "assets/js/11.7b2991bc.js",
    "revision": "83443167d54383f1b75f8fdd1de92307"
  },
  {
    "url": "assets/js/12.374f5b55.js",
    "revision": "f2744c98ec26b7a6abc41a16234fab1f"
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
    "url": "assets/js/3.f9d6563f.js",
    "revision": "fd1f7f82270617397c69bb9a30eab6a4"
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
    "url": "assets/js/37.038ff15e.js",
    "revision": "8035d662d3fdd1247346db4458eae6f3"
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
    "url": "assets/js/43.d50421ad.js",
    "revision": "ed6ddf2706c2fa224920ddfe82ec930c"
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
    "url": "assets/js/53.7c67aace.js",
    "revision": "ca9abb2187daeb9997d77f3dba000ac1"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.138b5f4f.js",
    "revision": "d5ef4635c01e21c1e5889f4b06b86583"
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
    "url": "assets/js/app.2e5ec88a.js",
    "revision": "78c1b21ef3a3dcf66eb067b9cb884793"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "90796c537068333b6ef552374ed87b80"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "1216c6994a19329306aa7e3d28c9621f"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "600fa6a34e960039b8129be17ef470be"
  },
  {
    "url": "fontend/index.html",
    "revision": "463fc79cf50b342a3b0a563a34227f94"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "2b13ebf8c4a74df98537bb307c6d4ee4"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "69f6196bb966c54827994419c59e480e"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "7ad0fe4d0c0e0b020d23b4202a89e5e2"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "be60399c5dfb22cadb9a77e4f852d1c6"
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
    "revision": "2cbf19068e2c1d6997e448a360f042fa"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "c820c4fc312f61d7d06dd1325bddc802"
  },
  {
    "url": "interview/css/index.html",
    "revision": "0e7dfb9c8b7406c3d0c73b54e8d0edb9"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "ebbf4b0cdd06607ab246f1affd8c6276"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "c9218514f8555ff531584a615293038a"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "0e34b88bf068993d8681d3aa86a44a86"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "48a5df43bc1313a47b767f0c4a549c8a"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "0205559e0750d123bd2b65a0c89463e2"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "00897dee4f08bed9d74f31f4ee2b30a9"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "7c6878ab80f20d6d1e1d0047ca2d12e6"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "3896c81bf1c48d521604533f0814145a"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "2fb4132ecea84883d41c16629300faa4"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "2308cbe7bd74e3354cd886fbfde99628"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "fb430e47db166ed2294b4b1a2df82306"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "29d27189b63db681d75e343a25a95372"
  },
  {
    "url": "interview/html/index.html",
    "revision": "38ef6b61c9aeb77f4228a4df75c23a32"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "bb2970519901a8afc2e9a47a1d232d32"
  },
  {
    "url": "interview/http/index.html",
    "revision": "7254de44652680561f79edd7dfb08b6d"
  },
  {
    "url": "interview/index.html",
    "revision": "322e51d864667393d96b9b49705c77dc"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "0c171ac016751e2dfaf2fac45963f300"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "ad635b90404d5a1901541b843fc11ef0"
  },
  {
    "url": "interview/js/index.html",
    "revision": "2ba1a426a25844e1a860223de27b9a10"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "50d20d3dcbbf568c1222a4b8b054eb67"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "97b84207d1432ab29eacd1078094c1b2"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "313f469317dfee1141be6fdbb5dcda64"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "5eeaeee45ba1be540d61860c91f044c6"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "6a0a56627b9d6ad0e8551067c91fade7"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "d5071d616c61f9598a4ebe6ceffbc415"
  },
  {
    "url": "interview/node/index.html",
    "revision": "1f68783bab2caee6b93d17d210554332"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "01ed2c091ac3e8002cb10d3ae16b4d96"
  },
  {
    "url": "interview/react/index.html",
    "revision": "d0f935f0b4a68f67fe6e6742ce34e5bd"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "bfd67a2a8243fb5738df2b8ede125610"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "09e3f3102dc8d756ef424966a3f3017d"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "03159d539644e860d02680a58bb547eb"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "a00dca55b0d699538cd9e20e052f6b7a"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "1c83302d282830ec0ce1babef308ec49"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "7800e3b263ebd5d4f330c767e0950f8b"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "ac8c86da099e94aa5914ccb3021d6102"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "4fba3e789a9010ff1dd31633608ea79d"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "0c3d4d9ece11a63a36e54a05320f153e"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "942d2d65708a4efc1bf49fbd53f31635"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "b457081260780c9c79c784e6b4e2abf4"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "e78dd45ee103b89b575616b98a907652"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "7da23cc359aee6b39570a34507ce69bb"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "5f49c1b0b4c3e3bac3f3e5bbf38fe0a9"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "d07c4c4e6752e0825b03d1ea251134fb"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "a22ceed30a21d623615b5376a75dcc0b"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "1f01c674bfbc37be2436d0ccc5de5e96"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "79ecba0d787ec3e36db882d9ac9b7d68"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "3be645eb0ed9b769038aa4b44fed9a84"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "f0ef3e13fe24c31c0aa24df57030bcde"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "fc96902e563693545f676b5b80f3bebb"
  },
  {
    "url": "math/index.html",
    "revision": "315c388f7c635efd16e36f912de0471a"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "764ebdefbf07dd56056c9b2e79cdcd80"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "2d1680cdbfbec717c937fdd1f2b3da5e"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "3b23d3c90b4e81de91e83b08af8c4536"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "29e4636459f4be33e315daa0231e3263"
  },
  {
    "url": "math/low/index.html",
    "revision": "a368001596588c53124f00f49355cfc3"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "49240c7ae377d73c107991c29aac9b39"
  },
  {
    "url": "math/mid/index.html",
    "revision": "525eb849cb19b7cdf2859101b4a1fbf0"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "80bb4f4f0e03618d8a2ce8506a398fc7"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "8931f3177439b8f9b339497c67cb442b"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "cedc7cc33d2c1e0ab98d0a324f5df89e"
  },
  {
    "url": "wechat/index.html",
    "revision": "81532566b9ec1ff01177d054e2d4c80c"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "4c617c63d038c2b2969804e88b44099b"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "0a4a14caa986fae25eeeb81f5296a59b"
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
