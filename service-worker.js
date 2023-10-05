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
    "revision": "fde1b0afd7e95086c9d2b3ae085013ae"
  },
  {
    "url": "about/about.html",
    "revision": "65d8edd8475d25335bb3c0751dc341e2"
  },
  {
    "url": "about/index.html",
    "revision": "ff3044877b1bd64a3dee1143e4246bd1"
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
    "url": "assets/js/11.7b2991bc.js",
    "revision": "83443167d54383f1b75f8fdd1de92307"
  },
  {
    "url": "assets/js/12.b885fc62.js",
    "revision": "82c183eba44592637880424faf2ebb84"
  },
  {
    "url": "assets/js/13.ee1e97bd.js",
    "revision": "c846cf158f563749986009fd51afb444"
  },
  {
    "url": "assets/js/14.7413730f.js",
    "revision": "e2fe7a1577929728ddbf33138895360b"
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
    "url": "assets/js/20.7cd560c5.js",
    "revision": "e39114416fa25d39cefc229c3552824f"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.2fb70a28.js",
    "revision": "9f8d5364b013ae3c2658b26e5a589535"
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
    "url": "assets/js/49.a5fe8b55.js",
    "revision": "60dcb6b961dddfd1c01adbbd6ed8d371"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.eafdddfc.js",
    "revision": "e3e4d88288e81b00b960def89b26a4e7"
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
    "url": "assets/js/55.6dcc4c45.js",
    "revision": "078b06888a853dc9ba55fc83ab4b178e"
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
    "url": "assets/js/72.60e01c6d.js",
    "revision": "ea92ab0654d9d93dfad8f42932cebcff"
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
    "url": "assets/js/77.8ec3d3fc.js",
    "revision": "604770fb232e88a7d3f3dbf9190be96f"
  },
  {
    "url": "assets/js/78.92e66db9.js",
    "revision": "0ae4a23ff0fc4e46ed1a69ae5966eb90"
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
    "url": "assets/js/9.f80bede3.js",
    "revision": "a4f5f54220372731b20369a4799d9c6d"
  },
  {
    "url": "assets/js/app.547cb659.js",
    "revision": "1e8c0c61c40a00bfbe27d8e088927530"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "f321edcc70c94827a08be30c536b632a"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "2542d12aa4ea7c08776a4a728a90777d"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "34d3847c2aeb3d8afc826b889d74c905"
  },
  {
    "url": "fontend/index.html",
    "revision": "365ae68fbe1f753277f08fcec43293d2"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "f73f9e91463fe11add5af547f8cb6432"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "5d298994c1617bdd8e7c330f0cb7dc52"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "09378a4037148c490f07ed9d5017374e"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "ca6efcf8907437eae73a469e6eeebf5e"
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
    "revision": "c86bca650eb3e71ad24488f146d4bae9"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "1f1e4c1ae015284d7d4a899028939227"
  },
  {
    "url": "interview/css/index.html",
    "revision": "affd0a8429077e5b883332d2bf5f365d"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "62d52aacbdda24719dda4b2e39dec80b"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "90913f25747f2b7ba31e11ef76bb6176"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "d6802a5563d703d12ce387e4ab08abca"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "e08b66760fe0e601a170b61f54f9fcac"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "076c7cf196a58d90c45624c4d5120a8d"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "f9469920a47f9bae692af564e03abd0c"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "6192eaddd5d4bfcd4de3c6088ed39c91"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "790ca77c2a6c6ef3ba65f2cfdb9f206c"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "ebe6b4552248f1b6ea2d2942aad134c7"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "29462e4cf32a5d8072034909964dad7c"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "6729f5e2c2efd27b2d1c5a1b8fbcacc0"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "ff13beb4cbb5806a14e959a0ed1fb42e"
  },
  {
    "url": "interview/html/index.html",
    "revision": "46dddbabbb2abbdc86fbc03b097b2511"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "bd94f44bbd51632e1ecef9a2e25a870a"
  },
  {
    "url": "interview/http/index.html",
    "revision": "dc0c8fff770bc4a8ea636471eb28a71c"
  },
  {
    "url": "interview/index.html",
    "revision": "3a5d6e7a8f1784c508a7c4c597a54135"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "e51b2aa552d580fa9ff274b1c9d992bd"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "a819d7be31077facb3e337d2a2323f7d"
  },
  {
    "url": "interview/js/index.html",
    "revision": "de5a7c8dce966a64cda3c90f27ae73f3"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "f8f3cfbcceeeb33c7502ed8e66ea118d"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "ca81a3c27f63fe8b982c1605413b4cc9"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "6532af12192c3afddb9535501049a8f0"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "5167bd73684065c35115ba7b9edb6fd1"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "6c00ecfcc5dc6ac17930d94eec0036a5"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "61c8af14e3d3828673f85456b1487ee8"
  },
  {
    "url": "interview/node/index.html",
    "revision": "19e0c61f355b7e185dc7544fc5178f67"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "00ef4f6dc9f8913f3ab1756a2a870786"
  },
  {
    "url": "interview/react/index.html",
    "revision": "d11d1419020868a2c06db3c01ea2c6d6"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "2c027e2118a2c3b7cda899b71f55d1c9"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "5f46582a7e917c40c6a6e2b69044da3c"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "155a640637ba94d409f0b9963f8207a7"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "a65b18ab400319d68b992078cb7868a9"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "ad879153391cc81c16040f73a3efa7eb"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "d90001fdfb406f7780dca591ca11e9f4"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "956b946e2da71fbec6fe02b54985e059"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "0dabea7d6bbaa7fb80a1c7d045c1dd8c"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "a6b7605601b3cab5d0a5aa85d28d7fe3"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "160b697f8b81ae20d81f64d03c9d4fab"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "6b36942c887e9ea6e0ab919dc6b9b2c0"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "ccc1aff18198dc3d6b98c56182f28329"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "7a0070d6c867725a7b68af82eef011fc"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "ea79c068a7cd270a38d9ccc07561ecc8"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "966b601ebe11b6b1f44183315beab9e7"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "1e51c6c34144b843ee7cd704ecf1d124"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "ceadb2e1732f6c5189179b18c5812a05"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "7193cb8c503ecba98749a4ea58fbbdb0"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "12b38481e174d6e59f7272f0ce351921"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "4d054a40ee4cd2a43f13534cb123ba1d"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "8029a0517aae1ef90b46091c0d2d7970"
  },
  {
    "url": "math/index.html",
    "revision": "27a5b9669dea5c0e5727173275633af7"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "a4faf1b0c74725baa94e6c650c010cde"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "b85d0e7e0636471823d95c0b8c609b28"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "ceabae737412364ff8c2e1dd460b5812"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "d5772c1e6930272603d431847a0dcfe3"
  },
  {
    "url": "math/low/index.html",
    "revision": "00e215aacc8b9262a9414a755612d1a9"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "355d63b465f2f3c361b7603564513e37"
  },
  {
    "url": "math/mid/index.html",
    "revision": "e646e07140c2bf8fc291fb4c3bb68d1b"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "5d2ec92561c1d10fb30f7404abb1e584"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "c24b6e76c5e2d94bb4c9c328b4d2fd72"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "ae1c24a27b813c839fdbd34a2211462a"
  },
  {
    "url": "wechat/index.html",
    "revision": "26db6f1f69b6266950ff4d0bd702d610"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "a966667cd24fca3cb506f63afde932f3"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "cb4c0e96514cdc5df3f5af9f6d8c0812"
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
