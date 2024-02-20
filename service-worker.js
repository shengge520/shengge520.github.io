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
    "revision": "f5b380fca70d07fd86a530f4e7bd69e6"
  },
  {
    "url": "about/about.html",
    "revision": "f80f91be28dc97c2d13d7be8df61274b"
  },
  {
    "url": "about/index.html",
    "revision": "52b20448add13d1ffcded749423dba4b"
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
    "url": "assets/js/22.36d9bae8.js",
    "revision": "5cfa9c2bd23a4388a0fe98823b6957fb"
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
    "url": "assets/js/35.818cca10.js",
    "revision": "b8d2e06526554f8e8b68792b98bf3504"
  },
  {
    "url": "assets/js/36.7a7ce9b6.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.0296cd02.js",
    "revision": "cb3198fe905953cf24450080f0f66813"
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
    "url": "assets/js/40.cb002ff4.js",
    "revision": "8fee01f2a591418087758e0249f3a0fd"
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
    "url": "assets/js/43.d729690d.js",
    "revision": "ed9891db258f8cac21975475db75fbd9"
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
    "url": "assets/js/49.a3c42e88.js",
    "revision": "048a968cc9663f0bacea261f96e1e356"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.2f6c83b9.js",
    "revision": "b08fa63b8f8adee16ad60cb3beec7a4e"
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
    "url": "assets/js/53.4131f176.js",
    "revision": "29656e058ae54846decd293b018292a5"
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
    "url": "assets/js/59.e1396a5a.js",
    "revision": "927ea6598faa6f62ff2f41561f67b686"
  },
  {
    "url": "assets/js/6.9ffa83d3.js",
    "revision": "bc5d046420c3e4ddebd097d7904d612a"
  },
  {
    "url": "assets/js/60.8d4790bc.js",
    "revision": "c73e0a1f6c9e87aada6db552a594b917"
  },
  {
    "url": "assets/js/61.4f8c2498.js",
    "revision": "a85c1631631e71de81d26626c7de3bae"
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
    "url": "assets/js/67.73736b11.js",
    "revision": "9c581030ada780d4ad00fce6e138f3c6"
  },
  {
    "url": "assets/js/68.c3a40f4e.js",
    "revision": "3f07f48a1c3a8dbf5249b4d2a8ce9e96"
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
    "url": "assets/js/9.84493691.js",
    "revision": "e8c88088fe4819961874e97c1ce20584"
  },
  {
    "url": "assets/js/app.5651f795.js",
    "revision": "6582477f9275707c90a5cea1341a34dc"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "bf2a63716f0bf3bc33d00d51a8ada194"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "4db298bf4a121224576ce3d0ddd03aee"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "b36f8ff86c9292a027fb45ba7f74cb1b"
  },
  {
    "url": "fontend/index.html",
    "revision": "026461d4cd039a7b4cda8a3a55466da2"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "63f2d92dc5a8a85508c69d3aeadf5da3"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "11f91382a0ccb7643b84e382e67a2e75"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "47126b851de041169fc2ff13236f534a"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "620ad2cacf2e99437d7cd86cc7ad5054"
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
    "revision": "214880b6555125b735f68d77a9a978b3"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "c0404f47febbe83c7261584b0c8de94a"
  },
  {
    "url": "interview/css/index.html",
    "revision": "4a66ae190f112b0641ed3bbe53eec263"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "42930c2ead862a4548aac75451971a49"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "8904edb45b04da3dda7d849d058dd887"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "c45cf5739d31ab813b180421eabd3b2f"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "deac7915e92395c522de328aa09a84bc"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "a89a47976fa2114d589e51f1dddc4836"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "6f653f3d3dda8a8b9e23f8f17a870545"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "1561a61dcfd4c67f201d99d41388611b"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "7e1a872f086bc0c10dfc5525da610dce"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "ad87c7184347df877b448d271bca1791"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "202ea71199fcfd1f53b7a2f59db2e5a8"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "d3d947db3352985a3a065f8f27061739"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "c5497108be724ecd28b323b64346345f"
  },
  {
    "url": "interview/html/index.html",
    "revision": "85e539498dad1fc8e36fb50b4df6e35d"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "8ec1c7e112e5d82bce50a8f096b36a5d"
  },
  {
    "url": "interview/http/index.html",
    "revision": "ef96988139eafd841d4e9b8c2356085b"
  },
  {
    "url": "interview/index.html",
    "revision": "5182d657d56eb910cb3c915415f54754"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "402310dc6594a7956a3896695d3f8897"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "2c464d82752161be3a7ec7bd34b8e2a4"
  },
  {
    "url": "interview/js/index.html",
    "revision": "683af78decbf2580dcaee16420b0659a"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "7afa586e7d93a247e0837838e60feb49"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "3406698c21b4518d6732ad343ba70b8d"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "dcbad2c12cf7062e0fd814d65dff20e6"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "3256070473e6309a553559adc2a2d256"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "e115cde7ab96b9f60141799b4f1ed93c"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "cb2ac5a980ba5e257746026b8676646d"
  },
  {
    "url": "interview/node/index.html",
    "revision": "784423e7abe469cb19675a104d5f71a6"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "aa4574d951f5a72d3f9305ee456d6fda"
  },
  {
    "url": "interview/react/index.html",
    "revision": "6b39f9d602640e1effed560580dde6c6"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "d7d36763ce2a63e5ae24e17452deacc5"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "e279edb1c8ace15b64e6e37168822393"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "6f9aa8db3a31dbb71d951b030f49f934"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "e208ebb58eb7ae8aa907356009fb943a"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "f2df8a80a030365adb5bd22244a1c4e0"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "f9d06bfb60005ecd0142c04b056ad715"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "43008b534c5b0e505930ce20b80135fc"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "925c22a632864bf0ed88b6d6a4ba2364"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "35e88426215ce6109754c85faf5e691b"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "2c4721c7c45657b4fa03de0fd01b888f"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "36a6e3923e946f1666729d9ef42588a8"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "2d4cdc04fc09672841da4507371ca42c"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "96c1de282197732f2e95c1b7d0a7aa52"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "7514cbc30d4c0d1f6094c2d06d4d84a0"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "bd9949a33ae6613555c193937de1e5e0"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "264592a10cf1ac414993079013b69a27"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "7cecf853b7baefeb12c2104a3ee717ad"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "c32d687cf505a5e52c4e3c30c5b25c63"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "3235ff05941942e3a343feb8889fd199"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "023d40b2fe53f20ce5fb98d9314558d1"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "8091479876483404f84dd6d4453cf3bd"
  },
  {
    "url": "math/index.html",
    "revision": "e2bab0ea82aa5c1ef8817f0bb379748d"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "f0b390292d36d798a89933fb73fba6eb"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "3cfc670922dc0238da6ffef851299648"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "f8dc3336a22dab51049e680d56c0ce31"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "752991874ea114ef30c982ccfa50a611"
  },
  {
    "url": "math/low/index.html",
    "revision": "e111a514c60289311890d5620fa5d2ad"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "e5fe706cb5ec737f7367bce18f1e5115"
  },
  {
    "url": "math/mid/index.html",
    "revision": "0d3056aacfb07b716ccd071276471755"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "4863e56e928e1c6815edb76a5f1ac5bb"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "315f25adedb671143cebee176f953765"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "c42a59b25ba76be963f20dbf2effc2ef"
  },
  {
    "url": "wechat/index.html",
    "revision": "31b1b579df72ca4eb5db1ac4e9178a9d"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "a9c7a3980fcfefeb209a30b9b8391c80"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "d1dd4705adc01a70177af05c032bbfd3"
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
