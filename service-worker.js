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
    "revision": "834bd437e634dd2c1f6b73053ec1e4a1"
  },
  {
    "url": "about/about.html",
    "revision": "c1e4aeb13d6c0f62bf7d5dfdb0f7632a"
  },
  {
    "url": "about/index.html",
    "revision": "70e251d28e49ce98b0fe13e6c1d49573"
  },
  {
    "url": "assets/css/0.styles.79b87b26.css",
    "revision": "de246e796e8cec7e4cabe6200459e33d"
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
    "url": "assets/js/27.f28fbbb3.js",
    "revision": "205bf7dbb8b986d8372d4e33eb72beb0"
  },
  {
    "url": "assets/js/28.15a1dfc6.js",
    "revision": "e5a9ee7ab6a3a1891f0b26007cff8fb9"
  },
  {
    "url": "assets/js/29.b263dea7.js",
    "revision": "2e5bda7ac617404f3fe4e485500899b7"
  },
  {
    "url": "assets/js/3.555f9bd8.js",
    "revision": "ee93c69d8484aa253c5cd1e1c4b6331d"
  },
  {
    "url": "assets/js/30.014aa5a4.js",
    "revision": "a907cf02cf0b565ef0d0b2e28f56e140"
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
    "url": "assets/js/37.252a97c3.js",
    "revision": "4b3e5be9de11d6cbe0715602c6f152f8"
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
    "url": "assets/js/41.cc71054b.js",
    "revision": "8affdde0ffa7a791fcbd54f288a826c4"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.ca4d0254.js",
    "revision": "ed87eb0af6b9d898357c065271ff1a7a"
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
    "url": "assets/js/48.07e23e44.js",
    "revision": "d246120670b4dc05bd0a31734f131c37"
  },
  {
    "url": "assets/js/49.a3c42e88.js",
    "revision": "048a968cc9663f0bacea261f96e1e356"
  },
  {
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
  },
  {
    "url": "assets/js/50.1a1855e9.js",
    "revision": "24ed6529358627cd76ae9f14f35979bb"
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
    "url": "assets/js/53.274d07a4.js",
    "revision": "8b770949503a22ee66f7f94b7e4b60c1"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.79a848c1.js",
    "revision": "4c46ce9cc655d4c29f7f0758edb641df"
  },
  {
    "url": "assets/js/56.47aabd34.js",
    "revision": "86f8676b459b3b6beb5e1c3e8b22b2db"
  },
  {
    "url": "assets/js/57.29893ea7.js",
    "revision": "ed666236cc6cf2cfb9c5a2e9348597a1"
  },
  {
    "url": "assets/js/58.3dcb605e.js",
    "revision": "509ebafbaa8d1a2e1481d64dcabcbf11"
  },
  {
    "url": "assets/js/59.71a43b14.js",
    "revision": "a5c408197bc4e799c929f6f719a0ce83"
  },
  {
    "url": "assets/js/6.5e9d1b20.js",
    "revision": "626e33ee005b1d9e99e69a5b42b8713c"
  },
  {
    "url": "assets/js/60.8d4790bc.js",
    "revision": "c73e0a1f6c9e87aada6db552a594b917"
  },
  {
    "url": "assets/js/61.f2e27dbd.js",
    "revision": "51995493477c39facb4d98e4b08b02be"
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
    "url": "assets/js/64.1a53aa15.js",
    "revision": "ffe64baf92d4750511309746337e347c"
  },
  {
    "url": "assets/js/65.622f02e0.js",
    "revision": "dbc5347b25cec4d441e7e0369564c6d3"
  },
  {
    "url": "assets/js/66.48657363.js",
    "revision": "34ac68ce87be6dfa4262484137cf91de"
  },
  {
    "url": "assets/js/67.64e62117.js",
    "revision": "2da3677f8d591841cb6de3810910919b"
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
    "url": "assets/js/72.066e5ddd.js",
    "revision": "2b6d992afb993ad735f1436183e34886"
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
    "url": "assets/js/80.c5cfd611.js",
    "revision": "e2d6dac9a1888d20854348cec5179f41"
  },
  {
    "url": "assets/js/81.52352c3e.js",
    "revision": "fa4b866e0c249d39940ec71f332891c2"
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
    "url": "assets/js/app.3631fc09.js",
    "revision": "51460b70b4949f23cc280632675da87d"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "282c58c0bdce2cd16a132b6f0d6a74f3"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "d6e573aeef2e6d472d24ef578cfe5ca7"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "4ce9775e973be620dd44594421a957f1"
  },
  {
    "url": "fontend/index.html",
    "revision": "b9154e27406256d67143436372c51ba9"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "2a39f42a4476f001d01eefa500641775"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "2b458f5259575970d257ab8f77ebb9ec"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "85d0c025a91a1743591e6d8c389de8e0"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "1abc8853a6cf91088285130dd132b949"
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
    "revision": "f861be456fa9ede4f11563097f344c47"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "f216202f9ed72c0a862bf64f614f099a"
  },
  {
    "url": "interview/css/index.html",
    "revision": "7b2d3f0f1dc90bc132361b772eb82f19"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "d86fdc0c670804d08e05e44a6008823a"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "04a5bf3e7295d14c1bbd1e0deed530a3"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "ba0d7c78d9c1d9af3ef4dd0e5995ca5e"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "c23fb678674d13c8821b5ee2b25ff962"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "999a889668c6c3df628473d26e2c6225"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "20d7186f952cb686fbcb4d4ffa995c99"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "3d0613d23bb044464eac5058ddcdb9fa"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "8c64b71f49ccb527876109b7df4aa64e"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "a1f08644336e35bf22c4249178e17d4c"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "aaa761488f1d7770feb48668b826fcff"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "3c8ffc27ae4f4378208363af8cafe3ac"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "a365bd89ec828ba212037c28ced01624"
  },
  {
    "url": "interview/html/index.html",
    "revision": "f4935d29e13755cba19b7410f2a9543e"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "d6cbaeb2f220f7ef80f7fe562938673f"
  },
  {
    "url": "interview/http/index.html",
    "revision": "95f1f044c7a0583339028064c1972302"
  },
  {
    "url": "interview/index.html",
    "revision": "2440e6e6334a34af5a1e42e258c614ab"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "22859a499e8cda23af3e8d40305ec311"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "fee117bf49186468a339592a035d3523"
  },
  {
    "url": "interview/js/index.html",
    "revision": "4e9feed466ad287a110189eb402bd624"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "156c1470fbdf4ff649739e2b4ad9dac5"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "716b5071c274076b03666d7d90e999bf"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "cd188c0e40bd31951e5daeac04d74f38"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "966be3d7166149b670340410fdf2efc4"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "c55ff59b1dc63a8fe0d5ad97c19ad0ee"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "666a261775a0ab194abeb915e0784b05"
  },
  {
    "url": "interview/node/index.html",
    "revision": "2e1ec8351143782cce5880a91a8ee3e3"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "5928aacc21974470688f7bd79cf02800"
  },
  {
    "url": "interview/react/index.html",
    "revision": "4da8ac72cc699e98f912d4bb26cd07e9"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "a9e084b47c5cd17be009b9d8c772a307"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "4828af6e6da748afd65ce6349fc71e01"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "d3b9e3c623ad3bc6c9026b32e7f3154a"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "bb36c1d6d18feb65ac4902557b1fc0f0"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "00103b0a03a91dd84271e346640735b7"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "770ddb1a88e6ee1f441cf024357443d3"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "7131030c7070dbfc617cde78bfe5a3b1"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "091bff6bf7cdbff23c9cd8f885b79092"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "eda51d55dcefaceeeb4ac2f017551bab"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "be389f0c1cd6fa53d7afcbcd62d0955f"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "ab48f37ad2a3a00867a381e95a6654f0"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "dc4ea1520f8da2e67436ca6537b79cee"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "632d8fbe77f41f258cd08d74c7c5ed95"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "53bc50a0c3756ab5bbabcc6f6e2035f7"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "96df3236d86577dc4c031462656ff773"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "95619e1609eec4ed9695aca7146468e4"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "be5b1bd062c8a3dbe5d1f418dd16a09c"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "6e2c8d774a663f4b6bf40ab3d0952825"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "3367df8a4fc6a1c484f3ab0940320558"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "2b24f45b09fd7307d4249b812a228895"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "6c4975fb08eac5ac8fe137f6a756f020"
  },
  {
    "url": "math/index.html",
    "revision": "d22c33cb7bf6b28b697e03e81fa60968"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "e3d76bfef27a89a053b908a98535a30b"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "14f6191cda1077f63b6c36e828677664"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "230297f3e13aab1bf1860f35d7214eb0"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "91b2ab124567bca69d89d1acbb524c3d"
  },
  {
    "url": "math/low/index.html",
    "revision": "0762e73dadeee1aa8652c7993c339722"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "8a9952bb06738ccadeb0e672a6701b65"
  },
  {
    "url": "math/mid/index.html",
    "revision": "eee5cc796e7f2a7a2bf8420671c21186"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "9ecb4ae1a21b5114b6077e7574a1f8ac"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "d8429a85c9daa6b6315f07ade4583f53"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "728da949e7c76ca5d320955b0fbeadc2"
  },
  {
    "url": "wechat/index.html",
    "revision": "3a810632d0de0db507f82ad4daafe406"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "593cbe6db39fbaf1d9e5e32f86a12c12"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "91668e1249383f1d77c37811c45486b4"
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
