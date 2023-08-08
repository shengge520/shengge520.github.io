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
    "revision": "7d48afa819a7522d2f02378160125d08"
  },
  {
    "url": "about/about.html",
    "revision": "ce2b761f840ab51c9f96064c19d49053"
  },
  {
    "url": "about/index.html",
    "revision": "fcd43efe34a235d0b1992a756fa7d45c"
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
    "url": "assets/js/11.7b2991bc.js",
    "revision": "83443167d54383f1b75f8fdd1de92307"
  },
  {
    "url": "assets/js/12.b885fc62.js",
    "revision": "82c183eba44592637880424faf2ebb84"
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
    "url": "assets/js/22.1a88ac85.js",
    "revision": "51e1a790c4a65cc5cc3eb282a239fd9b"
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
    "url": "assets/js/35.00ef88da.js",
    "revision": "6ca1aaffedd83147b859d1e8f25bd68e"
  },
  {
    "url": "assets/js/36.0b6ba480.js",
    "revision": "429b73e9f3bd8898453cfe112f161031"
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
    "url": "assets/js/49.d295c7c6.js",
    "revision": "2d7c2cd0ac41c31dc317cbabfa490545"
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
    "url": "assets/js/59.d62ce173.js",
    "revision": "86fcc7a879c085d73ee2ab2e5adf3c44"
  },
  {
    "url": "assets/js/6.9ffa83d3.js",
    "revision": "bc5d046420c3e4ddebd097d7904d612a"
  },
  {
    "url": "assets/js/60.8d4790bc.js",
    "revision": "c73e0a1f6c9e87aada6db552a594b917"
  },
  {
    "url": "assets/js/61.4f8c2498.js",
    "revision": "a85c1631631e71de81d26626c7de3bae"
  },
  {
    "url": "assets/js/62.8d39ce0a.js",
    "revision": "5630e48af354d4a0424eee674a4858ac"
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
    "url": "assets/js/9.f49375b8.js",
    "revision": "25d6cef577a65e975f3a8869a2491820"
  },
  {
    "url": "assets/js/app.5c7787a4.js",
    "revision": "fdfca90a8d7358ad924d5557014a5c79"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "005c21322358816a884cb632cfecdbe5"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "b45a119ad8a3823fc549cea7d066ac02"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "7f76c80c4eafc7f7fda70fc0630ee3cf"
  },
  {
    "url": "fontend/index.html",
    "revision": "9024021a2487a5ea295cc40fa102a39e"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "50e7de33d4b5ed40811e6cf84dabe0d5"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "89e4aaf866988f93946bcdadc2759b87"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "edd2782cdcbc3be17cce696c114f6c0e"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "5a89623dadb506aa6601ec9d2205011b"
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
    "revision": "c4cfc6001abee9447d66264ec59cda11"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "cc0f2cbfc4ef9785f44d92528154369d"
  },
  {
    "url": "interview/css/index.html",
    "revision": "dbb1884183255e3f1feb3d1ee0e5a100"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "d2ddf3e1f5d12f70848d68885da7c09f"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "8a99425a8ee4b0d4db0175356b71827d"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "6a32b6caadb77458339aa2e6fa7fece1"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "e90153d33ed4450a551d53185c7a2638"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "f7b8e5be93aae676d34303b242970b94"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "f3a8c1b2d046509781aef3ec4be1dcbe"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "443c82efb80cc97de265338739cc53b5"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "59bf3081bf9f2780b46e7b9779a4eb1a"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "da98e65bb0ee812f773719b11c1851bf"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "d61e9fc00319d8e34b69d1a3cd608dca"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "01c298c97a007d415f28fd5c3a40f4c9"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "0b500ab560e853683735c06d9ec497f5"
  },
  {
    "url": "interview/html/index.html",
    "revision": "44f8b86ef7761d42a0dec6a212bc36d6"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "285bc2f425a5b08e6960f9c040b83f54"
  },
  {
    "url": "interview/http/index.html",
    "revision": "880f06aa0a66ee5926c5b42c1be1bd22"
  },
  {
    "url": "interview/index.html",
    "revision": "376312acff35bd70afcfef7e93b8ed3c"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "e027ee584b83d51d82d2d1f537a19212"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "6ad19e9aa57c0a77b1e2cdb1c2e28e36"
  },
  {
    "url": "interview/js/index.html",
    "revision": "3a36ec5463cc19497a78e93cbf4da058"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "55684a6a926ef401f55176ce6af07021"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "4129676314f01ebb91a256f1094895eb"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "6f67c5753d8717c22885970aa9ffdfd0"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "93e588e61a95ddc594dd1871c5089d9c"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "1230d41bbb73cf5fa1204ab6a2c8cf5d"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "ce39696d65c801b9b86b033853ea6be6"
  },
  {
    "url": "interview/node/index.html",
    "revision": "b5b5c76c8c6d8887d2d3ff5bb763a76f"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "190843404207268dd5d132e348b9896f"
  },
  {
    "url": "interview/react/index.html",
    "revision": "ee3683549ccc4d0c3b513c065e8e46df"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "0d8a10fcffdb7c8e0ab35eb59ea93966"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "1afaa8a1c4b4695c528629a61ec33e35"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "70d0c1ecc023eb00f6451bb2bb0e2e38"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "d67cce790218595a8504dad14957f187"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "762d245d2fca01d839f9d4aeb31c4782"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "05ff604229664f66388ee8e885d5e06b"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "74931cf903e4152749ab56d07182456d"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "8c2ee72d2cf3960f3e775b11d2325cab"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "54eea904aa3fe211b1bd5bb291953cae"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "a12e502c69913a12a7fa7d3b44712758"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "1f68745c101f21f32faf59fd47f0e376"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "45fda47dab5351a77ad289cf4bfc3ca8"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "9291b163ed6a16538c9498a208978695"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "b38fe4e4c29418faf8f7f289e4788c4a"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "3322c97ef67e8b1cdece8e82278e0bcc"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "1431e1a0f3063e77e9f6ea77cb4c29df"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "eafbe59ebaab8b625fab0e01b4e7d957"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "b711048f4b8a5a2cf7cceffe5d4e6f97"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "98ecf8ead49dab2549b7fab353d57428"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "6c4239e327a051c02ecf03e5f18e4e41"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "ad93363680ff3e67c1994349a9288d1f"
  },
  {
    "url": "math/index.html",
    "revision": "18ce068c06b8c58c78cefba2e4c41c96"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "9f337adee00732f20d5a1678ef4be7f6"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "0c0944ab152a7bb410920acbfb317dc3"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "dcb75d14ae18b7871dd0326cd84898bf"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "1d0ba7358e4900074cfb199d1965dd7e"
  },
  {
    "url": "math/low/index.html",
    "revision": "5e20cd5ccb79415ea2bbfb712c019bf4"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "f4d5c95efd10dcea3b2e8788a8d0e3d4"
  },
  {
    "url": "math/mid/index.html",
    "revision": "0403017dec23b5f1102512e192b7ec73"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "2b913448b2f3779569d4575031b3a0f6"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "e33cb34414e029b47a00bf4c6338b367"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "f9d91c135029dcd0c721442e308bcb64"
  },
  {
    "url": "wechat/index.html",
    "revision": "c79ebce55600baefa1bf6728290346be"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "c9edc3cb9394c3dabd235d051ad4ae0d"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "a2ca8a17f9b765bca0f3786dd22f20d1"
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
