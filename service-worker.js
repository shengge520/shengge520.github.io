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
    "revision": "162dbb8c1e16cff9942d4c7f1a002a83"
  },
  {
    "url": "about/about.html",
    "revision": "10798ddb975a86e6a76bf189c818c9ce"
  },
  {
    "url": "about/index.html",
    "revision": "4aeaa1685b1a96a3ee97281b90a2bbeb"
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
    "url": "assets/js/22.ae5349c4.js",
    "revision": "99aeb92f34c1b21e1d0f81d509be716f"
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
    "url": "assets/js/42.6ba35672.js",
    "revision": "81c61313e9ce23c1fcb2cf26db554caa"
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
    "url": "assets/js/49.bf1d6fd7.js",
    "revision": "e802b4d238f25049f26f32961e435bb9"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.2f6c83b9.js",
    "revision": "b08fa63b8f8adee16ad60cb3beec7a4e"
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
    "url": "assets/js/55.de1968e4.js",
    "revision": "5cf140aac0cb8b681ab4f99a49261954"
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
    "url": "assets/js/66.8a110c0a.js",
    "revision": "2be0994054cbdb0b4e13c3c750007c27"
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
    "url": "assets/js/72.200a9c9c.js",
    "revision": "fa7461235b1f42c3d0c07dac0353cf56"
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
    "url": "assets/js/app.cebc28e6.js",
    "revision": "9e379efaab12c5b63af56343c29bdb1c"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "03e158d2c4e44239255b39fc1d3e2ad3"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "d412c4bd1ee204b77d84b26fcafe5f6a"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "d9955fa59e6ed411db3fbbb95f8e09b8"
  },
  {
    "url": "fontend/index.html",
    "revision": "4571f00e153e1e74ae409debd55e1757"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "b0c2604d78f5092516c83bfd4bad2e6f"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "66ebc80cbb288e079df878039deddcee"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "1b6fdb3659e3dc57b0d850f35b5a479b"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "e27ae8193c9fc34087a7a1213088b988"
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
    "revision": "1baf6de1aca44429baddca7e411921f0"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "0ab244722c122975fc2c46f3346f03b8"
  },
  {
    "url": "interview/css/index.html",
    "revision": "54a42f292c3a08ee9ee77a672f24b159"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "2089b5c50ac64b465824fa810700b9e4"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "6dae41062a17db31d281298664ae5ac4"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "d4896b513f1f289325d9a5545cfa8615"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "d7d0cc52bdfe4fb674162fed213905aa"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "e153461d429d5bea6e71599ec9074cfa"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "936c2d27afea2bf2070af8a841547b0a"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "2fb9650081069e7e0b590a52583ffe41"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "001d34c914e26ac98710f089543327cd"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "1835ef724947e4c4b3016a2300feeca8"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "d28352301d802a6d805e2feffdefb675"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "a0d5e805f78ae5a004d36019b7740354"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "a71342127242377103d64a77034d5f23"
  },
  {
    "url": "interview/html/index.html",
    "revision": "551aa2b5c08ed5f417416eaa6424c45a"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "f958b71846b8351dd94122c3d639b78a"
  },
  {
    "url": "interview/http/index.html",
    "revision": "fb76a91ba4fe3131122358c8740d249d"
  },
  {
    "url": "interview/index.html",
    "revision": "f8cfa2fe536360ee8be0750aabae7d9f"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "18868b8662f2c57c2f28bee39d79b9c9"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "0dd387001aefbceff71ddcc6314dfd41"
  },
  {
    "url": "interview/js/index.html",
    "revision": "8f5fb107fcf486e795312d2f4c0f577a"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "7c369bf4748915a5fc22a37e0702692f"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "409f402ae21ab3198e23c09c53b7f92f"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "6c579a0ac63bdd0d9e433a8ba0f39b9e"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "456b61bb688870f237b150a91ddc398b"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "f4202482d2c72c52a9b83beb2583cd78"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "03898fd559eaf422e5fdf9da3426a180"
  },
  {
    "url": "interview/node/index.html",
    "revision": "3499a0cd8b170f1a12f728dae6b43c6a"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "2fd572cee15180d1b713880ded921ea9"
  },
  {
    "url": "interview/react/index.html",
    "revision": "60baa5ef97ac5545040bd180c82c7f5c"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "3dd9c9f65236ea69723389abd9d78ada"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "ae002b2495e7055753f8591192d82d26"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "4d386aa7eefc2589763aa407d91fbfb3"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "94d3281342a1bafe6096195e674aa0f2"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "ef4a3b1b0e62aafad183f77b58c7d70f"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "f702efda9a910022f5b71537d984819c"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "0989dc2853b573456b10f1060b55e220"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "c9bc5e61103a96fbb15989eb66eef44f"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "d39ab0dae64c11187a585f170a34bb2b"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "158c0776bf287673e80f917529476128"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "f5e8cb42d00a5176ac1d71050f1f775a"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "6adf240fef0a10461995b3c0c4d3cbbd"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "10d6d1381545e3c0242b0e7eb676ea29"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "bcd7d729ba1e5bda49276fb757956c8e"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "02f4407c33117ce7f6a9dad92389ce63"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "83f828a5fc63f3655cc452c8783ace69"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "e9b8cd4c323e7e87b3cf7f3b8419dd51"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "3badd102d6302c1c48de46e2873acce4"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "f25b0810bb50c4a46a4587726845563d"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "3eba9a697946be22e8e9ebcf743a672c"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "3bb9dce6b0baa795f428a6981801506d"
  },
  {
    "url": "math/index.html",
    "revision": "5f99a3291068e3a0171d97c9af6ba17a"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "06d5839702df2a95ed2098549d72cec3"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "c5096da9ca2175024da622360dd668e2"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "69fc49e5a3f328574679279d46c46011"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "813df823acb95e40caa13a2614250f69"
  },
  {
    "url": "math/low/index.html",
    "revision": "052c6537e5edff3e911b41f992294417"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "c769113a27a147f17df5eea2629bfffc"
  },
  {
    "url": "math/mid/index.html",
    "revision": "6688403c7bd8b26f9f8ab2339b97ab2c"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "4d471fae873767cf6e71827cdc96b1eb"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "0c7b265d1b5d6399035be157074ac3d2"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "4a4a54cb0ea786f0d55d41b1c245fb75"
  },
  {
    "url": "wechat/index.html",
    "revision": "e16edf661cc8d827df8d29bc19c65d68"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "c15217efea9fda73e13472be8a87a687"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "4b91ae98bdbb788c47785d9ffce45ae8"
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
