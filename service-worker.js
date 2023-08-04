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
    "revision": "1803dc82709b8de10d7c7d95454821ba"
  },
  {
    "url": "about/about.html",
    "revision": "c68054f2ae97f0119417e01ee70a7770"
  },
  {
    "url": "about/index.html",
    "revision": "04fe08dac56588d9aa6d809bff026b02"
  },
  {
    "url": "assets/css/0.styles.50c1add3.css",
    "revision": "52bba63c09d79457b4391a96965f55b9"
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
    "url": "assets/js/10.74c7dc15.js",
    "revision": "ef0b5290070f2a2f6e9fe424f5313287"
  },
  {
    "url": "assets/js/11.0359d8f4.js",
    "revision": "fb28ce05d645823d1325b042e1273b5b"
  },
  {
    "url": "assets/js/12.8e19cbc9.js",
    "revision": "f2744c98ec26b7a6abc41a16234fab1f"
  },
  {
    "url": "assets/js/13.fd502cb1.js",
    "revision": "df0e28afaa3a1aa5b720e22e07a64cc0"
  },
  {
    "url": "assets/js/14.da190eca.js",
    "revision": "7e030c7d2ea40aa1966bf1c3a9367008"
  },
  {
    "url": "assets/js/15.200a2b3a.js",
    "revision": "0339a86f6047e37f7e21ef4ff31a1a97"
  },
  {
    "url": "assets/js/16.fae973e7.js",
    "revision": "9269da30cecb63e0eaa561db4f1ec954"
  },
  {
    "url": "assets/js/17.5c4c8dbb.js",
    "revision": "b43a4b88c50e23ab005938c13bc8d17d"
  },
  {
    "url": "assets/js/18.802b10a1.js",
    "revision": "dcd03865a2dcee249ad6cc4af5408f59"
  },
  {
    "url": "assets/js/19.ec261c0a.js",
    "revision": "d8994214a57cad00293ed9245a8183a8"
  },
  {
    "url": "assets/js/2.af22ff36.js",
    "revision": "d19b4cf833fa184340962ae0c2de72a1"
  },
  {
    "url": "assets/js/20.ecce1d63.js",
    "revision": "67baef0eebbfb0ebc31e76261668aa61"
  },
  {
    "url": "assets/js/21.545f15e9.js",
    "revision": "26507d700cc11df112ae595bd68fb136"
  },
  {
    "url": "assets/js/22.6da3e530.js",
    "revision": "2ff72a7493bf855e187b06ee406ec1f3"
  },
  {
    "url": "assets/js/23.b7b6723c.js",
    "revision": "fda164df6601a06ab04ec6d8f67918cb"
  },
  {
    "url": "assets/js/24.c9792f28.js",
    "revision": "f3ad4ffa854f6dcbeeba4600e57cac44"
  },
  {
    "url": "assets/js/25.ce8cdf3b.js",
    "revision": "58658965621da15fefb7bc14fd03a393"
  },
  {
    "url": "assets/js/26.27a034d3.js",
    "revision": "8efe82b00f83d51181025dbd61caff96"
  },
  {
    "url": "assets/js/27.ecefd437.js",
    "revision": "67d4444500e2656ab6f5c06d2ffb57d7"
  },
  {
    "url": "assets/js/28.0aaea382.js",
    "revision": "38e9c25f3c95dd5a9a71c261b389fb6f"
  },
  {
    "url": "assets/js/29.bdd84768.js",
    "revision": "b3293431c1f09f9603b2504639a5f823"
  },
  {
    "url": "assets/js/3.d77669c8.js",
    "revision": "e99e4a123d98a95ed398ea32cf6706b6"
  },
  {
    "url": "assets/js/30.3a598562.js",
    "revision": "876590ed7c60f7a4b7bcf93fd9bfb4cb"
  },
  {
    "url": "assets/js/31.72528ffd.js",
    "revision": "6388e7382d66814b7e34a03e46863291"
  },
  {
    "url": "assets/js/32.241699e3.js",
    "revision": "fa3bd70de263f9fe6bd3150b296f0ade"
  },
  {
    "url": "assets/js/33.2a44d984.js",
    "revision": "30fe19f87f7f1a4f8cc433b99c27c423"
  },
  {
    "url": "assets/js/34.9e9b26c5.js",
    "revision": "fc94c36b5d59359d48d3506e9d1fb281"
  },
  {
    "url": "assets/js/35.b632b8f8.js",
    "revision": "1fd975ecedd6a4eef2889d4d43c42eea"
  },
  {
    "url": "assets/js/36.e498b246.js",
    "revision": "429b73e9f3bd8898453cfe112f161031"
  },
  {
    "url": "assets/js/37.b4e4bfd5.js",
    "revision": "854e67ab89b50e3dec13d820c276646e"
  },
  {
    "url": "assets/js/38.a85f80dc.js",
    "revision": "9fa54943c0ed5ae06e3d149b31740575"
  },
  {
    "url": "assets/js/39.adefc884.js",
    "revision": "b3d2f4ebfa1e7d5d144f68acf1452573"
  },
  {
    "url": "assets/js/4.bdda43e5.js",
    "revision": "2a04a1a39975fa3088d773e62b4f1561"
  },
  {
    "url": "assets/js/40.d6c91592.js",
    "revision": "77e95a3e76cea63a9f0b9c196d4e0e19"
  },
  {
    "url": "assets/js/41.f02b4255.js",
    "revision": "9f94edcd0f29ca835c478120961118d7"
  },
  {
    "url": "assets/js/42.04767901.js",
    "revision": "dfbf43dee8498aa0323bc2ce85409842"
  },
  {
    "url": "assets/js/43.458863ca.js",
    "revision": "991ef8871771fabdb8d86a7263ba357d"
  },
  {
    "url": "assets/js/44.1a26e8bb.js",
    "revision": "8ee78c733e9465a4a1541bcd222a8460"
  },
  {
    "url": "assets/js/45.1f180bb9.js",
    "revision": "06d7e9d8709385909bd497c724886ba5"
  },
  {
    "url": "assets/js/46.5e45aa8f.js",
    "revision": "182cd4b905e11f909e861860986eeb48"
  },
  {
    "url": "assets/js/47.fce9e7a7.js",
    "revision": "737ed10728878694fe3e06fe2b88566b"
  },
  {
    "url": "assets/js/48.493641d8.js",
    "revision": "591655dc897595b8920d4a865318ffdf"
  },
  {
    "url": "assets/js/49.3e2adf50.js",
    "revision": "7e5508aef9c6d255f1923e1d6dfebd31"
  },
  {
    "url": "assets/js/5.d06f03c6.js",
    "revision": "2a8d39d50f5286910ccb7cb3304b0ffb"
  },
  {
    "url": "assets/js/50.567f516a.js",
    "revision": "3b38e70351e7377f7520137ae7895c58"
  },
  {
    "url": "assets/js/51.cf822dd7.js",
    "revision": "952490cbbfe2995d55b5e7a18eb19e6c"
  },
  {
    "url": "assets/js/52.80e71d1e.js",
    "revision": "7de3ed0d59941fda9d8548a6cf34d511"
  },
  {
    "url": "assets/js/53.9051d839.js",
    "revision": "0ca72d8926c9c7d87ebf9de5808dc738"
  },
  {
    "url": "assets/js/54.5588c1d1.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.764485aa.js",
    "revision": "4c46ce9cc655d4c29f7f0758edb641df"
  },
  {
    "url": "assets/js/56.a80b04cf.js",
    "revision": "06e9fb67eab3f4d4636a3330dc1b8e8d"
  },
  {
    "url": "assets/js/57.59944576.js",
    "revision": "43577b4f47b4a9507358c2a01525a1de"
  },
  {
    "url": "assets/js/58.72eb8762.js",
    "revision": "509ebafbaa8d1a2e1481d64dcabcbf11"
  },
  {
    "url": "assets/js/59.f8e89977.js",
    "revision": "927ea6598faa6f62ff2f41561f67b686"
  },
  {
    "url": "assets/js/6.e4862787.js",
    "revision": "02823bd9b49caff42706e4d3164684fb"
  },
  {
    "url": "assets/js/60.98c789ed.js",
    "revision": "f7ad7ee68aa7d3c681d16169fdfc5db9"
  },
  {
    "url": "assets/js/61.25a4320a.js",
    "revision": "c9dd88ad6056cddc589d1fa4e74826fe"
  },
  {
    "url": "assets/js/62.20d47fe3.js",
    "revision": "407c366eed520faeaf5a4f1489758913"
  },
  {
    "url": "assets/js/63.97ce6f73.js",
    "revision": "d7c6f56236b2977b2b77170f86146203"
  },
  {
    "url": "assets/js/64.124a7a00.js",
    "revision": "39b8eb4e9c7c58fd5544852512d65aed"
  },
  {
    "url": "assets/js/65.f9c034a3.js",
    "revision": "dbc5347b25cec4d441e7e0369564c6d3"
  },
  {
    "url": "assets/js/66.7cb6ce89.js",
    "revision": "7d7bafa3a300b6b9681e095297d2e9e8"
  },
  {
    "url": "assets/js/67.cc6341cf.js",
    "revision": "2c170af1aba7629796dd049c2bd7f046"
  },
  {
    "url": "assets/js/68.4eeda2ef.js",
    "revision": "51d5580afa24129c8d100566c646ca00"
  },
  {
    "url": "assets/js/69.36f5c626.js",
    "revision": "98873154e1f57e214b77e249305ee0b7"
  },
  {
    "url": "assets/js/7.2ddf3fc2.js",
    "revision": "f03e602f234e639fedd77af6c13f65d6"
  },
  {
    "url": "assets/js/70.82ece70a.js",
    "revision": "70038d200715c30d64f7913d40735eae"
  },
  {
    "url": "assets/js/71.3c4b774b.js",
    "revision": "021766779e5ba03ef0529e49d6a8ad18"
  },
  {
    "url": "assets/js/72.b0397422.js",
    "revision": "fa477a1dd960ad6279bf5321541daecd"
  },
  {
    "url": "assets/js/73.e2219709.js",
    "revision": "b9b71f4b5a5203dcc301ec56373fc4f2"
  },
  {
    "url": "assets/js/74.2cc952fc.js",
    "revision": "f16db7b691d02f22dd0b9fbadff388ea"
  },
  {
    "url": "assets/js/75.94c81c9e.js",
    "revision": "dfb3a3c3d0137e0133bb2e15efc7ff1a"
  },
  {
    "url": "assets/js/76.0855c822.js",
    "revision": "51ad7187aa27e61ef21c765b4808394b"
  },
  {
    "url": "assets/js/77.77275f01.js",
    "revision": "cd2d1e143b17b7cd0436b7a6353e663c"
  },
  {
    "url": "assets/js/78.bfa48c96.js",
    "revision": "a569675dc6a083a354b896d427c9577e"
  },
  {
    "url": "assets/js/79.9d6835c1.js",
    "revision": "e073eef47a1e1deecca1a956441e41f9"
  },
  {
    "url": "assets/js/8.71869f86.js",
    "revision": "9d6f2283ddd1eff2c60ff81cc5a86a9a"
  },
  {
    "url": "assets/js/80.0cea8f20.js",
    "revision": "5df295151fc4633cb0dc2fb8cbc55c75"
  },
  {
    "url": "assets/js/81.5881176c.js",
    "revision": "4e1ff6cc657e68177b6b0adabf2ece10"
  },
  {
    "url": "assets/js/82.9b73c675.js",
    "revision": "3389d518ab2a42da76e1231a0d61746b"
  },
  {
    "url": "assets/js/83.8d13a875.js",
    "revision": "3579fe6800a84cb288167731df5c6001"
  },
  {
    "url": "assets/js/84.d18eb385.js",
    "revision": "6b3722ab88c34e6975ccc7d664b77380"
  },
  {
    "url": "assets/js/9.e09f7e25.js",
    "revision": "03547a50e6296c882027b93c39f5ad03"
  },
  {
    "url": "assets/js/app.bc8221c2.js",
    "revision": "dfad7a8e0da4e11b5f01ba59c47dff2f"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "da79f7cd30a3ebe5808a0cb85b997e19"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "6a30ccc15769ddc75b064e91ca63cea6"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "da03f131474003c38c663cd9fc509ae6"
  },
  {
    "url": "fontend/index.html",
    "revision": "0a374c012b9e9e6840bc2087b3556c9d"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "86553fca2de48760704943976b1fab0f"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "f0ab8c95390a9bde2c90bebdf9a781ad"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "c78ccdb0f42b0155939ed9ca42d7d505"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "adf01243da750b406f83b926fb708321"
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
    "revision": "70298b0b4e50453e14a80acab2d166bb"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "fec2f03374390d68691bd53db89d9e7d"
  },
  {
    "url": "interview/css/index.html",
    "revision": "d449a23c7a3c1f453c6083e74a4245b0"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "c95aee67e519f65a00e505575d145bf3"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "68b4e27f2aa441a791f78931b0dd8acf"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "a760dfc6154d57736f8ab406240066a6"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "b288f1079f9c370f3e4f68f301079e32"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "81294be23d6ef178ecc71d73263c8db7"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "73514d1b638ea1652e27068f3c2ce962"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "6ddba9a191e41cc47a4ce10a11ad566c"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "7730fd1eb0890ff4a24ad361b27c7d7a"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "d5fd56b7c38de965b06d94d8d21caffd"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "d648c6faa41ab218570d200a3415dd2a"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "8ffb474d01ffe9a6d00ec7550fbc3ab0"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "e968270718952b976dd429ad4388d234"
  },
  {
    "url": "interview/html/index.html",
    "revision": "9028aae088187ca5675d7d4803fe7b44"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "a01f6b1ad6c840f12716e5e561019b8a"
  },
  {
    "url": "interview/http/index.html",
    "revision": "a27e2974d7b3e5daf092f28eaf032fec"
  },
  {
    "url": "interview/index.html",
    "revision": "f6123b9c0596e48d0e9281fcd48f068d"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "00ed44fdd61dc354ad11d2358d928a02"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "4579fd2ef0fc76af40dd30f446afc10b"
  },
  {
    "url": "interview/js/index.html",
    "revision": "b586d84bc8cdd734fbdc30837758b648"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "b8a9ea2c41d1b73d584a61e6b61cdff1"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "84b860b14a829a2a46d4231f96a4b082"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "61bfa4352df8eda61cbcef2c60f4d974"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "e389e685e67e262c83b148d279134ab3"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "9aa7c683337a3b32eda479a41070745c"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "93598ac1073079d13b29bbd7c3eee5c0"
  },
  {
    "url": "interview/node/index.html",
    "revision": "808a2eecfa71bfecb5db50bf7c5a84d4"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "ec3adae234c91c39b5e7b5a37c6d8fc0"
  },
  {
    "url": "interview/react/index.html",
    "revision": "9b3234ddd2e281240634b81134cf0b73"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "f6389f55eca8e6441c7b34e91064bedf"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "30d36321b8258c607adfc25518e6b444"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "bcdacb6283765fd3806cb0a5ed5fe770"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "8c1fc194933decf1ec12f1795b23b246"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "97717e67a5d2191c40ac2703bab13594"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "89d879b75e98f5c3ad6d92c14abb08b1"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "f4f8de8c3d00680eb8c7d7e56739171b"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "53ba943bae3f579dba114b85fed2d35f"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "02fe74ad60ef3901ed4aa14060b11bc9"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "f735a6a3fcfc21903c7f89c4283ceb56"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "98a29b3d2ed8e8d8d63bad34bbc4cd65"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "029c42b7f8d66387a15eb338712e2b99"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "72f806bfeeabea67ea09b240ff6ba6d1"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "d667607690e3983153d7e44658f2b40a"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "ad3f59e3f1a2dae7abf90a1641202177"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "009f593abe91b4c4a84b4628e33fbbb3"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "6d4fa98b7024498ce9cbfd242df82ee5"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "1aea45d7ef47f7fd0075f456d444c40a"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "ab4139aae102b0a4ef0ae18f0505c4bc"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "a48fd2183310b8819a6c1506d96aac50"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "db5e0755368c71be9b521c8f26b60582"
  },
  {
    "url": "math/index.html",
    "revision": "7a596f045f23d8d8b4de2af797285874"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "9bde266ba9fe2894d927cec38b92a365"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "ec7ca33bb6c5128b29c8b040cb916a9c"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "b3d6eaa17502f46073b8d6f47aa5ef75"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "63f502a97edc05315c4b702c696abc10"
  },
  {
    "url": "math/low/index.html",
    "revision": "fcae8d6eb38dded20be17d945168565b"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "eabaa2bc685038bcff9f8de93617e923"
  },
  {
    "url": "math/mid/index.html",
    "revision": "02708b002890ff92e146ebfa7a751317"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "39f28ce28cc6b8937d3a2d970a9a8584"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "e87225655a114b06a63bd1d8cc69e998"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "53bcb4a41ce6e0f8f9057abe100639ee"
  },
  {
    "url": "wechat/index.html",
    "revision": "965477f2b97e68f778cb001e10eda7ca"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "13434e7f36937fb032bf05caaadb593d"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "610fc0ede813702f6941af36d92a07fe"
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
