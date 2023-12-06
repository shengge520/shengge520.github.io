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
    "revision": "2eb6261411002f51f206f8482c02cafa"
  },
  {
    "url": "about/about.html",
    "revision": "96636b0b14451838d568afefe5d11670"
  },
  {
    "url": "about/index.html",
    "revision": "3ef971e6c8d8a1fc3445e42244b0f3c4"
  },
  {
    "url": "assets/css/0.styles.0312a18d.css",
    "revision": "afb8c6669df1512528a31e6bc6196d39"
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
    "url": "assets/js/3.d734e85c.js",
    "revision": "8b8f5b586649c1d84545465630217a30"
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
    "url": "assets/js/37.6c4b1d57.js",
    "revision": "f7970c31b0fd91ea5da7f5dd2fbcc81a"
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
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
  },
  {
    "url": "assets/js/50.9a832101.js",
    "revision": "70452b856a970c023460c6a9f20cb0af"
  },
  {
    "url": "assets/js/51.96c7a466.js",
    "revision": "0fe28744b983e3022486f502822ee3a4"
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
    "url": "assets/js/54.9a11708b.js",
    "revision": "a05ab011172206ba3ed4e34933478c1f"
  },
  {
    "url": "assets/js/55.6dcc4c45.js",
    "revision": "078b06888a853dc9ba55fc83ab4b178e"
  },
  {
    "url": "assets/js/56.3b108c5c.js",
    "revision": "eba9845032c9ee25549996837cca7fd0"
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
    "url": "assets/js/7.490397ed.js",
    "revision": "9e06d3492512094717b1910f531e1689"
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
    "url": "assets/js/app.27a2a4ad.js",
    "revision": "a15de06e06a7881eee56e1716f386bc2"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "3b1b42b321dca2f43b6b34b3dfd066f2"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "5815d57555d4ecb0acf40f5e1be0561e"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "1be09a7031990031b4d50469495235c0"
  },
  {
    "url": "fontend/index.html",
    "revision": "7d2bd524a1925f32340c36434e2618f0"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "2becdf85c2fe9a9a9d49e7155659fbd2"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "56aed019ec80798078a64a5e75a08ed8"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "1dd4494f020457c0a0276e6b2ba6d583"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "a0bb8221725def0486be2ab8eb41ec53"
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
    "revision": "a1efb7604095c7518ae58d6c273cd74e"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "11047f732bae389168c76b290638b1ee"
  },
  {
    "url": "interview/css/index.html",
    "revision": "23f239b0649d520ed681366016ee52fa"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "d9c64c70daac6022deed61bc72560124"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "9bb3c93349c538298edff13dc8c1a67e"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "83ee9acc112e4f72c782100e53297536"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "e519980255879b39ccb7f74f05257a96"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "98192e7a18a051170930fbe0b38e36c8"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "6c60e62cb2ef2dcc75e41f2978deadd4"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "8d7c2954388da8f509fbe2659298df91"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "7eff9a1a7ac55df96bf06c5528272054"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "f670c8b6d0ba0ea2fd855d93b1cf9ce8"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "6f91f32b6d1fb40a504afd53c0da4154"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "6eb9e17de90ec4bfeb808044427422b9"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "7f37570391b695fa3247fa4a95cbc09e"
  },
  {
    "url": "interview/html/index.html",
    "revision": "1146c2d576538e606f90e250a58abe1c"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "b79fb463f9979b04110d7d7e6315e97d"
  },
  {
    "url": "interview/http/index.html",
    "revision": "f1a861662d614905804875591aecde28"
  },
  {
    "url": "interview/index.html",
    "revision": "8acf3abc42e0e6891297b5d72456bc8c"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "262aa81aa2fc856971d6947d770cf7c9"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "0fa30acb1521b34af351333973332b12"
  },
  {
    "url": "interview/js/index.html",
    "revision": "eb36074b828a5a8808d0e16fd3583d54"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "3c6284fcea75672d4c42d5ab1c3cf264"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "2f9f708d9a67b862df8eb155a1f79827"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "98c645b4336e57ecc76be3da1024be96"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "f7bff9ae531ba159141740dafd0b1012"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "d69e8f8eba4506aa2c5c77b101844308"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "d4f74ee3e1d49e09db803d66746407da"
  },
  {
    "url": "interview/node/index.html",
    "revision": "ffa6eae1dfc620b01627d81acfe6df34"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "84c4872cc36414c51a3233eaececf88a"
  },
  {
    "url": "interview/react/index.html",
    "revision": "5bc87b66eb277f617c94fc507b2d6968"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "43b3b5b31b8e6352f978a049d502dbe6"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "f27f869f7a88bcb13a5fb560e1599bbc"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "9251895cdf6fbd09bf381ece3298c636"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "2dd8f94bc281b68df28b38d8beb9ecbe"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "7a7ed90d50eef81eba753a3dac4c705c"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "a078539525742f2cd5d0efea87778507"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "8918565f6f3e519cfa346b2dff9917dd"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "f80ad5a1ff2f7cac5ca9b887d0d7fc47"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "cc8758831e8a6fbb58d891b04b5c4906"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "878400d9403243c39b6170e410c43bd2"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "11bcbd1e3b1cc67f0c07b61f505cf97a"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "65728163b9f6b6b71105208052d66413"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "81b3e06eb89f16c3993a8910937e1305"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "87916a57bd11024b6543cdc79e4e8757"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "46563dbfe1461a8de504dabf12e2cfef"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "163f61d5838dee8da2fe80a297a68044"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "eea4d418d7bafacc7a2fc5223b386485"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "885492b75b6394816f53bde424557af3"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "625ada969525e73f720a2ee0d6405f29"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "eb1adb7232e47ed016e6b158684f1aed"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "2b86e2d938e169e151fe6ba41c2d303b"
  },
  {
    "url": "math/index.html",
    "revision": "e03420e04b29b47e5db895320bb05e9a"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "bf9203ce1acf51e42010da287d866c2f"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "01cc76a76d5fa2ae59e2a3168d16b329"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "48278f2a277fbe3a65cb8d72ef711a0d"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "8471b7b65351f9a2de356090761d33a3"
  },
  {
    "url": "math/low/index.html",
    "revision": "1b2d0ad19ed602431d9c812a7e701747"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "934b8774e202d4953884e246423748b5"
  },
  {
    "url": "math/mid/index.html",
    "revision": "c6ad17bf88e536903536d7e07a80d02d"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "35f65994f9b361239f491f06755ea1f1"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "0659565fab0c102655334d69a39d10c8"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "5cbea4ba4f695e44550c100f08428989"
  },
  {
    "url": "wechat/index.html",
    "revision": "78eb137d9c1305ce5b4d1c531862a38c"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "6129d1748811f8462d78755227af6830"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "63c63ef02cad2e40a13cd5ce82de29a0"
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
