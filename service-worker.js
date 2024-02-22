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
    "revision": "39a576c5cbea556c847c4aaed3c0955a"
  },
  {
    "url": "about/about.html",
    "revision": "d3df3b717f6531cdc5445627cfaf39fc"
  },
  {
    "url": "about/index.html",
    "revision": "9630ed79daa463a573baa813f4a62431"
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
    "url": "assets/js/10.7e661623.js",
    "revision": "ef0b5290070f2a2f6e9fe424f5313287"
  },
  {
    "url": "assets/js/11.ae627b6d.js",
    "revision": "504f3c03575d50673a5fe3f1cd4f2735"
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
    "url": "assets/js/38.2cdca637.js",
    "revision": "08c74d4d3bf22dc15659a909b4e7db8a"
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
    "url": "assets/js/43.d729690d.js",
    "revision": "ed9891db258f8cac21975475db75fbd9"
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
    "url": "assets/js/50.b89f28f9.js",
    "revision": "91413f55b707486abf313ada59df293f"
  },
  {
    "url": "assets/js/51.9df95cd3.js",
    "revision": "41ea56c712695a643cbf61cd3b05c7eb"
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
    "url": "assets/js/55.de1968e4.js",
    "revision": "5cf140aac0cb8b681ab4f99a49261954"
  },
  {
    "url": "assets/js/56.901177ef.js",
    "revision": "ba4dcdd5be504c0f351dcce0073f2ece"
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
    "url": "assets/js/6.9ffa83d3.js",
    "revision": "bc5d046420c3e4ddebd097d7904d612a"
  },
  {
    "url": "assets/js/60.8d4790bc.js",
    "revision": "c73e0a1f6c9e87aada6db552a594b917"
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
    "url": "assets/js/66.261a0db3.js",
    "revision": "bce0a7c5f4b4782703a54773b60460b1"
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
    "url": "assets/js/72.200a9c9c.js",
    "revision": "fa7461235b1f42c3d0c07dac0353cf56"
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
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.d8a81d6f.js",
    "revision": "5973a4a082016412977f7587954e24a5"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "dc921bdcac7a2f2b3058215ed9439f36"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "3651cb3f08e964f48100779b5161b178"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "f969b3622a3a7ebf18e73ce9dd648641"
  },
  {
    "url": "fontend/index.html",
    "revision": "470d7101cbf07c7b8ac08f3eb7978c80"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "6698fbb6d1cbab4d4b1dcedc4ddfea64"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "beda422c5bb8a8195aa69bf89b433e2d"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "e91e86aaa41ddcb0dbea6e61e142f212"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "d68667cc1fc4016099b2279cd0a809d0"
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
    "revision": "b4d888b57227b8fb7cbe0429cdb0e911"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "2cb2a8c2fe36ccbb9b8fc47879997f80"
  },
  {
    "url": "interview/css/index.html",
    "revision": "26f56f69b2d05350ef2c9f610839ec97"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "d6d93fd1aab25d60149f02b51cc9b6b3"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "14ccb2774fed65a29c343e477d3d39cb"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "37c5ee4272dc0d6881327c4fb76c39a6"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "ce56116bf9f9885dc6000ae8a482ec43"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "2ebf9fdd7134bf0ed3d63479f6ed12bc"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "fd5577b16968b8c0fc21c6998ceb7886"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "92a40e6234aefe33c0494c399c5c2ac0"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "3d6220afb4d9adc18b50195c7e1b4444"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "b2a7bb9297ae389fa6c4127e17c109b5"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "6615c2d8fc05b6813af6da158da85085"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "401d97600a6979200458e14c82b0aaa5"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "45709015fdfa27291e09ee229ec236e2"
  },
  {
    "url": "interview/html/index.html",
    "revision": "3c4e3f7fb6221834a1321f00a81b0116"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "c717ac56135fbcd5d5ad683a2dff4e9b"
  },
  {
    "url": "interview/http/index.html",
    "revision": "31eea0ca81d537aee14624c70e14d354"
  },
  {
    "url": "interview/index.html",
    "revision": "44a2b3d6d1447016becb8325766f09a4"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "154aae470de3e7966a0ac285b1e95ee2"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "d44cdf128178c23fdd39f60599f994b2"
  },
  {
    "url": "interview/js/index.html",
    "revision": "e8c47952591179dde0b27d33d53a25c8"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "9135e9f8c25f74b8332973c88055a96c"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "8f3291b62867167ab2e9d75185dabdd3"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "816065b7e41a08539b73306e297783f4"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "37a3fe77fcee3d8bfd1c56d67e517327"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "4bb803f5668719d61f18ad123fc28add"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "e53f71d759a61b201f2101e27c72d036"
  },
  {
    "url": "interview/node/index.html",
    "revision": "36903e090421fdb10b8a017767f20acd"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "5e9ea71eae89113d8694c724988be3af"
  },
  {
    "url": "interview/react/index.html",
    "revision": "e0fc5fe5415220fd5d50738a03f3ccaf"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "e12a69f13ef783779d573595b8fd8381"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "ea04eee0bfc81dbfb5e6ad3d92adc7a1"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "12a3a4e14f16b4d88a746034e7a9d4d3"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "cbed6b6bf43fed2393109cf0b3ca74fa"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "dbd569214c23712876139e020bc57afc"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "b03caaea6dbdf52b4a772bdd3f995197"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "d40d3fcd5e1d22566ff870c4543dd963"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "0d615e74e83ebf4f82dfb7680386e6ec"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "7d4873bf99315a77e508a769c8c8d546"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "6383f4f616bc17e4332d14dc073d9764"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "6145f1986e62a15b8ee823370dee2498"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "21374c06901758ca3edd1e8b1b39243d"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "fcb0824c914a41b7a6b87612f9bae929"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "a12c7551d8e21b6c36e36b7ab849fedd"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "cba13f10d4b827c8c68960927b2529c8"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "aa45f4c14c3b1a89a07e3383b9a97a20"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "9935a1ee5fe2f145c8dabcb553856dfc"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "0761c17b52719515a0630dc2a238215c"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "cd7f48c74a75666d40a15673febad115"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "74ae60186b2f9318d2694fc77990e339"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "4062ca7dc6ce61ac425d130f34be5c60"
  },
  {
    "url": "math/index.html",
    "revision": "4420802a75cc8f4a09b21afbb410d151"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "34262b81c84bff21cd4d5aa44ae5c302"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "002a1f23339b1698a164abc16d9255eb"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "1a0cf9d903496e920639658a10ef5895"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "614f7e7d06c5c64981cda24a8e74642d"
  },
  {
    "url": "math/low/index.html",
    "revision": "ec979350248cf59c8cb70fd2be7a2006"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "ca375a2c6855a206466cbfed91f581d0"
  },
  {
    "url": "math/mid/index.html",
    "revision": "c8b703ef56a046f061962f6d3938edce"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "4895b74546a5caeb7ca4349ef10b3d67"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "d9f12562a3895a0da0764984f7f9ad26"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "72874c1d034efcd442eb58e1bbf134eb"
  },
  {
    "url": "wechat/index.html",
    "revision": "8eba91b2c9299de7bc95ef8fdda6dbae"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "075635c1ec29679bb60450e7190fda1a"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "e59f80618098dbd56e95bcf715e81845"
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
