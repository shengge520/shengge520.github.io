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
    "revision": "06e80aa2524967c8edb9c8673b26a1e5"
  },
  {
    "url": "about/about.html",
    "revision": "9e598047009eb1dc8956b887c3058815"
  },
  {
    "url": "about/index.html",
    "revision": "ea92d007f61aba2d9cf8b92c792d3ce5"
  },
  {
    "url": "assets/css/0.styles.0312a18d.css",
    "revision": "afb8c6669df1512528a31e6bc6196d39"
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
    "url": "assets/js/22.ae5349c4.js",
    "revision": "99aeb92f34c1b21e1d0f81d509be716f"
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
    "url": "assets/js/3.866675ac.js",
    "revision": "5f08db4046a21f171b963cd23565dfd8"
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
    "url": "assets/js/37.d99f6c6a.js",
    "revision": "02abf6103245a82f979db593b50e04a4"
  },
  {
    "url": "assets/js/38.dff9c89d.js",
    "revision": "167b9ce2d9c8775a4604bb2dc641b9d7"
  },
  {
    "url": "assets/js/39.ac32316d.js",
    "revision": "b3d2f4ebfa1e7d5d144f68acf1452573"
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
    "url": "assets/js/42.6ba35672.js",
    "revision": "81c61313e9ce23c1fcb2cf26db554caa"
  },
  {
    "url": "assets/js/43.d50421ad.js",
    "revision": "ed6ddf2706c2fa224920ddfe82ec930c"
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
    "url": "assets/js/46.521eda20.js",
    "revision": "8866823d110c0aa4a0739e5b6de8e033"
  },
  {
    "url": "assets/js/47.2532d633.js",
    "revision": "be1da914b7425e537175e34387653bdb"
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
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
  },
  {
    "url": "assets/js/50.1a1855e9.js",
    "revision": "24ed6529358627cd76ae9f14f35979bb"
  },
  {
    "url": "assets/js/51.96c7a466.js",
    "revision": "0fe28744b983e3022486f502822ee3a4"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.421aa832.js",
    "revision": "edc74860b79e46d940660bee686e0a2f"
  },
  {
    "url": "assets/js/54.e3a61960.js",
    "revision": "7d8e8aa9b8610bb75803c7d7588d73e0"
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
    "url": "assets/js/58.a6a1ae31.js",
    "revision": "4b61438be5640675ede5be75714c834b"
  },
  {
    "url": "assets/js/59.657048f4.js",
    "revision": "b19cfc11a179d7df31a2807d56829d97"
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
    "url": "assets/js/62.4f309424.js",
    "revision": "f77272f39482fada28624fd1cce71698"
  },
  {
    "url": "assets/js/63.c5c92a28.js",
    "revision": "3f58130d4c80646688e615bf739f6e49"
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
    "url": "assets/js/66.f67bf1a3.js",
    "revision": "ff209a660e0094bb2d39af641fa14724"
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
    "url": "assets/js/7.490397ed.js",
    "revision": "9e06d3492512094717b1910f531e1689"
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
    "url": "assets/js/76.e14d9f75.js",
    "revision": "f1d9df0b1b20d751c9ea7ecade5b6299"
  },
  {
    "url": "assets/js/77.c1ee250e.js",
    "revision": "3ec43b70706d50f95670bfb267e3db50"
  },
  {
    "url": "assets/js/78.92e66db9.js",
    "revision": "0ae4a23ff0fc4e46ed1a69ae5966eb90"
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
    "url": "assets/js/82.6ed5def0.js",
    "revision": "3389d518ab2a42da76e1231a0d61746b"
  },
  {
    "url": "assets/js/83.3fa683d1.js",
    "revision": "d99b928e8361ee07491e060e9886aed0"
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
    "url": "assets/js/app.9fac7a08.js",
    "revision": "df7890f8aea62eea790d5f23d69d16eb"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "872d279a071d8fcd312037f658744bff"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "55376ab432915adc18338754fdcc656f"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "b2e26257493c221a51b5fc3004648f0e"
  },
  {
    "url": "fontend/index.html",
    "revision": "dc7875d4c2b8499051707297b676f9ac"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "e02c462d749a7cb894511b63ce44d79c"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "025a1790a61675e50065a3dede12c9fa"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "861e3880eab631091793b2ceadaa6bde"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "e1faee50340c3fadcfd6d0168922c8f1"
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
    "revision": "798fa67527a8ba0597f49997fd5979b7"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "95ae987049a534482968c5601772d570"
  },
  {
    "url": "interview/css/index.html",
    "revision": "f46d1dcbe06239dbda696285e7c9d903"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "ecb028f92ad351ff0f17c39738259e7b"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "3f832d1d7054d32d20ac49e2bf5f5eb4"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "d2658b8d709b0e92c2d8175fe6de572d"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "2f1501a8c1e2d337a45dd6b4a2a843a3"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "05ef0d58ee7b7421a39eb9b8aa6c5c2c"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "41e938afc6f6818db170d1d139421d5f"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "9f38f49948cb07b9d2f12250563d252e"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "097427e3e60245b5d8ad870710998725"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "d99f8c6857d1acdc10850ce69831f80b"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "af0b56c1b5e947ddbc6f952a3cde8e79"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "4a743fb7017ae7a9a951c59e014d20cb"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "4067d1a06575c0d1fc22a93c8391eecc"
  },
  {
    "url": "interview/html/index.html",
    "revision": "12ed670abc990f2abba02b66c60d6361"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "f848895e6aa2b48e61cb03e021cc38fc"
  },
  {
    "url": "interview/http/index.html",
    "revision": "9b38fc6bc09aad5c4c18fde1a1d96aa3"
  },
  {
    "url": "interview/index.html",
    "revision": "65c76c3b19a092475d4dfaa4c9ff8ce6"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "8424a49d4d28ce018be6e951edba2561"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "71e1851b06aa282fc19681023fadef38"
  },
  {
    "url": "interview/js/index.html",
    "revision": "5769cd5e57721c30b377fc9eb9060972"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "2349e10fe52976906f2e97d77c6c79fe"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "1acca37b4de7908f38fc03234798a451"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "77e76105f3274d003f404d1f97e2714b"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "6203601eb35a6c4bd6321075e89eb2f8"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "9cfc70cb46f3a09a12c0eda5ad6d6814"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "ebeaa6bbfd38e3c70f31482dc3319579"
  },
  {
    "url": "interview/node/index.html",
    "revision": "e20c3cc194641fb553735b53f3ef3586"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "975507e0f787c332de484532e2cc7168"
  },
  {
    "url": "interview/react/index.html",
    "revision": "a813269186d14eda5387296c0be900cf"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "52dfa37fa910fdd40a4e3705f4f8716c"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "b1d1549219d0c22f2a6d0612c475ca7a"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "adb230f298546cb86429be64384aa4d0"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "36decbff007c28db0578f6d8b6cfc659"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "3d2c242228d5662c98170e2d70a847ae"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "70b4c68f420bead40e8564dbfecdb179"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "312e4bbe466fcd638a49d03aeb8e78c8"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "df7c8297959ae60bae4e67e696c4f113"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "c2e3c7c6eeab0a672489c964a1e129d7"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "81afc579edc28a59f7fdd24185d1a2e7"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "984c6fb1a52703b2d9c86342106e8391"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "ed7a5beb655e2586af7e0808160a276c"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "417501cf1ea1e8c73557d4bd305a3cf2"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "9d732a27fb2c33b1a9105d99d59f0c40"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "0eff862d0ee2416a22c130bea2ff3d5a"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "66d8ba835e271ac98affded020e01213"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "3a3d5371bd89257a6240656276412e2f"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "00ae70f966a2a94c9bf9f09b5df97d9b"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "91695f34205ecd06f25e82bb5b9ecf13"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "264056187fe6ddc9fc7eb0efeb6a4248"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "549965b825d4177930dbe3128a6e2f2e"
  },
  {
    "url": "math/index.html",
    "revision": "bef8d48966f7cc705f0c2a2a64a37c7b"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "585ae8a3a7011abc4b356f07d49ada06"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "095b6d1d35421dc8f05b12344dc561ee"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "eb394f4d98564512bd329e116ab43fcd"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "ef6f6ef16f3e23513c50901fd6da1555"
  },
  {
    "url": "math/low/index.html",
    "revision": "114b9af3cc8725b27a8a7997b51d3e5a"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "2c016b3d4348716fa4b518cc778de971"
  },
  {
    "url": "math/mid/index.html",
    "revision": "7690e9530f23c485fcd9877d6bf959c0"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "c729aec542b47139d7eb0729ef031a25"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "8f38170d66ac19d434461f0a49cba849"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "15488f2700061fbf32025858111a5998"
  },
  {
    "url": "wechat/index.html",
    "revision": "a40478f2d1eebcd8c011a5c1540a8410"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "53a96011104b1183cd9e29e1ad2239dd"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "b2a7ac3c89e83f5c99837587c678b9e5"
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
