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
    "revision": "50d04a6d62cfb7a9abb144582bbb4c7a"
  },
  {
    "url": "about/about.html",
    "revision": "2f560ab1e3816d5492ad94fdec760680"
  },
  {
    "url": "about/index.html",
    "revision": "febf6811edce2006612445c04a4ae28b"
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
    "url": "assets/js/25.0c91780d.js",
    "revision": "0eec79449cdaf2c7de6002f35099b488"
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
    "url": "assets/js/3.724470b5.js",
    "revision": "d9a53f01e251924621b5bbb55a5fdbcd"
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
    "url": "assets/js/37.9b1cd3ac.js",
    "revision": "76012fc356d79bf5cdd0c51458ce24ae"
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
    "url": "assets/js/53.d98e947f.js",
    "revision": "f9551c80f8ef25999f3124ee96ec6022"
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
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.caef3ef5.js",
    "revision": "53b281541c64f26a9a67c417de9e25e4"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "649a4b10b2f94353b2001cfa782bce7d"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "9fc15cbb38f2c487381f96456590033e"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "82c113542a9f7558df5f2359021b78ca"
  },
  {
    "url": "fontend/index.html",
    "revision": "d5a1d650f197fe73d69268194c4fb9b4"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "7a4511565400e10f06957960b923e97f"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "a6fbaad335d4512aa9d62f87104db67f"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "3ac42119d1625d36cda9f64fe39ce62d"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "8429ed35a21cbf85304b028ae6737f33"
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
    "revision": "3ef6f1902f18d54cd7ba33da9d0515f4"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "5d98012297f99150a191bd0ac50b4cfe"
  },
  {
    "url": "interview/css/index.html",
    "revision": "75ae75d9e51dd2b9664c585d461c9af9"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "dd0625c8723fb86058f7a7176be78494"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "5f36ae7c4d237d4c50470eefb773b253"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "11c9448eff3c23da2b4234d2faf899fd"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "65338c7a1aa8ece58e1688fdb0a01957"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "b09753a6e3caa20393af66e429129fc6"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "d5f6cd0388242d95e02cc074f32e88ea"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "7547940ada4ea6c99931fd55381cab1b"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "12d6d39090887f9d72b225562cdfc1a4"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "cf52bb1625aeaed23b59c8b4c14bc8d2"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "666c336f141b2ffc9d96b5e653ef2f88"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "cc4d20bc99da0ff3aeac2cd9cef97333"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "446a546a6a9663f40a760026d92eef93"
  },
  {
    "url": "interview/html/index.html",
    "revision": "eec5ffceb39200229eaf95973c033a4f"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "c7c848d888db3cf655a2a5e8579c7ab1"
  },
  {
    "url": "interview/http/index.html",
    "revision": "2fb7e1e8b5d45725baf1970aa06fc814"
  },
  {
    "url": "interview/index.html",
    "revision": "839858b6ba220303b93d744de649a7de"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "fea6bac70147d745e8c9ca6a1cc16309"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "d4cbfe6a492ff02669c616e01abf07f6"
  },
  {
    "url": "interview/js/index.html",
    "revision": "da5ed751b9165de1a1c25a555f4d96ac"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "c51fbf563da4aa238d27de81dddb59f0"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "3492093cc7e8c7341270fc51d1907682"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "a721ce0b83cd271739a75cfedfa48b8b"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "12254f4207829869e0c90bf5f9b751e5"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "34d0d34a0e48ab5b82b6aab2547800b5"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "32d6d8264a443653b3546b417418b7be"
  },
  {
    "url": "interview/node/index.html",
    "revision": "bc27b546bbec4991f14c22c99077b354"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "7d16975747c732a151c482af4eadf726"
  },
  {
    "url": "interview/react/index.html",
    "revision": "a81fd144b4eb587ff8824a9c1e4c7048"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "3af7dd4daeb06495e20c96084f1f0df3"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "31afc9972086c3d1a6b543b6cb306147"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "f7b9c6ea5616f7cb35fc3faa4b437992"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "dd42eea26213656d7dd351b1e2ed3073"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "0584eafcd97ab01d527e8f40efe5e025"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "06e8def0b290a6cd5cd5da31c9203c93"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "bceb90b5ee74ce508c99d4362a24280c"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "b4b21a8be59d1511062021f753483ce2"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "1d5a58e236a3abca819cc0cc408ad5d9"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "8dc2ba130dc5717a97c26c6665b908a7"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "a550d815b95256e37a13373d7fab4271"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "2c640370b3725e9b78369567c0f2592d"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "58102d3c2d7cedda865ae8f97d659f3b"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "73258b615a0ccf0fde7d7631e9314356"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "8c97e2584adfb047dbfbb8c409018a6a"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "679a6d5536d5bc163d4d3f2ee7f7e2f1"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "d20da150fb5e7d9f8603f252e43f8208"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "775e1c491707776403b6913a3e6fef3c"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "345d8597f87349644248b8943ed8170c"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "914413e76003f0386fa72407a4d7027a"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "1dc3620df5369a83b49a8117cd82a133"
  },
  {
    "url": "math/index.html",
    "revision": "82ad476aa640b7a7c75fe7c71a11e439"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "878faf540e7a046a96c8cd32ac777626"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "9c53512598c070a64f233c095df1f4fe"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "c701fc68f54d533b58de482cd8b22265"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "5d130f3b5df2f7fc24037573e14ce43a"
  },
  {
    "url": "math/low/index.html",
    "revision": "163addae822ce27f6e3acda757a84908"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "b009aa0a70fc1b6931ae4b4a1f16ca9f"
  },
  {
    "url": "math/mid/index.html",
    "revision": "cac65a7bfe4a8c9f03363adc33131eeb"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "768237d444002efd082e68231d2ee036"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "8d3a60376b23f9d264cf1e2d2cb0439b"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "c7c5305e3a2bae7629b9b4fd31502d5e"
  },
  {
    "url": "wechat/index.html",
    "revision": "936b7ede5ddf123f2cfff90c45860621"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "65be834a79aaab183c7b40ae0d201351"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "8371be7bf63d89d95734a0385e2db4fd"
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
