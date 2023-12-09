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
    "revision": "18aa52938f3280111ac38f1cf3fd4df3"
  },
  {
    "url": "about/about.html",
    "revision": "523d1d4abb065ceb71172f09f829e6bb"
  },
  {
    "url": "about/index.html",
    "revision": "7c7c2f662455f934911f13e72cebef22"
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
    "url": "assets/js/20.328df932.js",
    "revision": "bbb6b76d1604159ca0b3aa850b797e86"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.577cb01b.js",
    "revision": "b2e6635985c8f39d684a0341136e8af7"
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
    "url": "assets/js/3.3b36b699.js",
    "revision": "7ed279198d6fadff2daff5a1b0c1f8d0"
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
    "url": "assets/js/37.fac2b4be.js",
    "revision": "b9d40b6c09d3ca352b70711dd8c858b8"
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
    "url": "assets/js/40.0bd247ae.js",
    "revision": "f0b634e079f6d45da0d2b6ed1fdfd168"
  },
  {
    "url": "assets/js/41.d7e28ff2.js",
    "revision": "218121408f8e4cd9f475d81adb4bcf3a"
  },
  {
    "url": "assets/js/42.6ba35672.js",
    "revision": "81c61313e9ce23c1fcb2cf26db554caa"
  },
  {
    "url": "assets/js/43.f6d8eaa8.js",
    "revision": "13c3930870ab146a060a9740fe2c88f6"
  },
  {
    "url": "assets/js/44.78561bac.js",
    "revision": "cf6499a8773551121bd8b3fad8ad4127"
  },
  {
    "url": "assets/js/45.e41840d5.js",
    "revision": "ccb10d327012bb00f30397e2b9e79add"
  },
  {
    "url": "assets/js/46.6a9cc358.js",
    "revision": "4ca4d381ab5ff9830bb77942d7649bf3"
  },
  {
    "url": "assets/js/47.2532d633.js",
    "revision": "be1da914b7425e537175e34387653bdb"
  },
  {
    "url": "assets/js/48.1ab7a676.js",
    "revision": "fe99ff3649e32d3ca604a25dc5c455f7"
  },
  {
    "url": "assets/js/49.a5fe8b55.js",
    "revision": "60dcb6b961dddfd1c01adbbd6ed8d371"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.5517e1f8.js",
    "revision": "50f259a47f03d997bbe33e4434fb6327"
  },
  {
    "url": "assets/js/51.6206e971.js",
    "revision": "fe4b9cf9e419b96b647e36a4a8af5d1a"
  },
  {
    "url": "assets/js/52.c42f84e8.js",
    "revision": "44fd036060391f7997f930be4f0f6332"
  },
  {
    "url": "assets/js/53.3824be51.js",
    "revision": "3f4655d2482c3bb6d14d30a43ae7ca31"
  },
  {
    "url": "assets/js/54.e3a61960.js",
    "revision": "7d8e8aa9b8610bb75803c7d7588d73e0"
  },
  {
    "url": "assets/js/55.41e94f29.js",
    "revision": "bc9e6b10374622d222f9a3f66eaea5d0"
  },
  {
    "url": "assets/js/56.7b2d5176.js",
    "revision": "bc2e940daa91745054468077192cf9e2"
  },
  {
    "url": "assets/js/57.29893ea7.js",
    "revision": "ed666236cc6cf2cfb9c5a2e9348597a1"
  },
  {
    "url": "assets/js/58.6d5465c3.js",
    "revision": "4770ce8460ecfdb120bbfa3c1f11ad3e"
  },
  {
    "url": "assets/js/59.657048f4.js",
    "revision": "b19cfc11a179d7df31a2807d56829d97"
  },
  {
    "url": "assets/js/6.9ffa83d3.js",
    "revision": "bc5d046420c3e4ddebd097d7904d612a"
  },
  {
    "url": "assets/js/60.8d4790bc.js",
    "revision": "c73e0a1f6c9e87aada6db552a594b917"
  },
  {
    "url": "assets/js/61.4f8c2498.js",
    "revision": "a85c1631631e71de81d26626c7de3bae"
  },
  {
    "url": "assets/js/62.8d39ce0a.js",
    "revision": "5630e48af354d4a0424eee674a4858ac"
  },
  {
    "url": "assets/js/63.c5c92a28.js",
    "revision": "3f58130d4c80646688e615bf739f6e49"
  },
  {
    "url": "assets/js/64.bcc22084.js",
    "revision": "f620a37e55c2a7afc8a564ee447a1055"
  },
  {
    "url": "assets/js/65.622f02e0.js",
    "revision": "dbc5347b25cec4d441e7e0369564c6d3"
  },
  {
    "url": "assets/js/66.e08eac32.js",
    "revision": "763a1a3fdc1afebb1a6c65bc067dbab7"
  },
  {
    "url": "assets/js/67.64e62117.js",
    "revision": "2da3677f8d591841cb6de3810910919b"
  },
  {
    "url": "assets/js/68.c3a40f4e.js",
    "revision": "3f07f48a1c3a8dbf5249b4d2a8ce9e96"
  },
  {
    "url": "assets/js/69.468a7eea.js",
    "revision": "66af8346bee9c078e7b6802c4b268eb6"
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
    "url": "assets/js/71.6ca9f668.js",
    "revision": "72091b89800e3d29c4e9f776f4b87193"
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
    "url": "assets/js/74.c79afa3d.js",
    "revision": "1eb74b3303f8eb94d5bb858d6ae57013"
  },
  {
    "url": "assets/js/75.fc61e731.js",
    "revision": "c2bfa4dd898636b0365cb20a859dff7b"
  },
  {
    "url": "assets/js/76.db49177a.js",
    "revision": "3a7f9e1993783c7fc2e6219eeffee079"
  },
  {
    "url": "assets/js/77.9b030405.js",
    "revision": "8cfcf28767f988010c7ebf0006354936"
  },
  {
    "url": "assets/js/78.92e66db9.js",
    "revision": "0ae4a23ff0fc4e46ed1a69ae5966eb90"
  },
  {
    "url": "assets/js/79.5176564a.js",
    "revision": "11828926b98297fa851ba7270d10d6aa"
  },
  {
    "url": "assets/js/8.cd961958.js",
    "revision": "9d6f2283ddd1eff2c60ff81cc5a86a9a"
  },
  {
    "url": "assets/js/80.272e8633.js",
    "revision": "8c4e23fe42d8d93c652857e9da8d9b2f"
  },
  {
    "url": "assets/js/81.52352c3e.js",
    "revision": "fa4b866e0c249d39940ec71f332891c2"
  },
  {
    "url": "assets/js/82.4ef67cf1.js",
    "revision": "7164ae7e3b2014e89b3c6f1b7da0b4d1"
  },
  {
    "url": "assets/js/83.3fa683d1.js",
    "revision": "d99b928e8361ee07491e060e9886aed0"
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
    "url": "assets/js/app.b47e1a30.js",
    "revision": "3448662f09b8a96d66e2609863017aff"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "41521f68ed9583d344dd7b5adf32d238"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "975f29b242b422248a96b14773c2096f"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "33cc87a43ae31debb2a3da086202f2c2"
  },
  {
    "url": "fontend/index.html",
    "revision": "cb7cbd106a40d11fc0300b9b843673d0"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "ef08283dfe8d440a610afc7de4c1e618"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "b801f1984e3e2c3cf1f96436ac7837f1"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "7b0695336ac45846b4df489ad68d4bfe"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "d8ed4eff442a20c3b2da246196f165b2"
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
    "revision": "a5cde94f2dfc172e50c1f0420816341f"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "2e9e086697b0a29066b629b2a67db8c2"
  },
  {
    "url": "interview/css/index.html",
    "revision": "196b7f2ce961d58c38c03972437cc879"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "1d14919415e5205b4a70d668617cacad"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "9c1776d5e62c100289f95185e961ec88"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "61158fcd1f0c4b8829fef331b9454ddf"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "52845fcb54d39d4633b2f059f448eb16"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "397fd664a3c1264856cf59e774f8c8d0"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "8814a1f01a440d4542c1c9433148dab9"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "997068eb380efac4ea5e25b9fc016f1a"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "5be52924a55c3c34c0387b99eeccbdae"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "447fd08eec87c0ef878c9eda41e447c4"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "66e412f3601330569cb13ab9c0dde7f8"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "19f3ac43f75f2f2d3acb7ebd4b0c4069"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "ea54a557a8210508280e0834915458af"
  },
  {
    "url": "interview/html/index.html",
    "revision": "a36a9d57c36ee8c127036ff10eea04df"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "ec84e5e0b87bedc7aba2332ef6128708"
  },
  {
    "url": "interview/http/index.html",
    "revision": "d815c48177dc6aac76e883ba713e6172"
  },
  {
    "url": "interview/index.html",
    "revision": "f9ccd07aef379079fa4a251c506f06b1"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "e7c8489275df867e251f513737be6145"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "a82f1e5d7373077cf79eac58a4e8fd32"
  },
  {
    "url": "interview/js/index.html",
    "revision": "4566da4d822a402a059384eef5e01a46"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "be02ddcd740e2ffd988e54b6b4af00e3"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "94b092328c00df0ca4db50bb0a4e9689"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "15982c57f4ebd4bacb5e4d933af06da6"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "3882ae608ca62a9d109bdf9a2f42696f"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "68ab7c3b6ddc19ef1ce3371c7f350d31"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "8f748f125eef1b2e6a191a507036d7cc"
  },
  {
    "url": "interview/node/index.html",
    "revision": "171918acb7c15903f0fc826bc754b109"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "d755b633aaf766c3c2a4bc16cda40924"
  },
  {
    "url": "interview/react/index.html",
    "revision": "d1176bfdc88db6daa4785253af2950dd"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "1ead463d3861c54f01661c3779aa38a6"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "f75a5d1d2f1a0f8031625a377233a000"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "03f5e8923ecfd40a0e86f716ef8d6b35"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "414c3b894fab423d1888077022d010cb"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "40d2590c47527639e5cd03214aa786cd"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "202281e80f7e06056c95760e2e9eaa3e"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "308ffec4ac8a85ac98fe85ecfef2da01"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "2ea2d98d63612b2987c4da065092bf2d"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "478fbf698539b31a7e8fa0837aa0d319"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "cef49087a21c524e8a1b70d37e0b934f"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "58a458cd6510f751953ce1f965139acb"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "791d451bc7d9c4e6cb3ac1cbd5e0c479"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "a25f58688b8ff4d87603f0bd4eba0a9f"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "1b83e269883899aa2240cceab4a86185"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "795e898f43ef4411772f57cb0e3861a2"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "d58f3694db637f2c51319cf5c0e2114f"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "85c54de7929bfb722d23d294bb42dc05"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "9aee3b6a32427171321fea87a75cef27"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "d99b18a6bdfab519be38862e6eca3d96"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "4d9de66a2a5af4815326824f02784101"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "3b50b6938e82020f1e3dad1c46642577"
  },
  {
    "url": "math/index.html",
    "revision": "df1e26e4f0db2be95195bd5c725b73b3"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "74cb9df197eef09f12c1e132668a094d"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "5229a01d1d745a64673c661cca6a68f2"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "a38c18f4cdca7943ac704eb33b470179"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "3e771bfad9186641546c44eafc067fee"
  },
  {
    "url": "math/low/index.html",
    "revision": "04b3511a1de238010fb6f44c3374ef7e"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "1caf8e0a9eb565eb823a145d436f0147"
  },
  {
    "url": "math/mid/index.html",
    "revision": "068d862df333c270786467f167d12c49"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "7a52a20de94e5f461fb70f5f05b80401"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "edcb768a0820ecc6b349e881da0c07b2"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "2410c297b6287bc06155b6d95c106ace"
  },
  {
    "url": "wechat/index.html",
    "revision": "32519b7bfee62cfc65ccd1b7d21646fd"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "5267dc29d5e40c094fb44d7dd8e8acb9"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "2a0f306bef8e4e1af5c30d6542c23c17"
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
