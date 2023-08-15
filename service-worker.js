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
    "revision": "17ecf27f87fb5ab9b350a5658f6cbaf2"
  },
  {
    "url": "about/about.html",
    "revision": "1a990b2670085f71a560cfce119ca0e1"
  },
  {
    "url": "about/index.html",
    "revision": "a7147e80515d2bac76eda4927204a40e"
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
    "url": "assets/js/10.f9ca1139.js",
    "revision": "33ee81f3cbc71eda3ea6924bf3ac9baf"
  },
  {
    "url": "assets/js/11.abfb500d.js",
    "revision": "97ed49051a7bfa0826bac2525efcafcb"
  },
  {
    "url": "assets/js/12.d944bbe1.js",
    "revision": "d315d9e100304bbc15b031f9b3924433"
  },
  {
    "url": "assets/js/13.a108f2e6.js",
    "revision": "bbb946597f760b6cd5935afd587ffa6e"
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
    "url": "assets/js/3.3b36b699.js",
    "revision": "7ed279198d6fadff2daff5a1b0c1f8d0"
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
    "url": "assets/js/37.fac2b4be.js",
    "revision": "b9d40b6c09d3ca352b70711dd8c858b8"
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
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.33edf329.js",
    "revision": "cc2fa754a51d7eb72d14a48d9fadab5d"
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
    "url": "assets/js/53.cdb79bba.js",
    "revision": "a091c497bc44665057227eeb5e05e176"
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
    "url": "assets/js/56.6d412378.js",
    "revision": "90cac6ec1b464e51e50dd1fd7665f1b9"
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
    "url": "assets/js/76.c006b218.js",
    "revision": "a0854a3cfb328af03e3f88c7d504ee66"
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
    "url": "assets/js/app.48977325.js",
    "revision": "c7c2375d5ca19f1796c062ea9313f013"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "b08a0cf8a68c40a4f4271c75c0ecb8bb"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "18a962ba63b981254a9c773115484dfc"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "728911fb706d47503f1f5b9f61045dfd"
  },
  {
    "url": "fontend/index.html",
    "revision": "7fe41f300a7a26039bbab183a6778db0"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "a4ba91901e8a2da64f63a6ecc242cde3"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "8441ac1986a117e03992ca41b4094e0e"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "7a6f526191ed34c3af95b9dd58ba9c9e"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "29d692dacd041551b6cc91656558cf1a"
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
    "revision": "7e3dbb5d88506a0fce82b8be8201c654"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "16c11b52cfacc9cb2d2d2812e73981df"
  },
  {
    "url": "interview/css/index.html",
    "revision": "55fbc28be0be81dfde3841a9919d56dc"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "aca37ca84f852218f1eeac037043dc2d"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "4eb2f9d41a6feedaa33abac24e6d0649"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "31ae9f703ec5cc1814e7653771e12fea"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "160535943f0110172480ffe1090cc8b1"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "30780286cf78bd4918514eb46dfb5156"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "5399b82c16c3eafd04393973fedcc82b"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "508de928dc2ecf5afe8095e5865b246c"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "edee92bedaa2b6bd9bb191276fe11da7"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "9065a8d35b78aa028f36d2b6abd116c6"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "0bf1de991fba4e6ce0d33b9082f43c37"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "5db328beb9eb770bb3c6aa253e9a75fb"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "6b2909661b371bd46ab05ac59f3a0074"
  },
  {
    "url": "interview/html/index.html",
    "revision": "34d9681e8b0dc96c56d1af98ff96313c"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "f066a99b1eb0e59f061ad768a2747fc7"
  },
  {
    "url": "interview/http/index.html",
    "revision": "eb99c3797b564a370160036da03a9258"
  },
  {
    "url": "interview/index.html",
    "revision": "76c95cac51101a842c9cfa52c5a9fa10"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "251a5d6b8348bb76cc2e53aa3ea209a0"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "08774c6b654a632b7c4379f590fd50a3"
  },
  {
    "url": "interview/js/index.html",
    "revision": "44d6fecd6a12fe122dcd6309a5c344e8"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "c2baa86fc6037e723874aed9e5fe230e"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "c4b7482fbc072171f1643c210a3d4cdd"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "e62c16112ae53cfc583256433c65356c"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "a7e3ebc6bb1f3c36314824e54fe33780"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "2ae7fe0928b5975bc5766de60db19e88"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "68e51eec45b0f720ffcd2c1275d765b0"
  },
  {
    "url": "interview/node/index.html",
    "revision": "67f21fa148a43351ab188c7add473602"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "633a9662a8d0bdf1cf0a5e99e3e1eecd"
  },
  {
    "url": "interview/react/index.html",
    "revision": "e85d52453943b0a8c99a9b363634879f"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "d65403ae4507b799707fe468b7f5d3f5"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "f7c3b4a95420f935bc99110f82fbdc5b"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "f7a027aaa583881bb77da30b1781475f"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "972ac7ff1461b436c7342c2dc52fa38a"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "5c5b27034b80ae5d1288a530b7b79f47"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "34828b60f20d6f68f4c4d06e178209af"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "f32fc6c5ba4250c43261bcafc74579c3"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "583cd997e28c8bf49bf5366a03d0d66e"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "10dd722401d57237b26b643294dba88d"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "3acd42ee3b791f5fe50c47eb45965345"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "e0dae7843f7917fdebd39cacd46c6a35"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "ffdd579a35f7b85b84f9896efca937c4"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "46aacef587ff792beb4440b6a3de1673"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "05877e4b764122738f731a71c23f2e57"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "20cefadf24cd2024962cd1089189c30d"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "292a51d84f540d8c35b4dba4e02a9227"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "b5e1b6c56cf287ae9d331b3dd2c9ea9f"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "ad1812985a63058000b37cbffe4b1424"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "847dbf94d0281e4bc60b6ccd90473e8f"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "160b97ae091d6ca64824f4764250e1cb"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "254eb28dd8b6f3e606e5d24e073e16d5"
  },
  {
    "url": "math/index.html",
    "revision": "69424012d4e3be6ddd64f241c63edeef"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "ee55389598b20e8edeb609f62aeb1f2a"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "0076922d118c15ca5270dd0c53a26da3"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "81e88accfc38761ea492db0fb50a62ed"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "ba2fe460cc18746093e56cd4583dcb2f"
  },
  {
    "url": "math/low/index.html",
    "revision": "a671e1a34569715d84365afbfba7f08f"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "b1275f5f262ba7e78808e3be87cc658c"
  },
  {
    "url": "math/mid/index.html",
    "revision": "e7a69f6593acf008006f55ccff9f589f"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "495efcc279540f4f79e632ee75f7d187"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "01d630f23473c7c5fdac6117a7c1c4b6"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "b9f884c685235b7369f7d592fa3c0f54"
  },
  {
    "url": "wechat/index.html",
    "revision": "e25f05c1327910e8e6de9f867137dac6"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "e475d9a2b7568965da31e7c4fa9f70c2"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "753088dbc0a5fdaa8d186b3f4c8d460a"
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
