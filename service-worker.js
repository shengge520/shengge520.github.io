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
    "revision": "c30dac7c5e1d770097dc545185aef631"
  },
  {
    "url": "about/about.html",
    "revision": "cf4f3c2c791c1033be30c999b5826005"
  },
  {
    "url": "about/index.html",
    "revision": "7ae9369e3576dcc79afbd22cfb75c149"
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
    "url": "assets/js/12.22dac360.js",
    "revision": "46f092d1b139f44d69cc2ee81d3109c2"
  },
  {
    "url": "assets/js/13.a108f2e6.js",
    "revision": "bbb946597f760b6cd5935afd587ffa6e"
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
    "url": "assets/js/18.e15fbe6a.js",
    "revision": "d5c8ae5c75f7f8b0d23ce91dd114184e"
  },
  {
    "url": "assets/js/19.980eabeb.js",
    "revision": "b9dcb59e9b25c55d43b250e3442bd74c"
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
    "url": "assets/js/3.866675ac.js",
    "revision": "5f08db4046a21f171b963cd23565dfd8"
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
    "url": "assets/js/37.d99f6c6a.js",
    "revision": "02abf6103245a82f979db593b50e04a4"
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
    "url": "assets/js/43.31d0c374.js",
    "revision": "cf8479375e5377d3c675f44e22749415"
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
    "url": "assets/js/49.a3c42e88.js",
    "revision": "048a968cc9663f0bacea261f96e1e356"
  },
  {
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.806a544e.js",
    "revision": "10bc93775fc63615f08529d97b299d4f"
  },
  {
    "url": "assets/js/51.6cda0830.js",
    "revision": "46c1704a4dbbe1a3a7a6b7f0d34dffb8"
  },
  {
    "url": "assets/js/52.0d05bf1b.js",
    "revision": "9e285c1ec4ec887dc892f7fadfde85d5"
  },
  {
    "url": "assets/js/53.3824be51.js",
    "revision": "3f4655d2482c3bb6d14d30a43ae7ca31"
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
    "url": "assets/js/56.9bef3140.js",
    "revision": "4fcf8c76f0bdd86cfbce83f4e4a3897a"
  },
  {
    "url": "assets/js/57.7f02dc6a.js",
    "revision": "ef62d065d8f19b596cfef66793e56a63"
  },
  {
    "url": "assets/js/58.6d5465c3.js",
    "revision": "4770ce8460ecfdb120bbfa3c1f11ad3e"
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
    "url": "assets/js/65.f73edef5.js",
    "revision": "3a6e990ecb88402923934984ca46ee4f"
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
    "url": "assets/js/72.60e01c6d.js",
    "revision": "ea92ab0654d9d93dfad8f42932cebcff"
  },
  {
    "url": "assets/js/73.c17124d7.js",
    "revision": "a1fa5761e8eeb66ced5b079dcf0755e0"
  },
  {
    "url": "assets/js/74.ee93d98f.js",
    "revision": "f16db7b691d02f22dd0b9fbadff388ea"
  },
  {
    "url": "assets/js/75.fc61e731.js",
    "revision": "c2bfa4dd898636b0365cb20a859dff7b"
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
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.d83b9240.js",
    "revision": "56b4acbaefe6c62294cb96a1475de09f"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "933d770d82f9620861b996c6d6f732c9"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "b3c9723210ac97867959348ccb30fdc5"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "1444a47d8a29f5c8761765110af1a598"
  },
  {
    "url": "fontend/index.html",
    "revision": "eadc38d555b84b01c4a889702d927f98"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "ebc3757113c6a5260623ffd736518f63"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "0c4dd83532b1bc7123d0833a5e1e3b00"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "3a8dd58d31561c3d8ae8d465400096e2"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "d0065a08e4c52568c6a13231080a3436"
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
    "revision": "4245aacf61a4fb21f204180d8bdf2907"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "beff4289d34a371bcfbac9abac969d03"
  },
  {
    "url": "interview/css/index.html",
    "revision": "08d22488ac9d298cb04cd47b09578235"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "00479bcb2fd28527b3fce38bab431f3d"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "4daeb87380801db74065c5bfbe0a7727"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "06993e7cb7af752a33a3400703f7aa89"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "543233c58619db8cd3499eb75bab91a3"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "a79575b81d6d246be8c1757e199c156a"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "2170b88fd1c21f1e4ab02bb55cf63334"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "311aff4d7f76e0133b3758843ed29c9b"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "30148daa430c55760fc989b8cbb94681"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "02dc08471235c82c8ccad56697ca9f8d"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "dd3e52e9c022140b9db46c67713fc4e7"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "fc4552ce1833e3a511bee3d2427e43c1"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "68fc35d6b38e424fa5c2212130b05c75"
  },
  {
    "url": "interview/html/index.html",
    "revision": "b3f173bfc08513d14f02ccedfbe3b30f"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "ddadbf417f54dbe7cea81500807bb454"
  },
  {
    "url": "interview/http/index.html",
    "revision": "c2c1a6c45b6f4e61fad8d7018ed13cef"
  },
  {
    "url": "interview/index.html",
    "revision": "289a3683731237755960171413c98895"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "b3f7a8740eed60c2e88d94862c26c403"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "f706db650ca4845efa9541ba085d088a"
  },
  {
    "url": "interview/js/index.html",
    "revision": "e3e22cb789f4630d157f54d0e7f5c26f"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "d8de0aa55d930b6398f05925783f08c6"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "6fe30cfeaaedcc2bbaed38372505b44b"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "1f80d25e902324a3886accf7dbc9089a"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "e4d5cd9db0769ca0872add54233a5d29"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "bb070045f7cc424239dad2759c5c739c"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "687bbdf644a300dca69979b6eb83f177"
  },
  {
    "url": "interview/node/index.html",
    "revision": "06476159d8e5f1a7b09a8bb3a0c39e51"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "4d7e6f8233a570d0f73c587bb8ba93b1"
  },
  {
    "url": "interview/react/index.html",
    "revision": "bec2e648f41641ce688446b70a646687"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "9f67c226a3badee5fc9e49a135a1ee7f"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "6e6909e5c2fbffcd166da4e06dac82ee"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "cc32adff5e108d7a7cddc12cf3655651"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "ffd833a6810b7584c43664365939b0ff"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "2b235b4d7c58090b62ff0b1ef26a69e2"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "fdef0cc21c01a1239f85a15fd348a262"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "16b2ae376db8da3b664c4e6a673357b6"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "f5d938130543d6f204a87257e8cadd61"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "326e3f4157fa817bde9d00fdb5a1703f"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "1b822d0cfa32e76f1d65592e069f2426"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "ab228913e34ec3d07ec44c1d3411de7c"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "cb8761eb7fe2c67c6d5fe6b8c8798846"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "657ae309f1a0cbcb9f4ca9f12d0beaad"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "729e3ba13d8b806bbab2440763e1f4c7"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "d85b4d7444216708f6b229f1998756e8"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "c34b6362c388d4afcff6f2e5ed2723eb"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "a32fa9a5e4e73226177b45658f2240df"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "89673d93e24d8dc1cf9114913bd54792"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "df0269b1dbfb260a5338175a72059c41"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "e0b00029fc9590dfa6461376df19954b"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "3ba3cf24c5de7fd00a6d0f632b18180a"
  },
  {
    "url": "math/index.html",
    "revision": "c6aeb7b33c0418165fa109468526d2ac"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "4a16d64d27e8aa8293f0620723575e9f"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "523d4877a101ed8c443f06dd4be2d134"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "73be45419c03eb9831488299f3d1939c"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "120dae06f36c1485aa17a5ffb5e43cce"
  },
  {
    "url": "math/low/index.html",
    "revision": "bf036dd3de7650244858386b64ba516b"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "61e455ecea133cf094d4e8239fa1cc76"
  },
  {
    "url": "math/mid/index.html",
    "revision": "e472aa36bfbd3b3552ab633a982cb8a2"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "f1652496c62858548637f922263b0cab"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "9ce28cea3a8f98fe5e9b88e604b98329"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "65ff33d1db4a92f348db020132132488"
  },
  {
    "url": "wechat/index.html",
    "revision": "afa94c8b4ff3ad623c052ce690e86a5c"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "5f2acbcfd48f892cfdb76cf81550f5be"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "49fa55699ff2449d0e2f6857f63c2fb2"
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
