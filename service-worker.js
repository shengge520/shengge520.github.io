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
    "revision": "8945eca302ee63bd26b21de55ac5555c"
  },
  {
    "url": "about/about.html",
    "revision": "75b6e533fa3d02ea02eea592c8aecf02"
  },
  {
    "url": "about/index.html",
    "revision": "e47914873010c5d3271627b1069f77fd"
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
    "url": "assets/js/14.aa32187d.js",
    "revision": "2082877bffbe524e399de6ddc30fef9f"
  },
  {
    "url": "assets/js/15.b9c653f5.js",
    "revision": "0339a86f6047e37f7e21ef4ff31a1a97"
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
    "url": "assets/js/22.1b91bcf2.js",
    "revision": "1cd299fc836a827c8f4dc98cdba9c898"
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
    "url": "assets/js/3.b2182916.js",
    "revision": "6b6ce6524307ce42276faf5382b76dd5"
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
    "url": "assets/js/35.d80f6a2f.js",
    "revision": "73fc14c09e2dbe3572a254c5ad77f13d"
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
    "url": "assets/js/41.e13c831a.js",
    "revision": "6eda7d69b0ae44c8af975d6f990fb6ff"
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
    "url": "assets/js/47.d8afca7d.js",
    "revision": "97ffefffbe53c82f293e7d0f305954a8"
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
    "url": "assets/js/50.d03faec7.js",
    "revision": "966206c51248d16ef60a7f1455582308"
  },
  {
    "url": "assets/js/51.03aea9bc.js",
    "revision": "952490cbbfe2995d55b5e7a18eb19e6c"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.cdb79bba.js",
    "revision": "a091c497bc44665057227eeb5e05e176"
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
    "url": "assets/js/76.c006b218.js",
    "revision": "a0854a3cfb328af03e3f88c7d504ee66"
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
    "url": "assets/js/app.0f339572.js",
    "revision": "0335f47966d9305d893613f29010c164"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "fb7f74159f74a2cbadc9ef402b4f14ee"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "18b027eab9bec9237dfd4cbf85635a0e"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "237d8f8eb1e8a3e63ea6d73609a58a5a"
  },
  {
    "url": "fontend/index.html",
    "revision": "4c3f4aa4ba0c19e61e0521f69cf187fc"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "e9efdc69b89c99940bfe8774a400472d"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "4aa1dd68932d8d5d9f42e92e279d5aef"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "f44c0d61d598a0b5d1fdc993cd1e809c"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "01e03f76c99e849fe4f31439fec71a9d"
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
    "revision": "2a8b6dfc23b382d78000914896b04f73"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "660f055e7c641e97f309c378564955e5"
  },
  {
    "url": "interview/css/index.html",
    "revision": "9a01092c926a0a7929d1e22608a3f029"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "bc96b6742a3056668cd2c6f11b4cf127"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "131b9e51628c628461cbff72456b962a"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "e87b34fb4baf6964a2951036ab55536f"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "2caefac87c0db0bc2e5019db04e3cbd5"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "6f192cdd33d7a83c32e68631cff976c6"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "6d0ad8f4dca09f99f80e07adeec82bf4"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "e3e5e40727680e3042f07f79e2c36539"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "f0951cd9009479c6b056860c6275f315"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "f1b6a84afc82f65b230a0d81201bf3c3"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "6cd5969185ee5184630d29289bf88928"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "42529019c519f63897f5a593826244cc"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "a218c9999cc96abc1bb45f39eaf7e23e"
  },
  {
    "url": "interview/html/index.html",
    "revision": "26a309d5f11ec5fcad0710571c05dec1"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "60f401d375296d2f2370156ab0af86b3"
  },
  {
    "url": "interview/http/index.html",
    "revision": "1e98b02f6cdaf50b60dd8c21882a2ae5"
  },
  {
    "url": "interview/index.html",
    "revision": "192028988737d95c1937aae03c17b50c"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "013a423ae409452ef2ddf16f565c1ca4"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "f11ff1c1db7c82550e1b502eab2efe7c"
  },
  {
    "url": "interview/js/index.html",
    "revision": "20fc3ab7e58c303604ec996984744e22"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "dffc5ccc1ac10245ca9349413c8feb2e"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "c2871f106139d07c3b54511b8dd9e48f"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "5395901c1f541d6b513c217c7dcaf563"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "14bb8167028cbc2b8abb5aff3398c46b"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "cd7cf869025d10010aeec0fc08918a1c"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "a99f99c972cbd6253ef988add84e552d"
  },
  {
    "url": "interview/node/index.html",
    "revision": "01397bfa1cc155cd394a926366a2e5fc"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "9312117c77a93b3b47e48130b574b1c7"
  },
  {
    "url": "interview/react/index.html",
    "revision": "e2bc91a5427d1ea8b68f413173ceee44"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "285262706c6e4bece20c439b80fa75ee"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "18c57f613df719b5eb5cca2b65918ecf"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "63fb87c92d23cf9d1fcb73c94bdbd9ef"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "729da89020246281ae8858ef070b2457"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "62025522ac565b8e49f0a2ff63578456"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "32c26b6970c0aa315ddb6593e92bdb1d"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "0129cdfdcf30cdbf838866372de95b9a"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "e7886fa54d3b1513bc9d979fe457c42b"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "6ff5db25080cf69593009004171a85cd"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "f6c235cdc1db50743054d9f1b55018cb"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "f78b6ed8bb1a414e499bcadacb2cccf0"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "ca40dd801ec51ee1343381c920c50edf"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "1a7a99512e9f82969c42c58b20401356"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "c4120c38acf36af8f415f409cb5c46e2"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "a3d0f903922d8ae91c93f4db303f03c4"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "d36aa6926f0de57502f493629c077ff1"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "cb2aad8e8c661bbf2293a74fce3819a3"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "8f2d117878b7eea9cd3b6b59a748a400"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "bb897b05103ae16b8f16c813208e8cae"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "fdc9bd9108ca293987efc981d564293b"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "58e5642a22c04952eb94166228cd4806"
  },
  {
    "url": "math/index.html",
    "revision": "4a1e17345918affaacaa003ecff15140"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "31043da16c13b55c5d9527f05b249e38"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "ac8ed210560b37ff7c18bc83b2248a7b"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "7dd4caa26cb3aec77d14684985fa33b4"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "c536212bedb02171c1155d1f2fdc57bd"
  },
  {
    "url": "math/low/index.html",
    "revision": "d4e9746e1571d86e2a7df8a1ce8385cb"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "7523582d1e09ab8fdb8bb839e9972f5a"
  },
  {
    "url": "math/mid/index.html",
    "revision": "66ae6bdccf59b2a46b87234b3e4d3195"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "888a05c8e180a570e3ca4884b23f914c"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "712cdaec42199732f744033f31be6333"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "c32a6d0b9d151a64f680974f4fc7c23a"
  },
  {
    "url": "wechat/index.html",
    "revision": "495ba2e2bfa6fdcc0225fedc481df5cc"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "c7ea2fd686e0836e9abd3c184a5a57bd"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "24fc3cff59fc264a40f7321593f78e06"
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
