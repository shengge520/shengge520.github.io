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
    "revision": "7f2cf56ab5d1a7ba671e07328fa84ae7"
  },
  {
    "url": "about/about.html",
    "revision": "08f540236043eb76d2a7977b06bf822b"
  },
  {
    "url": "about/index.html",
    "revision": "5016b4ad38344f22cc7230c9af44a716"
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
    "url": "assets/js/14.c29cf1b8.js",
    "revision": "9200b69f5fd5d9c965b4058e079e4e0d"
  },
  {
    "url": "assets/js/15.b8e4b359.js",
    "revision": "8f14ca0b88e0c56c82dbaeb804a02530"
  },
  {
    "url": "assets/js/16.3d92fce7.js",
    "revision": "2ef62e8fa903ab456bbbb69bac26234c"
  },
  {
    "url": "assets/js/17.200264fa.js",
    "revision": "a4de1b4fec261fbd58df26ee9a5ba503"
  },
  {
    "url": "assets/js/18.e71c274d.js",
    "revision": "444ce503b8c289822ba8099d72df1ec3"
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
    "url": "assets/js/22.396dc7d2.js",
    "revision": "f0356ff170cc0b1d881fe211a9960e43"
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
    "url": "assets/js/25.2a6fe77c.js",
    "revision": "35d94347b5b68f33b21321e77ec2ab69"
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
    "url": "assets/js/35.00ef88da.js",
    "revision": "6ca1aaffedd83147b859d1e8f25bd68e"
  },
  {
    "url": "assets/js/36.989dd5f0.js",
    "revision": "5e2455285a4e80813ae94a85528fc09e"
  },
  {
    "url": "assets/js/37.d0b745f1.js",
    "revision": "3b37bf53b8b54e7f83859a441e41cc7d"
  },
  {
    "url": "assets/js/38.7be5f639.js",
    "revision": "63a332af2be7f83fe40a16d0650bc445"
  },
  {
    "url": "assets/js/39.7f84f669.js",
    "revision": "56d909fc86138527363e1d96a0aefd7f"
  },
  {
    "url": "assets/js/4.1169c5b8.js",
    "revision": "bb080edb48652c4cc3eb8da354a1d9c3"
  },
  {
    "url": "assets/js/40.e126cc4f.js",
    "revision": "6c1a911dedb3c93048b57061dce527b6"
  },
  {
    "url": "assets/js/41.ec2e5e03.js",
    "revision": "36642adbc70806cf1c36bccf07b35953"
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
    "url": "assets/js/app.d703f632.js",
    "revision": "caf6fb232bcb333234be2f933ef100cc"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "0c7c3472f46008772a870d4466159d6f"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "be5d2e0ee675215a294f198575df81f0"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "d234828e6787eba9ac0c6974050a97af"
  },
  {
    "url": "fontend/index.html",
    "revision": "ad5ab974eca0925a2d7f36210a24c037"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "ebb4e63c6ef5dde8b474a9560b7c7163"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "295432de2689172d4e5ee70117625685"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "377ea070b6d273e9d9f905a8fbced7ae"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "a9a5bc2380a35f0ee346768c0186c69f"
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
    "revision": "a018679217033a6497c33e7502c14f5f"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "50f4fdafb1729276260915d0b0984bd0"
  },
  {
    "url": "interview/css/index.html",
    "revision": "2f10cba7ee16e80a32ce6d7106a7aba0"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "3d055542e3b658799ad26d772b154105"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "7c0935ec7155ea8551bcb7313b74bd17"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "a14d9a96ba1b1a33aabd271e196916da"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "ff05ef8dc1d2d581afffa84be7b766d5"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "897a2b0fa9497b1a4898e87dbda77bcc"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "9db236c0693912589219b64bc47baf31"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "f78b091e2b781bb804cac911e6fdb755"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "24bcce6c53ab0ac96486e14ef71712d9"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "876ca6842e065194f5122aaceb078ddd"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "0126dc14f83433abcd1a8494f4703492"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "8c09dd5276a8db7f1f3a4cb9953d78e0"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "e13d04e78aee034c977458df93f951c0"
  },
  {
    "url": "interview/html/index.html",
    "revision": "c4f6f140c85cae73c88717dbb7f83387"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "d81b8c9f37b2a218eb84876d420681f8"
  },
  {
    "url": "interview/http/index.html",
    "revision": "224336b77396e77e0d895dbbcd4cbf6a"
  },
  {
    "url": "interview/index.html",
    "revision": "f0b89a3e451e25689cc63b9140dc86e3"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "eaf7a794de3d46ed60c8f690e12ca13d"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "1f38f7edf2cb28d9b3a69483895ae892"
  },
  {
    "url": "interview/js/index.html",
    "revision": "07b0cebd424f1365e7cd528c092a5c56"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "529ad8f1a8f63ae5129d1564177383a8"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "66f349cf626eec02d12d112a4cbee242"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "affb8be077087cf1c1838d09c85e7ed6"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "9422fde38f35a9cb2cd459f7c4fb41ce"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "4a3a90f58ee4bee8908f357bbdaf96b0"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "83d71ed3f7794e5e99ce25fb6df6f78c"
  },
  {
    "url": "interview/node/index.html",
    "revision": "d7df89966b3d8d99d902643e9d3f4571"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "72f01a321412ee953747f1f79011af56"
  },
  {
    "url": "interview/react/index.html",
    "revision": "62e8758170c7e42645bfaa6c7ac32955"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "69ef0ef310425def3fbf2aaff6d6ac22"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "c81312995532a06462ea541266506047"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "f70bfc7cb5dcf1703f67cc2679e1e1ff"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "ab7cda27373e1b89dfe2bb4e479ca242"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "c5766357e625a723cdf7a6aed6b70dc6"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "233157d86e9151fd8a3015814f38ee45"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "f46d47c45f9a38e468cf519ff380345b"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "563c49ad4e40413475ed2b4b4da3e12a"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "eec337b246e0e898b4cbaaa19b4eb4bc"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "54f918577e4b9fff42da58871f9a1123"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "1caed424d920d498d864e74ee425103f"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "b83ea3aae367179aa9109ecb7b746549"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "931c969dc3f6846a027a0cf44ac5e004"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "9314f542b93f2720c5b331c566fb2f4f"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "63ad3f51aa6816082c759680cc62ab43"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "4b14dcde4bc18f48fb242fd884616573"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "1e628e3332b4f930a1f3db1e49985f89"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "f18600da8ccd1444971ce488b82c0188"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "63439ab1a95440fa1eff01d2fbe4bbda"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "94727345cf60ee3fa36e9f03b206c2ec"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "478ed4e0f42a29c6eb14de238d0545ab"
  },
  {
    "url": "math/index.html",
    "revision": "5fea356042757898c222eec8a8b07eb9"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "d95ba7a6d2f24bd77db28a38b7ebc45a"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "26b51818bde378615ec4e35414a9ae44"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "8d9b2e56c7b5019525773142b8cd1321"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "8b579cfa2b19e87566db4df7bb67860f"
  },
  {
    "url": "math/low/index.html",
    "revision": "623b864c75f5cf336851d724036031c4"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "00d3f8777171fed36f48c51db2d1a3d8"
  },
  {
    "url": "math/mid/index.html",
    "revision": "a15843888aa391af098a932cc98cbc0b"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "e9e21fc6157cfbf1d3bef7f056cfb65a"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "aab1d9ac1fbec75e105a5cbc539bdc8e"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "c7116938f63a8e0f0eb1f2210fcd6f99"
  },
  {
    "url": "wechat/index.html",
    "revision": "8d198b6ce783a5b02737c6d62569bb59"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "b37a60a03fc9d9cc5950e866c093d9c0"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "fc44b308b5828e0c8dbace2fddad27d3"
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
