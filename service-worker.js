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
    "revision": "2b6de8615ffc277c404939b9c54d0937"
  },
  {
    "url": "about/about.html",
    "revision": "cd9abd119551d0d81c8c406d13e94638"
  },
  {
    "url": "about/index.html",
    "revision": "6917408ee0b83d338f675e912a74a11e"
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
    "url": "assets/js/20.37b9b6f9.js",
    "revision": "8d8ba9072a2662bb88f90870cecff3ec"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.41b716b7.js",
    "revision": "0fcd64367938fb9c9f5213f6d547370f"
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
    "url": "assets/js/25.a9a06371.js",
    "revision": "c3ef459bac1f04c9c643f1d2b26847b4"
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
    "url": "assets/js/35.697c53d1.js",
    "revision": "fd5e141fbf83cf40ed811ddafa2958e0"
  },
  {
    "url": "assets/js/36.7a7ce9b6.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.b436c13e.js",
    "revision": "0befff9558fc35760addd57d18d5316e"
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
    "url": "assets/js/40.a1de1c98.js",
    "revision": "ed7008b73c57d9bc5f1c42278d7344d8"
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
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
  },
  {
    "url": "assets/js/50.e7a6b10f.js",
    "revision": "101c19c48eac51517240352fdc31ae4f"
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
    "url": "assets/js/53.421aa832.js",
    "revision": "edc74860b79e46d940660bee686e0a2f"
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
    "url": "assets/js/56.6d412378.js",
    "revision": "90cac6ec1b464e51e50dd1fd7665f1b9"
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
    "url": "assets/js/72.05115e34.js",
    "revision": "d0d496414e57ea1eb9673c827d93ce2d"
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
    "url": "assets/js/app.8923e0e5.js",
    "revision": "6df9d9510512f726d99e0aadec0c4728"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "fc0c267daf07db82f001cc4f72550b6d"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "18343bc8c728d53492269f0daf8c79d5"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "0475e84e5b0d8d16dc7999f44ab2e415"
  },
  {
    "url": "fontend/index.html",
    "revision": "a0932b75bfaca98003cded69655bfe22"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "0fba36cce42a8657d49644e49130232b"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "b1f821912bebc57d35b1bfc9f7403faa"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "4726cfbbedd400a63f39fdfdca5597a5"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "3e3f8149c00dd3dc6ccb469301523362"
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
    "revision": "0f5a79936fe6e29b156d23f5a90b1706"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "c66e340e75e7f5479e3700535577d2d4"
  },
  {
    "url": "interview/css/index.html",
    "revision": "b6afa1a8c845c00a973b96cb159b41bc"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "24493aa3d0d66ded836d3202b25d6c32"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "a1d4f594c3a48e8c8344bf924dae94cb"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "5cac509234491502489592742858ac63"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "6872581adf24b7ff118c19221946ab45"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "a737a365f8636cb3290d104e7db9bd74"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "2900f90af20d92cb8f0bfe2b579481d0"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "884ee22dd89331f9ab870c358e21295e"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "2ab68d48e7a771ca366c16e2717b3c4c"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "5246b27f734a3698ca8eac682aa5f7dd"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "4793c6b529e79eceec8a5cacf5231978"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "dba5fe1ae93860b7553ac54e9b83fa06"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "52ea8919f0186225df5b61c56a133d32"
  },
  {
    "url": "interview/html/index.html",
    "revision": "28bb851f49571b0524a7acfed9b575e5"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "d5d3c224033401c57a380ca4fd2444ce"
  },
  {
    "url": "interview/http/index.html",
    "revision": "d9c90eeb8b281032dcb58def00c9ad05"
  },
  {
    "url": "interview/index.html",
    "revision": "ad1af46071f15fbd64f1afe433590be9"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "099bfc91ab439a9e1c572ed5c55778e7"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "372537611505f9ed5accbd2de31f068e"
  },
  {
    "url": "interview/js/index.html",
    "revision": "2e434db4b68e317d9fe20947e75d94cd"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "6a6c13a24f524a721c02f23cbd04c0c1"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "3f1b33e951d1476fd032224f51bbc5c6"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "5a90bf963823be19f73118596d077adb"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "b30fe3553a37f3231ac9f1b1abe2f422"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "8bdbe5af92a8f93676bd4ce3e849d1a5"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "4fdea53821cd27bd09df7c03a77c6071"
  },
  {
    "url": "interview/node/index.html",
    "revision": "78bde2d3172fb7efd31e073be786167b"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "94030d02f3630bf065e028a6eb22f14c"
  },
  {
    "url": "interview/react/index.html",
    "revision": "24eadbb134a3208ec1e90ad1569c0be2"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "bb6e51bad4f98866a473cc3eb228a100"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "9c5499f84f31c0ed1d34a23e13d4ed5d"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "8bea70ed7de54f884b9d330f407d8c59"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "aef8a298f8f969dd9676b93915ca1cc3"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "d85d67f40238f5f64ce54877133d7b5b"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "d7c9a1330d31fb3c53ed9f06f71d576c"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "6241674492ccb34c3d545d594fffd981"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "2fabcadd931a028a0056144df03390cb"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "a9f8268afdf68c35e9e18eebfc1af666"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "bfc61a784595efc0a5187803a4ce44aa"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "2e4ee1e7a97f1d5a10acf118fbcb9428"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "a9bdf1430a53c0302dfff9f3d7d8aaf4"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "e3fa7c55ce117f9ea5dcabda3bac92b0"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "9e8fb29d016220341b1893538e2d4e93"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "c5564cc39f6c0e986e7d531814ba7e19"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "b9c37d40444aa48ce8543d5d4a01d681"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "5869aa54083e72a50d25bbdf6543e6b0"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "fdddcc3fd6a30c291ba1340d47abeb86"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "21715a781b42f48eb6962bb97663e881"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "93dc994b23e67a4ba8e064503cf0a6e1"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "2c5e11a341a7cdb3d3e908f3490b7cb7"
  },
  {
    "url": "math/index.html",
    "revision": "0ba266427b50f28315891a6bf65c41bc"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "2086035b72315f0530bd20c83b875ce4"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "7e18ffdb4ae249578aecaf39c278f429"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "240c6c8222ef4a4f407f154abc6da7e1"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "546faf126637e46104d34750acf72ece"
  },
  {
    "url": "math/low/index.html",
    "revision": "d48a9b2c6fd24290e0899cc5056ea3aa"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "0f552cfa324261db179090e3995fcd62"
  },
  {
    "url": "math/mid/index.html",
    "revision": "5455812bb3b4420928164b9a6a9bb03a"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "146679107f47593efbf310ad847ec787"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "25bb0da9f33b14c2ed7cfaffb972d407"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "12d7ec4b81f4f950d3b5e28dfed24d71"
  },
  {
    "url": "wechat/index.html",
    "revision": "6d1c9aef7dae2ead68586591f63df66e"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "4bbfb973bd202ef81dc9dd5901c1ee5d"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "7d20b6b308262a197714fd6c90f4912a"
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
