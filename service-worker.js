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
    "revision": "53e11aeb10a0fb0b24c5d3845c8ce882"
  },
  {
    "url": "about/about.html",
    "revision": "463cc92a099ccce995626ddc98302e27"
  },
  {
    "url": "about/index.html",
    "revision": "c2d654d1e959031cb6fcce580b360d6c"
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
    "url": "assets/js/13.a065e8b5.js",
    "revision": "df0e28afaa3a1aa5b720e22e07a64cc0"
  },
  {
    "url": "assets/js/14.aa32187d.js",
    "revision": "2082877bffbe524e399de6ddc30fef9f"
  },
  {
    "url": "assets/js/15.b9c653f5.js",
    "revision": "0339a86f6047e37f7e21ef4ff31a1a97"
  },
  {
    "url": "assets/js/16.c1f4a4b9.js",
    "revision": "5f6245a272d5822e85ed3cb3457cf1ed"
  },
  {
    "url": "assets/js/17.06b829e2.js",
    "revision": "b43a4b88c50e23ab005938c13bc8d17d"
  },
  {
    "url": "assets/js/18.e71c274d.js",
    "revision": "444ce503b8c289822ba8099d72df1ec3"
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
    "url": "assets/js/49.48ac4c58.js",
    "revision": "ab76400f909def291d2fc0b1b122f623"
  },
  {
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.eafdddfc.js",
    "revision": "e3e4d88288e81b00b960def89b26a4e7"
  },
  {
    "url": "assets/js/51.d342db47.js",
    "revision": "b774a04728118eb6831b6aa8c61df88f"
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
    "url": "assets/js/56.3b108c5c.js",
    "revision": "eba9845032c9ee25549996837cca7fd0"
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
    "url": "assets/js/9.26b9afc4.js",
    "revision": "238b8ff9cd5836ee3e56c5532667751e"
  },
  {
    "url": "assets/js/app.41ceaf27.js",
    "revision": "620f7fcfc65f279c4d4eee90823af4ef"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "e365404ca909bfbfbcc54da2b4b17f82"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "a0ec1eb07cb581e79e3226c92964574e"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "5f2ce279b005fb7486e63cb7aa138a4e"
  },
  {
    "url": "fontend/index.html",
    "revision": "a2a3011126ec94b99bb58225c57c5cc7"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "3c570ad74dcc837e0e82c861a82bad76"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "9a2ec9f90f7b89bfecf6c5473389a0ff"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "262fc43e86a492534590c3c6d08490cd"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "7d9e8aa244fc0c5454af596836fd29ef"
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
    "revision": "75412fe3bc6414c53ba4eae8899f901c"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "a4d2c2df96f415f18e646d4ed03f67fb"
  },
  {
    "url": "interview/css/index.html",
    "revision": "d3308d49032d27b9891a062b46284160"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "0e874a350ee643a834c46fca289d71da"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "c9ed9003c1f401221b51e90c08df6d82"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "0f2c002da34817734efca0c2ed369da9"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "bd85139dd17a63c54d7c4169c0c587d4"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "1d4968da6410f37af13f39932eb49647"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "89361b99ff1ad612031463a444bef896"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "5a957a7a50f8b6001e3d5a4a088d6b54"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "47bcebb32709f7edbc6ec6b016ee34b1"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "6a44f9505c125d3098331a9cd6140406"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "86f05f1f7196f5bfe0cb438c55257768"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "e995c39cd463513fc3c0a1f93d61675b"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "84230bea7f8f3f30c2deac7380ff4cba"
  },
  {
    "url": "interview/html/index.html",
    "revision": "d28442922de9773860303d6d28d8729b"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "dece09a542ada69c8f2ac88934a44f3c"
  },
  {
    "url": "interview/http/index.html",
    "revision": "538a5a19915ae617206ca782cf0e096d"
  },
  {
    "url": "interview/index.html",
    "revision": "4fe79b37240aafb49e64b9b8879cefbc"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "f012ae1fb0553d31280f050a167dbc35"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "8567a759b8c9bcd7ea41c9c9532b6dc7"
  },
  {
    "url": "interview/js/index.html",
    "revision": "87cee10ac08a31f172dc3cfaea41fd3b"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "a06ab83cebcd54b369fee934b9897272"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "109b6104f17ad7422bbdb9705bd2931a"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "54490c94fb0f01bd284e5be8a900816d"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "e76a1db571450ec334376233ea8fdbc2"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "b7fd057202d1b634d699bb0450b8b3f5"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "ccded5202c963a9a8f93f8dd34199d75"
  },
  {
    "url": "interview/node/index.html",
    "revision": "4ea85243c51d9a1f98b0f482d0f617e7"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "10c26ba74db846af3f397ece04fb53ab"
  },
  {
    "url": "interview/react/index.html",
    "revision": "669ea3929c359497d431ee6d130facc8"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "0b6af628429d0b107212d9e6c328136d"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "2ce5dabed5dc86b6c05ba56708ba7cca"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "ed0dc8c3eb34a62bce6206d24de936f2"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "3d5e262c8bd769a03d47110024d19902"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "d84f5903cf878576e94000a5be4d3907"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "02434bafa438fa93bb665ca98d88660c"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "aa169986b83f9e3ea1d7838abe98658b"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "6f5ef6e83a1cca827aafa664ccb59ac3"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "86a02b82182201da802e5cbe67bf5c22"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "084d09af18bbb55c5103f0181f5634f7"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "661f988e8a159f1a751e574a3f44403d"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "24d92e5a6e4f1beb1aa1bdf55bebcf59"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "cb0d3fad5a1b6340d546bfbfe7875d35"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "50e9b62f0ffdd3a785ad2c5dd2f6ca94"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "786a0b6aa71d10ce0656c0ac9220c7aa"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "343f31d95d088f2ded806e0a48ab0b76"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "44bccfc37c1a93762ff849c067a5db71"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "b9c9f95d7c42cdc674d225e93e5c968e"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "e0b21c5fb6af5e3524e7a57491b97259"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "37fafe8de0cf232bc71360f651e59558"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "9260db230432749dcba4f5b5a77c3a13"
  },
  {
    "url": "math/index.html",
    "revision": "84e3354f036752201c66b83f781cbef4"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "4cb9211cb8b6ba46e630feb681fc3e93"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "1a0fe842ba6249d546d55328aeaa253f"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "11d1eeb46b313e9c9da79f6e6e20b74e"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "2ac31d43a88554e503ab2c40510661f1"
  },
  {
    "url": "math/low/index.html",
    "revision": "3267eaf3015615ab5a2565c523736669"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "4463ef0c4997a7498578670a0e6f1e37"
  },
  {
    "url": "math/mid/index.html",
    "revision": "e0fa3f6f53da5631b6a5be4a8fd08158"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "659ac285f7b1923b80cba232ad297e0b"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "696fbee1bd2ebac6c5c1f08fede37ff7"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "5bb9785b5fb67ff673f5c04d914c3d84"
  },
  {
    "url": "wechat/index.html",
    "revision": "b296941c0d0e129a6986b63cc60d3d15"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "2a041174f9e2e244c166a81daf86820b"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "6854d724f996f52f2a57507083fc0e63"
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
