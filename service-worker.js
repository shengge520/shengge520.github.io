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
    "revision": "89f9204584a17905590e75756a8bc64c"
  },
  {
    "url": "about/about.html",
    "revision": "ec8d53f379a2580c541f766c1c1833de"
  },
  {
    "url": "about/index.html",
    "revision": "6d77f0c1b652e00766b4870a5d80f6b6"
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
    "url": "assets/js/35.00ef88da.js",
    "revision": "6ca1aaffedd83147b859d1e8f25bd68e"
  },
  {
    "url": "assets/js/36.989dd5f0.js",
    "revision": "5e2455285a4e80813ae94a85528fc09e"
  },
  {
    "url": "assets/js/37.72002827.js",
    "revision": "b26afd14cd010e83c9266f2a1e050a78"
  },
  {
    "url": "assets/js/38.7be5f639.js",
    "revision": "63a332af2be7f83fe40a16d0650bc445"
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
    "url": "assets/js/43.885dcc92.js",
    "revision": "da633394dc22a341a1176fd73b1e8191"
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
    "url": "assets/js/48.07e23e44.js",
    "revision": "d246120670b4dc05bd0a31734f131c37"
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
    "url": "assets/js/51.6cda0830.js",
    "revision": "46c1704a4dbbe1a3a7a6b7f0d34dffb8"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.d98e947f.js",
    "revision": "f9551c80f8ef25999f3124ee96ec6022"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.4467ce19.js",
    "revision": "51202e07185bab1cec26164a0ae1e504"
  },
  {
    "url": "assets/js/56.76cfd63f.js",
    "revision": "dce4e7213dc84b3c4fb57d1e12afa9a9"
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
    "url": "assets/js/59.71a43b14.js",
    "revision": "a5c408197bc4e799c929f6f719a0ce83"
  },
  {
    "url": "assets/js/6.9f215a01.js",
    "revision": "db568c754a8fff1819565a3b47adde80"
  },
  {
    "url": "assets/js/60.7fa0355b.js",
    "revision": "f7ad7ee68aa7d3c681d16169fdfc5db9"
  },
  {
    "url": "assets/js/61.a77c0bff.js",
    "revision": "d2b7e9d3f8d132c1d012cff3623e2cc6"
  },
  {
    "url": "assets/js/62.8d39ce0a.js",
    "revision": "5630e48af354d4a0424eee674a4858ac"
  },
  {
    "url": "assets/js/63.f142372a.js",
    "revision": "b89f95a8696dc4d5662ed8030c7f480e"
  },
  {
    "url": "assets/js/64.bcc22084.js",
    "revision": "f620a37e55c2a7afc8a564ee447a1055"
  },
  {
    "url": "assets/js/65.093928b2.js",
    "revision": "7b0dab07b77eded8d3a85247ea7ee4a7"
  },
  {
    "url": "assets/js/66.8a110c0a.js",
    "revision": "2be0994054cbdb0b4e13c3c750007c27"
  },
  {
    "url": "assets/js/67.64e62117.js",
    "revision": "2da3677f8d591841cb6de3810910919b"
  },
  {
    "url": "assets/js/68.bd9bbcb9.js",
    "revision": "51d5580afa24129c8d100566c646ca00"
  },
  {
    "url": "assets/js/69.23ec1eb6.js",
    "revision": "98873154e1f57e214b77e249305ee0b7"
  },
  {
    "url": "assets/js/7.18c4d082.js",
    "revision": "65769df73aa7da262e6c948e61fed0ec"
  },
  {
    "url": "assets/js/70.7357e9f1.js",
    "revision": "712f14341b860fa38425b14f8bf38082"
  },
  {
    "url": "assets/js/71.fc88c8e1.js",
    "revision": "ed9d0e8ac740553be79ff5ea6e70284b"
  },
  {
    "url": "assets/js/72.200a9c9c.js",
    "revision": "fa7461235b1f42c3d0c07dac0353cf56"
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
    "url": "assets/js/79.48a57366.js",
    "revision": "31175a36b4614fe889ca579d3ba6d2af"
  },
  {
    "url": "assets/js/8.cd961958.js",
    "revision": "9d6f2283ddd1eff2c60ff81cc5a86a9a"
  },
  {
    "url": "assets/js/80.272e8633.js",
    "revision": "8c4e23fe42d8d93c652857e9da8d9b2f"
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
    "url": "assets/js/app.a3bbf426.js",
    "revision": "b9aee77bc98446b189cb28971f8e5362"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "52d944383a2eb071549c3e345c77c5d9"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "f231ee2f860347c275cebb033e3dabb5"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "0552207b5c8266802cc3d50af080e51d"
  },
  {
    "url": "fontend/index.html",
    "revision": "9b9c0c9907c8cf6bedd09e3106f08c67"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "a29b96167ca6b5fbdfa9a41e457c603d"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "615dc5f5560c904b33561adf3e424ad6"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "0af9b5146d7d08bcf5e52ac8bd43f893"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "a1a54d38153154f18b44920712b068df"
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
    "revision": "6941b6d0fcc384ddd1843c2d1e4848b6"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "29d4206f864ed12145da23b8bf807f19"
  },
  {
    "url": "interview/css/index.html",
    "revision": "37f6458c58caf6949954e28fb0b93c04"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "772417ad3c3416c592d8eb8dbde3ae48"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "99704861e9774ec95e3aa64fb3fe56db"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "34120eaad80c255474fc2c8905af4e2b"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "84eec895d8d563dbe2f00a8befd45532"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "9a5cf80da077044e0a54eb45de9a32bf"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "da255fb8cd7b00692bc03c68852ce871"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "1779e04ba905beb95aeae5c82e1c25a9"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "ae0123725cf0318f7872df6d52400bf4"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "50429e0c34e23ded370db40485b5bf4d"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "ba27f30c75c47124baa416e2a4e76c94"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "0b0d51af3bf2853f549b82a0b150da65"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "bdbfdb8870ac1e7bb27d7ca11e20c043"
  },
  {
    "url": "interview/html/index.html",
    "revision": "69b5257e2b0e664b9e9f3bfafcb045df"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "47ddf88c6127e48477a4af3225aba84a"
  },
  {
    "url": "interview/http/index.html",
    "revision": "bf7d2d8a4e89c97b48b4f4dc0062604d"
  },
  {
    "url": "interview/index.html",
    "revision": "8489c75a1fcff06f57315f05ed738c74"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "6bd6166e2abb63245be5a2ec19baf5b5"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "23b866a8392d0fea9267ad2c31842ca7"
  },
  {
    "url": "interview/js/index.html",
    "revision": "589e9d05644c3ed2b6ae4f1163ac3451"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "826772430141cf0c1789fc11f573dd31"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "c3c0c11c84b0ed5b794d4a8e278b7421"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "8724a67e8282ad64e741bf094bbbf727"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "ac1e0ccf97d7615b28370df172116856"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "96ca034c14cd626c8ba66cdd99962d9d"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "44fc65bae00d58ad465506715d215a42"
  },
  {
    "url": "interview/node/index.html",
    "revision": "d69764003a3c52fe3a92c887461a93a9"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "84f33c9ba47c1bd2297b898d3efb014b"
  },
  {
    "url": "interview/react/index.html",
    "revision": "772ced4532df175ab571353d832af017"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "117cdcf13f000aef397d6b851995ec6c"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "f5c9a0bdf057b72c155211428c3ebc54"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "58e95156ba87a887452b6931cdf89d10"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "9344c9b898bc79eedd0d3f1f7df958ce"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "6e2c0e10596b342512358b2256062a47"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "1d8771031da095e780dcd004b08ef7bd"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "81d5a013a7e65903453d8daec5dd3011"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "e1dd93d88595bab2659bac085edc9db7"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "b2f0c4c752ad19b2b3a2956c862305a9"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "a6d8e03374b4df8382ef5e1a27ef0e05"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "60368d5740e6f49766c73c592f9cab9d"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "076928f08fd70c87bdfba5996df4ac5e"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "5858e82d21fb7f03d0e7a6c4d984f48e"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "78029ddfa274b86fe497aa00129a280f"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "6e351cd57a4ea32f75eedddf423513c5"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "3aacb01eff7b07d65b055d1825a94c4f"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "566dff44d5a5880e7f5afdee3e568a9b"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "b3408d275b311019a0d5f64ac8a03ac4"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "464bb8a8e1ffbc4d88ec0f5d6be72e65"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "9df0366d0c68c2fd5b4000a9210aa6d1"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "b060547feffec2d6236658314dc6c944"
  },
  {
    "url": "math/index.html",
    "revision": "15bc41b9aa5d47217dc632071ce20852"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "a6c0d9a253cd7d79fe766da934213633"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "140b05df37f4c8930798666edfe70bb1"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "00b0e2915b9ff006f660734a8a07aacb"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "9f5f2757fa61ea34dbaa31a06ba5f000"
  },
  {
    "url": "math/low/index.html",
    "revision": "456af2623cd4451a931f5540f1be8450"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "7d3372e61349419aaf3c37e87d992b04"
  },
  {
    "url": "math/mid/index.html",
    "revision": "8d59c3f4ed22e5fb0ea56328da631712"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "ef4557d0297fbdc115b2f528fb33edb4"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "366c0eebcb1613521ea405589f01b306"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "7c3fe9f818329467792f5e2b7a82b432"
  },
  {
    "url": "wechat/index.html",
    "revision": "6c6ed143674f788b38075fb1d0d9e5e1"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "81c295f9cd69fb101743c91f7e85b6f2"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "7cd6ae6a34042b5cd70fac6529e8d3bc"
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
