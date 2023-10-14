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
    "revision": "b9f28f1356b37e53d8fffb23212d3185"
  },
  {
    "url": "about/about.html",
    "revision": "f5ee5c7dfd12f98d8ba100f16b545b1a"
  },
  {
    "url": "about/index.html",
    "revision": "b74a4a1f15ee0ba817e11de5c3f20f44"
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
    "url": "assets/js/22.396dc7d2.js",
    "revision": "f0356ff170cc0b1d881fe211a9960e43"
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
    "url": "assets/js/25.ba8efd39.js",
    "revision": "04d5ec8656baa21523c06d5cc74b3469"
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
    "url": "assets/js/38.bd6209ac.js",
    "revision": "86ff787b6ae75e47165e6e951347fc7d"
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
    "url": "assets/js/40.2a435e1d.js",
    "revision": "78b696ef508aae7447cbe9331bd430fa"
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
    "url": "assets/js/49.6a9dfcd5.js",
    "revision": "68e9c3683d243718256e92c65c971359"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.33edf329.js",
    "revision": "cc2fa754a51d7eb72d14a48d9fadab5d"
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
    "url": "assets/js/53.421aa832.js",
    "revision": "edc74860b79e46d940660bee686e0a2f"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.de1968e4.js",
    "revision": "5cf140aac0cb8b681ab4f99a49261954"
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
    "url": "assets/js/app.4463d887.js",
    "revision": "785175d672ca9b1938966bcc468fd997"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "6ae7e1ef72231fa05b1dc63ca3d0336f"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "2250f622bcd3e996bf48c82bd31b3e79"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "e60e8abc5168ded5de7cef744604e1ec"
  },
  {
    "url": "fontend/index.html",
    "revision": "4129fdb948a04dd8523d94fe78736d1c"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "ccc61c55d798f9d0a8e44eabddbe316d"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "600f81b4c632a43ada98c2b8b8b03411"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "cfe5c2daa26156046505f37b47f52d77"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "da5b96a71c0217ceefc1c3ed7fe9d2c5"
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
    "revision": "4d507a1fcc0f8059af29b81b4dc1cdfb"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "386897aceb4331f99e069f28be98a36d"
  },
  {
    "url": "interview/css/index.html",
    "revision": "ac7d136b644770bac0559a6fe1aa301a"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "6bd727f773932aa700691d57031eb226"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "786c5decddb65f33656e5cee39bfe816"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "93057644d4d2a9380e81e55d1ecf8421"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "a390ab81ffd948ff26ccf2c3dd42f590"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "32e73bbc2396540c3eb34a5335184bad"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "df5b197f63186beae3817731b82ae241"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "7f674982c86875ad103d5be6a072d00e"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "c891a7b471f6c4ff53be8f93050c18b2"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "74f75acaa19dbbf97faa34914b1fbde9"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "fe2aae429e756efe9d6addf2ce7814c7"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "7bd5ad3ef39f7a0de4bffac8ae1fe845"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "070eb2802e094a3c26fb6432eac451b2"
  },
  {
    "url": "interview/html/index.html",
    "revision": "5bd467354e0399e0bf721e8f8a063cd1"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "89d3560a2de9f11ad16ea8acc621c274"
  },
  {
    "url": "interview/http/index.html",
    "revision": "d5837360e63e6155d5d07a6d843121bb"
  },
  {
    "url": "interview/index.html",
    "revision": "d97fa7363251a399325c470893753ec0"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "b87c6beb49dc406904cbc476e137788c"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "c99cfb8f83b3ef353130257cfca18451"
  },
  {
    "url": "interview/js/index.html",
    "revision": "258ef86e247ec3891ecd26d8d37a3089"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "2706fce06f80a480628499e0502e4c66"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "f1a4b2fe771f9d03e4ffc05331c04d5a"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "946e85ff4655ddb0c0446ced90b25211"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "70d1a6d285c0bd649eea1e93d10692d4"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "8b6ac36117f16178f9840debdfc89baf"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "8bed87983cab73c4c8b27f7e5e9372c1"
  },
  {
    "url": "interview/node/index.html",
    "revision": "c4bb69472460381fa2eeb15960c793d5"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "edb8f26165785188e7dc12a2f17cf552"
  },
  {
    "url": "interview/react/index.html",
    "revision": "abf7c84b39ac67a884e573f5561f5bc8"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "253b4a24d40974df70c977c0159ace2e"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "0649c77be103477b5feacaf7563f698e"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "d56e4203c34981578a7fe049b9c613fa"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "fa2a07e6cb8272eb0e75a6b18ffc3e90"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "413707aa9fe78232843a0b218622eb64"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "4b859ba0012c2ed927b42ee147b88b3c"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "86b5fdd857d7adc483eaf3c232a4f020"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "3f3211675cb12d2815a51cab4b93803f"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "72eb06c99ccc49cf958cd2afffbfef6a"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "a1b4aa34e9a853f903256fa3c9ae9cd8"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "7f0f19a7602faa7a07698e2c61787710"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "13d331e0a735b42eb2ba120b2a852117"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "92643223d8f2eb3d5d33bf48deaf32bf"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "7f23d12e4a9876d65b5b1d452b0d7029"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "246d06cdae5cf4f40a0173b5ac45e185"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "6b59d379d2b745045fd770c9b26e74e3"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "62fdc8645dafef2ec2ba9993453b1818"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "31ce19cd4e8ce45804f303a7d15c90c0"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "eea2330fa828b69ee34935b1548aea2e"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "d049039dd17fa68e993928d59ba6fd96"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "b983c2691ea18031a352b20405e8769a"
  },
  {
    "url": "math/index.html",
    "revision": "1f213a9d6d7a41d1f1f08319cf827ff1"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "6c0461d7a286bf6e46af9011eee091c9"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "6cff99b1cb71b5e19997de6c0184e1ec"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "0ac81da15e9a65681376435c60129561"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "efe32ff049121a2e6e92d6045c7d364b"
  },
  {
    "url": "math/low/index.html",
    "revision": "7c0eaf98b8f23553c695ad6bb63597c0"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "9f08d381f8b53aed16dc08345dd6c5d4"
  },
  {
    "url": "math/mid/index.html",
    "revision": "a03e2dd83b84ee335cb8197ad6c5b649"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "10b7bd80dde020cc62ff5aa41d41bf36"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "15d0dce041e9369bb5a04fdb93b59869"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "c70f6fe4448d99670888915581719796"
  },
  {
    "url": "wechat/index.html",
    "revision": "60118bdd2f84e6e3866f7a974c716f24"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "6917b878a61eda0571d16d98a1a440b2"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "caf61c3d7f81889921c632c740b7409d"
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
