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
    "revision": "694ad6f21b4ac5bf28a1a73dd297a74f"
  },
  {
    "url": "about/about.html",
    "revision": "d78e66cd42bb662079d71db65b2fd854"
  },
  {
    "url": "about/index.html",
    "revision": "284c83c3f10ecf859b57767ffc7ec400"
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
    "url": "assets/js/22.c57f9e8a.js",
    "revision": "d959286f55fa02be07695cf18973eddb"
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
    "url": "assets/js/26.0711698d.js",
    "revision": "bd972c20cbd1c3c5cf510ad2709dbfef"
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
    "url": "assets/js/3.9f4d73bc.js",
    "revision": "789307a95064e4e3ec7880120321ff45"
  },
  {
    "url": "assets/js/30.6d7e8ffb.js",
    "revision": "7ffa8f67611e97e85a1c1bbbb17b5f11"
  },
  {
    "url": "assets/js/31.4464af93.js",
    "revision": "fc40e162589e01626cecbffe942ae0d0"
  },
  {
    "url": "assets/js/32.8db57cd8.js",
    "revision": "dd5354818f0b23d617ce60d8d3b60927"
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
    "url": "assets/js/36.0b6ba480.js",
    "revision": "429b73e9f3bd8898453cfe112f161031"
  },
  {
    "url": "assets/js/37.8f1964b2.js",
    "revision": "44673bc820aaa92104fccf185e0563c7"
  },
  {
    "url": "assets/js/38.9cc10634.js",
    "revision": "78727a9f20ae14807350b5dde91dcfe5"
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
    "url": "assets/js/43.59fd9467.js",
    "revision": "812971ba8e6fe5a721ab7d3b411b9ba0"
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
    "url": "assets/js/47.9220fe9b.js",
    "revision": "30eac740f07df8eef2d1814d025f4d51"
  },
  {
    "url": "assets/js/48.1ab7a676.js",
    "revision": "fe99ff3649e32d3ca604a25dc5c455f7"
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
    "url": "assets/js/50.e7a6b10f.js",
    "revision": "101c19c48eac51517240352fdc31ae4f"
  },
  {
    "url": "assets/js/51.6cda0830.js",
    "revision": "46c1704a4dbbe1a3a7a6b7f0d34dffb8"
  },
  {
    "url": "assets/js/52.0d05bf1b.js",
    "revision": "9e285c1ec4ec887dc892f7fadfde85d5"
  },
  {
    "url": "assets/js/53.eebe35d4.js",
    "revision": "7c634ae277135cca9ac95a7d4983bbf7"
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
    "url": "assets/js/66.8a110c0a.js",
    "revision": "2be0994054cbdb0b4e13c3c750007c27"
  },
  {
    "url": "assets/js/67.73736b11.js",
    "revision": "9c581030ada780d4ad00fce6e138f3c6"
  },
  {
    "url": "assets/js/68.c3a40f4e.js",
    "revision": "3f07f48a1c3a8dbf5249b4d2a8ce9e96"
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
    "url": "assets/js/72.fb5037a7.js",
    "revision": "778b6074589ee78f2cf984b30990ea3c"
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
    "url": "assets/js/76.c006b218.js",
    "revision": "a0854a3cfb328af03e3f88c7d504ee66"
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
    "url": "assets/js/9.b95573e9.js",
    "revision": "bbae3c3ffd594475d6fa693ff2b25e56"
  },
  {
    "url": "assets/js/app.67303ce4.js",
    "revision": "649116219e570d458e0e3318161e34b7"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "18f28abb9719464a6097a8c1f6f0d668"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "2d4875411eae72949b20416b97107a1c"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "5eb61f9519556ebd191c915becc58b5a"
  },
  {
    "url": "fontend/index.html",
    "revision": "8c0d29f8294acb88225f8790534eae97"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "ebf63ca8380f8b70ecdb38d6bd79ef22"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "b10408baf0b4c350313bdc2fae47ed1c"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "e4454e41f9182833bd30e3c1d3189662"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "abf3fce23133b6f1750547c6fc3c17d8"
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
    "revision": "3a5671c1393248036eb4b750293cd97a"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "a2ff70403cb259b90f5e686717d1c118"
  },
  {
    "url": "interview/css/index.html",
    "revision": "cfc3a9cfe801d36cae0e72bf7c145e44"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "3c0928eccb14db8dd1a55e5cdbddd217"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "291fa646bf3e8ee2e8ef3af5b90dbd20"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "e2e3d0921826930e44f46399e5222c42"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "231cab3ebef9e2c4fd43c8e1f8895df9"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "aa943c595b9e3fc4280653a14612c4ef"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "88b9898b345c240eb6bf2a5b2f9b0369"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "e825ba3a4d005a872606ab8e3a5934e0"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "241fe124940eaeb6d5094a68561f17dd"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "65690773c96ac6e81f0985da113be248"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "adfc66db7e9f1b95988d9a299cd5cc15"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "c56f95fe65a096392ed95e5ab2c9ca7c"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "dd8b6242b4c84972c5021bb61fc953ed"
  },
  {
    "url": "interview/html/index.html",
    "revision": "ea8d6aabfe638e952297852faf77d998"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "8f4fe8451825c965fed432b135a189a3"
  },
  {
    "url": "interview/http/index.html",
    "revision": "ce534485dbbf19148c6aa46d649eb22f"
  },
  {
    "url": "interview/index.html",
    "revision": "b70b0552a1e20041931266c71a6edc6a"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "c9be64bc5af0564be088ac2adf9b0cf8"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "e6e160b912f7d13e375ce692a422df76"
  },
  {
    "url": "interview/js/index.html",
    "revision": "7fedbfb7e0bd523255cab0f92bc51d21"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "d8b99536c62a70d3d3d05d2593e499fa"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "d2bfe809e8995f1f7be389e904ba8ad1"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "65ac1207613088840cbd9f211c8b6327"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "455bce3b005ef13853c9bf4e702ce3ff"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "f519f374fd16566d19b0ce765c164205"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "17e5a0103b7b6f94213d34ce1e8d282a"
  },
  {
    "url": "interview/node/index.html",
    "revision": "2cbb8a0c3cae4253146cd95969920a85"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "d9f0397611302493c071c61c32c6537b"
  },
  {
    "url": "interview/react/index.html",
    "revision": "36cdae1b116581b459d1481182b56e94"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "7a33c212703490ef0ab10121b0605f69"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "a3e30424bfc665089171ca5f846a138f"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "d09935f02e13908fbed4bc3b89862f9d"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "00d5cfbdb68b5cc04681e6f0a787887b"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "57fdbe60dc5c2d58a96cbd9bd718c183"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "c448811d72047b1b439d2e4af0c284bb"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "1c52130df4577f76f04f9dcdc4a84728"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "e5f3b8577c21a36f040453c54a959b93"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "ebca8c97c701658ac7570f5f3b3f6342"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "6e37b96400c72af09bf9dc7d899bf75f"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "e5fb871864fea9b7ed3bd20e27240cc2"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "f899c91a6c40bfb2a0ae7e13f417c587"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "4f99dfd14693f4078a5dde4d51925ccd"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "4e61ced6bd937898f351b8f4337aef30"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "6b2219a726fb729965dca896f7b3864e"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "efe8bd62abb348bbbcf9529637e514bb"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "195d4c2f043c1b4dfcf4e3b9d25a6974"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "475b988861bad038e56f89092ba63994"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "24a811ad388c5b387a7331b631113bf7"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "3540531d364d743ce0749baddab0d8da"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "78e0ca5c993229dd4417063744621075"
  },
  {
    "url": "math/index.html",
    "revision": "76a0b1580e86445cdb3520bcd51cec0e"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "c31dea25ca6bcb21d907a465579f17e4"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "65fb1732cb4f975530aba6d1136b2c30"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "6dd9094e2133d42a4598f13322d94e98"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "b53b4fc606e9aed662776c9fb24f3c78"
  },
  {
    "url": "math/low/index.html",
    "revision": "0526f9f0b4b7d2870bfd11f7cbc7a19b"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "eb77d546d15bf7eb01614adf8d699a8e"
  },
  {
    "url": "math/mid/index.html",
    "revision": "3dc098c11e83a2fad32ddbfb4e067781"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "a3819970aa5324478c38caf578c784b3"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "239b67aec63f7235ab1b67eb1e0ee5d5"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "d5d72f725f016061e6fdc30003751d0e"
  },
  {
    "url": "wechat/index.html",
    "revision": "86281fec1855310b151d6284962de420"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "15b5ee8eb15afe66e4816001712867e4"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "b3efb2b7ca75f1a0d3b0591e03fdafc4"
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
