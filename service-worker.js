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
    "revision": "e74aca6a84ae074788b125e5aa648a97"
  },
  {
    "url": "about/about.html",
    "revision": "0a4f977e35446b7186e780d244ed7550"
  },
  {
    "url": "about/index.html",
    "revision": "caa1987e047a0b90d83525758d4572e8"
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
    "url": "assets/js/26.9b301804.js",
    "revision": "a91260d835deb792ee221b18d78ff3b4"
  },
  {
    "url": "assets/js/27.89cd44ab.js",
    "revision": "ebfdaeeef477cde01ec65f06ec1e0822"
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
    "url": "assets/js/3.f9d6563f.js",
    "revision": "fd1f7f82270617397c69bb9a30eab6a4"
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
    "url": "assets/js/37.7d47393a.js",
    "revision": "0885c760d42d16324c3556e0e13aaf71"
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
    "url": "assets/js/41.60b1c935.js",
    "revision": "51d3580b3f07bc83aed9e90928b5ed0a"
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
    "url": "assets/js/44.78561bac.js",
    "revision": "cf6499a8773551121bd8b3fad8ad4127"
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
    "url": "assets/js/51.a4a6691c.js",
    "revision": "a511729efe3173dd511e545101414518"
  },
  {
    "url": "assets/js/52.c42f84e8.js",
    "revision": "44fd036060391f7997f930be4f0f6332"
  },
  {
    "url": "assets/js/53.eebe35d4.js",
    "revision": "7c634ae277135cca9ac95a7d4983bbf7"
  },
  {
    "url": "assets/js/54.e3a61960.js",
    "revision": "7d8e8aa9b8610bb75803c7d7588d73e0"
  },
  {
    "url": "assets/js/55.63c8dd78.js",
    "revision": "451a1953e90a3e517515a8b4c16ea997"
  },
  {
    "url": "assets/js/56.47aabd34.js",
    "revision": "86f8676b459b3b6beb5e1c3e8b22b2db"
  },
  {
    "url": "assets/js/57.29893ea7.js",
    "revision": "ed666236cc6cf2cfb9c5a2e9348597a1"
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
    "url": "assets/js/70.b4ff6cbb.js",
    "revision": "a8b899c63b67ca8a4104215c428cc5f5"
  },
  {
    "url": "assets/js/71.6ca9f668.js",
    "revision": "72091b89800e3d29c4e9f776f4b87193"
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
    "url": "assets/js/app.8ae1dd5b.js",
    "revision": "7384e1054a98825c72d25dbcd6190b3f"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "e79b27293b644da82a17a9ee63693b15"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "816142a08f087e164c39b633761f167b"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "d0bb4e60d1f3a07a741d4f16fa430d14"
  },
  {
    "url": "fontend/index.html",
    "revision": "5fcf552b6028d59682174a0a5757e575"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "b9e36197bd594be9c98fcd03c2495caf"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "61f7d4a90a02eab6234383f7e4f998ff"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "87f845249d5ea6f85c2e1db17d480152"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "09a31d7d7b7551a5dbe4d331e1b47b21"
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
    "revision": "0a0e677d5f3141cc5eaabeb7b34edbd9"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "1c4295485f1f8920bd2ceb4b361f6b39"
  },
  {
    "url": "interview/css/index.html",
    "revision": "bf9df1c4d9d9e72e5492ad646a4f9205"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "dab10c1af1a406f3397e31c649d8bbe8"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "120c0f9729d9961afe04799b27fb2a77"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "28f537f00417660fcb433b52dcf59ac8"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "dcdcca01a25b8db89ae2cc9c8b5fb216"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "24f166eebab8db5c77c7ec316d7763c1"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "73ac54932312dc021105d1ceef96935f"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "b2b0349a01282e0e80ea0ecf6d552d80"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "641227c30ac5493b1eee400ca56499fe"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "afcab9df827714c13d2afcf72ecd0d78"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "aaaa037fb5851ebb298a0ffe8430d071"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "2711860ec067920971d09fbb61f9ec1e"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "9c5e1e0075a2f06371e6f5d93af1c7a2"
  },
  {
    "url": "interview/html/index.html",
    "revision": "2787f67254a3579fc3e3590497ac0bf2"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "fa7ed456e52b225270fc7da5ecd5fc2c"
  },
  {
    "url": "interview/http/index.html",
    "revision": "8279bdbdcf2b85054d9b6b92bcac4e20"
  },
  {
    "url": "interview/index.html",
    "revision": "10be0048f42f1253a2a5e8d1f5804ce8"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "aef53d73007d6e949316d2f564c6243e"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "b7a0706ffa7a31464d71d8dcfb3d414b"
  },
  {
    "url": "interview/js/index.html",
    "revision": "d5b60c3b0f925669d5d3ac05460d941a"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "d1ac28c5490814c653d691a76dd2414d"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "1cf11ce8a880e8230b6707aecfeef322"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "01b5aec9bf42e373ed046aedd508212b"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "ace308574ec4c60c6b98c53e99e97f74"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "6a666321d3f9f9e7aa1508dbf767b62f"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "62c49691c3a4f4a9a525d21486df08ee"
  },
  {
    "url": "interview/node/index.html",
    "revision": "58e19f18b1f09b18abfa5e87606827f2"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "91240246299c44527f2b8589838fcc0e"
  },
  {
    "url": "interview/react/index.html",
    "revision": "d8f66affe7a05243b237005b3ca9299f"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "8a041e5ae1106fc9a2e6252a2afe667e"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "5917bcc6b4725d4fd176eddf7335a6f9"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "a747254281880b09bc6341cedb9f6c95"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "6bd97eb71f964d26c25ca26de560927e"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "667599c950fcb1db6e5ff7e0ee51a5db"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "994c432902d02acee554decb4ad29b08"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "ef123ec7ab22dd35ea673374dc3a4703"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "50bf585dcd2ba03a7d862fe5cf70962a"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "6cad42f6e97b334dc6bd1077514a5952"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "f36c57a98d0d6412200bb11b5c387cb4"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "abd3bccabeb39ba77578c59a1e63b9e2"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "aa41b5267a2aea43d8e68434a0b75dda"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "24225e932439009302bc4630b372cc79"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "62135f700d91a5bcfb8c76df6846c90c"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "563994a4e36452f0558d5b8a90b45e09"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "01da248b33217bfe19aa65ce93fa20ab"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "0c4a89e23593d59f01629b84fcb950f1"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "eadee6164aa3b85e4fafe523cd6c39d6"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "cb9fbd971d3ba3348af9a664aa04189a"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "19a2f30250fb5db33acc26b2694714ea"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "cc1414d20e53739a0c6310396177367e"
  },
  {
    "url": "math/index.html",
    "revision": "5899225b7761e480b9b6de44b3e9a404"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "ff677c1c4f940ff337cea9fefe923324"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "6f8628b946502313309a2bdc6c9ed4c5"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "b6d2d7e36b279098ebdaea78ef2b9f79"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "114c25b0c19e3e76a17b79f808bc7521"
  },
  {
    "url": "math/low/index.html",
    "revision": "02e17e6deb2a03a4d0202bcf52ac3c65"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "588e577096bcef9016434e071decc8db"
  },
  {
    "url": "math/mid/index.html",
    "revision": "ef074d6a30e3757420b4e0b7888c80de"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "077a5fa1f9e436e536213c940bc9b947"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "adf78acfbee0dc292e9b3a1a14664f0a"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "eab6390c1a5171098c9caa0eea5544eb"
  },
  {
    "url": "wechat/index.html",
    "revision": "4d96df33b9573c4ed3d4c490b627a8aa"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "67c1a3175a6f83f0c7b4b086a343206e"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "9e6748fc0832e0f39f4892a0f1dc88c7"
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
