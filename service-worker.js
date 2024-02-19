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
    "revision": "6636bbea4315c60882cd0db91a6da365"
  },
  {
    "url": "about/about.html",
    "revision": "bcac1be43dfd731e9eddde4f606809cd"
  },
  {
    "url": "about/index.html",
    "revision": "5ab9b2d0461f1be94857ed3f3a54471f"
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
    "url": "assets/js/22.7efe2fe3.js",
    "revision": "1f690780eedadd1ba47504371132fe35"
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
    "url": "assets/js/3.9f4d73bc.js",
    "revision": "789307a95064e4e3ec7880120321ff45"
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
    "url": "assets/js/37.8f1964b2.js",
    "revision": "44673bc820aaa92104fccf185e0563c7"
  },
  {
    "url": "assets/js/38.9cbf2139.js",
    "revision": "9fa54943c0ed5ae06e3d149b31740575"
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
    "url": "assets/js/40.e126cc4f.js",
    "revision": "6c1a911dedb3c93048b57061dce527b6"
  },
  {
    "url": "assets/js/41.242181aa.js",
    "revision": "ef907268a91e06d38a8b46fd864caca1"
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
    "url": "assets/js/48.19ce229b.js",
    "revision": "591655dc897595b8920d4a865318ffdf"
  },
  {
    "url": "assets/js/49.d7d625f9.js",
    "revision": "5a1557d60872972d2cd8e90e81f56920"
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
    "url": "assets/js/51.6206e971.js",
    "revision": "fe4b9cf9e419b96b647e36a4a8af5d1a"
  },
  {
    "url": "assets/js/52.c42f84e8.js",
    "revision": "44fd036060391f7997f930be4f0f6332"
  },
  {
    "url": "assets/js/53.4131f176.js",
    "revision": "29656e058ae54846decd293b018292a5"
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
    "url": "assets/js/58.a6a1ae31.js",
    "revision": "4b61438be5640675ede5be75714c834b"
  },
  {
    "url": "assets/js/59.657048f4.js",
    "revision": "b19cfc11a179d7df31a2807d56829d97"
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
    "url": "assets/js/app.250fe26e.js",
    "revision": "a5a8e7f9db4faeccb2cc011d682af3a6"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "04e2aceaf5d69957ad6c1a523bd829cb"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "d58400aa34a92daca236c0966b25dc13"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "c5d66b17076e905317c6d43fc933eb6f"
  },
  {
    "url": "fontend/index.html",
    "revision": "1d2cd471dbdb9f22de5f92fd30bdea5b"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "309f840a1c7dacf14b4840ae32c8cc05"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "6409d2d94689f63d9b5c515c02b7106e"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "a4cd9fff7fd4e236f0ae77ffb3f74294"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "9109d2a2e86c5fb4cc5d88c9b4c03e1b"
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
    "revision": "a81ab10f449d78277b44b7078269f678"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "5d1bbd83c0de18e6a82bb1c083a0c086"
  },
  {
    "url": "interview/css/index.html",
    "revision": "97725487a4a9db4117ece37178b82bc9"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "f7d17e0425c162acafd769178e8e4e2d"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "663c87350db6722a6cc31f11b970fb48"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "e9eb6f64474e8de4920ab315d067b1d4"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "f8b54b27f286234e313089a6b1582824"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "b66fc8225fe0fdf13bab6c84bef85a28"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "2026c772f16a12f631ddbbfbfac7fec8"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "a9e42db05f89a5acfc1ecfd8bc1c4a13"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "b0cac8cd9301f3c36762184207747f50"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "c7ac487d9a1f94bb99a5eb2cfdedf54e"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "616013c584139546a6b0350c124717cc"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "86fc94685db40a8ec8256e419a6914f8"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "78113de3a3d9d352d42eba9b0b99c611"
  },
  {
    "url": "interview/html/index.html",
    "revision": "44101f726dac190bcbed29425b5e7d94"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "eeab12dd06c28d99e4b9dc9066850d99"
  },
  {
    "url": "interview/http/index.html",
    "revision": "becbdeb98c9d0495ca9fed45418c7a44"
  },
  {
    "url": "interview/index.html",
    "revision": "6f19a21c43771f299e674158b2ec9a14"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "9417b4e4b641f9ef6daaaf6030f21adf"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "95c7f954b351f2a1ac2cf8aca152afbe"
  },
  {
    "url": "interview/js/index.html",
    "revision": "4493a06e85613db421d40bdffb3f0d1a"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "eb91d09d524bf421ac50e93663ba354d"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "6e2f0042016318a7c2e0938fe7db9c88"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "406db67a1cd5f70bf879e096e83b5aec"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "fc8ebd586ac9cead25228d087241c78b"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "168999fc3ec51fcaa88319437c5b2915"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "d9f234746fd72fa45e7be5e5dd292cc2"
  },
  {
    "url": "interview/node/index.html",
    "revision": "7ebdd78db9a1ac69070945d65f16a382"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "59d1fb9c96f7f436c2e4b6db17ea7fb5"
  },
  {
    "url": "interview/react/index.html",
    "revision": "efd59d89c8a0b457d1acd8dc4f2d3ed2"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "b6f945463b4a248d8eb32837b44337a5"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "9273df02a436854ed36f8ce3d2e99943"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "93e0802b3b05386903457de37b1ba7e8"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "e64dc458b9b625da2634a2017785a0cc"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "f1cc5edad7334467a59cfaeaeb07fe81"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "29ff7d14c29c020d6fd5f9b00f268feb"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "ccec1b28edfd778af441d41b6d702613"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "275d8d682bea17bebac11185c91bf576"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "620007aa7660538291d467d522d5c985"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "41ee5fc00b2385a61e67da17363787de"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "f9a07610f36d98014deeb21a1720c791"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "54f2843f56871868a51024dcfd2aa080"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "6eda2bffd4709c84be4060045e4a7721"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "8e293184166d2ac2727cdd603131559f"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "aec800a5532fc4f5135cf7d6fcd1565d"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "59f1e825b0858e4de5cdfdce62a37503"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "51b3a39d99643e6f9fdd8fee10d86b92"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "4d0cbb5140c3c3b990ebb196d75eb6d3"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "b66cf48e870dd1160bca99e732497f6f"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "803f3123c1bf29a90bd6e0268fa6d8f9"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "70acd7eea2c90df96fbcc650a70a6677"
  },
  {
    "url": "math/index.html",
    "revision": "eb5369b0ad511f0f9ad3f247750233e6"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "f9a5a43fee3b5d7bd80e0a961f052074"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "cd3eb3de6e03b308af088cc7ec588efc"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "8149b0932d6c31b08668493c5ae39fd1"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "69d85bd743932f62baf9a7a71a433178"
  },
  {
    "url": "math/low/index.html",
    "revision": "71c6da99323c3e5d6e49b57b854543aa"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "88c57cf9e2244cd01e30644700b16d5c"
  },
  {
    "url": "math/mid/index.html",
    "revision": "c4ba1c1251e41d1e9a42c1981ffc46f6"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "6ee5f02e5c91a01a7a862d33e3ee5810"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "73c3921ea643b16a8775a37283ab2700"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "9a83702ae86f7366cd5cc7993cbf97b0"
  },
  {
    "url": "wechat/index.html",
    "revision": "ee4cb2ae45c6a06dddc7a04701eb9824"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "6cbe23cbb854f5f2a2c5aae9bc1bcc80"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "a04c92584d4ff65e2bdc8473e669639c"
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
