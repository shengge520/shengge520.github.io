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
    "revision": "c879a9fd20f0c1c139fcc1f6716e8404"
  },
  {
    "url": "about/about.html",
    "revision": "61774377a884961ef1b5592ce7de7447"
  },
  {
    "url": "about/index.html",
    "revision": "6fd193f066617e2c8649c85e8885bed5"
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
    "url": "assets/js/27.f28fbbb3.js",
    "revision": "205bf7dbb8b986d8372d4e33eb72beb0"
  },
  {
    "url": "assets/js/28.15a1dfc6.js",
    "revision": "e5a9ee7ab6a3a1891f0b26007cff8fb9"
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
    "url": "assets/js/32.56710f91.js",
    "revision": "64defca8d436003409cf50fabbe7871e"
  },
  {
    "url": "assets/js/33.589a8814.js",
    "revision": "079b15766131fae8cd0f92df8d40c96d"
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
    "url": "assets/js/43.557f1ee5.js",
    "revision": "ab3384c591391dde7efd5a988ee97589"
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
    "url": "assets/js/49.bf1d6fd7.js",
    "revision": "e802b4d238f25049f26f32961e435bb9"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.dc1ccfb0.js",
    "revision": "f54f1b0e0a2ba3f89932a562423afb2b"
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
    "url": "assets/js/53.cdb79bba.js",
    "revision": "a091c497bc44665057227eeb5e05e176"
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
    "url": "assets/js/56.3b108c5c.js",
    "revision": "eba9845032c9ee25549996837cca7fd0"
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
    "url": "assets/js/76.db49177a.js",
    "revision": "3a7f9e1993783c7fc2e6219eeffee079"
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
    "url": "assets/js/app.62cfa8a4.js",
    "revision": "7a80d5424f5cfc1d694b72972e4d24fe"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "b5d7215434acf614613684331994a991"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "1d99dde55635dfbd6fdd04d28c832be9"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "b141fbd518edef1b22f9f17f8d196388"
  },
  {
    "url": "fontend/index.html",
    "revision": "a3612b726560179f7c3b61452ec828c1"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "b75605874aea1df809f1ce904b229eea"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "ef8bea44855485a56ec5afd92338ef49"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "06018c6c968b77323efef0e6d71be66d"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "13a87887bf19d502a3e3527fe956a528"
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
    "revision": "66429336cce7b18aeb061f322f25a3ab"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "ca038ce1ca49637af37902c5ae2addf5"
  },
  {
    "url": "interview/css/index.html",
    "revision": "27c3c9830299b6c127422eb0b8943e1b"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "f5ef9d7eed90d80f3af5eea958b31785"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "b0cf0c9737890fa4011f152629432605"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "1c028bc022e3c11955e848cad3319964"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "15e391bcf7ad1e56ca9454a1b63f8510"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "2439db75b0f56750d9bc583ac5e25054"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "0b34cf16ad073330eedad749f56ec8d2"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "3f7f3db0cab16bb62dc5707f660e2fb7"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "8747e7a670591ec9d10926cdbe7152fe"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "c26f94d2eb2398fe999a46c8ac9b4803"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "896eafdac33a6b1567b4843f46dac784"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "1764f825c75caa5401715273e628e456"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "0a80a0fa08c42d21c4674f74e12a61a4"
  },
  {
    "url": "interview/html/index.html",
    "revision": "ebbda32c23290a836dc3c7cd574a869c"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "c15f47c105c86ea175a614060c9f6be4"
  },
  {
    "url": "interview/http/index.html",
    "revision": "fb7c19af5a7d582c0bee45195d34cf63"
  },
  {
    "url": "interview/index.html",
    "revision": "b2c048351e0e29f9eef041d78779b91e"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "9b445a90ccf6aa533c954e79a71a00ca"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "50400eeef886f701ef848a6e25991b02"
  },
  {
    "url": "interview/js/index.html",
    "revision": "e704454670b2852fb96f49fe05d945e8"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "ee17eb9bc3e4a4fedf1e7045e7306ae4"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "246b7bb4df1e3d54349e50ad7439a937"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "38eba853cb0572a1ff23a4239c8bd401"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "197bb6d02631b8e70cd2ed16cc16be68"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "a54fc5585e5d9bcdc1f557a0e2ac676f"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "7433aa1866eb8c2a1c89318c957e073a"
  },
  {
    "url": "interview/node/index.html",
    "revision": "8839460e8a5398474dba572cbbdd4aad"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "018bae473786f7364683c602399157cd"
  },
  {
    "url": "interview/react/index.html",
    "revision": "c1ecaced8c6e40bb81bf37200f46892a"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "2246968e847ffa52d200d481465f8309"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "8723048f3579551d8934575522756624"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "bbc56ca24f868d2a65bb6c32924ecf11"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "022c19d41759b46eed98e55eef29b7bf"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "e1d5b26421055c9e74182001b543c5af"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "d147121e597ee49c8710621101fd238b"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "f2e5807b5c09a3eaa2beb0e411a787a8"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "73b4b9c00f14d87c9f0e57f83145f6f0"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "6bed39445ba2d7fcb49db6c751b16c46"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "e0cd8b1b3fbd38163a04b86e419fa93e"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "d28f0d6bfcb9f59b1d3ef0322dcf0f6b"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "25c41dbfb2ee191d725224b6897ab9b1"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "c510751144a23aa35c158c0b6a95805c"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "c9edd0a68371d0aa09dbb1efddda11b9"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "8e114f6459ad54e9cb051776674e3422"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "c292f476b870b8e91a9fd7875fcda5cc"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "a857542b340295c3ef0a1c08d4f351a2"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "7e2954f5c4c9a41da76eec52cc1f16a3"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "5bd7eee10835f6c744aa3db96475a2e5"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "be55aa7c856644b44620ecb529248024"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "8bcce176f2c8499634302f2ee1cdd0bc"
  },
  {
    "url": "math/index.html",
    "revision": "c358206926284c6bafd92fbc5ddf1e3a"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "cc4db693fddc8d3c6b75b54c518dde87"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "93643568099c8a3fa3dea8bae0d1fca1"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "276a81bbda8f26ec814ac5b1091c52cd"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "55b4d9e3733574bdced0ffc49b00b51f"
  },
  {
    "url": "math/low/index.html",
    "revision": "cd72e3b652edb3efcb544ba78c70a4bc"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "3b6660ee85ff8b16e678532b0fd3cfd7"
  },
  {
    "url": "math/mid/index.html",
    "revision": "cc6975e66ae8b0f6c93af3a1be20e328"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "ea7961e7bfc23bab2383c840e4853823"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "069b00b95011050da402950077f14521"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "4961691ab845d02486369fefca4d45e5"
  },
  {
    "url": "wechat/index.html",
    "revision": "23b423c181d14cd4e0fa565002187c3e"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "906748cad4e7edf25133295cb71a8821"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "f03d9090a14403f7c8ae338045f5783b"
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
