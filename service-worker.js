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
    "revision": "c9b6d6b6c32613adb57a3e4211c3c3c9"
  },
  {
    "url": "about/about.html",
    "revision": "ec622de4d841ce2f6febb04ef5419424"
  },
  {
    "url": "about/index.html",
    "revision": "d550d695595948638c2c4bfd82345193"
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
    "url": "assets/js/20.328df932.js",
    "revision": "bbb6b76d1604159ca0b3aa850b797e86"
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
    "url": "assets/js/3.704df541.js",
    "revision": "c96e238fa016f86ae9346e766251cd9e"
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
    "url": "assets/js/35.4bc85d7d.js",
    "revision": "525700595a7d3c376f2d9e9020a2f38b"
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
    "url": "assets/js/38.7be5f639.js",
    "revision": "63a332af2be7f83fe40a16d0650bc445"
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
    "url": "assets/js/55.de1968e4.js",
    "revision": "5cf140aac0cb8b681ab4f99a49261954"
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
    "url": "assets/js/app.e3c35127.js",
    "revision": "fd30fedf2ad70912334e08e1ab1aac61"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "4a2916af9f689bbec191fe82af6dc047"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "04ccadac9153fde48253b11de6c9a3ba"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "63d7ba5a279c635cae3136a921dc4bbb"
  },
  {
    "url": "fontend/index.html",
    "revision": "83881db58c4474046108ddc1fa42b909"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "e55832671eddcabf0437db606acf1c46"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "d94dce4fc0b1d7d4f1884c0accebea07"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "df8cd98a811d291baa3ad9d1ab6480e8"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "d0e396c156df7810b4d651c1a8fecfb6"
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
    "revision": "ebe2659c5b9560366a4d2db9c1c0cf12"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "2d4f1b2ebd7488bf33f1cccd038c85c2"
  },
  {
    "url": "interview/css/index.html",
    "revision": "959d57b6e06f093a340227f7e4afab3f"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "ce161807787eb33198b7931dbf07a511"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "62ffb839ef1d9c74050aa61ac271022d"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "cb3a1ca18a326a6e7e359df73059ef02"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "c6b909789b8a09a7ebcfc2208d7a1479"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "984f4524bd6f0dcfad9f2bcde7ca4d8a"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "1f2df9b8db573ee2af194fc96cef8484"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "c8e1607da6516277046c56042c8b1c13"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "ae172be1bf5ff383fd0520de72c0ac4f"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "a0b19991a87c04abb20bbc05bdac595f"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "16411949a9dca472cc81212daa39880d"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "dfb749ab967e7825ca7dac8b60e97e02"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "a9ff6c40173cff7161b6d9f2ee078c30"
  },
  {
    "url": "interview/html/index.html",
    "revision": "ffda0887a748d4497ea15234ebea4f75"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "7016a96832ca6c60ce71b5d959baeb4b"
  },
  {
    "url": "interview/http/index.html",
    "revision": "ea9fd08143adcfa4ce1f047dda7a4650"
  },
  {
    "url": "interview/index.html",
    "revision": "d44b7e2d396a7b0f5f310e8d0578f7d3"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "28ee1cc98ca01400d72eb0a8b1a0ab46"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "217ec44775a75e3e92388e60d9a9f112"
  },
  {
    "url": "interview/js/index.html",
    "revision": "af9b42b11397582539ac6772e3b00582"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "702fac012ef3bdc54896331561ec8db7"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "36f4e4b1798f9af09e801c023eb077b3"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "baeb0951728ec1fe36233175829ed532"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "3e47888f45898b83fd28ef3f2ce37c4d"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "89e1bc6cb962e8931695d6484eb1ff01"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "e1bb6188798cd7aa05246bd8b2ca3f42"
  },
  {
    "url": "interview/node/index.html",
    "revision": "611ca7195a9668907aedfc549d7c0eab"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "58c84af16af929f00730230cc7319e52"
  },
  {
    "url": "interview/react/index.html",
    "revision": "40b29a57cce779c39f6c39d9c10b51ad"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "f69b4d8e443dee37fd9fbb7d3974f331"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "80f1956ad37d4244711ee248dd7e3717"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "f5b9218791f24f76f65fa7d9062c0cd8"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "26e831e5f3aea83d5be05b750422d8ae"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "bd543ffb5dd8a0b714933a2ab76dbfe5"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "245c54d850c7ccbb11d08a1ba36247cf"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "3f36a647218b0b128294702d66108beb"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "e8ce86a0887722d73ed3cdfe7031206f"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "e373f46f279e8cbad9f49531553e8b12"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "2d521e16189d8344c3ddf2b377db2ca5"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "35b28416e1a47e4513320fb8d6e982ab"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "9de836f3425111d133e51d6dcddc0c9c"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "b43bccc458d94595e2cfbf534fb94aeb"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "337c4dd1ac871368312dc398c499a8b3"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "9aeb6eacdd2fa413ab7c2c6dfba50e61"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "00560278a936e7f6b8ab387f9419c6cd"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "df0a49a552f46fdb57c4b068495a53e0"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "ec2485e785e604c26f0ea79171aa8110"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "f9e18113a665d4192dd79cbf0eeccb01"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "e84aedf885f624f108f1bc3f3df06429"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "01f0d1df3dc530c7bc096eb6dfcdbc71"
  },
  {
    "url": "math/index.html",
    "revision": "4d06c9b285eb25685c1475301ebdfdc4"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "222a8c42d8b8388af5148b009999dfbc"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "b6f42cce0aca4155b6e247eea19dbeea"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "4a4e4ccd7c1c21fcc0b608b06aa79d5e"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "dc3c67228cb7b792cf33b6b5dd2f8608"
  },
  {
    "url": "math/low/index.html",
    "revision": "d2869a697bedcc9a9eb8274d953b8db9"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "936071cbfd0f6f9d1ab66ca202d89696"
  },
  {
    "url": "math/mid/index.html",
    "revision": "ea2a4eefe12d7169dbd41a4103bef6dc"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "13a165590b032063e488b8f6710ef89a"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "386263195a5752c1399583ec60571b97"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "8fb95aa4d66f1c9fd334ec1adb42d1d8"
  },
  {
    "url": "wechat/index.html",
    "revision": "767e2d60889d3f203eae49f09db0f6e3"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "1ef9424519aabefbdde86c103377e8ee"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "e7faf1fe0e38108b4e03292388a7c3e4"
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
