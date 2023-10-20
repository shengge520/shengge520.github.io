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
    "revision": "7ea7851c0d103d14442f1e05c62b2e4a"
  },
  {
    "url": "about/about.html",
    "revision": "fc45f4d610285419e8533c7f730ddba8"
  },
  {
    "url": "about/index.html",
    "revision": "0ca59e2bb1845d91e5c6a0e39d9ad375"
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
    "url": "assets/js/10.d8413240.js",
    "revision": "474929e1a6fdc036d34c612cefc63556"
  },
  {
    "url": "assets/js/11.abfb500d.js",
    "revision": "97ed49051a7bfa0826bac2525efcafcb"
  },
  {
    "url": "assets/js/12.374f5b55.js",
    "revision": "f2744c98ec26b7a6abc41a16234fab1f"
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
    "url": "assets/js/17.06b829e2.js",
    "revision": "b43a4b88c50e23ab005938c13bc8d17d"
  },
  {
    "url": "assets/js/18.e71c274d.js",
    "revision": "444ce503b8c289822ba8099d72df1ec3"
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
    "url": "assets/js/3.724470b5.js",
    "revision": "d9a53f01e251924621b5bbb55a5fdbcd"
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
    "url": "assets/js/33.ea503839.js",
    "revision": "7f1a9f3e4663738c1dd2eeed31fd5f09"
  },
  {
    "url": "assets/js/34.636da420.js",
    "revision": "813bc0262b69d8cd1ca0f87a2433f0dc"
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
    "url": "assets/js/37.9b1cd3ac.js",
    "revision": "76012fc356d79bf5cdd0c51458ce24ae"
  },
  {
    "url": "assets/js/38.dff9c89d.js",
    "revision": "167b9ce2d9c8775a4604bb2dc641b9d7"
  },
  {
    "url": "assets/js/39.ac32316d.js",
    "revision": "b3d2f4ebfa1e7d5d144f68acf1452573"
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
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
  },
  {
    "url": "assets/js/50.b89f28f9.js",
    "revision": "91413f55b707486abf313ada59df293f"
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
    "url": "assets/js/72.200a9c9c.js",
    "revision": "fa7461235b1f42c3d0c07dac0353cf56"
  },
  {
    "url": "assets/js/73.036f2463.js",
    "revision": "bf36217250a014fec0dd949a39e1def7"
  },
  {
    "url": "assets/js/74.c79afa3d.js",
    "revision": "1eb74b3303f8eb94d5bb858d6ae57013"
  },
  {
    "url": "assets/js/75.fc61e731.js",
    "revision": "c2bfa4dd898636b0365cb20a859dff7b"
  },
  {
    "url": "assets/js/76.db49177a.js",
    "revision": "3a7f9e1993783c7fc2e6219eeffee079"
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
    "url": "assets/js/app.257f32a6.js",
    "revision": "39beecdcfa9888dcc05f318d1773089c"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "6ae25f2b5ddb73783a479663842f1c0d"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "02e45ee8f46c5c14d5b07f94261c79b9"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "3e1030ec5664e50bd89545c11b8606c6"
  },
  {
    "url": "fontend/index.html",
    "revision": "7dece2059d480b7ebfb5aba7d4fb6453"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "818399f069f9c2aa67f0d098f86685be"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "12eb9532ca94dca3e1c1ac5f21e53b19"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "04651efb0b851d5ade8fe49d07401fe5"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "78c78b077c0e889607e37aef447df7b6"
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
    "revision": "1a58ccd8804146f8cbd1185c5d993473"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "e94cab18e11c10f07a42cd526439f7bd"
  },
  {
    "url": "interview/css/index.html",
    "revision": "e0f444feb393b5726e4b84ce5f471f16"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "155a2e1a649b9f348407d8f92acabb5c"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "d8b4369ee84d19374ef4b218d2fcb684"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "050e402e8b8024c810169343a87a11d5"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "620544090fb6e450b5b583f6a8971862"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "f364ea3ed9ace866f929e80fca44d5b7"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "4821fc3b52025da44b67b70485608362"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "e435d081a1a26aac54c6ceed6888c48f"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "80860eae799a60d50ed2f9e9fe5ccbbc"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "a2bf3eb7b9fdc9c04aa7448163a37f00"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "0ea47b1585e0d1cddf98bed0f9896011"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "1226ce8de71b3c92f368eb9fdf41c70a"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "88c463ee605bee0896d6ab63fdb8c47e"
  },
  {
    "url": "interview/html/index.html",
    "revision": "ece946119a386fcf1d5941af236ddd34"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "82e8ec414dc655021ad97ef89e712adb"
  },
  {
    "url": "interview/http/index.html",
    "revision": "0b5bc79bd870122a1b24c39a872c4989"
  },
  {
    "url": "interview/index.html",
    "revision": "a1d56a9a151dc8bc6473111804165c48"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "a5c9829c0f93d2f4ab28a3f6a6a30b9d"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "c131b771a960e4ce2b893192269418ba"
  },
  {
    "url": "interview/js/index.html",
    "revision": "156e25e013d563a072a92bfcd3729699"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "2c8df875a1ad78f3aa55e673e3476bef"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "4ed90a9e31d80f8391c12c5f05c048fd"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "16d98f35b7bbac2ecf006e4779436a46"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "9355dc34ef9758cf872baf4dfa211896"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "8251057e1699cd2d0853ac7a0f7ee367"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "4b099f4309805892fa5a6c83e7c20198"
  },
  {
    "url": "interview/node/index.html",
    "revision": "c4c249b36c7dd26d6f7e83c74bb38e47"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "2eed9f7c859ce7131ee4ccb6e192bfab"
  },
  {
    "url": "interview/react/index.html",
    "revision": "3336e4b294d6b462cc5fe98f2a53b8e9"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "2d2c2f46df7c69b04917d43116207228"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "cba793a094070015d08bee89bfe34595"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "bf5c05b2d558a0bc2f93433545e395bd"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "0bce1d025c923c9e4627306a47e78187"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "88248ba93804964a6040364a51885637"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "0a24b67d0a6e25ee20c5989598a716ba"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "e465530119fa32266c968e7dc441c9fd"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "11da377646a97ca529bb7d64fd120525"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "9a49b2d379f14f7d145e651628d9f1f6"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "9eb991b0656b0a18162d0adbd9976db9"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "791c988438f56be51af508107de68dd3"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "2601a42a24625c3acfc99b9eebbca99e"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "0dbd977de61eb8e755d35fd19cd09774"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "b26fb06ffc229ba45e327303bd30546f"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "3b4598624a5cd1cf1d36675418211ebd"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "5babb676758fa0a74636fc1b40b9f00e"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "612aa4e407b232d01afc1374b0486363"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "5ae314e532a37dd6d091cd1aec57583b"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "81217aa7eccb367b338eb5d53f6f658b"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "d269edceae0dc23712882bcef119c201"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "c517a007262798a570bc9398a1ffded9"
  },
  {
    "url": "math/index.html",
    "revision": "e9c1b963f77dab54ed2f31883a447887"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "5157e30b2f1ed994d1d93ba5c57eae0d"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "95898fb793c06d7fe9e71f30e0a5c1f7"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "9facd1dffc81ca10e306891a71c53bd3"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "d786d2b92c1e26af555383312f2f50a0"
  },
  {
    "url": "math/low/index.html",
    "revision": "720706123441c304bdce6b98a3277c79"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "c9138ecd061aa93bb1fb3dc82520f38d"
  },
  {
    "url": "math/mid/index.html",
    "revision": "09841b548346f0681e34f70b0e3d583f"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "3a31f97cb356516baa5d3106f2eb0a47"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "6ab6f18a332575597eb59f1b66f497b0"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "8d03bdf788ca7205cdaef4c47b116e94"
  },
  {
    "url": "wechat/index.html",
    "revision": "5390b4d7c380b2d0300cd6a169a01ff5"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "5c4197a71c1bb9b246ee782203e4219c"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "a9b557b07eb9a08923f4fcefc0024a8b"
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
