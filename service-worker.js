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
    "revision": "0827bf106c4cfe9dfe176b4686564856"
  },
  {
    "url": "about/about.html",
    "revision": "3bd24bc0c8ae2d4efd9e3abe817178c3"
  },
  {
    "url": "about/index.html",
    "revision": "e22047c6e70010323b934e9e843eae1b"
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
    "url": "assets/js/10.7e661623.js",
    "revision": "ef0b5290070f2a2f6e9fe424f5313287"
  },
  {
    "url": "assets/js/11.ae627b6d.js",
    "revision": "504f3c03575d50673a5fe3f1cd4f2735"
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
    "url": "assets/js/14.aa32187d.js",
    "revision": "2082877bffbe524e399de6ddc30fef9f"
  },
  {
    "url": "assets/js/15.b9c653f5.js",
    "revision": "0339a86f6047e37f7e21ef4ff31a1a97"
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
    "url": "assets/js/18.e15fbe6a.js",
    "revision": "d5c8ae5c75f7f8b0d23ce91dd114184e"
  },
  {
    "url": "assets/js/19.980eabeb.js",
    "revision": "b9dcb59e9b25c55d43b250e3442bd74c"
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
    "url": "assets/js/3.0097ae52.js",
    "revision": "2f27114d1210d6660e4fab5a333c69ab"
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
    "url": "assets/js/37.f4f76a2d.js",
    "revision": "38350022b531f45f41930265278ad8c9"
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
    "url": "assets/js/51.d342db47.js",
    "revision": "b774a04728118eb6831b6aa8c61df88f"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.62ab2491.js",
    "revision": "0c107d17688cda60e3a7f08926afefce"
  },
  {
    "url": "assets/js/54.e3a61960.js",
    "revision": "7d8e8aa9b8610bb75803c7d7588d73e0"
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
    "url": "assets/js/app.5eded5f3.js",
    "revision": "dc2a5df4b5bc309fd3db536e6f16874a"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "562328d91233ef04bc04d202d9965dd4"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "88483696a620ca26b9940e3b47f60a59"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "2b25f67502dad65617e7543d238e9526"
  },
  {
    "url": "fontend/index.html",
    "revision": "a624803c3cfb7df843946e3f2c6dd408"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "f9b92b84bdfc533e50f4dea1b833230a"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "2b5c5573ddc7c93ebeb8f2a05783a520"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "44d73e138b51af746d70ae4cd47bf1e5"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "589dc3fc1f2334ae77d7bf578be9193b"
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
    "revision": "442a15ec56e1fdca3173ce6739a06ede"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "2ab30378f99ab41ac571fb6c66c6d24a"
  },
  {
    "url": "interview/css/index.html",
    "revision": "6b646582f25fa1cd5a02f4c1f7345ca2"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "b63235ba482603f0c0a18d9d9dd2d46d"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "10d386bacbfcda36a29306849f52c149"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "9f581325e99524934e1ca197b75bcf43"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "6284260b3621ae69110eb70fef0ed54f"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "d8a1c31e9d0f95cbbf9b8c523a850fd8"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "be02d0e88bca72e35e8fac3a9dc3311b"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "9d09ce1988f309f228e08e659358e2f2"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "75ce91828d987684cfef233b20d3abbd"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "7033f7e56009b31178133225aa28e867"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "48ae7edc789091e9c92c52726cd67261"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "aee3ef38510caad25b054ea609eea241"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "6da1b91635872eb8f8064a1f24c06c07"
  },
  {
    "url": "interview/html/index.html",
    "revision": "8acbd067f664cb3004364b0750d8894a"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "4264846d66c084b3462e434f93c036fe"
  },
  {
    "url": "interview/http/index.html",
    "revision": "d942298675052a740b3d7c907ce00952"
  },
  {
    "url": "interview/index.html",
    "revision": "cabdf4275a873dee3feb22737c58801e"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "f3ff0d13da00f5d73ef5dce2b63e3bc5"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "0aef416fee51d535ed5d10b8c7fb6cb7"
  },
  {
    "url": "interview/js/index.html",
    "revision": "0d4700c83f5cec74483f549d60baedac"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "63ca472d7d0513005dd132e05a7edd80"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "d1c29bace3fff39845e66135a5d88754"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "d8b4de27b2686be3f856f0dd135c255d"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "1bbc6ca4ec8dd887247bc8daede95b04"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "da8cd3969f5c9ab200da3474d1bbc5ce"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "a4cadcbe25c1e287b530c67940c19d51"
  },
  {
    "url": "interview/node/index.html",
    "revision": "cb72320829fd11f430cf3fdb11bf6a94"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "91ca87b486d882909c7f354fd03caae8"
  },
  {
    "url": "interview/react/index.html",
    "revision": "2edf4ff464aa9ed85ccb26d721a7dafa"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "c16588a0d534e8cdc7ac3e8c9feeefe9"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "0c71b8523a5fead3916d74b8e74780db"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "05646643238cb4cffe6a30dc4237340e"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "83c952eedb8fe5df07621d41b13819d3"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "9929a0faa75684d4904ced3c9aecea90"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "1073d587203f00833165ae1eab818caa"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "6490f9ca244d7a784fb3453175471d18"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "31e023a97b6a578f48a64865059530b1"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "5b9725050c508a7d86f249b782bf109e"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "bb250ef63ff7a18e69f1264224d4c797"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "7a11378043a2f2c46504dd8d096e5850"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "e1824b98d84fe88c03dd78341dbeb3d4"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "685d220bdc52b93ddff85fe37a390012"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "2a4238e1ed19274771578d3fe826609e"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "083a551079cd7eb375a1c80a58bb13a9"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "40560716b40c3323d64b2870d684c34f"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "ecbbcdcf0b7470461b51a276a271a0fb"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "a7245201e8181505d56a8620e3607b1b"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "15996adef662ba44d80231f0e1c4be93"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "e0bea29953d4e4bc725f5016c01b06ea"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "f781b0e5851e04eb409871034d5cc180"
  },
  {
    "url": "math/index.html",
    "revision": "c4c2a6e7d3fb94023e36cb6e17b3aecd"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "021a72f60018846f6a1abcde210fe7a3"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "c1d53dda38190f827e5c25b20a95b0cf"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "85de88c75bd140f08909020ed104ebd7"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "35c8ccbbac941424f2bdd5f3a4e69f27"
  },
  {
    "url": "math/low/index.html",
    "revision": "d152cba7b6e4adf609136ff384094272"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "97f41d20a0345a9b7e2f9c89684d4eec"
  },
  {
    "url": "math/mid/index.html",
    "revision": "49d34619ce41f38c137b13edf2e31305"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "65e07541ca8800dfea580f9a083cd503"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "8992abf9005723eac3fa610dd7866915"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "75d6ed6cecdd5207a2305ac4bbfab19b"
  },
  {
    "url": "wechat/index.html",
    "revision": "85511e581fa8f95ea7087034bb9c89f3"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "11b93b008eb60dccd29d07505e3dc900"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "5dcb51772191c39ea5b73a87687ce4b2"
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
