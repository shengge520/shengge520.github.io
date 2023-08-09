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
    "revision": "e03a33c74bc63feff64edc4a35b3c76d"
  },
  {
    "url": "about/about.html",
    "revision": "c01d1d320c15d479d8bb08435e2c3195"
  },
  {
    "url": "about/index.html",
    "revision": "b9078e6f3b4ccaf52fff3e442f70b6cf"
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
    "url": "assets/js/15.70a6b9e3.js",
    "revision": "958eb27299ea29a0ec37f7f6d092caf8"
  },
  {
    "url": "assets/js/16.746f7e16.js",
    "revision": "d99ffe1df70e0eafc2193b6c7c128647"
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
    "url": "assets/js/22.d2715520.js",
    "revision": "4765d53bdc28fc7fe91b7b270285da81"
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
    "url": "assets/js/38.1381c1d9.js",
    "revision": "5c2c883a25f34871053570486d335f24"
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
    "url": "assets/js/40.cb002ff4.js",
    "revision": "8fee01f2a591418087758e0249f3a0fd"
  },
  {
    "url": "assets/js/41.cc02cf82.js",
    "revision": "929ce13262702aba1b9ece3bfeb90af6"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.74aae4b2.js",
    "revision": "5302653c5151b559ef1bfd3cf18e071a"
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
    "url": "assets/js/49.a5fe8b55.js",
    "revision": "60dcb6b961dddfd1c01adbbd6ed8d371"
  },
  {
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
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
    "url": "assets/js/53.c6b1350c.js",
    "revision": "9fcd306ba3c05bfb4040948db42b9f15"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.4ddb18e3.js",
    "revision": "a1126625572c61ca87d8e01c973d8c82"
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
    "url": "assets/js/9.7b6a8526.js",
    "revision": "727ad4f4bfc53cfd9fb0f4b89878d7e3"
  },
  {
    "url": "assets/js/app.7f613a8a.js",
    "revision": "d27875f57f71f0565f32664ae0416be4"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "35c3c46328145921c6e3567cf220987d"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "e98a073bd156a77e3748b2551f6781ba"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "fd38ab0e3f084a9919a9445869ea61fb"
  },
  {
    "url": "fontend/index.html",
    "revision": "b98f0786e77c593f8715263b20dee51d"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "b660a1bdf9a42d7562ea9b5da4a04009"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "5984b2d068d353d91d0e4cbfb190a8ac"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "343d7f6416169143be1cf80fb2377d32"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "1fb604a868d48a7d709f5406e3c93be5"
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
    "revision": "3dbfd1f865e80085d5baaa1de8b6447b"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "5469481c62e856bb2071ab565b5db32e"
  },
  {
    "url": "interview/css/index.html",
    "revision": "d6e8ddc73e7ff9141b5589a90102ed63"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "20823291ede531e9d090268fbe07706a"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "fd731bb4d9388a57c529173636b40dc1"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "3a177ad7770f605457ee4e2cc0631cec"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "b6ed7a93c975d549d2f03be244b85745"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "acfce810c4ccf16233d1634ee35d7389"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "a92a1eaf339eff9798fca01e2de1bb0f"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "4d18d9a13ca1a9c291b6ff9664565ffa"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "c2ecb804b38c9b74cea3cae8ef8a3318"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "9cf57cb054172babc05dd58ef11a1de5"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "f79b2f2378488fe1d18222e2b8ff854d"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "1a42b697f355a516832e3038d1162918"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "96aafc64e18f09a1a4672bfae671a6ec"
  },
  {
    "url": "interview/html/index.html",
    "revision": "f9e24cbaa885386946ef4816959f81ed"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "8677c9a5f5f01117eba895d7fd4c218f"
  },
  {
    "url": "interview/http/index.html",
    "revision": "4b66d7c1a550139c69fe56b9fdca196f"
  },
  {
    "url": "interview/index.html",
    "revision": "adedca238d6fb4e54e566128b09b4685"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "9443645af99452d73cd18ebca3a596e0"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "e49aa4a49284426d53238492f297a335"
  },
  {
    "url": "interview/js/index.html",
    "revision": "a0fd9c01fde5b956e2ba50007ed70df3"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "8176577024bb308ec8f1fe34daf92498"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "fa5e2f706a07c5d33999a0f81e2a8818"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "fb756f55cae327bb76c49029b777f00b"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "ad514d78b246a7f64248b52ffe8e75ba"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "9023089d6a8a1f273532a291fe27b7cd"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "b3b8a077419731b43d80cfc7f5881862"
  },
  {
    "url": "interview/node/index.html",
    "revision": "557cdcadb3e0af6808789415bf4ca297"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "0824388786e2ed524d6a408ce415a6b0"
  },
  {
    "url": "interview/react/index.html",
    "revision": "6b176d876769eb235ef858d72ccd0e74"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "6f019aed920893dd75a7b6403c838f4b"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "c0952e7ed901cfa2b9e1cb47a77543fc"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "f738833823ceedfa9031e345738b7a48"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "6cc5fc7b45e7789e4a129088f711f519"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "ca729cb556bfa16c439be589a4c230b3"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "2ff716f8d3a53a76777283ce253c446b"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "5c13063c1f70f8876ab0a521188b4532"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "431cbcd962f85de76f8f6b54dac677bf"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "77d518313062e1a9bf0e0f09f70aa5a1"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "dc6d5d4507944725c47ad47f778d8f64"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "73b4a90d2631464767bbd2dd5d4e7cd9"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "ad832ff3f1749cb60038f6f3afca6964"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "13a2f87979e1c38f38802e0e061564e8"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "115fbd7afcf4e555a22a0c1465a1cc0f"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "f6dd9b1fa5937754c6050b329e4af050"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "976cc8af0af0f1cee13c065892b12742"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "3f77de07f44a5cb68e97309b6b466ce9"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "accb1725c7f8a5fcfc5d81da2b127131"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "01f34c5d9400d8f04ffa0a3029681f6f"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "aa092ab9ba48383c75573388f12ff8a8"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "105abe228136a502d10b30c64127deff"
  },
  {
    "url": "math/index.html",
    "revision": "311cfe9df0f11696569ee3ef5e357e4f"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "22623b1e3157c8116d65ebb7a71ae7e7"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "34e9d49e4a2fbe4f604c66fe675b41c2"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "6a33927d10afd348a28d48d52aa657d7"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "e83af4dc1629a5950807ec3bd7c38d84"
  },
  {
    "url": "math/low/index.html",
    "revision": "325b6d8da67c3a7a39f33926565590fb"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "f2aca0239982b58c74d2c8a787721442"
  },
  {
    "url": "math/mid/index.html",
    "revision": "d97b6bb788e0f755cdfc7c47dd527485"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "df82ec6011780f1b48bafc0654d919e6"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "7d2b52ff126066b744a8d3a1bd5b2876"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "6df26d43aae31a9e57ecf00f6a8e3ffe"
  },
  {
    "url": "wechat/index.html",
    "revision": "8d33dab653db424e50cdb02d1693d6b8"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "c2817af6bf60e7c9d61018017cea79b8"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "d420946740892b6db9aa3d0921b88af3"
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
