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
    "revision": "2446f8887d0e34eec3a454b863eda929"
  },
  {
    "url": "about/about.html",
    "revision": "3d1bc745223fc70b43d0820189d615a5"
  },
  {
    "url": "about/index.html",
    "revision": "f4e99620c7a42efbd6cbf176fba82cf4"
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
    "url": "assets/js/49.47b07b66.js",
    "revision": "f715627e3962adcdde101c140b7b242e"
  },
  {
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
  },
  {
    "url": "assets/js/50.9a832101.js",
    "revision": "70452b856a970c023460c6a9f20cb0af"
  },
  {
    "url": "assets/js/51.0449c556.js",
    "revision": "fd7e55db9688a307c4a58c91cd4d379e"
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
    "url": "assets/js/55.5890f64b.js",
    "revision": "a64a9774e80e31d09ae88bffeda731e3"
  },
  {
    "url": "assets/js/56.9bef3140.js",
    "revision": "4fcf8c76f0bdd86cfbce83f4e4a3897a"
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
    "url": "assets/js/app.7c2a841a.js",
    "revision": "17900bc77e6196a3da9247608bce9271"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "1f31e1fcf6d69597711b04aea8232f10"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "27ceece134803a2517a3bb50c85e9c0d"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "8644949f03440045b24ee5e24fcb8336"
  },
  {
    "url": "fontend/index.html",
    "revision": "5be2c25328a4011832a2dec908b56f6d"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "c90eba70ffcd30aa2ca884eadefa1911"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "431219e270b7855bd3990bbe98bae9dc"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "79bb6b4b271b13ff2ff54de20b62e79d"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "66f4d1554ba85b1ef74f786377c5e0d0"
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
    "revision": "537c0275119737cd1fe51e454d6adc23"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "dda416e44d85abb9d6726e562d1f6277"
  },
  {
    "url": "interview/css/index.html",
    "revision": "26663e4360f26d074809924d0ed302e0"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "ddc3660e1c65ccedc243b8bdf3192245"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "5d80201acdf5fe5e0e0e14370513ed3c"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "7b06b3892db876a5ad5e70424e59fdbf"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "0337a492bb681fe39f192d2abd296bd1"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "05d0e27c3a1089c8a15d73be79e4686a"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "0cf9ebf113e00ab0caa5488275d53d8a"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "20a35748687b31807c15e5f0680925b2"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "8ffbcdb1eddf536ec3b6719fed175d31"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "4a332f6342b18e4a735e2e8ffc0f69e7"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "4ae183bb4a4e8f7e8da163063e0347e8"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "ba9da6fff64ff6c27000e25abef41202"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "a98475d58dab7275b0adf005b057f660"
  },
  {
    "url": "interview/html/index.html",
    "revision": "1845500e828c8f9af3b5c4caffb51e38"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "e565b3494d98f8d4a155f28582cdd0d1"
  },
  {
    "url": "interview/http/index.html",
    "revision": "a1ef5c675e3530a7f84586585c0baa24"
  },
  {
    "url": "interview/index.html",
    "revision": "1b3690e731eb1377fd7631a943e2e8e1"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "3bb83c5988ab8e6a4c2e3d28778c23eb"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "cb67a18ffe767452092ecc30df567a4f"
  },
  {
    "url": "interview/js/index.html",
    "revision": "a7c61bcde163c04e58ee3937bac8ccbb"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "53cb3c50180e36c6273868c70d5a1a53"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "de2218ef3ad42a4ac2c26f93f782f6d0"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "033d398b5521335b1a686173d8c1fb73"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "18ea4bd058999a0a4a116dc39ae5dbec"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "26a1406c102922ed827bcc951df52625"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "e0a8c1d77cd57349f1676d3b3b61a8c1"
  },
  {
    "url": "interview/node/index.html",
    "revision": "4a351cd3ead512482601671e019c288f"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "1de319bb7616ca477a953913a1944d4b"
  },
  {
    "url": "interview/react/index.html",
    "revision": "48c1bcce216e1a38cc6cc7f8d95422b3"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "c394fb9f53b9eb1e191fdf7a03c9e1df"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "665290d4e0f6aa5f66da25e516cd49fe"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "f220ab5fc1784d286187406a10b64781"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "deb88d5a045c626e6ce3b6f89db4a98a"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "269d64dfd6c2ccfa9ad9cc6eaafc3415"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "d94bc11b94807fb95f0fe3e99f19568e"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "2e0d6f0ea6372b051879e267263cb658"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "3feca2b196deb2516b1576c904a5b849"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "ebfa08a92e944eb4092250513b1009b2"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "337048e171af578e3724c246bede45a5"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "680dcf694c25237c39843ae9325e5b42"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "50451437f65f3cc439d5d67345e4d2b1"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "f03d989e62415b6cabcf69da51c47688"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "c9b465551d85deb9be904d47cd778edc"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "954ab4c6279fff7462fcaa569e5114ef"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "5c968aad1e91f6faca60f6a8a110281e"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "1a757fa967c9dc2328e37f1c09dd1b17"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "e14575a139eea57274c95fa15f985fc4"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "ec89bb0dddab0d174aad168755216c84"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "e98351c0b9187cd5524379cf848f27f1"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "1b81b316eabb27669f81a4dd08a8f9af"
  },
  {
    "url": "math/index.html",
    "revision": "f19a79301cfdd19621fbb5eb50a37863"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "f14c638ac6fbb98e8f11b9f94b32abc0"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "7a6e835f13e67f576e41f64a085d36aa"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "4ffc0ff3e4a5bc96304262ad4901be8e"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "8d78408d237accc55f06f99066b5ae05"
  },
  {
    "url": "math/low/index.html",
    "revision": "4de24d37c43474bde94f48ceaba1c27c"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "79486785612e0d1369221144e9efd61e"
  },
  {
    "url": "math/mid/index.html",
    "revision": "e9c83e329690a6f6f9a617789a47151c"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "7f3861c580ae01b23509f76cdbec60aa"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "3c984802f41d19fccc6903c8f82b1228"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "c0498e8f31dc5614ba287675f32ef2f3"
  },
  {
    "url": "wechat/index.html",
    "revision": "ba33559fc0b673bf0ad748bfd77ea253"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "f0813cef6f46625d455927f610abebfb"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "d329fb2a0272530e8790889393058928"
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
