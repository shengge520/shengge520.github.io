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
    "revision": "b5aa404812b7a7968016962cf4a3633f"
  },
  {
    "url": "about/about.html",
    "revision": "b0638c9c3a1cae2a6a81c11c5861135c"
  },
  {
    "url": "about/index.html",
    "revision": "affaff8addd5b5db82151571d0071001"
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
    "url": "assets/js/10.9881de60.js",
    "revision": "0561179b24b549cc2fae973ab96d6e29"
  },
  {
    "url": "assets/js/11.abfb500d.js",
    "revision": "97ed49051a7bfa0826bac2525efcafcb"
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
    "url": "assets/js/20.2a2e7fc2.js",
    "revision": "67baef0eebbfb0ebc31e76261668aa61"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.8b2dc226.js",
    "revision": "75fb0fe2faebafe51c0ca3b03668595a"
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
    "url": "assets/js/43.d50421ad.js",
    "revision": "ed6ddf2706c2fa224920ddfe82ec930c"
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
    "url": "assets/js/49.a3c42e88.js",
    "revision": "048a968cc9663f0bacea261f96e1e356"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.1a1855e9.js",
    "revision": "24ed6529358627cd76ae9f14f35979bb"
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
    "url": "assets/js/53.7c67aace.js",
    "revision": "ca9abb2187daeb9997d77f3dba000ac1"
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
    "url": "assets/js/app.0e92b7b5.js",
    "revision": "4a9b3575d2c1dd57b8af4d2ab4b52473"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "bd323f0c778d9dda1be97465b31146a1"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "70d4c0bf66ff82b76d0b76a85007edd8"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "73fe59573248c36be767cf8290e30882"
  },
  {
    "url": "fontend/index.html",
    "revision": "ff63c576e99b3cd247a2894facb6abab"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "abe8ec8a3263e9c523c31a50c21a2121"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "dfcc43b08ec69ab23924a49174a8815a"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "f38a4115b658649f6b0739cd3106b3d9"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "3c56cfc5ad9a23885fa13cb8003f6e3f"
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
    "revision": "0859674cee1b1a00ca4f080b666f2eba"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "d88b1c71b4eadb0a1130af71df2eca0f"
  },
  {
    "url": "interview/css/index.html",
    "revision": "1ec28c51d45756e40e8c15cde96852a9"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "754956a5338d60d58a3443c4a40c64cd"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "c327214a05b456730449ed8eb223d1e3"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "9d2dc515a04efbf3b249506fdf0ad010"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "59771a79c662334d6f58c78faafddd15"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "9f161e022f035042b6eb7cd969c92b73"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "73274e7f3361fc6507c00a37abccfbf1"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "04203d4130b1ba33bf8dac9779b9fa2e"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "b95221cb5fa66318912eda31e35ebcec"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "3ee15e1ba187ce141ec5efc740b7ec53"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "132f0fd3ec29a4df8c2add9b9651b3ec"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "0b5e915bdd20d790daf2957b733938c8"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "6ff4fef23b3340b7064cfd4bdbf5c6fe"
  },
  {
    "url": "interview/html/index.html",
    "revision": "4f21377f87b81eefaddc0f5fec5772f2"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "bfaa5727323477bf8c0f5942b5bf0a60"
  },
  {
    "url": "interview/http/index.html",
    "revision": "74e0ad505310ed462814f8dc9311e70d"
  },
  {
    "url": "interview/index.html",
    "revision": "b07ffe22d9f016b1d1458058e224b7ab"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "b209eb23d0ebadf116e2a6635ef8a73b"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "cd7328f5200bbceaeef8b59d0709c907"
  },
  {
    "url": "interview/js/index.html",
    "revision": "1b7e506a2875bb678baf5de3df08f8b9"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "5bd5d0ebece408ca543cc5eedaa81bcf"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "22fd163bb19d4ab4ad55f453862a688d"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "b1c6f818955fd67fe2ead3b2f301c453"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "1a4872b78c312bcfd19f87bda75d208c"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "0ebfd6a4335018ed34699ff98462c98a"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "c72050d6c9c4c9c031f9fcbec2eefb24"
  },
  {
    "url": "interview/node/index.html",
    "revision": "58f6789e9d7acf9d88595ff697f7d53a"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "f7ad0575169d551f23ba76aa654e41ac"
  },
  {
    "url": "interview/react/index.html",
    "revision": "50ab0bc3a2c69e5537ffee2d7add3cf5"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "f91c52944641be0164d7b0e14cdd9f39"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "38474e31e5d0215217c0f04a237da6df"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "afb85d6a4f103100e9293054703f2598"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "462838ab295f0b93f7d6df3efff9437d"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "e2012803022ce65bdaa19749d43c3877"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "0c07c785c6e57ef32fe1cbc48c167888"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "ae675b35abf23c04202c5b78ffb579b7"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "ef888a93f14f5f2c520390c302705a7d"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "7bc38687361ff0ccbd2cdb5813e7209c"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "5211350bf1772802ca9458c7d20ff2f6"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "420ddbf00bbbd85df2ef1ae00f2a848a"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "5e583395cccdfee62904ff441786e7c0"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "3f7a9ca1baadcedb443549af2907b06c"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "cf3088c01cdd6aeb08c39294de10e71c"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "beff8b4cfec6f2e1ff8dbb313307aa4c"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "496465883a60e8b205326818255e235f"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "09d39148ebf791021cea25c0b58cad6b"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "159fc892c15abc27c64ddb773da7e327"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "93de2462bac89bd580838190fd6cc66d"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "21d65a7d0d57f4c808d217c1395eedd7"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "cbd1eec4449657ddd930d46fb2074fb2"
  },
  {
    "url": "math/index.html",
    "revision": "009540c7664d6b6b12266e7a3cb04614"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "5ebf7d10877ce4eb9575f8f10bbf965f"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "f918bfc75277c872871198da7bb3405e"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "0cb124d6baf972824b03656cf724996a"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "94c731231e1eb6ba2259aeeae57d80de"
  },
  {
    "url": "math/low/index.html",
    "revision": "ac2a3dac845a4f345895f33e69229eea"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "d9eb4174d2932e84283395b7c40dd565"
  },
  {
    "url": "math/mid/index.html",
    "revision": "f149f35cb5e35e4dea9e4e770995172f"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "90b5db2fbf8ff3e4ab7533b3726d4747"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "26416c2163067468907d63ea2b00914e"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "e9b26892dafb1242d5c919f77f129c72"
  },
  {
    "url": "wechat/index.html",
    "revision": "d2bc8efd650d9519271f784a7642a485"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "91583e2278e905893435c4e6c6ec8a87"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "dc201f4da9877d1cb603f44f7d6c7321"
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
