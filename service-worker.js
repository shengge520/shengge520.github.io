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
    "revision": "69066a3e79c457a0457ca0f304dad97c"
  },
  {
    "url": "about/about.html",
    "revision": "dc9c7f5e0db421cc50aa4b4ee55f8683"
  },
  {
    "url": "about/index.html",
    "revision": "4ce1f7f4d8baaff45e8ff4f524e6938b"
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
    "url": "assets/js/13.961227b9.js",
    "revision": "6b8afb3afc7a49b2a5db46755bf3ac4d"
  },
  {
    "url": "assets/js/14.7413730f.js",
    "revision": "e2fe7a1577929728ddbf33138895360b"
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
    "url": "assets/js/22.6afef43b.js",
    "revision": "d480a16b2fd9dd2a7d41396127fd9da0"
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
    "url": "assets/js/43.59fd9467.js",
    "revision": "812971ba8e6fe5a721ab7d3b411b9ba0"
  },
  {
    "url": "assets/js/44.d5a40010.js",
    "revision": "0c609add0ba242e066be743d96189130"
  },
  {
    "url": "assets/js/45.a4ffe794.js",
    "revision": "118d4527ce6267252c27e549b518b3f2"
  },
  {
    "url": "assets/js/46.6a9cc358.js",
    "revision": "4ca4d381ab5ff9830bb77942d7649bf3"
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
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.44505132.js",
    "revision": "08ff40a4cbe9b08a456e7a8c09e59e4b"
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
    "url": "assets/js/53.d98e947f.js",
    "revision": "f9551c80f8ef25999f3124ee96ec6022"
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
    "url": "assets/js/60.d41be4b7.js",
    "revision": "8f8bd579cf5d5fe7a492bfaec533cf7a"
  },
  {
    "url": "assets/js/61.4f8c2498.js",
    "revision": "a85c1631631e71de81d26626c7de3bae"
  },
  {
    "url": "assets/js/62.4f309424.js",
    "revision": "f77272f39482fada28624fd1cce71698"
  },
  {
    "url": "assets/js/63.c5c92a28.js",
    "revision": "3f58130d4c80646688e615bf739f6e49"
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
    "url": "assets/js/app.4e32d25d.js",
    "revision": "25132db8ccf39443b0829496e0f49e41"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "d3eca8bd95123422b19817aa17fe4857"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "00b9e91a95fd6b7c7c7586063bd6671f"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "dfcf81be837fa088d5e0393ba2684ead"
  },
  {
    "url": "fontend/index.html",
    "revision": "2c3d822d7ba59a740c832f36d5f6d4ba"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "a4d13274038cbbd0ca556c301577b826"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "4e9262083e1f47f8f40adbb24a5f12e7"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "b036a3df80009f897297cb1dfc6ce4c5"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "ae479e9222ac5eba82586de1e72569a8"
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
    "revision": "3559ed44ac2bbe554b62a38eab100422"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "dcb6ec3d46348ecb83321d7519a47dd3"
  },
  {
    "url": "interview/css/index.html",
    "revision": "ad60e29240d1249ec806691d13bbe5fb"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "66c47eacb2df32280ddce860e73d66b6"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "41d177d163f22c976c8c1cb7d20e1531"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "8975a110633caa7838dc30b01320d2c7"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "20316f4f39dfa220cb348a713f9eed81"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "8b1d460ce7fd997e671c22f8c680b118"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "783580c84ee91e4eb6ca8048f7e324da"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "f91a5489e923798890cd6a1763099f58"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "9a775ae0bcf64e84b8b6d16d6f34fc04"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "d187b8e7cc0a2fac80b900f32de4f3fa"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "aee88ca8c009b0ab2ca4e9c1cdc3610c"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "2076a983c686a3eed3d7a20f13be340c"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "9aa22beccef640cc9830e18616641ac6"
  },
  {
    "url": "interview/html/index.html",
    "revision": "0f92d6ce5606fdbeac9e5a7b5186a23e"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "7f04b9e71509a9e60ae19ce92e8600d4"
  },
  {
    "url": "interview/http/index.html",
    "revision": "01bf4e693608de2a9b99e7daf9624c3c"
  },
  {
    "url": "interview/index.html",
    "revision": "80401604248fbd9cd3821fa50d9468e1"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "774604ca9e3b3f87d057ff70dcef6e37"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "87e879a7add45d2025782466c5dec7ac"
  },
  {
    "url": "interview/js/index.html",
    "revision": "c1c5865267ed876cfb109cc740c0735d"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "8dbf41931e815cc4c699c8b633b8f887"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "b551141901bec43b5214c49c7aa7b302"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "2eac3f67574d6c4e7b48f2b14acc499c"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "4a7bd3203aa32efaa0f3f2104265b3b4"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "9c7c085081d533b83da2f647a0b91363"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "3c9faf5c4fe49cc0199f380a00aa7f6b"
  },
  {
    "url": "interview/node/index.html",
    "revision": "5e617d927e424378603c849b202e0b64"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "0699d7e4a8a86a233bd7e6d9490b2115"
  },
  {
    "url": "interview/react/index.html",
    "revision": "6729f87eaa25dd1aa8f729870e70e5b5"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "af3cedfec40309afdd941b855216450b"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "7f1f7b121fdec7ef3549586161baee60"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "4e45b3ab6967fdc3e457ead41362fb87"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "3aeba6c8fcefe97f895dc4996f8c730a"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "ba75869cfd2e752e85ca0ad55247055e"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "a7a3bc474241d1132e98be2bc5b88a0a"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "91681659a29a454745606c6ea4a14eec"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "b5124665e6b87acc068636ba53c5494f"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "6d4a4e2ebde7d5b557b0f6c426fce5ca"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "69b8b3dbfb07c7b411faddce63150977"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "5eb839fdf4f319167910b35967ca15ad"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "a2b86d7b6aed69c32b0516748b5d8471"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "7758eb1652b6c6be0f591363fbe34ea6"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "be124c6ca53d6101daa2066d0f2ad561"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "c0945e94c2d5a1225f7a0a12e5aa6d15"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "e6b246b976da4b458663cf1fd6eaceaf"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "14e29180dca0469ca3c124bb82477186"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "206d51b97fb3a8c0c474cd7afe7c4f3e"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "b41fb911892b8be1e878223555cdeb5a"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "de5b61aba2ef3aaabe3032c940bd8cd4"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "834267d4237484a8da02ad2ced9fe9d7"
  },
  {
    "url": "math/index.html",
    "revision": "db9c672c524e1ce4e8a36af9655ffdba"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "9883500b63566de46d7ff6fa6780ce43"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "e4abcafad1af8dc7a7fdb702b530cda1"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "1d92d6a288c563153f9caa4b36fb1a50"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "20f2e2c525fb787b52175d5abc84b80f"
  },
  {
    "url": "math/low/index.html",
    "revision": "d109c4cdf973653895d78d0143b28483"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "7b6b541638c2cd2ede84c7a5e9ee5f55"
  },
  {
    "url": "math/mid/index.html",
    "revision": "d947de798274143449250f271273982a"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "ebf7e9be8333722aa974e103cfd3ebc5"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "7e08fdc9796792af193eb181858f611b"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "3813819161660771c4e8addfc8845a56"
  },
  {
    "url": "wechat/index.html",
    "revision": "80c8cc4351d7fcd438cacc190b692ded"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "6bd94e9c117a8193ac585e948dd1ae99"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "7ad55c9c43796b7a7ebb6fe5d4549956"
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
