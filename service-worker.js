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
    "revision": "effbb3f8c0fb412d7362bb1ee9fa4768"
  },
  {
    "url": "about/about.html",
    "revision": "7dbbb7b80ceb839ba262cbbe14cd188f"
  },
  {
    "url": "about/index.html",
    "revision": "77562eb8362c25dfd2227df50f91e68b"
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
    "url": "assets/js/12.22dac360.js",
    "revision": "46f092d1b139f44d69cc2ee81d3109c2"
  },
  {
    "url": "assets/js/13.a108f2e6.js",
    "revision": "bbb946597f760b6cd5935afd587ffa6e"
  },
  {
    "url": "assets/js/14.ae491d2c.js",
    "revision": "7e030c7d2ea40aa1966bf1c3a9367008"
  },
  {
    "url": "assets/js/15.b9c653f5.js",
    "revision": "0339a86f6047e37f7e21ef4ff31a1a97"
  },
  {
    "url": "assets/js/16.b6dbb589.js",
    "revision": "9269da30cecb63e0eaa561db4f1ec954"
  },
  {
    "url": "assets/js/17.22de38b4.js",
    "revision": "204429431c1ff4f316de831ff289ecb1"
  },
  {
    "url": "assets/js/18.e15fbe6a.js",
    "revision": "d5c8ae5c75f7f8b0d23ce91dd114184e"
  },
  {
    "url": "assets/js/19.980eabeb.js",
    "revision": "b9dcb59e9b25c55d43b250e3442bd74c"
  },
  {
    "url": "assets/js/2.9560d7c0.js",
    "revision": "d19b4cf833fa184340962ae0c2de72a1"
  },
  {
    "url": "assets/js/20.84bb1d14.js",
    "revision": "b7c1118b60b2556f72551ff509fff9f0"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.5481217c.js",
    "revision": "566efa0473c15c0aeaf410f53f7ae1e7"
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
    "url": "assets/js/3.704df541.js",
    "revision": "c96e238fa016f86ae9346e766251cd9e"
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
    "url": "assets/js/35.2e56a138.js",
    "revision": "13f2e4a40953d0fcd95ac97547e1ca82"
  },
  {
    "url": "assets/js/36.7a7ce9b6.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.975323ba.js",
    "revision": "7a8bb43d24b387a24c2152126eb4b98d"
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
    "url": "assets/js/41.ec2e5e03.js",
    "revision": "36642adbc70806cf1c36bccf07b35953"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.f3978e16.js",
    "revision": "991ef8871771fabdb8d86a7263ba357d"
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
    "url": "assets/js/47.615986e5.js",
    "revision": "e015593b517dd2aea8c11593c62b1736"
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
    "url": "assets/js/50.f7618694.js",
    "revision": "c6ecc9d8d5feb4d6acf29f252f2f2267"
  },
  {
    "url": "assets/js/51.d342db47.js",
    "revision": "b774a04728118eb6831b6aa8c61df88f"
  },
  {
    "url": "assets/js/52.0d05bf1b.js",
    "revision": "9e285c1ec4ec887dc892f7fadfde85d5"
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
    "url": "assets/js/55.6dcc4c45.js",
    "revision": "078b06888a853dc9ba55fc83ab4b178e"
  },
  {
    "url": "assets/js/56.108e647a.js",
    "revision": "dc3522acb04b8b9f932f2ce42a402d16"
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
    "url": "assets/js/66.70646fa8.js",
    "revision": "d2784820790e6a404c29f5242f5447f6"
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
    "url": "assets/js/9.7b6a8526.js",
    "revision": "727ad4f4bfc53cfd9fb0f4b89878d7e3"
  },
  {
    "url": "assets/js/app.7436ffa8.js",
    "revision": "6514c234570b3800a47726600179c31f"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "0d0ed0b35fe2b1b9100b03eb6b228ebb"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "8a000997efcff920c461c12392b0ae89"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "f331486039335142ff5ee6c8f350c348"
  },
  {
    "url": "fontend/index.html",
    "revision": "9981a6b08a03f87573c44a4c19a6995d"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "68f24c62ef6ddd7aa0525619bee97363"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "364d5f45b7f86b49a68c8514a9f6f589"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "1b288615d3e2dfe622d257680952bd0b"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "598e16a425862e04540e4b15950eab56"
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
    "revision": "4d565666203892fefc41ab3c879c6fb9"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "72e64d4a2c9a17821551b56fc870ec5f"
  },
  {
    "url": "interview/css/index.html",
    "revision": "935e2f73c845320a8e0247032a6895c0"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "7c1b291e08fcf0180efff23c5ed76ef8"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "9b1d12b859b9a05bf677d31ada9efaf4"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "cbeef10d1927bba112c3672fc446dd12"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "5474193c7d32b0284ef6d6eee958bea0"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "e7ff039411e16d70bcdfadcddc19c736"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "185b2fd02e9133f81fbfece320ad3ef8"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "9fceef0e121e43040476a2d283f8185b"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "bbf04c1e8c256aa3c14c42a5ecaa766c"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "ac5723403718a03d99b429673ec0a663"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "feecebedb287014e003eff360e54658d"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "228a203e1b22287413a6a6a34b553cf5"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "e608d1172a50ebd5e59962550abf98e8"
  },
  {
    "url": "interview/html/index.html",
    "revision": "83fac4c4fc037775a4968e685febec5f"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "b2b24897aaf7e834a0d03c277107c697"
  },
  {
    "url": "interview/http/index.html",
    "revision": "a725be3c41bd178ede176913a7c1b117"
  },
  {
    "url": "interview/index.html",
    "revision": "de0d129b2883712ee0940f64eaa7acb6"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "18b37774db37e59e4737c64ffcc26cc5"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "f7638173e986b1d9dbd711eb522ba802"
  },
  {
    "url": "interview/js/index.html",
    "revision": "07a254493258fb0c6085af56e89f407a"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "944af1b7c2bddc81d2d3d34b4078829e"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "7076af4af904a8d3164f8e176c97f8c2"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "d1867e21780980ecc73e49e86e0c76f2"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "bed812e7b8cb7ecdb9f7ba1bb957ebc2"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "83a31d6009ceafedcbb7b9ccb1b5dd13"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "961db6d64020ccc7aeecd00a78f114e4"
  },
  {
    "url": "interview/node/index.html",
    "revision": "244a6676ab5e3d91576609f6ea86650b"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "628acc834fe4b4a39d26f0569a6f9ec5"
  },
  {
    "url": "interview/react/index.html",
    "revision": "ed2218cb4e0760eed8b7121438d83802"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "ecce00f49b3c09fe72af5bce454625e1"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "179099c00d9df43f57f2e591653af3b7"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "ae6d7bab721f984f800d845aee5c6a49"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "a59763d7f701b98c20a1c36301d56caf"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "de5f9b4e70ad78dc97e37865b2969771"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "f1fd1937e8cc4a1952cb116af13b06fd"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "1cf47f3020c89e6aff1a6785b79f8f59"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "6023264355002b9e1c0d465d23715aaf"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "246db5dc6fa4d3d199fdbce5330faddc"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "56b07ab9d32f3ecf593525d112be845d"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "e36f78f6c56436769c3706d28eb5d467"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "15e41eb4230cc9980e2def0816bf765a"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "255d52ae26018d59420184bf93c115c4"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "294e5f797e0a6950e20005e73d30d129"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "6b8f9e0f6898319bd792d5bea3fc49cd"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "3bf45a2fdbaa29be046444499a100830"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "f62c60c29a6e91f15c2daace4e00bbf2"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "6d5c15e03c4997a43512714c900a6613"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "568d0414f842512618f266233d8ae96f"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "0e640cc548880d886f4fe30b83dc4908"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "10fb144a5a33ce37b1fa5e645f419379"
  },
  {
    "url": "math/index.html",
    "revision": "729e8b991a480ca2f9fecbb6307b34ca"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "8a8a81e7d65887750edb69bb82a28960"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "8fc8cfcb27c223262897ee09150b6e17"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "f1c646e52093b349e759e17ab47cc40d"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "8410cc58b460a05e14aa98c78b4f6807"
  },
  {
    "url": "math/low/index.html",
    "revision": "e23e35c45ca0d724a03b838f591057a6"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "043d0a8c01cdd5d0a5666ddd1128fe14"
  },
  {
    "url": "math/mid/index.html",
    "revision": "962645ca073b6447d5d96a2c869337af"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "0fd373bfce0da2bc1d6e1ece3bacddc6"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "7998976edb3cb3b33c88a24ce8bd2831"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "0d7c8fa87405652d494ce1ddde851556"
  },
  {
    "url": "wechat/index.html",
    "revision": "0f5844467fdb81643bd01a6b391432f1"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "508dc34678c57d59b908431f15925cd6"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "b522848148a46a1595a735f19680f7a8"
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
