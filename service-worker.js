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
    "revision": "aadd89edb92ea3ea0648075e08ff278c"
  },
  {
    "url": "about/about.html",
    "revision": "8c9bcc638d15fdf2f98e4e3e613c78ab"
  },
  {
    "url": "about/index.html",
    "revision": "c873a180bdde556daa9bb2a7f92caa0b"
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
    "url": "assets/js/20.7cd560c5.js",
    "revision": "e39114416fa25d39cefc229c3552824f"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.8b2dc226.js",
    "revision": "75fb0fe2faebafe51c0ca3b03668595a"
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
    "url": "assets/js/28.3ef06582.js",
    "revision": "38e9c25f3c95dd5a9a71c261b389fb6f"
  },
  {
    "url": "assets/js/29.759ef927.js",
    "revision": "3850adf747b02d9115aa1f6d00d69616"
  },
  {
    "url": "assets/js/3.704df541.js",
    "revision": "c96e238fa016f86ae9346e766251cd9e"
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
    "url": "assets/js/43.ca4d0254.js",
    "revision": "ed87eb0af6b9d898357c065271ff1a7a"
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
    "url": "assets/js/53.274d07a4.js",
    "revision": "8b770949503a22ee66f7f94b7e4b60c1"
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
    "url": "assets/js/72.60e01c6d.js",
    "revision": "ea92ab0654d9d93dfad8f42932cebcff"
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
    "url": "assets/js/9.e637ff2c.js",
    "revision": "a3f209e3189077eec02ae1e652d2508f"
  },
  {
    "url": "assets/js/app.dd7988c5.js",
    "revision": "967a9e6c4af8312814db8782241007b0"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "fef570cf9e1bd609341b9369cad61af0"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "715d8eeac7f58784edccc644157b7079"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "d7ce7cf47e5695f17110180d4c7ccd2a"
  },
  {
    "url": "fontend/index.html",
    "revision": "5a03bd759f0502a313979ae378c97755"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "7a897cbbf0232b0cc080ae707930e5fa"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "3a5426a98ba92250257b5d2e6fcab0aa"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "3b51e0ccfe1e45c33455952dacd6be83"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "669cd3a4ddbfab3a5faf485a9b094d34"
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
    "revision": "d245eb3dc0ce3604f13ed6a8d36acdbc"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "5c2e5e629f2354de69bc6ba79186959f"
  },
  {
    "url": "interview/css/index.html",
    "revision": "347683b9a4c858e2673fd876862ec06e"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "d1761f8bc1dad9fc8f0a76c5c552dae8"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "15dfdc8efa039959d779a5a38f3b4c38"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "3dba11bd81cea094a807bd0027dfe8c3"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "6f7537d0a4df32417087760ce1e19ce9"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "cd347f7acc1d83899622df442312ea56"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "5527a13ad82e327047570f103c29f71f"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "7fa5773e41efd46a651d73c5fbb9f009"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "2c138d7756200ccc06c26b2ce9112065"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "afeee3099fce3a06c0116400238e926f"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "292a325ba702ab966d82f4f346f16acf"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "d56f3f4e311da266114e8ac16e1a66a6"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "60df1ef21515af1c1df116bde2528f00"
  },
  {
    "url": "interview/html/index.html",
    "revision": "4b6e3709b9ba0db02985bac74e0bb7b0"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "8114420c7f09aac5e44ec8f0f83039a0"
  },
  {
    "url": "interview/http/index.html",
    "revision": "a6da3794ccab504b9026cced440d5ae2"
  },
  {
    "url": "interview/index.html",
    "revision": "59c6ea27e79eff911db0c65994e6e8db"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "5f432224007667d5090b792c34fb740b"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "6a8301cb831255159a20ce20bc85cea3"
  },
  {
    "url": "interview/js/index.html",
    "revision": "3b63a582e084b7546563f075c306361e"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "6723801822e714e5df1a23b07c98b609"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "35f07a15ad920645eec5eb097445ffd0"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "674a7611c950df35f8d393de0b563d5a"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "ba98a41a96825fcae0ef7d5108ee70f7"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "18ecbef2fcacf6216c3570e4ad1e2da8"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "5da2606ed461e708c961d591962d6175"
  },
  {
    "url": "interview/node/index.html",
    "revision": "4961bbe28902f8d3e5b0325cfed3cb0b"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "194aad66c682b6ced647ce4bd6b1e5be"
  },
  {
    "url": "interview/react/index.html",
    "revision": "d61eba9447d8ee57e5baf50f1868b23f"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "00e4957506417e605cfa433f4e5d2cb4"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "eecbe4ae7633fc644c97670ccd964da4"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "435b4975d13afb7d76f070f5814d259f"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "4ac7e9a058b1ce6423dfb6c14f91df52"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "3c9f5b3222f1417b770bb532da6eaaf4"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "c6131944c5d99f62c2352b71b8e0cdef"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "1dcc5c293ea81aa0f9894052d15c1594"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "5c4bd52691e957f428ccd2c98b404246"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "f167b386b2682df42fe48af95b52e141"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "a569ef6e8c151b1645c07ff39864caea"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "e911acbe466b8a70e79dfe4de7735c76"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "f90b2d48bfa2415f55036c0e17891c2a"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "c0c6b10af5938fb3bcba11f3222b8b83"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "35ce30bfcc48272683c5d2e768db1eaf"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "71d092363040671f66ead42d09d4d8fa"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "1291cdfd2d9c55491e1df66af3379d25"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "57509a0f028f1656870cc473bb45076f"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "ccb3441bfad6e29ebc755ccfbb4a67e1"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "09f13d619607898fd77cc6da6a349fab"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "09ece448251319361967a2fa1917ef8f"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "c16f624efea52cc11542ebce1b4e7d06"
  },
  {
    "url": "math/index.html",
    "revision": "20c17d7a275a14439202053bbe6109cb"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "8a8b2a11325a1f637db32ccaebe35be3"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "1e7375cc988a800cad174c32b4350565"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "25b9243f99b435f744649d1f0b9cbe3b"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "4f79a980a9fad57b6f0835585feb9610"
  },
  {
    "url": "math/low/index.html",
    "revision": "a7467d4d6a83b3e279379fbc7575460c"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "b5c4d3c2a22442c4616af577bc24b839"
  },
  {
    "url": "math/mid/index.html",
    "revision": "a5736e3269be8b278c268dd556e2c361"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "8f7cbf8051d46d69f10da7c31bf32331"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "17e8170d8835c14b55a8fadea5530cbd"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "2b5399941aaef4de640bb0ed9e4f7bd0"
  },
  {
    "url": "wechat/index.html",
    "revision": "95006e30cab2f4edefde4b52b9d323d0"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "bb16d044f4a84584f77d56f3d618008e"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "1457c3353e5ba995d2140abef6914f2b"
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
