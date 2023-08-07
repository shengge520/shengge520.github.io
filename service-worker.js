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
    "revision": "dc3ceac9b01cdbd1b7216264ff67570d"
  },
  {
    "url": "about/about.html",
    "revision": "0246b67d53da80b3b02fd613df2b78b7"
  },
  {
    "url": "about/index.html",
    "revision": "443a39a0549df5edc47b06ec2696226e"
  },
  {
    "url": "assets/css/0.styles.2a7fd736.css",
    "revision": "96fd8331f4209ba928063667cd0ef67f"
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
    "url": "assets/js/10.35cc92ee.js",
    "revision": "33ee81f3cbc71eda3ea6924bf3ac9baf"
  },
  {
    "url": "assets/js/11.d7166e9c.js",
    "revision": "f13693eaa48dcb26d124151902e7a929"
  },
  {
    "url": "assets/js/12.dd98e071.js",
    "revision": "60b5bc12899b7090e76ea5acde5f1d54"
  },
  {
    "url": "assets/js/13.ecc87a37.js",
    "revision": "e06d02218c7ad40a4a1b7ea7cfbdec26"
  },
  {
    "url": "assets/js/14.19991b9e.js",
    "revision": "584526193c8cd7767bfa28ffacd13b3f"
  },
  {
    "url": "assets/js/15.e6e77a4a.js",
    "revision": "8f14ca0b88e0c56c82dbaeb804a02530"
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
    "url": "assets/js/19.7b4d4360.js",
    "revision": "477927907fa35be1786a9d980a8b9633"
  },
  {
    "url": "assets/js/2.af22ff36.js",
    "revision": "d19b4cf833fa184340962ae0c2de72a1"
  },
  {
    "url": "assets/js/20.3b5531c0.js",
    "revision": "f481a0afd18a327cff5904524baa2530"
  },
  {
    "url": "assets/js/21.9d478c63.js",
    "revision": "deb9172086582054f7838fe312b62ff8"
  },
  {
    "url": "assets/js/22.cf18e797.js",
    "revision": "61b18c6b8a2e4c4fffbddd570b6d31c3"
  },
  {
    "url": "assets/js/23.7721576a.js",
    "revision": "98bb9cb1f8c498be67cf3153d8cc3687"
  },
  {
    "url": "assets/js/24.d9c92a2d.js",
    "revision": "acc712b2018fd80279f97ae11c97c271"
  },
  {
    "url": "assets/js/25.4836276e.js",
    "revision": "6d6a1b32ff08ca4565c62ec22c122324"
  },
  {
    "url": "assets/js/26.5f89bf4c.js",
    "revision": "bd972c20cbd1c3c5cf510ad2709dbfef"
  },
  {
    "url": "assets/js/27.5cc992e3.js",
    "revision": "451f284ea8cf6ca8bc9ede52924ca800"
  },
  {
    "url": "assets/js/28.c52ae157.js",
    "revision": "72b80053bd3a7a140047a84fc0d0fb13"
  },
  {
    "url": "assets/js/29.e10f294b.js",
    "revision": "6839e090932746ad4f5c7a8c0109086f"
  },
  {
    "url": "assets/js/3.6142d23d.js",
    "revision": "dd6b35169209757449402046c9e214cd"
  },
  {
    "url": "assets/js/30.5ad0a61d.js",
    "revision": "7af13046c45bcda634fb1495524bacd4"
  },
  {
    "url": "assets/js/31.21a0f84f.js",
    "revision": "81303b00198c18494a8143b9ed2b3646"
  },
  {
    "url": "assets/js/32.2ee07649.js",
    "revision": "5d02d9a7eb1849ef88e299ae194927bd"
  },
  {
    "url": "assets/js/33.fa646cd6.js",
    "revision": "6d0919d7f64541cd16b1b0147a86fc42"
  },
  {
    "url": "assets/js/34.7b5946e4.js",
    "revision": "05b832344e195433d9fb6c4763941220"
  },
  {
    "url": "assets/js/35.4278f4ef.js",
    "revision": "128e90812ba264fdf23474f96acc70bd"
  },
  {
    "url": "assets/js/36.08247c56.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.77702fc7.js",
    "revision": "c55d1a624b3cec94f675b92d2c9c6e37"
  },
  {
    "url": "assets/js/38.fe4765c8.js",
    "revision": "3c91021175916a73dbb92807ed753c11"
  },
  {
    "url": "assets/js/39.b3517da4.js",
    "revision": "a284d6c6bc5a6267a57ed900c5dde53b"
  },
  {
    "url": "assets/js/4.bdda43e5.js",
    "revision": "2a04a1a39975fa3088d773e62b4f1561"
  },
  {
    "url": "assets/js/40.6a20a281.js",
    "revision": "8fee01f2a591418087758e0249f3a0fd"
  },
  {
    "url": "assets/js/41.a1402593.js",
    "revision": "51d3580b3f07bc83aed9e90928b5ed0a"
  },
  {
    "url": "assets/js/42.9da3b5ba.js",
    "revision": "999caadd44dfccaaa39139ed7473bf11"
  },
  {
    "url": "assets/js/43.d9333468.js",
    "revision": "13c3930870ab146a060a9740fe2c88f6"
  },
  {
    "url": "assets/js/44.a85936f9.js",
    "revision": "e05727197b0d42d873b78ccff9a5a60f"
  },
  {
    "url": "assets/js/45.4283c912.js",
    "revision": "0a972dade06b2366d2018262b663d481"
  },
  {
    "url": "assets/js/46.dfc05077.js",
    "revision": "8866823d110c0aa4a0739e5b6de8e033"
  },
  {
    "url": "assets/js/47.c3210076.js",
    "revision": "269ea3dfe62e03a2c3b93b60a57a8c96"
  },
  {
    "url": "assets/js/48.4715bff0.js",
    "revision": "d246120670b4dc05bd0a31734f131c37"
  },
  {
    "url": "assets/js/49.0c7861ed.js",
    "revision": "2d7c2cd0ac41c31dc317cbabfa490545"
  },
  {
    "url": "assets/js/5.7078fd2b.js",
    "revision": "d757d42aea224dcec29bc3d18f73cee1"
  },
  {
    "url": "assets/js/50.25a29c69.js",
    "revision": "b08fa63b8f8adee16ad60cb3beec7a4e"
  },
  {
    "url": "assets/js/51.2eb09a09.js",
    "revision": "b774a04728118eb6831b6aa8c61df88f"
  },
  {
    "url": "assets/js/52.0e6b7bad.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.9051d839.js",
    "revision": "0ca72d8926c9c7d87ebf9de5808dc738"
  },
  {
    "url": "assets/js/54.7c1b9ac6.js",
    "revision": "7d8e8aa9b8610bb75803c7d7588d73e0"
  },
  {
    "url": "assets/js/55.a8fa1129.js",
    "revision": "7089a61e9dcd8d1e1c762cc7bea8f7fa"
  },
  {
    "url": "assets/js/56.7654d9f2.js",
    "revision": "ba4dcdd5be504c0f351dcce0073f2ece"
  },
  {
    "url": "assets/js/57.7f1d52e6.js",
    "revision": "7d94f028d62ae8a2d9cc2a5e3aa8b452"
  },
  {
    "url": "assets/js/58.287a00f9.js",
    "revision": "52a3de806cfc2fbb869c8ea12bb7b896"
  },
  {
    "url": "assets/js/59.20b870ee.js",
    "revision": "a5c408197bc4e799c929f6f719a0ce83"
  },
  {
    "url": "assets/js/6.455f43cb.js",
    "revision": "9fb5f23aa7c4b23a771b97556335bf1b"
  },
  {
    "url": "assets/js/60.98c789ed.js",
    "revision": "f7ad7ee68aa7d3c681d16169fdfc5db9"
  },
  {
    "url": "assets/js/61.7c5ae1d4.js",
    "revision": "fb013dabd6fc855173718a3a7534137e"
  },
  {
    "url": "assets/js/62.035f0349.js",
    "revision": "0dc2a2fb871cafd7a1e05169cd9622e4"
  },
  {
    "url": "assets/js/63.97ce6f73.js",
    "revision": "d7c6f56236b2977b2b77170f86146203"
  },
  {
    "url": "assets/js/64.da63d33f.js",
    "revision": "ffe64baf92d4750511309746337e347c"
  },
  {
    "url": "assets/js/65.c0ad7507.js",
    "revision": "3a6e990ecb88402923934984ca46ee4f"
  },
  {
    "url": "assets/js/66.080a66ea.js",
    "revision": "d88ef8ef3232420c2659a12028a65db2"
  },
  {
    "url": "assets/js/67.50b96333.js",
    "revision": "06c518b6fff95d82c1d5afab4f44b538"
  },
  {
    "url": "assets/js/68.4eeda2ef.js",
    "revision": "51d5580afa24129c8d100566c646ca00"
  },
  {
    "url": "assets/js/69.a3565dc7.js",
    "revision": "c068a94b67ce3122c8d31b0859c52450"
  },
  {
    "url": "assets/js/7.2ddf3fc2.js",
    "revision": "f03e602f234e639fedd77af6c13f65d6"
  },
  {
    "url": "assets/js/70.d54fd533.js",
    "revision": "b1e7c85d88149bb4967822913977ea8e"
  },
  {
    "url": "assets/js/71.3c4b774b.js",
    "revision": "021766779e5ba03ef0529e49d6a8ad18"
  },
  {
    "url": "assets/js/72.860d48d3.js",
    "revision": "34a98aa24094302ac62bb052da4a8226"
  },
  {
    "url": "assets/js/73.57b2dc32.js",
    "revision": "bf36217250a014fec0dd949a39e1def7"
  },
  {
    "url": "assets/js/74.6a5ab0f4.js",
    "revision": "9a6d810d434eba5eb2f6bcf13103f200"
  },
  {
    "url": "assets/js/75.94c81c9e.js",
    "revision": "dfb3a3c3d0137e0133bb2e15efc7ff1a"
  },
  {
    "url": "assets/js/76.f8c64672.js",
    "revision": "c30cb23345de3b6a81d0bc8720ae6910"
  },
  {
    "url": "assets/js/77.e4c1e87b.js",
    "revision": "3ec43b70706d50f95670bfb267e3db50"
  },
  {
    "url": "assets/js/78.7bd73930.js",
    "revision": "08ece49b526cf800d27d7db2164b3eb8"
  },
  {
    "url": "assets/js/79.ef149ced.js",
    "revision": "d96d7c4991e72b5c672a67b8cc1ffb19"
  },
  {
    "url": "assets/js/8.71869f86.js",
    "revision": "9d6f2283ddd1eff2c60ff81cc5a86a9a"
  },
  {
    "url": "assets/js/80.324acf8d.js",
    "revision": "2a032265aa6cef847309c4de869c106f"
  },
  {
    "url": "assets/js/81.31811fba.js",
    "revision": "531c77dd242fd09ab550ac6510da1208"
  },
  {
    "url": "assets/js/82.f1c3360e.js",
    "revision": "6720540b2cbc26cc519f3b3c1d8777c8"
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
    "url": "assets/js/9.9fe09315.js",
    "revision": "2c6710c6e07972e0c6ff0afef1febde9"
  },
  {
    "url": "assets/js/app.95204dc4.js",
    "revision": "02dc5eeeea9d9a79cb44a2974b9c3906"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "d4e5af4f781b59a99e520872dd394a1e"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "2a1e8de89b4ac132c3bf75167d7f1250"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "78629dac5e7b7289be560717665dff11"
  },
  {
    "url": "fontend/index.html",
    "revision": "3449abfba5a0326c8f3a11d8a4af6cd6"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "db4efc44fb0e740f202374bcd87baebe"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "22b312bb5216c13047fea1c240b26c31"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "974d1392fb1d3eea6864b924011d9f04"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "b7fcc03b1dc56b7abc9b52ad8fe10d05"
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
    "revision": "23cde5a5b060ada607478291b7d1a06c"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "c1e71392236524deb8a16034e4052952"
  },
  {
    "url": "interview/css/index.html",
    "revision": "0aeb0d59400dc82e458db3d051c397c4"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "25d3df5dc84c09fce827bec89f77aa4e"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "a7fe02c236a9c7fffa3750bc672bbe60"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "63d1021d05be103aff56a4543d44ec27"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "9f246dc598e98e4c702f84fa589d3062"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "1eccaf72e586777902a319820b6a3aaf"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "6d1e14ce0cdf4a5c9bccf599379b5ae0"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "f3b73334476205fc704b1d365bfcbbf1"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "54020eb236da7e28b2e316c831bf3ac9"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "3672b3f4ea2ebbc739e22a1dee69fd45"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "393a8a79d99967a9c309b5a2fce4c3b2"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "42c1fd40efa62159e34041c152f6b217"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "c84d51e8ea7eabd14ab063b054dc406c"
  },
  {
    "url": "interview/html/index.html",
    "revision": "bd6df7c84839657f7d43b329858047b9"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "2f1f5e1c36222f770c8616442f03a1aa"
  },
  {
    "url": "interview/http/index.html",
    "revision": "8a4f7e67151ce06331db15e9f8963b3a"
  },
  {
    "url": "interview/index.html",
    "revision": "f2bf35d96e7eb14d0c728675a8cab373"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "e08b34f6fa06d483ea833df6821b7b61"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "90bb9350de3dee8a77eb44b8c7aa0605"
  },
  {
    "url": "interview/js/index.html",
    "revision": "091c1f0a1053a3a6b05502ac9d9cde89"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "ec2ee026ced1c454d3dddb2028554d00"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "3c82c22251ab38d8f8331c490e172694"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "64c1ac0befa75a9989e93c4aeec63a95"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "3ce90332eb9acce906286ce27025f240"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "eb2a293c08fdf66d7c6387b2e5e99b9c"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "ee284ea79fa8c34486356823b20ecff9"
  },
  {
    "url": "interview/node/index.html",
    "revision": "8d47111466ba698a864f3e529da9f76a"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "0333db5113bba237da324bf5f2936e49"
  },
  {
    "url": "interview/react/index.html",
    "revision": "8c9bcf2b30c0e8be346e861491f3e5ca"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "e17818700c01560e0fd79e37daf08ada"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "07c25a89bc7310c07909dfedcc12a539"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "4172cae8a028161fa6c3b98215c96e89"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "b70df64a047d697134eeddc83327ff2d"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "7ff7742f1dadaf81026703b7cce8bed4"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "7f63e9a23a26c2b1bb03aaeb92316fd2"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "ac38f11436921a03cd5761f52217e08c"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "d4797d6c67c25c67230dffeba2f94e46"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "56b0c2c4a29be2ba955edb81665edea3"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "f2805c9f34f22690ed1e313008332cd3"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "37bd7427d82c16de65b683e1f97f379c"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "135d0f3349e00488c424580b84abc319"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "431d76ff3f7df1b9d5b46a1a171f1692"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "cac2ace2455c013bdac1178aeb893bd1"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "5ff9da675189b0b20e5a46d7e41b37a7"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "8bbbef464fbd89cd0b73647ff3afd19f"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "2a744913caeebc547a7ff1f998665aeb"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "30e18d392e7ab1bdad8366bf5adfeb8c"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "4faebceaf336b18b01c71a4bee109aa9"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "126c47435183079791eb3f2f161daa6d"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "c1c4abfeaebeb47d25c804421e98df6b"
  },
  {
    "url": "math/index.html",
    "revision": "8e9c12332278a6e408e49f6e16421731"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "5dc7ce6c58c5e1c159014da3fabdc804"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "cbac33cdd37ffcc5c75b6b2ff20d4bfc"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "c523c3f2f9e655a06eb8e30e8ea20045"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "e626f49d18bb342555ba4beccff1ff4e"
  },
  {
    "url": "math/low/index.html",
    "revision": "ca5940085a5ce88510183d0fd584f8d3"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "1be80b53c1f006104dfab6eb3580bc45"
  },
  {
    "url": "math/mid/index.html",
    "revision": "dc797258f55a9ea094df02b468aad965"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "0eb3105ee1097c0f15d959fe8559f1ac"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "d48c91052a0912c417db83449c125c35"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "30d88b0cda2eb2e4b0219e8d7f8be401"
  },
  {
    "url": "wechat/index.html",
    "revision": "2ad053bcc9ea7b3899faaf75977328a4"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "a2b928e45f94783fe8129b0594285863"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "291ab7c52596f7ef3914d8abad6b2684"
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
