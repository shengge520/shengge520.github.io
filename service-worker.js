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
    "revision": "eaec94048675d0484c1c943fbd630563"
  },
  {
    "url": "about/about.html",
    "revision": "e10fb1f703f1ee5fc1a02df3a986c9ee"
  },
  {
    "url": "about/index.html",
    "revision": "df3d2b6bbb96a22428304682476e54f0"
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
    "url": "assets/js/3.6b97086c.js",
    "revision": "85bbb5702379c5b8f1b2534d1117987e"
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
    "url": "assets/js/37.c5020c12.js",
    "revision": "6a361e4bb09d00fcdb72ab8843de6968"
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
    "url": "assets/js/43.74aae4b2.js",
    "revision": "5302653c5151b559ef1bfd3cf18e071a"
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
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.1a1855e9.js",
    "revision": "24ed6529358627cd76ae9f14f35979bb"
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
    "url": "assets/js/53.cdb79bba.js",
    "revision": "a091c497bc44665057227eeb5e05e176"
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
    "url": "assets/js/56.6d412378.js",
    "revision": "90cac6ec1b464e51e50dd1fd7665f1b9"
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
    "url": "assets/js/63.f142372a.js",
    "revision": "b89f95a8696dc4d5662ed8030c7f480e"
  },
  {
    "url": "assets/js/64.bcc22084.js",
    "revision": "f620a37e55c2a7afc8a564ee447a1055"
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
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.c218df78.js",
    "revision": "30898208dde4774146b785bf0e3ea85f"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "42432b5360d0deb6519f5514a13cb2eb"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "a93fac07c8722ed15556b1420756fea2"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "cfd6f31a20764790972554e6c9423771"
  },
  {
    "url": "fontend/index.html",
    "revision": "68de6fd36a98c36bfcab80073d8e60d8"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "13074a307d8ed6b88c5c9398ff72cffb"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "1ab260ee8af1d964d51b8da39b87f090"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "e9168d8aaf2c15fde0799e54fa9c3d9c"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "2296d2676d7e0e45498586d03ebfa4e8"
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
    "revision": "56b05dd13e9b8d177eeb67b3af983156"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "9add9b99e3149e53ac1a0ec35f73606e"
  },
  {
    "url": "interview/css/index.html",
    "revision": "f1b74a81506349d2cc2762237e8abdff"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "202fbe2a9bfc81a983ee46993fd168e0"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "344bd08b90b01915bf6ab90acbc0842d"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "ed939a95d23b340b86c5bc27c2d631d7"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "1c419bfe4d163558da53075eb833410b"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "8b62341a7641d245f1e94a301531d942"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "1d14f11446cadb5454285fc423f5b4d9"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "a38720c30a29502400ded522230754f3"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "334ecaa8b6e0a763d88630670b3b93af"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "06c0076747a0990c4ec16f71dcd7a74a"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "6a6f63eddd89f708ed36b08ade594bdf"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "942c5093207cb5304d125e49dca0965a"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "9a98d32a3f863cb44a51fe70b0b0e6d4"
  },
  {
    "url": "interview/html/index.html",
    "revision": "e80bc693158f6818830fe317763e932f"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "d7a28fd3fd0aaf3f597c6357626932ad"
  },
  {
    "url": "interview/http/index.html",
    "revision": "3dd0f4338a9e718adaac27d22a3e346a"
  },
  {
    "url": "interview/index.html",
    "revision": "74a4762efde2fff5040aa134d0df84aa"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "23c55cf1d314f1aacb0575632754fd9f"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "0daaafcb552df488f1c18f8323b58485"
  },
  {
    "url": "interview/js/index.html",
    "revision": "4ee53b711a9b08af14eead4f86978fd9"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "7406ac69e35da2c7c4eebb208410f5ab"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "f8170d1ccf4a35274f35088ae2fe682f"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "2e990b567145d0bcdba866ab3d8ad70f"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "9450019f8ec54b567b46d04abda2ccd4"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "376f527e602c275512330f7271f52ff2"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "65dd510ef2aa29b385ce7c78614cb3d4"
  },
  {
    "url": "interview/node/index.html",
    "revision": "5a327c590a98998380757b191f8d81b8"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "42301092e484acd8078e3c2f051e9700"
  },
  {
    "url": "interview/react/index.html",
    "revision": "6d2e6e100a8aa6550fd2f6a84d56edf3"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "04d8073c525926399d5ddb2413f868fe"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "c53a8a5c0d545af8950095cb5b7cd5d2"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "51e165edb174fe54c617785e94879b18"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "03130b023a31f2f8319fbd19498f5222"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "59b45f8741531c778cd001b3abc78cb1"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "56151f1299faea4b7ba7c517db5da47e"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "1d70ad8b85c22c97bed8a898fe439c3d"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "d66bd86de46a1a35f821d13b8c8a857a"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "f32c1cdc9bec35a27be70c8f0a1a1764"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "7c47c3ecc6bef1435630062008e65aa1"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "740d5d26027f51c9f8a8659be16543f0"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "2f5d44d2e92dbee21c54daa4527b3d5f"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "815dcf668e0e9baffadfce2a63d866fe"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "711da46f6492d241fb63521718c29883"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "689be90cf5e4b60853fee4ced9f6a268"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "b3be64c12f14c79936adf38f452353ce"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "86a2b53a25e5507227f10ba813632635"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "c690612871964c90307e356715e32ad4"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "cf1e827d5729d25efe5b1927c8d48862"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "89d805762356e4e0746b10c1eda796bd"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "90052421eadd9b898dff6c5980e950c4"
  },
  {
    "url": "math/index.html",
    "revision": "5ec4079fb4d2d89287603d393db16bce"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "ada946e2b77b74172bb9603e19c0a241"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "bee35419c3801eb1e06b4827adc08b1f"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "4290ea4a8562865ab0d2bbf97ecec1b7"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "0984872f6757d9807c06a0210ccd32e6"
  },
  {
    "url": "math/low/index.html",
    "revision": "620127bd20c3cd5450c9cbdbd591e3c2"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "0a375f27b36909015dd69654087137d1"
  },
  {
    "url": "math/mid/index.html",
    "revision": "273f69b67221ff5e76e19f1a0370027b"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "ba71a0514dc7840006433a0624255dbe"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "a8b06c612a6b8eaf4fba99eef0cc668e"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "2fa3bf596763f14506ea5257c3341105"
  },
  {
    "url": "wechat/index.html",
    "revision": "2d3429a51ee1c546f2dfd010780359db"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "9fbbf630d603c436c52c3c257a38364e"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "f7a3ac6f8eb7ec4c398e36e40e139e8f"
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
