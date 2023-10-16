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
    "revision": "e2468e7c04ae8568d9e8a5a8d2f623af"
  },
  {
    "url": "about/about.html",
    "revision": "261bdb00c300f546c8b0e1df6a77609a"
  },
  {
    "url": "about/index.html",
    "revision": "c312c8ab4d5b0ea7bf70b460aecb42be"
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
    "url": "assets/js/3.0097ae52.js",
    "revision": "2f27114d1210d6660e4fab5a333c69ab"
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
    "url": "assets/js/37.f4f76a2d.js",
    "revision": "38350022b531f45f41930265278ad8c9"
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
    "url": "assets/js/49.6a9dfcd5.js",
    "revision": "68e9c3683d243718256e92c65c971359"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.b89f28f9.js",
    "revision": "91413f55b707486abf313ada59df293f"
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
    "url": "assets/js/53.c6b1350c.js",
    "revision": "9fcd306ba3c05bfb4040948db42b9f15"
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
    "url": "assets/js/56.901177ef.js",
    "revision": "ba4dcdd5be504c0f351dcce0073f2ece"
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
    "url": "assets/js/app.f353ca98.js",
    "revision": "a185c952d474e9fe709f4e2fcea59977"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "6b1a2a9bf018ae747ae5a958394174aa"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "6427665ca6b0169f116a739897b34f9f"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "a44d3ba9166230e6c32eae664d4dd735"
  },
  {
    "url": "fontend/index.html",
    "revision": "9ca8ec91ee5a97200e0577f35599cb85"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "604374ae3152c5061b46bf4ae20e445b"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "6118a9dc35d3a6798ddd07ee622a5bff"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "e8146dbd04f4d11ee2dfeb80ee69d09d"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "ec81b9c003d49ef15d786991edbde221"
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
    "revision": "2fda8488824ad4f90ddb7398fea5a080"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "97a1e693fe98714f5548f5533d1ea9e4"
  },
  {
    "url": "interview/css/index.html",
    "revision": "ac811c74ba588cb454a4e15ba3b56b41"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "23a448976502618eef074294ce95ba92"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "07e68281df11e9718ab1e31dd29b0905"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "eb353548d5c499ad7877170bce4aae80"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "9f72346da9513ee54ed00b289903e353"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "880f65f2692103027d71c1b8d35c0d66"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "25b1e07b72263bdd4479b9064f518f1d"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "1a6129322399b8ba864175deafa76127"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "f47c8bafa89f9871cc2d06b281a788e8"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "f3a5608391bdae1dc373895b986a3c5b"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "5cc00bd6e3ba3e5d27c9f0bd267a8dfa"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "953e2b8ce7a5b277a0099118b1e04823"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "aa572c32aaa7f8dbc7816cdc9a389ef8"
  },
  {
    "url": "interview/html/index.html",
    "revision": "f79a0eb7e80547515c8602ce7f3b3dc2"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "d0b13c009e8f8f9634c3b60589e66d65"
  },
  {
    "url": "interview/http/index.html",
    "revision": "1282f2baac617c840d919e6a637409c8"
  },
  {
    "url": "interview/index.html",
    "revision": "940c347714a3f4817e2b9260ec8a567b"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "b794623a2a2655ec45795413ad35fa08"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "7f1025e2af8c3c60ae2892316b5ebb41"
  },
  {
    "url": "interview/js/index.html",
    "revision": "a31cd5b08852b637c9cdc1999a3fa9c0"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "a4b2d014d9f310525174e6a3b639bea0"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "933865e48eb9e2660f3e882bb4f8cea9"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "183f9dc3be619e1870ea9ad4cd520fb3"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "731add05e251a9b8cc4d13fa962c234a"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "042cea2091ffb7272e8059a8a8d0e1f8"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "8fd7aafa2540726dbaaefd203515b473"
  },
  {
    "url": "interview/node/index.html",
    "revision": "1d4f3a71b585d90b32a54a0a9261f80f"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "31dd1bfc8ba00f591f934dc9f8764450"
  },
  {
    "url": "interview/react/index.html",
    "revision": "02d6ea71539d2d95f445ef8c2db2e164"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "665373844ed0e273579b768cd6a04e72"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "ec4e972b93ae996f7640826d5523558f"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "c3f078144c183601fec1614fb36919b0"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "55118dfe49fbb9d7b9e8fdd2ecadaa52"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "04d9a30ba925098e417290535617db61"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "b6a14288ec76e8b615deaade8349fa92"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "50401d95d511c75eed3f213b566f8ea6"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "f274d15e7c3120c03bb3396c140171ca"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "ca5515eaedff2bed018afbe81132a4cd"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "a93677008f293ebeac376fea6ca9895e"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "aeee2e178bab7f889980ba80a3e0ea93"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "9373ee407ff510c4b10763c40fc5a06f"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "d53bc96051b6f75d668ba681b191e859"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "7ea10657eb102d7d47630c037cf870c2"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "122c733748bb5f41069d49449fa76e05"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "7a2fe3c7ea100a48e59a1d3ce57d65cb"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "8aecde53ea5f6be324b65cb0c328ff45"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "c9c87f7ac89be4049cc60a0c522eba3c"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "5d896ea3d2f838ceb07798b9f794a17d"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "e6be44569e420a80480e850e4eb03522"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "b76645218649f92f8a6c6f7fedc88027"
  },
  {
    "url": "math/index.html",
    "revision": "7d0edcd5bd5e831143324aaf1ba5a2fa"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "2186d9a82c8268bcc56f9f5b65cb3f0b"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "3e3cc626ee7c6d5178aef33c20a9da03"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "a3a78cf99e19a8e1faa9d9ad6172744a"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "dcf49d7d82ecaea27ab21769eff1ca25"
  },
  {
    "url": "math/low/index.html",
    "revision": "7b1db9ee2e12a435854edd065dae4ca5"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "c03719f3bec61531f4e3a876cbbb9bb5"
  },
  {
    "url": "math/mid/index.html",
    "revision": "712b6e39cf853589e5fada9a00924abf"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "820a9cbc69574c12fa931e9dda5cc8c4"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "cb0dd2247404605bd835f6dddb6bd435"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "12b529936e194c216884d2130898542c"
  },
  {
    "url": "wechat/index.html",
    "revision": "79e7a897d7780164163b24e06e8ca6d5"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "8b067282f2da76cd0220e3e0af6acb2d"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "438dd193d8296dbff070944e9bffd86b"
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
