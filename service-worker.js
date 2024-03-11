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
    "revision": "c6ef149c35e9e194de4a0023473ad321"
  },
  {
    "url": "about/about.html",
    "revision": "e8e0dd76947b42cb8f0b4d99f5936f09"
  },
  {
    "url": "about/index.html",
    "revision": "3ecc15c26710331a209f9418e4a07f90"
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
    "url": "assets/js/3.f9c13c02.js",
    "revision": "58f4ebc95d86f123ac6489484fff4db6"
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
    "url": "assets/js/37.0296cd02.js",
    "revision": "cb3198fe905953cf24450080f0f66813"
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
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.44505132.js",
    "revision": "08ff40a4cbe9b08a456e7a8c09e59e4b"
  },
  {
    "url": "assets/js/51.03aea9bc.js",
    "revision": "952490cbbfe2995d55b5e7a18eb19e6c"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.4131f176.js",
    "revision": "29656e058ae54846decd293b018292a5"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.5890f64b.js",
    "revision": "a64a9774e80e31d09ae88bffeda731e3"
  },
  {
    "url": "assets/js/56.700953e8.js",
    "revision": "06e9fb67eab3f4d4636a3330dc1b8e8d"
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
    "url": "assets/js/66.70646fa8.js",
    "revision": "d2784820790e6a404c29f5242f5447f6"
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
    "url": "assets/js/72.cf789790.js",
    "revision": "3edb8eed20ac5867d6bdcba5aaf1f143"
  },
  {
    "url": "assets/js/73.f4fc5316.js",
    "revision": "b9b71f4b5a5203dcc301ec56373fc4f2"
  },
  {
    "url": "assets/js/74.c79afa3d.js",
    "revision": "1eb74b3303f8eb94d5bb858d6ae57013"
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
    "url": "assets/js/77.8ec3d3fc.js",
    "revision": "604770fb232e88a7d3f3dbf9190be96f"
  },
  {
    "url": "assets/js/78.95870191.js",
    "revision": "31ab9961e0908883d160927856b46f63"
  },
  {
    "url": "assets/js/79.2ba4251c.js",
    "revision": "48ea5d0e40823fbcca7fc1b43c019c8a"
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
    "url": "assets/js/app.70c20397.js",
    "revision": "5fff58226190e1b0878fa94a6df2191e"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "0ccf30c3bfb70c37bc0ac4e3cbe93fc9"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "f25e231ba0259b789f0c58ae29da22a6"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "e3fdd0b600001b4b2ddc885b1640e9f0"
  },
  {
    "url": "fontend/index.html",
    "revision": "8d104d0b47c5422aa6b4ce44f6bc84dc"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "202da858d341494b5a3c5a7a3c0571ea"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "cf9453e561737a2f951eda9b96e6ff2a"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "c2a3590405b37d3b316294014d3f8210"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "b61cafee0c32ece7789153fbdc9416d2"
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
    "revision": "f16e569e7da8df01d7e8e749ecbbafca"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "e3be8d7e3d6492ee29669a3c5d40a9ae"
  },
  {
    "url": "interview/css/index.html",
    "revision": "d901f4c4a4c7358880c31fc7027e0d0f"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "aeba32bcf42445d05d87ec63d9735f0c"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "f58823755db870d9f9d25b98118644ab"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "899298e4d310c5883bd7e2c7abcc9c66"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "f9c4bc407f8431c49adf191f4c67f106"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "a85d9bb9563e654999f710e4f4e18bfe"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "7e83c1b522d61cdf75ce0d9205d10ebc"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "a3742f0527fa1170cf5ae8cf4b7fae53"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "7846d776e9e7f4c62cb2c5caa4700115"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "763a32cc5bb1a65da0b1250bedc6a60e"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "1b074dcf150652629757067dcf3e225a"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "875e4fb3ae8c60a2df464b4867f99145"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "ac7c4c2996c40e5047a0c50c01a622b0"
  },
  {
    "url": "interview/html/index.html",
    "revision": "e6ed9a8731a59944b85ec4320091a3ef"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "6c9b365ace202ab68b804f0377100502"
  },
  {
    "url": "interview/http/index.html",
    "revision": "301f294f07d0a4afcc3eae45b0a886fb"
  },
  {
    "url": "interview/index.html",
    "revision": "0c0d23be161456aec60a4877a80f4ac8"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "a5f5c4cbd92770bc08ea19c23af79fac"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "a16f255cecabe01f425044e2f5510d2d"
  },
  {
    "url": "interview/js/index.html",
    "revision": "5bb45b02e579958ed2c360c31e69a637"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "7d503ace21fa083dadae44731074b8a4"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "2e8bd1b83b6a0959baf616d2127f6bbd"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "00f4cbdbae05511765cd830386f79312"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "7149f1b3301d1308019a9c96a5c53c79"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "6cb099db062a529d648a0703e2d4fbfa"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "f201e09704efc2def46a6ca6b9b0d9e0"
  },
  {
    "url": "interview/node/index.html",
    "revision": "688064e3b6bfc8485c72fbb95c579976"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "a1a928167bef1caa983021d3cd317448"
  },
  {
    "url": "interview/react/index.html",
    "revision": "45dfbf8fda9877b4404a6aa683c4e898"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "12b1324166cf408fa776f4d9013b655c"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "8a5b7ca6afeb965487f362cda5c575be"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "6e6286c446a6186ef2beecb5929eb5d8"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "90a58cbcb917a27067affce0f321493d"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "7d0a63386f461e0aa11aae113b1d9732"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "00389ae1ace377b9e5c0aa8f139c4983"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "27cace44e14b2accee35da8ebd74f966"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "8cd7e8d2cb700c4deba6172dcf31f3cf"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "a45cab0567205c8b21ab9c12713a75eb"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "6c03f943b31da81c4066850cee34af6a"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "8dfbbd3e0a81feb4dc9076a4a633def5"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "aa194781fff2258a62c18b1b0a6119be"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "b46f6ec191292d1f452d76fed4db743a"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "a90ba5baa0d63617598a20499f980213"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "68d06cf5353510e17ee6ccecd7a497ab"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "a9fb9aa14f4fded96d98cf716795258b"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "9d56500c7dd3832bb64186908ed621a6"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "b33c4150f962191e0ee14ae29891109f"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "dbe9d5c2ef6d92ab90dde59e5daff645"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "466c0476ea57c170db25b0d2f3d52071"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "ac7ed2ee2ed0016233d8687d4780b9b4"
  },
  {
    "url": "math/index.html",
    "revision": "bdad292eccbfbf8010ee71b7dacde1ff"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "d11c3b377e52ceb6326212350bf49314"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "34c242f22b554466396a02410f3cfdab"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "031a88b113a19bab466f4dd98c567116"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "1a0757f66dac8c0a98c422fa2b46d467"
  },
  {
    "url": "math/low/index.html",
    "revision": "527243adb805975e528b60587f345e8a"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "2db469cc1038884444eadf3f07fc1422"
  },
  {
    "url": "math/mid/index.html",
    "revision": "43a03d694c8d4e41d0226c7d745b96e4"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "c6a6b3edcca463cc8caa212d6739e36e"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "427165b0639d7042f105fb35b3534cb9"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "72e9544f0d7047a3729f1b27ae41e3c5"
  },
  {
    "url": "wechat/index.html",
    "revision": "7a6228ef4673d48487d2c5119867b1ae"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "e11ef2a603e5e205f66155bd84aec861"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "29c6d5e3866268f85056d92ae5797515"
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
