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
    "revision": "cb01fe6173cdd5a385326dfd5dcde3a7"
  },
  {
    "url": "about/about.html",
    "revision": "a7ae813454ce50390af0a449b8db5b22"
  },
  {
    "url": "about/index.html",
    "revision": "e0fe14e2778cee3b8b0c2348c07c45d8"
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
    "url": "assets/js/11.8d55e1d9.js",
    "revision": "afd2b9525765fd45b1e020e7b54e6349"
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
    "url": "assets/js/14.fba1c346.js",
    "revision": "0e317ab5df6bdb99410063da2bf2989a"
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
    "url": "assets/js/20.37b9b6f9.js",
    "revision": "8d8ba9072a2662bb88f90870cecff3ec"
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
    "url": "assets/js/35.697c53d1.js",
    "revision": "fd5e141fbf83cf40ed811ddafa2958e0"
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
    "url": "assets/js/38.8cbf2a6d.js",
    "revision": "525a63c956af5ba9139a0c74c2181437"
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
    "url": "assets/js/41.242181aa.js",
    "revision": "ef907268a91e06d38a8b46fd864caca1"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.98a2b7f5.js",
    "revision": "07f09c73552e7674007abf0f05726ca4"
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
    "url": "assets/js/50.d03faec7.js",
    "revision": "966206c51248d16ef60a7f1455582308"
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
    "url": "assets/js/55.5890f64b.js",
    "revision": "a64a9774e80e31d09ae88bffeda731e3"
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
    "url": "assets/js/66.8a110c0a.js",
    "revision": "2be0994054cbdb0b4e13c3c750007c27"
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
    "url": "assets/js/9.7b6a8526.js",
    "revision": "727ad4f4bfc53cfd9fb0f4b89878d7e3"
  },
  {
    "url": "assets/js/app.503a14ed.js",
    "revision": "b071c8e19f12edd29c44dbf2b8f93793"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "18f823d9cdd4b203bfe627878de0a456"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "aaaa0751e2c1bdd1ae43f8482f729321"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "1dc4b98eea04c119bac370063aa999bc"
  },
  {
    "url": "fontend/index.html",
    "revision": "b405aebab7f73528421b67fd3c534384"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "36fec60c948acc02fb626198693b1e36"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "0fe5a890346ca70970746324e3703182"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "ad80ab56c0e9e340809c81a30185972c"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "72ab9cb0624880f2041636626a7e757a"
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
    "revision": "39ff1d4beaa59cb05721da4a618a518e"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "2f10e9d4a3380652ccfe1f0fa1f31ee4"
  },
  {
    "url": "interview/css/index.html",
    "revision": "e79aa8e9986890f2bc1099e60675e90f"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "5234109b96cc2fb13c47e1f2f7bc5fda"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "01314b994132055aec0781ab937d1a3d"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "82f9583aefc0492ad0827707a2e79cf8"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "4bb113671074d8df9663627e6f67b462"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "91fe22855c1468a0e8e6f25df65357ad"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "28acec9bf9b82556c35a7415e5ab60f2"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "127356bd42ac9a083d05216ade334982"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "ce8e8b8c9484f9aa8413ba10c0d0f96b"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "3c9ebf682923105c827ab2643ca8418f"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "386511d04e6213f7cf65e470958e3fad"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "323adf85fd2eff317288b2629c4f4b33"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "1a12427880c887a5134ee34127341825"
  },
  {
    "url": "interview/html/index.html",
    "revision": "8f0fd4540404e8107d62676181920035"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "4d151f20c2bf3cb88df5932e161541fa"
  },
  {
    "url": "interview/http/index.html",
    "revision": "8251d2bfee2c563780b8b69be3a627bd"
  },
  {
    "url": "interview/index.html",
    "revision": "96250b36e22e15b1e1aa1b086a07f3d3"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "eb848f8388b348bd7cf0026dcf1586cd"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "2e852c1ea4838f5c1c5a1cd00e0609b8"
  },
  {
    "url": "interview/js/index.html",
    "revision": "f1e617fb9e726bc26a8daaa092a47986"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "4e69020e45208cc2f307f2c9f2c6c3bc"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "c82b9f48c8f3ac284f58e5fd949fe0d4"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "8e8d74da17149be1493e69c31822dcfa"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "923876e9a33cf7d1b58ef9883ad72069"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "a278b1c1a6aa862b73b9948181e7e74c"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "b11cce80a957668e648483f64f8a33bc"
  },
  {
    "url": "interview/node/index.html",
    "revision": "11dbfac0a2cbb6ea128405dee992a3ed"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "13eadcb2bfba03ecb5d755a2f10a90a9"
  },
  {
    "url": "interview/react/index.html",
    "revision": "a2b7784ba91a98393995d8302dddc0de"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "2a50ba795b8bed035efe667856eea4a3"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "fd7f096c6ccd76285cb572ca57bc93ba"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "d523dcfc89e0d0090f4b7b9b19845971"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "04c495ae84fdd07a476a4440e57e57e7"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "df4c99a52ec965e7f8583d0d1aa99a05"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "7a28f67b2c391a3bbbc45af30bee0fc6"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "198c56d0162a949c83b00f0f78e8b68e"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "0614020b04325d150818661f2bc683ca"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "e2ff1c5a1f7243159a4c2dd7244a12d2"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "f0e224dee344af881c4a951b2877d766"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "ac457d970ba80f7fd4083f2249d1b89c"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "258b0db0c938bf4d84ecb346f12be4db"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "c864b4750501d0b4b7bc501799ab1869"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "8830fafad9c6033e34bf89dcb3367115"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "3cb93dbc3ca8c7df176a782a8195df9c"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "3b19e92c300b8416032880ad110f2f03"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "929f2a30fd782d44750eeb152c8dfa09"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "d71ce49cfec89e8e72ad600397e46288"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "cf2ad513f8b895cbc602af84cd496c5d"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "70be4bf3ac9d6233ff74626722f9b0f6"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "51fd30c50b3a44ec922bcea0b0118589"
  },
  {
    "url": "math/index.html",
    "revision": "06e56b3b9118f399ab156d8eae1ad4d7"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "f8b73b70e253971566cc5731023ca804"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "c6862263f9965236296e72e6a15e8127"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "a7bc9a19af596b7f9f8ef5f80c3a254a"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "11050242d9077f329f9b818395575f34"
  },
  {
    "url": "math/low/index.html",
    "revision": "4d7c2231af96d6c11b8fd1f9ab47e8f5"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "99257e9927c9413a7fdbb7ef4ce4b1c9"
  },
  {
    "url": "math/mid/index.html",
    "revision": "9f20a1190f8b7bb6319c5cccc994403f"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "7c4f3bfaefc94e80bc98b0093340c082"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "6ec8ddd6f7b46b033278b59848f62553"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "7145794d6a9e36b3c21e8653af15fa0a"
  },
  {
    "url": "wechat/index.html",
    "revision": "72ef7555f9d39d248fe813e553cfd11b"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "69bf9065f0322f1d3fc68f6f8dfff723"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "256236981c894ae1823c0a0578d9b4ab"
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
