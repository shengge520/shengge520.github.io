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
    "revision": "d132a54f0f8ecf812ee61425ffa316dc"
  },
  {
    "url": "about/about.html",
    "revision": "3a3333b1489f8a506efafae980c3bf0e"
  },
  {
    "url": "about/index.html",
    "revision": "ec314d25c0530853499155aec56bf83e"
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
    "url": "assets/js/10.9881de60.js",
    "revision": "0561179b24b549cc2fae973ab96d6e29"
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
    "url": "assets/js/13.651407fa.js",
    "revision": "e56a3308091833e5d02857c335547fe0"
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
    "url": "assets/js/3.3b36b699.js",
    "revision": "7ed279198d6fadff2daff5a1b0c1f8d0"
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
    "url": "assets/js/49.d295c7c6.js",
    "revision": "2d7c2cd0ac41c31dc317cbabfa490545"
  },
  {
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.d03faec7.js",
    "revision": "966206c51248d16ef60a7f1455582308"
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
    "url": "assets/js/53.4131f176.js",
    "revision": "29656e058ae54846decd293b018292a5"
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
    "url": "assets/js/66.261a0db3.js",
    "revision": "bce0a7c5f4b4782703a54773b60460b1"
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
    "url": "assets/js/72.d85f3ac6.js",
    "revision": "3b0f4b93de65b6a3e40fb64994358ba6"
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
    "url": "assets/js/76.c006b218.js",
    "revision": "a0854a3cfb328af03e3f88c7d504ee66"
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
    "url": "assets/js/app.0173b8cc.js",
    "revision": "7768d37af1307b0b139ccce31ed26f76"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "59f159cdd40dcf7dc7374f48f8cebb92"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "7a9f0e8158aee022263677998b625274"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "3c1d7fa764ac6a3893d76e72fa812c87"
  },
  {
    "url": "fontend/index.html",
    "revision": "ff30abbc22403b55186f7f9b15a843c0"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "e6a7e8042a646bd5dc656f159f953726"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "d2b9f27851891e060ecc56e610be1450"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "91254fda379d10645ddca0fce39e6e47"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "8ec6f565a1e52828c73b98173f6cdfc2"
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
    "revision": "4cd5ba78f8ec916e16227b71c90cb99e"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "68362bc85f7f9e8ae401347cf5f663ac"
  },
  {
    "url": "interview/css/index.html",
    "revision": "a61354ce3fe6da98bfb1f55d31eee2a1"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "77c7910d3aac32d5ee1784203b80090b"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "96048dc45a70a618f409483483e69a14"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "b58fbc3e2df1766a0de39478c34738b2"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "e5ed1342f054657f5b7a70e343d42a07"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "c5068484edefd4bd8588f6e32486a621"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "750d8cd7130a5ac539ebc0b6a6e38b4b"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "298a41f0203b8ce6603be2a2da999770"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "7dc19715c9bc144c78582e54c8a83a06"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "42c30951300ab37136b918799fa898c9"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "7c72289d1905d144e41f8bc8998683da"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "369cf91afc1e6453dda86b1281e4cef5"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "7b90b64e358e4a4452708a500070ae4f"
  },
  {
    "url": "interview/html/index.html",
    "revision": "096f20dcffa36c86d75bbd0bce4f652f"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "8d69c82c1bc4bdbe8e9fb16ee5d4c6bc"
  },
  {
    "url": "interview/http/index.html",
    "revision": "7124f1095cbb7b13681872f0dcd1cc01"
  },
  {
    "url": "interview/index.html",
    "revision": "5bef22b5c9ed6c50ac4fe758dab84ea6"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "6f463478e9771ea669258b0bec40e102"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "6769998aa673cb6a7a1ceb32d410a899"
  },
  {
    "url": "interview/js/index.html",
    "revision": "326d938c97a22dab84995b98e9a4b411"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "694e11d74f3e3742ec8ca79d05775d96"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "be0bfcae905f862c7a744f223a5894cb"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "e3b8b941531f06b721c5382deaaaa392"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "4617b183a637457d270797b5083ce062"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "fbc475398b0f4be440e2972a14d43a58"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "7f5d3503ddf12c2f0a32be9e49372262"
  },
  {
    "url": "interview/node/index.html",
    "revision": "4dd2af6e7cc2e8dec342e49ecbefe7b4"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "f14f4dbd203cc47372612e694258cdad"
  },
  {
    "url": "interview/react/index.html",
    "revision": "8d16c6045ec08bc136405ebd53169c54"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "25cdfc0f1edd7e261b7b6a45e157bee2"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "dbd64ed3d778865c3fc14b9352cc2546"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "a706536b6318a8c503e5986a9327f6f7"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "5feccbe774f217c6ab13dee8c7254c76"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "3eb76199772c97defa60f3d84d838798"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "111802a720ff3806ad7a70ae69884a69"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "d924d4037466af67ca3e8d14314c3805"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "05e03c05a4885279f52a4f947fb83408"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "81d39e7554fc010e1ceb8b07e9a0540e"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "250bade05f7e002d22895f1b520b9dd8"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "1517c48de97ef820b3cd7ff3557e77b4"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "82ad56d24551b9dc165747a311270e6b"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "f70e8faf38d23d0d956daa0e422f2b0a"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "97cb1551ddbcfbe3df5a0cb3efeac778"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "d9954c26189900a6e07ebe69be6479d8"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "3e473a17bd80c3a431bd36b996ac17ef"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "4a823c9beadc629979a74a7d5e7ab0bf"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "3865ebb472393252c23c37a4b80a74b3"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "2d14c6df0ae4648a643b082fbb670c8b"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "ed0662fd590f8c782c60314fabe86a87"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "3cddde00b0fe143622101a2ec5676d5e"
  },
  {
    "url": "math/index.html",
    "revision": "6479bad4a562f9a1c9c68d19b6f2e132"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "965a88d509ee1d339ff38759511b5b1f"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "32646286094decd2ccc5b6d0434635e8"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "eb21a8ccf504d307ffcbc23c8eb4653b"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "fe0467db90f117d058de011e7eff85c5"
  },
  {
    "url": "math/low/index.html",
    "revision": "dd2c2e72e63baa31c096841f51eb19e6"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "d94ba14c81b3cef08d4f64bbc872d0f1"
  },
  {
    "url": "math/mid/index.html",
    "revision": "e032a494e21fad88687ba39013858726"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "4703032e685643ced988dd7f8faf9420"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "eb28634c279858e28c530a397c6b724b"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "6c228c1e25b42cd330a3faf56ae5a508"
  },
  {
    "url": "wechat/index.html",
    "revision": "9d209be540a8c4a5fb4c296eea4cbba4"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "dd00e8adfcdaa0219cf63d922e128415"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "cb5e5eeda1ec849cd76a117f1f1ff1be"
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
