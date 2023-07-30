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
    "revision": "2d50619341aa4bc4b59deb96bebc47b4"
  },
  {
    "url": "about/about.html",
    "revision": "a28dfc51379a7ed9f65c60241aa9590f"
  },
  {
    "url": "about/index.html",
    "revision": "dfd798f6a54ca63c1d9675a25e46c327"
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
    "url": "assets/js/11.b263e515.js",
    "revision": "f13693eaa48dcb26d124151902e7a929"
  },
  {
    "url": "assets/js/12.374f5b55.js",
    "revision": "f2744c98ec26b7a6abc41a16234fab1f"
  },
  {
    "url": "assets/js/13.a108f2e6.js",
    "revision": "bbb946597f760b6cd5935afd587ffa6e"
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
    "url": "assets/js/25.5b4f6765.js",
    "revision": "446025752a27f318ef649981e7cc4d35"
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
    "url": "assets/js/38.9cbf2139.js",
    "revision": "9fa54943c0ed5ae06e3d149b31740575"
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
    "url": "assets/js/41.cad66ccf.js",
    "revision": "9501a8ade83ecba96f2e27ffa8a4892a"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.98a2b7f5.js",
    "revision": "07f09c73552e7674007abf0f05726ca4"
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
    "url": "assets/js/53.90f2ea47.js",
    "revision": "17fb40244921a80ca7ab1b8fd8fe7d8f"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.138b5f4f.js",
    "revision": "d5ef4635c01e21c1e5889f4b06b86583"
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
    "url": "assets/js/app.a92dee5f.js",
    "revision": "e138fd46679558818c616769fcf910d2"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "ad430ed285a5eff5790b0c0e010f2ddd"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "768a2d882d6b9aafdfac23d114ff0140"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "051cdeff348e2a200f6cd3d928cb728c"
  },
  {
    "url": "fontend/index.html",
    "revision": "6b7873baa44b34a02aa9ef65bb26df99"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "da49101324daac8e23f8eb97a944f988"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "842efbd65dfd35759f32f517e94a479c"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "a45001f753f365d5c4e082336ca41564"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "de025ff0b9010f6df9e38ca9856c0d89"
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
    "revision": "382a63b8056231110976f9c199a2eb28"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "dceb6f30257edadfeb0e7a599a9ac0e1"
  },
  {
    "url": "interview/css/index.html",
    "revision": "bff759ce46f5dc72e078192298f6d492"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "9f7aedd1125eba63207620b380f82828"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "49687ff4470e380d001bad531fc5f462"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "22addc11436039dd419541069543a4ee"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "64c7f6cbd738380f112848c6fc9aea17"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "02ab8e3ffefb88b50746e0e81928a1df"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "1369dceac676dd2810c61811e1cbe268"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "f558e63ea811d4d8ca676b5fb5949c3a"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "80d9035e57dda9be221a88c106ce3985"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "288a1af6026c260f988dd6e761c9b01c"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "25714d183aa68571b783c4c493c6f0c8"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "252d8c26c7dbce9fe6aade9a34ee9ee5"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "bbaef0622f477b31bb6bcbd9c1e78db7"
  },
  {
    "url": "interview/html/index.html",
    "revision": "3fe2ffa16334a6c52709748b68804280"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "618043e855112887f937f2128ae66bf1"
  },
  {
    "url": "interview/http/index.html",
    "revision": "08ea14b3430b7db612a3afb80f137360"
  },
  {
    "url": "interview/index.html",
    "revision": "53f851e1b95ca4e5566c385d1b507cab"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "8fabbff844d5263844835af59be380a4"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "0b21de0424b463bdb420e499c0b2a9ce"
  },
  {
    "url": "interview/js/index.html",
    "revision": "581c363e110921153be496ab37783f9d"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "058b36e2fa46ee8b48f1b43c6b95a78a"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "bb0ef9f336edfa62c784ed8bec91f4fe"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "d661acee5ab979f7a9530c7269b9b523"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "6d7d0e209679f1564d8546ac7634df89"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "1e9de3a1e461e546363a26145cb4ab52"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "7d7a8c9c68dc9ceec7616fc9bb2ea94c"
  },
  {
    "url": "interview/node/index.html",
    "revision": "ce7592c2ed2beec055172ff1a98bdb34"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "1e74f57d79b64369ffc37c750498ea5e"
  },
  {
    "url": "interview/react/index.html",
    "revision": "0494c61e812ebee9314c77a287a93a4b"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "463647e14a27d09785501d444f8f8adc"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "72b94acd62266cf2823dc7ec37ed089f"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "788304d73ced138f549c19c27114e68c"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "ec16cd0d8d8c767cf65b5d6c2a3019d5"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "bd0a12859e359e3543b49580c9345bb0"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "f896f366c068d1ef75b8dd9278d6947d"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "4883e5c091535a104085f070628d14ea"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "dbaafffa7c40264b93bb138d82f65d41"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "c2f577fda9ca748b28b176d96afbecf1"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "bbbafbab049ed6da61159896abd47a87"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "b3b942c2f726cadc032e6a619d277e40"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "6341906ba94b492973709f5af1457c20"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "0cfecdf3fd9dc8a99fe79ec0aa92ea2b"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "39f5c8bd07fefcc78666d8e9890e8fc2"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "99b50d59f5283d71c28d629d5dcdb36c"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "64ec52cb64c48f3360a6798b97eb2011"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "06db181a3b31e4adb90a2184e95dba0b"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "6c0b59344b425b9d46ade8a03508b9cc"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "d4e95867f274a895bcce71561304b2d1"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "3178018d77214854ee7f1a29a3bd53b4"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "01be1b96970a3f410861d4d53f174f67"
  },
  {
    "url": "math/index.html",
    "revision": "f45a545ea6c9508cd55592a09cb79a7c"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "f3243e4759ed25753645800f411f25a9"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "7dd0b53a226a4ff7006eba6861198df0"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "35fa416f798021601e1f228af951e17f"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "9c637558392b755742dfea4e9b8134ea"
  },
  {
    "url": "math/low/index.html",
    "revision": "8547904bba610e3c9b85195932b94245"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "345d132a106736ddcf32fa5a9934edc8"
  },
  {
    "url": "math/mid/index.html",
    "revision": "3949afaecea60d18e2033ffa50994c62"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "b3b437dc0e31f599551d404a4b331e54"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "502081662fa66c9f513b1425dc0033e3"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "c180de8d2a9e2071059323053ea8472d"
  },
  {
    "url": "wechat/index.html",
    "revision": "61707cda1631d9a15c60458da7e03950"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "08944d84ee4095527f65aece3b83f0af"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "7c05e7ecfaef2a3b9cccde0471e37063"
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
