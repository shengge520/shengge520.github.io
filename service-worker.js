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
    "revision": "2f3ef1c9fbc73c3e3f5f0bfc17b49421"
  },
  {
    "url": "about/about.html",
    "revision": "0c61ffbe29b6f309217f4326bcc40de7"
  },
  {
    "url": "about/index.html",
    "revision": "a0cd19cfb4e35f3fd356795373bb6bd2"
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
    "url": "assets/js/3.f9d6563f.js",
    "revision": "fd1f7f82270617397c69bb9a30eab6a4"
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
    "url": "assets/js/37.038ff15e.js",
    "revision": "8035d662d3fdd1247346db4458eae6f3"
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
    "url": "assets/js/43.ca4d0254.js",
    "revision": "ed87eb0af6b9d898357c065271ff1a7a"
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
    "url": "assets/js/50.eafdddfc.js",
    "revision": "e3e4d88288e81b00b960def89b26a4e7"
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
    "url": "assets/js/53.421aa832.js",
    "revision": "edc74860b79e46d940660bee686e0a2f"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.f929d7bf.js",
    "revision": "3f12035e78dd0515729e8e88a900d906"
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
    "url": "assets/js/app.44603ba8.js",
    "revision": "eef9086e9f888ee42c288c6cc3d60374"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "54529ed7b8f2ba26bcad8321608833ab"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "7c40add3d3dbbe011bed0de62e0f4a5a"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "22a102e4fd5292ff5aaeb2c0d6b783f1"
  },
  {
    "url": "fontend/index.html",
    "revision": "2a65442322123294f9c8b89a03c43a07"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "6ab76da28b19ff650235a33da98ef1c2"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "2c4a02387b657fc0c5a7d3a33ae1c226"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "1f35126f9071ce3e09381cb2a6556800"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "b01b027e26eba6b71fd1cf26de2b5de6"
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
    "revision": "d5e77b5f6a869ce1635249ed2935b0aa"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "a8d20a6e5a16c79b3da42710a5b512ff"
  },
  {
    "url": "interview/css/index.html",
    "revision": "f925fd64da5b6af6d11079252c823a16"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "cef57178d71e49d8148392eac64af0b7"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "18df97df1e17fcb0bb9ff6bfa3ff9c53"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "318b21f4b66f2a2e6d47a1046c60a7b5"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "41b383dacccc08d65870552d262ba232"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "9a176f4c014c32819b313e6ba375c15f"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "e62162b03a40475e35381b01a6fb835b"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "c8697b8e43494351535faa34945714ad"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "679ed0d4025ecf129ef7c3d2768702c3"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "392769212833d8d7ed889b4a1cb2a737"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "886bc7daadece18d004ddac4099ecf85"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "ac471c7c1e084645989957d6e14fa8d2"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "1b4df674bd86039341970495c37d2bef"
  },
  {
    "url": "interview/html/index.html",
    "revision": "9667d0ac26827747062d50bcb2dfe26f"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "4eeb1a069328bc583de5c56824df680f"
  },
  {
    "url": "interview/http/index.html",
    "revision": "6a1dbd633533a637d2ce310df26031db"
  },
  {
    "url": "interview/index.html",
    "revision": "934e1a9f41238d30ad3c2f4683945ad8"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "d9b4467214b5352c676f10ca7206bbf8"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "c5c097585b346037090cfd998be1c97e"
  },
  {
    "url": "interview/js/index.html",
    "revision": "220472ceb61619cb6eda3753e3b25e8a"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "1ec1f0454eae9646c920705d78bd6174"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "144391b84ef900b5cdc31c07d66da7cd"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "229a1ae8997635aff459ef657b84bd63"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "cc51b356e31e36f873ba1dfcbe98cdc4"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "cbfe5510e4e7e7c997c624212f81974b"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "7c49e8cb2d64a08822f5fa8a7da6a9f3"
  },
  {
    "url": "interview/node/index.html",
    "revision": "9934f5e92c97f95f9dcf989878c9d54b"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "300d008ea45cb7ccbc61980dde188b70"
  },
  {
    "url": "interview/react/index.html",
    "revision": "522a505188905f0360d74897240a9ba3"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "7fc164e1f6c8af17b2ab6f02d4449efc"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "2847a649ecb498c389952816a0adfe8b"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "1a917cce26efaa1baeb16dc8c7987e40"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "25993ebb840c5edf16f2309ceb673cfa"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "b65688c25374ba894a468eceaea46f55"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "3beaec7f07a835cb5229aeb8d333c7be"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "0b8823b920f6f0a0d80c44bb2d1f6638"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "abfbb8bff4116d9b586da0d529bb4c46"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "11b1948a77c4ab43949c336229d74925"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "e46ca8fde3b1b784ace591f2e6d9fa4e"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "341ea38f57e5a3c5238a26459f2922b3"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "71a6566ff94ba81004f4dd0f754ad0d5"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "06af7dff6018248836fd2cc3108723c8"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "614880c09743015054cf59f38313f682"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "675422241d57a07c9b52e164aa13a6f6"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "94573b0d3c457621ff5129976f2bf3c5"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "988e63ed7a24c5073c653679d2efa3b5"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "fd5a125eb09cc089e96ba65c365decb8"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "b7ee9ab267f23685606c462205d342b9"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "372210bb098ffcd37f073390bfdad3ea"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "a2284d178056c7b186568eca7264575c"
  },
  {
    "url": "math/index.html",
    "revision": "bc0469fbdf0c93ec74477d651526bd6d"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "9b24e73fb5efb7d68d2837a4be9cb8ae"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "64f2e31ee860a15aaac6eed09deb2695"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "c3b032efe6a73acc350e85378a3d1f0e"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "063c2d778b2337ad1a201a3c2d557779"
  },
  {
    "url": "math/low/index.html",
    "revision": "069b8fc1f6a6eda6f7a26e49ce5a4930"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "c8457a3bc91146c06bb5a9cd1c1f1789"
  },
  {
    "url": "math/mid/index.html",
    "revision": "4d3a8a20341ddca187930eb72988b88b"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "a9f85a9f4f4aa0cb1724937bdaffa855"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "0749404b504d7d784c26513de0c4d015"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "cc6772cd88c8b89e18d195284377c4ce"
  },
  {
    "url": "wechat/index.html",
    "revision": "aa58d96ee9c14d43801b630e9f14fe98"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "7c59ab89ab420d541b6e86bdfe357de8"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "5e77b8d88ed9e35bdc8b5de3876455c8"
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
