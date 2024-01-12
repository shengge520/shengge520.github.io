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
    "revision": "d9b73cdf51d0a385a7fb8010f69a4189"
  },
  {
    "url": "about/about.html",
    "revision": "940bf661e46238bbb2eb38e04990e012"
  },
  {
    "url": "about/index.html",
    "revision": "5186820123787a1b4c6a3f528b571ab6"
  },
  {
    "url": "assets/css/0.styles.45a39381.css",
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
    "url": "assets/js/10.61cc9bf9.js",
    "revision": "08fe8ff03c8464fa7ca9e05e47795efb"
  },
  {
    "url": "assets/js/11.35ade5e2.js",
    "revision": "ff38c7c86f264b81d4bc3f83e7b286e2"
  },
  {
    "url": "assets/js/12.f27ca717.js",
    "revision": "d0d0a580e70963d82cca78cb019433f4"
  },
  {
    "url": "assets/js/13.3f7e88e1.js",
    "revision": "4bd12ddc6d4493206e455c9a97c7e290"
  },
  {
    "url": "assets/js/14.bf9bb8ed.js",
    "revision": "06f3893e5e00e565e8dc7bc63bd951c4"
  },
  {
    "url": "assets/js/15.10d42f4f.js",
    "revision": "3ce6fec18c8e5dd584b743f040d99b39"
  },
  {
    "url": "assets/js/16.00d0f328.js",
    "revision": "979e124414be5ff2dcef709bd2328537"
  },
  {
    "url": "assets/js/17.21ee6b66.js",
    "revision": "7683314d4a73e4539119463bc8d3ae9e"
  },
  {
    "url": "assets/js/18.5704e886.js",
    "revision": "34e05b32853eba7d81df420849ee93d8"
  },
  {
    "url": "assets/js/19.dd209a7b.js",
    "revision": "89882dbc013a2b2e3e8b6d1cd3c8fb0f"
  },
  {
    "url": "assets/js/2.9560d7c0.js",
    "revision": "d19b4cf833fa184340962ae0c2de72a1"
  },
  {
    "url": "assets/js/20.7591162d.js",
    "revision": "2b5ebe1286905ab6aba057c0bd29ee90"
  },
  {
    "url": "assets/js/21.c37d6d09.js",
    "revision": "61ab7ba9e1463bd73a38fd33698757e2"
  },
  {
    "url": "assets/js/22.deb62ebd.js",
    "revision": "380886d46bf9a33b753cf6056718b7e4"
  },
  {
    "url": "assets/js/23.f55ec0a8.js",
    "revision": "26f65411e094263065435f6458e335ef"
  },
  {
    "url": "assets/js/24.06cc200f.js",
    "revision": "4921b70c68ba32c68396679a3f7cb06d"
  },
  {
    "url": "assets/js/25.f372531e.js",
    "revision": "c5295e68491d58d1edb2f6cb110bfea4"
  },
  {
    "url": "assets/js/26.52a57881.js",
    "revision": "3fc8f6906aa2fb880ed929a1375efb8c"
  },
  {
    "url": "assets/js/27.6868c3d6.js",
    "revision": "cea56deb86fe8062237d6cad23c9dc3d"
  },
  {
    "url": "assets/js/28.dd6403a7.js",
    "revision": "686dee96513646b8317189014a293d57"
  },
  {
    "url": "assets/js/29.5b18e108.js",
    "revision": "336adf243570634e3c4dafd10517977e"
  },
  {
    "url": "assets/js/3.a5594c29.js",
    "revision": "5b0b5707bfc4f9900e504a8f136e0596"
  },
  {
    "url": "assets/js/30.6def31d8.js",
    "revision": "39914df71d558c6bfacdc40b8737835b"
  },
  {
    "url": "assets/js/31.705f8222.js",
    "revision": "85652a1b3e6d361ded186b2e8680bd77"
  },
  {
    "url": "assets/js/32.c7804b71.js",
    "revision": "80d2d97aef82c9463c3f3e552de36180"
  },
  {
    "url": "assets/js/33.2396d43b.js",
    "revision": "0e8a763b98b053a6f708692ac6867d36"
  },
  {
    "url": "assets/js/34.35675da8.js",
    "revision": "30869ffacd3ce4e731681a6bcfd73543"
  },
  {
    "url": "assets/js/35.b6f62261.js",
    "revision": "42d93d65a08d4410fa66eb09f43b97aa"
  },
  {
    "url": "assets/js/36.0d1a8530.js",
    "revision": "7d8650fec913f736efd6dfba6fd2d05a"
  },
  {
    "url": "assets/js/37.08e077ab.js",
    "revision": "b8805306ede0ba7e8fbe2e54cd2df5ca"
  },
  {
    "url": "assets/js/38.1998b397.js",
    "revision": "d43f1cedf141d79b18c71589a1b19a9a"
  },
  {
    "url": "assets/js/39.e8ca028c.js",
    "revision": "964755963cb3edbfd839e9c7f70fc32f"
  },
  {
    "url": "assets/js/4.1169c5b8.js",
    "revision": "bb080edb48652c4cc3eb8da354a1d9c3"
  },
  {
    "url": "assets/js/40.9ecc4bd4.js",
    "revision": "8f9355f48cd3cc58c22f0070b9b450c7"
  },
  {
    "url": "assets/js/41.248a5402.js",
    "revision": "4cd2a6f86209569223eb1b04af2e4ee8"
  },
  {
    "url": "assets/js/42.5c36a1dd.js",
    "revision": "f82fb06f86483751e4b409c73a919300"
  },
  {
    "url": "assets/js/43.601a4ae5.js",
    "revision": "b0d3297f85724c81c96a7dfdfe841ca2"
  },
  {
    "url": "assets/js/44.365f6849.js",
    "revision": "335cbe3e12a553ad36dcb8a3491a8654"
  },
  {
    "url": "assets/js/45.6610c5b0.js",
    "revision": "b41526c0aa6fb5bf1560b14351f40f14"
  },
  {
    "url": "assets/js/46.83e4b8a2.js",
    "revision": "18f227139f4d59044ed8bf648b76df28"
  },
  {
    "url": "assets/js/47.5a84fa5c.js",
    "revision": "737ed10728878694fe3e06fe2b88566b"
  },
  {
    "url": "assets/js/48.32477547.js",
    "revision": "9e18577fd398d19a92737742bb1ee925"
  },
  {
    "url": "assets/js/49.1d396e86.js",
    "revision": "15fb86021eb0ea58ab159f7774604b61"
  },
  {
    "url": "assets/js/5.d6879aa3.js",
    "revision": "9dd372f54e909ef85e0444bc70ac0789"
  },
  {
    "url": "assets/js/50.4bffa576.js",
    "revision": "489f591addf5b14c6da6af17ba1602ce"
  },
  {
    "url": "assets/js/51.f5e21d66.js",
    "revision": "85909409f8e48b98f2dbda866988127d"
  },
  {
    "url": "assets/js/52.1b861225.js",
    "revision": "5f5d339a1369e5223673bc6f32b637b7"
  },
  {
    "url": "assets/js/53.4c131e19.js",
    "revision": "2d643ee6ca6867dbe7780bedff4fd70d"
  },
  {
    "url": "assets/js/54.5203db2c.js",
    "revision": "d35d4aba9a96a0f401778d26378129ae"
  },
  {
    "url": "assets/js/55.0af90d7f.js",
    "revision": "75ee18d4fb66963ebdf921af7b2adaa6"
  },
  {
    "url": "assets/js/56.e9459174.js",
    "revision": "ad0ab73e366da4c9dd2d36bcef4bab72"
  },
  {
    "url": "assets/js/57.b02f1662.js",
    "revision": "1b022e1e4b2c74918711af9b03c8129b"
  },
  {
    "url": "assets/js/58.c8ce0d52.js",
    "revision": "588786ed65111f825daebbdaf83d89a6"
  },
  {
    "url": "assets/js/59.3cddca89.js",
    "revision": "24e74ed789e2d8b3f9be38d53a2165b8"
  },
  {
    "url": "assets/js/6.9ffa83d3.js",
    "revision": "bc5d046420c3e4ddebd097d7904d612a"
  },
  {
    "url": "assets/js/60.fa606e33.js",
    "revision": "b1f6e4c6b202b8137c12b540bce46d76"
  },
  {
    "url": "assets/js/61.b0affe95.js",
    "revision": "73567c0b99bacf0a12168e48082c6178"
  },
  {
    "url": "assets/js/62.531b0ba0.js",
    "revision": "12365abf31b02de11ef512a6c42dc3aa"
  },
  {
    "url": "assets/js/63.860a51b2.js",
    "revision": "cf4a97a7073f6de0f574beb428a78103"
  },
  {
    "url": "assets/js/64.88eca636.js",
    "revision": "95e8ef1560f864f0e23be3cfbd0ec87b"
  },
  {
    "url": "assets/js/65.e2037c59.js",
    "revision": "5cd4206fac1eeb2ac20abf81a83d1433"
  },
  {
    "url": "assets/js/66.53b2c314.js",
    "revision": "610b71d1f83523dbb8f748271d55914d"
  },
  {
    "url": "assets/js/67.a57682bd.js",
    "revision": "453ed732e0b55de66b80803e3da51156"
  },
  {
    "url": "assets/js/68.b5f726fc.js",
    "revision": "fe9c80f6a95bc02b5b99d8d272292c85"
  },
  {
    "url": "assets/js/69.13c1fa4a.js",
    "revision": "62f46819141afceef3061f1e1f842a56"
  },
  {
    "url": "assets/js/7.8f2498d9.js",
    "revision": "8c99f2c30d83b16bbb5cd10ecd1f8c5b"
  },
  {
    "url": "assets/js/70.4ff75cc9.js",
    "revision": "a4c2e58c2286cfbaabd1bcaca812d24f"
  },
  {
    "url": "assets/js/71.bf472dc9.js",
    "revision": "5cf257859b859445c93ac02bb15bf57d"
  },
  {
    "url": "assets/js/72.eb93a4fb.js",
    "revision": "e898451392664d517acbb9f07febbe8b"
  },
  {
    "url": "assets/js/73.8081e459.js",
    "revision": "ad9d451d0d75b15b363abdf68e5f846b"
  },
  {
    "url": "assets/js/74.08b77db0.js",
    "revision": "360eddd6531896b14d61353eae0ddd39"
  },
  {
    "url": "assets/js/75.ac02747f.js",
    "revision": "609cd90215692aea6a9eeae1f88af91a"
  },
  {
    "url": "assets/js/76.140d4981.js",
    "revision": "22dd3a1eaf040743de11af975c3f5f74"
  },
  {
    "url": "assets/js/77.bc976716.js",
    "revision": "0b9e152c3254c0b54dcdb47740599ad6"
  },
  {
    "url": "assets/js/78.ffdf95c7.js",
    "revision": "0848d224c2aa78af3534e16463e05093"
  },
  {
    "url": "assets/js/79.c8a1dd17.js",
    "revision": "9815b51ca990ded45369a55e306a292f"
  },
  {
    "url": "assets/js/8.cd961958.js",
    "revision": "9d6f2283ddd1eff2c60ff81cc5a86a9a"
  },
  {
    "url": "assets/js/80.3ed24257.js",
    "revision": "b82995cb02eca2bbc750911d63723f0a"
  },
  {
    "url": "assets/js/81.73e83d41.js",
    "revision": "d2a7daa7939a5ac6603648a0f84d2627"
  },
  {
    "url": "assets/js/82.13ee745a.js",
    "revision": "c33fbfbbd26c2235b410672bac26024d"
  },
  {
    "url": "assets/js/83.1965c627.js",
    "revision": "6e5952343d8287ca0a0e8a2e4fd92699"
  },
  {
    "url": "assets/js/84.d18eb385.js",
    "revision": "6b3722ab88c34e6975ccc7d664b77380"
  },
  {
    "url": "assets/js/9.3e391902.js",
    "revision": "eb24bf3c3bb3e6ad0494335b012a5502"
  },
  {
    "url": "assets/js/app.39ade0e6.js",
    "revision": "6fb9477264d521a0ed385f014691bd3b"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "183ebf217cdd5cfe79bf585f8a0c0a32"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "4f65e3f6188a0295c19b36c2458e18fc"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "cd2e18a636dc529502a21e1e1193a59b"
  },
  {
    "url": "fontend/index.html",
    "revision": "a9bee82f84e66b985a8eda32ac2cf53a"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "e97a7b835f1f23ed411f50eb2e6cb014"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "248692b5e0a3a0aef38b8b2c9e7fe430"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "784bd426c6afadf34036c7bf59225de9"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "a8676918d335d6be7e25b631501f12c7"
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
    "revision": "2cbb0e61aafaaf1a81b7ecf7aecac037"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "2e9d4f5210e89d9a5fc5f3fa71f597cc"
  },
  {
    "url": "interview/css/index.html",
    "revision": "c3d3a81619d28eeb8a198921eb3f2ce3"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "39ad2b11b63cb5a71de584f835e20b31"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "cd06c5817540d7624a4a825f3318589e"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "23ac068df4cb485ccf39ab4cab221c0e"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "8f249cf65bdebfd29c1ec31c4f42f8de"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "519db32c800413e8c4ea877ef591891b"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "9913870973b92e9b5eb28e00f18f8347"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "83c2653ae80fcfd625f438d5075d8fb2"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "0eded12551e12599a6d07f22e0180309"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "815abc09741620c634f35c1da4943f6c"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "cac6e89c4cbe0077a2ea9c94ccc7a9d1"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "b66341002003dd965914dabad11d4f90"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "3374cd974d47df71f92eaee39748674d"
  },
  {
    "url": "interview/html/index.html",
    "revision": "afa41cd13500fb56d41dd845f44dd3ea"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "29f5f89ce96f4355195ae79f623d7b35"
  },
  {
    "url": "interview/http/index.html",
    "revision": "94e480893692a7f0ad991af97819c19e"
  },
  {
    "url": "interview/index.html",
    "revision": "3d259d218c265bfdad7d7906e12a953a"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "4ad64c598e772ce3287c53a27247064b"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "45263996f3bff93202ade2fc5ac78077"
  },
  {
    "url": "interview/js/index.html",
    "revision": "13cfe5cc2930df5432a25e65f545b71a"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "437ca60d0c7b317584696e4b4d79bd26"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "a48f1c9a6668a8311a31afb22adc17da"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "a095885438255bb7e88d164bdb1a6c41"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "e673b5b5d2b6a0c1136fc72367564e85"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "12697d397e0ba622870378496de60024"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "07799d45e7889c33acf33d9ae5b9104e"
  },
  {
    "url": "interview/node/index.html",
    "revision": "b18b5a6e9687139597bdffa019bc8ed8"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "6a02ea5e0b7b0a5dc071da02ea583318"
  },
  {
    "url": "interview/react/index.html",
    "revision": "69bbd498cd84ae8b5a69047fb516ebcc"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "7a10c02807413971e0febaed296012f3"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "ff350436b9fc60091c3dfab21e5178e0"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "29e744f8b852f916b478411e4166ef37"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "20526a9a7057b28edcd3258665b2300b"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "964d1394d4a86d824de17add53d644cf"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "4df81ba51caff4d8bf6d649a8dc1cdbc"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "3b1923f1b0d5a04f4cb8723c825e470b"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "7e0a8bf7ceef2a9f621c02c220ba38e6"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "a41cc16c5715d250ee019b1d34987022"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "8e6b00131e16394ea4ace457fab2870f"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "36f34b4f27a4d8a977b3023063f538eb"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "ace440c7ffe05b0583c82361ad2bcd95"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "8fc45200e12fd0b0a6365901e990811a"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "e7894590e7f45072bcdefdb328405ca6"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "6700989ef186b800a8b1b449379d796d"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "72d42e9e76fedbc167ec916d04ac5579"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "ecb01ebaeb57b9cc0ebbd12270122d72"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "9e23ff3e1dfb6e9b5c9331b134c97ca2"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "5f7506452d440fa9f6cf47a2a43a2505"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "daa8a73a6bf00844293b10893760a256"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "0a811ece0ceceacc2a55b792f21248f8"
  },
  {
    "url": "math/index.html",
    "revision": "707764514873b1118eab6ad9411ca542"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "a8b11d85a8539b17b4468dcd2011af5d"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "441fb6ce84b6e2bff784cd964c0453af"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "fee1c22c243acef6a8f686aca54c8dd5"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "79b4e058ca474e12266815903cd2beb9"
  },
  {
    "url": "math/low/index.html",
    "revision": "d3e6dc4871fdcfdbe346f7ca0d65a111"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "b44ef6ec71653ab2db6e71001bfd76b7"
  },
  {
    "url": "math/mid/index.html",
    "revision": "e928afb74beb5ddc629d2c131cae80d4"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "d8d8210e029ebe90ec141ee613d83cfb"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "a22ff74f1b9d0b06d59d8faffcb4de1b"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "c1cf3a460a6ae9147f23ba08a6df2df2"
  },
  {
    "url": "wechat/index.html",
    "revision": "7392b64f7318d89db63b4543fea63ba9"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "7ce44d2c330283b1aa4da8b9cf5957a5"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "e9f1b8d31da6a9c382415f0c970addcb"
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
