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
    "revision": "537c0d638b4c3d96959c72426633cfc1"
  },
  {
    "url": "about/about.html",
    "revision": "76dfb93b4fe2e96b17aca5fd7c74afe4"
  },
  {
    "url": "about/index.html",
    "revision": "919887ba6a2c89db90f673638f3ef8f6"
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
    "url": "assets/js/11.ae627b6d.js",
    "revision": "504f3c03575d50673a5fe3f1cd4f2735"
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
    "url": "assets/js/22.b0b98b0d.js",
    "revision": "bb3b5019ba29a538891bf15cf0050008"
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
    "url": "assets/js/3.997dfda8.js",
    "revision": "e99e4a123d98a95ed398ea32cf6706b6"
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
    "url": "assets/js/37.975323ba.js",
    "revision": "7a8bb43d24b387a24c2152126eb4b98d"
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
    "url": "assets/js/40.eb776c36.js",
    "revision": "37abf34508efc9af038137bbb8b4c549"
  },
  {
    "url": "assets/js/41.33fdc0e7.js",
    "revision": "507158c2619ac289c4b9837f11be7a51"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.47180755.js",
    "revision": "0e0228917a75caeadcfeb8b73ac23bd1"
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
    "url": "assets/js/49.bf1d6fd7.js",
    "revision": "e802b4d238f25049f26f32961e435bb9"
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
    "url": "assets/js/51.5d023258.js",
    "revision": "178cda8f50c1a61e672ab65f64244fe5"
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
    "url": "assets/js/55.6dcc4c45.js",
    "revision": "078b06888a853dc9ba55fc83ab4b178e"
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
    "url": "assets/js/60.d41be4b7.js",
    "revision": "8f8bd579cf5d5fe7a492bfaec533cf7a"
  },
  {
    "url": "assets/js/61.4f8c2498.js",
    "revision": "a85c1631631e71de81d26626c7de3bae"
  },
  {
    "url": "assets/js/62.5394816e.js",
    "revision": "1dcb1c15b9b4365630fc7bc1e7796cc5"
  },
  {
    "url": "assets/js/63.f142372a.js",
    "revision": "b89f95a8696dc4d5662ed8030c7f480e"
  },
  {
    "url": "assets/js/64.bcc22084.js",
    "revision": "f620a37e55c2a7afc8a564ee447a1055"
  },
  {
    "url": "assets/js/65.093928b2.js",
    "revision": "7b0dab07b77eded8d3a85247ea7ee4a7"
  },
  {
    "url": "assets/js/66.9ea267ad.js",
    "revision": "370670b1d55763e7cabc1ffe0d35ddc4"
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
    "url": "assets/js/70.f6c0e419.js",
    "revision": "70038d200715c30d64f7913d40735eae"
  },
  {
    "url": "assets/js/71.6ca9f668.js",
    "revision": "72091b89800e3d29c4e9f776f4b87193"
  },
  {
    "url": "assets/js/72.60e01c6d.js",
    "revision": "ea92ab0654d9d93dfad8f42932cebcff"
  },
  {
    "url": "assets/js/73.7dad59fa.js",
    "revision": "ef33aa7e2d52bd69129870f7276079ea"
  },
  {
    "url": "assets/js/74.ee93d98f.js",
    "revision": "f16db7b691d02f22dd0b9fbadff388ea"
  },
  {
    "url": "assets/js/75.fc61e731.js",
    "revision": "c2bfa4dd898636b0365cb20a859dff7b"
  },
  {
    "url": "assets/js/76.ff270007.js",
    "revision": "e5d084b962aba2f2c95d6361dff47d58"
  },
  {
    "url": "assets/js/77.9b030405.js",
    "revision": "8cfcf28767f988010c7ebf0006354936"
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
    "url": "assets/js/9.d2969a5f.js",
    "revision": "f555415af3aa8c3dfe62f69768ccac68"
  },
  {
    "url": "assets/js/app.3db0e2eb.js",
    "revision": "ff87ead2deb48d180fe963c0b1b745ba"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "75feac12849a7565a5a3b448a599ccc2"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "b5f995f0ae8eeb4e7241f4890c810ebe"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "14f81957f41a933203387400353369d7"
  },
  {
    "url": "fontend/index.html",
    "revision": "afee63dc5fcb1a75e91e50041518f84e"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "df52944dae5621ae276dd3d382f18f2c"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "2bfb07a52541dcad833e18c08b750ef1"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "9c9ba807cb6b405534f43e3a66e0a4bb"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "0ebf0190d0a5d99added6c79ed8119db"
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
    "revision": "8dcb8df683d63c777469b9d57f7c6ea0"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "e8e74da46c19bcbd4f7d0362a62bc474"
  },
  {
    "url": "interview/css/index.html",
    "revision": "4536d505b932ca0a60d20d8e54fc0f44"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "669a817ec3c1a653199380be1bd4cf7e"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "729e0721db78377949b188eb212d646a"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "4aa45b9f709e7c368118c29e539cc13f"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "a18c3d0989c170a3e29fd7eacde28d9c"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "807a2f3e560e1568566ce1e0605f7019"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "27643d4535f4091b0530016a256da32d"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "265be3d9071cc8a0c0bc5f7975c6463a"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "b3a891f648a5cba6e903e3fedf9475fd"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "9c094c2cd39fced839187d504eb81250"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "de03a5f28a9244b5075d1c46d7ba8503"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "c2f4565d427c3c320e997aa0d84b1ffe"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "27399a60f969ebf269e3fe7662ad21b2"
  },
  {
    "url": "interview/html/index.html",
    "revision": "eb9e631cdfc47256994e0f2a2299e1cb"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "343616b27274cda351fb69d92082c25a"
  },
  {
    "url": "interview/http/index.html",
    "revision": "c3cd0816426c1d3776f54b4f007dc4a2"
  },
  {
    "url": "interview/index.html",
    "revision": "fa7f792281029455f6c158eeac37d8ad"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "2060a931b2ccd900807eff42155244b8"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "ee1f3149281c380be0f1a2f865eb0e34"
  },
  {
    "url": "interview/js/index.html",
    "revision": "2ca084e9cdadf371c4766bf5229e4d84"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "08ffeb19ccc992675af805ef98dfda3b"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "d55d0e8275ff97efb75a40cf1d012924"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "c15f7ab783163bfaf21c14d8605f8e94"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "21fdba48da12a5018f6573efc33b7206"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "5677f2f44287178c17cceca2fe383784"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "c410ad29c013e3ce2f0428ec1adc7ed1"
  },
  {
    "url": "interview/node/index.html",
    "revision": "6b905fc5424c84c5375f6751351c36df"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "58cf7c1267f1fed0b5eeff46b39ad22d"
  },
  {
    "url": "interview/react/index.html",
    "revision": "320e4705e9554b0367d58a4dbedf0f57"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "a348b282a19653aba8e83fe2d3af6943"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "502264963a99c306995d9ee7d1cc20e0"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "3124fe7a30d65ff3dadc5bda84db7295"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "7c66dba570172942ebe9e1903a31d15d"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "6d41e5e34c7784d2f6bf513044c417b8"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "edf99286ffb384883d76c7a26f76318e"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "dfc9e4a79ff970af43274937bcfa16a1"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "bdf4813ca16a56e5c06e8dd19bb238b0"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "6b557cabdc823d40031c76ca68492cd8"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "7325c87a3fa17fb6114bbb606d447d11"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "388b4bc4cd27885cd1f1b3b0ecb05d19"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "80b196d2ebf911365ec9505931aefe21"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "6b8a5b7614544faf796f958fe71037bf"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "d8fb26e8dd20ca94740c90ab363cdd05"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "8b125872f08881b2b5a1977ad4d2c51f"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "9b64e1ffdd7f0e7ccebfbe72595bac4a"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "55933381afa831561322ac7f5f338fbf"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "e7bc657823a9527bc9f7e4c3979cfcee"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "63fd1290c7d47826b474d920e0f109c6"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "6e921933ed6d86b5482d55bb87315fbb"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "a77b23d33b4cebcf32617a95af17f174"
  },
  {
    "url": "math/index.html",
    "revision": "7d87015a968a52ed8d7c4cbd5b0a5993"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "23949db9f67c7b433381a4dc94ebf5e5"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "5a61c7274aec6f0f4eb52e7badfb481d"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "c41ec5ef4fe4f493a4bfa21241fa97a1"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "3804f523c39f8ac0d9dfa401c77e3024"
  },
  {
    "url": "math/low/index.html",
    "revision": "8b88c29930f79b95424023a7f47dba53"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "1abe756060c48cb9fb3762995d33162f"
  },
  {
    "url": "math/mid/index.html",
    "revision": "5ddcdf3ce9e782c45c4713a052384b56"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "26bd3c1683a22142c89d2a8f9857fc10"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "f211aa66860da2f8d2710619a182183d"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "19d108a37b552a1c87e993ed47d624d6"
  },
  {
    "url": "wechat/index.html",
    "revision": "d57eac2a40d00b8f3188041d8b264105"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "5673fcb365f187a3cb1b9835764700ce"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "3952729bba56342c80974be4a590fb72"
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
