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
    "revision": "e859dba159662f0c80295f8b306a8a47"
  },
  {
    "url": "about/about.html",
    "revision": "f8dc5cf5fefde9584fcd48b35e57299a"
  },
  {
    "url": "about/index.html",
    "revision": "e8403cda56ef60a576a07d6c8a812c1a"
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
    "url": "assets/js/20.bbc2b71e.js",
    "revision": "f481a0afd18a327cff5904524baa2530"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.36d9bae8.js",
    "revision": "5cfa9c2bd23a4388a0fe98823b6957fb"
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
    "url": "assets/js/25.a9a06371.js",
    "revision": "c3ef459bac1f04c9c643f1d2b26847b4"
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
    "url": "assets/js/3.997dfda8.js",
    "revision": "e99e4a123d98a95ed398ea32cf6706b6"
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
    "url": "assets/js/35.3937129d.js",
    "revision": "128e90812ba264fdf23474f96acc70bd"
  },
  {
    "url": "assets/js/36.7a7ce9b6.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.f4f76a2d.js",
    "revision": "38350022b531f45f41930265278ad8c9"
  },
  {
    "url": "assets/js/38.e0146a39.js",
    "revision": "3723a90cccc6f64ea025caef63f25556"
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
    "url": "assets/js/41.ec2e5e03.js",
    "revision": "36642adbc70806cf1c36bccf07b35953"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.d50421ad.js",
    "revision": "ed6ddf2706c2fa224920ddfe82ec930c"
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
    "url": "assets/js/46.521eda20.js",
    "revision": "8866823d110c0aa4a0739e5b6de8e033"
  },
  {
    "url": "assets/js/47.2532d633.js",
    "revision": "be1da914b7425e537175e34387653bdb"
  },
  {
    "url": "assets/js/48.d69b543b.js",
    "revision": "75a2cb9d264422db4ca9e08a9cbf29e5"
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
    "url": "assets/js/50.e7a6b10f.js",
    "revision": "101c19c48eac51517240352fdc31ae4f"
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
    "url": "assets/js/53.4131f176.js",
    "revision": "29656e058ae54846decd293b018292a5"
  },
  {
    "url": "assets/js/54.e3a61960.js",
    "revision": "7d8e8aa9b8610bb75803c7d7588d73e0"
  },
  {
    "url": "assets/js/55.6dcc4c45.js",
    "revision": "078b06888a853dc9ba55fc83ab4b178e"
  },
  {
    "url": "assets/js/56.47aabd34.js",
    "revision": "86f8676b459b3b6beb5e1c3e8b22b2db"
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
    "url": "assets/js/64.1a53aa15.js",
    "revision": "ffe64baf92d4750511309746337e347c"
  },
  {
    "url": "assets/js/65.622f02e0.js",
    "revision": "dbc5347b25cec4d441e7e0369564c6d3"
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
    "url": "assets/js/72.fb5037a7.js",
    "revision": "778b6074589ee78f2cf984b30990ea3c"
  },
  {
    "url": "assets/js/73.6c2bb137.js",
    "revision": "fd80df4fd9e93c805e9a6d6b27bb0b2f"
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
    "url": "assets/js/9.6654e899.js",
    "revision": "4e76629f77778c75a22628b50bdb8987"
  },
  {
    "url": "assets/js/app.61ea75db.js",
    "revision": "2ae75977e5160a43b704bc68bb24e8ef"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "085c756e2c8600f57d75e0cebb7662ba"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "e426c51fe0dbb6894f0fa1a2f7435b1d"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "bd9225225b4ca4a1a85dcdb0cee30526"
  },
  {
    "url": "fontend/index.html",
    "revision": "126e9856e852955a732cc028d9f37b0b"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "364d4b715ee4e0c7829405a5de150581"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "8e774360279e1044631df704b2f9caf6"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "7ae6df3c68597335ef451990e02e5f1a"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "2647ba6dfc90301571d5f33aca7da59e"
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
    "revision": "06cce196673a2c37e289881bb37671ae"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "f33463f6b56f5b24bac256f4796c5a7a"
  },
  {
    "url": "interview/css/index.html",
    "revision": "09aa511ddc910f047a4579f4c882bc3d"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "9c5c66918f8298dbd37602936a3c7242"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "83f20f0f4703b155bc46e4121eb0a2eb"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "61159855769e92b0054684cb2a02eb8f"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "2359e4c8b8027fdd43f855513613fa0a"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "027367a5da491a2472072fe2c080fa0c"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "b31e4963bdd26fad14accdbb701c8e4d"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "0d579fbc5b315ebf515ad3f8e5c01af6"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "3d4f180436685afca2f7e895538f1114"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "da2f2382a1d6688b93e760c722a994e6"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "8d25712239921ebd57582d4d4a2744f3"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "4ec341a86730c991861cc0a4baa16940"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "ebb2c40548e27d5c9401709ddfaf17bf"
  },
  {
    "url": "interview/html/index.html",
    "revision": "c361cfb852f39b84f537de32108e4b06"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "df111fcc1c39773308a9780b3293f0df"
  },
  {
    "url": "interview/http/index.html",
    "revision": "579976c18959a15b66027149a8ab3342"
  },
  {
    "url": "interview/index.html",
    "revision": "acdca2eac218a05c9353b0d21b4d23fc"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "adc719b6afb7567bc0bf0583097e7e40"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "439b326301a6595f5b10844e09134b18"
  },
  {
    "url": "interview/js/index.html",
    "revision": "445e54e0013975ae6b61635f4e27161f"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "76d312f0a51f38a006cf83f38dd9f910"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "370ee6fe76430794fa411375f907f8c2"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "72afa6b125a5f0dad9f487258d84e23c"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "e432d19845caf0b9d37193170075077f"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "e54ff93d36c6833e4e49f42457ffd070"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "2056f9f8e4bdfe57404a4674afd4254a"
  },
  {
    "url": "interview/node/index.html",
    "revision": "2d8cf2c9c61bcaa20a87d781931feedd"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "d8c5e95d97d3cf60257f11b9007a6593"
  },
  {
    "url": "interview/react/index.html",
    "revision": "d01c86985b9f85aa5675fcb44b7c02e4"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "b73efb0fe180df7aecc13dcd2ccb211e"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "4706691e70973218e43521e6207ef96e"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "042199261ea870a5b732c082b1800f38"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "6eb7085ec1472c0bbb53253276c6887c"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "4d6258b1c3413a86e435b4a79beec290"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "25b0ce33d78856b772ce5cf169921652"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "3ed9cc6b1a452a159b78767a48da8556"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "746aebd9e995371d022b996521d3b1ba"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "21b81b3ba49ce717e77cc449cd9d1146"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "6a652c0631ad83141f2b59c14ec98f45"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "d3935fbbf5e0e48719ac359644a067e5"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "867c295403b8a316a5e8c676e662c80c"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "847edf9dc7e38b049ede1d731f14a8ef"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "798cde13810f6f8c444cc9cc727055c2"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "0a9e69f51469608d05b4a4e114d7a21a"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "61b37da59abea9b0bca37eaefae5f3f5"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "ef7b64e02d7c5908ba8a543acf59dcdf"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "f7bbb7db1e4577bfff10db1cb600ecff"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "5296677a62a38530b0694a1c3436a94c"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "3c299e463187477f47b775f6c98ab426"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "54f614bde4316210a7737d926a9d2a34"
  },
  {
    "url": "math/index.html",
    "revision": "df1a23d9bb96cdc3955d69a5139502fa"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "57c977f40bd18dd0c706e46136af728f"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "082dc484d037a56aace8f25779f3341a"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "296779b62b05a836230737a3eb7bf797"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "6a3d1eae7425418c88a581974ae0445a"
  },
  {
    "url": "math/low/index.html",
    "revision": "acb8f102c775946f023bfe3722856f4a"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "64d9cfe10b29b5cd6dac24e20c79200e"
  },
  {
    "url": "math/mid/index.html",
    "revision": "a5e32632831a352f66ab923bcceae2db"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "29a5dbcc267dbb4224e3b898a923ab3e"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "ae0e2fa4efab428855b458e376ac99ed"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "daec813da3a9a3477e5c029adfc2998a"
  },
  {
    "url": "wechat/index.html",
    "revision": "5fda8b70b0c375f6c7b174475eff5392"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "bf11c7e31047eec1518ec9ace32e8ef8"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "341dae4449a6ee1b434be7ae175fc80b"
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
