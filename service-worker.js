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
    "revision": "f036e366d7197ee8016f1e95fdb891a2"
  },
  {
    "url": "about/about.html",
    "revision": "011dff7a83ca364690b457f0cb218805"
  },
  {
    "url": "about/index.html",
    "revision": "b992720d14c94eaa5b95501ad22af62d"
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
    "url": "assets/js/22.3a0e9b7f.js",
    "revision": "c44e4d8906203b44b8d4a94c1cd830c2"
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
    "url": "assets/js/53.c6b1350c.js",
    "revision": "9fcd306ba3c05bfb4040948db42b9f15"
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
    "url": "assets/js/66.48657363.js",
    "revision": "34ac68ce87be6dfa4262484137cf91de"
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
    "url": "assets/js/72.d85f3ac6.js",
    "revision": "3b0f4b93de65b6a3e40fb64994358ba6"
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
    "url": "assets/js/76.e235ea51.js",
    "revision": "5c94a65c900a5169fb9b6c87cecc8a42"
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
    "url": "assets/js/app.76b05087.js",
    "revision": "d3217a16b92e39b37e24048abc9c1720"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "e8786250d206d53d79d793eb80793d27"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "f6c0f918b27a1b42a44280efd5cfe42c"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "5e03010ceae442a50b0d3e0c6ac3521b"
  },
  {
    "url": "fontend/index.html",
    "revision": "706d73a51f02d265b8582d0b68a0c827"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "09a119ddf619970b964f76c113e9768a"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "0d64be870ebbc3f0cbc044d947edb389"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "a86ff294ace5bfa0c180909d9fa6bb7e"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "78e0ee3fadb7aecdc15a54f57532359f"
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
    "revision": "01409c7e46bf4b7e702b186dd77f005b"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "8d4b53e656b8a255b2f0a9d91675f18e"
  },
  {
    "url": "interview/css/index.html",
    "revision": "4091138ef802bdcf689d60d18dc2cddb"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "57c627c062cdbc1aa09541c6c5d81c4a"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "fed1ac2c2720a5ca64772771e5e4e6b5"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "7374eb7c66fcbef755b32e82e02dc62c"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "087eee2fb1d0a5d5211a6299924ff11a"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "4ded4222a54f5d64939944e70e2b81b4"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "6b598f7e5d18605516ae11cf54d1eeec"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "27e29b1d3ff8e7bc997852a18e095c4d"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "583dcefb6653cfb020a6783656a2b5bd"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "c1c67a0fbfe0fba773f70252c94ece57"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "9588f810cfbbfde4963c61e4a3d76fcb"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "de9d9c0ce409fd512db2be70bfae85c8"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "9f481f088828fec0859a882e2c88549c"
  },
  {
    "url": "interview/html/index.html",
    "revision": "1029bba3521d8b7e0b45d86f5b565708"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "e4e925778cc1366170db06d80eb2b800"
  },
  {
    "url": "interview/http/index.html",
    "revision": "f20815bf626d18e263606bc86e9a9645"
  },
  {
    "url": "interview/index.html",
    "revision": "d62880aa79c8731a76d5440a32b55f8a"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "6815a82bc5f2e8f96d945dcca01f0ef8"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "820b3acef8f64a3b8c97fa1008136095"
  },
  {
    "url": "interview/js/index.html",
    "revision": "5259799487050343981e807f4147f4e4"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "1a070a0c9b4e60b01a86e3de915b8f71"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "38399d8678db7409800b3ed1a6281754"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "81839bc37a54f5dc7132d4e39feb0d22"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "6143e4d8a4ce1f9bed039a13b9e3609d"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "9cd7275e678c30d136ac5673f7f7fca3"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "accf669f0ed5970df5f00679c9e46c6f"
  },
  {
    "url": "interview/node/index.html",
    "revision": "346422e8f2e1ce257201a913bcd76e66"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "ad635e2275a2be0b212f4e93772e1b99"
  },
  {
    "url": "interview/react/index.html",
    "revision": "373da8ba2a100935c9e4fb4b6c523879"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "eb8e7c2d9aa3526a0f8e8d4c043a2796"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "cc56c0dbef0aae5219046a7bfaf0d806"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "096a01c02fb60707c3d1c676efd86e6e"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "0bf07eab530b43ec585358d1f73a28b7"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "431ee2045aa597766cb56eecbe8e5e5e"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "c0df4458981b24045f0e275fc670acef"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "fa6e18f487682744afa63aa2c59d1a57"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "ffb2ad124e602014485d8400f2172344"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "0b088ffdbd93ebc5ca8e79b721f71cce"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "84e4d8802898f6d524ba65fdd08381c6"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "eb6dd06c9c9508714e92a27256694dbf"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "bb8f238db378b3c16cd4fe049d899edf"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "48afeb36c4dd25f17a9277e1c6c969ed"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "905061ebc07a832b614c86149faccc4b"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "a96d72f040c29ff728956b1cc9f532fd"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "dd80a649feed8d7557c8099204e37fc5"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "7407e2699946b78cf7fd5c71adb0ca3c"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "620db2b56c0a57759990f5f3ebd5b14e"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "a0e4d2555ed0d1ba2bf67433cf23a125"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "7e7576e06e879d2ae6b4efff9659c7b9"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "3a1aa64b243bf35a31a4f122704a2cab"
  },
  {
    "url": "math/index.html",
    "revision": "bf1578787deb18a142ed27fd595734b9"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "09e2b7176414fd68dfc3398a0c7e1345"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "1b89d2d5e6d831597aaf581385e072e1"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "95b312c1ae76d9d0af5a9b0fa171276c"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "8cad67563183c1d6ecd4ecbc0afac5b9"
  },
  {
    "url": "math/low/index.html",
    "revision": "b8119b7a464956a7899db1bbaa4c7d15"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "49a14061e1cf8cb5d194e870d644dfd5"
  },
  {
    "url": "math/mid/index.html",
    "revision": "7f49a866bc8f2a1954537bf031fbedad"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "baa3ace06daed614207fe5e504ca1721"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "1d239fe28e98b641a9c9e3bc3d385f9d"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "c381e094d95b02f49ae220910b4148ef"
  },
  {
    "url": "wechat/index.html",
    "revision": "f9aed5899f49071d1a77ab6b070d612c"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "2bf7716c1f72e1c3a142886536e22f9f"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "de91b56645ac84858aa8363c7bbf1468"
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
