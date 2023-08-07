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
    "revision": "8e8522a0e9ec372463ec376c1bb4dfd2"
  },
  {
    "url": "about/about.html",
    "revision": "7a24c0852f53332be44d18fdc59cf06c"
  },
  {
    "url": "about/index.html",
    "revision": "df583121c15e5dd6bebf5b422443c1de"
  },
  {
    "url": "assets/css/0.styles.482300ee.css",
    "revision": "bda627d1188b24f033cce5e220634731"
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
    "url": "assets/js/10.9881de60.js",
    "revision": "0561179b24b549cc2fae973ab96d6e29"
  },
  {
    "url": "assets/js/11.ae627b6d.js",
    "revision": "504f3c03575d50673a5fe3f1cd4f2735"
  },
  {
    "url": "assets/js/12.b885fc62.js",
    "revision": "82c183eba44592637880424faf2ebb84"
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
    "url": "assets/js/16.b6dbb589.js",
    "revision": "9269da30cecb63e0eaa561db4f1ec954"
  },
  {
    "url": "assets/js/17.9b2a0804.js",
    "revision": "d90ed32697275a23a0e613c03a90600f"
  },
  {
    "url": "assets/js/18.2a484c73.js",
    "revision": "42412532c89e995d6ed12bb682b77255"
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
    "url": "assets/js/38.d4f8d5b7.js",
    "revision": "bed86cb6bc79f3c52cee346cca47e214"
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
    "url": "assets/js/47.f55bd2cc.js",
    "revision": "9d5d3a2b36f3675ad8eca7a96f2bdbf6"
  },
  {
    "url": "assets/js/48.2d66ac69.js",
    "revision": "f99b700ad3ff849b2df9705aa0313017"
  },
  {
    "url": "assets/js/49.44ccc95f.js",
    "revision": "71864239e56935148784a3b80b6766be"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.1a1855e9.js",
    "revision": "24ed6529358627cd76ae9f14f35979bb"
  },
  {
    "url": "assets/js/51.161cc0a0.js",
    "revision": "7dde02af1c672b543db2e3eecd1b8032"
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
    "url": "assets/js/56.9bef3140.js",
    "revision": "4fcf8c76f0bdd86cfbce83f4e4a3897a"
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
    "url": "assets/js/6.9f215a01.js",
    "revision": "db568c754a8fff1819565a3b47adde80"
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
    "url": "assets/js/7.18c4d082.js",
    "revision": "65769df73aa7da262e6c948e61fed0ec"
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
    "url": "assets/js/app.1f800a03.js",
    "revision": "ff398dff471cd5ea4a9b56d4cdfe04d4"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "99ddbd33259fa0f4da18a8adac52cd99"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "696bc9f14890b66aad1205db8a7bda6d"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "9970079c9f78ba5c670e175c5361e903"
  },
  {
    "url": "fontend/index.html",
    "revision": "ffda941904efb89a7a0b6565faadee7b"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "a464358939e181f012839ebc71542586"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "dfeba26b8dc2ccb3f02353cff1a1e363"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "8e9310dd3b7a43d1cbb651dcc45da145"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "6fdeb7d08d60165fc298a7bfa05bb538"
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
    "revision": "2487b4b50fd4197789d55d402759b5b1"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "21ac5c6b149b08cce44992bb6a549752"
  },
  {
    "url": "interview/css/index.html",
    "revision": "8db57e713f49602365290f9e0613f578"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "deb344d80bd6e846867c029f0ba991c4"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "0990097f239c78e5b4ecba964650f522"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "25f08c221256094e166895ed11f6979b"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "91c2830e65ab8939428cfd31f305566f"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "10739023750296fc9428fc0cceae699d"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "e799d10bd0806ae04a95b9658027e80f"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "0b9662e16c22776663cfcc80f4de02fd"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "793403e5035dd33a273d2810eefe9800"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "bda04720339ba21ef329b9928b751712"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "19f08ec4312ab2b6422043fee2a2f78c"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "0c2709b12d036cb9050906b86bfe729b"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "5847f7d3ac4c9dcfc9daf1965c22a03c"
  },
  {
    "url": "interview/html/index.html",
    "revision": "473f949d8b08ff50dbc981c612d0fa1b"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "8dc92b54d4ebebd2222e52910957c0ae"
  },
  {
    "url": "interview/http/index.html",
    "revision": "3621892b1826d895b1419cf4af3e3623"
  },
  {
    "url": "interview/index.html",
    "revision": "5655aa05515c83687907efdd38467b42"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "bc5134c8e19f3da0515cbd4ce6a37c52"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "91d7dea641d6c1d9c2eeb072b436245c"
  },
  {
    "url": "interview/js/index.html",
    "revision": "45e158247cddb6378eb87148865f90e7"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "6154fb4d16517d1303b38b29f569fa14"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "20c8a7fa348d9d06cc75da3b657c666c"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "e5b66012d9cbf78c26e2324e2bb1ce0d"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "03e346a8fc426834a6dd227619e91855"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "d95451e27f58d8d9e9dfb4b0f5bcaf8d"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "4c97cbca5e06d4b80b79054fce54249f"
  },
  {
    "url": "interview/node/index.html",
    "revision": "831747a169005acf2a90277ca96847e9"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "41440a7123ab0a85b003e5ec6223db6b"
  },
  {
    "url": "interview/react/index.html",
    "revision": "a49b0c551d361e0745aeb282d3d63159"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "4fdc2d89a2908ac78d7626a7b3fb251c"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "54e075b4f9db76748cb7492120a0639d"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "2c5ce5b1e577686f12f1f825e845c759"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "2b1478870a0ebb2317fb529cb84a596f"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "2a7ebac3c24d136e63d82b59ab2eabd3"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "c1d31ea8512360817259aa4e69ea74bd"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "da933ea6b12910a689da595a93eba69f"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "1139d86ba432704836489734dc1ec234"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "b003163d9fbe5da5306614e1d5537e64"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "0a35a94b9aded6ae7b8d816923b05957"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "04ec709020e433bda826300e4a7df9a8"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "2a845943eb5670d09dee34e52eaa3e79"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "c071696a870f188de231119b6019324d"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "e731b71cd253dfd12eabfc8ac859cf79"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "002736bba006660aaa68cd2a42a5911c"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "46c04be7e1a7df6e652509ca85a113e6"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "8b36087fed8a836322158649c2092dbb"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "ab72019b1b9cae9238d24aefd15a87d7"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "865bb3f609444409be818824102188b1"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "4a9023a2fc775fceda566c25b070c7b8"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "6b13732a4934ba208ebf379f28090204"
  },
  {
    "url": "math/index.html",
    "revision": "4d431fdf3a59cd9a37ec6c9a935ff2ca"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "5093f60294df4551746e10c274448f97"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "436337cfc9c2d3e46491f0b5fd67e732"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "0b5db59aa46a67d28667d8e46242bb6a"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "dc53bea09a6452356d8f70b4018d6ae5"
  },
  {
    "url": "math/low/index.html",
    "revision": "ba683b9bc29bcfab7b1785abdbc71382"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "c10400e11d9a93240a77d700a5939e4e"
  },
  {
    "url": "math/mid/index.html",
    "revision": "d7906b723b1dd4c75e8e56c7121ce470"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "43ab42544f60ae8dc2df9966f598e47e"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "7b4c899b53503cc9a7867ab6fb4d666b"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "b1bd45f04fd8cb131e8ce13b4cc8dc21"
  },
  {
    "url": "wechat/index.html",
    "revision": "0c227010b2b7970f136b9305282d0118"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "4ea498856816ca28b78c5cf80483cb67"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "0eab910f38db9346986c53a53ef3be21"
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
