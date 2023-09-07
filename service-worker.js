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
    "revision": "ce74afdcde33932bf0d456c7b0677322"
  },
  {
    "url": "about/about.html",
    "revision": "053e8aa0137bbe9060b826cd99d90b65"
  },
  {
    "url": "about/index.html",
    "revision": "eccc1aee1ad704cfef728e5cafe24778"
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
    "url": "assets/js/22.3a0e9b7f.js",
    "revision": "c44e4d8906203b44b8d4a94c1cd830c2"
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
    "url": "assets/js/38.2cdca637.js",
    "revision": "08c74d4d3bf22dc15659a909b4e7db8a"
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
    "url": "assets/js/49.13e6a2a6.js",
    "revision": "414c6e0288a2383a2bfebd2db7672eea"
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
    "url": "assets/js/51.03aea9bc.js",
    "revision": "952490cbbfe2995d55b5e7a18eb19e6c"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.c6b1350c.js",
    "revision": "9fcd306ba3c05bfb4040948db42b9f15"
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
    "url": "assets/js/6.9ffa83d3.js",
    "revision": "bc5d046420c3e4ddebd097d7904d612a"
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
    "url": "assets/js/66.9ea267ad.js",
    "revision": "370670b1d55763e7cabc1ffe0d35ddc4"
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
    "url": "assets/js/app.df53751e.js",
    "revision": "0bb2799eebfe47e70477a8182d1a3808"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "90c76f1d8bd49e06c465ff5f2973110f"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "088ef5194bc6fad1184280f4e7d171d5"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "56a775def0350e256efb1f6c7b9a6657"
  },
  {
    "url": "fontend/index.html",
    "revision": "6933c9e279daf59b3865c6360260e0df"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "7ec4e2e70ec830bd7a5b047430903062"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "9246ecf6c8a3e76fd54a2a93ec821b1d"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "343622d21883a3ab20690d6653005864"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "9446152dc1476e34e826fda95545cce4"
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
    "revision": "eabb848deca259cef1fd4261bf1801d3"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "a2df8efe72ece6579fabf5f01e3e4ab6"
  },
  {
    "url": "interview/css/index.html",
    "revision": "60f6e36570ee0b31d37d8db46f298901"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "fa82f27a62c9144f88bcdcf87b0f6eb9"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "a2ce7ba61d2e6826423268bdaa70b700"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "d47f8f1b4c07df928caa82a455df3aff"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "5597921fb6a1901b25724e5f6761e258"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "3dbc91bce4030d44d39f8cb6419c5e05"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "d16c0635c6e10412acf2477e882f1eba"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "e64fd48948825d85513dc52e805c7457"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "c4f1ed0555b8d6667a3e09b00883ab34"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "0815bcdfad673e2a1446b81a2156e4ca"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "a432e6e44d9bf71a31035aa30a996fa5"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "27dff3993b7aeacb0fb48c5c4f6e1ec4"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "2fa9308dacbdad584cdfb562b52f511c"
  },
  {
    "url": "interview/html/index.html",
    "revision": "66d78bb2ba4777db54a63bb2ded19ca8"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "4c1a015a17ef826e4c9de418875d071b"
  },
  {
    "url": "interview/http/index.html",
    "revision": "efbee071f66b222af7dabcdd260d2d57"
  },
  {
    "url": "interview/index.html",
    "revision": "c3ca2021509020195baefe31441bdff9"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "547a2d8a0c15b4b0b2c3602ff22922c9"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "cf8146d5a53881e89471cef1cf476eed"
  },
  {
    "url": "interview/js/index.html",
    "revision": "88d4dcc2391d6717e43501726aa3a4e0"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "45723f2c4e0122579fe92cdb4832a8e1"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "4e0ed2a5113b027a65f7efc404070918"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "ee728f51ef413d1205c3ea7e23875813"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "aa70b41d5cb6c3c168a88f8494bc4baf"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "4a8c5063a2a5cff1672a0daa6237dab4"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "3ee785b967aa111db8782a5acd0acc7b"
  },
  {
    "url": "interview/node/index.html",
    "revision": "91e0e2ad65bd55a814de89ee805bc6b4"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "1b0d81451c949123e7a3a27274707ff8"
  },
  {
    "url": "interview/react/index.html",
    "revision": "1236ee0cd8dda12122f605be913d9d59"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "8d8947f8ba9a6da8d03c6fa69dd26d3c"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "b1561ef670f36abdf5f86def50646dbc"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "f30799537f7fc73145d529c73df8d683"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "71730a38169d2252a8882dc5e3403cbc"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "aa5a1b06dbdda82f75fd70403c80c485"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "41d28b343cc5b60fd985df9140fef21d"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "a9d8c9c92e2da2e7968a01b8ce3982f9"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "41e9ac12e4e53d6935af0de468e89b11"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "0b709a458c4c3d7d2976e996888f58eb"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "6ad8c332f1e34e03700139ce0c5f8d15"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "9c077d86f1bbe67e3c361de62cda7bc4"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "feeff068d885c74e242974e1915013e2"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "a28f666abb80539a17728e7db40d4d9e"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "29f7454c1f857feaafe5c85c4e989670"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "4d4a966c589491acd62a175070a7d8cb"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "d38a84394dc7ca1b059e5eca1ff9ffc9"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "8f4431e0450227efee7f6ef0b7aa38c8"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "9de54962a93ee51edea729db25b85b9d"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "40f486ac3362935464e1656889888aa6"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "8d104867866b804bbf7a58be9715bcff"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "5ec1f4a9c0149d8562ced49dde2cc1a7"
  },
  {
    "url": "math/index.html",
    "revision": "1b8b90d719790340ab7eae7d44cb04e9"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "05054e0ae3cdd060d697e0d8e20a88e7"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "f1db073e6f6ff09b66dcd26fd2234219"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "cdff4e4fc2de92978ee37b3e9bfb32e4"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "79d03a0821cabffba00ae291fb219d75"
  },
  {
    "url": "math/low/index.html",
    "revision": "e7fab972331ef3d793d3c8199542c793"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "0cfb5610d8a5516d87fc3d85810dc8ce"
  },
  {
    "url": "math/mid/index.html",
    "revision": "1cc5fbb386fea647d3d6252bbb6e03c1"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "5a2e13e0f7e45ce6373aa75b94c4d581"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "43605f2b844701cdbf125eb351c643a8"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "c12f00cf91ebece956b2cc442adcb228"
  },
  {
    "url": "wechat/index.html",
    "revision": "b636acbef1bf308cc35327e7395fa18a"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "29cec18af3ba4307d251d907267d6f11"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "7f1754a9033b2de5608c3b2dc271f8e1"
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
