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
    "revision": "d7bf598848253166cf7b1920ffbfc388"
  },
  {
    "url": "about/about.html",
    "revision": "499fb315fbf1f55570ee736a4e3e3557"
  },
  {
    "url": "about/index.html",
    "revision": "58e1b15cf32817c84d777d776f2ba2e5"
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
    "url": "assets/js/15.70a6b9e3.js",
    "revision": "958eb27299ea29a0ec37f7f6d092caf8"
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
    "url": "assets/js/24.83c134de.js",
    "revision": "6b22b82ba2b7b580c719160e0b160512"
  },
  {
    "url": "assets/js/25.20150c37.js",
    "revision": "86d2b8dc73eae3833a0840518f6e45ac"
  },
  {
    "url": "assets/js/26.0711698d.js",
    "revision": "bd972c20cbd1c3c5cf510ad2709dbfef"
  },
  {
    "url": "assets/js/27.03d57e1d.js",
    "revision": "38d9e7496f8b6fafebe9bfcce92f1e2f"
  },
  {
    "url": "assets/js/28.3ef06582.js",
    "revision": "38e9c25f3c95dd5a9a71c261b389fb6f"
  },
  {
    "url": "assets/js/29.759ef927.js",
    "revision": "3850adf747b02d9115aa1f6d00d69616"
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
    "url": "assets/js/35.00ef88da.js",
    "revision": "6ca1aaffedd83147b859d1e8f25bd68e"
  },
  {
    "url": "assets/js/36.989dd5f0.js",
    "revision": "5e2455285a4e80813ae94a85528fc09e"
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
    "url": "assets/js/43.d729690d.js",
    "revision": "ed9891db258f8cac21975475db75fbd9"
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
    "url": "assets/js/69.23ec1eb6.js",
    "revision": "98873154e1f57e214b77e249305ee0b7"
  },
  {
    "url": "assets/js/7.142000ff.js",
    "revision": "b7ae3f7f99b9f7451764a6d3d6c79ad5"
  },
  {
    "url": "assets/js/70.7357e9f1.js",
    "revision": "712f14341b860fa38425b14f8bf38082"
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
    "url": "assets/js/74.ee93d98f.js",
    "revision": "f16db7b691d02f22dd0b9fbadff388ea"
  },
  {
    "url": "assets/js/75.fc61e731.js",
    "revision": "c2bfa4dd898636b0365cb20a859dff7b"
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
    "url": "assets/js/9.02ba0fbf.js",
    "revision": "d79202a2c82177f9bdbc388a9c656df1"
  },
  {
    "url": "assets/js/app.9ad05365.js",
    "revision": "56c3f18343c36190d50d29d340c725d6"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "f17803525bae44bb65c9ae608fa9cc33"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "47e1aa21283e796161660390b7c37a03"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "8c5b201a98140b5d14792d64d05d8866"
  },
  {
    "url": "fontend/index.html",
    "revision": "054c77b84eb36b8a3af4b25942b270fb"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "ff109e02c51f6ffb1151d925bee67560"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "b5a997cb08d64328cecf40504be4c78f"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "32e46f75629120a44bb3350807492acb"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "52576cd8013a3d422ccb5f2940e90c2d"
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
    "revision": "f8d2714d5835958b9a2d121c0e70c292"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "a6b31127403872578f9c6cd46f724a1e"
  },
  {
    "url": "interview/css/index.html",
    "revision": "543b6f46114bde63b2a0158dfec9261e"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "a0418a758fadc87e7040d8f85662ef89"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "7a13a5bcb54ee3d60b423f19a14b169e"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "7568c13b497feeebf1cd04ae8b11a668"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "58b794b66bfbc854e5fa3feed45a5cc1"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "4d8a16c67978681b6ba549c687cbd925"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "a7cc81fc3c8d02da14e2a70dbac70232"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "1108bbed73b5c1133eae6d376e7f8ffb"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "bc63e55c060ac63efc45735d5ca2440f"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "079c541de3feb2dcb808af5c0491f78e"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "a2bb01344ec7c6e7ffd0815c5cdd0098"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "8888338870590a7d87944b613311c190"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "124a9911febf4d9610f011b2af8166d9"
  },
  {
    "url": "interview/html/index.html",
    "revision": "1aa9fe7246d8649f8d8a2c5e09bef3cd"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "9714adae0b583127be2a81459071e087"
  },
  {
    "url": "interview/http/index.html",
    "revision": "f8555c4bd87b9a3bb184fa816f7daa77"
  },
  {
    "url": "interview/index.html",
    "revision": "737494a80850f9f09ae797c950f258c0"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "bafb2f33e6dddf5cca8fc42af32084f7"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "b48a5c702d3616fc97d7583d6533f318"
  },
  {
    "url": "interview/js/index.html",
    "revision": "be8f1986e46ce050025e489b2c32d109"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "cf2a60fb9b8e8c3770230f2a614f809d"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "37f64d79b82db4ea145e56b15097a2dc"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "c6cf1be97a73922f5efb5a1cf9ccfaba"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "6aff81e18bca5fff32f395907d5ef0c2"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "5f23dd6cbbc9de8e09c9d90b03df66f8"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "5a17608faced7d8660611877b8bf91b6"
  },
  {
    "url": "interview/node/index.html",
    "revision": "007dfb28191ba2f5ba1e931febfa8acc"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "2266666c8a8510c8cd628796018d5dba"
  },
  {
    "url": "interview/react/index.html",
    "revision": "f97452284fea7fa36a4c0a60caa105b9"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "0512b9f10d52b25cb3845fb2f95b3c76"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "beb5c619dcb2dbd5244eb8dc3fc73b6e"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "7c509879c27107fcbf97d9974b82b1f0"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "882569148e81e81b8d60f1ec16a3961f"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "6ff5a06071a59e8aa41d0243f4466cde"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "7668fb2371cc4195166662e19c7c6207"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "2ee568991b1d57d90f446c36f4033ea8"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "9dd2feeeeb7d085b48b7d053ebd1c836"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "2492830acb4c534e801e9f7428e1488b"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "f0d1a58b7165e1cbe83562b68c0a2f12"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "54dadcf840600c074aaac543816f73c1"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "deb53d6321c77714bfd1eb5a30dcd4e4"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "e35fd7b049c929c3cdb81f6e486d90ed"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "f902411d2090ec8a44910cc70d13599c"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "b780a7729286cc548760b681b595bc1c"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "e2c2581a99e94d154f1251051a011f01"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "c33fce04d6b04207ba5445f27c7134ef"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "31b8390b7747f877d08669e1ee32ce34"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "d07fe25046beb132776b4f953c61a8c7"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "28ab875e11b43476bb50dc3ff7625a31"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "d80744a956f6fdcf531b4f7c17bbaaf3"
  },
  {
    "url": "math/index.html",
    "revision": "af8e79f7051c0eabf4a3a70b19a52a37"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "5861cc0d6d689f4f149fc7af0491c134"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "d1b1dcdefd2d4438d23d6fdc9d9eb9cb"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "e0725d723a317426803d14007c749551"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "36a3d8e77f0eb5afb05400a65bca2a8a"
  },
  {
    "url": "math/low/index.html",
    "revision": "32bae975322194320eba68825e75f366"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "b4c7bd4030d1ce443da30c0a9d8aa95b"
  },
  {
    "url": "math/mid/index.html",
    "revision": "fb9f47c4bc70dfe3e65681e39b581f01"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "8f8ad24fe59665cf2d28b0eef8495346"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "7f564014424f09a2ae851b1235b22c08"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "0bc49c5c3551bfe4edd58c892bf2014f"
  },
  {
    "url": "wechat/index.html",
    "revision": "e6ffcfc2dc1299491185326ba7dbc33d"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "ec3c0fac4a14b80f69f45874091f7ac0"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "d62fecd7ca054bebcc5a90ec32c7602c"
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
