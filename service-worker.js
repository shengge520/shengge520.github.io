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
    "revision": "79bc95b3436b00268666bc87ce225012"
  },
  {
    "url": "about/about.html",
    "revision": "380a1246900dbf44808fb43e66f40c33"
  },
  {
    "url": "about/index.html",
    "revision": "26a3e041bbcd2fe4da43979c3049e38b"
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
    "url": "assets/js/14.7413730f.js",
    "revision": "e2fe7a1577929728ddbf33138895360b"
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
    "url": "assets/js/20.37b9b6f9.js",
    "revision": "8d8ba9072a2662bb88f90870cecff3ec"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.36d9bae8.js",
    "revision": "5cfa9c2bd23a4388a0fe98823b6957fb"
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
    "url": "assets/js/25.a9a06371.js",
    "revision": "c3ef459bac1f04c9c643f1d2b26847b4"
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
    "url": "assets/js/35.697c53d1.js",
    "revision": "fd5e141fbf83cf40ed811ddafa2958e0"
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
    "url": "assets/js/38.8cbf2a6d.js",
    "revision": "525a63c956af5ba9139a0c74c2181437"
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
    "url": "assets/js/40.2a435e1d.js",
    "revision": "78b696ef508aae7447cbe9331bd430fa"
  },
  {
    "url": "assets/js/41.0392cefb.js",
    "revision": "73717c2abdb9fcc4f0ad8cfc8b749034"
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
    "url": "assets/js/51.9df95cd3.js",
    "revision": "41ea56c712695a643cbf61cd3b05c7eb"
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
    "url": "assets/js/55.eccafe0e.js",
    "revision": "65bc91de5164e2a4664f9478823ea46b"
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
    "url": "assets/js/9.7b6a8526.js",
    "revision": "727ad4f4bfc53cfd9fb0f4b89878d7e3"
  },
  {
    "url": "assets/js/app.920177db.js",
    "revision": "3e470878664f0471380baa70ea075335"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "18b9de82b6bbb03188cb82422e3abb25"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "4c021dd049dc7fe0a55e2b78a46064b0"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "0b1964d3482c6ebffc0310b82de4ab00"
  },
  {
    "url": "fontend/index.html",
    "revision": "68ef5dfc15effdd964ccbd952ef2ca69"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "38b4833ed0aabafdd686e8ee62afdcc5"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "762c205e5931caa55b1eb10300aea83c"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "e65e00592cb38a301ce9befb7eeb5b77"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "3fef2d4f982cbb039c63bf2fa468483e"
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
    "revision": "4b824abe635251b7f97d9796f4c82af6"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "9c25ab8f6e46d05ba66b90ce92867021"
  },
  {
    "url": "interview/css/index.html",
    "revision": "859c744c410b7cd19286d39b3995d71f"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "8e85c41472e3a0a017245a44021c9740"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "07e072b8f046e7ae48c4dff12313c1f6"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "c0ece5eab9c48d151c22967e6f6ab890"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "288aca769352a477ce4f4e387fefcab5"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "11b9937c8c14459c1250b70a341d20b5"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "a6cdf724bc57fe6a721db525fc8e43f3"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "c620c131df243d34f955703e66a259d0"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "edb4f62ea040cd1891f5b8bcad3e6ad4"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "58d6a868c7c3efcb6aa7389d53078e80"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "3b496f726a67402a30a01409bd68efd2"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "cfd61a293120d2c38f1affc142051def"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "d95c28d957af4f832046ea6e913c030a"
  },
  {
    "url": "interview/html/index.html",
    "revision": "72052dc2ab809ec654f7933711af90f2"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "3f525a88ba748a1b2243a4c8279550fb"
  },
  {
    "url": "interview/http/index.html",
    "revision": "db17f3ecde57d162c8ccb9578a748f27"
  },
  {
    "url": "interview/index.html",
    "revision": "eb735d5d6c26177566144040cc7d3143"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "dab6f2cc95b6839d3ea5161217d6ac3f"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "52089f3b7f55fc98e1f1e8cbac3de9a7"
  },
  {
    "url": "interview/js/index.html",
    "revision": "2e8cd77f1bcc7001e14b5d78b465448a"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "506b2a55b159ecaba447a411830f5907"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "7eda0be6aec40ac757c1fb5a52d2f4a1"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "f04cef556b7208995c4ac3dabfc4f739"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "ac8ce6bb3a716c9fc85aeb1afa5ec291"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "bec43274c09a01c99f9fb43d654a972c"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "0ec101726568c4731ddf0cd400f8c7b6"
  },
  {
    "url": "interview/node/index.html",
    "revision": "467351e631f911e51ce6527ce145583b"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "152f2337cb335178864a201075a239f9"
  },
  {
    "url": "interview/react/index.html",
    "revision": "03b1c98573c1f6e08c52834e793ec3fe"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "b1331fc90db2d8a77312f55554080785"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "8be2ebc8986906c0d085c010d9f57e2b"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "b48bf876fa3d57df36f86baa015cb1c4"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "22ea98e93c7a7f65cfd45726fc5a2f93"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "c378fcc90dec6b9124377b89a55c14b2"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "f58ec5e2f6a21bff6b7182f3ae65d280"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "ae9693fb33a75bf9d32f008906325bf4"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "dfc224d0d59d0889b5799ea26cfd6d6f"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "da21e12149729557e44fa35a6bfd8b56"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "3e5bed343b702d7b7229bddbaff9725e"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "ed8a8b6c1b0aebe0423c51a001756408"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "363a5e43ae0a425a76febb9b8cee8a6c"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "f2a87e328e5d0fa130977b8e3de5b697"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "e638dfd0abd1237d11ad33be85a7af26"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "d557617c230ea69899b2e0c8118169ed"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "93bb759fd81c1f92af66690cf33751e0"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "e6767e01031a773158d8bcbec21be2d9"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "b7985e7a9d30b5872bb91d420fb5d672"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "203038997d71a892d32135294b084357"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "f77acf055b88a2d4b74edd17c4bb3cac"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "2b4e2a1fe874e7180b7065dd10555258"
  },
  {
    "url": "math/index.html",
    "revision": "73b92e2d88ccf8ed5ab52b23141cc109"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "ca1db72cff20f423a14f8613ed33356e"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "539812d5dcb87690beaedac22aa24de1"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "8c65e17683f61145a26358d6541d8722"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "36a29409d0930e0d52d2227ccc66519b"
  },
  {
    "url": "math/low/index.html",
    "revision": "ccc573e48068cd0319c2bbb27a4f65d7"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "c28e9e6256c1f364cbf1705f5a324427"
  },
  {
    "url": "math/mid/index.html",
    "revision": "a7bb9f624f475b9babcd7496a9d516ca"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "84710904d327d8f333c2369ae5204051"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "7b08cb4c05542b05f313347f694562c0"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "e1f79d33b0a69ab64d28b78a1eb716d3"
  },
  {
    "url": "wechat/index.html",
    "revision": "7ebe54d290df1e9df9d199f09a2bdd24"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "fa7e9bbd2d9741104538c6c3308e8d1e"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "2d49ad9d6c726e470c33d624996b01ed"
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
