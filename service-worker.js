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
    "revision": "b80b9d92aa1b361a103db403fa443957"
  },
  {
    "url": "about/about.html",
    "revision": "54be9cc7615f0d2205596c4ffb674e92"
  },
  {
    "url": "about/index.html",
    "revision": "feb28808541938ef42f8f6f53fba533c"
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
    "url": "assets/js/3.215009e4.js",
    "revision": "cd4cf1f151fc3aa3b9cd03d7ad9587c9"
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
    "url": "assets/js/37.8f304ff3.js",
    "revision": "854e67ab89b50e3dec13d820c276646e"
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
    "url": "assets/js/47.836ae899.js",
    "revision": "01f38b12031180cbb1332bf952c905cd"
  },
  {
    "url": "assets/js/48.2d66ac69.js",
    "revision": "f99b700ad3ff849b2df9705aa0313017"
  },
  {
    "url": "assets/js/49.d295c7c6.js",
    "revision": "2d7c2cd0ac41c31dc317cbabfa490545"
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
    "url": "assets/js/51.03aea9bc.js",
    "revision": "952490cbbfe2995d55b5e7a18eb19e6c"
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
    "url": "assets/js/55.de1968e4.js",
    "revision": "5cf140aac0cb8b681ab4f99a49261954"
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
    "url": "assets/js/app.c1e06856.js",
    "revision": "2f1e933a5aaa4af0ffedb48af6963524"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "3c152fe4ddc59a1b632b99189f152dcb"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "575f39f0ca3efa3953bba2cede4aa6e7"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "1fd35530baf534bd5a85edd6fb0d83e6"
  },
  {
    "url": "fontend/index.html",
    "revision": "9079963cc27f68558ee864c3075bca62"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "291ac8ddc796449ecdd85477e4d053a4"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "f06bba2fe269c1f1e73f0b1953149447"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "0cfe9fd5164da88197490fdbb103da44"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "39879484b10e478c41ff6257ec27587c"
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
    "revision": "b1b7b5167b6763e880206bb42a31ec00"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "d7dea95c551e01c41c5705a35cd41734"
  },
  {
    "url": "interview/css/index.html",
    "revision": "3def8ca5f725bc7fcbd1ca5e0f91f9e7"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "d8e91ac88caee92dc4e0ddada3a71282"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "8abf00011aec8c44e85bd8043bb73510"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "9f27ba91a12618eedb2a37410b7d6263"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "2aff4b15a59146e1a4118fe9cd26f9e8"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "3653b43cc84e1a0da9742c794b42f92d"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "9206f8143e7320537e7b5dea759448be"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "e73b31332563f9b40be691fb87d751e1"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "01635b910917a11e3b43d8eb7c89b65b"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "437c180ce55763d93d3c77551716eb0c"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "7b7c9bbda84f68f0c60b81f8be1949e5"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "0fa3c2407eab0f4ffadcd8bf853534a4"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "b74a22dba45f66bafd6ddc4fe542dc81"
  },
  {
    "url": "interview/html/index.html",
    "revision": "233eafc0c81073181f1310f8c8b48906"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "d525af28b386981fdf142c93774449ce"
  },
  {
    "url": "interview/http/index.html",
    "revision": "abce1e323ed9dc86b6f91c73cec2e924"
  },
  {
    "url": "interview/index.html",
    "revision": "f6b695b27b9c19592b9e1819209dbd22"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "cedc299336d8e55a5a100e7ad92e0449"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "c793904031e376651ea19eaa9a24031d"
  },
  {
    "url": "interview/js/index.html",
    "revision": "929913b87e00b59205e8b18fe1560407"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "127ba4d1d66022700201664990504261"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "588cd28e536797ff9217c4dbcd652c1f"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "436d58acd8e6e9e8787f4013915ef100"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "8862e5318fdfa2a292cd9e484fab111c"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "5e618143cf7dc64e02081aa2e7ba519f"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "96fb9c577466eec2728c316df5fa1cc9"
  },
  {
    "url": "interview/node/index.html",
    "revision": "12bfa86644f6a393941b3443fe1ca9b9"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "0270ecb1ec417a4cf39cfd7358b1ffc9"
  },
  {
    "url": "interview/react/index.html",
    "revision": "05417d4c075df07dfdc9f03d801a4830"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "0cb736fe668451512a01c8575ef94b00"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "a0f72043320fc08b947224425fc3ff85"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "271b8a55ad6651453e704336b7931bcb"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "87d94de319bfb7468a8521af70151f61"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "d3471cf02d9835d419cdf448aa8ad530"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "d8bfba792d80611fe08315138083770e"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "8cbd618a345a9541d9e10b6ae1b2dd57"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "842c1a376286c727e0f33f30ecc81ace"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "6e133e2e97bc4ba015e10a6fab8b800e"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "4f51c9befee603fa3600a90850c9a216"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "32896951a810a28e178b3310fad04059"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "ca0aef85259225018a643c07aeabad43"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "c15083bd881cd1ca346ab02061d76ce0"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "62e74f600c9384398af1d1c0a9da623b"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "caabd7558eea98e750f0d281312ea7d0"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "8698129da36441ba6d93495ca26d7e3f"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "6af5e28e996d51534cb389f56f32c3d0"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "8a91ebb23de61dee48719ab3eb7c5a34"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "0e1000cb5daa3b6d934b3b4e0aabf886"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "4afdb0b5cbb70318854aa25ed24a1874"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "67133124148e7fea1174a042cbfeb240"
  },
  {
    "url": "math/index.html",
    "revision": "affe2f8dd2d125acf18408fddcc5ddcf"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "8d667fa24fbd876ca9c6db93d426b1e4"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "ae7b73081f59727e121f8ffdbcd94551"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "c63e0bf808d98b5b07a130e992173aaa"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "89e6e7f7fbcc144b2eb5f166bce53d5c"
  },
  {
    "url": "math/low/index.html",
    "revision": "2f6d2f4bd64716f331a36112f24e9048"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "4720d75d91c4a1e89f924a162d9b80f6"
  },
  {
    "url": "math/mid/index.html",
    "revision": "76b9631388b8078a1df6f613d51ee818"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "da4cb13f025ac97c631d5d67b3e2c390"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "b9a2e9b76b18221a3db434edc217fcb3"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "89fdfa1b1762269572bfc01104e04382"
  },
  {
    "url": "wechat/index.html",
    "revision": "8cdab76575c19c46e5fbdb49f889b969"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "0c64918d5203aeb1ffc65a6bee3a9d5b"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "cea0774c47ec42aaf8957770cfde4edd"
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
