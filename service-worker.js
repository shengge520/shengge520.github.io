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
    "revision": "3186186d9e8e0d3b9a8400edd1fd9acc"
  },
  {
    "url": "about/about.html",
    "revision": "39ceced377da6fc60a247b3966b91fd7"
  },
  {
    "url": "about/index.html",
    "revision": "a01578e29a9f89f898a1053421406fc6"
  },
  {
    "url": "assets/css/0.styles.441dfaff.css",
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
    "url": "assets/js/10.4d6bdb05.js",
    "revision": "a833c7a82bbc83a7bc593fb2e0d117d9"
  },
  {
    "url": "assets/js/11.15c6e285.js",
    "revision": "d384bfab66bf8eb618338e518f075751"
  },
  {
    "url": "assets/js/12.cf5950d6.js",
    "revision": "099a26c18d9c735132ca5a954c04bd5e"
  },
  {
    "url": "assets/js/13.a9281ccf.js",
    "revision": "77e2aebc6a39fe469aac8b456948f7de"
  },
  {
    "url": "assets/js/14.0b8173ef.js",
    "revision": "3cccb5242a66d8836569f637f9b86f93"
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
    "url": "assets/js/22.6265d0eb.js",
    "revision": "8a7d9f197507077839b80e3b64774d93"
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
    "url": "assets/js/31.ede1a1d8.js",
    "revision": "eb7f8e6db15c2985b44551be29f71a02"
  },
  {
    "url": "assets/js/32.17ff3a67.js",
    "revision": "16ede6d5f38017b3ea5976df89ba8eaa"
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
    "url": "assets/js/37.4ffc2bec.js",
    "revision": "4ed7e15c72065793ee3bfd66f1240ae7"
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
    "url": "assets/js/40.8c50278f.js",
    "revision": "6b77664163b23fdb5e3e1f39db523558"
  },
  {
    "url": "assets/js/41.60b1c935.js",
    "revision": "51d3580b3f07bc83aed9e90928b5ed0a"
  },
  {
    "url": "assets/js/42.7f151196.js",
    "revision": "709eadc6d83a506d5046536b76280ff4"
  },
  {
    "url": "assets/js/43.1cd6403d.js",
    "revision": "9f26a6ed1a22b24aa1145602af0563d2"
  },
  {
    "url": "assets/js/44.1b6bd724.js",
    "revision": "dd66802160c398057c82885f728ccf38"
  },
  {
    "url": "assets/js/45.07de1d35.js",
    "revision": "2ff441b793d02d3301e27724b91c7880"
  },
  {
    "url": "assets/js/46.85da3b3d.js",
    "revision": "766680c7aaedcd0148b7a4c112902cf3"
  },
  {
    "url": "assets/js/47.84f92197.js",
    "revision": "fc293d08c4e68be0b32dd39f3f5fbfb9"
  },
  {
    "url": "assets/js/48.f5cbc490.js",
    "revision": "30a9b04379da570eb194369215d4fe09"
  },
  {
    "url": "assets/js/49.628e4f37.js",
    "revision": "7e5508aef9c6d255f1923e1d6dfebd31"
  },
  {
    "url": "assets/js/5.734ae56f.js",
    "revision": "975d0ea3ba85deb7787860888bf45e9a"
  },
  {
    "url": "assets/js/50.01dc679e.js",
    "revision": "90a50706910f9524aeb3bb043c676ce6"
  },
  {
    "url": "assets/js/51.cc76a975.js",
    "revision": "db82011a018fab09397c763741765381"
  },
  {
    "url": "assets/js/52.3db35b21.js",
    "revision": "c7c589c43c37bb60714ce2ae43e8ba40"
  },
  {
    "url": "assets/js/53.74b1c3e7.js",
    "revision": "8178fcf2199bec95c86899f7e79f9732"
  },
  {
    "url": "assets/js/54.34ee9ddc.js",
    "revision": "058f9c146eab902a14d0959037df8a67"
  },
  {
    "url": "assets/js/55.656c22ff.js",
    "revision": "11f017566c680fc5a29032a472e0aa64"
  },
  {
    "url": "assets/js/56.bd057088.js",
    "revision": "e6a76d6201303914fff1d74965201ab8"
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
    "url": "assets/js/66.40674e7d.js",
    "revision": "d29c678b58e23302934c06be25069836"
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
    "url": "assets/js/7.142000ff.js",
    "revision": "b7ae3f7f99b9f7451764a6d3d6c79ad5"
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
    "url": "assets/js/72.56b55fc5.js",
    "revision": "536af96a44b48c5ac3c74f8fa8deaa6e"
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
    "url": "assets/js/77.d72fa3d7.js",
    "revision": "7cedc0d490a967a04224023c89937e26"
  },
  {
    "url": "assets/js/78.a1e16bd9.js",
    "revision": "9fc542b682372af50f2084578817f73c"
  },
  {
    "url": "assets/js/79.4355c812.js",
    "revision": "0cef3acfcabfa3f339bbabac8b084bb6"
  },
  {
    "url": "assets/js/8.cd961958.js",
    "revision": "9d6f2283ddd1eff2c60ff81cc5a86a9a"
  },
  {
    "url": "assets/js/80.81609da8.js",
    "revision": "905e96aa5f3a2d761e90114bd7548ae5"
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
    "url": "assets/js/app.01014a2f.js",
    "revision": "05b6ff008a294c9778f124619bb6ac27"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "61da17583cdeef89a3eebc0273ab529f"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "dbcc8a2e16cbf8eb2aed64dce3e8f889"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "4d7955c1d5280b97a2547718ae3b2fbc"
  },
  {
    "url": "fontend/index.html",
    "revision": "1754eb1ed35afdb8406d936c00f2ff12"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "99ad9d8824e0e8eabb32e313591f88af"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "93b817f4a58d6ca3fc5d67d7c14b76d0"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "336a6596782f34077c3824f55d652b4e"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "7d3357f33880857fa4ca0d1e9cd7a0d5"
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
    "revision": "6109803a188d737ec28b1822c4f2e08c"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "f6eced525977df957fbbde0208fb4021"
  },
  {
    "url": "interview/css/index.html",
    "revision": "de96bb1436152ca42a9f21965f37f40c"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "f2e45e9966effca91f27ba4f7b441023"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "1a031a513960f9162a6201e14f02cdcd"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "0f36a8e93ed0d8479393055ad52f4636"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "6db15876d4bfe194af0991f1240eadee"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "a8293229cdc95ed81c1178b740da9431"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "a2859ca289cee85633dae1341d76db27"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "4e7ce84b8791c3ffae3c68f468c27454"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "6fb1fef99ad74dec09968667291bf1f1"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "af12b8ccf7c21e5feb1689612bd1be1a"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "6dc5cbf81e75b4498049c20acb2e428c"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "d06396f133ce0224f9a479b27ff13116"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "77dac611fd15f8d99fa3934bb1f08dbb"
  },
  {
    "url": "interview/html/index.html",
    "revision": "b3bbc054ba6475b168476d75a6fc8f9f"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "e84935afeec7349640177fdbcce07068"
  },
  {
    "url": "interview/http/index.html",
    "revision": "eeeebc62ec1d14bf818f3a658a2ffb46"
  },
  {
    "url": "interview/index.html",
    "revision": "68f3b2169287a1d761f833a36a5866fe"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "1ca29e4e0ce13813e69a168dbacdc9d7"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "718110c938917427c0417906cc8566f2"
  },
  {
    "url": "interview/js/index.html",
    "revision": "b73021a778c5d5f5e417e17ff1384e4a"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "cfb04066475ce447c387308513e44766"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "e023e02cfa29c05a774a23e4ff5f420a"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "b7fb757d3b519f51f1d4061e4ba8ed55"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "a0e3380665c287e65316be84788419ce"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "5d5dafc459a7999814044d3612a484e0"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "19d137e42f4b75204ce5924ddfe9647a"
  },
  {
    "url": "interview/node/index.html",
    "revision": "06d51ce06977bae5f89ad04525dc28ee"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "232e9769110b3b315b7c88ba297dae99"
  },
  {
    "url": "interview/react/index.html",
    "revision": "28c86b5fde6df2dcfc8f3cc14d685481"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "4dcc7b5593f603ad95fa1b0a8bb40628"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "af338b090fbfa30999086a880e8e7ea7"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "265962dcec4d3cb60477a3fcd4d2cee2"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "80708778327a3e069c4f661c43609751"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "8fe1e018726be2cc0f7627d3ca55f9bd"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "d5331f274d4b3abd1f57c4caf99cfeba"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "9cf0990a455a6c1b0fed7c7df3044253"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "c4c04db2d51b0443d521103583fb3181"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "5aaee8f573483089798db498db8458dd"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "b3dd155766158a8563a42af1dfa3de77"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "564fbd667b7dd9ad0eb338dc8fdd60a1"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "14499f4e847320a8df3ea8c918ecde5c"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "a7ecea37f1450f4a2f7ed59c2e3c5c53"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "c50131cb8c8436838caeb3a799922573"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "2f85a3936c6b4b993afd10e218957285"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "56b6da7e4b914a2c04b51acd660da1f0"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "2ec3fa1e78dcfb01e9c38c3c6564b772"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "1e9409be24f6a3e11c637ead8e747c0d"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "52f8a562bf085e1ff9256a867814c928"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "28a4a846a2b3d9e24cccc05d2896c63b"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "2d0025165780ad7da53183dcc4df54cd"
  },
  {
    "url": "math/index.html",
    "revision": "b26b5b7c20c84236e2376a71647333c2"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "538f000970075cc88e39dcf1d7a9d46a"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "02cf67ee1d715ad6293d98f22430710f"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "546cfde3558356e06cd86dbe069bf5a3"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "1679fd0ec0c2e9b3c04349986c2a2d41"
  },
  {
    "url": "math/low/index.html",
    "revision": "3253fcc59e602c3ef29a527d29dced2c"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "f5752cdf944901a7b630eebe83383f40"
  },
  {
    "url": "math/mid/index.html",
    "revision": "920a2fe543735b23a0de0fdfe4b9649f"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "7ae281f566f8801dd60e1f23452358d5"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "0abef3ea9428a96572748fb968ff832c"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "19d6cf6cb4455824766238807aac3970"
  },
  {
    "url": "wechat/index.html",
    "revision": "2719b500351152177dec2642a4fb3b9c"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "7a566fc367712acc5639eb564e558b74"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "98168facca7a8d67ecd7ca089a5f0f1d"
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
