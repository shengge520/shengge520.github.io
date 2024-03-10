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
    "revision": "7e5b1cbc5c0cb3d7cc8ac8cd5843ad2e"
  },
  {
    "url": "about/about.html",
    "revision": "e90e4c0b414dddfcdb41cd85759a6ee7"
  },
  {
    "url": "about/index.html",
    "revision": "76f4683d9ae7d2fa4e871ad7c5e5de61"
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
    "url": "assets/js/22.6afef43b.js",
    "revision": "d480a16b2fd9dd2a7d41396127fd9da0"
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
    "url": "assets/js/35.818cca10.js",
    "revision": "b8d2e06526554f8e8b68792b98bf3504"
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
    "url": "assets/js/43.6cfb5db7.js",
    "revision": "8b7fe73439553e63befc54b1b41707fc"
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
    "url": "assets/js/49.850f4ad6.js",
    "revision": "edfa323d9fffc8720c87658adbce74c7"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.1a1855e9.js",
    "revision": "24ed6529358627cd76ae9f14f35979bb"
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
    "url": "assets/js/56.6d412378.js",
    "revision": "90cac6ec1b464e51e50dd1fd7665f1b9"
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
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.057839f2.js",
    "revision": "6eb78ce72254890c5d95ba5b40bf8986"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "21d57c00accd30a909c0b28dcaff81a0"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "588977055ace906bbdc800c3027a0811"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "e8e7090897725d8a1481b31575046cf1"
  },
  {
    "url": "fontend/index.html",
    "revision": "eba87f111f4d1aaedf407f2bc9a9c2bb"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "a943c7cf29d3070209de982aa3ca1ade"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "22aec84a4f73c5f6a1f69d2465d04a26"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "f7c64007e53daef934be7c3edea26103"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "4c75497b26733ee48ada6e23d6687f6c"
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
    "revision": "2874530270cbe974c33ef8a274ca6f9c"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "bb5a698b0ccd7b6255fe6142d11fe114"
  },
  {
    "url": "interview/css/index.html",
    "revision": "4522657d53419a9511398ed45b29fda6"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "ac6dc61e1ee9190dd29da222f63e4611"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "8c78610f69bafd41836e7a33a843412a"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "6583b9e177cda685db9bca814f7fba97"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "5045309e7ea799dc60800fb4c3611c80"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "04eea72eabbe35b885d83d26489d5615"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "c21ac263f0f749f6f1fde71d9e713926"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "04ca8e3097eb6e4667a14797b208500b"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "ea7ebe3ad4fecb8ea1b321a0dfea87bd"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "b73dec26ce49150689ac085f4326c135"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "7994798a3136d9d5ab0a2524404b4e14"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "11e11aee1f6335bf02bc09657249a39c"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "2eac3c7e87fd1249226fb9d86c111afb"
  },
  {
    "url": "interview/html/index.html",
    "revision": "427e7ddb58f5d870368fcc7e7df1951b"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "6c451669ae83a7df9af4012f0ca8a468"
  },
  {
    "url": "interview/http/index.html",
    "revision": "d8170c23ef76d6dfd5151c3409720b24"
  },
  {
    "url": "interview/index.html",
    "revision": "e352d4b270b9874f539462be001e4708"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "8970f5660053180a34ccbd2892a0c1a6"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "731e26d378a4f8d84747771efafcf285"
  },
  {
    "url": "interview/js/index.html",
    "revision": "98ced52245e53de9a866556875b163fe"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "3b76d9f31762b09d77430789c5a3dd7f"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "695834cc64c6e88e3338024f7093fda7"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "553c297831ee3a4aeb3953c226e1c0a9"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "678caf3c8560ca5e9670645f15d2f7dc"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "12f4bce6218ecda10ef496cc0f94f913"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "34a19b66e5cfb74bb4055a8400b2be88"
  },
  {
    "url": "interview/node/index.html",
    "revision": "6bd1a792d050779dcc75eff643da4d6c"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "3b12bfd4cc51fc87f40f86298a7987ed"
  },
  {
    "url": "interview/react/index.html",
    "revision": "1fbda330b02f65e69c443631cc72257b"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "a3d87b2f44df0c15265c32667dfb7c80"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "2bb9cad2a91a0b3bd852ca5edf52f2f3"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "97a784dbba64e8fefa2da56f49f274ea"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "588b737f3be461906e17f1cfb69afd61"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "38b2ba9e2c04c7afee5275068fa9a30f"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "345c28d56f5b0519acb869a66ababe7f"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "397648424d180f19aa4359a7a4b9b9dd"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "571f074c0ebed0352762f92ea1583592"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "5d22d9a9352155932dbf837b9c803427"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "47f2010053c2b70ab07914a4dd7f3009"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "10786d5a2f68cc2e501326c23dbe1a04"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "9a461d113763f0cb78059fba7b0e3e30"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "e63f3586f52e0718b514bf836a2dc971"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "08c893d1c810f13122f0cc97998e0bc2"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "50ec87b6506fcec137dcbb2dadd7fda7"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "f76d98295d6f16be1174ea38ba8ab1a8"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "9c450eb1c0a7e5564b340c2933c821ba"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "328b70097009605e13c768b5e2d11c74"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "48209d4b87d1c6d54f3815e548e2e92c"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "51bd1cb9f974bb9fbc28b80ff9ea952b"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "add432d8aa7197450e52036fe0aece11"
  },
  {
    "url": "math/index.html",
    "revision": "d849943401e221eb3ab604016fe3400b"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "e3a2db66fdd97d929e2a293689ce6f16"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "96cb83cc599f9945cfd7ff66d6b88abb"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "fd9c92c5aa6f1a523289f01e63808547"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "02507f538b85e07820b8c86ae2a79a8f"
  },
  {
    "url": "math/low/index.html",
    "revision": "4f6b0c537e5cb45767615123d8b5bc15"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "f7a4dd7543ac0a283359bcd9506e6892"
  },
  {
    "url": "math/mid/index.html",
    "revision": "408aed6a7d6e04f630edd617137eef15"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "4b891061368efa9e2bbc334543a59a0a"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "74fc467ef7b563a676b64fc52baef48d"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "39f0237f395e230b334e01fba71733ed"
  },
  {
    "url": "wechat/index.html",
    "revision": "54ffc53213f6dbfc52e97ff7c94aa591"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "5da3540ef929f67d352e46602a968128"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "d842554b1b1b97111a2534354a472ebe"
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
