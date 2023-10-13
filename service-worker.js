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
    "revision": "bef3e53ee724092f7bcf47cfbccfa9d1"
  },
  {
    "url": "about/about.html",
    "revision": "51a8c83bee980f81b171597495f3fef6"
  },
  {
    "url": "about/index.html",
    "revision": "14bdc5ad3bf8ad7c9fe640a896e36628"
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
    "url": "assets/js/22.66e1baca.js",
    "revision": "448002562e81ca29d0ab9c6946350ff0"
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
    "url": "assets/js/25.0c91780d.js",
    "revision": "0eec79449cdaf2c7de6002f35099b488"
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
    "url": "assets/js/38.f89d13e9.js",
    "revision": "d7eb5f1128eb8f74c51e69becb83e8fe"
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
    "url": "assets/js/50.eafdddfc.js",
    "revision": "e3e4d88288e81b00b960def89b26a4e7"
  },
  {
    "url": "assets/js/51.03aea9bc.js",
    "revision": "952490cbbfe2995d55b5e7a18eb19e6c"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.7c67aace.js",
    "revision": "ca9abb2187daeb9997d77f3dba000ac1"
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
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.c443bb4e.js",
    "revision": "4df252799d8155c3a975e628be4edafe"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "bdc877e2fe0105aa6700b58175fb6685"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "81bf3462ca29959e80936919658cc636"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "ab36e77ec46040a3b5ef14f2f289fd38"
  },
  {
    "url": "fontend/index.html",
    "revision": "565d1308b3a21ae2078601772c3d775c"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "e1252b6340da7e07658989c9b6455874"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "29eb7a0331bc2a2cfff7c196c52f2a4e"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "9a73049b8a4cab8331d4a79bd7ce1e3d"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "9a84129489d5d5a3f0090f5276b7182b"
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
    "revision": "d3f67888b77f24115aabe22df02ef2cd"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "b05d0499b7f7dd8699149380a672cb6f"
  },
  {
    "url": "interview/css/index.html",
    "revision": "7afc39a56cb6be796164bda8859ea64e"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "c035cd6c59a67e6dddfd043ac440361c"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "1f603e49bd688e6906c3be6adb8a8ecc"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "906d568dbe938e7a580ce7c0350e5b29"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "826d61311eea61c16f72b9c62c4ae021"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "965529358622b627b8cf2f25b6c3fede"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "6cdf98518f4e37d2b62e27148b7b7906"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "b4f3bc1841f29015ed0b594ae8a12fcc"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "d6fc9b42c81d22d93fc5ef10197d9b04"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "bd20db24e79d53a98fcf10f7e2f96da4"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "da66a507a79a02c22c48137a79f20921"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "9335bb3d0b2eca316942cba462219143"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "63b5c9ba967ae57ddc51041cef70a8a2"
  },
  {
    "url": "interview/html/index.html",
    "revision": "62d7b6eae6f7de7d87f5c5676db970e5"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "35e5f01e5e12d916f3b574b46c2edb97"
  },
  {
    "url": "interview/http/index.html",
    "revision": "5e996d30206a5310a015c3f0fc20607a"
  },
  {
    "url": "interview/index.html",
    "revision": "c366a1d7a5251f0c2c5cfef618797b51"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "836b79132a78c2b156a89b05ed6a7a12"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "981a873fe91db0c6d93cf130fe759663"
  },
  {
    "url": "interview/js/index.html",
    "revision": "5a9a9e149b7bffe7d3b0d00ecb822265"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "776eacc4211174e96030014833af3166"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "18b9d8a160655bb957008145f1fda83e"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "2cdd027619ba81f34e0040a1d94c39ac"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "0551b961df38704e2528e02ed933d4b1"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "13ec2d3313d6e5739cc951f7e8183e4f"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "c5e7f70ece8a1b361e1bc7b376af5a29"
  },
  {
    "url": "interview/node/index.html",
    "revision": "7936e0c21b84acf4c537334d2e9afb77"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "46e704ab0bda1f952a4c04a14eaf3ee7"
  },
  {
    "url": "interview/react/index.html",
    "revision": "ce3d9146e964c1ec279c2482457a66ce"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "63f08d4e096835c83b51fa04317384ff"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "409101f14b03dd4713d8dd4bb32baa59"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "4815a27ade36acd593ef62033ab4674c"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "49d22b03ff7fe4ceba352e930e63e858"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "e4cf7a7ba547e95e353159157f9505f3"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "07c6e09886ba5ba613a5f41d720d1f40"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "5dab45a199668c90c569b530cc551301"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "b53909d69c5acd15856cecfab7676b74"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "82fffb06176997697585ed3b40761b68"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "fae10dd9be3e80926288b5a0f4086538"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "acd435a4ea84506dff7d22fd3e876c7a"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "3d16029760d3bfb7341ab82eb40c74a2"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "c5f9762e969c67e412691b426be47770"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "574f382ee03a53e6eaad31a450d3bcbe"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "dabe8e2e5f3d9f86cece2a36eacbcf37"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "3642c0958800b5c9ad7dbd53765a15ad"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "17e5c547b47d670fbf64a5877d5cc541"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "00f34d2a795d49f5d96c81b223b7fac3"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "2a045f5e7c4f22d65849b41523f45787"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "9227ad34ed71225f779509b156d84d90"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "22b49c17b07f0505c8f3e280fa44098a"
  },
  {
    "url": "math/index.html",
    "revision": "9cf81b5c4d74ede46031edae4b9b93e5"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "c1ac0f6426e75b5f38ed1d48545c4187"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "1ffd68ade9ad57db1407db105b981b92"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "a6fc4afb2d9a1b3344d5662eeb158ecf"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "33e5507f16602050ed22f0cf0596d965"
  },
  {
    "url": "math/low/index.html",
    "revision": "ee9248cf6d358aa70ea77a8f4a709e7a"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "b4ffa18d552a6861080c1b560a0d90ef"
  },
  {
    "url": "math/mid/index.html",
    "revision": "4630462af3123a70a6261d7686c5e093"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "6d8cd3f137aeb65a8cdb08d6cdaa26e6"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "7e3d0c354d2bc6d75c8339dcd7b85190"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "2b9b7a05cf0794b4af79e0018125442b"
  },
  {
    "url": "wechat/index.html",
    "revision": "a9c021feb8affac0a4a7b3231932f803"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "71d01ea68b5c8374cdae3e58d225ff42"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "e02a1035297cc124b12afe3a0b566587"
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
