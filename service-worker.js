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
    "revision": "9bb4be30e8d912ff7a4e6960ad657854"
  },
  {
    "url": "about/about.html",
    "revision": "7ddc488ebe4c931688cc90ae1d572bd5"
  },
  {
    "url": "about/index.html",
    "revision": "95c77dd19e99f987775dd086ead5eee4"
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
    "url": "assets/js/41.ec2e5e03.js",
    "revision": "36642adbc70806cf1c36bccf07b35953"
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
    "url": "assets/js/50.2f6c83b9.js",
    "revision": "b08fa63b8f8adee16ad60cb3beec7a4e"
  },
  {
    "url": "assets/js/51.a4a6691c.js",
    "revision": "a511729efe3173dd511e545101414518"
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
    "url": "assets/js/72.066e5ddd.js",
    "revision": "2b6d992afb993ad735f1436183e34886"
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
    "url": "assets/js/app.f4040dc3.js",
    "revision": "9cfe28f913a1769b61764ca60a23ad44"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "c93574ad011823c51961caf3aed41a0e"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "43ee337071c14a6f6a70cb26caa9b6d3"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "5afd8102c6181fbbd12d99ecf4a98766"
  },
  {
    "url": "fontend/index.html",
    "revision": "f1b525329ef18d6a16d8e70db43d67cd"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "0b85bbcad40e0a8e9d4b46c664dc9eb7"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "2dee39670db87e0f1b87dc76ac5eb957"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "fa7f6e7586c1ec1022b4b33745f6140b"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "52745029e1c44047a26dcca67368752b"
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
    "revision": "264e8bf877ebcbdccc5e7828f2b1a218"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "5f5bcc8a59cac30127187e63188cfb89"
  },
  {
    "url": "interview/css/index.html",
    "revision": "675be1fe590b9907b240f7824759871a"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "58c1e68af941bfdc54d40d0b852162c9"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "f26616597cf70edc9f81a539493dec9e"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "930eba1cd5e9590039f3094868034ca5"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "e95b48a9aa0abcc78620f0c9d6e39345"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "d20ec2d8f9a706eb4c6deb7c2e3ececa"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "0dd83209e8b075b27ac1174301a6971b"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "abcf2b383fae077f02aff4b9636d88d1"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "8e5fe6e0c6af968b3c15963c3c64e7e6"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "79c14d52bf47d925651e74d930480703"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "c90c990fb899a76837516530c1117136"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "684ed87860481a32f32e893659843347"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "cf02c8b4b8cb4be8af2e7e607986f186"
  },
  {
    "url": "interview/html/index.html",
    "revision": "0e7c553f1cfa7b569f5d87c04ec2edf9"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "9c5723e717327a310a3cdbc34a6a68e9"
  },
  {
    "url": "interview/http/index.html",
    "revision": "ab767afa2d850d8eebe9d3b1d6269f04"
  },
  {
    "url": "interview/index.html",
    "revision": "f836a7a591285d8ee6a40275b95b2f35"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "80f77f960f970ba202ec3c5487be2be6"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "5bfe774d1ea5e5ddfe6cdb63a7dd6551"
  },
  {
    "url": "interview/js/index.html",
    "revision": "33cd700d4db01bde103a83fbce50ff11"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "8ae858919e504e6704830dceaa73b317"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "e0c6ae16aca77da684c2a3da7a3922a3"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "02a4a317917f44aaf9994d7fc44a7a8b"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "0d01e5d81f0c5b86058d9a68f6fe4993"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "43a18954552a321af579ca7a1ec1e818"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "06d8080572de94105a2cc85980ff4f10"
  },
  {
    "url": "interview/node/index.html",
    "revision": "ebe9b4a2de5057a7b419d46aab5b8e43"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "105b15fbf4adb6738ea94eb7ab38ea21"
  },
  {
    "url": "interview/react/index.html",
    "revision": "5a865315c46d5f3fd90cb4d179279e4a"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "e66a4d5ffbf309f7eaecf6fa9d037754"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "84d1cea81962961077c78f56fe54dbd0"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "2f4f73997380e72a45f3f78e1cbb50f0"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "4dd324ebc3327ed0b3ae860cfbd0d0ac"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "48e53f3e1ed7cfd7bba753ce43dba863"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "463036782bafa5d4f76309ae38eba31b"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "a7924d777858a8a237ac30cbf3610934"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "5c5e1d37a2eec3a43cbcecaf54222526"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "139b58723ea2c430cccfe490d186001a"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "b30c5393f9bf27fcb46b0ac1a8264b1e"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "d095a7848a5082229fd111c893e441b7"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "35d7860a97fa5c24e4c086dabec382a8"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "5ee6379a769181ad4841c8e9a693fb0d"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "e64f5a6f44e3076872161889f9b4e33d"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "f33277c27daf5c3b89d8caa4ab772cba"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "783af589e61dc3e6fe5f55ca3eac0f4e"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "b906a616710511ee4b9f7f9daacf2dc5"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "c9c93a1ff292be1f5eece20b3070088b"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "3fa3e7e231f5c2e5a666bca2af4441ae"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "74635aaf9b05cd0dd2f625ed1fb09618"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "9df4b8862d098a1e40db0ada9fe853a4"
  },
  {
    "url": "math/index.html",
    "revision": "efdab4d076cd1aa687e7dd3e088882bd"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "3f81b9d9cb6ec24c9332e7da920c782d"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "91c1af62b3dcf11eb813d7dabfe4b44e"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "d8569387af358622634abb57aec876c0"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "ec15711b635fb01583266c6a5037653b"
  },
  {
    "url": "math/low/index.html",
    "revision": "d70871daf9316c512d8c7c14895eb25a"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "35acfedc64532694d6119af10df48ea9"
  },
  {
    "url": "math/mid/index.html",
    "revision": "1ff2e3f2442008a8022709b44c03187a"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "16474da4c0238f56cc6645f17ee6c6f9"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "b62f3b6f515e69a4c03ca2c0d218d10a"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "803b530393c53871fe3c2e026958abe1"
  },
  {
    "url": "wechat/index.html",
    "revision": "95f542e79907b67dca2aa0d4bc78d288"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "0b6c9837f66d6c6e19bdd4858854c036"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "dde85c4287794efe2ff41e68ea6ec7fb"
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
