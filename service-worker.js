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
    "revision": "a9a7e3c0c4449a3b1864a44c8549f18d"
  },
  {
    "url": "about/about.html",
    "revision": "ef7b84d07f0c783e08bcc88268adcebe"
  },
  {
    "url": "about/index.html",
    "revision": "80f97d1e64ecf4504a25a6c47ce8640e"
  },
  {
    "url": "assets/css/0.styles.84d4ba23.css",
    "revision": "75e3a3a666428e153dbfcd4e9e54554d"
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
    "url": "assets/js/3.f9c13c02.js",
    "revision": "58f4ebc95d86f123ac6489484fff4db6"
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
    "url": "assets/js/37.0296cd02.js",
    "revision": "cb3198fe905953cf24450080f0f66813"
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
    "url": "assets/js/41.e13c831a.js",
    "revision": "6eda7d69b0ae44c8af975d6f990fb6ff"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.6cfb5db7.js",
    "revision": "8b7fe73439553e63befc54b1b41707fc"
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
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.dc1ccfb0.js",
    "revision": "f54f1b0e0a2ba3f89932a562423afb2b"
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
    "url": "assets/js/55.6dcc4c45.js",
    "revision": "078b06888a853dc9ba55fc83ab4b178e"
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
    "url": "assets/js/6.43d1cec7.js",
    "revision": "cfc4424539141804cad027332b74cf6f"
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
    "url": "assets/js/7.490397ed.js",
    "revision": "9e06d3492512094717b1910f531e1689"
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
    "url": "assets/js/79.48a57366.js",
    "revision": "31175a36b4614fe889ca579d3ba6d2af"
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
    "url": "assets/js/app.fb581e4c.js",
    "revision": "67673537071ba554da563bc30f139709"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "5a4cf093a83b9c3de897a5c730e78157"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "2c10ac050e061a17428a4ad4ff4d7623"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "e603569e0e12f33d028b7e93b8bbd889"
  },
  {
    "url": "fontend/index.html",
    "revision": "929d5da5c98f46afd6f087f0820da46e"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "58a89ab0ddadae6a0d015bdc045397f7"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "006ed83c937972577c85be7c4670ab1c"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "88a1697202b8605a428ba5fcfcd7e559"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "309a522c66a796b19e5ceb41e413619d"
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
    "revision": "ba6394be3707e864b42d0de8853deeee"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "6fc7345304f4c72892b5f6869fc2a0e7"
  },
  {
    "url": "interview/css/index.html",
    "revision": "cc5c6fc254862a690ec8dd2ad04ca22d"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "e9dd6801b0f95d3b4a6a01292464702d"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "b219e3d1df9069a03966eb0c6ad836ad"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "d29a321cc708470a3aeedd57775028cd"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "4b5852b05823ac83fb2438ff760b3dcb"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "9b209979ed3a19f7f88ed3e4bd02e310"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "38eaca93fe72be06dc0a0249f93dd94a"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "5851ab2ebbb228dce7557fc3475e2e9c"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "fe4c3afac29ddfa35b1e031ea727e405"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "9583c020674ceed323e4cee8a54106a6"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "bb5f096bea2de6a0d47753dc344fa58c"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "c169bd05c1ce11a13521934845f64844"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "d14674bb735f9a51ffec4b228c0cef46"
  },
  {
    "url": "interview/html/index.html",
    "revision": "d13976289e678f46de7d201f27380faa"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "8d06b879f3c499f1fc32a136ea54cdb1"
  },
  {
    "url": "interview/http/index.html",
    "revision": "7d9916f22edbea5373b719e2b228a7d1"
  },
  {
    "url": "interview/index.html",
    "revision": "a4035dfa44a28cb5f4819c06e089edc0"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "0a5ed97c1a4e155a817360c247756189"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "d327746a39f7347bc1f39a16def990e0"
  },
  {
    "url": "interview/js/index.html",
    "revision": "e99fefe6ab56c7479fc558868539b313"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "b0cdaf0c15b1b5ed9f664b6ab4d5dafe"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "1a94a8e2e98cd429933d1012be3d2b09"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "71af7f45d2a536b6869d1ddeb5fb7d87"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "6876e5bf1f027438271ea7eaa2a41324"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "521add7dab09270fe1001b3d6dec3500"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "8af3c937a2f6a7e29c3398cf89ca0e2f"
  },
  {
    "url": "interview/node/index.html",
    "revision": "efdb7717887207f41367e6f3c3a10fee"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "f33862497ee83d92ddc959bbed7441ab"
  },
  {
    "url": "interview/react/index.html",
    "revision": "0303af16e1740764c35a5f5c4e78bb47"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "686c647215251b08bd67ba0eb41b0852"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "a3da85add62d55de37ac7183d0eb3ba9"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "bb89e0b2a2097cfeeb6c626fe8d3fcd3"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "b8104678a947078b9e18e532ee9ab6ee"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "7845404c394f74d5c1f9f609758803d0"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "b6ed8cf725aa5437945a091ed447cdb6"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "4a23b97be1bc2d5926f7c506ad25927e"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "fa9e41a8294272f3f3d22baf7adc0d84"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "8cca325a31cc75c1af6c72bb5fa07714"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "3c0932837c694ddc65efba34700d17b3"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "23a191d25308d6a293f3c55e83a93220"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "35b5620fa4e3d5ccf0b34e81a004b068"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "81a0554a7d55db16fcd8c1523e62aa03"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "1b57f5704cbf4ced233f94936d9d31d6"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "e8150252fbec0700a8aff9553c7983a3"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "666f4082ed71b5a9255680cb16548072"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "048029bdd8a898661ebe693004ba4f0f"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "add905ab7e801949c51e71cc616d7dcb"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "192af869a99445dfbcb55c1053c520c5"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "2be0b40ac7cc549e7a3b0e9a22b7d8be"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "11da4c480ab19ffe539d477f2a571cee"
  },
  {
    "url": "math/index.html",
    "revision": "4d7d194d9d9832c75f14cf78fdb96814"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "9763bc151c4bf2c80c670ca57bee9d29"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "d038ddcdbfba872660592f258de08cec"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "c78eedd757923c9aa960a4ddece2c39e"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "e19dc40f63d0077b84a7dd6768743d97"
  },
  {
    "url": "math/low/index.html",
    "revision": "3e037b315d6927deb59f9d2949f1880d"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "ddef979f39797329c005e9b87708a3ca"
  },
  {
    "url": "math/mid/index.html",
    "revision": "f4a40ec119e43fb32f39337d2512a1bc"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "52d610d9adcf21304181c211495e2f7f"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "11b37dca173f5407044b543db060bd73"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "9b342b80acd42697f64fcd0e9945ea7a"
  },
  {
    "url": "wechat/index.html",
    "revision": "45013455d2b4be18eab5e5b103d4cf64"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "2fbb150ffa08e5682537f1815fbb51fc"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "5b87a1e5afd1bf4fb4ae09ac53e0612e"
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
