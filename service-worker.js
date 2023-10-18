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
    "revision": "03c0e76a21bfe675d46cd0ecc2d7890a"
  },
  {
    "url": "about/about.html",
    "revision": "15f874dc1fbb299476bc60de22504221"
  },
  {
    "url": "about/index.html",
    "revision": "e04d46172de622f0091e8babcfd6caff"
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
    "url": "assets/js/22.41b716b7.js",
    "revision": "0fcd64367938fb9c9f5213f6d547370f"
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
    "url": "assets/js/25.5b4f6765.js",
    "revision": "446025752a27f318ef649981e7cc4d35"
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
    "url": "assets/js/3.724470b5.js",
    "revision": "d9a53f01e251924621b5bbb55a5fdbcd"
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
    "url": "assets/js/37.d99f6c6a.js",
    "revision": "02abf6103245a82f979db593b50e04a4"
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
    "url": "assets/js/40.c5cb53cc.js",
    "revision": "037fb78ae2b48d74bdf211071dccd535"
  },
  {
    "url": "assets/js/41.cc02cf82.js",
    "revision": "929ce13262702aba1b9ece3bfeb90af6"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.00dba95e.js",
    "revision": "0e1209c11838b1d4299da6e12e9e45fd"
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
    "url": "assets/js/72.200a9c9c.js",
    "revision": "fa7461235b1f42c3d0c07dac0353cf56"
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
    "url": "assets/js/app.6daeb1ec.js",
    "revision": "d671bc12c5dc9a797596d5b9aea8deeb"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "fd20d0b6c2d242fb8a3d9f324086aa3e"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "ce83aa24298498f5100bed3919fc73b5"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "710fd2271d71613e3ec924eb44ba3adc"
  },
  {
    "url": "fontend/index.html",
    "revision": "3519ca92cd8e65ab49c40db77a6ad0c5"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "cf0557cdaf47f1c5df1b48300a2c17e1"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "fc8656d7234bb48c5cd17328a9961472"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "3eac353aa2e6ba2200e2f6ccbc21b78e"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "c6a7f16692c4080e60a605f265a117c0"
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
    "revision": "9fcccf75f94347925cc64f37a3f97df0"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "e29454d7ab2c5335847690b1f6a80f5f"
  },
  {
    "url": "interview/css/index.html",
    "revision": "320ed2f42d130aba06cef9dc287744f1"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "ddd0fd9ab43602ade75b3e94bbeb32c3"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "12408c19849017991b80f0113bebab78"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "7d61172a8bd6d304e4c7ba0d2731e96a"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "bc58ae859266edd731ff89be7b5f4c9c"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "567d6d7353d7c586519652e77c83ab35"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "9800d199ef22efe7fb263b485f50131e"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "9c9bbb3d20ffa7be91717cdfde43c9c3"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "20855be5a2c72e44d2c2ff27968656dc"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "e1328e4aa98f93c5c6cb07c1a02101c5"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "8ed7292c3b83c8db5f2231147dece564"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "91436a6436547c31cc18622f2bb925a1"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "6c7267fc47ea614675a24785c8d4f8c1"
  },
  {
    "url": "interview/html/index.html",
    "revision": "34128eebe1dc5302e72fefb32fc1213b"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "9061dd4f65d602a250d7c46eea8a9635"
  },
  {
    "url": "interview/http/index.html",
    "revision": "efd55cddd03bb9136255a8904c8e6728"
  },
  {
    "url": "interview/index.html",
    "revision": "ce726ad35b5ecd6fb6883085237d4f36"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "8dd8e6f21ae6fb2fd51e844e9297af1c"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "755bff14a4bde120204b0735b8187dd0"
  },
  {
    "url": "interview/js/index.html",
    "revision": "979e132dfe2bdb3a46074fee4ea7e2fa"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "a507a07a8381f75b4be3f22c45d5b570"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "b38094edc1f90b7e7233cb907dcf081d"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "53e5bf347690f410d3f8062caa09e39d"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "12c1a315d8307c7ca5f8ae8bfb26a1bd"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "ebadcc3f12c1116e18dda2a5295ee229"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "2e4a81cf97c3970ebc9238f4ca3eb6fa"
  },
  {
    "url": "interview/node/index.html",
    "revision": "558781ed6852f182b1df23158d7f069d"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "d8fbc0e66e0e7b97943955cc40fb3b25"
  },
  {
    "url": "interview/react/index.html",
    "revision": "fe74f4f474f1789851001c50ce011e03"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "21a1c609086bd408afd80b2a9f56dc12"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "1945d5effaaf2d36cc84bb570af5dc43"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "b61790b728e6a28aaf3a36a69503bc85"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "056431011575ff60a5fcd87d392b6cb9"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "f083e1e659dd09279b5f53dabf2a99d2"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "f45419b481c63750d080e8dd4625f3c3"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "66cd9debac5f64513ed2badcc5763a40"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "f23139682dcf2488e0babe747dd2fcb4"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "e90bb66dc2ffde1c9efc4ab3e305463f"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "086b2d2b5b04aabbdae086acbc0d890c"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "12de662a88f40fc2ee511e654f0b58f9"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "3e17c4fa32e2b5e0cb88da697bb7a3f7"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "e88485d1e6be2d7d7f055fb27aa5b97c"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "336b4cd8390988f80af80b0d8abf53c0"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "fd1bc33b48c2b921b1df41fb7b3ff7d4"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "8f8ad3cd6be7df947fa30f3f735ebfd9"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "815e76985c5b2b3f6e0e5df0357bc604"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "ecfb41f8a498ee0785330180ed17b13c"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "5560c1ddfa7d971d11e11855c30200de"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "8243abd305583f80969e7c82c0e53838"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "6e6331330172723ff76072da10e9869a"
  },
  {
    "url": "math/index.html",
    "revision": "c471700b6632b84eb5d69d9098d5e000"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "190ac3968ea3e1c4c33c31cec22b42de"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "dd0ae34825fb11bd5c17ea2431028db8"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "9b720791b59eaba8af01f2ab2272720f"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "ac3d0f35cb79049684ba87b053499baa"
  },
  {
    "url": "math/low/index.html",
    "revision": "edc04fe7c65fa15f9864e2c9bac4b42b"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "a615bb128ce8a006488e74796a3bc209"
  },
  {
    "url": "math/mid/index.html",
    "revision": "a83f1ee543bfaef48a72985570820d4a"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "3c4b598ca20920cf3c2d7b25173823c8"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "3f25a140db625f773a816203ea0462a4"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "7cd02778ba788ff4167c29932165fb02"
  },
  {
    "url": "wechat/index.html",
    "revision": "56b2f16c564122f5deb7250050a6f1a0"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "fe0bc2989daaa8fcd1871847ca2c2f41"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "0d2ce099792fd11191834f8d132eb944"
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
