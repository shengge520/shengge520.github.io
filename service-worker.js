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
    "revision": "1e3b69932180e7e5b445115da1b4baab"
  },
  {
    "url": "about/about.html",
    "revision": "3e0faa388b668b870f5d90df2f0d5792"
  },
  {
    "url": "about/index.html",
    "revision": "bcba6f8b203ba292beea7d4629af6510"
  },
  {
    "url": "assets/css/0.styles.b2391334.css",
    "revision": "d6cb02168b0732e3e7839c2947cc9359"
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
    "url": "assets/js/13.961227b9.js",
    "revision": "6b8afb3afc7a49b2a5db46755bf3ac4d"
  },
  {
    "url": "assets/js/14.7413730f.js",
    "revision": "e2fe7a1577929728ddbf33138895360b"
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
    "url": "assets/js/47.836ae899.js",
    "revision": "01f38b12031180cbb1332bf952c905cd"
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
    "url": "assets/js/50.44505132.js",
    "revision": "08ff40a4cbe9b08a456e7a8c09e59e4b"
  },
  {
    "url": "assets/js/51.d342db47.js",
    "revision": "b774a04728118eb6831b6aa8c61df88f"
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
    "url": "assets/js/55.6dcc4c45.js",
    "revision": "078b06888a853dc9ba55fc83ab4b178e"
  },
  {
    "url": "assets/js/56.901177ef.js",
    "revision": "ba4dcdd5be504c0f351dcce0073f2ece"
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
    "url": "assets/js/7.5f7fcddd.js",
    "revision": "fe5ab34006b88fb09226df2cb158835b"
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
    "url": "assets/js/app.36f29b7a.js",
    "revision": "a99545cacbc77941b54efb0d673195f2"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "9be871cfb1a0180b12c0de1442645ac9"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "cb6256625397755ff3f897b016427baf"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "98cc5d404bdcc5b004ae5d3a5ccccbf7"
  },
  {
    "url": "fontend/index.html",
    "revision": "fae64d206ec26cceb105178fcd4d526c"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "3fb305c0e3dbc4c12dcb31170d67dd15"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "6b069e53b1465d1ebcf27befa7df5195"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "c9536ddfe56280008ab5ee488473047d"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "d37281f3759cfdd7a0af0d38cf5a1d34"
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
    "revision": "067ca3e7a6384bfa8148e594616ffc25"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "ca3e28cb417aafa91d9f3dbf3b9bde1c"
  },
  {
    "url": "interview/css/index.html",
    "revision": "4b2b39f09727fd050e2144d26446bbc5"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "da9812d6e1b3a4f6b3a8e01ad784edb0"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "dd59c489ae27dd8f9937e2e0bcf78d80"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "848415efaf1e0dbd07194afa8e1bafca"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "76df4c25c0979d149dd889be47327d41"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "bdb7b571def31132e24d04453bcd4918"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "59a3e78ae89eb6fb0c75b5731ddab615"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "a2efb8bbf10dcde37b8f6ffa980b5ab7"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "0a523c3582b5bbb1f2012a61e33525a9"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "f6b02d4af4c6d8c52c136986858bf7d6"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "3ec5157b007378bf378be2bbd4b07e05"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "6b3a5ea9f6c2132e756df62689cb852a"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "1e9d474ea75f5b9a4c2de2fc4eb145ed"
  },
  {
    "url": "interview/html/index.html",
    "revision": "48d3a7759dc3833e6a76a19c7e38f4d6"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "7906d9dad2598252abc8233f769925aa"
  },
  {
    "url": "interview/http/index.html",
    "revision": "67435f00d8ad1629d4c8ddeb95b5874e"
  },
  {
    "url": "interview/index.html",
    "revision": "9e9985c12b2849a037f73af0e431bfad"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "9c9424af5931a7fc2a8eca59e7f88e9b"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "74429d06ac75551e0046568a3d7d12f4"
  },
  {
    "url": "interview/js/index.html",
    "revision": "9cda0d882c7fd4de95e572bc7e785b02"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "93f69fe8aeb04372f016eae5aa5ad22f"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "c4c7d853ba675c60e0dd2bb9200aacd3"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "976ae2b8317549d16b2bc300fc16d01f"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "f61d791a3818a5469aca715cb2fb83b0"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "8ad9e862c7f6da98169c554905aa9d41"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "29f744bbfb42ba15a5b75044d36ee971"
  },
  {
    "url": "interview/node/index.html",
    "revision": "97ba33b9af5de8ca63cbd19437989d9a"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "a80f89928a1c329e1944cfb0e3d299e1"
  },
  {
    "url": "interview/react/index.html",
    "revision": "6ad44e6d6dc84aa0da482bcd3c07e296"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "2182b7d52bafeaa2527ef763b202b4b2"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "3ab88c2c3fcd9de6d41853a4086d842a"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "cb5baece94a80af6f949a8c591dc118c"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "28f9187cb22f0d6ae40d08306eaaf044"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "ddd5d47698ea5117c65ee21d6486e8e5"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "e47831bc7d2f9c8a6544ea0117e436c4"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "e2e1ea11f0f3c75e5e0b16e1027a8ce5"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "71e6cac2b407dd216194a76706ec69b0"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "afcadc8a26482ea5fcfe7ef938ea1a5b"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "24f3eb59fb6b6390100d3a2ebd03b389"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "da4daae8e445760b4233c1d195bccb83"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "b2db9bf09ac583277a9ad7c5fa9f2e12"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "0fedf6784ea07682c8f44929bcde62dc"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "96965af5632d383baaaab3088636cb72"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "1d0851e2c5d51df287a838e202b9ddc5"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "22aa4093afd2353edf69990f6152cb96"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "19dd73ff696af9e9112a9b7be59cf6a1"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "7bd162bc1b98ff50818f4597ebbd26db"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "2ec1af2a8773aa50ffa83b8ae911b019"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "87a7c2d1b7d01897769e03cec01edc4c"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "623bfd96e6bb6e937dcbc82a9b46593e"
  },
  {
    "url": "math/index.html",
    "revision": "13ad5bea4e51459d7ec49f8e1eb4b689"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "a1057f637545e7160238bb48bd76eef9"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "03a3f2e92a290ebee61b51f8f622dfc6"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "c1914cdb36c09c097e05f177d09bdb54"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "d6ff19959e1d24fa83782c4e10cb48ad"
  },
  {
    "url": "math/low/index.html",
    "revision": "4ac37edb9f47e74df81fcd4de004647a"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "be05d56f2a7b672ead7c2bb1d4fa1e32"
  },
  {
    "url": "math/mid/index.html",
    "revision": "2ae3a9512bc018bb7454b3af7d4929fa"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "e3ebfab9506b90fa987fd2923c5cbc77"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "2b210920e97a99cb98d6d1c931c7b04e"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "c259b1e096aecd2440b1ad81388d2fe3"
  },
  {
    "url": "wechat/index.html",
    "revision": "4dafbe54c71ed48cb0a8344967cebf4a"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "d998c672898110c4269518467c34a60c"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "b1ec5f5a3641e39f7d56edeef9f301db"
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
