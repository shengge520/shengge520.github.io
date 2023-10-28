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
    "revision": "ee21c203cbe0e5dcb057665e57924ed2"
  },
  {
    "url": "about/about.html",
    "revision": "42d67ecd19e8620309ba67564eecc0bd"
  },
  {
    "url": "about/index.html",
    "revision": "899e54486517a746c6d68f35a01f194a"
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
    "url": "assets/js/22.41b716b7.js",
    "revision": "0fcd64367938fb9c9f5213f6d547370f"
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
    "url": "assets/js/25.220f8db0.js",
    "revision": "f4b2ed8b0aead1b55c302e48e351e46a"
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
    "url": "assets/js/3.196f56b8.js",
    "revision": "da0c04d6e30a76e5f54130b0c6b13cbb"
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
    "url": "assets/js/37.d077f015.js",
    "revision": "bd1c9deb0d39a627b70cac29c69717b9"
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
    "url": "assets/js/41.ec2e5e03.js",
    "revision": "36642adbc70806cf1c36bccf07b35953"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.00dba95e.js",
    "revision": "0e1209c11838b1d4299da6e12e9e45fd"
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
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.eafdddfc.js",
    "revision": "e3e4d88288e81b00b960def89b26a4e7"
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
    "url": "assets/js/66.261a0db3.js",
    "revision": "bce0a7c5f4b4782703a54773b60460b1"
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
    "url": "assets/js/9.e637ff2c.js",
    "revision": "a3f209e3189077eec02ae1e652d2508f"
  },
  {
    "url": "assets/js/app.dd6f45b4.js",
    "revision": "ad1af7defb62b9da4b2a82edd01f8161"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "d79e7ec14116a4c28f8a489d9ac7519a"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "3cff2099ae5d51d3fa714f2d706f1d37"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "d4e8092f1e755d2dde2e26fda5f722ac"
  },
  {
    "url": "fontend/index.html",
    "revision": "d8f3360999c8fbbc551bf8a4fc132064"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "4e703a950e160179ae1b4afdf32f4c4c"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "1219ab193483f9d3f3a5db4bb35d20e1"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "684a66534cd3cab3b9fb8741bb768fa1"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "e2e618dba81ca8ae20dd17956e4dac6c"
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
    "revision": "bcf7a050a13e0bf92f4b8c6af2f3dbf8"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "9befc84a8a4cecef71f1b1b474980b88"
  },
  {
    "url": "interview/css/index.html",
    "revision": "e7f7049b1d0379fbdb4f7c2b10a72c17"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "ea4bf6dc3d2be62320cbb0bd044c0079"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "8a05bfc155aeafbce96745fc78ea4a1a"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "5344d902becd737b762df82335ddfe0c"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "057157fecf2643b60078890e082f5862"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "29c68f14738d318eb4d4f20dffd4124a"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "07301edd37fbaad51d78c0abfbaeee45"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "8d8bc0a3bd8461ff887548b2ec6f9493"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "f193db5291e85acc9d48f2a5ed4f7f0b"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "55d859588240f6a0a9c7ed8a2dcb39f8"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "ccb6eb0fe6af4b221618905e07ad46eb"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "3450f2b689beeecbeb6ea9ce3a462dbe"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "f85f9fe577736266273f679494741a7b"
  },
  {
    "url": "interview/html/index.html",
    "revision": "37c517d7643c623b447a9624496fdc52"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "2d265f6d78f2dff6c35f34b237466303"
  },
  {
    "url": "interview/http/index.html",
    "revision": "9516c812958ba188e019b1bf9f6a0f73"
  },
  {
    "url": "interview/index.html",
    "revision": "8a2201bec3bf76670525af749d29bcb9"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "4adb99414317d662901b5fee7bd6cedf"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "49490c8a0b1ced5e8e7c75e2e5abb47e"
  },
  {
    "url": "interview/js/index.html",
    "revision": "1959071234a0acb14c199f199997aebb"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "2bc85a52f37e3eb16dbc81c6d4f16025"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "7d5cb48bd329819f56dfa51ab739d22f"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "91a8953b13c21ab4c5ee71d39b927638"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "52dac47c81170c947c5ebcb059de5460"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "c474d50e5d8eebc139a1c883758ce38f"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "4acc804d0140a48fcca5aa9b934990e5"
  },
  {
    "url": "interview/node/index.html",
    "revision": "65adbc48991a67947439c454cbae985d"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "02c3e13ae3e41fc7dab1a125819493cb"
  },
  {
    "url": "interview/react/index.html",
    "revision": "39b7b6367981096e74381fce3f7721bb"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "5fd096e29ec14a1c48a9a387f5b17f1a"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "40bc2407d7381705526ebfde94b8cffb"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "bbbd9a35124e9235f0355a1b0148adb9"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "b5a0a038f20fd7bd445a2adb594b72b3"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "97e631d61fc36948d57e3947d21f3f59"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "02bfffe57999bf86d054ef338fcbc6e1"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "493f3ed90f9260ce446c31f0cbbebce5"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "ad5c3981f96bdf29f89968f207de67b8"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "303c4aa45c483b452ff9164d0c9c4db9"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "7165fa8ca3c281fd0eb78774b42779dc"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "fddcd6b9b30c0a26d27b2d3213b09665"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "4efabbb497849ec11b91dc6d1370b0a5"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "d8992e460d9c3e84392e97d9708cb054"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "875ccdb752c802795dbdb84c17d78408"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "a474c901e05a9804c77403247499e342"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "983ddea98ee65660e39f0aa204c24872"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "f27adcd5cdd5b98b150f261ed79ce366"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "c348b2942b2fa78c926c62241d404221"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "d492375aa506108e9385e432db12206a"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "274eaa504d610f65735aec64a7ec8a22"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "a00168af9fbd97a976379b6a9fb10435"
  },
  {
    "url": "math/index.html",
    "revision": "97dcae43fae7a4268d835320801a2ea7"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "7f11a931a9100778fe112c9c0f54f67d"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "eaaab560f0c919ac370b200854a25160"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "c00363fe42055e7c12335969d7e3e471"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "6ed18cc1fc24a92a6aae681409d22f55"
  },
  {
    "url": "math/low/index.html",
    "revision": "c8f3ffa6f07a5b0f83f74ac950169760"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "c39ab37a6749f2555c597d9a35e75fbf"
  },
  {
    "url": "math/mid/index.html",
    "revision": "e6834b08091ad877f06c4cdddba5d4e9"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "0bc4f294c3ff93c4fb3a29e5609bbea5"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "591761c8636c2d8cec414408c6fa6809"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "1b65a014c155788af89391ef2b79a636"
  },
  {
    "url": "wechat/index.html",
    "revision": "f2606ca4a849825d76dc7c0724a31f75"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "503dcd8fca1180affc0b4c6e311329c5"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "fb933d3425596c40f5c75253e3dd3eee"
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
