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
    "revision": "bfe8aec82de209307e677ae3d3150eca"
  },
  {
    "url": "about/about.html",
    "revision": "0720d703682600483b487ad8da66a4ea"
  },
  {
    "url": "about/index.html",
    "revision": "9f6d4e91551650b42501515acd8eb8bf"
  },
  {
    "url": "assets/css/0.styles.79b87b26.css",
    "revision": "de246e796e8cec7e4cabe6200459e33d"
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
    "url": "assets/js/13.961227b9.js",
    "revision": "6b8afb3afc7a49b2a5db46755bf3ac4d"
  },
  {
    "url": "assets/js/14.7413730f.js",
    "revision": "e2fe7a1577929728ddbf33138895360b"
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
    "url": "assets/js/43.29c7963a.js",
    "revision": "bd42009c653eec39844d62a5c31274e3"
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
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
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
    "url": "assets/js/53.a2536742.js",
    "revision": "444baeac84dd570f627679a21ca5e0d9"
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
    "url": "assets/js/6.5e9d1b20.js",
    "revision": "626e33ee005b1d9e99e69a5b42b8713c"
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
    "url": "assets/js/76.e14d9f75.js",
    "revision": "f1d9df0b1b20d751c9ea7ecade5b6299"
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
    "url": "assets/js/app.cadb705f.js",
    "revision": "90705bc7fc70bad2ebfcdd04f334a469"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "030e068d245eb2e3b0a040251f8a8b60"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "c6c5046d6af5b8580dbbb9863c36d934"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "6758522cc2b09c02dc5f54985465ef27"
  },
  {
    "url": "fontend/index.html",
    "revision": "379f06aa00f72b3831ec537695a4709c"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "8991edfb2d64cd9c1e73926378dd5e62"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "a178a9f16738b5c5b4f0df9f71619842"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "6ba40e58ca4dbdf0da942710a18ecbbc"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "83a00d42c59755a31353ac58afcd8d2a"
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
    "revision": "8e4584d76fc99d7575e4c0ec394b88a8"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "ff3d7f00e0ffcef44001685841049aaf"
  },
  {
    "url": "interview/css/index.html",
    "revision": "c9f138d9c7ad6b2e472367fa1aec9e2f"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "194751a33fec9c356888174ec43009a9"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "dcb01fc2663b45d70500b7db1a640ed7"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "1cb01f7b319d30ca9a5a35c044b75f0e"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "50291a5cf3393c64594eb83a84cad6fb"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "88005a5ac66a4040cb19d5661d0f1ac3"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "dfb79e926a177ba6d5cba13ed45d4605"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "c2a7b5c4f999c31105b3ae2427cc283f"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "2004b7f19ea3b21f523a89fb810730f6"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "666416399733af2e45c84d7daa71dd96"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "0dfc50557bfea8b92daffb86afb9a1fa"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "067cf961d052c91fd3bf6c5ad6b2a023"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "ae3c063004d27da6b8d839e84cc6f063"
  },
  {
    "url": "interview/html/index.html",
    "revision": "7c12d3a31f49ba8f25d889601d527158"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "ef769f00d457b3c8eb1d8f376d398d98"
  },
  {
    "url": "interview/http/index.html",
    "revision": "4613aaa3c819c30639f70aa9afb6aa1e"
  },
  {
    "url": "interview/index.html",
    "revision": "6dda577f987bc62c793a1237f08d455a"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "0e3deffb4d779253146ac57df2466616"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "d1f95dbb6917aa1d736cdf90edfac77c"
  },
  {
    "url": "interview/js/index.html",
    "revision": "5d04f87166d2c32cbb186908f6105142"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "00ad0f5ea2a1ccb040e10f5b2c02442e"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "0e82564b106bd8e98c80f259b7b4a6c8"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "6583a778db7e666f9ab37da2820cd0a6"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "c60af35e47fe0b9a535cf138357cd94c"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "c1f4273e16b9ab768b32cd02ee1352e7"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "2cd16310da694f4dff7d90459510c9df"
  },
  {
    "url": "interview/node/index.html",
    "revision": "58311aae0fd5575145fdafea55deca95"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "abd3ed88ea28752714b8e73110f0e07d"
  },
  {
    "url": "interview/react/index.html",
    "revision": "775ee64a08b073f021f490b192f6d42b"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "e0ae729d50498c80488d1553fecf73f0"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "4ca92bb29f0f208363c91e33a6abb7d6"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "3a8a29ff090ccf82d33b9f8ef8cdc50e"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "6bf72cdecb6588b2b6c59f5a11443934"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "574161d89d6c92d191dcbb8cb1fafe54"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "da5d6ef15c8c528bbf18a312737a89ed"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "69d5eef5e54f4474eb7586ed9ceb94d6"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "b34398d6cca9b090f51cb39b302dcd71"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "d5a898538e65e851ebc589f94255855c"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "cb840fdd0f2912e3d0083eadac2cb673"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "421bdf5f8c1285bb3054cae37f274ed9"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "095fd88a43f6f29eb707f2df0bbf1427"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "050c1df27279ec3fd070f08a18a74e56"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "bf7d8e3612fbdd9882da7b89ed876df2"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "8c22a083e9c9f6e1964728c8fb69a179"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "9bf0151211fab8a5aa0933d5d7c4a87b"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "e3c39da7b6584d586fce539f9fd4eb1b"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "94fa4d5d575458d2b6bf921344c51be9"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "bfd3c42f36e6354a379a612e01f9f94f"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "2e62b4c2636d60aab810c40deb9e90bc"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "a08866c366ce16607e51b742e4528a16"
  },
  {
    "url": "math/index.html",
    "revision": "fd4dce3b6e735818e95d70372f81d26b"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "608e9a53a24e1c37fd08b3efdbac9ad5"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "db98ece67a50120e1023ec7ea34311b2"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "e4269412124d53d513030a1509d9a715"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "8817bcfd6062df15484318499437f508"
  },
  {
    "url": "math/low/index.html",
    "revision": "c1cfcc9b80bf980f6be3a36951a44c8d"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "fda3f52bbd743251806ca44209302690"
  },
  {
    "url": "math/mid/index.html",
    "revision": "4b84e6406b41ad61e9acd713ee07e5f3"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "505ea39bd779ddd992bf0f838590ccc1"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "cf8f05d98b9e1d3fdd07259802aa9033"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "2a867ca1cc7fe9f16acc9e9201c2f156"
  },
  {
    "url": "wechat/index.html",
    "revision": "dc91d14555651992ec8c716d9f25be71"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "0b74820bdba7bd75400c85d700d67314"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "85f706767a26ab6f6018eb96925f6640"
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
