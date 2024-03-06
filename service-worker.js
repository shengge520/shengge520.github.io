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
    "revision": "a0ef4f58ecf3551e2467862084152c91"
  },
  {
    "url": "about/about.html",
    "revision": "dc054225b5e4ee1f24f0784076dc4242"
  },
  {
    "url": "about/index.html",
    "revision": "cb762f292bc15b7b2ab52936d3b59422"
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
    "url": "assets/js/22.7efe2fe3.js",
    "revision": "1f690780eedadd1ba47504371132fe35"
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
    "url": "assets/js/37.d0b745f1.js",
    "revision": "3b37bf53b8b54e7f83859a441e41cc7d"
  },
  {
    "url": "assets/js/38.d4f8d5b7.js",
    "revision": "bed86cb6bc79f3c52cee346cca47e214"
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
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.ca4d0254.js",
    "revision": "ed87eb0af6b9d898357c065271ff1a7a"
  },
  {
    "url": "assets/js/44.004bac61.js",
    "revision": "90ffd6b3f46ed482356b751219834c9b"
  },
  {
    "url": "assets/js/45.e41840d5.js",
    "revision": "ccb10d327012bb00f30397e2b9e79add"
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
    "url": "assets/js/49.47b07b66.js",
    "revision": "f715627e3962adcdde101c140b7b242e"
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
    "url": "assets/js/51.34c9a436.js",
    "revision": "47961419fabec53638e31b12179b1b1c"
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
    "url": "assets/js/app.a0c1311d.js",
    "revision": "c872d6c38fa73f28106720e440b903bb"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "044f708da7f97d3f675b7f2d346c3de3"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "4bb0a3b8bf7a975e6a3bcc3d50f431fc"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "b1ac44fa2308c35f77eebe8877dbb89c"
  },
  {
    "url": "fontend/index.html",
    "revision": "0e724708d9aaff083ac56458cdc6d38e"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "b53fbbf52695930dfd55152757e4a772"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "987dbc452ef56b606a13697a017ba78a"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "b713bffa783ca98a23b28e312a0ec457"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "c370bbad090578288b6fc8a5052cdd80"
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
    "revision": "57fca4454a7e0f0dfd7822509baeb9d1"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "22f40bec7477d29b5e22794c3befad76"
  },
  {
    "url": "interview/css/index.html",
    "revision": "351afe55c5f5209c9de82ec63028ece0"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "0949e0373c2ef1b151f982b5ad18f30b"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "76150e09010e7aa9d029b21f1aff86c2"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "6c0221793f25bb42e74017728497d7bc"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "03eae59a560fc59d95388a5d2231ddf7"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "c2f36a19ba3b676dfabcbbd35e8a78d8"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "b17854dc85b16f54687c0bbf758c1159"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "dbe724887e138e9d9b37a33eed09b878"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "95a1d140678bff38ef7c5504ad712884"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "52fdd0fe854a2904c13b0b43f40ef20f"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "8e92598aff3f3d227f9df5e7f0b3d54d"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "2c2f570ae05ce3d3a3d97c51e3ab212c"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "a96863d47afd6f84bc45b33ce64fcf73"
  },
  {
    "url": "interview/html/index.html",
    "revision": "2715681da7c0a62e949ddb0142d748c9"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "ffe68a829af84330b7241946512d9a21"
  },
  {
    "url": "interview/http/index.html",
    "revision": "4acc7199414375348e882143fbba405a"
  },
  {
    "url": "interview/index.html",
    "revision": "2193d04f9f58bcaa11c971944724f6be"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "7ccae6756633b37a10e6a661da083149"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "2453a49b59303798761b3540b3d5945e"
  },
  {
    "url": "interview/js/index.html",
    "revision": "9ba4d325efe01b93691e3663b2c7d507"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "a336c0e8b278f2972cdf818abe28a025"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "f7396227e07a765ab7b76b66b19bed5f"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "3eea070a34c257ac8aa44c2a6b332848"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "df8f51901c1aea1c1c6ebdc4d79458fe"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "fec675aee1bb90fa0ade40ebbd937c05"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "019800ef630e4ea8e866fc0663d45351"
  },
  {
    "url": "interview/node/index.html",
    "revision": "c7cadcbff088a87a3101832f4d02908b"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "34e9377947f823d469c35ef9340ba99b"
  },
  {
    "url": "interview/react/index.html",
    "revision": "d4a35c401cd346798749545bf02c032b"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "9dfb1654d91dae718e747f3dc8ddfc45"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "ad765812f25e9923c170d16e80d6b681"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "a541945403af59f3e8f2a427073078d8"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "7dc3df1b2700c6d02bb84c2cf197a2bb"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "03fd4f49a43078de8eecefb7e2094812"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "88fcb2424d651c2ea82908f38df1b6db"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "6146d09f7e7c1d24c47997508348321e"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "02879f25364edb70a8172d097e4c1249"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "00bd3fe08a5eb823845513f01b6a4752"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "85d3df0c24683c0260a17ed52893feb5"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "190883ead258360c21948782c460ed7d"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "7d1b7a2710910bbcec78de02b0592cdf"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "7a2aee32783c63d4d1f57a2a0fa14b57"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "a7306a6204ffabce9775f3b028c97423"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "0185d9b3653be8781132ff671acbb514"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "578371b37d9747b25a5ae83b67afb078"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "bbd609c3f4c127b6b5ffebaf65faf9e2"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "26ed0f335fab95e2321386af6e5d3fc5"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "4baa2bf0581709878e3f317bfd119f41"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "e39f7cc579ab6e33dffe8de76c9b0ce7"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "6feb2891624c7cc2e71241d066321a59"
  },
  {
    "url": "math/index.html",
    "revision": "524df7f6ef3d3ea642dba51cd8cdff22"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "b41207655075e9361e7893b8a9122e65"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "36d00eed06ea9d6be2c01e2ec9495152"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "46f22d06cf28e5c50cbfbdb83266b2b4"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "aab6a9bdb830b9949caa9854a84901cf"
  },
  {
    "url": "math/low/index.html",
    "revision": "a334b6992afb48e52be68519c96a9ab3"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "653a5625b9f67aea30779fc1494798f0"
  },
  {
    "url": "math/mid/index.html",
    "revision": "fdd1e2fee43882aeab1adbec5bb42da2"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "d94413db1acbcce5bf76716cc3cbb701"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "029e6311eea57478b0ac1482e2426bc2"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "86539ec42209967ba4d9017a432bfd85"
  },
  {
    "url": "wechat/index.html",
    "revision": "6f67c651af728221158ee202f1de1510"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "9b69b5ee3e2923faeedab05a5082ab49"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "5c71cf265b7b32ea7a8df954f8992d28"
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
