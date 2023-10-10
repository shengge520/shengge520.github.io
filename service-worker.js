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
    "revision": "fd5de55c403f7f393b6b167fe375f41c"
  },
  {
    "url": "about/about.html",
    "revision": "7d650cff21f97b17ee14438edbcd1775"
  },
  {
    "url": "about/index.html",
    "revision": "ca0d652f9c2d0ccba8ab3209fe6f90d3"
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
    "url": "assets/js/20.11dbbbae.js",
    "revision": "a1ea9a446112ce4cbc0a1ad0ecbe2393"
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
    "url": "assets/js/24.6ae94bf9.js",
    "revision": "2ceabb0ebb37c887d80b75c9c1991882"
  },
  {
    "url": "assets/js/25.eb7ab6e4.js",
    "revision": "a3d1981570157bbc51e628f441071b2f"
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
    "url": "assets/js/29.b263dea7.js",
    "revision": "2e5bda7ac617404f3fe4e485500899b7"
  },
  {
    "url": "assets/js/3.997dfda8.js",
    "revision": "e99e4a123d98a95ed398ea32cf6706b6"
  },
  {
    "url": "assets/js/30.014aa5a4.js",
    "revision": "a907cf02cf0b565ef0d0b2e28f56e140"
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
    "url": "assets/js/35.1163b266.js",
    "revision": "1248351feff32e0f60257c6f4d293c6f"
  },
  {
    "url": "assets/js/36.7a7ce9b6.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.9b1cd3ac.js",
    "revision": "76012fc356d79bf5cdd0c51458ce24ae"
  },
  {
    "url": "assets/js/38.dff9c89d.js",
    "revision": "167b9ce2d9c8775a4604bb2dc641b9d7"
  },
  {
    "url": "assets/js/39.ac32316d.js",
    "revision": "b3d2f4ebfa1e7d5d144f68acf1452573"
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
    "url": "assets/js/41.bd17405a.js",
    "revision": "172e9e7382c28e442333fdf4adf13c25"
  },
  {
    "url": "assets/js/42.6ba35672.js",
    "revision": "81c61313e9ce23c1fcb2cf26db554caa"
  },
  {
    "url": "assets/js/43.d50421ad.js",
    "revision": "ed6ddf2706c2fa224920ddfe82ec930c"
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
    "url": "assets/js/47.5a84fa5c.js",
    "revision": "737ed10728878694fe3e06fe2b88566b"
  },
  {
    "url": "assets/js/48.1ab7a676.js",
    "revision": "fe99ff3649e32d3ca604a25dc5c455f7"
  },
  {
    "url": "assets/js/49.93da5a52.js",
    "revision": "16c44a807b8b6c132ff98b8e91e3ed8a"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.6810f7a4.js",
    "revision": "997f2b5ab52bc998616ece8ea613f941"
  },
  {
    "url": "assets/js/51.9030e74f.js",
    "revision": "358057371b9539429952337c9962db52"
  },
  {
    "url": "assets/js/52.c42f84e8.js",
    "revision": "44fd036060391f7997f930be4f0f6332"
  },
  {
    "url": "assets/js/53.592820a7.js",
    "revision": "3254337dc502bc3627ff4ebfa8b86e20"
  },
  {
    "url": "assets/js/54.e3a61960.js",
    "revision": "7d8e8aa9b8610bb75803c7d7588d73e0"
  },
  {
    "url": "assets/js/55.8f7eb82c.js",
    "revision": "25d49a9376602b8f4f53b2b692ca6d45"
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
    "url": "assets/js/66.261a0db3.js",
    "revision": "bce0a7c5f4b4782703a54773b60460b1"
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
    "url": "assets/js/72.cf789790.js",
    "revision": "3edb8eed20ac5867d6bdcba5aaf1f143"
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
    "url": "assets/js/9.f49375b8.js",
    "revision": "25d6cef577a65e975f3a8869a2491820"
  },
  {
    "url": "assets/js/app.93487500.js",
    "revision": "77f6dc0ede632933c884522818f19a97"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "befded5e5a9673b5a213bcd400e67a28"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "216f00afa38f823928e15ce8f75ac503"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "791319e8f78b97d05cd1aa29bbec1fb0"
  },
  {
    "url": "fontend/index.html",
    "revision": "dcfad954c2bb4fc22f13e30d97e87cb9"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "73d060118d9e97a899fedb56af2b89b9"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "2fc5b43160cf00130bc9cdf0bde9f9d1"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "c683e5399944b39102d9882741bffd33"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "0e7cfb3b71709b307cbfd6fd1d5e08bb"
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
    "revision": "5b871d830bd667d9f7a11508f3d2f087"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "ea853212690f8615854db9f5017c0310"
  },
  {
    "url": "interview/css/index.html",
    "revision": "28fd44c6b04bc86c07102c98a20b19fd"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "7431698e5e4421275b3c2a52b1f5b397"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "b990d6c4b2d84d2ed0555f16ba314bf5"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "675bd832b9fdab6bada8d1ff9a9727ef"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "083a7ca7ca3e10e9654d2e06454b284d"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "6631359c53852b43f20b4c916024e7d0"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "8b169ce4d1bdecef3519e9102f267b63"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "88778b98717e7743488933f6f84a27ed"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "cdf3588db58632669e04ddef121b6de9"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "f99d66a9fdd0e0dede9cab417babe7e3"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "a63685a924cbfa561393633d050c7554"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "fafa0203551636537359616af96c746f"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "9adc5e7995fc803ee937420e0049e2c4"
  },
  {
    "url": "interview/html/index.html",
    "revision": "09ffde413f6d0a555e63d64f385f497f"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "cc1a5f2ff11bbdd92963f307fa68ff70"
  },
  {
    "url": "interview/http/index.html",
    "revision": "94d681d9bdef3a34bcdd897b5d220a82"
  },
  {
    "url": "interview/index.html",
    "revision": "1c6a17ed9bee5cefaf8021209aae104b"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "b6f3af5182c4d6c98e42a051e5900654"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "f7386ea6a51750734ff2e9995df7f06c"
  },
  {
    "url": "interview/js/index.html",
    "revision": "3275f65e5946186c9373e0eec9502a94"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "ea0af927e63172ab0ba603371b7c0fc4"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "4bd6f7bf9eb0069fc15d1094a6ebf58a"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "9af4c7ae66d0dc5552f774a440e58a7e"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "f0ab1f32f54e2c7d73a7a72cc147294b"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "cd651bcd13c72dcd3985b669e21bb8ef"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "469b2494a72648903f0728974b087b1f"
  },
  {
    "url": "interview/node/index.html",
    "revision": "47d51874a907c97b7f0f0c8a235340af"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "7392409904b5ab2d47da9a0c626c4231"
  },
  {
    "url": "interview/react/index.html",
    "revision": "4f1e142247ba237961160b9f926f644a"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "446f07da2191b74c78140c8dc2d419fa"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "789283595900fe2edd8921c507821b2d"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "bafbf1a2f63b5bda56e9e52827202f9b"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "9e7e1347ac686da89608caea5b2dd3c2"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "e2f3b7085fb041333f33610bb9b89437"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "b6e271e18d31c3a94722a3e63f9c3f36"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "3a561f52b788d3c1525a2303ced287fc"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "d33e8982a5b6a13021c5c8f1b393a0a0"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "440d3753f2b1656f8ccd97aa0055f815"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "4fdef228b1a6d237db41fc92e8cb7aaf"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "837628f92d637b9e9a5692bfbce7b7c7"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "088b02d90d2962740ae47f52ac417a69"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "23aac657062fc92b71e05cdabb3ff913"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "6eb22a31e36d266149bb45158b3b0afe"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "79774cb4e9cbd52659d4757a1aa00362"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "8fa24f9c9b6dc987b682778a2d538f22"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "58de29f95a706ba6649b77e12f684ff3"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "c7e57dc86d5b65c8b77b512d7a447bb2"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "14cb64df477dc5d41baedfc52311b0a1"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "b90a5b810258488a2ea31fcdb25f409a"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "5499490e76c68d14aa48695003960461"
  },
  {
    "url": "math/index.html",
    "revision": "e791f847187596fcd773318d0180b726"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "7d43db06ceddd93be7c9defd4a4a15a6"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "bc3bf6aefab8169d8667e6a1a88e96ad"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "6e95ce63890514650f9700710e7ae76e"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "c491ef60483dcbba38e438319aaf0079"
  },
  {
    "url": "math/low/index.html",
    "revision": "e8795d158d6f8c2353506f712bf8193a"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "2b44110a106923328ce79acb44b59f77"
  },
  {
    "url": "math/mid/index.html",
    "revision": "076e0fb3dc5b50f5f43ae41b783b167a"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "2b8328acbedcb71f9816de48c31be395"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "15dfd4b1aba912234d17dcaadc38f1ee"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "11f1c49bd1c7a185a80117646cc08728"
  },
  {
    "url": "wechat/index.html",
    "revision": "e191f4443c56131363c5a98c88f50679"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "d03589ec3ade7a9137b56d2bac15d1d1"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "f69dc6228f23b10c85f4af51560fb203"
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
