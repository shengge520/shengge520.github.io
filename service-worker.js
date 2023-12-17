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
    "revision": "33d7c3c71204980f52e50af17aa3d0c6"
  },
  {
    "url": "about/about.html",
    "revision": "f755cd09d0d8b60363d60dcd55a4e754"
  },
  {
    "url": "about/index.html",
    "revision": "2b52022d138b9578ff7184e5b9504fce"
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
    "url": "assets/js/38.7be5f639.js",
    "revision": "63a332af2be7f83fe40a16d0650bc445"
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
    "url": "assets/js/43.d729690d.js",
    "revision": "ed9891db258f8cac21975475db75fbd9"
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
    "url": "assets/js/50.f7618694.js",
    "revision": "c6ecc9d8d5feb4d6acf29f252f2f2267"
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
    "url": "assets/js/53.a2536742.js",
    "revision": "444baeac84dd570f627679a21ca5e0d9"
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
    "url": "assets/js/56.47aabd34.js",
    "revision": "86f8676b459b3b6beb5e1c3e8b22b2db"
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
    "url": "assets/js/app.b0f1144c.js",
    "revision": "826ac8e59a58e3775aa7af7f970b858a"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "b0ef5a8841e009868275643294af8598"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "11f4f1e40d66ec1b416d7313f6ac118d"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "788d977412e87d97a6d07aac12847a21"
  },
  {
    "url": "fontend/index.html",
    "revision": "58ac29b548f28223c795e6c92e476823"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "a9796a293b4c16f2f4cc595cff0c2f57"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "0964fb6d1e0e0a2cbdd37377ddb995d4"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "5aaac6134e1c015538549b442e6e4d74"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "e49c91a6dd3e592801dcf2047b8748c7"
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
    "revision": "7e85184d2fb629b9365350024d059f85"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "819787133b3f7e55a835db96b1c791bf"
  },
  {
    "url": "interview/css/index.html",
    "revision": "418bfc975f60a83a8edd9fcbaaf60440"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "938b0f960b677ee096930bdfdd36776a"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "e93ca2bd6b7db37981c840c19248b023"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "7828dc8f1231ee5bb37b58835a8500cf"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "ad065f6499280a5521cab51ff642c86b"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "3a28e8cb54eecf085e7937b1dfc93746"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "387188f87c2e1edbd1971a6c471241bb"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "96bac62e04fe3a123b41049c6f2407a9"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "fd2e10a411267fcf5a9e444557c54206"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "c4e5932c5a53c4b862df56acad0f245d"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "5b1d42bbcc6622486ee1215c78cbd178"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "26b7bdead01958391a94232cb7d25dc2"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "062bc886b6400c53b2692b12071c4710"
  },
  {
    "url": "interview/html/index.html",
    "revision": "ca071f7d6b9553b07f9ca3d0dcbf4f64"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "16b0a14033e8bbd3b6315f3f9c12f47a"
  },
  {
    "url": "interview/http/index.html",
    "revision": "6d24b0e1d9b06fe646feb33715df0bb4"
  },
  {
    "url": "interview/index.html",
    "revision": "c99b98da4a029186944dfd5ef5cfff7e"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "f919e8c3355cae7d72ae81a982005c02"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "ff4ebe46181d5f9cb138f518dceb1b5a"
  },
  {
    "url": "interview/js/index.html",
    "revision": "cda9f658711cc26954771e7217642143"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "289325f19503f3c049ea1e0cd341f6aa"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "279b35d05d6d132bbd6773f4917b4ce4"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "8e349e0a9b1375cb1d8f8756980e62d5"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "04031be2d68eda4b1eab74dd74b998bb"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "b5da71251c362ba226572b62e4875b0d"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "fc4efdde2f9948b80194182442a596b0"
  },
  {
    "url": "interview/node/index.html",
    "revision": "c40391375e6c0b5a745e4d123c0ef850"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "f64841784bb2965d9ecb8a21bdf0c21b"
  },
  {
    "url": "interview/react/index.html",
    "revision": "e2d2fd0bedc865a920018f9c10ee75ef"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "c3d6852a69ae4b4c3d5abe66fe7d41ee"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "1d40f0f82af8e6c74d9841afd1a4206c"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "94c4a8eb666625cd1ac8423527b1d03b"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "b1944a6b872a7eadeb58f84d47e734e2"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "2ed4f5fe7eeab26b2556460a0a7b5044"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "f3f5c55d1c12095e4e1671d7608fb0d1"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "04efa298e38b20d8a5858c4d34d23060"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "862fa09884c077d32e52b30d27466de5"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "fac73e9881223a05b8074c098b98f321"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "7b8b18f6cded0155f62bcdb8d201e240"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "23684a2c500ce392002e4d5509a99066"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "e6a480739bc293114d255b569790c361"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "2a1617be66f4175129fb81fc644b1167"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "ca0a15165b982f911fbfb562744ae16a"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "eb4570fbedb6d428d2ea882dec45dcd6"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "fe0fe815f1e7e4a52b3a0dab6e05a195"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "a4bf7c198bffbfe875cac9db38827094"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "5562d65d54dd6a1af965843e5559356a"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "a8f8ea11ddcfad392bfde478a8e653e2"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "96835b8b126c80f402a3bede1b808446"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "b8ce56a8a7398704802225266cb7a86e"
  },
  {
    "url": "math/index.html",
    "revision": "7091bfc3ba4891503e13c6ebcbea9833"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "6720ecbf757a28e6ec40cdb1a30d54dc"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "ff525cf1fcf24f1ed4b751e975f3a731"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "65b409eef4cf62382c767327287da10f"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "93b4cd6f21cec058930546a9db776d64"
  },
  {
    "url": "math/low/index.html",
    "revision": "067ad40032fa05c5e88ba5f1e242275d"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "adfbcbab2e66f5ebccfee2ee2c7c5721"
  },
  {
    "url": "math/mid/index.html",
    "revision": "4a70417e901c7d6b2773fd3d56688bfe"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "3b981e96a1a3eb1fab18b3258ec3ee05"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "e289a62abcee12369f9183c9169d78a7"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "cfe681f3cf64b89b7f30a1363c52cc69"
  },
  {
    "url": "wechat/index.html",
    "revision": "5421666d6fd38197f2ed9302fdf4452f"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "e67ce3edb9c6cb138a4e99dc45091239"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "b8633c8864f7582ab306689a2c31120c"
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
