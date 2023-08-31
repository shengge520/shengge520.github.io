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
    "revision": "6ce8fd15c396a7f77192d6b5f275c3ee"
  },
  {
    "url": "about/about.html",
    "revision": "9d79254470e9fbded4ba4dded04bb686"
  },
  {
    "url": "about/index.html",
    "revision": "36937939d6655bf5f5930d5297ff45bc"
  },
  {
    "url": "assets/css/0.styles.b2391334.css",
    "revision": "d6cb02168b0732e3e7839c2947cc9359"
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
    "url": "assets/js/43.557f1ee5.js",
    "revision": "ab3384c591391dde7efd5a988ee97589"
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
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.dc1ccfb0.js",
    "revision": "f54f1b0e0a2ba3f89932a562423afb2b"
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
    "url": "assets/js/55.f929d7bf.js",
    "revision": "3f12035e78dd0515729e8e88a900d906"
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
    "url": "assets/js/7.5f7fcddd.js",
    "revision": "fe5ab34006b88fb09226df2cb158835b"
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
    "url": "assets/js/app.99a3ab9c.js",
    "revision": "21304e13b3d02665cd24874337521e26"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "f7a9c6495cbcaa69ac89fd46746b5eab"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "982fb8154b5b16a8b47c11d878471b01"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "7657bf86c78121e6be2a3c0956796996"
  },
  {
    "url": "fontend/index.html",
    "revision": "e7fc254904f04be80b85e6331d7f4b63"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "b4dbb7ebecd260177d343f47145b722b"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "1aabb221cf7ad98989abbe4d58561002"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "ccc3c61af486613211215a0936000898"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "40d3fffb70af85d386dd02eb7338618d"
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
    "revision": "7947ed789074c5afc28253f0546127d3"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "1e3f80843e12108a007c85d342f86ef1"
  },
  {
    "url": "interview/css/index.html",
    "revision": "15af8a390cd00e8f0dd4864d8c6557b5"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "b0e12e3cc30db559909ef788d205b000"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "fd92065a83299e6ddaa592e7139ca7a9"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "f6e3cc9a93daa953a5beb3f36d73da92"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "a1e930b8c3a9deb9f2b5926b9025737c"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "06087031844ac54fac4136b8abe9d4f7"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "3356b3b6a6d356c8c9045f21a521ef02"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "3a67fae938b3ec5532f30433fd5c52d3"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "fb39a691ee512b0f11686513e27e0f21"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "c4048b157b92aee1202e035916efbe56"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "81ecebe814a709217da92b07afaf66dc"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "9e70b030bd2c561f616daf3c1a516b1b"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "7143a371d2466d06fd4b553b55c166f2"
  },
  {
    "url": "interview/html/index.html",
    "revision": "47a4f556808af41b2da2cf0bd39524f5"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "7fedd819a15d1c94411259d0ff310be6"
  },
  {
    "url": "interview/http/index.html",
    "revision": "7097c22b229cfdd23d62a7e0012a27fa"
  },
  {
    "url": "interview/index.html",
    "revision": "4e49aee649d0e81733514cb1f447dd48"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "631375bd96bf9505c008e86c395f2f6a"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "0e5e8e6c308ba1e81da226b2d26f1ee9"
  },
  {
    "url": "interview/js/index.html",
    "revision": "9ebed1d3419b1db878d9ecac7e973085"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "a4fe79ca05fa7fb7cc9690cfee740594"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "18b71062ce86186a84415e365fc6c442"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "cb9f38392e7d4ef6aab02a15c9b7ab64"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "02c238bfcd52236b8d69fe55dd9c4727"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "760a5c3a665112db8f4fafa782fdb821"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "7ffeece34ebfc7cdb84bdb60ff15cfb3"
  },
  {
    "url": "interview/node/index.html",
    "revision": "331d5760d64bc3b139a4e52d975edcf1"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "63b2448d4a135898e0f90a9c467bf34b"
  },
  {
    "url": "interview/react/index.html",
    "revision": "59bac4e867b4c6f699f761f265b570f5"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "ea2ac59b2a45d3df1c85842a7fd0a741"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "ba349a25353223014d04caee0f8f7629"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "0e5352c421c5650c5451305c3d74b9f1"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "c6c845ef9d155344bfe8f56da69d19e4"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "283ae09d8e3afd2ee0ceed4bddbb0a64"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "b6a372316dc0063beb645ad535b9a382"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "ea932bba8045fcd8ca134175d2609905"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "9bcfb6e8cc073bbf9ef52019623db8a6"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "5c17cde345e68ed234c2d535a85c65e7"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "cee08406b784c76a94ed795c220e6207"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "adb07d178cc51cd166229ec98563e061"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "55b8a81bf534ad1b67d821658a54fbad"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "0394dde298f5933b228d66eda42f5e55"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "f1ec19e1c13dfbce0a6b8529b42b9f2a"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "e2ce294254cf463196448b6cd28511a5"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "64f1b14e7dcdee3ed1439c9674230101"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "54d09b4b17ba43b5e3fab18ecf2174d3"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "0ad39fb6564197ba06c3f199d0f3dd14"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "25d518a225fe62b66d8c3ad77f3fb441"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "97f980bf0ff080d023569100ad5f23d2"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "a33e6f24a18f324fcd118b6a7440fd59"
  },
  {
    "url": "math/index.html",
    "revision": "63c84c8c25c2c5c87cc12ac8c6f8d884"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "05f92d03a8b718cdc0e46ddbc004850e"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "25dbdf1f6075c43c648ed873e6096edb"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "2cd8b2d93f077843db01a9cbd96e6a24"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "8cb1ee2f7f73a94b749ecd5bd026614e"
  },
  {
    "url": "math/low/index.html",
    "revision": "5c9c7f37c87cf1377a0e18fd2c5500b5"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "54d399841fe34d22b12a3c31c922fb92"
  },
  {
    "url": "math/mid/index.html",
    "revision": "e52f2585aee650ee4d897559407216c6"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "a6e5e845ed9398f84e5e581d1c74a770"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "a84cb80c6d364b315e01ea69b271a893"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "ca3aa6a1f79324cc3870c6d9e8a31cc6"
  },
  {
    "url": "wechat/index.html",
    "revision": "bbc00e79f314213780535cd1fce01a28"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "573147dac5a09b485f4a186d4dfb086a"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "15823e6306978c4f5980738a59159fe0"
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
