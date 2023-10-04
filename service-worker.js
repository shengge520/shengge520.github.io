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
    "revision": "debe49542daa701375fd22308508dbf3"
  },
  {
    "url": "about/about.html",
    "revision": "0c98505329c6e7c466b5f0e8b42572ee"
  },
  {
    "url": "about/index.html",
    "revision": "6ebaa28228b36d014c6d4873af5117a2"
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
    "url": "assets/js/14.47397780.js",
    "revision": "b8d64bd361bb4510ec917386575d4c33"
  },
  {
    "url": "assets/js/15.b8e4b359.js",
    "revision": "8f14ca0b88e0c56c82dbaeb804a02530"
  },
  {
    "url": "assets/js/16.3d92fce7.js",
    "revision": "2ef62e8fa903ab456bbbb69bac26234c"
  },
  {
    "url": "assets/js/17.200264fa.js",
    "revision": "a4de1b4fec261fbd58df26ee9a5ba503"
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
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.2f6c83b9.js",
    "revision": "b08fa63b8f8adee16ad60cb3beec7a4e"
  },
  {
    "url": "assets/js/51.d342db47.js",
    "revision": "b774a04728118eb6831b6aa8c61df88f"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.90f2ea47.js",
    "revision": "17fb40244921a80ca7ab1b8fd8fe7d8f"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.138b5f4f.js",
    "revision": "d5ef4635c01e21c1e5889f4b06b86583"
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
    "url": "assets/js/72.200a9c9c.js",
    "revision": "fa7461235b1f42c3d0c07dac0353cf56"
  },
  {
    "url": "assets/js/73.f4fc5316.js",
    "revision": "b9b71f4b5a5203dcc301ec56373fc4f2"
  },
  {
    "url": "assets/js/74.c79afa3d.js",
    "revision": "1eb74b3303f8eb94d5bb858d6ae57013"
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
    "url": "assets/js/78.4d1b8fe7.js",
    "revision": "be084d66d0253972db821c8195a3888f"
  },
  {
    "url": "assets/js/79.5176564a.js",
    "revision": "11828926b98297fa851ba7270d10d6aa"
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
    "url": "assets/js/81.52352c3e.js",
    "revision": "fa4b866e0c249d39940ec71f332891c2"
  },
  {
    "url": "assets/js/82.4ef67cf1.js",
    "revision": "7164ae7e3b2014e89b3c6f1b7da0b4d1"
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
    "url": "assets/js/app.6b97d177.js",
    "revision": "64bbc2ff009c624bd5a2baa0d388af2b"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "308f9811a720dbd57aa9892402b19e95"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "7cf6f0d05a806451b9728c1f4f7968fd"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "d49e636e9204e3680360246deb16b9b3"
  },
  {
    "url": "fontend/index.html",
    "revision": "efdd95bf1711045c6cc225a3ed10fc2a"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "d50d2cc3bcbc0688550e1481a6384181"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "191177dc121e7bad54ddf9cbb966562c"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "efbd7ef6f93592300f001d314d55ea5d"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "366953cfb2d9414658de934de9ca1340"
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
    "revision": "8733ddeaf8a7af253a176f3d8faba5e1"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "69f336f0446da56ffdd2190faa117b81"
  },
  {
    "url": "interview/css/index.html",
    "revision": "c53e85802931d8669814667875af9782"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "9cd3aa843f54524b90860d55275e4e62"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "2a17a5fa3fe116f4b1a6637d57a33c22"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "c1717dc831a05e03b78fcbde595ea9c8"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "38bc09c724e788161aea91c77ac257ce"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "4b51e11e5c21b139a31ef5f0992f9a10"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "4215b37fd438e000fc7459c060cfa20b"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "7a0abd0c5aaafed1f3196cfc04f4f5d3"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "3ec4ff0177be2c304e5b8a040580b95c"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "3eb138cc2e33e2da36b64c7c3b736f48"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "5bcc78b0375303654e988d38beb2ae79"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "e60a7b386afc055b48dcf3615be6387e"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "2d25786a9c031767855d349b1465ab34"
  },
  {
    "url": "interview/html/index.html",
    "revision": "d151ac6eaa7d821fc860103f955ac925"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "f0bf639dcb056e13778e192917cfd6ed"
  },
  {
    "url": "interview/http/index.html",
    "revision": "c329059d22112680b5eb1e73d83b10ba"
  },
  {
    "url": "interview/index.html",
    "revision": "77af1a51a01ece10c39f3a338db5e91a"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "3deac2e14840a4d7c5172a26b00a6adc"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "c0212465bacacbba3055154f86c1677a"
  },
  {
    "url": "interview/js/index.html",
    "revision": "1d29f3e8881e0b59d0eec3347285dfde"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "05deb17fac9392c6e5133c34faec5689"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "276ed296f581f99378eb7997782a91ca"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "3a2270410257d705c54d9685d68d1c09"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "4b83f9ff21ca012676f7cf9588b83584"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "27e802809b89479f6f800bd0ae1763f2"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "e9f0ee5bcc578da489c9dcc8447e0801"
  },
  {
    "url": "interview/node/index.html",
    "revision": "4e121b390a5f9d75903b210da4132532"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "03af6d09deb670212c1a8b716caaa020"
  },
  {
    "url": "interview/react/index.html",
    "revision": "8ebf2e0342fb9ed8a89bf58ce6f181e5"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "368dd6d9d1ed9d6ab371ce2c7a2a71e1"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "62b3d25534d68d820de6cef609709839"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "331274d26f8fe48e02bcc9d3e359d489"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "9f7a79a09364edd5856420460c13c9e6"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "425584f00cc6be09858532ca06cf3368"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "c9661393dc34957ab8ae04c4513d26b9"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "fab4ca02dcb40d6e3967f158188c0127"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "b79335f05243ea4ff2a72a4636734d0c"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "ad353e950c29b9f04bffb228c71bcfe9"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "5751b0622a8e2d21d11e0156069910f1"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "38697dbc079f3ce417c16198aa3924bb"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "676d1a018fa867a31300f8b1fe219b20"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "088fbfa1798e117ff5c3a64c0f93e94c"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "e998b4d3f51f17b857d69a17a650fce2"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "4e3b9c235ed4ae405f1d23c55421c079"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "f50e17d49736f100bea4d516793f4d03"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "c053df09b8b659aa831ad139c6dd9c30"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "efb3e3d608ffbc6c2b3ef13b30933937"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "3dbd255cabfd708f285232a87563dff7"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "37716ba34e09759cc6b7b780f713856e"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "9f6afc5832971dc095a9bba80f869b38"
  },
  {
    "url": "math/index.html",
    "revision": "fa48977722f227132e62c20568e74735"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "362529d64a5aa09c28a18b7409ede7bb"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "e30005ce12bf1090a17115ce67f116dc"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "3765d8c93da8ad4c95e2fa4895c21416"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "9db8c02f985cb8865a23a6b221502cc9"
  },
  {
    "url": "math/low/index.html",
    "revision": "6dd66190c38c253baff2c6cd4716f39a"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "3a4cf416ab2a03e583d4f88ad2339295"
  },
  {
    "url": "math/mid/index.html",
    "revision": "fe73d0d0c1fe30ca41b351e04e5ba698"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "8e931c47b8562dbe106794940fc8bc37"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "a8cd832fa0809b37f421fb5734c7669c"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "1fd9dd423fb0fc18b05282ff3eee3125"
  },
  {
    "url": "wechat/index.html",
    "revision": "7f8e419f42e452a4f0390888d6c796e2"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "8b5ef9dfc38cd1b63c363e5fa8abb58d"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "cc12efb7b6242d960c7b4b4910674d66"
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
