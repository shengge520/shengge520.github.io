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
    "revision": "64fe77a5f6c3fd9c0570455e398d4371"
  },
  {
    "url": "about/about.html",
    "revision": "f9f1342d728224d974ba67d3e4bef16b"
  },
  {
    "url": "about/index.html",
    "revision": "fbdc47760c7fa24883f017ab87bd27cb"
  },
  {
    "url": "assets/css/0.styles.84d4ba23.css",
    "revision": "75e3a3a666428e153dbfcd4e9e54554d"
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
    "url": "assets/js/20.2a2e7fc2.js",
    "revision": "67baef0eebbfb0ebc31e76261668aa61"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.577cb01b.js",
    "revision": "b2e6635985c8f39d684a0341136e8af7"
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
    "url": "assets/js/35.697c53d1.js",
    "revision": "fd5e141fbf83cf40ed811ddafa2958e0"
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
    "url": "assets/js/43.f3978e16.js",
    "revision": "991ef8871771fabdb8d86a7263ba357d"
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
    "url": "assets/js/47.4a75c451.js",
    "revision": "d0bbf722620c530e689eb8a866bc13d9"
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
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.33edf329.js",
    "revision": "cc2fa754a51d7eb72d14a48d9fadab5d"
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
    "url": "assets/js/58.3dcb605e.js",
    "revision": "509ebafbaa8d1a2e1481d64dcabcbf11"
  },
  {
    "url": "assets/js/59.82825efe.js",
    "revision": "48745a5e3f8fbef6d811d2f8d6b87318"
  },
  {
    "url": "assets/js/6.43d1cec7.js",
    "revision": "cfc4424539141804cad027332b74cf6f"
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
    "url": "assets/js/9.f49375b8.js",
    "revision": "25d6cef577a65e975f3a8869a2491820"
  },
  {
    "url": "assets/js/app.2f2a567e.js",
    "revision": "087d313c23fae91238e20025332e5bbb"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "2472074e187d378d042c8cbc7b708976"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "1640e7d03e6bd9c26052536eca2399d9"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "783fd061a6b55eccd4803699e5620da9"
  },
  {
    "url": "fontend/index.html",
    "revision": "13b1851bd540204315807bbf7194d6ea"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "eec0bbdc566e4bb0c46ff2c9762e46aa"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "ec4e55d8dcbc4d106be85fd0bdcecc11"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "99e3cebbc76093c38f5e74fdb2cfc0dd"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "f71d5a63d1091c0a01998e0372ecc69f"
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
    "revision": "633a9ddd7e5c6c7e4897fa967d66070a"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "b067bce37466ca87c96fb1fd345985b7"
  },
  {
    "url": "interview/css/index.html",
    "revision": "d4b64aa9281e8b5a316dee341f1f9b3b"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "2bd291ce1c289af5712ef9c48b2a726d"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "3795a476d9f238a3dfea6dcbe862a83d"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "eda595d274989d958acb76059185783e"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "b68f16ef4dcdd885fef1ffd65a96b469"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "2107beebd483b3127e4a14aab0693e15"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "d0569674a8d170daa2ff423f15c7f695"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "ccaa6b41ddc3f71c476d337769b07d52"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "4404009cc21d185186b0df60e3f40397"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "3a56e378ff38f31a8e2161591e5b0892"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "b592252e21e2aeb0d37b64ab7da63401"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "6da688910f2bffd8b340f3bcbbf745d0"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "1c83ce6ada6c717a0c6061caff2818bb"
  },
  {
    "url": "interview/html/index.html",
    "revision": "92c5755074d4df02997108872bae29f8"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "b5d834a46741ca2fb749182beb7e1af3"
  },
  {
    "url": "interview/http/index.html",
    "revision": "39c7b30016cf1e0f3347c3c6968f8c08"
  },
  {
    "url": "interview/index.html",
    "revision": "55b370586696d9b9d443069510e89cff"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "1c78760ec0e102e71763f82831ca31b0"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "6d44fd86d699aa5130d0d45101307eb3"
  },
  {
    "url": "interview/js/index.html",
    "revision": "6821b1839b9b77b0db5752eff5184cf5"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "fff5659b5cf9b3d51eb2ce887458cd8b"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "2e5909cb8ff36777c756779a25f8e907"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "b992cff42d6f95cc840b248ba01b5ff9"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "e6490508e40f804592745f23f5412351"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "ded4cd944afaa40702f4564d241d69f6"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "f6ea31fde87660a3b7ded668ea84909c"
  },
  {
    "url": "interview/node/index.html",
    "revision": "14dde3708671b7156c14660135d4e9e8"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "5b95311be09c6fa944b0a62ce6f398a0"
  },
  {
    "url": "interview/react/index.html",
    "revision": "bfac54214bbc56637cc22b0c4edd7836"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "61f3fb6020e14ce2358ce5b2bc40964e"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "16cf37603633dc8d92d2563b470a5478"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "35df5cafe63035fbb66db2f16ed50b62"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "c0743c9874e10a13fc9501b26466bee8"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "8db0716102260593474242fb49c23f7a"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "843eb16d448dcb662657ee2d00c99390"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "ec5985abadf81a215a3ec06bbfaec007"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "9f730c62aa82d0d4a972e4865684e89b"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "4635b3328a9660af3aaf0d0b5c5f9296"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "3e1b2ce4798a8633aa60f37fe05d5498"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "40074c6ca2b13a63e625884ca7eee7ac"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "b72774506096c7da02093e81531c182d"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "45f2d059066a2fd3945adb965fc8683c"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "cbab458e0f19e00611a21fd188aa86be"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "9602c165302eca42ebf399fe48fb9b5c"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "a3f249638ca3fd1a02ee1df2a7ac361c"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "1f39695fce7f336632d6f6baeb4ca889"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "39b62be83004cda2b234df7ab47d42cf"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "6441bb28835a2b63347766b16d14012c"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "61030e4d321fc7a2f1878d48f1cee153"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "e0207c3c0b06faff94bb99917630292d"
  },
  {
    "url": "math/index.html",
    "revision": "33a2b898a5dd789037fda2f41a0b67ca"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "0247e9919241af3ac2d40e8ce160273e"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "82db868023016b39bacf8aea5ad52a41"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "ebe89390c6e5d122e16727d2a30e7e9f"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "7b377f411cac3401c35557188b4d65bd"
  },
  {
    "url": "math/low/index.html",
    "revision": "ec00cffb119f8216303abc4256190df4"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "964add27a5df5fd380a95c1341569c55"
  },
  {
    "url": "math/mid/index.html",
    "revision": "7f79f3240f1388f122315a81c6e050c1"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "328f750bd32d893dbc29a83420049653"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "46016ef593e91be7e51916a552534c1e"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "2ef88039bec6058496c141798ee5be30"
  },
  {
    "url": "wechat/index.html",
    "revision": "522cd49ec75e5eb3b7b71bcc9d78a187"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "7142ee9f7e75a26f9a87d98d3e2da066"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "e4e48379294541fbec6e71199b9d8e54"
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
