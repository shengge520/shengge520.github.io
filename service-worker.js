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
    "revision": "c2a1b9ecbfd0eacc5acfdf2177a83465"
  },
  {
    "url": "about/about.html",
    "revision": "4d9760f67a4ef061503580ec6702317a"
  },
  {
    "url": "about/index.html",
    "revision": "c5cc8dc3a8b51f57737869f4ac92c4c0"
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
    "url": "assets/js/14.ae491d2c.js",
    "revision": "7e030c7d2ea40aa1966bf1c3a9367008"
  },
  {
    "url": "assets/js/15.b9c653f5.js",
    "revision": "0339a86f6047e37f7e21ef4ff31a1a97"
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
    "url": "assets/js/20.2a2e7fc2.js",
    "revision": "67baef0eebbfb0ebc31e76261668aa61"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.5481217c.js",
    "revision": "566efa0473c15c0aeaf410f53f7ae1e7"
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
    "url": "assets/js/25.1b4b1b57.js",
    "revision": "b89935ab5ab7c5c1eabbcaaad01b2398"
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
    "url": "assets/js/3.997dfda8.js",
    "revision": "e99e4a123d98a95ed398ea32cf6706b6"
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
    "url": "assets/js/37.975323ba.js",
    "revision": "7a8bb43d24b387a24c2152126eb4b98d"
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
    "url": "assets/js/40.eb776c36.js",
    "revision": "37abf34508efc9af038137bbb8b4c549"
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
    "url": "assets/js/43.47180755.js",
    "revision": "0e0228917a75caeadcfeb8b73ac23bd1"
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
    "url": "assets/js/49.bf1d6fd7.js",
    "revision": "e802b4d238f25049f26f32961e435bb9"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.2f6c83b9.js",
    "revision": "b08fa63b8f8adee16ad60cb3beec7a4e"
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
    "url": "assets/js/53.7c67aace.js",
    "revision": "ca9abb2187daeb9997d77f3dba000ac1"
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
    "url": "assets/js/66.261a0db3.js",
    "revision": "bce0a7c5f4b4782703a54773b60460b1"
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
    "url": "assets/js/81.740d82f5.js",
    "revision": "4e1ff6cc657e68177b6b0adabf2ece10"
  },
  {
    "url": "assets/js/82.4ef67cf1.js",
    "revision": "7164ae7e3b2014e89b3c6f1b7da0b4d1"
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
    "url": "assets/js/9.d2969a5f.js",
    "revision": "f555415af3aa8c3dfe62f69768ccac68"
  },
  {
    "url": "assets/js/app.92b3c853.js",
    "revision": "1221fea3e0698d6406c10e965ab65082"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "2591a0a8fddffd1a54faa5010d9ecb4d"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "3dc8d801487873f26f50440dcd1bfa71"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "59a2e6e38e932387c9a047e3e47954a1"
  },
  {
    "url": "fontend/index.html",
    "revision": "520c8825fd72840c4bf2c9b99ea508b3"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "d913b1491a18f94feee32085664dfa68"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "c5407a1e9d47927b7b5a743b0bc5f44c"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "97d2270aca88e4a0e524486294023b73"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "424b7e937963468d3fbd7a1ab7d9c210"
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
    "revision": "5c5e035fc7d023888a5da8276cd5b9d1"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "1767f497a7dbacb5d2d0c652bdb4a865"
  },
  {
    "url": "interview/css/index.html",
    "revision": "f4d515ad1810d85f912a761fc9813a94"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "738eece3177da466b925c8b17ea4b0a2"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "3a00be571b9c6b6017191782dd65bb93"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "5b2da79c0ccae0fe3ce8238cd9a05281"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "823a843ee21e161bb558b881932e6712"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "0c8eb677586dcba165e63bf16ae311b1"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "f41b78832a8f53dfc20dd095c605635d"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "78deac005023c2ca978a036e4146c87c"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "7ebfb8e240c165c55f8351740873b2c4"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "0d618245cfa3cb52f6f8b243d4695946"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "ea629278c6e6f3c2b13727a850acedf8"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "5f817c178cb33fb5724371ca4fafe177"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "362f00068546dbae75affe4df7f26b46"
  },
  {
    "url": "interview/html/index.html",
    "revision": "49fca0d155ebfa3a81ff7afb4bd0e2fd"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "9c459f5454a248b31c8d23f014288787"
  },
  {
    "url": "interview/http/index.html",
    "revision": "58fea49d13f24667dfabb9a8c454bb04"
  },
  {
    "url": "interview/index.html",
    "revision": "feb7f06f8932effdc3e29bfa499f298b"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "ea7f9eaccda78b222d65c533b13ab37e"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "2a86dc60cd3f85d8fa2edc5455de54af"
  },
  {
    "url": "interview/js/index.html",
    "revision": "9d5a727a419dd8574366e32446ebe777"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "48d0cbb767c651a4febefbc661fc04b6"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "88095ee7aebddcddac73532172fe94eb"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "73b08d33f5d0321e898c20ae94793d82"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "2c8acb56504ea11600522c7a8ab25b65"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "11c3f39c1846324244cb8416592b4496"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "836d9666435a5e1cc58df6ecbe2facb6"
  },
  {
    "url": "interview/node/index.html",
    "revision": "6bcd2fcc2ae96c65d066437b0c70af25"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "7ef29b6c6dcfa6bd4826557178ea208b"
  },
  {
    "url": "interview/react/index.html",
    "revision": "8afd047e4fda54702718848317100762"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "85963e6d039cacbc1f65086766fd4646"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "b9fb87adc5f358e4a678ce89efd74c2e"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "d4ca30cc3660e34116efed6662cc99ca"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "144045a0c32089d1115277d840bc4cb9"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "0d2a2ed16bb5090b737cce5061178aae"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "ab4cdf9144958fffe6529b71ce6fba93"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "635ea81894996c513232df1bc75ca667"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "374b74fe496e46602c3035249bd41a69"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "193032db794f074d32eb1c2d17e33d37"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "340695be42689968dc3c7525b6a44821"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "330c2288b2a0a8d89165b82ce203da16"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "d4fac7c91cd010c87f0662cf71794747"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "594fc1666992dd77ee1d2e670f42f8d3"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "90016efc8d9cf7f8b0185bc89e0336aa"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "675df8d63f6a0cff64de8daba7cad248"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "4650f7c1ac9af5b5e9efd0f18aca2a4e"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "f9c6a7f568ed5b522d1506496939bcc3"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "9a0b9533ad36e96907e20481179627c9"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "bd04c8c08d4f56d6ab7a0b6c090ef17c"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "70ea30e3ae4eda2adfa04a7d56e19b3e"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "b6b0c9191034ce08285e105a2aa07a11"
  },
  {
    "url": "math/index.html",
    "revision": "77bf6365998d5df19ca2add0df03f5da"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "1143473b46842ea7f725e2318f9576f6"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "9b744a1aff62d74ebdcb4e7c32aacba8"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "7d9e6faf32f1bb9ab456be4f1778c89f"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "402d1277eb13ed5911d2b99e2bf26cc7"
  },
  {
    "url": "math/low/index.html",
    "revision": "09efd177e483d1ee9144cb994309d720"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "3be16616244791f52ff1edfef7257b43"
  },
  {
    "url": "math/mid/index.html",
    "revision": "008f9455bbbd3aebf6092e5656c7e410"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "db203f97810122512e7e7463d6dc7dab"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "aa105e1522ecc17098811a57cd59c352"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "cc23a7896440d944075b0f8f60dafdbf"
  },
  {
    "url": "wechat/index.html",
    "revision": "38d8be19d6b3cf79a04d578468a70edc"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "5631c82be12ab40cba838fc20254e2a3"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "58dee885eae37ac45c350b8c3f47b2e4"
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
