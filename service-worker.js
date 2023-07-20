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
    "revision": "183f285eb17d163a691a60a01022f04f"
  },
  {
    "url": "about/about.html",
    "revision": "3fa37e4e2fea13393d9d3555792fc659"
  },
  {
    "url": "about/index.html",
    "revision": "e128bf5985468edf69cbd11f4c0e9dc1"
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
    "url": "assets/js/17.06b829e2.js",
    "revision": "b43a4b88c50e23ab005938c13bc8d17d"
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
    "url": "assets/js/22.680a3a14.js",
    "revision": "c18bb75f1f8c8b094b4e81a8f3168cbd"
  },
  {
    "url": "assets/js/23.4a3d901c.js",
    "revision": "98bb9cb1f8c498be67cf3153d8cc3687"
  },
  {
    "url": "assets/js/24.6ae94bf9.js",
    "revision": "2ceabb0ebb37c887d80b75c9c1991882"
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
    "url": "assets/js/3.d734e85c.js",
    "revision": "8b8f5b586649c1d84545465630217a30"
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
    "url": "assets/js/37.6c4b1d57.js",
    "revision": "f7970c31b0fd91ea5da7f5dd2fbcc81a"
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
    "url": "assets/js/50.eafdddfc.js",
    "revision": "e3e4d88288e81b00b960def89b26a4e7"
  },
  {
    "url": "assets/js/51.e9b7311d.js",
    "revision": "3db995d0d20230927aba9be1f726f7a3"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.4131f176.js",
    "revision": "29656e058ae54846decd293b018292a5"
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
    "url": "assets/js/56.3b108c5c.js",
    "revision": "eba9845032c9ee25549996837cca7fd0"
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
    "url": "assets/js/60.d41be4b7.js",
    "revision": "8f8bd579cf5d5fe7a492bfaec533cf7a"
  },
  {
    "url": "assets/js/61.16eb8ddb.js",
    "revision": "846d10c317763119e3ca83d9d13bab9f"
  },
  {
    "url": "assets/js/62.4f309424.js",
    "revision": "f77272f39482fada28624fd1cce71698"
  },
  {
    "url": "assets/js/63.f142372a.js",
    "revision": "b89f95a8696dc4d5662ed8030c7f480e"
  },
  {
    "url": "assets/js/64.1a53aa15.js",
    "revision": "ffe64baf92d4750511309746337e347c"
  },
  {
    "url": "assets/js/65.f73edef5.js",
    "revision": "3a6e990ecb88402923934984ca46ee4f"
  },
  {
    "url": "assets/js/66.7f91d5ab.js",
    "revision": "e6253f40f43d9ab3471c1e166f195412"
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
    "url": "assets/js/71.fc88c8e1.js",
    "revision": "ed9d0e8ac740553be79ff5ea6e70284b"
  },
  {
    "url": "assets/js/72.05115e34.js",
    "revision": "d0d496414e57ea1eb9673c827d93ce2d"
  },
  {
    "url": "assets/js/73.6c2bb137.js",
    "revision": "fd80df4fd9e93c805e9a6d6b27bb0b2f"
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
    "url": "assets/js/9.02ba0fbf.js",
    "revision": "d79202a2c82177f9bdbc388a9c656df1"
  },
  {
    "url": "assets/js/app.0a168472.js",
    "revision": "1124eb06111f835ea6ac10175ff16be2"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "4dca022d175c271e172c6212c8ba1de5"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "eb28682f26d7a9d0393be78ce77f1eaa"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "39b16eec598ad1f800be705e7fa927ff"
  },
  {
    "url": "fontend/index.html",
    "revision": "2237c1a5201a7e6aec47d09e4f69ad61"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "a8624cac0e5a63a84f5e7c58a88ad790"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "7fcda6d909fc56170938a2e1fdf39f00"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "90a8cf6ad44a0d5604695883b4f32c46"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "3d41f0184c4019269dd7f09125f8c44b"
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
    "revision": "650bf0d14330b5248db592ce5f08e34a"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "5449c478a4c15298a81c5dae5dae362e"
  },
  {
    "url": "interview/css/index.html",
    "revision": "51737d91f33e0704f5714f00f2ce8174"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "8ba9458a91fcf01b0c86a273d01b0c73"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "6227b67dcc472df566a47e2e3a94cf72"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "cdadde103122be5c66eb26e88489238a"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "43596be3ad8b8e83d933f86722e631fe"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "fe7e28755a2d7b63efa9d2602c087e0f"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "5446a8e740448dc9f05cfa32b798b16f"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "0edd72bc2dd68770083155c0541ddb06"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "c5d8782ebbf532ffeec69bf370314e2d"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "9973f943838ecc226c87a11b7e3c96e0"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "4c769aed24c44914c3d220246034d958"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "dd5cf00fd1aec2a64e7695de0af5d650"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "b99c787c37f2f4ac46ab4936dff99906"
  },
  {
    "url": "interview/html/index.html",
    "revision": "4857f31ecc4986fadceb20ff8ca8e75c"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "b15318b23613954efc014d92d1a44780"
  },
  {
    "url": "interview/http/index.html",
    "revision": "6ca880676b0990a87552f29aaeaf206d"
  },
  {
    "url": "interview/index.html",
    "revision": "8ad60f9d64c10e47f1955f1321d4c4f4"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "94cb420dc860371658d7a6adf5fdf414"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "d6dcdeb1e0c4afab4cbcd4e2cdf09a9c"
  },
  {
    "url": "interview/js/index.html",
    "revision": "73838357d71924539682f17f523ceafc"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "bf8a6231e68299f0094bf8edb380ad2d"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "b25698ae4d6f99909b895292b0febe72"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "ea1582bca28ce02a65f07a8407e493b9"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "487a9ea2ea3c001cff29284726113cf8"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "a35ca752f37d3eb62281f4423baa8d61"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "44943700377b53f9aaf3505363494e59"
  },
  {
    "url": "interview/node/index.html",
    "revision": "e6db6b8b0a99de8e555e6795058eea42"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "39f26e2d43fdd974ca53f6ece912f91f"
  },
  {
    "url": "interview/react/index.html",
    "revision": "0fef80af35f1b9809d27556a89412f95"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "c725cbcdde6e77388bc37af3503afde5"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "9fdc0dd15576ab723449194424061d75"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "75b37332f7f3c01c1831d37fcf32846d"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "4f4d31745efce8d4f721acb7fc21a831"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "e354d2e7f72c6d91945ee8f3627be0de"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "8a980ad377729d6f6c7bbec6153b06de"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "9fedb707cc435909ad6a01700a7372c1"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "251d4403144514176a5b953e55bf2299"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "b29298aa46e8650f58adac8ba23b621f"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "34ed0791874369c7d7b37888e3ea885b"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "6b3352f71d5403cc47d1e1d502840859"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "255d9e4d326232707ed401eca060dbac"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "d764786e67f73a9ec6da7c1c1f2b98ff"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "6ee20b0d83f953299d9da868bd5dc8a2"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "40916b2ab6599c5ac40f5660bc34d6bf"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "780215c32a5cee54360c86393175cc84"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "6c915c614866090d231de0619ed076f1"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "6dcaec0d011afa7f99516ec2ba077c8d"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "48b75135cdaa3f83c7393e14a878020b"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "08408ec0804216f269e276a7fb4ef789"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "897ce3b75a875ed05a30f0af66a7bd30"
  },
  {
    "url": "math/index.html",
    "revision": "112e6e2fcb968a0dff142741966ec148"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "9111953c87d4349d9ed159527aa26405"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "4aee1937c8f191cd93715149a7542d8e"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "4aeb66ea369f69c15fc0a904b0466f47"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "40416a79de6dde1305e066b20830cb90"
  },
  {
    "url": "math/low/index.html",
    "revision": "31fadf3c1599dc2e2ebe180b94ea1e51"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "08586b0d0f86abc7492cc35ddabf5840"
  },
  {
    "url": "math/mid/index.html",
    "revision": "c7e5eff0540e4c070eacad7c01d77317"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "467de030ac5ede485fa7c5ecef1ea51f"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "7b771196ea8acde651a34e134a5573b0"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "81d2bcef4ce9c01c6b43bc4df34f1274"
  },
  {
    "url": "wechat/index.html",
    "revision": "682a88e99159dca1de12927af78ae0f9"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "4756b133a3a79acd736de8181e3fa6da"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "79e0958f34686c72fd5d2fe161eb2143"
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
