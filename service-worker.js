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
    "revision": "1068c47886f9925aaa60a1a932e070f4"
  },
  {
    "url": "about/about.html",
    "revision": "0a9ad74d302db75afc698c9989409e0a"
  },
  {
    "url": "about/index.html",
    "revision": "ffc36ebaa52c0dc776e66fa8ea509499"
  },
  {
    "url": "assets/css/0.styles.79b87b26.css",
    "revision": "de246e796e8cec7e4cabe6200459e33d"
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
    "url": "assets/js/43.47180755.js",
    "revision": "0e0228917a75caeadcfeb8b73ac23bd1"
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
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
  },
  {
    "url": "assets/js/50.b89f28f9.js",
    "revision": "91413f55b707486abf313ada59df293f"
  },
  {
    "url": "assets/js/51.9df95cd3.js",
    "revision": "41ea56c712695a643cbf61cd3b05c7eb"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.a2536742.js",
    "revision": "444baeac84dd570f627679a21ca5e0d9"
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
    "url": "assets/js/6.5e9d1b20.js",
    "revision": "626e33ee005b1d9e99e69a5b42b8713c"
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
    "url": "assets/js/9.c61f000a.js",
    "revision": "ddfb959a743b901defa95d9a631c4b0f"
  },
  {
    "url": "assets/js/app.112e89fd.js",
    "revision": "2870dedf94a2e172f6d02a96e1755e6e"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "056ccf863532979d5574a132017e0c57"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "2fb4b20f861d7e289bc00a1a7e417e03"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "9acc02bbbfa390a7b287af3d87a40e40"
  },
  {
    "url": "fontend/index.html",
    "revision": "3f6f51c03a4bab9b8fa15c7a70ae5b94"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "871826ca9281e6e122e9a9ddf87e8350"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "29441b76d5c359b09280ab8962c863ee"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "b55ad18642de666c2443f53fcbc3f39c"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "6b4d5e5ca3e1376ff260708b7f4d8c6a"
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
    "revision": "268d9ab042ae3952960139ed4f3ec90d"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "94344d54afc91ceb02fc35bb29a31664"
  },
  {
    "url": "interview/css/index.html",
    "revision": "0b3c636dbfc4443bf4058b003f07db07"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "7bbb46d3f893e8b388bd460efe9d24f5"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "5aa0326fe6af2e3eb1c56181a734adc0"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "eb92aa2bf81da4124e02bc6fd557b3f7"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "cf0336b257589460532178bbd236cc22"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "9662b5c33943e7309bc24520fd967437"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "b71947d26020388c4bb22818f0b3efd4"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "acb3f4ae8da90f4739a1f9d275e421a5"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "508dc0026265e6f4b3b508509575007b"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "0b445360c361dce7ced1ea8311e643eb"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "63d690344bd468e9108f0ba11aa1a48f"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "48d7ba981f8fe1eb6b588f8b273020ee"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "6909ce366bffb4f9b464d687716a2f7c"
  },
  {
    "url": "interview/html/index.html",
    "revision": "ab53fe3a5efb8ae3906332b37e54d9ac"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "a9d580473ecff4b622984e5455dfcca2"
  },
  {
    "url": "interview/http/index.html",
    "revision": "7e1c964302bfdff8597c59e1b6027c40"
  },
  {
    "url": "interview/index.html",
    "revision": "7bb5cf76d7b0fc74a1338b3681f86487"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "0dd21e7080497bcf88958879dce781f1"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "efbef27ecd336cd5ca57ed90acea16a6"
  },
  {
    "url": "interview/js/index.html",
    "revision": "53b34893f8df86dc9b056c09cd54dd34"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "936df6d57c58f81dc5c896acfc1bc2d7"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "be61a75fea37939f7ca2323fb79e7ce3"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "a0f60155d6940762bcd7b4127c0d52ed"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "d293bfb3f7380221e09eee127d156e1b"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "a961c225753d27c2b43654b3113adf5f"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "989e01f217fccda02c607e4ae81765c3"
  },
  {
    "url": "interview/node/index.html",
    "revision": "b501b2738f6d0316d99bfb09a608490d"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "dd515f0ce3b4ee2143297069116f6999"
  },
  {
    "url": "interview/react/index.html",
    "revision": "3e155c0ee79e11babb6d6833202ebc14"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "0cd7eed844f7db228626dd147c6fc1f2"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "aa4f20dceb0df2df8d850088f2767a15"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "72ebbae3702fb28899f278aefcaff7d2"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "33979557bcdf5df9f969aca63d599ccb"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "6224236ea62e877a8321d893cb46a58a"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "05bacd3ebedfeda70afcb0e306bceb31"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "7976923f0e82c53e488737b4858d8994"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "5696f37e9f2c83cd889c44846c98ee1e"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "9be09cb735d5b810060f59b33e2125d7"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "da4ae62e5f5c47c4e5a94eaca4af80ba"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "a3fac35bde4dd29a3b55b0ec3fcb4d0c"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "f591ccac014654cb22e0f8cfa89d9525"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "634d49863e457a38f6d6dfdc43450844"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "d7db91b2496e06ea95e63d234b22342e"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "bc9658db6aeb709ab4c04aa180933cec"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "7a5f38efa0f554f949750ca52bb2b7dd"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "46c8874f9d69f0cd0b68ce8449fb156f"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "735da3049161c04f3ba936fd67b20c61"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "9b65143a2674fe4960fb98ec45163e7d"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "c0bc526224c54c595ad5ecdd350c769a"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "cd2a56f1c81f26249b51236f39576b3b"
  },
  {
    "url": "math/index.html",
    "revision": "b29f5e531694ea499f46cf7b8a71d996"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "033a0763f5068d938db66326a137d70b"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "ed1cced8995b14f3d3c764ff98615ba3"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "9c04f52e0b8ede4f4b152c458eca2b6d"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "1143c55086d09be159dc8bd792f215a3"
  },
  {
    "url": "math/low/index.html",
    "revision": "2fddac7da89a923728b4626009a31d8f"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "d62d65ee3b12dc6764d7ab05437f3ab2"
  },
  {
    "url": "math/mid/index.html",
    "revision": "58f28f0cc540db76310ac396428b7bd1"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "21b58f06c8e521d672bad619fbc78a9a"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "2ba835338d9020ee6b5c3af1b47829a1"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "994b723050a89c7fbf3a470a7f68882f"
  },
  {
    "url": "wechat/index.html",
    "revision": "244ae0ee28c631b2b75e2134fc44066c"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "e7a52d2e202d673f5ba11bdc59b03994"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "e26819a622739717a2c325ec4415e8ce"
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
