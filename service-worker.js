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
    "revision": "3116f92cd5d32c09609a4daa7613d50a"
  },
  {
    "url": "about/about.html",
    "revision": "e95df977a4c7b78484a0672716139590"
  },
  {
    "url": "about/index.html",
    "revision": "fbb89999b21264ece721269e71f081cb"
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
    "url": "assets/js/20.24c7da3d.js",
    "revision": "8c8ac9833086e60e667ee9f8e1055911"
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
    "url": "assets/js/23.a6d3f5e6.js",
    "revision": "e3f668d8a60d646570017b353f1b6eb7"
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
    "url": "assets/js/26.9b301804.js",
    "revision": "a91260d835deb792ee221b18d78ff3b4"
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
    "url": "assets/js/3.f9d6563f.js",
    "revision": "fd1f7f82270617397c69bb9a30eab6a4"
  },
  {
    "url": "assets/js/30.3f2528f2.js",
    "revision": "cc79ab5d0a2377b588bd26a3ed4687d4"
  },
  {
    "url": "assets/js/31.848ccb7b.js",
    "revision": "5c02e85dacbfaea7529f11336061b7ef"
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
    "url": "assets/js/34.81f3be47.js",
    "revision": "f11ecba8a54d7c41eddc3f7d14162288"
  },
  {
    "url": "assets/js/35.ee8a1d7b.js",
    "revision": "327223a76376b3a7ecb7c580d7dc2ebd"
  },
  {
    "url": "assets/js/36.7a7ce9b6.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.038ff15e.js",
    "revision": "8035d662d3fdd1247346db4458eae6f3"
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
    "url": "assets/js/43.31d0c374.js",
    "revision": "cf8479375e5377d3c675f44e22749415"
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
    "url": "assets/js/49.6a9dfcd5.js",
    "revision": "68e9c3683d243718256e92c65c971359"
  },
  {
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.e6a2dde5.js",
    "revision": "4fb3f121fccff19fce48c18efe3b1ef9"
  },
  {
    "url": "assets/js/51.6cda0830.js",
    "revision": "46c1704a4dbbe1a3a7a6b7f0d34dffb8"
  },
  {
    "url": "assets/js/52.6c6bc375.js",
    "revision": "2ecf2b299f12266efd38b8b21eebc7e3"
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
    "url": "assets/js/55.a49b93cf.js",
    "revision": "78100029dab7d66b6e4d8fb153e0f795"
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
    "url": "assets/js/58.a6a1ae31.js",
    "revision": "4b61438be5640675ede5be75714c834b"
  },
  {
    "url": "assets/js/59.657048f4.js",
    "revision": "b19cfc11a179d7df31a2807d56829d97"
  },
  {
    "url": "assets/js/6.5e9d1b20.js",
    "revision": "626e33ee005b1d9e99e69a5b42b8713c"
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
    "url": "assets/js/63.b4ed9255.js",
    "revision": "d7c6f56236b2977b2b77170f86146203"
  },
  {
    "url": "assets/js/64.1a53aa15.js",
    "revision": "ffe64baf92d4750511309746337e347c"
  },
  {
    "url": "assets/js/65.622f02e0.js",
    "revision": "dbc5347b25cec4d441e7e0369564c6d3"
  },
  {
    "url": "assets/js/66.defaabe5.js",
    "revision": "6bcbbe564e75a9eecab8845b0013d203"
  },
  {
    "url": "assets/js/67.64e62117.js",
    "revision": "2da3677f8d591841cb6de3810910919b"
  },
  {
    "url": "assets/js/68.a2596fa3.js",
    "revision": "83ad103bd262490c572b969eae5f5249"
  },
  {
    "url": "assets/js/69.468a7eea.js",
    "revision": "66af8346bee9c078e7b6802c4b268eb6"
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
    "url": "assets/js/74.ee93d98f.js",
    "revision": "f16db7b691d02f22dd0b9fbadff388ea"
  },
  {
    "url": "assets/js/75.fc61e731.js",
    "revision": "c2bfa4dd898636b0365cb20a859dff7b"
  },
  {
    "url": "assets/js/76.e14d9f75.js",
    "revision": "f1d9df0b1b20d751c9ea7ecade5b6299"
  },
  {
    "url": "assets/js/77.9b030405.js",
    "revision": "8cfcf28767f988010c7ebf0006354936"
  },
  {
    "url": "assets/js/78.499668cf.js",
    "revision": "a569675dc6a083a354b896d427c9577e"
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
    "url": "assets/js/82.6ed5def0.js",
    "revision": "3389d518ab2a42da76e1231a0d61746b"
  },
  {
    "url": "assets/js/83.3fa683d1.js",
    "revision": "d99b928e8361ee07491e060e9886aed0"
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
    "url": "assets/js/app.5eb18cf9.js",
    "revision": "1ab3e750d420ad411c69114c6c7b31b6"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "c09b5be6968446faadbceda7c135336e"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "5fe39c221902c9277cba886609aa39a3"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "ccf588015feb5c055fae8a8409a7ac7e"
  },
  {
    "url": "fontend/index.html",
    "revision": "7c8ac50893d1660567101997a3d1e911"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "76fcbafdf3d3820f0c5599c21b14d9ae"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "6fbf2664cf352aca4d9bd215d0659bb1"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "6176144281e135d0573f9acb53e66857"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "38d8cd4c87d06122d6b14a886c5ce88e"
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
    "revision": "0978e2667fed04cf073f19e28076d7c5"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "d542bb13cd034897af443a8faf087323"
  },
  {
    "url": "interview/css/index.html",
    "revision": "83e78448cfa9b5380603f517d1b7eaec"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "110d9a902e9766d7705c4cedb858cec6"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "e3ecc4e7cbeff83730f5f796b4755f50"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "73429825985ef751b8e868d26fc3dce6"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "ce142b68043e8566f8d6db6c2c2ed346"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "452d5277643e7b651a44ded79898bee5"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "ad2cdcfa1984c0ee366c3713cd348476"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "44c844a424d50afbf00c8aa4d7656a20"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "3f853a7865e2f3a7a5c317103e7b51c2"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "fc517a701abedf81df3f486ab7b5dc3a"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "c8d5292f3ea453fb6ce183883ca03060"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "2946fe7bc2dd85873fb0f0cedbf6aab1"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "eacc593fbfe1c5ef7926d0012063b9e6"
  },
  {
    "url": "interview/html/index.html",
    "revision": "65a6718199b574fdd4d1c90b2105e251"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "d3e3618bdab7f7f20a05bec3c56900df"
  },
  {
    "url": "interview/http/index.html",
    "revision": "8ef8846218afb7431b57357e5a1ccfc4"
  },
  {
    "url": "interview/index.html",
    "revision": "69a00c613674dcc1006e0909e4f03363"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "3e4c369879bb5bd6a6ec303c35a013e7"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "635b43f5c484016227c4420bcc68fe9a"
  },
  {
    "url": "interview/js/index.html",
    "revision": "faa335707f8e1f1de2a9a26893850605"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "47f9f0409bf524dd22a1e38a344f00d2"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "61d32d8a6935655e1da99165211b56b0"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "36ef4a96d6161c2d8a6737150e5a3a40"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "28c553dade786338b5047f777b488603"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "c35f49e660761afc49a3bf81a7a0ec07"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "1f8d208c64461dbc86b58542d5e656c6"
  },
  {
    "url": "interview/node/index.html",
    "revision": "04df35d1a799965c5e0f88f3bd603c2d"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "08ba8452d454da97f0085d0bc2060e39"
  },
  {
    "url": "interview/react/index.html",
    "revision": "e53c745bb1fe4b005dabeb6ec28dd735"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "a65a4f55405e06f19c4b1aa18c41c40d"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "39d263f1d20ececee4f9f512d9d66c21"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "07f771d4c0b5aacd302e32ca919eed6d"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "d0fdeb3e6f461fdbe1671416f7b95e2c"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "66791a2e5efef71f30779bdfb56e05c5"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "ff1707031a236e4b0c9cd946d4097ee9"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "a29cde1c8b279963bd00cacf19f6fb5b"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "f60a5e22760bf60fcc6152cded8e6420"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "77e03dc19bf14dad692f67ed80e78f2d"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "fcae713f98822309c083528eb8bbb82b"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "0817504fdb13348446856a9b55d43e27"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "004592fb60e1b9e606fa49ea606bab54"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "7ef41bc80af67c44c291da8787bed247"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "edbb6fa5f61ac2654e637982dbbfbd28"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "bd355ff070ab26d734b953565eb72073"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "131086af3c20a26a86042e142edee9fd"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "baaef5edec56518821542bf61829da8b"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "54189001bb92c431731d8f1ee111bc7b"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "0d1a356f70011daf5fb6f457981fdd80"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "fa89e62ead998c061d16e9cb1e21c3eb"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "c3360a4288b01fbd35944ce51e441a41"
  },
  {
    "url": "math/index.html",
    "revision": "ac23d1b014da984a779bdf1387fa6cd0"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "8f692053f585fe23d2a6b77b77c94244"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "fdb7c02d268fabcef289631ee65fc9e3"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "55de798613b678422186143a7230da4f"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "2808a0a5b49a6200740eb5636d2baeca"
  },
  {
    "url": "math/low/index.html",
    "revision": "4e16940d27cfb6b60e8d9136484577d5"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "289046e2fc59421cab69e67afc1de0cf"
  },
  {
    "url": "math/mid/index.html",
    "revision": "ca3533d9069f1f52b59685d9a661d677"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "c0f899448a17ac051761132c77068ec6"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "49631b0f3b020244f55982e97b6c863d"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "4447e5f1abc75573b48bc6095ed47a5c"
  },
  {
    "url": "wechat/index.html",
    "revision": "f902b30789e0289e9225e46777ab2677"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "a9d0fc69c1ec40f7189785e2ed05e149"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "42db7f542ecfe97e2fcd3bb97feb86a6"
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
