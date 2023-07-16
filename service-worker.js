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
    "revision": "c990336800f8af33bb5de4c8f6050cca"
  },
  {
    "url": "about/about.html",
    "revision": "cdfbe9eb46fafa0b15a40890ce140789"
  },
  {
    "url": "about/index.html",
    "revision": "0589058874fdc024834b8917f6a21f91"
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
    "url": "assets/js/20.f9aa8df9.js",
    "revision": "c644e649db66b791803fae41dc42d715"
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
    "url": "assets/js/25.a9a06371.js",
    "revision": "c3ef459bac1f04c9c643f1d2b26847b4"
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
    "url": "assets/js/3.997dfda8.js",
    "revision": "e99e4a123d98a95ed398ea32cf6706b6"
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
    "url": "assets/js/35.d80f6a2f.js",
    "revision": "73fc14c09e2dbe3572a254c5ad77f13d"
  },
  {
    "url": "assets/js/36.7a7ce9b6.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.742229fa.js",
    "revision": "70d2b801624638d747fa7514af59f581"
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
    "url": "assets/js/41.ec2e5e03.js",
    "revision": "36642adbc70806cf1c36bccf07b35953"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.00dba95e.js",
    "revision": "0e1209c11838b1d4299da6e12e9e45fd"
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
    "url": "assets/js/47.d8afca7d.js",
    "revision": "97ffefffbe53c82f293e7d0f305954a8"
  },
  {
    "url": "assets/js/48.2d66ac69.js",
    "revision": "f99b700ad3ff849b2df9705aa0313017"
  },
  {
    "url": "assets/js/49.850f4ad6.js",
    "revision": "edfa323d9fffc8720c87658adbce74c7"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.b89f28f9.js",
    "revision": "91413f55b707486abf313ada59df293f"
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
    "url": "assets/js/53.a2536742.js",
    "revision": "444baeac84dd570f627679a21ca5e0d9"
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
    "url": "assets/js/56.47aabd34.js",
    "revision": "86f8676b459b3b6beb5e1c3e8b22b2db"
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
    "url": "assets/js/66.9ea267ad.js",
    "revision": "370670b1d55763e7cabc1ffe0d35ddc4"
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
    "url": "assets/js/9.5abc61df.js",
    "revision": "9658c9c537af1f7fa6e5b9a9f844a94e"
  },
  {
    "url": "assets/js/app.5948a99d.js",
    "revision": "8a5e5b00c43ca11ce430cf73285d391f"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "14594e99d2d9b6b831b57420785c6221"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "2d8e0f42bbc036d9e1e1f667b6581d44"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "394d53f90c6c15b698dd812adddec25f"
  },
  {
    "url": "fontend/index.html",
    "revision": "1b2d675d4b9cf342b910d7d991ab2c41"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "87238eb41ad0c89bce57ac256859b49d"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "2bdb894911dada0eeb09fc00593b5c4c"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "37203556a2af52bd099def0915f2fb39"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "a9b951984b8b53ea2e0646fe561993a5"
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
    "revision": "9bca857fe5bb5f07125120242d670a6c"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "c7fbf4f62be2ff60de12f48dfe66b534"
  },
  {
    "url": "interview/css/index.html",
    "revision": "62e43ee313adc70263aec9ab6a631945"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "ac00a5fa71c6c1b2845a9cc58796e178"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "2177419ad14c2a864f3a895950b01243"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "4f2865415994d376ff076e27fb7e3810"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "682416ed82111e46d014e82628d8165d"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "f87fc804d9e50d1cc6c2dfda7495e06a"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "6c38cbd803d596b42b07e818a7d97f6e"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "1df295e98b618e44f3e75b0249be3d54"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "0b840fb361b8b52ee4c6f2dae24da823"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "88c1e73888b7785d72c9d4cef243579f"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "c68e0c2f14d0eaa7b452adbce5113a1d"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "c95b61191e05f75ceccda72c2db1294e"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "a9cf77659ded073fbf4b39838b20eebb"
  },
  {
    "url": "interview/html/index.html",
    "revision": "45ead0a4a2eab6c9e4b2d2c69a550341"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "060047cee0d32f9c4e0e1df0917f8f0d"
  },
  {
    "url": "interview/http/index.html",
    "revision": "5e7078d9da7d492e3e18843015663ab9"
  },
  {
    "url": "interview/index.html",
    "revision": "522c0b7ca038f0497bc87f21a7625536"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "b40cce7da24400661412e58365fe74d8"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "32af321ad3b730c4304ba5c992d5d0c3"
  },
  {
    "url": "interview/js/index.html",
    "revision": "902a782cf620643860bf2d0616b83ab8"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "2eacac8bf48bb33c14c2fe1ec1f10b7d"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "eb151e716e7db01dcb144df5185f4047"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "9a0cd0b6a785483ddf547970deb6afe5"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "049c4c3ade74e5d969ae00822031c94a"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "8e278d69948884aa0f9ed6a461ecf19a"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "252d3f9f2cb407fce7d2178504715b59"
  },
  {
    "url": "interview/node/index.html",
    "revision": "f9d95fc3ad2ebfcb8cc7349756156bdc"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "cda6339b8ece90615c75007c3aaaf719"
  },
  {
    "url": "interview/react/index.html",
    "revision": "ed8f3d2588381f7d06751f01c64e5eeb"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "94a699f9e083c59a4f24676c54814337"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "6c507a296711349535a960105b80032a"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "94e071b83129299ba30b2e8395061971"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "8acfcdb5b0b61b542e48daf893d08f3d"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "e0e5d336e75f426f5a8dfdd5e91455cd"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "9461c540f1a9d82dd09ccb28c0fe246e"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "c49a6fbf3a0a7f25b6006037bc1e12a6"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "b4d0c2d5a7de13642f115c94943a69b8"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "d601b5c283a2303331f764fb7d60f56f"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "e772c41ee17dbc643a0d70aa5035610e"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "5c4c6a1db12153aeabaaab5585351a64"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "80cd15e5f5ffb91a93ede8ff337b574b"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "19b861779f4c6fe45f5c60147977d4fb"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "d0c6821282aca5f01f119b0921968401"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "f12fa902cd492acfeece8ddb4eb2ba45"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "dcdd0517808ed8cdd7245fe7ab7c0b8a"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "064c615d8291712759fc59710c00cbb0"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "965a71e3785b3b62d48a99310ed58421"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "50d9757413a941dee342045e504fdb09"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "4812e2fb035591e7a4dc89c0bcc436d0"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "01e3be5934e26d0a4f0be80802f6e123"
  },
  {
    "url": "math/index.html",
    "revision": "435dad71026d8ae6060f7f0da4eb7429"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "45d71ea3e0dc3e436704158c19bea64f"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "32dea726407727d83eaebd8e40c16f2a"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "41cc2083b97254bd3dd1a6e9743ea81b"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "720a42ccd5ff9f2c3d087472c23d8a7f"
  },
  {
    "url": "math/low/index.html",
    "revision": "eefbb9b4d14e13660d749cb1ca80c2d3"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "e5de688206a4b9862bae5686f7a1752e"
  },
  {
    "url": "math/mid/index.html",
    "revision": "8d6d2cb4ccb923fc6e223e716bad5404"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "15c0a525225a3decac5d45e9eb011e62"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "c0fbcb0cebb3bf331c580e89d43118c4"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "6a24313ce8ecf102974276c010affc4a"
  },
  {
    "url": "wechat/index.html",
    "revision": "ba7899e6a8c463ccab37e0bc41b9a7d1"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "e9ab474ed2114238233b6c3cad60bc29"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "2fa3a4e362147642a00e756f20f1024a"
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
