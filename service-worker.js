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
    "revision": "037c305fc98017880b116ce570caff83"
  },
  {
    "url": "about/about.html",
    "revision": "af67fee74987397ef616a93143fe01eb"
  },
  {
    "url": "about/index.html",
    "revision": "deac5fd70ec52ad3790e045c1a24d704"
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
    "url": "assets/js/38.2cdca637.js",
    "revision": "08c74d4d3bf22dc15659a909b4e7db8a"
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
    "url": "assets/js/43.d729690d.js",
    "revision": "ed9891db258f8cac21975475db75fbd9"
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
    "url": "assets/js/50.f7618694.js",
    "revision": "c6ecc9d8d5feb4d6acf29f252f2f2267"
  },
  {
    "url": "assets/js/51.2afc234a.js",
    "revision": "64674263a000086fcdade630e19562c2"
  },
  {
    "url": "assets/js/52.0d05bf1b.js",
    "revision": "9e285c1ec4ec887dc892f7fadfde85d5"
  },
  {
    "url": "assets/js/53.62ab2491.js",
    "revision": "0c107d17688cda60e3a7f08926afefce"
  },
  {
    "url": "assets/js/54.1f307b78.js",
    "revision": "bbfe24bb72a6bbe5f91ad54a60e15a91"
  },
  {
    "url": "assets/js/55.a866a02a.js",
    "revision": "6e775c4293414da32407782a7077f1d9"
  },
  {
    "url": "assets/js/56.108e647a.js",
    "revision": "dc3522acb04b8b9f932f2ce42a402d16"
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
    "url": "assets/js/6.9f215a01.js",
    "revision": "db568c754a8fff1819565a3b47adde80"
  },
  {
    "url": "assets/js/60.d41be4b7.js",
    "revision": "8f8bd579cf5d5fe7a492bfaec533cf7a"
  },
  {
    "url": "assets/js/61.4f8c2498.js",
    "revision": "a85c1631631e71de81d26626c7de3bae"
  },
  {
    "url": "assets/js/62.5394816e.js",
    "revision": "1dcb1c15b9b4365630fc7bc1e7796cc5"
  },
  {
    "url": "assets/js/63.e618b51e.js",
    "revision": "c02f6c5c243b4e66e07b8c6b7f64b4f9"
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
    "url": "assets/js/66.defaabe5.js",
    "revision": "6bcbbe564e75a9eecab8845b0013d203"
  },
  {
    "url": "assets/js/67.8f88f6de.js",
    "revision": "a8545032f1c31e4809e0b33821c107c5"
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
    "url": "assets/js/app.fdb1d2e3.js",
    "revision": "78ba9fdfcc5ab00452b1a710d2df2c3f"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "07716b534670e8528346b461ee181d55"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "724fce4a1b80e1d8a129487bbfe3a9b8"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "07bfec49a2e52571611e5d1716947efc"
  },
  {
    "url": "fontend/index.html",
    "revision": "01f1235871e9807483e358e6449503a8"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "b8f7bb57e43c6bb8ac0ccbd6ae16eb4e"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "1a867c6ebf533472e7da86cfdd082a85"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "c355eeb43181dff53d4251f4302eabbd"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "93cd58e4527c5f0901eafeeb361201b5"
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
    "revision": "0ff14705f294bc28a4ae2829d4a57359"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "03f78282e75f935d0393da071e891c1e"
  },
  {
    "url": "interview/css/index.html",
    "revision": "fb7776910893e650ee5127aa608a5550"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "340d878aa2c7ba8830b1cdc362b3d903"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "5dfe326014a759a13ef9c53d3703bf5d"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "3aeeaa4ff9daa17bc2e6ba0f7c097772"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "86b10031b6a4dc05d2b5f8d523a8e682"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "f7dc785ed9cbb3a77824f47e7b2ee00d"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "2b1329e37e76d24d069b28d20e0b1e02"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "648390fb348026eb2fbe5999cb53f558"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "1d81da6b3d880b692efef8c3cc48f8a9"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "33a0a3176ecafbfb61bb2f29aa8955be"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "273ad23ede3e12e55e0e4f0d363039d4"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "b03711521c151952b3e7104911cb01c7"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "8574ceee604b2f440cfa84b97fd4f61b"
  },
  {
    "url": "interview/html/index.html",
    "revision": "77fbd49a3af653bbd575628848c6aa78"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "15183d56edb8734a53749aeac1f144ec"
  },
  {
    "url": "interview/http/index.html",
    "revision": "ce427a87f692dc434173c7a6f43abcee"
  },
  {
    "url": "interview/index.html",
    "revision": "19695c0001c9ef512c8d2bf91f6a5d79"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "f5e041c134b4374512082c80010529c9"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "bff1ddb6f574bc660d227a37298cc3dc"
  },
  {
    "url": "interview/js/index.html",
    "revision": "c0119d47e4be5a24059c6dac6bbadbca"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "571e655a57a4344cb9b5111775408192"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "878c37a956488fa3c54793f6680a46cd"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "25a2f98b63e92d4493ef6c5b11712312"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "68bd296886d3469ffe99194a79886495"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "d32b25b8ab7ee0f8f8458b6be844e897"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "3e2603c81f3cc7ce86ee89460249f495"
  },
  {
    "url": "interview/node/index.html",
    "revision": "8721fd0d7ff3bd6cadd307ebaa9efeed"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "21fe770c2c82c248a3c795b36ed5b749"
  },
  {
    "url": "interview/react/index.html",
    "revision": "a1b27be7e016f3e7459bd31760000789"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "dd82b250be3487499efd99ec9db5b510"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "41403960f680cb180428d50ebac30f2d"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "67767a1cbe4ca4ba28498920f10f205b"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "54aac81ecaed0f090c0059cf3b52106f"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "383b47f5a27ff4d8cd2ffb29e2502db5"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "67dcb27905f6b62bdf17c80a14e11a12"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "b1e37de3e780db11e11f9585ccb292f4"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "44c1f52b60cfb7c72a648e1b7e4bfe10"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "1d6871cf88d8d90c828d195cfc56b189"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "17505aa983bd2de1c35e28f54beabd74"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "f0cec5adc34160598124e58cac6560b1"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "7e7c48886a320f12ac466c84817b1286"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "fec8b79d6c2c4e87b7d352785f86dba9"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "0bcdd49b0ae07183dfd12a3f1c4814c9"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "17ce99c40076ce14bc0617fd3fe151c2"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "eec1d78e76fa83629c61a01294142e9a"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "13793faf95ab0c47f9829be7e13b655a"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "c4bb905010a46344302fb1fcf83244bb"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "dff09cc5208ab5622e1ac75925e47c46"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "f11cf3104ea232099312a747d70984f0"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "f86268d2e5820d98492a0128b81b5e87"
  },
  {
    "url": "math/index.html",
    "revision": "7bac0c495ecd2d8a95652640077c5e6e"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "23d901566f6d35234cb9af557b04cb0c"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "11d9c3a75e4d1b78364bc37cd590fb4d"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "06a835f93e0812001d6e46778da4deab"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "d22d5bb5db10685fff17849471d2b440"
  },
  {
    "url": "math/low/index.html",
    "revision": "c06243d1df3e930f09a6e7e7343cb4bc"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "c7163b1ca88f323d8b5b4d6e1f1c6dc0"
  },
  {
    "url": "math/mid/index.html",
    "revision": "1f25d761b01431aeaffa60f87738165b"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "3b436ccd4a680523ee5bd15059277b15"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "6e7f5b7ad8aee90fd51e1aa3bff0f463"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "e1d37dd65fe2266fa8394415e6a153af"
  },
  {
    "url": "wechat/index.html",
    "revision": "0ef8dc3f322f9dedde5aa6a4a134cf70"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "911d0450bab299f15b155b3f69ffd205"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "e441fcadf34ba9ec4c5c8638d4f96a74"
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
