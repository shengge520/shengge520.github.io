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
    "revision": "7d3ec7802aa0827b6fedb8b4712e382f"
  },
  {
    "url": "about/about.html",
    "revision": "80be561c85572d706afd18699b9bead7"
  },
  {
    "url": "about/index.html",
    "revision": "41a7fffe4bc0d17d1c6dafb838da87e3"
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
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.fe336aa2.js",
    "revision": "adc30af17a5a87771446733df383c1df"
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
    "url": "assets/js/49.a5fe8b55.js",
    "revision": "60dcb6b961dddfd1c01adbbd6ed8d371"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.33edf329.js",
    "revision": "cc2fa754a51d7eb72d14a48d9fadab5d"
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
    "url": "assets/js/55.6dcc4c45.js",
    "revision": "078b06888a853dc9ba55fc83ab4b178e"
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
    "url": "assets/js/app.858e6522.js",
    "revision": "130b72366d12a24d05d2d56cdb917f46"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "776b1374741843501a155d61b425b1b2"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "7bf65671f281c21f6e9c68b790abee94"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "6ea0338c7bd31b749c4417acb452edfd"
  },
  {
    "url": "fontend/index.html",
    "revision": "f9840db37bfb98f251919227707c2bcf"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "9cefc2b90143cec595602dcd3f604f33"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "6bb6ce3b47c3b487dfa2143d9d27057d"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "44e237f4d6a9985719cc1d3383176fac"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "0c9723cea7564bfb0bffb0901f7322ab"
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
    "revision": "5acec22632fab84af3143bc29716ab07"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "e579a819c743a5b0a6f862c32e54a327"
  },
  {
    "url": "interview/css/index.html",
    "revision": "52a6eafdc04c8654fd0ba270cadd2569"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "c01c638cb79ee7941776954b5e220c1e"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "13667d6854a4dfe4cb45ba08c251ef64"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "2d9ec5c242fc6457cfab59733f0b7630"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "6f2fb8e0b945785c21505b59189ede86"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "23e06a5cb6c1e0e8babce52e274842fb"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "861a66bb12726cf0c9a5c7fcbe46f0b5"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "6768f555573a8b4726e0e19c3b062cbe"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "21303cbe737ad4c493938bd98cc5af98"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "62813a7d641b544707a94694f807ae92"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "2b5c444e50d11570340d8b946197e483"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "b9d34ba5b382b487d636fb615a9783ae"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "003716513f1914e4b606cc3cf0e91446"
  },
  {
    "url": "interview/html/index.html",
    "revision": "364845b025cec474c8524cef7929c805"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "eaf12d04cecb912ae52b4d8a9e357b48"
  },
  {
    "url": "interview/http/index.html",
    "revision": "2546bbcaa52f9884b12e7eec6007134f"
  },
  {
    "url": "interview/index.html",
    "revision": "b1c7f1afea423a3346807e2dfb4980ad"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "1a4175f0353f9631c37e12f8c3ea2340"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "6c99868f64c604561caf3963a92ec413"
  },
  {
    "url": "interview/js/index.html",
    "revision": "667d40409c469380a206544376638bf3"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "fd25039909b54b9d25165b64c9a932d9"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "0a4235cb310ae8e6164e9c1e58ebd8d9"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "092ee9d6d30d5500174f14d99caaaced"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "98978fde717e5ba9cbd8dda58f86d108"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "ea2b1c373cf5bb7477aa936e26bc0cd9"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "49a0975dd1fbb55b8995a925e9c97d53"
  },
  {
    "url": "interview/node/index.html",
    "revision": "3afd3089b3f387f41fbc0f18673875e3"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "3f142ce35775080a1e6cae702081df27"
  },
  {
    "url": "interview/react/index.html",
    "revision": "8daddf1bc0f55432ffee03e126a66834"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "6e80c9886220e1d3de3162a2cb357aca"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "50763890d3f4b05c564c9c3550cdfde9"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "e69fafbc04dcd1727c572d809cc67078"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "9ff2d8a7096fd73f4cd056951d289fea"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "ef8d8a5de5efca31a21e0a1917bfc5da"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "6365ae51c901749fa0fdb1938df6e147"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "7016740829607eeeeb84676cd1b8b61d"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "6c90e8e978debde21f27aeb2e36e162a"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "7a9ea6c637d273fe7dd85ac5a1179c98"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "7b6ee7638c7c6e7531672b85531155a4"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "7c970b13d5494bb8d7fe4e15bdb83a96"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "250eae657bd3151dd5ea04ece07534f3"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "bc179d31b53e68bce47f4ace7277603f"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "d9adb0cf437de4f52bc60040d9a38d16"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "a9e1a2b381ed33ad7b65ccf9c108fa85"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "d8039fa70dee550e4452d08ecf03548c"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "48a0e0ad298925764e900d6e75717408"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "212fa0b901a9c65b87533e6d3b7f7c6d"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "4bd23c5079428949775886aee84ced76"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "884dffc75fe7d6cb411c015fa6368fd3"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "1a7bd35934393dcf4470cf1da05e201a"
  },
  {
    "url": "math/index.html",
    "revision": "5ac8772f4b270ba4fa5c39f5a0702266"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "30d357d3e5c11a89a215ce4ddbb6c772"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "d1c2bd2d34eccc934ce1ad55d686a24f"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "91571fda00f44d6b6913ded4e1f5da0e"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "6f77acb1d3d8fea99d74daf9bdf0855d"
  },
  {
    "url": "math/low/index.html",
    "revision": "d16a64d10804c05cd6ecd991b931c08d"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "45e8c83b07b7390caf958368d176e155"
  },
  {
    "url": "math/mid/index.html",
    "revision": "76de3465d8c530f97e5063da5b437159"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "3b26e78ddf5182befb9ec95348d65f44"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "d1cfd5fbf15c0377aea08c92eb55b685"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "16a87660796384c29bf5a4af67d1e1ae"
  },
  {
    "url": "wechat/index.html",
    "revision": "1034d6acc780a58caa10e3538c1ade43"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "723bc7885d82d874f604f056d904980a"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "fd06ee1e7254914c6727d495697b5777"
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
