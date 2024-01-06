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
    "revision": "71ac3e2d4ae6e64e4db7ff98b4ed785e"
  },
  {
    "url": "about/about.html",
    "revision": "e5d9f804910189933e4cd11ea8313158"
  },
  {
    "url": "about/index.html",
    "revision": "d919c867820b6f1d0d0942f0f66a0d86"
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
    "url": "assets/js/23.4d4ea4b8.js",
    "revision": "fda164df6601a06ab04ec6d8f67918cb"
  },
  {
    "url": "assets/js/24.920d1019.js",
    "revision": "f216fe390925e9b13489ad9d0c134dc5"
  },
  {
    "url": "assets/js/25.20150c37.js",
    "revision": "86d2b8dc73eae3833a0840518f6e45ac"
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
    "url": "assets/js/28.2edd6100.js",
    "revision": "504791379febed9fd918232341687e19"
  },
  {
    "url": "assets/js/29.b263dea7.js",
    "revision": "2e5bda7ac617404f3fe4e485500899b7"
  },
  {
    "url": "assets/js/3.6e2a0165.js",
    "revision": "f267567f957adb8ebe7d9b2558c20800"
  },
  {
    "url": "assets/js/30.56af1bc5.js",
    "revision": "7af13046c45bcda634fb1495524bacd4"
  },
  {
    "url": "assets/js/31.5305d3e1.js",
    "revision": "81303b00198c18494a8143b9ed2b3646"
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
    "url": "assets/js/38.1381c1d9.js",
    "revision": "5c2c883a25f34871053570486d335f24"
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
    "url": "assets/js/40.cb002ff4.js",
    "revision": "8fee01f2a591418087758e0249f3a0fd"
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
    "url": "assets/js/43.47180755.js",
    "revision": "0e0228917a75caeadcfeb8b73ac23bd1"
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
    "url": "assets/js/49.13e6a2a6.js",
    "revision": "414c6e0288a2383a2bfebd2db7672eea"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.2f6c83b9.js",
    "revision": "b08fa63b8f8adee16ad60cb3beec7a4e"
  },
  {
    "url": "assets/js/51.d342db47.js",
    "revision": "b774a04728118eb6831b6aa8c61df88f"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.90f2ea47.js",
    "revision": "17fb40244921a80ca7ab1b8fd8fe7d8f"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.a49b93cf.js",
    "revision": "78100029dab7d66b6e4d8fb153e0f795"
  },
  {
    "url": "assets/js/56.6d412378.js",
    "revision": "90cac6ec1b464e51e50dd1fd7665f1b9"
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
    "url": "assets/js/76.c006b218.js",
    "revision": "a0854a3cfb328af03e3f88c7d504ee66"
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
    "url": "assets/js/app.e402638f.js",
    "revision": "d18e5d446273ebb0cae23df2bdacdc82"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "14aeb764b91c091354c9d056cebd751d"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "15abdd44a6ad189e5cc01bddd48ff001"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "3156508ce45740e2b306702332b11f84"
  },
  {
    "url": "fontend/index.html",
    "revision": "a010da9c907605d11e91be1500b58100"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "24558acc2ebec7b21ad6fed22ea53a83"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "ccf3b3489cbf2f2c66e658b8f415444b"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "fc9ea47ebb629e9ac423403966ebb4c1"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "8807244d32bf62bada3aa73bc5973199"
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
    "revision": "5ac87d2b375a576dc275e889db99e901"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "4a1478f586b3e014d8c99fa20757435a"
  },
  {
    "url": "interview/css/index.html",
    "revision": "6328cbe90ea82aad04a992a04264a6cc"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "99f46df77d6d8e2f61fd6602c5990783"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "8e41a3053829ec3c35fefe72edec92d5"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "d7ec7d1eb68d18734344a034ce720d40"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "ad6137d7b14745fac244b783a1b8269f"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "baadb5af84a4853b6c757ad1c9d1c879"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "34a69c7612255fff1b24473c8a2ed581"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "93071be963416c745d1c80925b3a8fdd"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "1673a716c315583179609067dab59bc8"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "779f6a4be3fd9476b1cfd27a428b3837"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "7e35b41fb83d78fdf12c753be54dfd93"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "9748a1b5e1f2fcb8f4af6c6fdcf6b99a"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "3e0c008a40e39f0f19cabb5a9106dee7"
  },
  {
    "url": "interview/html/index.html",
    "revision": "dab43dce0ec31fab4cf92bd164eaa7e1"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "3f1bf6f0db8f517f8ec6b4ac60e525d9"
  },
  {
    "url": "interview/http/index.html",
    "revision": "bf37797cb133c9a68934591e51a30392"
  },
  {
    "url": "interview/index.html",
    "revision": "dcd06c0eaa24d73f183b99f7eb335135"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "655997ae138f77f871218495284976af"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "f9cbe62c25c7336bc5fb6e20de24386f"
  },
  {
    "url": "interview/js/index.html",
    "revision": "26e9e89aa2cf5116853592f68a8699fb"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "bbfd5f987c8b3733e81fd7a36a6144e0"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "bd3c4d7ab382dc71c00925b54421aaee"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "c58b6753a5c05a38a5ae59d41aea62db"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "e3cf242dff7100f5e272226d9c343f0e"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "fbe61069bdab549cb7798924faecaa38"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "c34a234d4a2b5c1da60f6308c5b34e46"
  },
  {
    "url": "interview/node/index.html",
    "revision": "eb27aebdb98603267c3fd90650aa5aed"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "77f9ae73ac5ada84275ad1d91971e3ec"
  },
  {
    "url": "interview/react/index.html",
    "revision": "69ddae09893625f8272d6428a7e8cdf8"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "787ede4cad9615bbbfacd902bbdfc865"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "043585816d42f824d9927c48e06375fd"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "66db0f8af6ae6ebe0a84d36f702ddad9"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "77bb36729fcbfd9c54d2102ff1aebbb2"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "b31ac79aa4d5c984ce36a0d36fa1b43d"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "383d4dcc2f45c7b8633e6c0c216ee9d8"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "a707977c54d96551dda1cbe56dfbb760"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "3ca567af3521e85d6903637683558267"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "2c7a707a991f0f126a088273bbd5ebb0"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "5d7f31752234bf0c2ddcbfcfd5cb6002"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "b10630252ad77aad339f28f51654a55b"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "a689fd1a71c88cfa2ce2e69076ebcf94"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "61d8cc739a7f6464a933d13476c7e013"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "78b617149343cc07dbf1b6eb38d4284b"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "1cc2538d6deff000b924e2279c113470"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "c6f0efb0f583f7bf1e15e32eb7da319c"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "20787d7f24dd37ebf2ff640ab6b92c34"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "c9fc16406077dc41149846e77a92e783"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "ed63b6ddb2fb5943b04ff8c4d7d4958e"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "645a91224a489c837ebe3ded2ca2c56d"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "7c21308b58a4072be93fc2b5a473c730"
  },
  {
    "url": "math/index.html",
    "revision": "94fdb89dee735e241a8021128ed76792"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "f5d5b60b8a24694d78adf705c5ca0c08"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "4a9a4dc6cdb8fe3b09333ade2ab92dbd"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "a3f66a655fa797625d37539cff8b8e24"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "2ac0f7db0cbcf49beb25dcda7b5b7f60"
  },
  {
    "url": "math/low/index.html",
    "revision": "9e02452df3d762d43e20d1e67a7b88c0"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "f7793246c7bbfc0539e9b9aa3ecd9e40"
  },
  {
    "url": "math/mid/index.html",
    "revision": "412f0558350db5852b4274d94ac441a0"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "76beac538663e7dab041b49d68dd57a1"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "4ae96d123da1b554e3f94d269f857d12"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "d210b73b15d1f8e591a5cc8da5d5e181"
  },
  {
    "url": "wechat/index.html",
    "revision": "098cdec209019cd368911fc913b4d29b"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "69a30c009d78ce2abde7f5d2d94011c2"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "5d562f239b8bb8c7ee0bef38b0872eb1"
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
