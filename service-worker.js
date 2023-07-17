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
    "revision": "72e40f51cbb14479e00b0fb92cb33b5b"
  },
  {
    "url": "about/about.html",
    "revision": "9b8e8eb62b84dd738de02167aa9437d8"
  },
  {
    "url": "about/index.html",
    "revision": "eb41ae96762c2eb59b8ac6749b2570ef"
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
    "url": "assets/js/10.9881de60.js",
    "revision": "0561179b24b549cc2fae973ab96d6e29"
  },
  {
    "url": "assets/js/11.ae627b6d.js",
    "revision": "504f3c03575d50673a5fe3f1cd4f2735"
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
    "url": "assets/js/30.3f2528f2.js",
    "revision": "cc79ab5d0a2377b588bd26a3ed4687d4"
  },
  {
    "url": "assets/js/31.848ccb7b.js",
    "revision": "5c02e85dacbfaea7529f11336061b7ef"
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
    "url": "assets/js/46.2f2594d0.js",
    "revision": "dd9fe6466f70b4358a87696c8ff8b604"
  },
  {
    "url": "assets/js/47.f55bd2cc.js",
    "revision": "9d5d3a2b36f3675ad8eca7a96f2bdbf6"
  },
  {
    "url": "assets/js/48.534911b6.js",
    "revision": "3027808edf780d0b67d7eb76156156a4"
  },
  {
    "url": "assets/js/49.48ac4c58.js",
    "revision": "ab76400f909def291d2fc0b1b122f623"
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
    "url": "assets/js/51.2af99965.js",
    "revision": "1534aea659f66b62dda9a33bb312ac0e"
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
    "url": "assets/js/56.75326c7f.js",
    "revision": "3dbcddcb7713acce4d7aea85cbcdc7c8"
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
    "url": "assets/js/59.71a43b14.js",
    "revision": "a5c408197bc4e799c929f6f719a0ce83"
  },
  {
    "url": "assets/js/6.9ffa83d3.js",
    "revision": "bc5d046420c3e4ddebd097d7904d612a"
  },
  {
    "url": "assets/js/60.8d4790bc.js",
    "revision": "c73e0a1f6c9e87aada6db552a594b917"
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
    "url": "assets/js/63.f142372a.js",
    "revision": "b89f95a8696dc4d5662ed8030c7f480e"
  },
  {
    "url": "assets/js/64.bcc22084.js",
    "revision": "f620a37e55c2a7afc8a564ee447a1055"
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
    "url": "assets/js/67.73736b11.js",
    "revision": "9c581030ada780d4ad00fce6e138f3c6"
  },
  {
    "url": "assets/js/68.c3a40f4e.js",
    "revision": "3f07f48a1c3a8dbf5249b4d2a8ce9e96"
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
    "url": "assets/js/71.4336f4a9.js",
    "revision": "8b7bce30c077e5e135971009b8897e52"
  },
  {
    "url": "assets/js/72.a396281c.js",
    "revision": "2a048028fc53f81152bf53837d71b053"
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
    "url": "assets/js/75.e8bdeaeb.js",
    "revision": "dfb3a3c3d0137e0133bb2e15efc7ff1a"
  },
  {
    "url": "assets/js/76.a6d9eb4f.js",
    "revision": "1d387b90d4de63d7e5503b2711576354"
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
    "url": "assets/js/81.740d82f5.js",
    "revision": "4e1ff6cc657e68177b6b0adabf2ece10"
  },
  {
    "url": "assets/js/82.4ef67cf1.js",
    "revision": "7164ae7e3b2014e89b3c6f1b7da0b4d1"
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
    "url": "assets/js/app.143227ee.js",
    "revision": "fd6379dc88bfba2ba36cf2e2c55b86ae"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "ad9fca8e20ef8729eeea1bfe776cd735"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "17b84746cc098f34e89c08f10d73adfb"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "6fcb3dce0f91e7174eb91cab97b5de38"
  },
  {
    "url": "fontend/index.html",
    "revision": "e2c4409c5359e0abe2f85601a424fe34"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "927bc47a64e1363b0a71b494f86b9b31"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "42d6d744d284c78ceec88b75c30e0d61"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "f074a983f3ee402c6b2a167984d2b87b"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "f5ec6845c68bcf5fe41ae694c6403023"
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
    "revision": "16fd50433570f05b11a42c014e3d569b"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "9863367b7aa8dcbfc330938cc834b5a0"
  },
  {
    "url": "interview/css/index.html",
    "revision": "577c22cc76d8e36ef6a6b973ffdcb027"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "62e37c8e4eb3674d144fa4606826ff6f"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "48fce71795e0f214aae29be615426579"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "08f80d62e24d84a97c3edb9b9a151803"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "cee875a098069927aac0ed626d1c4bb6"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "acb446432cf52496f1f0ab8627a311c3"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "d0883266d040aec7ac655fcfc2371245"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "d1fc7e550f725dd2da326ac45759d663"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "0db1a306384d41c8a48d75ad57ccc513"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "bb8841c5c144db6a52fcccde2bf76485"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "1d354612930e5703bb9987c20f94085c"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "5fc2b45738e943184e807e9056e4fa0d"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "2b35b0504e7d63421e0ee99d99a13e51"
  },
  {
    "url": "interview/html/index.html",
    "revision": "ccc1bbdaecce260d25bedfc6bd4ebfce"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "2a3ab016cdf246f5c314345862b55218"
  },
  {
    "url": "interview/http/index.html",
    "revision": "032b8862dbb18436d38857661877ce5c"
  },
  {
    "url": "interview/index.html",
    "revision": "18452c9d8a0d6828c56ff40d37edbd66"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "704c9fe760015bc53f18a5000e4fb0be"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "03a03817b57fdaa2efc069f5982119e2"
  },
  {
    "url": "interview/js/index.html",
    "revision": "670b8b61084e13a1de66457505e4b28c"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "8e4e61cced70fd5f0147b2f4c9ccf483"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "c490e74a6e368097be8c42c8e7a9c5b1"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "9d275ab8a75c5b7780e96729bf9d94d9"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "9462cd7c58a6123cb4f5c7b8e5aedf52"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "ea15e31fb6447f5100c58d4588507b18"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "f0ad44381b54c18bea7d186146421dc5"
  },
  {
    "url": "interview/node/index.html",
    "revision": "a982ead0c917522e5b3ccf4d28c69474"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "04edbca54d4722dde9a452449dce738f"
  },
  {
    "url": "interview/react/index.html",
    "revision": "93de97e7410ef0f0d9e8e751120c710f"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "edb5edb52042dd412599a42b4b55c3c3"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "4fad27627369546b8a837fd60fdccb4e"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "6133ce5cceacaace29927a1eb83042f1"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "7de3b3a729ec8a38fa81e405ee43cb54"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "d4a6af9439bc4b8d55e93647b35c45be"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "454839f60b1f74e0646b557c752b78ae"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "6f7c10abcd5cf9e7765489b4aa97862b"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "01e77791db9697dbc5d7f7a601391fda"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "2706a6d5e8e6115ffe6f7bc0b7ba212d"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "df0aec8c96dfc4cdded6fd43fd9794a8"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "6c7ea3cbda589215cbe7b7fe97315a7d"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "34d7736625994e4b98892854730b4a28"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "3579abae4f8eb346cf2cf86a135da779"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "8ceafc77f5da20a198361eae05ec3062"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "f89930c59a0156e5ad5ed8cc5f656ffa"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "4a54d8b472914d1d53bfec64672efa5e"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "c8d89af1445a2d506ce900b3bc0e1e08"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "c85b487abd0897036a9c42783d676be9"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "efbbc65e714e61605cdbb0b10a31449c"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "7741188f6c182b7f3eed969359a39fbe"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "5aca0d6bd3b965c2fce6e0e548f23b9d"
  },
  {
    "url": "math/index.html",
    "revision": "32ac010d54d2aa09af6f1b0892f073cf"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "da71d3ecd7bd1e71ec4771764e09bded"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "6ba1ec8be69faf92cffeb30e1e86dcc5"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "5a54fe118fc7f7b8e84a8012795bef6e"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "178919e9958098c49be80bb818820d01"
  },
  {
    "url": "math/low/index.html",
    "revision": "ac3b5cc3e7a9c826909b0540ccac1b81"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "dfc9f8f748115b09d4d0fe12d7575b46"
  },
  {
    "url": "math/mid/index.html",
    "revision": "18e212346752cb6e5bce0b1568241026"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "517cb796cb8fbad5f189414a1ffd9c54"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "c9af1b7b34244b9a8a5baa052b88141c"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "35004c83aa4a38d7e05afd81f307d6c6"
  },
  {
    "url": "wechat/index.html",
    "revision": "5ae631814ac5a726670fefb9f174e7b6"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "a5fad1cedbb19505ca018bc233a9c025"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "e42da6a8bc90ecfd7216bedcbbc1d487"
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
