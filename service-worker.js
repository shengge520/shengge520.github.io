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
    "revision": "84b17ea3aec4248a135c3b3762103036"
  },
  {
    "url": "about/about.html",
    "revision": "3f5810437b3f63840cafe6574d3bbf3d"
  },
  {
    "url": "about/index.html",
    "revision": "672c775e8c03d13c31d51b0d2c51bb7b"
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
    "url": "assets/js/11.ae627b6d.js",
    "revision": "504f3c03575d50673a5fe3f1cd4f2735"
  },
  {
    "url": "assets/js/12.d944bbe1.js",
    "revision": "d315d9e100304bbc15b031f9b3924433"
  },
  {
    "url": "assets/js/13.a108f2e6.js",
    "revision": "bbb946597f760b6cd5935afd587ffa6e"
  },
  {
    "url": "assets/js/14.ae491d2c.js",
    "revision": "7e030c7d2ea40aa1966bf1c3a9367008"
  },
  {
    "url": "assets/js/15.aab4221f.js",
    "revision": "5737fffa82f4c7b05822478a23883882"
  },
  {
    "url": "assets/js/16.746f7e16.js",
    "revision": "d99ffe1df70e0eafc2193b6c7c128647"
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
    "url": "assets/js/20.37b9b6f9.js",
    "revision": "8d8ba9072a2662bb88f90870cecff3ec"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.36d9bae8.js",
    "revision": "5cfa9c2bd23a4388a0fe98823b6957fb"
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
    "url": "assets/js/25.a9a06371.js",
    "revision": "c3ef459bac1f04c9c643f1d2b26847b4"
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
    "url": "assets/js/3.6e2a0165.js",
    "revision": "f267567f957adb8ebe7d9b2558c20800"
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
    "url": "assets/js/35.697c53d1.js",
    "revision": "fd5e141fbf83cf40ed811ddafa2958e0"
  },
  {
    "url": "assets/js/36.7a7ce9b6.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.72002827.js",
    "revision": "b26afd14cd010e83c9266f2a1e050a78"
  },
  {
    "url": "assets/js/38.29b56f79.js",
    "revision": "eee877ec7fc929f2ab96338f67c17860"
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
    "url": "assets/js/40.2a435e1d.js",
    "revision": "78b696ef508aae7447cbe9331bd430fa"
  },
  {
    "url": "assets/js/41.242181aa.js",
    "revision": "ef907268a91e06d38a8b46fd864caca1"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.25e1a73e.js",
    "revision": "b2e8b12e5cf934740af014918e3063d4"
  },
  {
    "url": "assets/js/44.78561bac.js",
    "revision": "cf6499a8773551121bd8b3fad8ad4127"
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
    "url": "assets/js/53.cdb79bba.js",
    "revision": "a091c497bc44665057227eeb5e05e176"
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
    "url": "assets/js/72.d85f3ac6.js",
    "revision": "3b0f4b93de65b6a3e40fb64994358ba6"
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
    "url": "assets/js/76.e14d9f75.js",
    "revision": "f1d9df0b1b20d751c9ea7ecade5b6299"
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
    "url": "assets/js/app.1f30d7fb.js",
    "revision": "12923e80b72e59cc05bf329916306ebc"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "48652299a6866d6a4680d5e881fbc04d"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "9c1b4ef6e0b0121363e620afaedc31e0"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "6fb8750c03534710898274c2eef91cd7"
  },
  {
    "url": "fontend/index.html",
    "revision": "62135ff1c99c04a83abdf20b8b003104"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "a952e4e04b0a34850623149a4673254b"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "eb0da7a49a26608ac943acc780a48aa9"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "0478eaf4be6e383b508ac0500c397a9e"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "297fab6188144416af474ea34928ca49"
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
    "revision": "c0b87e0f63ed56fa277cbf062263094b"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "1e9ed3e1227fe5ec89652b424f801482"
  },
  {
    "url": "interview/css/index.html",
    "revision": "2d4698a1bc576e1ffc25a1af385a730d"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "c68510b8ec7f5ee46c768ba246b9f157"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "7ef3be586f04d5fd3b64102fc9a499f3"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "4dd2073af9c2016e93ad7da826bbf7cd"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "eac5b65fd781e9ba9d92d73cfe692f09"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "dfc5fc58290b77af66e02c67212dbd05"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "d7d0d2ff797c877b159b0c58a93b68a1"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "c1d3e3c575ea9541e06169dacc8e5670"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "596f833421fd02b62034ebf9844d4761"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "b5fce3923a3393fa2622f28a0cbd1732"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "0e4471d8d4dcfe350d80d3a3efe2f13f"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "b4a7330e80fd62bbca23da558f93c67d"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "d1647a7e1b1e1604773c0f9a56fb1ccd"
  },
  {
    "url": "interview/html/index.html",
    "revision": "79416b53d57292c95d683fd4906771e8"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "f9f1dac232a366cf0cb7bf645e8b320c"
  },
  {
    "url": "interview/http/index.html",
    "revision": "86dedadaf04260dc3da027341810340f"
  },
  {
    "url": "interview/index.html",
    "revision": "af2c7dde9cce9dc0f86af8bd5f261935"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "1924cba8ecadb6d9f357e10f2896d824"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "bb19b5071131a836b1ee0859ec9b7413"
  },
  {
    "url": "interview/js/index.html",
    "revision": "39150c62cfbe6896b9badc5f03dc4a3f"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "9e6b86c780a0c147053ee6702f84782e"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "298785492e413dc4e16689a3ea327a32"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "0412c7b30a75e4971fcd9d61258dee85"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "3f6f72d38995ff3905b6d1d3ca835c94"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "2e2e8d63e8de57037bff78d226d482e8"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "3e38c4d34ce6dc08e2bd88f7029fc22e"
  },
  {
    "url": "interview/node/index.html",
    "revision": "f89f14a0ffaaccefaff415aaabec9757"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "a0d9af328cd66e86918e0ed29d336ad8"
  },
  {
    "url": "interview/react/index.html",
    "revision": "bfca1c76fe4d037f4d9025b0edbb52f3"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "d48cf0d6bfb7971d790d9649bf86479b"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "cb9265020d1ffe5d88c05ebb71c2862c"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "ccb8cd3511f7e9f1afe469b7c604be61"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "e49568f8ebf66954b1581dedf3421755"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "f3ecabde6495bd6ffbd883bb6a542221"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "4c599c0ba55faf336436a633e9db9977"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "5705dcf9b19aa2dba0d483eef61016c7"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "21275d7dd0ab305dd4b2c7dfc18cafd0"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "d9d24ddcfbf76b7f1933eb68264ad87a"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "de5f86959c049893029ceac6bde9a70c"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "87d94562169d2c609a7b2ab6ccb4dbc4"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "cc13b2fc4fdbf384f398ead621148c3e"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "0c6658946867211333bf03c20a6b5028"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "b20e02226c9d465f30fcd50cc2298efc"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "1f0b5c38425be4f1b505c1a093b769eb"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "a04c7058d015d7905bcda2d38303df48"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "1679eb4f9515860f975c5941bedae831"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "48fc3c8f819e34c064fffcb4c620f95d"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "a2e8e4e9fb3971dfe2b777f14d07b38a"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "948ac60d32f6d8512a894344bf25b0b4"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "66512f8ae4fd001989b3e854bfd6d4ee"
  },
  {
    "url": "math/index.html",
    "revision": "311c3f3267c6a3e060d9f4d2f68d9413"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "727982555bd0592fe9f8543a95e632b4"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "e57a4dc5e56b5a0a6dcd9529756f1cd5"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "6ec226b6fa91c5905456e7352cfbb745"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "9c9978e1426040c6c77ccaafbf9c5d81"
  },
  {
    "url": "math/low/index.html",
    "revision": "2faaee83dcc6d16cff1eececdf1f4483"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "17bce0872750d0a0cd2ae68a1155a597"
  },
  {
    "url": "math/mid/index.html",
    "revision": "104f56adda55350179f590d54b177620"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "31c6cf4866595218f4c8983d4433f8a8"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "817b5de2d55808aa0d285b821a50677e"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "54de134f497eeb953d54e132ec95252f"
  },
  {
    "url": "wechat/index.html",
    "revision": "cfb0ed10901c35516422cf1c58e0bbea"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "3477f6f8deacf7554b58ca8b778aa003"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "064b811d9a98b251fe699f1ef790e0ec"
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
