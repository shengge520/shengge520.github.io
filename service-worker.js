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
    "revision": "b6efcc4faf7490538eda57c79a2f7752"
  },
  {
    "url": "about/about.html",
    "revision": "4352010509556155a1aa4e754d3392a7"
  },
  {
    "url": "about/index.html",
    "revision": "d13bcce2c88beeaec9b77c1619baae65"
  },
  {
    "url": "assets/css/0.styles.0312a18d.css",
    "revision": "afb8c6669df1512528a31e6bc6196d39"
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
    "url": "assets/js/43.fe336aa2.js",
    "revision": "adc30af17a5a87771446733df383c1df"
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
    "url": "assets/js/49.d295c7c6.js",
    "revision": "2d7c2cd0ac41c31dc317cbabfa490545"
  },
  {
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
  },
  {
    "url": "assets/js/50.f7618694.js",
    "revision": "c6ecc9d8d5feb4d6acf29f252f2f2267"
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
    "url": "assets/js/7.490397ed.js",
    "revision": "9e06d3492512094717b1910f531e1689"
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
    "url": "assets/js/app.95cff79f.js",
    "revision": "a4613ba7176f9b2495bb372567fae28b"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "8b2b896ae80d89f13ede81532cfb4934"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "538c9afc715e88d703a733a290ef5bd6"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "244a2b67b7cf13c25b6a7fe7361cf52a"
  },
  {
    "url": "fontend/index.html",
    "revision": "7e4b9664a92512650d1964e72b7fcad2"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "9174f81370f3ab28b454483d43609b15"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "c6a85c940f136d82bdb5d176cf5b736d"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "7e8ca3f8272d0b8a09f83c3a00e66962"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "6beeb42346042a0d5f896fa1856cb649"
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
    "revision": "21bacf6250c5b921d322c2f8c3fe141e"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "b2795bf8722ba536302803c184d196a6"
  },
  {
    "url": "interview/css/index.html",
    "revision": "29754d2f36005c7c24631ff9742f713d"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "68db1fdb142c8c175253ab3d8b6e619a"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "ab7c1cc636a4deb659562df18df59433"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "9a7edb0c59ea702c1ba8c95d630a2d36"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "e3d17b72fb5ee165ae3a7d61f076698d"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "06d7ee202fbb45ed2e5ec6732456b3aa"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "8a3e9802761f009cd738926e5150d629"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "89454814152ddeb8c017fa6944e5e810"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "61d863804df9c2e1ddbd4d00659f5eb8"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "5e11cbca7ca454575caae4ecd571e9af"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "3ea718b1ca8ade798b62ed4f3aaa8ae7"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "85cf97d4a601989a6ada504683d8dc73"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "3fce5ceb7e9fe499a62913675312c1f2"
  },
  {
    "url": "interview/html/index.html",
    "revision": "35b0327b7976fcfa7b88530a035ec16a"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "7c5815e9a316c7bd59dc1ed2e3e9cf1f"
  },
  {
    "url": "interview/http/index.html",
    "revision": "466a1b6ccbd9ce8d9e5562fbbb4e7eb3"
  },
  {
    "url": "interview/index.html",
    "revision": "7b5ea42851c48fd230ec2f49f19987c1"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "daefab4683796eb05af97cb8c585d0b7"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "0c97eb633bdf5ad899618828ac2f1256"
  },
  {
    "url": "interview/js/index.html",
    "revision": "7ced75837ff63749edfcaa70c8bd1dc1"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "43a247141c5beb15ef255a912cdf6a62"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "33dc000bd13071233fb0bbe2a4341e56"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "b7b054a8e0d8e10bba4897bb229165ef"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "07b5f749b8f2e7bf024170470cc16a86"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "b04940f26608877b5d11fc855b6292b9"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "10442631bb048ced2e99328bf8ded1d8"
  },
  {
    "url": "interview/node/index.html",
    "revision": "f3860e59ca8a1423511da26f93af297b"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "759063480f8f2cd9ac5cad69a1293f07"
  },
  {
    "url": "interview/react/index.html",
    "revision": "5e7d935b5a47cdbee5c048f7330b5eca"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "5f4c7c6829baaa063669e3feb1442d4b"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "ff8a1e7a2669f241ff4f8607e63efb18"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "4c4cfcf0e20aff9613b3c2cd4b5bfe5e"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "5d262795fa5c4b969246a2d6ec6f3cdc"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "4f1be1e924f58a5d324683a41b3d30a1"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "fa24e548a663ed1f3a9dcd1c2cf50949"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "4e689fffb256c160fd10197ccce0e9c7"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "e9c67d07f262b14bdf76254ec97d43ba"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "bda7c086afc33bf5320924ff2db498f7"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "40178da04cbaeea7c61156c1c7a68c22"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "9475b5489fc279292bb7968acf8ee029"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "e43ab1474b4d09fb588faf5e1c296f6e"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "c5f137eca783626c76329d17b1e892b0"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "73ad53a6ee2c06398b5f6689cee1dfda"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "22ccdfc62b452eedd0bb458b9f535d5c"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "41e211d3263c6833165e840ab50c20eb"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "91530125a37cae67809d2629bad4c6d7"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "722a07453d6bdfcf3a6fa0fa37bd2a34"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "4a5f17c8ee319b9dc6fdb2640ab69517"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "793d797228f8765771777eabc8c83a33"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "a8efd5d83b24ef60976dff5290897396"
  },
  {
    "url": "math/index.html",
    "revision": "1daf241a7ff672c4d937e977d2d93a59"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "fcf9c1e2d312b998754b80c5d35042c7"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "7084ed04f2f1e6891fe29c480aed8c15"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "cfdaea6f10e977295d4b36a0cd44937f"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "a83c3a1b8146ee1518fad3da7d87c5d6"
  },
  {
    "url": "math/low/index.html",
    "revision": "766b941bbb17274b8f7d90f7dd585582"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "4d879473f55b25548fa6d4d5d374d337"
  },
  {
    "url": "math/mid/index.html",
    "revision": "a1ad70d6cad63aca53e235acbc643106"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "9890f17711612cd640d599dedc1a6ee4"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "177c733fc2cc007170a57a0d5978eb30"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "753b1fcd6bc0a71b056a3bb5abc3ec4e"
  },
  {
    "url": "wechat/index.html",
    "revision": "519ad27c251a03e4db046da885b1dffa"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "721ba82fd3bf700ba61ab2e1e2157c28"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "997966c88d11a7f711d39a0d23eababf"
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
