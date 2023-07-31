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
    "revision": "2a250aa81d614bcd5b286df3b97cd598"
  },
  {
    "url": "about/about.html",
    "revision": "7d5b43c28cbe14543927f8cba1fabe9b"
  },
  {
    "url": "about/index.html",
    "revision": "31c5e5079283aac45b4e50bcd97d3a51"
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
    "url": "assets/js/22.8b2dc226.js",
    "revision": "75fb0fe2faebafe51c0ca3b03668595a"
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
    "url": "assets/js/25.20150c37.js",
    "revision": "86d2b8dc73eae3833a0840518f6e45ac"
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
    "url": "assets/js/38.9cbf2139.js",
    "revision": "9fa54943c0ed5ae06e3d149b31740575"
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
    "url": "assets/js/41.33fdc0e7.js",
    "revision": "507158c2619ac289c4b9837f11be7a51"
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
    "url": "assets/js/46.2f2594d0.js",
    "revision": "dd9fe6466f70b4358a87696c8ff8b604"
  },
  {
    "url": "assets/js/47.2532d633.js",
    "revision": "be1da914b7425e537175e34387653bdb"
  },
  {
    "url": "assets/js/48.1ab7a676.js",
    "revision": "fe99ff3649e32d3ca604a25dc5c455f7"
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
    "url": "assets/js/50.33edf329.js",
    "revision": "cc2fa754a51d7eb72d14a48d9fadab5d"
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
    "url": "assets/js/53.90f2ea47.js",
    "revision": "17fb40244921a80ca7ab1b8fd8fe7d8f"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.de1968e4.js",
    "revision": "5cf140aac0cb8b681ab4f99a49261954"
  },
  {
    "url": "assets/js/56.26b32b8f.js",
    "revision": "dfcfc4a833397542412decec8df02bc3"
  },
  {
    "url": "assets/js/57.29893ea7.js",
    "revision": "ed666236cc6cf2cfb9c5a2e9348597a1"
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
    "url": "assets/js/app.e5d7a233.js",
    "revision": "97d058ba2ee74c9ba3b17d4cd00099a6"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "ab4fb012b5cef0f56e7dfaa3a760ddeb"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "4972cfb4cd67d915d7b2956b6467e452"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "a041cbd8399e4d55f4cb40dbe6385f60"
  },
  {
    "url": "fontend/index.html",
    "revision": "9cc90166ad223b1d795bb7a1181c2db7"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "64b841067f6e13c79e3d38bd93ce8dd9"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "7156f229e4ebcce8a3b51d8598f4c5d1"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "e24364d387d93fc94873bfd6c47beb06"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "2bae8934ad8dc7b7e959ae83a8925e9a"
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
    "revision": "7b71f805dbd82ed234254feb31fca2ce"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "ae9dadd530afb9acc22ccd9ad890be4d"
  },
  {
    "url": "interview/css/index.html",
    "revision": "97209800061ea9d3c01d6afd902f2605"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "a728468094878fadc81181c5d0bbe66f"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "a4e39765cedd013c78f3bd50bf575991"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "e0a51d198a4b9c782e2b302eb30536d1"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "72f0a90e510c766881bba7eb3e458d1d"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "445c7dac35c2eaca9c12649e8995754c"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "c378f7af4566a7c3b93b61ce7e6c9076"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "e6ee5ea6d591c209ef6b5f8c8dac6d5c"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "564c86dc70880be80183f419c230438f"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "2c8f70103ded4b7d97f1fbbba22a6a2c"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "5b3e2e411a697dcd9205999c8c166f7a"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "9823d4cf34a43c352ffb192c2e4c0a01"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "12e62c331690f272db86cb50343298e9"
  },
  {
    "url": "interview/html/index.html",
    "revision": "79287261f8d452bb1ea39f973553653b"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "2300c0047770036004cef968c2771363"
  },
  {
    "url": "interview/http/index.html",
    "revision": "3e5d20861dc89e15f3b3815199fb99d0"
  },
  {
    "url": "interview/index.html",
    "revision": "154f615b3d4ea4f2d6b2a7bdb9065e66"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "62acf299116759f511a39b5bb3c4927b"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "296d9864be27d3494e2e843590a326d3"
  },
  {
    "url": "interview/js/index.html",
    "revision": "3c57364f0252fa596d72c7afe1e6f391"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "528472b7f3099a27a808245d79dba8c3"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "253f282c86e757e4cd856f01d5648ccf"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "1105600b0f0e93a52bd4ae0489395e41"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "af43412f044a61c0992c7aa25a540999"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "8a2457016cb65c25f9602a1224b531b6"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "f91f9aadadebb64818bc48efe48a0f81"
  },
  {
    "url": "interview/node/index.html",
    "revision": "1dc6b728ceefe5e939c77037f435f2be"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "62b695f5570c991d4a54179da5d2ae89"
  },
  {
    "url": "interview/react/index.html",
    "revision": "7e9bbe3026ccb9270a8ef17121ba2418"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "b131de8e8de3190ddd94f15f3f65a720"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "41ca51f7b87251d178f03f8fec8b72d6"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "fff150d797ef51bfd846405303d0ff4e"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "28088f299290bd3ef6d074cc077bc3fe"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "aab6432348bde583bcad34b7f37f3a35"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "e073c44b1bb6235776889cb3080025b5"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "59a7ac762d9c508e492b0c42b4031436"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "0907f04cb9b0af82cefba4200c3d6112"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "ce1875260b29f674c49508126891ae63"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "289d0e7b86e0bd76ad54dd44c9fdf5d5"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "26c50de8b116e891e1f31bb07417c3d9"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "96a3eef8b676076b97d58d9a4aa739b7"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "52c7b8907cc0f8df0cc3418ba98606f6"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "2f426eb81a7a91fb79f2ffcb63e0266a"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "5e81714c98db6ee3a8b97f1afafb4ce5"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "9bee8fb4cfe0d23756f6d11438f0477b"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "cff2093af584689acc5a2ce625d254f7"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "e73b006a2b4955c0bcef2fd142060df6"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "15f19d24318039a2bea02bb12a0eb69f"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "48c4f7632f4a25084c8d80e7c723db3c"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "66d8dcbd0834b7a003f107e011594bb7"
  },
  {
    "url": "math/index.html",
    "revision": "69bfb7f90e58b80f5fd7256be809e7bb"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "db464f1ed6a003f133a0204e0d54b0cd"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "76a9cf7a5f8901437814674b874ba432"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "cf140146a0eb7cf9b61f788b8465e783"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "843dbbe6290a3620d41aefbff4842828"
  },
  {
    "url": "math/low/index.html",
    "revision": "cd877aa7e1b260fd232a2ed4b7e8c336"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "8976d5e9af27af4fe6c6342043c192e8"
  },
  {
    "url": "math/mid/index.html",
    "revision": "1413638911d5cf9e432e967458d02fb0"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "9bc4416372bace2e7cb8c1c2253015f4"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "0800f0ce594678314bcc41b9a54a8d7b"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "980639e487fee642baa39fe11a118d2f"
  },
  {
    "url": "wechat/index.html",
    "revision": "f5f1de6b36e3b286618798891903e24b"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "3cbd592f7e3a83c62140560112ac98b5"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "cd686d413222dd4be6d8c74a07c138f5"
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
