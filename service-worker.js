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
    "revision": "b10ccbe1c8db949201fb64ae9cbd3431"
  },
  {
    "url": "about/about.html",
    "revision": "72afb85c89b805aa85d68d6dd2ef15ec"
  },
  {
    "url": "about/index.html",
    "revision": "6ae2e2ba593fbf3739e8da6ca2b93828"
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
    "url": "assets/js/50.9a832101.js",
    "revision": "70452b856a970c023460c6a9f20cb0af"
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
    "url": "assets/js/53.eebe35d4.js",
    "revision": "7c634ae277135cca9ac95a7d4983bbf7"
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
    "url": "assets/js/66.8a110c0a.js",
    "revision": "2be0994054cbdb0b4e13c3c750007c27"
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
    "url": "assets/js/72.05115e34.js",
    "revision": "d0d496414e57ea1eb9673c827d93ce2d"
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
    "url": "assets/js/app.c9167a87.js",
    "revision": "e2f89670b13322084c2f66972c8e9362"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "1d6a1caea6ae42dbb03d6997d9b99548"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "4c7eb2ab1d637419e35c84bc39778f12"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "bc595317d9092fbc7a9974682580f5fb"
  },
  {
    "url": "fontend/index.html",
    "revision": "fb64025c732bdd4fdef4a12124ae0732"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "6bea19015c6148d2596a74fa523e5edb"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "b51fc4f74e042ef7cba08028960cc424"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "e5a97407eebec9669c33f2b0c44de70d"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "91991314b68d0cfce45a69ca842719d4"
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
    "revision": "048ebbf7f80f77d820b248dad111c9f0"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "bc1bc89f18e2ff2b7d706c9e0b43e923"
  },
  {
    "url": "interview/css/index.html",
    "revision": "0617b27a1e03f428c650c0719d30212e"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "0710fc61c5346c0208875902fa3ed8da"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "eaa64e8d25cf7b13912866d2136ebe5c"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "4d4c6ee4bc600baf12b511d5912bc588"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "b75ff0f82141e1d851217e5f0c11e687"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "e51b258acfed03a5b53347d6536e785e"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "4324c4f34b9e1399a0634b7357e332af"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "23a5bb0c61756f602d69f457ff1620bb"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "fcf1d0517c5c6fb1ef16977fbd27cbdb"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "335410dd6d67c264c18eec45bfadc35e"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "bb38ddfb683a72e53b4cae5ad5a58b9f"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "105ffdc729dfa4f6a38f1ee82c6fa6db"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "54e74882153a0f6ce64dd8a3c32a9e4d"
  },
  {
    "url": "interview/html/index.html",
    "revision": "878801244a57021d25626e23b0efb9eb"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "4ceec43e56cb3b841b2de6278e56fc8b"
  },
  {
    "url": "interview/http/index.html",
    "revision": "b48a3160e4231237176f7f40f5f8e9e7"
  },
  {
    "url": "interview/index.html",
    "revision": "c3a5134583a649951a5973aa0ba179f4"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "aee4a3fdd3ae9862c7be61825d5d0ad7"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "0ea9f25b926bf9d6bc81a7d6744433c0"
  },
  {
    "url": "interview/js/index.html",
    "revision": "2085425d3f6f0a64629392c577c1c267"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "7605661673e2cd315faf9ef7e2a266c8"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "11719ecf5c1f117c198d1e74cb1c5e23"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "846c6942e798638258ce9407955b7479"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "d02b289b413f5f8d122df7c5da664fcb"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "04f485c23ee7ba028a1378fdbf9f2b4c"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "6ae91f70d03102deeb1d41750f1ed09a"
  },
  {
    "url": "interview/node/index.html",
    "revision": "632da415ad77884b49c70b1fcf4580f7"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "017bbc1927c16e86ff257b5f1c8de6b4"
  },
  {
    "url": "interview/react/index.html",
    "revision": "72013dcf8a64ed87f983d791161496b6"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "eba9eaac4428d07c7f7a333060b51c57"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "f6b814e4bb64487bb458470657aeb289"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "e5b57a12d98f564f854db8b434f5276e"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "d9a9f968bfa2a924a9d326796c13f4c7"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "c6fe2e24c4128b2bd759cca7892dfd62"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "c18060cc89d69584eafc7892fe74edb5"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "73e81a29f03d0ff8fac1674b58b69822"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "a505cf3f5a4409addd68b591ec484f4d"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "bddd0188646411953d3f13ed1349c183"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "f9381b81dea0928deae968fe26e96f31"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "b19cde4e851e77b82d5e6365a2e69537"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "4190b5a045bc00fcf7878cd4e6f6317a"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "c75221e49308edaba01f9cdae75bf5d8"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "f9bb04c1dc7d4e0ec29a4398d3bcb14a"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "744e965ed5465d59ba8c039fd2b4ff05"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "6c23846b5f2a3571bae0ba6d8725c046"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "81639ccd54679d3cbf9ea6465f67e90a"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "239bf7d3d3f559e8510bf4b25a2854a8"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "0994aa2cd0856c01a53bd32959aebcfc"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "71437e078522352b452505b805e5649f"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "3bb48ae94e54ce382f7e266b6338a42c"
  },
  {
    "url": "math/index.html",
    "revision": "2cd6f3d2997bf891038955eac00e31f3"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "0ded3903aaa09e65f9ceb29e4448ca0c"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "a5e76e0c0a79dc6c3e9a7ab0c36cc1f7"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "a7886b3089303cfeffce4595c7fe78d3"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "b30eacf5fb8234f6bb6c9b53cd537d71"
  },
  {
    "url": "math/low/index.html",
    "revision": "c9ff953cb43ed4fbcfd8a8148b6a5202"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "b3af7a53360e5c8f959ab637ab357332"
  },
  {
    "url": "math/mid/index.html",
    "revision": "a6c5bd4b98bf953670d1411821bb8427"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "177844af853c241eb8573d4f198050a0"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "ba80bee38d7c3c4fec65aa484598d300"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "19d4f34b50228438095568f84e11772d"
  },
  {
    "url": "wechat/index.html",
    "revision": "6539573f9354eff5be4f9ca23d2d1629"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "1e9797be7fea723cfa894d6cd9045ffc"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "0a56a00ae62e346b4438259b8268ebd4"
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
