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
    "revision": "5553314158a2c1e921fff1969f328336"
  },
  {
    "url": "about/about.html",
    "revision": "c7cdf614b9605e11bac4e7853c292da0"
  },
  {
    "url": "about/index.html",
    "revision": "7ed2f6809269c93e0b078f87a3c4c5a9"
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
    "url": "assets/js/10.9881de60.js",
    "revision": "0561179b24b549cc2fae973ab96d6e29"
  },
  {
    "url": "assets/js/11.b263e515.js",
    "revision": "f13693eaa48dcb26d124151902e7a929"
  },
  {
    "url": "assets/js/12.374f5b55.js",
    "revision": "f2744c98ec26b7a6abc41a16234fab1f"
  },
  {
    "url": "assets/js/13.651407fa.js",
    "revision": "e56a3308091833e5d02857c335547fe0"
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
    "url": "assets/js/3.555f9bd8.js",
    "revision": "ee93c69d8484aa253c5cd1e1c4b6331d"
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
    "url": "assets/js/37.742229fa.js",
    "revision": "70d2b801624638d747fa7514af59f581"
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
    "url": "assets/js/41.a28b901e.js",
    "revision": "63fdd8846209abb743d56c5cc34ec7e7"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.ca4d0254.js",
    "revision": "ed87eb0af6b9d898357c065271ff1a7a"
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
    "url": "assets/js/47.1cc27066.js",
    "revision": "4788d1a68e2570846baaafd267724cc8"
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
    "url": "assets/js/50.e7a6b10f.js",
    "revision": "101c19c48eac51517240352fdc31ae4f"
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
    "url": "assets/js/53.421aa832.js",
    "revision": "edc74860b79e46d940660bee686e0a2f"
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
    "url": "assets/js/9.d2969a5f.js",
    "revision": "f555415af3aa8c3dfe62f69768ccac68"
  },
  {
    "url": "assets/js/app.cbc11799.js",
    "revision": "f29f9bace962f848614b469d12fca102"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "67639253403d54b5fae7e9c835dc6768"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "a27a79577c4ad88ac39c3dc0643eed45"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "0846504d0034f96e1e721155d8e3f5c9"
  },
  {
    "url": "fontend/index.html",
    "revision": "ff2fdbab9cb2ee5a6f7da01dffc67df4"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "8e604b8fc8e5af489bb865a766c6eb10"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "7c83f57859b0952cf53bfada9925053f"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "cdc81c506fa6f1393d96893a5a72ffd4"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "1da0d0ad71a1ce909ce26be970c31ca8"
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
    "revision": "b0fc4a5e46afdb088e80c6318716b474"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "b62be6938839b8c5e3dedb504362f6d1"
  },
  {
    "url": "interview/css/index.html",
    "revision": "b12b41e0aae218fb06132f1a26cde422"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "69864cc5031ab61c6320e2e645f959a6"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "93dadb75a2a2040acf43522df0b54511"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "4aa558b1bb19a31bfe9e8c469ad07ae4"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "fd5fbf91aa1a49d7d0fd902566c365a0"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "7ec725c01e270ae86b47427312b823ad"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "7704d7d5ea348067270e5edf47d9b033"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "223b5f4b42648fcfb0d7b7c48779bfdd"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "bdffb57000671469543ec5f61f370181"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "2aacd1be34fd5806be51a0a3d1e318b6"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "6af02eb87ae9f05c170a75065af48b2f"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "74ed3b797c214661c3fe452407dfc06c"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "70e5980587e5642d2fe6f34d34ec8f04"
  },
  {
    "url": "interview/html/index.html",
    "revision": "e06d01b9f92aee2eeefdeaa9b5ec315d"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "d4e0acd760ad59b1b8bee9b38d9d6179"
  },
  {
    "url": "interview/http/index.html",
    "revision": "8449fbc6f366f8a2083b628d5810bc0a"
  },
  {
    "url": "interview/index.html",
    "revision": "9d828de9f4e91659da19b76ac885c50a"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "3e32f78a2eae16a9bc005ee61c9b1967"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "9c80a5b05d98bd28995046433ce03bf8"
  },
  {
    "url": "interview/js/index.html",
    "revision": "a8dc38c14adb05572e002dd0e80e4ce6"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "5224deae081193a0846e4f2472ccc1de"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "03e34176c322ff96126914e77643c927"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "b2fafd5ab5069f87fbca05d4643f9ace"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "2dd487aa78be55dd1a219601474686c0"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "a74ed68d2c98075a43fd267e5f94d772"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "1aecee8022ae88e5fc774075e6b76416"
  },
  {
    "url": "interview/node/index.html",
    "revision": "d3d897deddd9e00c0e608a15942ac422"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "ebc9484470967c0744ff493e60113d63"
  },
  {
    "url": "interview/react/index.html",
    "revision": "ada0f847c692a409e8f4d6d852f7e2b8"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "670f05de2a7c090cb9ef2bf0c332264e"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "451caad07d8b5b2abd0c4d41a5002886"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "319e961f0b504f714196a49d020d89af"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "47ee4dd0bf604640beb4da544e84d787"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "b7ab0c4c6401f1995e1bf4c3a08f7bdd"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "a93b15705b990a927d98e721aa0c0b45"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "66ae388ca72816d4ee3b8a055cae461d"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "71cc25d42292555ed86fa8c962595cfd"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "5d778b6a485fe4e3fae7f67dbed2e7c1"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "fa3561c7be8c524df248bdfd876943d8"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "26bbbcb7a2f7bda1d91046c2cbf039ad"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "9113b54e08f7b1b0c8c164787169bbdd"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "aa8693102882adc06fe445118e1da3f1"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "18019c351ccee692ec63247be43ee7f0"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "646505917f0b5aaaa5ea3a54b9f0964a"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "affbb4abaa0ba6f91e3a1090ab9f7109"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "1f2ea6c1bbdb9b77b4ed22a479f8f754"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "98bbbc00f80db4507c65963abd243cb2"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "ab21f92f9000759f5ff100c230ce640a"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "35efb4f4355af7131fcf31c5c6f98d1e"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "dbeae0fb8be61a5f8cd667fab886641f"
  },
  {
    "url": "math/index.html",
    "revision": "efb4b4359c8a06f5039f2475375068b6"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "c1a67bef520c96ea3f96afe85d55a37d"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "bddb1cf95e0451409e307b271fc5aaf6"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "86aaacc6aee601325de5d550819219cf"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "dd788f738f48ace0eff56e33896e063e"
  },
  {
    "url": "math/low/index.html",
    "revision": "dd4d86fc50dcea32e4a232aa004e55bf"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "b74dcebdafc1f331fd46d5be3cd7e36a"
  },
  {
    "url": "math/mid/index.html",
    "revision": "d6a7375387486157cbd0025e8df05ce6"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "6cfe00b4f5131ae4a1031375e13e7ddc"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "7f3536df2487d05ab8b1438da703ddfb"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "a194c2f53868974804f5f9b1aadd45c6"
  },
  {
    "url": "wechat/index.html",
    "revision": "0b81e085fbefffe16142afe3f9acd98d"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "05d72f4111e85a9bb16890ef62699fbd"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "2cd6194d26d42ee196344a46fa6d9b4b"
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
