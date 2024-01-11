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
    "revision": "e755a8b92998b5bc4cf2ed25a3b77883"
  },
  {
    "url": "about/about.html",
    "revision": "4ffb7c2d93d9b0895d984c9351fe215b"
  },
  {
    "url": "about/index.html",
    "revision": "4bb22954b647d26fe2f7408bdde08ac1"
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
    "url": "assets/js/11.35ade5e2.js",
    "revision": "ff38c7c86f264b81d4bc3f83e7b286e2"
  },
  {
    "url": "assets/js/12.0da5a297.js",
    "revision": "6b435af9ed284a32858db3f6db4fd719"
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
    "url": "assets/js/25.d8b1587f.js",
    "revision": "0e16bb28cc5c6d993066e091f3108abd"
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
    "url": "assets/js/37.9b1cd3ac.js",
    "revision": "76012fc356d79bf5cdd0c51458ce24ae"
  },
  {
    "url": "assets/js/38.05049a34.js",
    "revision": "ecfcf47fc1423dc47683c4066aab4969"
  },
  {
    "url": "assets/js/39.522b2e76.js",
    "revision": "d3c211ad7eae2b2c4a43c004dc79bddd"
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
    "url": "assets/js/41.4588ca27.js",
    "revision": "7a011f49b2306c55e8f15acf886f8f38"
  },
  {
    "url": "assets/js/42.7f151196.js",
    "revision": "709eadc6d83a506d5046536b76280ff4"
  },
  {
    "url": "assets/js/43.3f749ed2.js",
    "revision": "470c64c4b48d8751e1786ee22fb32eee"
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
    "url": "assets/js/49.c058982c.js",
    "revision": "7449d7a38a968c5e6ddbc8eae0cb4e17"
  },
  {
    "url": "assets/js/5.734ae56f.js",
    "revision": "975d0ea3ba85deb7787860888bf45e9a"
  },
  {
    "url": "assets/js/50.bc9d1f09.js",
    "revision": "1f152caca5dacdaadf31c44d5f3dc8df"
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
    "url": "assets/js/53.1860706e.js",
    "revision": "e56492ecca25482071fb59eb5c93e364"
  },
  {
    "url": "assets/js/54.34ee9ddc.js",
    "revision": "058f9c146eab902a14d0959037df8a67"
  },
  {
    "url": "assets/js/55.075cb6f9.js",
    "revision": "f936e51f38d4441b6c5f5d4194c993ae"
  },
  {
    "url": "assets/js/56.d9d2b9ac.js",
    "revision": "ed316ee03f21f57cd3627ea7e645c111"
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
    "url": "assets/js/66.26382838.js",
    "revision": "9401525d3211bd6bf043b4f8e033f3b4"
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
    "url": "assets/js/app.9c3221f9.js",
    "revision": "84dd800783f21244abd12341e7809a02"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "8ec48e4e3b231f194657ac9083ec5af0"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "68c5157c1d9e54f8d8abc7df4cbb5c73"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "4f8efe43b5ed6d6f912ec68cb8275ead"
  },
  {
    "url": "fontend/index.html",
    "revision": "7c740ad310139c61535b35c408968832"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "8c72d34810f0b3a706bbc21b6cb6559a"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "de06a719b52ed87c83cbe7bdae06c5fb"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "01181cda134f8160cda5218c793f8d5a"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "87bec58c9b4e0cffa6dbc2bcac05ef04"
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
    "revision": "8466b79a87e22cd837fa374921b5a9e6"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "7c8bcc84a5989a8a46d70fc5ddbfcc52"
  },
  {
    "url": "interview/css/index.html",
    "revision": "4d4886a733e3a0ad85a82e553f03c4a2"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "115e619a18e9eda2763605c1364817a5"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "504f9e6907462aa296b0a574ff5f1861"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "a26aa7dcc012ef85c43f3923ddd33458"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "3b317f1876215188361dc452aa110742"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "139ff9d9d81cf2efa49d3debd517c35a"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "04649be0f44da8eefb3c06250379f5d8"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "04ec59da9abffada72270a571d837ded"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "0498f4ba17afea4a2870c424096a2f9a"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "4bbbbed0b6c8f75646661b320fe352c3"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "4d9521111ca3a18210c3418599350ea7"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "165db68a255875a863cdc963ba6cd07b"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "dde35256f028d9847d58c2408e6836af"
  },
  {
    "url": "interview/html/index.html",
    "revision": "17bb0201c66938d503d77a63ab29f1ab"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "2c62187d712133dc1b089bc504a932d5"
  },
  {
    "url": "interview/http/index.html",
    "revision": "5750800000e5087df645ca8f19b84027"
  },
  {
    "url": "interview/index.html",
    "revision": "e3bfefcb6398e8103e7fc5c8866f0589"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "df9df41b085d2fa1cab790150bf4c899"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "ebaba4492b5ccbf9c3952396f29f6539"
  },
  {
    "url": "interview/js/index.html",
    "revision": "55ccd5d6a3a119c34ab004225df4ea52"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "07a1e417418e46c4be62ea3fe1d72e3a"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "e686bfddfb8cb6a2f40a817b84b0b71b"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "d647d86816871655996f8f981d02df6a"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "d52fbc9ac704db79762bca9ec6473f95"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "2e2c94f3b72d4a40acaa965e9009fc6d"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "b49a2425a4f4581110b4fd5df9c83baa"
  },
  {
    "url": "interview/node/index.html",
    "revision": "7a15c0b96e1a71cad4f1826b5743d1f3"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "8b42d93928f4715676b5ed13b96afb7f"
  },
  {
    "url": "interview/react/index.html",
    "revision": "fff9485fad36fd68513e9c10f5628de9"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "1141dc6a172aba6b9e760ead678dd59a"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "3cae77f6d8e9bb650a432508724e994e"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "42d76887810ea911e465a998450cb015"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "0a553ce211db505b8622214039e41299"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "a0c447efa1643b87410f18283f987b1d"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "13c0b2927dd50e4bb8e024f5e7f0c060"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "390339a629ec17f0d35e2e8eceb3cfe8"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "550453129f14e6a28b6968dd9ae31718"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "63efbd309717db2c7b0545217ed98342"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "ea3f9cd1835943e037defd494e62d295"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "e8c276f0fb16b29b5ad4aeac75396fc4"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "ba6782bd31c6cbf49f1f1c543b44b098"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "85990b79ae9f3b39ef7ea66bd4722cbf"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "db55d6f1e58ace9558ed7dbf07667223"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "66847bb6b911fe1d3385ce58b8d39fc0"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "6fea243bdf4c6eddf29fff06ffe73946"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "585aed41c6f3d8ca56944f5a1103bd78"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "4ef06611e11c0e1454518a224b46e60f"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "16f1598155a666e208ee9ba89fbeaa52"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "5c94b002aefead8c029d819c8eb92bb6"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "c69ecff575931902a420ab2c17e73204"
  },
  {
    "url": "math/index.html",
    "revision": "4cfeaa2e16c2176e88849b16797fb7cc"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "ecbe17413cbed4eb0740fa97ca59485c"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "96e87c98739ea10f0945122440ec9935"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "4fcb52696d24e1ac66ebf1dca71fe5c9"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "86d1a5c39af0937721980f7c2b2aa63d"
  },
  {
    "url": "math/low/index.html",
    "revision": "1e3e519893e45d1d17a18c8e238dcb5a"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "e054f61bc7d7aab2a588004f0564286b"
  },
  {
    "url": "math/mid/index.html",
    "revision": "ba3e206de2f562220aa7fab9061874b0"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "fdb2e8788b0ccc3ed7ecdcde813e6e77"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "af26753bda1f5cdfc3f468291595c684"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "21edd9cccd30ba311d36b58c0173c785"
  },
  {
    "url": "wechat/index.html",
    "revision": "65c16c89fdba2df9904ddadd8e0a1c42"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "6efb5fe795a9a32d34449ebb24e65c6c"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "00172d7cabb8952af1cdcd1b28bd29f7"
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
