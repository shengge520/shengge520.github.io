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
    "revision": "27bdde8990b8b6fd08fceab423978095"
  },
  {
    "url": "about/about.html",
    "revision": "f5c94c7176cbc8cd90e805a38b49dfdf"
  },
  {
    "url": "about/index.html",
    "revision": "ea821867f09adefc762b5a5a6c23b5db"
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
    "url": "assets/js/10.7e661623.js",
    "revision": "ef0b5290070f2a2f6e9fe424f5313287"
  },
  {
    "url": "assets/js/11.ae627b6d.js",
    "revision": "504f3c03575d50673a5fe3f1cd4f2735"
  },
  {
    "url": "assets/js/12.22dac360.js",
    "revision": "46f092d1b139f44d69cc2ee81d3109c2"
  },
  {
    "url": "assets/js/13.a108f2e6.js",
    "revision": "bbb946597f760b6cd5935afd587ffa6e"
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
    "url": "assets/js/16.b6dbb589.js",
    "revision": "9269da30cecb63e0eaa561db4f1ec954"
  },
  {
    "url": "assets/js/17.200264fa.js",
    "revision": "a4de1b4fec261fbd58df26ee9a5ba503"
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
    "url": "assets/js/22.b0b98b0d.js",
    "revision": "bb3b5019ba29a538891bf15cf0050008"
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
    "url": "assets/js/25.9c4fb3b3.js",
    "revision": "5c98c8c00c0c1928c51892cec30b02df"
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
    "url": "assets/js/33.ed780355.js",
    "revision": "7e19c6822febc64e16ecd243c292ac7b"
  },
  {
    "url": "assets/js/34.636da420.js",
    "revision": "813bc0262b69d8cd1ca0f87a2433f0dc"
  },
  {
    "url": "assets/js/35.4bc85d7d.js",
    "revision": "525700595a7d3c376f2d9e9020a2f38b"
  },
  {
    "url": "assets/js/36.7a7ce9b6.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.0676e198.js",
    "revision": "28df12435c8b9507891945bbfc2a1938"
  },
  {
    "url": "assets/js/38.dff9c89d.js",
    "revision": "167b9ce2d9c8775a4604bb2dc641b9d7"
  },
  {
    "url": "assets/js/39.8cd90797.js",
    "revision": "1117beebd1fb7651b4dfd8e9598a720f"
  },
  {
    "url": "assets/js/4.1169c5b8.js",
    "revision": "bb080edb48652c4cc3eb8da354a1d9c3"
  },
  {
    "url": "assets/js/40.52cd76d8.js",
    "revision": "bb87a66022bc0cd200cc3f061905b625"
  },
  {
    "url": "assets/js/41.ab97e94b.js",
    "revision": "593cc8e828ef46de78e1db045a4b2b11"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.d50421ad.js",
    "revision": "ed6ddf2706c2fa224920ddfe82ec930c"
  },
  {
    "url": "assets/js/44.78561bac.js",
    "revision": "cf6499a8773551121bd8b3fad8ad4127"
  },
  {
    "url": "assets/js/45.e41840d5.js",
    "revision": "ccb10d327012bb00f30397e2b9e79add"
  },
  {
    "url": "assets/js/46.c96f3f55.js",
    "revision": "182cd4b905e11f909e861860986eeb48"
  },
  {
    "url": "assets/js/47.5a84fa5c.js",
    "revision": "737ed10728878694fe3e06fe2b88566b"
  },
  {
    "url": "assets/js/48.1ab7a676.js",
    "revision": "fe99ff3649e32d3ca604a25dc5c455f7"
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
    "url": "assets/js/50.6810f7a4.js",
    "revision": "997f2b5ab52bc998616ece8ea613f941"
  },
  {
    "url": "assets/js/51.9df95cd3.js",
    "revision": "41ea56c712695a643cbf61cd3b05c7eb"
  },
  {
    "url": "assets/js/52.6c6bc375.js",
    "revision": "2ecf2b299f12266efd38b8b21eebc7e3"
  },
  {
    "url": "assets/js/53.3a6794ff.js",
    "revision": "99fc9e75751fce00e25ba89ca578bd27"
  },
  {
    "url": "assets/js/54.e3a61960.js",
    "revision": "7d8e8aa9b8610bb75803c7d7588d73e0"
  },
  {
    "url": "assets/js/55.63c8dd78.js",
    "revision": "451a1953e90a3e517515a8b4c16ea997"
  },
  {
    "url": "assets/js/56.a038bef9.js",
    "revision": "763f19761bbe94cc1addc86f5e456d32"
  },
  {
    "url": "assets/js/57.7f02dc6a.js",
    "revision": "ef62d065d8f19b596cfef66793e56a63"
  },
  {
    "url": "assets/js/58.6d5465c3.js",
    "revision": "4770ce8460ecfdb120bbfa3c1f11ad3e"
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
    "url": "assets/js/64.2400550e.js",
    "revision": "39b8eb4e9c7c58fd5544852512d65aed"
  },
  {
    "url": "assets/js/65.622f02e0.js",
    "revision": "dbc5347b25cec4d441e7e0369564c6d3"
  },
  {
    "url": "assets/js/66.adcf88ae.js",
    "revision": "76b1bd2711c21d2911556cacdaa96612"
  },
  {
    "url": "assets/js/67.8f88f6de.js",
    "revision": "a8545032f1c31e4809e0b33821c107c5"
  },
  {
    "url": "assets/js/68.d5d4a617.js",
    "revision": "420e715168080ffbd761137041a2a80f"
  },
  {
    "url": "assets/js/69.e63f3d16.js",
    "revision": "c068a94b67ce3122c8d31b0859c52450"
  },
  {
    "url": "assets/js/7.142000ff.js",
    "revision": "b7ae3f7f99b9f7451764a6d3d6c79ad5"
  },
  {
    "url": "assets/js/70.58751e31.js",
    "revision": "b6757e1c3d148e8270224995fd04ac7e"
  },
  {
    "url": "assets/js/71.4336f4a9.js",
    "revision": "8b7bce30c077e5e135971009b8897e52"
  },
  {
    "url": "assets/js/72.05115e34.js",
    "revision": "d0d496414e57ea1eb9673c827d93ce2d"
  },
  {
    "url": "assets/js/73.f4fc5316.js",
    "revision": "b9b71f4b5a5203dcc301ec56373fc4f2"
  },
  {
    "url": "assets/js/74.ee93d98f.js",
    "revision": "f16db7b691d02f22dd0b9fbadff388ea"
  },
  {
    "url": "assets/js/75.e8bdeaeb.js",
    "revision": "dfb3a3c3d0137e0133bb2e15efc7ff1a"
  },
  {
    "url": "assets/js/76.0f209f67.js",
    "revision": "51ad7187aa27e61ef21c765b4808394b"
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
    "url": "assets/js/81.740d82f5.js",
    "revision": "4e1ff6cc657e68177b6b0adabf2ece10"
  },
  {
    "url": "assets/js/82.6ed5def0.js",
    "revision": "3389d518ab2a42da76e1231a0d61746b"
  },
  {
    "url": "assets/js/83.11cdc8d2.js",
    "revision": "0610c679380b707ff9554d7806900716"
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
    "url": "assets/js/app.83ddc5b1.js",
    "revision": "663108d60df11a1c84fda75cd7c03a03"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "f03569492419d1fcc3b124a222cfa1c1"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "1b91a85af2b983c159aa34b120749063"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "e4fa81e9caedd0a5a0262a087062fae3"
  },
  {
    "url": "fontend/index.html",
    "revision": "466cc666134e9a8b6815a6b4e9bf0105"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "208d7cdefc0d778449b4799184c36a92"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "78ed9162e0463cdee95051309acd9736"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "00937593b439e467a465030f1b96307f"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "56dec1b58c38205cc2193896e33deb23"
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
    "revision": "8efd444656e1ec7c718c2ef4a462cbcf"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "f6f6c17cb89dbd81a138fce23472b4cf"
  },
  {
    "url": "interview/css/index.html",
    "revision": "37d7268a3485f1032d7a2b72d6476adc"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "1b1587c9c038dcc2f8b3540c2c22e499"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "bdbaff991dbd18f414add117aebfd07e"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "1e7f73dc898f00075e92ad179312dbba"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "c591fc47c5aa43a1568455ea299e29ea"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "b4b456bca1b079fcb997f9b34dbcf202"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "679f944758124cd1e3c7f0d32907f3f6"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "58db1d855f773eab02565198bc68a498"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "2c46b1987a94d1fcc44e074bbb60cf6e"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "28f7e903f61159558ffadd6c34f74fe1"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "3eb2306ae148a404b9d31e8b68a06e71"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "3089d721dea3d2adb424a988d9672070"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "d20814847ca8ca6cb171cb7b7fe431fc"
  },
  {
    "url": "interview/html/index.html",
    "revision": "b818e89327b542ae3c631bdcb6dc60ca"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "74aebea61eb65af0bc05a5007cfb960d"
  },
  {
    "url": "interview/http/index.html",
    "revision": "0df82c40347e20bebad7623ead29ce5e"
  },
  {
    "url": "interview/index.html",
    "revision": "e7d9d9fe16d84c5e9f95f8068e22feb7"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "d634ebc73ec4fdc82507e183413ea50a"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "89432718c1d86b644298954d0f821cdc"
  },
  {
    "url": "interview/js/index.html",
    "revision": "b1cfe9a0a952a90fee21f991a735c040"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "37f42105517802f724004d947ea4373d"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "527fa910aa0797173aece163ea9a6ea1"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "da5eafdc2c81a34b21c137665a16964b"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "e6a2a5d4ca4364d57397a5c9b546c77d"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "22f5945cccebe0fb31a6428ed245ecf9"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "a5b8ab765faf5f252153e15a35d57f65"
  },
  {
    "url": "interview/node/index.html",
    "revision": "07dbef4584cb897aed6fba80ec2de51c"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "63cb9bf9babf74e1815fa868b3fcd92a"
  },
  {
    "url": "interview/react/index.html",
    "revision": "d699630e752e116c11c5da849d7609f8"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "c8376ae360bf619c59553ad64e19b063"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "b04e4f11be412742dcdb1e446e96c51f"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "f07f9f9aeb63e7f644c477b24adf8c3f"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "c2004a52a6d696b47269f3c204407fdd"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "c6770096a242954a4d8d21f560924c6d"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "9417fb4b820a97acb30388aff60c1688"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "39811011ab04d7a207f487461dc0e33c"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "03587c89c588cffa8551e19eae2fe4a7"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "395a309ee83f6c90421572c9b788665a"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "c94ddb0074c5199a010f7b578230640c"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "84111f310842a16e787bc927b17b782a"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "b0fcc6ebbcf8e199245b7755bb1a8a12"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "0ddd9191c2e6c0ddac8f28848c251ac2"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "ea9d1f3ed31d73cce09f57786c070694"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "f82da9b2c5bd691c0259b8add86ec2d7"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "ce6334fd4e362918f63f61953a21f6d3"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "8106eec9379e2df939b686518e8e4aeb"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "2376a2ae86e08617bcc33b7049e69295"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "14119d78899f8df702c33e0eed263835"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "678163fdc7c2b4a6b826e51d6b0028d2"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "3e6668cb840e849cdf65cf5bafe4320b"
  },
  {
    "url": "math/index.html",
    "revision": "b27ba9bed78c82d84c3bb0cd2e9a5221"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "5191ae7e14901bffe74fe7be95c1a26e"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "adb6a8b108f6353eb37e3016027d7ec0"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "42e38f6467ebebb20b60f034c3843a5e"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "d8bd2d7eac12a7bd80f666541f60e6a3"
  },
  {
    "url": "math/low/index.html",
    "revision": "da8d614634ac614d6b40d3746f2e333e"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "d19a3e2cdeabb8c1d9600eb12072a108"
  },
  {
    "url": "math/mid/index.html",
    "revision": "fbb14dc58737216a6decfad4517033f8"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "b9617f4767a4e1ed6250a2b6b12aa016"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "d4dfc7d5584fb536a4deb2c7126d4a09"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "3d682c8ef3985f3ad37a49570a3075af"
  },
  {
    "url": "wechat/index.html",
    "revision": "5c2a3d4863a78ee1fff37a2773a58362"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "88ea82102ccbc790769478512585160d"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "f93bff54ab3b54084f231281a7822ce9"
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
