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
    "revision": "ecc0dc9e93f27f3e741634c89ce91805"
  },
  {
    "url": "about/about.html",
    "revision": "8bcd2370002435c0e0c6dba7deae4e69"
  },
  {
    "url": "about/index.html",
    "revision": "ea9fe57953e76c54e0fa2d9e284874e6"
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
    "url": "assets/js/13.ee1e97bd.js",
    "revision": "c846cf158f563749986009fd51afb444"
  },
  {
    "url": "assets/js/14.e7a7c253.js",
    "revision": "584526193c8cd7767bfa28ffacd13b3f"
  },
  {
    "url": "assets/js/15.aab4221f.js",
    "revision": "5737fffa82f4c7b05822478a23883882"
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
    "url": "assets/js/22.5481217c.js",
    "revision": "566efa0473c15c0aeaf410f53f7ae1e7"
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
    "url": "assets/js/3.9f4d73bc.js",
    "revision": "789307a95064e4e3ec7880120321ff45"
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
    "url": "assets/js/37.8f1964b2.js",
    "revision": "44673bc820aaa92104fccf185e0563c7"
  },
  {
    "url": "assets/js/38.f89d13e9.js",
    "revision": "d7eb5f1128eb8f74c51e69becb83e8fe"
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
    "url": "assets/js/47.f55bd2cc.js",
    "revision": "9d5d3a2b36f3675ad8eca7a96f2bdbf6"
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
    "url": "assets/js/50.1a1855e9.js",
    "revision": "24ed6529358627cd76ae9f14f35979bb"
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
    "url": "assets/js/53.d98e947f.js",
    "revision": "f9551c80f8ef25999f3124ee96ec6022"
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
    "url": "assets/js/app.e9995b01.js",
    "revision": "cf00792bf9f76044494d2f2230dfc4dd"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "36396b83ea95ead247f4907ba9453645"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "a6da276613540e4159e4b59d1c92ee02"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "16994a0a5edfdb5399dc83110f1932d2"
  },
  {
    "url": "fontend/index.html",
    "revision": "39ef3852e5215e3bed40a64d991faa21"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "a0789e5fde8d2ee5153404d317bb3904"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "ffc6b2ac9167774ae670beac9e7bf9f7"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "978ed467648c5913ede6ad4d9428b9dc"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "09eb43772ad090c526afc820d728ef0e"
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
    "revision": "7eb43bfd52ea86f252a455df62fa3b18"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "37940b7fa49fae9224b48417d95253ff"
  },
  {
    "url": "interview/css/index.html",
    "revision": "3ec7d1dc2eef9b7f38030be30e4908d6"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "01944c14a2da797e87676129ffad1fc7"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "d33bc95d28c62bd526e58f81d6551047"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "ba20e02c2bc8d48c1d76b7d85097548f"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "0e3b4fd2a6901822acb5d15d5dbf6217"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "dacca92d4f7e994a005622bf7d58bb79"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "6f0f1154ab6f68b45ea35bff527f1e7a"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "46836dda16c5d3438808c26348fb0fb5"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "25271a4314cd5b170a2a28908f0ab393"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "82e44f1e9080799f3cc2e33dfdfacb39"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "ab97b50973d9c45201bcd094c544e483"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "231ad78173d66ef2a9bbf070e8c8e930"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "f496c7e265aa0a75d853859a476dd2da"
  },
  {
    "url": "interview/html/index.html",
    "revision": "2c0746ad1a120b63301200a1a527cc60"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "c7ccbd6822cffc8e0b8293d390f5b287"
  },
  {
    "url": "interview/http/index.html",
    "revision": "b095886d06edf54b4cad5010c3d8d91f"
  },
  {
    "url": "interview/index.html",
    "revision": "43c68e587ebb411d00e3be6ce6e279ce"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "06660fe052295215b2ac945794628045"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "64a9866d1f70f84a6aefdfb8cb346c33"
  },
  {
    "url": "interview/js/index.html",
    "revision": "77979516697d7fecff59326c3dbaa486"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "b48e66ed96417092fa30124ca005e104"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "9b8d684e91d76a1d895bc7cfdd8da922"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "6aad558bc17a31850ad4f41d6f018208"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "4439105c2b57f2b47125e0c0d316c4e3"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "fa38c49aa5e39d08686c2fe42cca1096"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "acce165b6c24d0be49b114303b045c09"
  },
  {
    "url": "interview/node/index.html",
    "revision": "0ccd95e40ea84ad4215797c22c2dd131"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "fabd1bf8836c3385547406bebe0233e1"
  },
  {
    "url": "interview/react/index.html",
    "revision": "22cccfca51241373da4cb9abf7490616"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "3598412c7dad7ec548a8edf89505712f"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "9660acbded91460385adf41bfcfc30b5"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "8d712a28c26342641cbd6a1240ed1bbe"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "db529b0d112c0b31000c001fec4c33af"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "6d175d8f582e18d6ab44414917c9a401"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "9171bf56ebccd4ac3e739dd08b3e2b27"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "5a61c90465c2f674b91dd2d67ee75e31"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "ce8664a01544d12f53dbc2633892e128"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "da1fdbd70fdc392db081a4fc32d4195c"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "8d4b8abe9108c157217f3021eb6298e6"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "84bb50d000db1c7112c5169f596ed9df"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "fb86e1c95d7d31f427210834c568346f"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "23c5f66a7906e1208cd70455cd813177"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "f31d563c5f5180c67a44e5478c8d5960"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "51591f5ec7d2bce90d3abc6dc2b32b47"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "5d2cb287fad4c4263bcc2e5bfde791dd"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "870890f148fd7fe463ef5aad4aff4c95"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "5c721b903a428ed21db4215a3efc613b"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "5d7a11d260619709c48ce943481916f9"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "c8f26a2e80afe27666de98ca891e732a"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "ce6390bb310715d93e2dd2b8e9557976"
  },
  {
    "url": "math/index.html",
    "revision": "4adc8a814b3a791993bb95b54ce502f9"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "98a1ad32599a0eaa17b76092473df7a9"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "b1ac6adc9c9c253ad4a3b0718d290448"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "ab65163ed883cd1f017a483b561ea9c2"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "4489f783a25b4a3b376611e27c543a40"
  },
  {
    "url": "math/low/index.html",
    "revision": "d31c112bc4c430dae2d88e41ab0c2475"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "ae9b54ef992817f5837c74b02c442b6a"
  },
  {
    "url": "math/mid/index.html",
    "revision": "ddecd8b52f2ba837abbd7488595b3069"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "21d287c8fa3974c555e62997cefddc57"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "fe8e71043071ce2a45a519edd2f3116f"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "e3924d448affc6e6adbd0d4b5a204433"
  },
  {
    "url": "wechat/index.html",
    "revision": "d10065da097c70208c711d52a166d895"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "4f7cfa3eb60d4af9b129c71fa4c63208"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "6ebfd2ecbdaa3e81ebca231aa3d4229b"
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
