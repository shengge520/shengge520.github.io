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
    "revision": "8287b74284977169112f1bf8d40fb424"
  },
  {
    "url": "about/about.html",
    "revision": "53f0466d1642b3e8340723be5b3e194e"
  },
  {
    "url": "about/index.html",
    "revision": "eaa72a429ba0f5ba52ebc05fead83c26"
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
    "url": "assets/js/25.220f8db0.js",
    "revision": "f4b2ed8b0aead1b55c302e48e351e46a"
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
    "url": "assets/js/38.ac60b494.js",
    "revision": "21c0406d08307876b4b2ee3f9f92cf28"
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
    "url": "assets/js/43.98a2b7f5.js",
    "revision": "07f09c73552e7674007abf0f05726ca4"
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
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.9a832101.js",
    "revision": "70452b856a970c023460c6a9f20cb0af"
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
    "url": "assets/js/55.5890f64b.js",
    "revision": "a64a9774e80e31d09ae88bffeda731e3"
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
    "url": "assets/js/6.9ffa83d3.js",
    "revision": "bc5d046420c3e4ddebd097d7904d612a"
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
    "url": "assets/js/66.261a0db3.js",
    "revision": "bce0a7c5f4b4782703a54773b60460b1"
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
    "url": "assets/js/9.cd2e8515.js",
    "revision": "c106b5514bc49d5438781ac7a219da66"
  },
  {
    "url": "assets/js/app.5705e4ea.js",
    "revision": "36e9c9ed28304fccb2f081d8cf182418"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "167dc915d40c077e8a679afb71bd7846"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "40bbc2bc952428022386155a8e16b9bd"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "92ca69f4cd890af0b52e019854022c1f"
  },
  {
    "url": "fontend/index.html",
    "revision": "0d7f6883a56d868d2a07f29c29cfa5bc"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "c34fc6c39ba4db177e73e1c0f9747244"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "9b11246b5f759f923dc31f2a67e7ce53"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "6d3a6022661408c75f7abfb711fdaf50"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "33518d7e70a03c8d80cf6795ef3f407c"
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
    "revision": "658c8292c66ac556ca3413275fa9f9e7"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "b937bd4611e42702b4258737db468488"
  },
  {
    "url": "interview/css/index.html",
    "revision": "870e1c68e978a1cd5dccb2763a96d62e"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "bc7d99347753c7b9891e92f0020b709f"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "84310da0d27bba66034c6c6906c11e09"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "8b7670bcde22a8595050c1baa8855223"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "36982603d5ae154c1568679ba5d0b427"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "546816d8bfda58640210a163d7469a33"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "258e8e1f47861d566e0aae8647779cfb"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "08bd4c2a6b67a965c90f6e7bc85b21f6"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "e1bacef07cddeeb28234897343c79b93"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "72e4e3f0654fa2cac055d60fca8dda21"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "74a153cc226e0d0900dcdba2b02e1487"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "ccf7b74fc9afa34127454474b0c655fb"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "600a561921c23ee4021f591fc55d0fe3"
  },
  {
    "url": "interview/html/index.html",
    "revision": "c00e8186e064f3a9741f8ab24e561ff4"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "ce876e681b70edb0b0a026c7c8506021"
  },
  {
    "url": "interview/http/index.html",
    "revision": "687470393846c7fca4beaf8a466a0be9"
  },
  {
    "url": "interview/index.html",
    "revision": "c6ca0dd324f7dfe60629f12b805d9faa"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "5387a6b974b01fffafbd70f23338afa5"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "c8c26f2dccb5c928d0d15951f77bbe18"
  },
  {
    "url": "interview/js/index.html",
    "revision": "9f4462a47b12676bb50eef0e3093ab39"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "194bef0dceaed34495674553e8c1756c"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "9e07d214a6ba2e19e9fc5fee4adb3f3c"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "6c72302a55d10d6d51428e0abe7e682d"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "35dcd1a3d58d6483d13efc5f30520bf6"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "5c4bc9f3fadda5092740379218f78080"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "76fe1f56e901e800cd08863868f85e9a"
  },
  {
    "url": "interview/node/index.html",
    "revision": "26cbbffa5e36eda8a13328ff19af6aca"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "400863934578babb778d413eb8803e50"
  },
  {
    "url": "interview/react/index.html",
    "revision": "f1f4b6ea00271f166cf20868e2811f23"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "effdc83dbdd8b36822836d53ae9ad53d"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "61d991a8d865b8140e6acc3f1e9cfd77"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "ac31e7d7291722ab0dad46f791b6bffe"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "fcec2efe1d1d7f7b53122b5c6a79d01e"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "74c776570fe7d9a38198906c6dc51bdc"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "4bc524843bc1c5296ef8445362b29175"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "8cf6b40eccb6cf4481bdaf972ef3ebc3"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "1455d1971a1d444fe504f9f60362aa0a"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "bd61d75a41d090a071a88b86fa2abb35"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "b694f74a33b2e5150de94119b7e783c5"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "abef7408ccf5d277f630b081567cff72"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "a4914b1af49c616366902d72f4b1f950"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "7e678f9a2d35a71d309b6b77b8f5df7b"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "7868bda1abce5682fd13b52b02bc746e"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "36036a04b67e268c11be1135771efa32"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "6a568704aa94ce8faf242bb32d9dcb65"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "c8e5a0eb5afe69d8788ee728be1813c6"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "e32a06f55a313f285c3184c80be5b312"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "ac52f3a3ccdc98c01ce4b92a9eebdfc1"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "878d523ef89eeb4424e72f86b2f1a664"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "f10bb9d1479f480a6bb45997651f0d97"
  },
  {
    "url": "math/index.html",
    "revision": "26e28d0b6a512140f3126913d57b6b4d"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "742a704b90c50f2775061a34451d21e4"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "6ce361c420a940e7b73a5bd9fd3c6cf1"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "5b176d26944db540d50e65ba50808174"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "dd9ed97efba191caa56050931c888950"
  },
  {
    "url": "math/low/index.html",
    "revision": "9b2b2f0ac62f13f76aa2ca61b583bc52"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "041bd2aecc7c4e55d33669a1fdb0c6c3"
  },
  {
    "url": "math/mid/index.html",
    "revision": "f92759a5532034d66a6528bdfb7ea221"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "c4afbe2d0dd559556080a1c1aaaaf7b1"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "5c4beb9bc2834180741a159c3380b049"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "0cc7b919a5826a896d0aa353b5f9acf9"
  },
  {
    "url": "wechat/index.html",
    "revision": "4253d9b3950627fbb8963a8c9183fb0d"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "eb4b2ab08cdedcdb1017786dbb649c5c"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "fee38fa7cb3d366e2a4647d848b6d52d"
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
