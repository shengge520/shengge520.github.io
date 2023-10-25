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
    "revision": "f596bac309ee9c3c150ccc96bcb85b60"
  },
  {
    "url": "about/about.html",
    "revision": "dd0c7baab3722684911375dca142677c"
  },
  {
    "url": "about/index.html",
    "revision": "de4e05549a4dbfc5e25fb5bcdb546b5e"
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
    "url": "assets/js/22.b6b82d93.js",
    "revision": "b20a858ca58b4a24c063139970267968"
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
    "url": "assets/js/41.33fdc0e7.js",
    "revision": "507158c2619ac289c4b9837f11be7a51"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.59fd9467.js",
    "revision": "812971ba8e6fe5a721ab7d3b411b9ba0"
  },
  {
    "url": "assets/js/44.004bac61.js",
    "revision": "90ffd6b3f46ed482356b751219834c9b"
  },
  {
    "url": "assets/js/45.e41840d5.js",
    "revision": "ccb10d327012bb00f30397e2b9e79add"
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
    "url": "assets/js/53.8c2012f3.js",
    "revision": "166c7da19fe44f9d151c9523a6034e41"
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
    "url": "assets/js/56.47aabd34.js",
    "revision": "86f8676b459b3b6beb5e1c3e8b22b2db"
  },
  {
    "url": "assets/js/57.29893ea7.js",
    "revision": "ed666236cc6cf2cfb9c5a2e9348597a1"
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
    "url": "assets/js/66.9ea267ad.js",
    "revision": "370670b1d55763e7cabc1ffe0d35ddc4"
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
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.41edf78d.js",
    "revision": "4ca7b101800b7423984acf8d29b10af6"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "36a5fb4a50ab9f04f21004f637c0ca8a"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "32e9666084e9bd0e7e985523b81fdea1"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "a420b9f7dae408c6d0bf9849e17df7fc"
  },
  {
    "url": "fontend/index.html",
    "revision": "c19e625e145bd4e64aa82fdbbf05e984"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "85787ff1c1706c192f369e1b5c2f9a6d"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "1154b6c5694fbe3b2bddcd01f481c5fa"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "7b2611137309a72baf34a409d16afde1"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "566670f3eb10d36322f8948be6125ef1"
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
    "revision": "c82a27399e6d31972d930a9e94d3e9f0"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "8ff48280976841f082625ad9822e6307"
  },
  {
    "url": "interview/css/index.html",
    "revision": "72b0cc8d4e3af34f1a45678391214979"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "819de79322bcab6ecb561caa3274bc2b"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "7e9966f3ea96feb082324a0d8c9fa58b"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "243237d61bdcc8109f15378079c960c7"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "571bcd957befb5ebc3ce909c6308b6bd"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "513b6d93b215f91d1592e3be520c03e3"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "9e70284e0dc0f1a0359975bba5ee6556"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "76a8b806ba302e36b31bb9117dbf2813"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "03b5e694f549099a3d618908387e2538"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "ed75c06b6414e0cb0c27cf7b99634d85"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "d7842e226e908669abd4c89fe3680e02"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "b477ef15d848e2895955cc67ddf0a55f"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "59feeff3cc0b737430fbba8c63575f91"
  },
  {
    "url": "interview/html/index.html",
    "revision": "767f03632d360eec92fca6b19e1629c3"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "accc31eeb2b6e3e803bbd2011eee677e"
  },
  {
    "url": "interview/http/index.html",
    "revision": "6e2c499d94dae7bd4fd8f5445f079fdd"
  },
  {
    "url": "interview/index.html",
    "revision": "3533d21b011db4f74c83d83b0b38d235"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "e9cdcf9de782ed8da47eb576a4ac3b3f"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "5bb78555cffc1abdbedfee1dbf4f5af4"
  },
  {
    "url": "interview/js/index.html",
    "revision": "5ece57c09d13c5821a81deaf94822e9e"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "16441784f33d05663f8b13f3e96b7496"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "19dab65b0927750d1ec61c269f5a8e7e"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "4079b72fbc4f56db0661afa0cf4d5215"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "05d073f6267f24c31d06a69e0cf267b0"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "a384b3567594c2ffb27f20fc7e590dc3"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "90a0d330aefd1a5d1daff687884bcc9f"
  },
  {
    "url": "interview/node/index.html",
    "revision": "d22c37210e77027eab3398b7c26c10db"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "967fb523fe2a550398b29665cc858d12"
  },
  {
    "url": "interview/react/index.html",
    "revision": "964597c934cfae5da154b43ba481ebfc"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "a0b33fd7c9b36a7e7cc4cf65a4996204"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "8b0f87591d678e63f409c2d0f0367626"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "102dd231e01729a0e7c4c22cdf338955"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "f40ac9bfc4516b107e261a3af1ccfdfe"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "667e0deab02ae0e1ed2e4f58a094cdf3"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "57289544b01d83601d2b579d77a6cd09"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "3e2b4d2e56b678c0b7a85c7ddbac5fab"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "7ab324b90a7a4df2f71bdea6d49dd8b7"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "885a69b40b02abbad37ada59a7973728"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "bc4bcc2067da8345d1f9ca0b91965ce4"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "2ff4dc6635b34e418291822c62e8d1c2"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "f8bd873604bccc03001462106fb36b29"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "8f3ca795e0224b51955f02faec0ee598"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "d05f4eb30836944695067dac4cf6e1c5"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "7cc73d0c5bbeaac27646e980d8785b97"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "038f1e00252bac7bb1f23a93a85e2565"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "ab658ff69b3252d4131de17a970a6282"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "37d88bab2920f70fd86992cd654f277e"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "6bec8c70d029758f67f3e2e62336ba13"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "069b2af3a321ce5571525f65bc92ef81"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "98cc7476d542345da667fdf758af6ae5"
  },
  {
    "url": "math/index.html",
    "revision": "18e20d75defa2f098cd0c531883a6260"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "8d1f572cb2c68a800072817a34dbabbb"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "be7182f0f062eba7546f4590d5a845fe"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "3aa0a2086ed0c624ff25e81291fece18"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "d58df4e94c988a3512f8b24c8765e63d"
  },
  {
    "url": "math/low/index.html",
    "revision": "d2a0b84cf440e8b15bcb26652e492c48"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "4c9078fc0e4135e6b11ff9257bb94ccb"
  },
  {
    "url": "math/mid/index.html",
    "revision": "4cdab4747a96cc123fa99c7811a280c8"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "37a04abf9e70a904cff61be226eee0a3"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "9dd361281f22681dd45f376759180a99"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "dcc470d8a5a8363b8b21c2fe61b75fa5"
  },
  {
    "url": "wechat/index.html",
    "revision": "8051713f2af01d9a315568241df4676f"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "c0e7c667fb0e0f2fbd17f16c768fb960"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "dfb1363fe84c575d4aa32144adcbcf72"
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
