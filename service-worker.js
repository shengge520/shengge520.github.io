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
    "revision": "adc527ef1dc5960d3de12a3c143c71f3"
  },
  {
    "url": "about/about.html",
    "revision": "9d5067fe45550eac1b97e32116901ff3"
  },
  {
    "url": "about/index.html",
    "revision": "3b2b871c0779fc3ec6259465aa4ae6e2"
  },
  {
    "url": "assets/css/0.styles.482300ee.css",
    "revision": "bda627d1188b24f033cce5e220634731"
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
    "url": "assets/js/10.9881de60.js",
    "revision": "0561179b24b549cc2fae973ab96d6e29"
  },
  {
    "url": "assets/js/11.abfb500d.js",
    "revision": "97ed49051a7bfa0826bac2525efcafcb"
  },
  {
    "url": "assets/js/12.374f5b55.js",
    "revision": "f2744c98ec26b7a6abc41a16234fab1f"
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
    "url": "assets/js/20.2a2e7fc2.js",
    "revision": "67baef0eebbfb0ebc31e76261668aa61"
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
    "url": "assets/js/43.98a2b7f5.js",
    "revision": "07f09c73552e7674007abf0f05726ca4"
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
    "url": "assets/js/50.e7a6b10f.js",
    "revision": "101c19c48eac51517240352fdc31ae4f"
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
    "url": "assets/js/53.274d07a4.js",
    "revision": "8b770949503a22ee66f7f94b7e4b60c1"
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
    "url": "assets/js/6.9f215a01.js",
    "revision": "db568c754a8fff1819565a3b47adde80"
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
    "url": "assets/js/66.48657363.js",
    "revision": "34ac68ce87be6dfa4262484137cf91de"
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
    "url": "assets/js/7.18c4d082.js",
    "revision": "65769df73aa7da262e6c948e61fed0ec"
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
    "url": "assets/js/9.cd91c287.js",
    "revision": "c3d053107323dc36df7e5493839857f7"
  },
  {
    "url": "assets/js/app.fe68f9cc.js",
    "revision": "7de9d224fda4c352670e9e2f473bbe10"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "ff45f63b0e613a3ca75b322e87afb123"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "4b289b561a3584074e0e84f6e119b7ac"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "7220e7ac730cbae941dbaf7d76f93611"
  },
  {
    "url": "fontend/index.html",
    "revision": "3b042c7fa7c0aead66d62d54ea9ad977"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "44604c90c61ab6b8351abe3ccdda6c53"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "946a03f1606e0ba4accd5f579a158cd0"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "d279c41cac90876b50ad1fd5d6bd977f"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "7db33c97616040072d60087cd6511760"
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
    "revision": "0b5bdfd9daa657c7ffc81996277dd11b"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "b5b77844bf46dedeb8531dc88bbb3cbc"
  },
  {
    "url": "interview/css/index.html",
    "revision": "2f1a117bbbebe4a2b326b9d19b58b001"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "0d27fbb9d71e0e57213f4371321ec6bf"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "37943cc4d9efa65b5ca9f1357fc23ad1"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "52000045a4b343a8365ff8d306da7c19"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "4e849e6c6785e7f9a5f9d13ce134e184"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "afb7a4de84fa7fd91f09b41848e1fc57"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "8d57cdd327e446dc5e0e4fd27b310571"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "6820e4b3ccff62c5f576c6a2d2651e59"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "ea7574ba8db580755da23dddd5652058"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "04a87c2000b824979eedf5ad0c7abf0e"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "7a57472b85ab167acc9b39d537dc9c86"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "2936ec53210b631af2a676b24f366076"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "44460fbce59a5cdc9ca7e3152b6292db"
  },
  {
    "url": "interview/html/index.html",
    "revision": "8648a6f07c953975a0f34850e0088564"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "3b0b084498b3fd7461376aca485afc25"
  },
  {
    "url": "interview/http/index.html",
    "revision": "1ea8b3a50d103bb110a4276e1ebba2ab"
  },
  {
    "url": "interview/index.html",
    "revision": "56473dabc6a180bd844d851693ac446c"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "dc2d401ab5a6aad36cb122edf6f2f37b"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "983aaf574d468850503e38e82459bd7f"
  },
  {
    "url": "interview/js/index.html",
    "revision": "8e2cf44fc9ce4d304b04240d464d2dc9"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "8e0bf9fd42146bbe63e35e3947b7c485"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "41c82a12d8a22aa65a10ae390e3b2603"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "f79fe85146698dada380aaa9e265d4cd"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "cc2f1e59ef699cfc7ba709ad99d67f7e"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "e8e61f666d68b8943ea949f5be1fb5c2"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "0eb37f0feff989019977ad49ed9234fe"
  },
  {
    "url": "interview/node/index.html",
    "revision": "b3aa4d985da7cea603c961af3b29fb46"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "f22b1750e2ae351df1b99190a13df9d1"
  },
  {
    "url": "interview/react/index.html",
    "revision": "b43e95cb15b585f7ce05a98a45d9f1db"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "33d43664d9e951604bb7762d7c917035"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "272318207325876d2323729226901230"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "6138881a9106af8e12635126d7aef0aa"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "f77363aaeb403f6bc69b45b7ac61f016"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "1ed29431666d928e16eb3f67fc1a9564"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "e69a147f92e5402e175e4ca9e75fa557"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "8ac0e2201a427101ee24ed981284e52b"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "9c278bfe325a363d7c5dd7acb913dc7a"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "9a3e3cd52f1d70a52f3da478923afd3a"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "4c87b640de7b6e8db2425878fd5e7bcf"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "33ba0def8cbc410123c1407d0ff43e21"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "9f7de842a470700b3940912d01c6a633"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "acf2daae3dd0e9a3ee22ccfaf2766514"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "25b9ff7a07d802ecf0c257bd0fe15670"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "68b0fabef21f8e303dcbe0c510b85c21"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "124dc6a75d519896cdd789a45500035c"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "e5666a4f6164dd279d8923f828a42e61"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "8647b6f91ce062440b331bb47af9f45a"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "329b18bc1abdf031bb7cd3f2bea5cea9"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "9ccabab8b39f11de8f3bff101d56d05e"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "16ff5718451ef1523eb79d441afb96fd"
  },
  {
    "url": "math/index.html",
    "revision": "bf5461f2577d72fec1abec181bf1077f"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "ab4b3326e7bb5426992afc858bb05589"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "ba5ffa36cbd40bc07214c1b724265572"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "8497872f4d53118c9747c7dd3f60165c"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "b6bb2c436afec58e10428153b86f24e8"
  },
  {
    "url": "math/low/index.html",
    "revision": "eade2d8db44b262e6e4421a235d56b24"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "6bfa6c8136427b2e4185bcf0efdc8ff3"
  },
  {
    "url": "math/mid/index.html",
    "revision": "d92bdf48c6c9c0765d236bae399f6d9b"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "cbc846b61d7ed0d21ef16cdccb941c39"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "22801640410ed517ddf612606a2e2122"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "757f7b5eefa598dd4a0fe74f8db4ed9b"
  },
  {
    "url": "wechat/index.html",
    "revision": "4061bb45ab6c2227e6eafe4a88a4a911"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "8fb551df3a584156364ad8e83cd8b397"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "732e4b49789657a3ef059affcd19992a"
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
