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
    "revision": "e1cef2e7278f6ba5cf00ee2116705f53"
  },
  {
    "url": "about/about.html",
    "revision": "6fd3e65d7134c2331b2f12f7e6c85da0"
  },
  {
    "url": "about/index.html",
    "revision": "e18def1a9356c4e5437fecb206f5d28b"
  },
  {
    "url": "assets/css/0.styles.b2391334.css",
    "revision": "d6cb02168b0732e3e7839c2947cc9359"
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
    "url": "assets/js/11.7b2991bc.js",
    "revision": "83443167d54383f1b75f8fdd1de92307"
  },
  {
    "url": "assets/js/12.b885fc62.js",
    "revision": "82c183eba44592637880424faf2ebb84"
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
    "url": "assets/js/3.0097ae52.js",
    "revision": "2f27114d1210d6660e4fab5a333c69ab"
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
    "url": "assets/js/37.f4f76a2d.js",
    "revision": "38350022b531f45f41930265278ad8c9"
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
    "url": "assets/js/49.6a9dfcd5.js",
    "revision": "68e9c3683d243718256e92c65c971359"
  },
  {
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.33edf329.js",
    "revision": "cc2fa754a51d7eb72d14a48d9fadab5d"
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
    "url": "assets/js/53.90f2ea47.js",
    "revision": "17fb40244921a80ca7ab1b8fd8fe7d8f"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.5890f64b.js",
    "revision": "a64a9774e80e31d09ae88bffeda731e3"
  },
  {
    "url": "assets/js/56.3b108c5c.js",
    "revision": "eba9845032c9ee25549996837cca7fd0"
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
    "url": "assets/js/7.5f7fcddd.js",
    "revision": "fe5ab34006b88fb09226df2cb158835b"
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
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.c5de8215.js",
    "revision": "96737aee54d7e675189ec63867f6be0c"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "1ff44e56716b89a87912c7f17b3ba58d"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "b1e72849ede8a86db7b07fe86bf5a251"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "5f4087a7b754fff190850bd0fc853235"
  },
  {
    "url": "fontend/index.html",
    "revision": "5b88f9e779f1dd18e302e7a0a4ef9d46"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "b839e3028408fe071104c14572c0f4ce"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "dea1cd07d617b67b4b1cfe8318134470"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "e47908caf3f42d82caba88f31f9cdf5a"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "019f6bcc78a7295b0e224d7a785abb44"
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
    "revision": "6de4d48d6abb7bcacb9c92b079b51d72"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "82d16a14d4575ef3a1dd7b30c63265ff"
  },
  {
    "url": "interview/css/index.html",
    "revision": "6998a7eab2ddeec258ba5c9eb02b3c6a"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "6e19a9f8e1d940eea1025fc9176b58e7"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "fe12c19b3923aecc054c83eefceddb6f"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "676243f07dfb5ae07235e2da81cf3409"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "87959634b8f7ac99f04e9b1f026f3c33"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "ba1462abf780417067eaa4d74216f79d"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "25e24e8361467ec32e2ce5b5a73918f8"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "33c640d4653fb2a5937de4397ba33315"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "6315122494936a792f90bf2f6106c1cf"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "4d5b37bdbfd239c1cd3de185cd3c5443"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "d43af34dc8297a004e37347da4372500"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "d1b6f8f2eeb4dd22397dd62201e2b8ef"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "1a1f3a6de5548e29f6f3c079d2635b32"
  },
  {
    "url": "interview/html/index.html",
    "revision": "01825eed15c0c67b4290bda89a59db1b"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "daff6c67b6dcf9cb4c247023171099ea"
  },
  {
    "url": "interview/http/index.html",
    "revision": "70a9aa5c447d05ed1f4cc9d209cef88b"
  },
  {
    "url": "interview/index.html",
    "revision": "46a952d4bba526e835d7a9d90f9be59b"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "f4871a2863ec2962abc98e6e8b7fc35b"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "70aeba90931c307fb9ca83bc5a5e2048"
  },
  {
    "url": "interview/js/index.html",
    "revision": "a64c3ed671bece5df51da7b8f6524a6a"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "1bdfefbfa8a0d9db3bc6950997fc0446"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "d77af88c039536bb5ecd8f92cfd20564"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "5ba41ae0d3b00b7a9ca7ffadb1baba14"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "bcbe656f33281feb9f9e19086625595a"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "69339c3a4111c516793c012873671b8b"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "49f159532e9854801bc3866a34beaf99"
  },
  {
    "url": "interview/node/index.html",
    "revision": "5df30abb828990ae775b61ac0df30acc"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "ec9bc997b6a2c1cb51a26a08ab2d3872"
  },
  {
    "url": "interview/react/index.html",
    "revision": "b838996d7c920b05fd22392f0dd7f8fe"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "bda7117d4287b6bf4db3327dab60f901"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "5ef2ffe5db69f39cebd1dc137206f3f5"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "19d4f2efbbf103d112988f46edcf8953"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "ab8c37f7b7bca04d21d49e962398fb6d"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "a0f3ae818c392d1676a004f17aac97d3"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "c2802aad682bd32a96efb58ad0ad711e"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "3d55ea925b50b0006e3b00baa9a21e52"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "f40664a7eef7ff105c16877eec168966"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "952ca1d45dfc71d789f95dc53017bb85"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "57182b7ced07d5cefa405066238c510a"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "3ab802b72577c0abb13c82b2092f4780"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "0d6760d2fe06ea7b079cbd71881ae49e"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "cce8c73eb2cb2e7f5b8c800529265d95"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "8bae1b5661abf3a2a9fdec69d7fdfc8c"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "7e6368392c7fb8fd4e335dc6b4908eb4"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "f46173fbf3591e8715cd3e410b74ee8d"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "209024763e5ad39adfafe129cb279cad"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "ea3ee221d8b3d59d22611e03eae3b304"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "ecee8db12854edea788587be57dce294"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "8935c62a4ca5095df26cc5a96d4ff44c"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "129a2548206b6c8e7a4d78d3c2c02ea1"
  },
  {
    "url": "math/index.html",
    "revision": "3cb978fcd742b19c85059c00e014dd3a"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "5512acdb8ac3edd15cb4ef62c6d95dc9"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "a9e121827216e51c9bcbcb52752e4d3b"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "0d26632ad907fbf5a3adcec7e303dbf0"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "90cc9f1e2056d61e42a8edf99eb447db"
  },
  {
    "url": "math/low/index.html",
    "revision": "0e5413cbd187054695931a01731e6553"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "0eb4590f6a1f9ddb2dbcefc04f0a4205"
  },
  {
    "url": "math/mid/index.html",
    "revision": "f627e2c279693a84580127c05c27a1db"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "de7545ecb10e7754b758f9a655c9dd96"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "6801c3f78e8c1c9b01db8dc05bb3cae6"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "cd04fbcbdfb12b2468812ce31ce99881"
  },
  {
    "url": "wechat/index.html",
    "revision": "0be5188ed29061ae2d14eafb0f432ac4"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "314c1dc43a1f30294303c433fcb11b90"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "4b3c917b32439489c67739b156a349e2"
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
