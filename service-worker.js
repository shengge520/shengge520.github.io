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
    "revision": "90eeb642a509de604fda32579cf263cf"
  },
  {
    "url": "about/about.html",
    "revision": "a3b55989846e91b020d6ef49d0873724"
  },
  {
    "url": "about/index.html",
    "revision": "0618df162735027853349e97bf2e6358"
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
    "url": "assets/js/15.4268ced1.js",
    "revision": "4071fbc9182549b9b950989efb347569"
  },
  {
    "url": "assets/js/16.b6dbb589.js",
    "revision": "9269da30cecb63e0eaa561db4f1ec954"
  },
  {
    "url": "assets/js/17.22de38b4.js",
    "revision": "204429431c1ff4f316de831ff289ecb1"
  },
  {
    "url": "assets/js/18.2a484c73.js",
    "revision": "42412532c89e995d6ed12bb682b77255"
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
    "url": "assets/js/3.215009e4.js",
    "revision": "cd4cf1f151fc3aa3b9cd03d7ad9587c9"
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
    "url": "assets/js/37.8f304ff3.js",
    "revision": "854e67ab89b50e3dec13d820c276646e"
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
    "url": "assets/js/43.fe336aa2.js",
    "revision": "adc30af17a5a87771446733df383c1df"
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
    "url": "assets/js/47.836ae899.js",
    "revision": "01f38b12031180cbb1332bf952c905cd"
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
    "url": "assets/js/66.48657363.js",
    "revision": "34ac68ce87be6dfa4262484137cf91de"
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
    "url": "assets/js/app.623707ca.js",
    "revision": "951a8ac6c27cf78eaaef7904c070c935"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "e533977cff6ba3de078cae5bca70e5ef"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "1596bcba69e190dccc0b5522eb07aba7"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "793489768fa1af18e574d3a4d4e2ed20"
  },
  {
    "url": "fontend/index.html",
    "revision": "0721510b2f2ef33bf45c38a3342d805c"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "749c9e9664c61492f7e41bac7bc099b7"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "f795b1d18cb261a7529fb9470ca4bec3"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "cefb19b6d39f06e0125bf1bb7e798117"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "0d380f3569b3c183f21f275ea3ea775f"
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
    "revision": "f7c428586f42aa80c4d0bc28d07f84d3"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "94cd9da20673333cbcfacf405a564461"
  },
  {
    "url": "interview/css/index.html",
    "revision": "e1473c69db2475fcd73b0fbecd0d4a53"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "92d0cc142247573c9c52afb6d59ce1ce"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "e5c0c0a630b87af819cea9861ccff6ff"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "cd20520d94e002287916557426ca2440"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "8bb5dc1841bd062353b8d3fdfc5b06cd"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "cb0d1a1335cfcf60f03f206a68f7e06a"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "3bd5be7cdee9eaaed1c50aec308fd661"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "c0eabda7dfae00c6c9494fb2ad07fe46"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "38e4c4a2137e9de0d45b0c6569d287da"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "3852126f570719003a4ff0400eb728ee"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "3f463930208af01801703b0de58a7b65"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "a972f8519dce9a4528b696f9258cfcb2"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "4ba50e941228d0b7b104c9be992aabc8"
  },
  {
    "url": "interview/html/index.html",
    "revision": "973ec7a27c7c3bfa1c404bfd49ff689c"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "f4b10de1bb1ebd885f4a66bb829923b3"
  },
  {
    "url": "interview/http/index.html",
    "revision": "a1c70b3d2c45865b43622e5cd63af0ad"
  },
  {
    "url": "interview/index.html",
    "revision": "ad3677ef000bf0ce478c47868bb1d1cc"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "c7eecdfb86d7bb41e31c5a692510180c"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "e5b1e2e665041e70ea4450c94dbe6c3c"
  },
  {
    "url": "interview/js/index.html",
    "revision": "c022d8bd6f456e13a29663243408d0f9"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "b4c6c8e3988b1544863d67f81cebd8a0"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "6ee8943f16a53d174867df898150aee3"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "70d0916fa27bda4fb349dc824b624093"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "d108edbd7370b4e274ee5798f5fa3b8a"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "3f3a978bb15cbb47dc8f7a4b0034a8ef"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "55d2f20484b29339c8307d896e6594f7"
  },
  {
    "url": "interview/node/index.html",
    "revision": "a383820c08fd8e55dd8bd60fe45db0c2"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "8fb19c6a65b4a4ead74e08b7b5b523e0"
  },
  {
    "url": "interview/react/index.html",
    "revision": "83b9739032aa90d49c4860779c807da2"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "4dc16915f53ef528e1edc39a2b736023"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "3b5fb207fe05868c1403d434ac34a619"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "a7337fde8be635b6b2043ceb5e7213ec"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "bcf65c23b1f521807c625d890755d7ce"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "185bd25719928229ac39c6fbe0b6552e"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "a45dec606229aa137cae5a1d48960a30"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "b1fbcd6cb32e704ce274fb2d004cf068"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "bdb1badeb32410f04cb9c0e828c5ad21"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "9848dcffbb321b1c11bb92055a678fee"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "c7381bc476b86fe0c9cf525b469bfe5f"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "172173eca2fd1e212e7df2a943d83525"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "96bfb0e018b1cab08d382b040314beb6"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "b2e102b75c64bf7b806b2dead7a73a52"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "d97f75c2233bd487436614a0d19fab16"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "1b5f9fe7760912a3b94decf6890e7068"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "5ca8b153363216bbfa7a8927bab6fc46"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "51090acc3d07878de3832400d537551a"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "7cbe8ec9e049913e438cbcd73933f227"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "ae346a484d6bc77d79e9a274823ab51d"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "f99a0f9ab3920cc5e4d3367b47ab4395"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "76eca44c78aa1fa32521d914216a81e1"
  },
  {
    "url": "math/index.html",
    "revision": "8eebcaafcf34bfddaffb3569fc6dcab3"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "01a54361732cc6e04043144905a0b2a5"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "179911a4c7c939fdbffa13d2c50313cb"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "40e2d38bb5be1e8b9a8ea444e4339bec"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "1ab43cd175b6213dda8807a99a192cee"
  },
  {
    "url": "math/low/index.html",
    "revision": "8be748524302ae817d63a2051e3c955b"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "f6444425cff8c5dc1b500c5df8601f7b"
  },
  {
    "url": "math/mid/index.html",
    "revision": "a0c32ce2a1b1b74f58e1f281ecaed88a"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "25868ee0d7d0861db77b9be962e61273"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "3e4b337236ff638ac7fc2ba86c025280"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "d6347769a315d3ef5d35cdb1eea1c010"
  },
  {
    "url": "wechat/index.html",
    "revision": "54ac5120fdb168afde03f2eb0244d898"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "e5f1c1782ab70873936893bb5c250a19"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "de5595e1beff88fdd1d47c81764c5d14"
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
