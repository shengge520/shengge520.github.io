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
    "revision": "6ef892dcd687946ef373ace484db840f"
  },
  {
    "url": "about/about.html",
    "revision": "cd4889b969bc68d299fa0a71c37ca26e"
  },
  {
    "url": "about/index.html",
    "revision": "56aeb12c314138d1ba60e4a129fcc508"
  },
  {
    "url": "assets/css/0.styles.b2391334.css",
    "revision": "d6cb02168b0732e3e7839c2947cc9359"
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
    "url": "assets/js/14.aa32187d.js",
    "revision": "2082877bffbe524e399de6ddc30fef9f"
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
    "url": "assets/js/22.3a0e9b7f.js",
    "revision": "c44e4d8906203b44b8d4a94c1cd830c2"
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
    "url": "assets/js/25.20150c37.js",
    "revision": "86d2b8dc73eae3833a0840518f6e45ac"
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
    "url": "assets/js/38.1381c1d9.js",
    "revision": "5c2c883a25f34871053570486d335f24"
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
    "url": "assets/js/41.cc02cf82.js",
    "revision": "929ce13262702aba1b9ece3bfeb90af6"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.ca4d0254.js",
    "revision": "ed87eb0af6b9d898357c065271ff1a7a"
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
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.f7618694.js",
    "revision": "c6ecc9d8d5feb4d6acf29f252f2f2267"
  },
  {
    "url": "assets/js/51.9030e74f.js",
    "revision": "358057371b9539429952337c9962db52"
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
    "url": "assets/js/55.6dcc4c45.js",
    "revision": "078b06888a853dc9ba55fc83ab4b178e"
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
    "url": "assets/js/6.5e9d1b20.js",
    "revision": "626e33ee005b1d9e99e69a5b42b8713c"
  },
  {
    "url": "assets/js/60.d41be4b7.js",
    "revision": "8f8bd579cf5d5fe7a492bfaec533cf7a"
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
    "url": "assets/js/7.5f7fcddd.js",
    "revision": "fe5ab34006b88fb09226df2cb158835b"
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
    "url": "assets/js/72.60e01c6d.js",
    "revision": "ea92ab0654d9d93dfad8f42932cebcff"
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
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.3ee7c2a9.js",
    "revision": "c84b147b5893d3a85c959d94e9debe23"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "d4a6ce87f8d3256c136e10fbe58218f5"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "a1da83299f1a8b18cf45e70239e47c05"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "86b1d14fc75c38d954bfd751652cad62"
  },
  {
    "url": "fontend/index.html",
    "revision": "1b573f77565f7d896714ff656bcf3ad4"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "c68c0a0713126a1c8dfc7d16bdd51e11"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "263e4bb35aae51fdda43df4e19c73e6f"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "0b583f004431df5e4dfcf52c2cc2e1f3"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "3d12034a12235615b132d5f9f5549b37"
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
    "revision": "9a9cb92b9705550c0531fe5358b04d7a"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "61cc22c66138c29037787943789b5e60"
  },
  {
    "url": "interview/css/index.html",
    "revision": "ee7375ffd5e5dacfafa0a1aacc133fab"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "6c240c42cbb01206d13ed48c0ef0b27e"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "06d8de1109c07b4df27c4d3e3c668713"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "e759135d67fac9ab8c7b91d7fe90f920"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "64b5eb4eb357f568717b2c3a630a4439"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "b490906b153713b950dfed29061b79db"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "6d1cbd1e8268fb999581ce5b546d267f"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "ee696617aa0e5ecf05bae74139192009"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "c19b688d862c42557d9cb2ad054be99f"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "0f4c45f0e9669a8aa8dc2b9d4b284c7c"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "e6b7cccc151003531c64e872c1975cea"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "850ece88effe4546cc0fdb9faf99a015"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "5de4c9e514757aed7f5248197cd48a93"
  },
  {
    "url": "interview/html/index.html",
    "revision": "7b379a9bdbef201156a7aa30a2c9e45f"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "3125999eabaa4dabef247418852c35d2"
  },
  {
    "url": "interview/http/index.html",
    "revision": "746ca093e5ae413746e90caf75ff3513"
  },
  {
    "url": "interview/index.html",
    "revision": "2b4fed03b7ab0e5c752c266d0338527f"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "2f23228685db49c1db4366fb2350d219"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "1948f750ab14f310977cc9bb44999bce"
  },
  {
    "url": "interview/js/index.html",
    "revision": "b724e978f619e65ef6a637165aa50595"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "6f56148f36fae11d57cb02a20b03cafc"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "10986cdf074e99aa5ee59a8e6840e8fb"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "4b8d98b240f1ed88dd93cd96daa1aac5"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "e1e62cb302bf10233ed8c134e0d61e21"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "64ef71bf02203cd8fb02541904e9a33d"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "72a1e8c3686ea9f3b9eb056f8a34f083"
  },
  {
    "url": "interview/node/index.html",
    "revision": "a483a94d09faec02a0748521a3e2274f"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "4b35698e92056df058cc3d6a7941d4b4"
  },
  {
    "url": "interview/react/index.html",
    "revision": "7016f4edc04519c7680db4177cb2fc69"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "32b5b083aa2dacd8ce0f248b5f7ff614"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "2a3a1c1ece773fc95746faf9bcd76654"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "3a460e568d46b131189b2093ddcaf4a1"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "400fe9d5ef28856b10b0b314fae90907"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "45053e12745e057afe9d71f3f3b2745a"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "e86f2d3acf86f3ff04a33f000472a82c"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "b63b5caaa7e97e669d6384888ad7bdf4"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "7cbb33e4db1a511cfe03736e2ae1f19c"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "5e1002b1a15ccc3603a678dfdff8166c"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "dba8724c03b0f90a277924138019424c"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "e2b7f6d22951b14cd5db4dcc31f524da"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "9952fe600d6d371416e6092555bbd6d7"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "a11243d969c6b44dfcf56c55be2dfe06"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "f4ca6e26ee9c098ff2d76dfd1f3292fb"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "42fa324cbc22a3bbfa56ea7f8f203937"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "ace1da1faf66e093930734bc12525d0a"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "d91db084dbddbb740143afce5104a223"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "f9343322c6900d17fc3b201a82f4b5bd"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "3498c4f7825875469549e8639adacce4"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "2b7e65423607bf970d3f9bb3106d7222"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "727f82edd43c83f0f37ca88a3909cc23"
  },
  {
    "url": "math/index.html",
    "revision": "a2bb324e2568551af3f454acbcc6127c"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "b5f4a1eb5b9ef08b6c29c325b5d0799d"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "84b791eb4f3ee48c90716e1652efb7ee"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "edff2d3ff6ac37a22fe9b025a1f1bbdf"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "51f9280faa4a04672108a4c0bbe43404"
  },
  {
    "url": "math/low/index.html",
    "revision": "e8bb513bc42dbacdae8cee85c49cf95c"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "eeebb16ceab64d560e9ec7940e6d3bcf"
  },
  {
    "url": "math/mid/index.html",
    "revision": "c248e654b4047c1cb6caaae00098b806"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "2c08911dce2051bc63426f9aa1bf1843"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "8f40baf59e198cad2522df90760782aa"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "71a6295e1466508bc73319dbb173d454"
  },
  {
    "url": "wechat/index.html",
    "revision": "0e8d7a4861590557a767511919924138"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "e8f7086c9c691d341a59f69dc771472c"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "788611d4a2711f1a1a355225a48c87d4"
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
