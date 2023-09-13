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
    "revision": "4a204de7fe0c0a01c696ba6b2fdbd309"
  },
  {
    "url": "about/about.html",
    "revision": "98edfbf212a880ee559a156842a77fe3"
  },
  {
    "url": "about/index.html",
    "revision": "a1940e1cfee41db44fdb839a39b1e260"
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
    "url": "assets/js/11.7b2991bc.js",
    "revision": "83443167d54383f1b75f8fdd1de92307"
  },
  {
    "url": "assets/js/12.374f5b55.js",
    "revision": "f2744c98ec26b7a6abc41a16234fab1f"
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
    "url": "assets/js/50.2f6c83b9.js",
    "revision": "b08fa63b8f8adee16ad60cb3beec7a4e"
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
    "url": "assets/js/55.a49b93cf.js",
    "revision": "78100029dab7d66b6e4d8fb153e0f795"
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
    "url": "assets/js/76.db49177a.js",
    "revision": "3a7f9e1993783c7fc2e6219eeffee079"
  },
  {
    "url": "assets/js/77.c1ee250e.js",
    "revision": "3ec43b70706d50f95670bfb267e3db50"
  },
  {
    "url": "assets/js/78.92e66db9.js",
    "revision": "0ae4a23ff0fc4e46ed1a69ae5966eb90"
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
    "url": "assets/js/app.1e81cdb2.js",
    "revision": "51f7fc5e7071d5c036fc5c611e836662"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "82cf10472aaaf21f048841ad6f4d88df"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "290702a1cbaa0598a1b384735c096196"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "dbedf86d54f79f5a0a04fea266d63a0c"
  },
  {
    "url": "fontend/index.html",
    "revision": "db0f90b32f6f72cf2e17ce15c756b080"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "fc02e9ffafd424e1f11d8a0cc9b6b29f"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "4a39a64eb7262963f4a13e1c3e8d9a1f"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "64b37c6f3927d9499127cc0baf104500"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "2e1370893e31e98b86143c58dc128c03"
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
    "revision": "50f210a859153c1c573ddc46423d1fa6"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "1a8502074c68bab30e747b328001989f"
  },
  {
    "url": "interview/css/index.html",
    "revision": "8251512127b864ad444395f8fa45ee71"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "f5a3bac56c5c503667d4fb2b31a8e862"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "c689caf5df1f2bfd6edfa223b3656b97"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "da184f46412e45729b1a78daa047ed56"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "72ebf28e94310a84b0733f194b4cfae4"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "d38c91d143a05a53e308b69c0b95eca7"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "39f2b90a40b667ec644b5b74733f6eb1"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "8a8cefa012941f326efd2d05baee569f"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "a85d721be91afec285fa14aba6773e91"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "e425e7dfee28b067aa30f82e7143803b"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "d7d0f21dd6b59aeed799dec703956566"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "3511f9bafd53fcf5f769d81d16613baa"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "790e26502c7363fc4a461b5f84f6440e"
  },
  {
    "url": "interview/html/index.html",
    "revision": "0643062292d91fa8079e0e35ccc03c2a"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "c4f9b5636d4d1abb749e1a6691c20d4c"
  },
  {
    "url": "interview/http/index.html",
    "revision": "8967e6fc8f70fd8aec0c24847322c9c8"
  },
  {
    "url": "interview/index.html",
    "revision": "1eff9af3a15c597aad3f23ea80ecfc1c"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "8ca24612f55eb104ad57329ca212c199"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "a29b2d2e6349e08e0c8213ca811b09b7"
  },
  {
    "url": "interview/js/index.html",
    "revision": "bf6ce89ad4c34ff69fb835f1ef5c5293"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "747c45098f01707b55da162b415323f4"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "73abdfee6ef6d08f32e5d05949d76282"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "a787239e61b857289982614359105954"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "1b66824d64d2cffb2a177398412cb6ce"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "29f7958f846aebfc333896f6aa316c7e"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "aa570be6207f77a22322cbaeebfaa2b5"
  },
  {
    "url": "interview/node/index.html",
    "revision": "b5c59deba182f4e67e59b8ded2b32aa6"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "e16bdef79d081bbf59103880c4302e49"
  },
  {
    "url": "interview/react/index.html",
    "revision": "414dbaba57504954ab3e8b23e26a7902"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "5b7dbd010cc28b15bde80537d03d5acd"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "fe835e40536ebcc3c098414b3f8740b9"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "93bf24488483bdb410ed4375111a681f"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "e013cac8e728e43749bda3fd050b1c9d"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "9c4f4837c089a0e7a48632851cc47e42"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "0cb6959cd6f10e0bcbf21dffeae57b31"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "20ca2432908f95e9d140d7e7be32c3b7"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "d6ce2755b8bd9d876d927e99f758ef37"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "e1d67fa5928e51add1ca7421c9113f63"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "6a13140a3020260b838d6127b589e50c"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "a28e23edc347558f901b1c0a92ee0a90"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "fc470ab83353b120bcfa4c24adcc8a1b"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "a6b4134db5c54680c70d7f9b31f16572"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "8eaeabfecd487ab01695237d68b203e4"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "e7516e89113a754fa370d3009272aed1"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "8bf3a2cac79f40e83343357eefe42fe3"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "c090b7014841dfc44298bfbea8d80764"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "ba77592631df828f90ccd02793076b42"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "82752bbf711307642106e5cd24916880"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "c3e06091ecfc47cda4e21ae462d01fbf"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "938bcbe7364ecda766c4f154fefe8b91"
  },
  {
    "url": "math/index.html",
    "revision": "209598ad0eab1abd6d5fff64803f6a30"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "9af1c2e8dfc3746775b25e077f847af3"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "71f0a37370dcad3ce3adb9fbe39291d0"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "b01381c4f54ad99839036be53eb121c7"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "241d7c25a33a3c5a8c9ce2e8c37d63bc"
  },
  {
    "url": "math/low/index.html",
    "revision": "80a6489faab1d1300159627a0f3635f3"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "a16080d1fd5fdbbf29636639350c9520"
  },
  {
    "url": "math/mid/index.html",
    "revision": "1b6bb16ce9f060bb08c0ec5f755ae8fe"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "84307a87d30a0464fcb7d0a37972a5dd"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "0c3d27e018d638c4ef0084e74e91cd4b"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "d15b2f428afff6c8ca4fb0617f8733a6"
  },
  {
    "url": "wechat/index.html",
    "revision": "a5e377bf1fb84c3d5b3367e52530ce6c"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "a60cfcf22cb7eba68285f1d8cfa3a6e2"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "6eb17b094a08db43a52c50fcd4caa6b2"
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
