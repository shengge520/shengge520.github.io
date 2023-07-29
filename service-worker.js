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
    "revision": "66bd1a4be7ec8bd1e75c92a01289fb03"
  },
  {
    "url": "about/about.html",
    "revision": "9f165c67a15fb2f73f2bb008a363ab76"
  },
  {
    "url": "about/index.html",
    "revision": "919016e6eaa55e80a46691cc04cf1191"
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
    "url": "assets/js/20.2a2e7fc2.js",
    "revision": "67baef0eebbfb0ebc31e76261668aa61"
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
    "url": "assets/js/3.215009e4.js",
    "revision": "cd4cf1f151fc3aa3b9cd03d7ad9587c9"
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
    "url": "assets/js/37.8f304ff3.js",
    "revision": "854e67ab89b50e3dec13d820c276646e"
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
    "url": "assets/js/43.557f1ee5.js",
    "revision": "ab3384c591391dde7efd5a988ee97589"
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
    "url": "assets/js/47.836ae899.js",
    "revision": "01f38b12031180cbb1332bf952c905cd"
  },
  {
    "url": "assets/js/48.2d66ac69.js",
    "revision": "f99b700ad3ff849b2df9705aa0313017"
  },
  {
    "url": "assets/js/49.a5fe8b55.js",
    "revision": "60dcb6b961dddfd1c01adbbd6ed8d371"
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
    "url": "assets/js/51.a4a6691c.js",
    "revision": "a511729efe3173dd511e545101414518"
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
    "url": "assets/js/55.4ddb18e3.js",
    "revision": "a1126625572c61ca87d8e01c973d8c82"
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
    "url": "assets/js/66.48657363.js",
    "revision": "34ac68ce87be6dfa4262484137cf91de"
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
    "url": "assets/js/76.e14d9f75.js",
    "revision": "f1d9df0b1b20d751c9ea7ecade5b6299"
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
    "url": "assets/js/9.7b6a8526.js",
    "revision": "727ad4f4bfc53cfd9fb0f4b89878d7e3"
  },
  {
    "url": "assets/js/app.9341aa3f.js",
    "revision": "76aab5d83ef46e129cba53deb3f5514c"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "f9444a12b404e436585713526d2873b3"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "e28045a447e8dcb74e629a98b594646d"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "024fb99e76294a7a74159318efb68d31"
  },
  {
    "url": "fontend/index.html",
    "revision": "fa89fe9f263af2bc27f9552a9a25c5d8"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "b3a2aa08d5be55130d37eea517a54ad8"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "6dc69b641fd1958aeae0fe2e844adf64"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "b9fb4f3853b56d1d890e795aa0c9252d"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "b414c893fe04f5db1bd4e86f414a7292"
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
    "revision": "0d88fd64907fffc67fef0ad4d2af3224"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "e3366962d5dedcbe964f23f5b272bd5e"
  },
  {
    "url": "interview/css/index.html",
    "revision": "95221510aec3a08b6a2cac259a36c8dd"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "d80346baf6b1c2761739adfc5f2ceb79"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "0654a7cae89c8f50dacadc6b896ead31"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "9b285bd6d27c3e8dafda74d4fb1aae79"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "4ef96594df131d6089dbffc4b563fb70"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "d34ecd8ea226ffd741a183e41dc89e4c"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "99fe1ef2bb88ffe772fff84f3548ce9f"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "aaed5364869c82a84c8c384712a4abcf"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "6d04521b5636a2d7e995d9f9aa943ff1"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "fb3848685e7ca854d7e9c9e1f3cd9553"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "34deb8f036146754539cbb15030c26f3"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "1e1a590c5ad9a728a90792f4d6d5f584"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "342f5b9c7d733510fdcf1ba4990ba5f1"
  },
  {
    "url": "interview/html/index.html",
    "revision": "bd4f65862c898ac98825d9781dba2227"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "321712b3bdc08f30a146f97630fc9b1e"
  },
  {
    "url": "interview/http/index.html",
    "revision": "c4f2639aa4c5db70b252fd1f331b8ad0"
  },
  {
    "url": "interview/index.html",
    "revision": "3eb29761e6defc9470035af8a09a09ac"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "8b2d70a39f8594df8c79addb6317b15f"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "9de8ccba1c0e4ddfc341133cba699b7b"
  },
  {
    "url": "interview/js/index.html",
    "revision": "26e14da88f85cbaa7d478fcd6b26ace7"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "de836c1ea025f0f4a4b31fb7919094f1"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "21012474b780d65ec2ccf01dbfcb6691"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "f1013a910743735890ffa07fee846be2"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "1445179b3317bca509b0059155842517"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "f7b8fac7f02895c3c2c7ee403bdf90f8"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "c4c3d8880f91eef4e4718ae51453dbb4"
  },
  {
    "url": "interview/node/index.html",
    "revision": "1d14ffeb3eab7e1a48e2b9776cde0d37"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "84a58f6acd6e6cb663c8b70e6b13a4c9"
  },
  {
    "url": "interview/react/index.html",
    "revision": "cb7ccdbc95feb251fbe5c87c2b1a8bd4"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "ddcf3e1e49f8baa425d4839aa936e157"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "59114e9b652d8e9fe3b1a2522c7d8362"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "4c5b2bc84bedce19fff92fa3a5584a94"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "acec2e18486bd26fc2cd07f938b2dfee"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "fcb06bd7684521004aaef52fe998feef"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "356ec17d5ea01534e1881d1a7563b510"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "ca0049dba8fbb8631ff4626d452253da"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "2b73330444d5a230f8f816b0c2f18110"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "7f488257af4c19c7924837327680e0d4"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "cf8c20db267679b4f3b3774c6cce8a9a"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "a91c59c57c6d6b510ce97eb719c52cb6"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "d47859996f43d098a8e06630c71e2e83"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "c17d99a79dd8126907599615414c8659"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "12fd6852f57483cc485e343c6f8480f1"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "93cde6f87b89623367c7c56c6e6eca42"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "2a9421b61058b596a3dee44a2f651edf"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "a8461b9c655619518923f9139ec31183"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "7de549c769332bdec22edc3d13d10405"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "749e9d6d9e6c5e4ad09b23fc30cdfaf0"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "9373eb5046f7fd50442fa34eb4d44d0c"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "8f55ade8b9e0acfd39a8b15876ffdaa0"
  },
  {
    "url": "math/index.html",
    "revision": "a17ad4c28c56a2990e3bb91d41fd8983"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "65afe2de2771f68a467f6b4eac7f5a64"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "1a3cb2e718fa5ae7199b2f00412f6505"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "91ee4e061544bd8de051fe01e7ad0cbf"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "5ae3824908980c3d70641d1ecd6a6a12"
  },
  {
    "url": "math/low/index.html",
    "revision": "c696e5dbf746ac7bd019ed683d611a86"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "5a80602cf6e017b8793c62a8bdecc92f"
  },
  {
    "url": "math/mid/index.html",
    "revision": "bf3e1d8e31fe710a6d196a9060f19e10"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "dd14205cf7cee9eb1c0e6e478c965223"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "eb3008c85d80614e92c4101d542da79e"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "4029521314aa21a04a8a3778c247332b"
  },
  {
    "url": "wechat/index.html",
    "revision": "4c4fc030a4fbd2aefd8d1a0001d81609"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "de3d65e6aea2d329aa98e8fb42b885d7"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "c97bb44ff93a7aa98c830356a4d3bc40"
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
