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
    "revision": "ab88d28a5e08cc383ced42b6311f37ce"
  },
  {
    "url": "about/about.html",
    "revision": "3c20734ea8b07eed022bb0941324d6cb"
  },
  {
    "url": "about/index.html",
    "revision": "0e3227caee596067f8c95ef5fdcf32f6"
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
    "url": "assets/js/10.7e661623.js",
    "revision": "ef0b5290070f2a2f6e9fe424f5313287"
  },
  {
    "url": "assets/js/11.ae627b6d.js",
    "revision": "504f3c03575d50673a5fe3f1cd4f2735"
  },
  {
    "url": "assets/js/12.22dac360.js",
    "revision": "46f092d1b139f44d69cc2ee81d3109c2"
  },
  {
    "url": "assets/js/13.a108f2e6.js",
    "revision": "bbb946597f760b6cd5935afd587ffa6e"
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
    "url": "assets/js/3.555f9bd8.js",
    "revision": "ee93c69d8484aa253c5cd1e1c4b6331d"
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
    "url": "assets/js/37.742229fa.js",
    "revision": "70d2b801624638d747fa7514af59f581"
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
    "url": "assets/js/41.242181aa.js",
    "revision": "ef907268a91e06d38a8b46fd864caca1"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.29c7963a.js",
    "revision": "bd42009c653eec39844d62a5c31274e3"
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
    "url": "assets/js/47.1cc27066.js",
    "revision": "4788d1a68e2570846baaafd267724cc8"
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
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
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
    "url": "assets/js/53.cdb79bba.js",
    "revision": "a091c497bc44665057227eeb5e05e176"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.138b5f4f.js",
    "revision": "d5ef4635c01e21c1e5889f4b06b86583"
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
    "url": "assets/js/app.24edcb1b.js",
    "revision": "2b7015236f2e68cd5c3c39d857e9a1ca"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "fab3ebfaa69363ffddb45fa2574f0d71"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "cbd29db5e11df636fdf359b0b4d4c9c8"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "03282a0ff296420063e39674027dc9c8"
  },
  {
    "url": "fontend/index.html",
    "revision": "8bf69f8cb4ee48d88e4e8788e1ef2eff"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "9ec928898a820d2da71170f81295c53b"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "356dcf72b401a18ca2163b474f9aa775"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "7653f0af934ee1f48cc122ff50193161"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "792c979efde6b799f99d3ff06626aebb"
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
    "revision": "49683dba47b7a2254a37e09ef2f3d14a"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "1a83b333ad3fae6ce3775d96c8cfa64d"
  },
  {
    "url": "interview/css/index.html",
    "revision": "582b6bd6fa357da76f85857883c8b0e6"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "4b97d2240de8d6bd63c5fb6ea25c0d8e"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "39cc1bca0a51ab6f08e8cf6f4b4490f3"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "a021981e7c51805b5eabe5c8a8d828b1"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "3326fb4a90b7632b91f1e8daf1c8e83a"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "cbd191365242eac1240ef8570979cf1a"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "420dde068e0bd51f45dc913d75e8b5fe"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "acd6a766cffb21c852ea5e9a7833f4b8"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "d4443069f8c38032bbc9030c0d066032"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "59119f27adeb8066fa05813ff6454aec"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "1b622179f2f2a8af18c9065069854ee8"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "d356c00131876061fe96f300247d3d91"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "619dc8edc3bbce25859b4534a9da55f8"
  },
  {
    "url": "interview/html/index.html",
    "revision": "92a74d28c2aad67e4a9c8783152b8632"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "325476e3105536edf59a79cca750bcbf"
  },
  {
    "url": "interview/http/index.html",
    "revision": "11544967867f40e689f45f5d7ebf6d6c"
  },
  {
    "url": "interview/index.html",
    "revision": "85a2e9b322b108fa81453d2fc14d2ec0"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "29ef99cca333f75c0fbfede70a87817a"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "a9fe48cf406ce9bc8f0d55a550f7e9c3"
  },
  {
    "url": "interview/js/index.html",
    "revision": "cacbb13546bcaa94d180f844eb8c6f64"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "347d6fbcf5ba5dee13ef64e2ee4695e3"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "eef652c25e0e78af54ba6b97c3588bc3"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "0d3fc810da2b90b7ddf16d73b7f11171"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "6551d3ee5ba63ab0a9e50daea02b04fe"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "9f6160193b680f931fa3a365112acf3e"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "e21a73adb093e12b8b546a304a271865"
  },
  {
    "url": "interview/node/index.html",
    "revision": "077b098fb6421cde640e63ebdb9b4f32"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "efd270d359ca57d605592993f3540a69"
  },
  {
    "url": "interview/react/index.html",
    "revision": "e2c0a87563081744641b3f4731ceb5ca"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "446cbf0e4bfbcb5a943a83f3a2414737"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "d63e473b11412fcbb65c0549acdcf3ff"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "c955fb9146a42f2a35409ca8b4e3d479"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "3ed347ef443c60af238638d97fe402b5"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "5da7959cd99555cbdf9b4056046d1fab"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "df0530918ea918d0ebbf63db5c8feb84"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "66259b029cb684c3af7425badf8f2927"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "1df8962554ef8f6cb172a237db2b0c92"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "bbfebbc7db423d74ca99b3cbbbaf95b9"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "0c99f66dcd1ff2479d697d370948b2b9"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "8526054baea2f0b91b0aac890faa823f"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "e86893e909a8fffeb8c106df34e11f9f"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "d55e3ecc50fcb0e8227612cfbfc2a037"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "b9e1807b2e3e460a6b42fcb748609c4d"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "7017841038ef173ac137bc39e7580f99"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "22397abdd13db749050b65a0e762c3eb"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "e5d94f7a8f56eb36a305b22995bd5c1e"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "97c2a00407f9aba22577ac48de27356a"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "13084aa23dab4f144be9080d8076e6c7"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "3ef1b1cb0babe7caedbcc259d1ec3e9d"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "8eddd40614e21e9c6352fe09c46d7dd4"
  },
  {
    "url": "math/index.html",
    "revision": "14de5867effcdde91f01d4ffa7fd884f"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "4430ab83b26bc6ffff4904802f91a9ff"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "26f54d105d34bf0510b462ee121996c1"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "079f2b280f519237e72aee04655840d5"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "72b98d043f01e6ca1230d7c340cca3a8"
  },
  {
    "url": "math/low/index.html",
    "revision": "423d07899dbc12b3122789bad9558527"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "a8c723a478a60394bf689793d1a67023"
  },
  {
    "url": "math/mid/index.html",
    "revision": "edd5ba56c475623157c660a465f90943"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "fad22629e5dc442467951178efe30f91"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "7a3bac7bb6c6e38448edc286aefa0b37"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "bb5bfb3d98310e3c25b29bee953bf77e"
  },
  {
    "url": "wechat/index.html",
    "revision": "62af50585bccb853f7c05cb1e93ddaec"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "5f70af6e0af5b496d9b958d887e9a0a5"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "36bd434a314161a2f4f740343e259bcd"
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
