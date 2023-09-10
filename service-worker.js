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
    "revision": "4d12ed307c5cab55b276a6a11383592e"
  },
  {
    "url": "about/about.html",
    "revision": "8da858fb4cdb7f9b418ea13486bee903"
  },
  {
    "url": "about/index.html",
    "revision": "190d5556c3f1fcc48ea4bc54ab9d742c"
  },
  {
    "url": "assets/css/0.styles.84d4ba23.css",
    "revision": "75e3a3a666428e153dbfcd4e9e54554d"
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
    "url": "assets/js/25.0c91780d.js",
    "revision": "0eec79449cdaf2c7de6002f35099b488"
  },
  {
    "url": "assets/js/26.9b301804.js",
    "revision": "a91260d835deb792ee221b18d78ff3b4"
  },
  {
    "url": "assets/js/27.89cd44ab.js",
    "revision": "ebfdaeeef477cde01ec65f06ec1e0822"
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
    "url": "assets/js/31.4464af93.js",
    "revision": "fc40e162589e01626cecbffe942ae0d0"
  },
  {
    "url": "assets/js/32.8db57cd8.js",
    "revision": "dd5354818f0b23d617ce60d8d3b60927"
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
    "url": "assets/js/38.e0146a39.js",
    "revision": "3723a90cccc6f64ea025caef63f25556"
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
    "url": "assets/js/43.885dcc92.js",
    "revision": "da633394dc22a341a1176fd73b1e8191"
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
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.f7618694.js",
    "revision": "c6ecc9d8d5feb4d6acf29f252f2f2267"
  },
  {
    "url": "assets/js/51.6cda0830.js",
    "revision": "46c1704a4dbbe1a3a7a6b7f0d34dffb8"
  },
  {
    "url": "assets/js/52.0d05bf1b.js",
    "revision": "9e285c1ec4ec887dc892f7fadfde85d5"
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
    "url": "assets/js/55.4ddb18e3.js",
    "revision": "a1126625572c61ca87d8e01c973d8c82"
  },
  {
    "url": "assets/js/56.9bef3140.js",
    "revision": "4fcf8c76f0bdd86cfbce83f4e4a3897a"
  },
  {
    "url": "assets/js/57.7f02dc6a.js",
    "revision": "ef62d065d8f19b596cfef66793e56a63"
  },
  {
    "url": "assets/js/58.6d5465c3.js",
    "revision": "4770ce8460ecfdb120bbfa3c1f11ad3e"
  },
  {
    "url": "assets/js/59.82825efe.js",
    "revision": "48745a5e3f8fbef6d811d2f8d6b87318"
  },
  {
    "url": "assets/js/6.43d1cec7.js",
    "revision": "cfc4424539141804cad027332b74cf6f"
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
    "url": "assets/js/app.11ad402f.js",
    "revision": "c8c250411f7c232720dc6a18187538ed"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "eddfd6eb465063d0057bd0ec5f599a47"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "902e5995b9ae6080bf7e3400cd4b6cc5"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "01b76d0299c31fed4ff375c428caa2e8"
  },
  {
    "url": "fontend/index.html",
    "revision": "7dd82722f9855eb289e6d636a2d1c7c9"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "db565e5428ae12e8a8e981eaf3979714"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "4c687560b47be72a32d3fd5efaed1a6b"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "6e34167ec0b8b26314ee8cba3dde6037"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "913e5b02cd17ad4f5310b5512ab29cfd"
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
    "revision": "b641b37c76197028fe7122bedb0a4a4d"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "7a46093145488910379541fd500f498e"
  },
  {
    "url": "interview/css/index.html",
    "revision": "af10cb2e9959e1048beabfe930e33720"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "517c54c64323b586586d4478ac5853d6"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "c1422fb8bc98b42d2e77b95b690e318d"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "44ff5179cb0d1aee43b6fea04dc4150f"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "0c791bbc2ab7ce39953ef07bcec6daf1"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "2af239ee27a53dea33fa695b940d5db9"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "735dc12206663c7d0c11e9b226f9fb5c"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "e538b39815e867259c3ffbed96508497"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "7408967e9a6f64a31d6a4073c9fc7a05"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "5d7c7307a1454e4723eb2e078dd3eec7"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "99190d6abec6febd6343d7d7fd742d3a"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "e5a5bcc584d43335fd2482c96426e5d4"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "4078fb48db47def92a92e0e74a76889a"
  },
  {
    "url": "interview/html/index.html",
    "revision": "00946294479f720be57910fc4b750582"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "60d3b879d5d0b7dbccd8a2ac9fd4f96d"
  },
  {
    "url": "interview/http/index.html",
    "revision": "16f1c6756cfb32948f16017b896ca594"
  },
  {
    "url": "interview/index.html",
    "revision": "76e284a0f30f53b6f1605a2547862e52"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "3050788d022f29842474418612b6e2b0"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "87a67ac0cb812229193e95b0f1a7e72c"
  },
  {
    "url": "interview/js/index.html",
    "revision": "286d6f9503deffd37a1c9374a5aa4f38"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "4c4df2e710d78f6897bc159f0fd233e3"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "88db16aa2925a6d15d98cf4eb355e26c"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "aaa57cc430ebc8d0044f36c4c8360fe1"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "387b98f0e3e71010cd919143440c5bdc"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "40392b379df404e1185ae11b0c021c57"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "55ac05362b2b21f069d57bdb64beb5bc"
  },
  {
    "url": "interview/node/index.html",
    "revision": "359da72eb11778599584bbd828a4cc10"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "b7d711d4c0c0c00c055b20255fb486d5"
  },
  {
    "url": "interview/react/index.html",
    "revision": "64b72ea278e0e05e38be3b128e6c5a21"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "723c10fd98b779451f87bf0dfd5f4414"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "e599434ff2050be1099223c2df259a7d"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "e472a2be23566ba8a012aa3d99533e31"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "6c1adcae81bc95b12daa03a51f31a3b1"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "af982c4819e39ae6d3a7e8315d6742d4"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "e91cfe950eaadd3dd5c8db12c16f5e64"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "4f2617f483aac93ddd778ccf3ba082fd"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "253a010c00e09ad4d825bc6f8840708e"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "eb173fbe8820121df019727e7e6f88f9"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "9dc11cc0da296d534c1a3ab836efe0e0"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "8767dba1bc900bb5c3307a29318d092d"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "68438faa6867be7636c6028ec6d74e0e"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "9f04f784ab78a28e7d7fad0e1efd91ff"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "fa36bde7b8dfcbcdbc8ce8210e7e5846"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "43ca5b72ee5664a1a05b71f4a19b0e45"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "09bdfef396f734c5087c9caaf9befb2c"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "0168d4280591c93d9e0e413a6939796c"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "0189623555d4a4a636a11384dde29052"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "5e7ef08f231511e45cfed9e83a58e672"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "ba8b094282ecc63763e762916ea381da"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "f755837cff0a32920a6a58f9276a1dd2"
  },
  {
    "url": "math/index.html",
    "revision": "3ada9bece8713dd1b31de521d10cd8dc"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "d8bc27d0069bdd3b996ac16796384687"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "51954dbacf9a106f64c911d5a88a3f91"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "20c7f496a7a1b0421537e809132c2d3c"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "04333cf1670b24e9887286b77b512d99"
  },
  {
    "url": "math/low/index.html",
    "revision": "9593e2f08c7c544b33fb70433e35c375"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "7508bf3386664c4b4274e3431ac942b3"
  },
  {
    "url": "math/mid/index.html",
    "revision": "ef2c525c5b1def5c8773f22e05d3126a"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "0bd1823efd3e5566e9529b2b03965fc1"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "491cdc03cfb18fbd67f55651d94bda5b"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "8e54d4b272aa3b7ccae4abfde6b56a6c"
  },
  {
    "url": "wechat/index.html",
    "revision": "0a95a7bac820da2fb7d84fe0fb67e006"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "c05f975e4c16e1234be2171bc78ce859"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "c52d5541af92216ebd2d01ce02c31d0d"
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
