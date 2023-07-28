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
    "revision": "316c3d2eb2ec31696b2bf2d63db5e1e2"
  },
  {
    "url": "about/about.html",
    "revision": "02dc723a9f221c2b7031eaa14a4a5b5f"
  },
  {
    "url": "about/index.html",
    "revision": "4fa745ec51ccbc0faa4e22439b8f31e8"
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
    "url": "assets/js/22.680a3a14.js",
    "revision": "c18bb75f1f8c8b094b4e81a8f3168cbd"
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
    "url": "assets/js/25.8ca0c049.js",
    "revision": "5acd61acd96cf8a929082d98e80c6a0f"
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
    "url": "assets/js/3.215009e4.js",
    "revision": "cd4cf1f151fc3aa3b9cd03d7ad9587c9"
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
    "url": "assets/js/37.8f304ff3.js",
    "revision": "854e67ab89b50e3dec13d820c276646e"
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
    "url": "assets/js/47.836ae899.js",
    "revision": "01f38b12031180cbb1332bf952c905cd"
  },
  {
    "url": "assets/js/48.2d66ac69.js",
    "revision": "f99b700ad3ff849b2df9705aa0313017"
  },
  {
    "url": "assets/js/49.d295c7c6.js",
    "revision": "2d7c2cd0ac41c31dc317cbabfa490545"
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
    "url": "assets/js/51.2af99965.js",
    "revision": "1534aea659f66b62dda9a33bb312ac0e"
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
    "url": "assets/js/55.eccafe0e.js",
    "revision": "65bc91de5164e2a4664f9478823ea46b"
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
    "url": "assets/js/app.83632a63.js",
    "revision": "3302bd0a7b5e779d8e8fd93e5fe71246"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "200b69a79e26c86d7465898de3037e8a"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "44534322a285177c169c336f74401f28"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "52e5a239353ee4570dc70658ae3d1d92"
  },
  {
    "url": "fontend/index.html",
    "revision": "0d2f41032cdbaa7f1c57a193792a33b5"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "e08d32fdc341b18f51ad625c3af458be"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "363f25cee5010983e0ab42711494855c"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "a0cf3bdf10e6cd6e7dda71572526ccda"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "7ae2c6417ff78294c546c4778b3ae7ca"
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
    "revision": "edb710693e52b182ebf7877daacb2a0b"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "4ee111de2d2df206f21d9cb5962ac936"
  },
  {
    "url": "interview/css/index.html",
    "revision": "42500cff0ff7cad87cc9a727bf9c22d4"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "eab267fab6c7837ed1f8f682ec625bcd"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "c550ed9dad8210379d152a4d558a5936"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "1f05422a2ae1aa2e1f7796b57e6172a5"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "dc6e2bc9773ff5bf85c124b7c2422ba9"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "32e76e2b4ffa78c5fbaef2bb2d307e5c"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "fb2f4894ae969a18f054adef7a856019"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "ca37a3cb61825aafcb06be7b90e7eb78"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "7b44da197852e70361798f7c18a561da"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "84d35bca0bf9bfdc08f206fd9233b2c8"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "f1e85aa2f9d358a4ced9e082624ea1fd"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "fafad3641aace43c4c9da79f02f99144"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "4aa490854b1920d3c1e57463d2209c60"
  },
  {
    "url": "interview/html/index.html",
    "revision": "1bd2ad31c075f33d7649fe6f955611d2"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "c459b6d187fac8d54709b2792e71fcce"
  },
  {
    "url": "interview/http/index.html",
    "revision": "779433d2c5d0019090bc24e380a29539"
  },
  {
    "url": "interview/index.html",
    "revision": "d71f02d74d91f53ecb25c75a380e3980"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "3be4b27eabef3e3997e82e22f121c2ef"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "0626bc9de366a4ab32733116205ada80"
  },
  {
    "url": "interview/js/index.html",
    "revision": "362c9c73cf5b3657738cf3d6422cc66b"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "37d9b3571d27b49fdd1c1de4c0b9a74c"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "336fcf483c12aa407209429e19d8b816"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "1d4a6d8c54482e9ef1f3deb34d434572"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "abba3d35dafc4671db902d8bc8ec955d"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "0e3db46a8be3ab105b0a180bfb72e826"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "a079878f12316c884aeb4c4a54507c86"
  },
  {
    "url": "interview/node/index.html",
    "revision": "094a061aa7b3457f330253075ad97ec9"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "29118e9071b4710c4bdffa72f1b59f64"
  },
  {
    "url": "interview/react/index.html",
    "revision": "4e5130cdb143a3515505eb1aa2a175bd"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "e79d54c23e99e3ab07eb32e46dce031a"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "bc9e7da8b0d7e9e594a05f861b6a9b3a"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "91a591b3c931e6330e265bf847601347"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "f28cf9d3a610511407a1e522f1d92918"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "d5f45f96efcb14be7a42025b7e469794"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "33eaa61b928853e1fd5da770637bc50b"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "2f7939b81af2f7dc0405d613544e7edf"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "94798cf10cb0bfe0b71e6e972dec694a"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "0acc38c8b3d35e76807b90a2b65cac0e"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "220714c1da7b19a76650ceb40bb1acb2"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "cdb39415f5d6f34d1c8fe67126d02a03"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "dfe9bd3d14554809cecf8dda05c64ef6"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "424598f51e52bff4a046c80d6821247f"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "17db2c02ee0ad185d3359b9acb4e2374"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "36eb8302d56411d9514740c970ca1aba"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "1d206a7d16cd7ced5f7d1602dd35d4ff"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "f833ba4e93275a1bdcea8fcc68a29d4b"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "0d1e67fdecdd12d08915af0b7e5c902c"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "b8bc110aba15f3d3a200f50b8d4c1eff"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "5ea6dbe49151eb3bd29dff2e43820957"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "1020738385933d74d86808a06c2d5b31"
  },
  {
    "url": "math/index.html",
    "revision": "ded366bbd1e5ddfe366bdd90e88ea782"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "d2aeea60c6f9e4cce92b057322783200"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "08575618b91c33df1eb9791bc047d149"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "2178ce8af6956873c86aedd636e29abe"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "869cc31a52f7d39db4e40096a0608225"
  },
  {
    "url": "math/low/index.html",
    "revision": "5c8b1aacb39a15db2ea522f1b3379592"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "bcfe5a2a29fdb1967d117a1a923b4691"
  },
  {
    "url": "math/mid/index.html",
    "revision": "751107d08eb423bfa5a26f098ee0868c"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "0108643c922d1554a34bcbd864d98300"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "12bb3a217d4d66ea4b1407a46dea1f2e"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "77a783fda603d8ea6f499490ed7041e3"
  },
  {
    "url": "wechat/index.html",
    "revision": "3c36aea8e0067e5a4fa6b68a8c5b3bf5"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "d0bc03106c7da4c4e8eb4ed6b5b40730"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "40c262525ff9474ffc805ba605b29131"
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
