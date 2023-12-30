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
    "revision": "38bb5fb2dc67fc7470f358b36e671393"
  },
  {
    "url": "about/about.html",
    "revision": "751602d1eb5e401654fe242a210a5a8d"
  },
  {
    "url": "about/index.html",
    "revision": "8f4884768364b49ccad45684b95c2468"
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
    "url": "assets/js/22.6afef43b.js",
    "revision": "d480a16b2fd9dd2a7d41396127fd9da0"
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
    "url": "assets/js/40.e126cc4f.js",
    "revision": "6c1a911dedb3c93048b57061dce527b6"
  },
  {
    "url": "assets/js/41.242181aa.js",
    "revision": "ef907268a91e06d38a8b46fd864caca1"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.6cfb5db7.js",
    "revision": "8b7fe73439553e63befc54b1b41707fc"
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
    "url": "assets/js/50.44505132.js",
    "revision": "08ff40a4cbe9b08a456e7a8c09e59e4b"
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
    "url": "assets/js/53.cdb79bba.js",
    "revision": "a091c497bc44665057227eeb5e05e176"
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
    "url": "assets/js/66.7f91d5ab.js",
    "revision": "e6253f40f43d9ab3471c1e166f195412"
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
    "url": "assets/js/69.23ec1eb6.js",
    "revision": "98873154e1f57e214b77e249305ee0b7"
  },
  {
    "url": "assets/js/7.142000ff.js",
    "revision": "b7ae3f7f99b9f7451764a6d3d6c79ad5"
  },
  {
    "url": "assets/js/70.7357e9f1.js",
    "revision": "712f14341b860fa38425b14f8bf38082"
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
    "url": "assets/js/73.6c2bb137.js",
    "revision": "fd80df4fd9e93c805e9a6d6b27bb0b2f"
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
    "url": "assets/js/app.18ac70d3.js",
    "revision": "9a9aa06f83808b230a0fa6c5484c5bef"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "240ab14dee35ff210f887e2b0462a2ab"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "f2452fd57f31fa5f1ee2d4f5d69b8e71"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "a8be3632b24d3d51522a6bb25937f702"
  },
  {
    "url": "fontend/index.html",
    "revision": "71cbae722fca469aeaba82a765142075"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "a0a9a0ca8c38ab777ac326d46d47360d"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "d70bf57673e37f6b81f61b1268825109"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "70764adcb882d12d94db735eb222e22b"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "bfafbc6d38feff9c2fc4baac99a6e49a"
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
    "revision": "308995ddacc4b5c3e68d8ebcc166f467"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "7209e4200a2d21d725641725f686dbd9"
  },
  {
    "url": "interview/css/index.html",
    "revision": "07bf2ace5ab81b20bf2bc9c5780f47cb"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "06cc7afbbb42515bfa7a1534c8741e41"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "976d05dd65b6af3f7271945b9cbb0fbd"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "023b935a42b96ff8f79942cfcc00d32d"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "143f445b23848df9d0b028718a86e627"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "72483915cf3dd47989f75d3e335881cb"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "fc08b7d0a8589307605652457d364add"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "60c90e2a8ad01d39bcfa5819b089fe50"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "b0caa45868d4e7d010dbc22041b944e6"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "3579d21cf9446a8de81585d4030bbbd1"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "6e68dd59af606cb6b6f57890334f6c91"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "e390cbb9f17e0a87fe8120b2dc09826f"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "d7f88337049c065c9d4553f9e27a1abe"
  },
  {
    "url": "interview/html/index.html",
    "revision": "bb0554730d931a778818b3fca077757b"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "d380bf7c3aab63dcd534f4862a17a4c4"
  },
  {
    "url": "interview/http/index.html",
    "revision": "adebda5a4dd3a15942e17b61634a2e7c"
  },
  {
    "url": "interview/index.html",
    "revision": "f2d23199459a682f36b2aa0ca02f5e84"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "fb4dca5a67e151c004531440b547e9bd"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "0138569a1a3b9d1391008ee7875c4bf5"
  },
  {
    "url": "interview/js/index.html",
    "revision": "088260afb4d329892ba6813e437171c8"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "2e388b29e30c6433bf3afdeab57f87b0"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "480c99e74c5279a429eb33ee2039ff30"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "71c75ae8debbe3e7b407bfa4db8b0bf6"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "a3fe58210de4895282021375fd8f6e06"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "76a83df440d0407c0caa67ce5ced3868"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "5deda0ac3e0194adf50f77dbd8a25257"
  },
  {
    "url": "interview/node/index.html",
    "revision": "3d3e9cfa3d764d1cccb04e08758cb449"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "eebae589d76001b8bbd2046f44bcf6b6"
  },
  {
    "url": "interview/react/index.html",
    "revision": "5784ba0106cc4949567f5d6e1a7b5b05"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "4e521046674603e4eb86d745b0001eb8"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "e39d709eac7be99b0383d7c10f16fa64"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "f3675f3f3b6c11655763f619f18bdafa"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "47214301b5026d9add4561000ff63f0b"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "8ef1c455b93fd643da9630465f35192a"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "3b3991e8a14c809e979e02893cf9911d"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "8481e3e77fdba5a50d6f23d58f894d7f"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "221541b1661791adedf5af69846521b2"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "8c781f9ffdf782cce3800cb6d3a5d91b"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "416c972eb63e86998aa2456788656746"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "ca93894213001c92484a766b1facb019"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "03a40840bbf68a36610c15853b31c3fb"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "d0662d878651370f205b60edbe218336"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "1db34c607f9c0d1a432206bc9a6244dd"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "af47eb8dfc04c503f02d485f5833afe9"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "c4ee010fb7a3ed696840d2ff92c7ef70"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "b794c11290b3a51158546a6b753490f7"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "e39fb6c8343a98ebc28c61e95da466e6"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "f02f1e64af0b6e9d261880f94f178ac2"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "a2409f36a6fddb488f76278ee5a49aa9"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "d5719609e79d4978932a8a21611228ab"
  },
  {
    "url": "math/index.html",
    "revision": "7bf7b571a68efd934c35e50e7b2d0f1c"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "b23aade4b1b6ef4d4458470bf78dfb60"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "aa0f50a40d459a553f418139666d6054"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "916512fd15e5af83b0c7acfee653a926"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "8ac576fab02c8e439bea548473dc5127"
  },
  {
    "url": "math/low/index.html",
    "revision": "bfb7921baa99dd22967572e5ffcdd417"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "cdb5e05bf049b2aaf91501feb4fd0931"
  },
  {
    "url": "math/mid/index.html",
    "revision": "fa88809db3fb2b3607c4edbd16fca32b"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "b057acc0b887a22c9be9a9e6a290e4a0"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "b1442f801aae708f3759f157f25a054c"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "f62b32af45c76fbeab4887da0fb0b59d"
  },
  {
    "url": "wechat/index.html",
    "revision": "270383dff2763d2f14edaf581b0d7264"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "ff46baf0fe2b0ded70cd7d0217d760dc"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "6370edb56a86c52719bb322fd054c3f7"
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
