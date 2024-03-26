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
    "revision": "392becb7dc31a7f7bf97955e4c045106"
  },
  {
    "url": "about/about.html",
    "revision": "3a101bf28cdd5e7b3a26dcfbda83af5b"
  },
  {
    "url": "about/index.html",
    "revision": "cea472054d83d4e66795b0a136a8de33"
  },
  {
    "url": "assets/css/0.styles.7275559a.css",
    "revision": "87e8b6fdb5fad94525ff676556e42e4e"
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
    "url": "assets/js/1.02420e2c.js",
    "revision": "f928a89aa62af2621f69effb984076dc"
  },
  {
    "url": "assets/js/10.550a40b1.js",
    "revision": "34286c6a03531977f51a71d29bed8292"
  },
  {
    "url": "assets/js/11.1fe17da1.js",
    "revision": "854eac7ef206327007019c071123c6c0"
  },
  {
    "url": "assets/js/12.53b826cf.js",
    "revision": "b556dd5ad8209400a62c96b1eadcd7f9"
  },
  {
    "url": "assets/js/13.f9dd4525.js",
    "revision": "81b0f1df9bcd303f1a06208b539f4a28"
  },
  {
    "url": "assets/js/14.794687cd.js",
    "revision": "787cb5b4beb103db40167c9e93c3438a"
  },
  {
    "url": "assets/js/15.2c6aba5c.js",
    "revision": "e7bde753fcd9a5275a27f6f39fd4df97"
  },
  {
    "url": "assets/js/16.69ff7a62.js",
    "revision": "4143e1d075b5d15543afd953b5902a71"
  },
  {
    "url": "assets/js/17.c69306ff.js",
    "revision": "e18ee9dfe60482cbb71aee63588d8978"
  },
  {
    "url": "assets/js/18.2a578b12.js",
    "revision": "4984c0783a1421b0b904de6d67f99fce"
  },
  {
    "url": "assets/js/19.21e077c7.js",
    "revision": "3b4d356c218ac91ab68030d90e655b31"
  },
  {
    "url": "assets/js/2.bee6ac8d.js",
    "revision": "0f7ae827389728feb2ca4c6fa5222cc7"
  },
  {
    "url": "assets/js/20.97bdef7c.js",
    "revision": "317fac780c1ab686c164c0ea09476509"
  },
  {
    "url": "assets/js/21.32d142a0.js",
    "revision": "cd7282026fd4f715c12db4fb9cdb1259"
  },
  {
    "url": "assets/js/22.b40a540f.js",
    "revision": "be5a9da745054e7a753d9a55cce0f435"
  },
  {
    "url": "assets/js/23.662d7c1e.js",
    "revision": "cc1bb8dc89a29931f417efb1d441209a"
  },
  {
    "url": "assets/js/24.8352d4c3.js",
    "revision": "e2eca9c458b9ca9cb915e22a0928e8df"
  },
  {
    "url": "assets/js/25.12af12cd.js",
    "revision": "aac2ae3aeeb23ec8d29f67d1a216e22e"
  },
  {
    "url": "assets/js/26.4230e49b.js",
    "revision": "6ac2470116197bac999a0726ab3b8d3c"
  },
  {
    "url": "assets/js/27.7493cda2.js",
    "revision": "b8d069805341a888d042a31fff688e85"
  },
  {
    "url": "assets/js/28.8e1cc786.js",
    "revision": "4a5038eae55c1a6364ac8778494a02fc"
  },
  {
    "url": "assets/js/29.41814292.js",
    "revision": "017be2530ddffc1d589e32f05d0e9a49"
  },
  {
    "url": "assets/js/3.6e150219.js",
    "revision": "564f6761fe022f96ca0be5b6c631c7a9"
  },
  {
    "url": "assets/js/30.b0d72e2b.js",
    "revision": "492d7144dd93dd6bf182012415364f42"
  },
  {
    "url": "assets/js/31.13ab2b04.js",
    "revision": "f5468bb702d229f761e67a7188066f04"
  },
  {
    "url": "assets/js/32.aea8376c.js",
    "revision": "c4757e8db08d7207149de29501ea2c8d"
  },
  {
    "url": "assets/js/33.d4f75f3d.js",
    "revision": "be25ec5240fb60bc5567f8216d8bb231"
  },
  {
    "url": "assets/js/34.bdf33c2f.js",
    "revision": "ea7602866efb23034d9e4f5e80ffc6e3"
  },
  {
    "url": "assets/js/35.83e11b5c.js",
    "revision": "7089b4d78f87f7dcfcce812d9c14555d"
  },
  {
    "url": "assets/js/36.195f9b3f.js",
    "revision": "9281d841d7856ea82e97cf04aadeffbd"
  },
  {
    "url": "assets/js/37.91f8aa7e.js",
    "revision": "dce1ac3779c451e962964e3a908e8dc3"
  },
  {
    "url": "assets/js/38.eb038822.js",
    "revision": "8a390785ef744aac771daf735129014b"
  },
  {
    "url": "assets/js/39.bcd11504.js",
    "revision": "d36ed18bed6ae24a4fd94354a047e7c0"
  },
  {
    "url": "assets/js/4.36786160.js",
    "revision": "a2642e1739d5ad6e091e00f15b427221"
  },
  {
    "url": "assets/js/40.a631b3b7.js",
    "revision": "fd8f172fa384f13dfabe5f52af94b702"
  },
  {
    "url": "assets/js/41.9f702178.js",
    "revision": "4f45482e0b330025342cad40d53c9ea1"
  },
  {
    "url": "assets/js/42.30583baa.js",
    "revision": "8a37629d2af542997257078250e9edfa"
  },
  {
    "url": "assets/js/43.a6065e07.js",
    "revision": "fabee42cf203df77befdccb2a7770430"
  },
  {
    "url": "assets/js/44.9a7ed580.js",
    "revision": "cf8e8d378cecd105098fa54340d9ff7c"
  },
  {
    "url": "assets/js/45.706b334a.js",
    "revision": "bf275784e5a808d83883a682e4fdbfe3"
  },
  {
    "url": "assets/js/46.1ec16c83.js",
    "revision": "400d55b8a2495241a8dbf1027bc1184e"
  },
  {
    "url": "assets/js/47.0b8ffd4f.js",
    "revision": "86ceeb8984ab43802041d4c9c73e70b6"
  },
  {
    "url": "assets/js/48.b2a82708.js",
    "revision": "d670a74ed91e1a1e442149fcd6203ebe"
  },
  {
    "url": "assets/js/49.1e5ee302.js",
    "revision": "7f48bf6b7fd6fcb1e6cd8484e95fc0f3"
  },
  {
    "url": "assets/js/5.e9697a71.js",
    "revision": "fe2f96c5486a9c13fcdf55425cfc4b57"
  },
  {
    "url": "assets/js/50.f3e054c1.js",
    "revision": "39d0e2b2a53a674ceaf437cb272902de"
  },
  {
    "url": "assets/js/51.666d91f1.js",
    "revision": "94df0686a5c8d47d110ca82bb9ee706b"
  },
  {
    "url": "assets/js/52.43e3fa99.js",
    "revision": "326b111959d53165046078f441a4c786"
  },
  {
    "url": "assets/js/53.b0b20611.js",
    "revision": "9e71718fda38232d345f0c8a7d2866b1"
  },
  {
    "url": "assets/js/54.4a909b9c.js",
    "revision": "f2663bc86589329b5e33d4e22f43f3c0"
  },
  {
    "url": "assets/js/55.34b53610.js",
    "revision": "206e6d123237471295679f250b5c6809"
  },
  {
    "url": "assets/js/56.81ab7702.js",
    "revision": "34b8c6a5590cc33965d991711f9e4c48"
  },
  {
    "url": "assets/js/57.5b28bb64.js",
    "revision": "a847e0307bc9d3600d94909835e4fa9d"
  },
  {
    "url": "assets/js/58.e8bb9de8.js",
    "revision": "f5bb7f1a28d6c5c9b5f10c8e5936ce63"
  },
  {
    "url": "assets/js/59.340fe296.js",
    "revision": "5eb5e79bbc29c7f4d4a20710e23a2dd1"
  },
  {
    "url": "assets/js/6.62ae5ff7.js",
    "revision": "5c6a8ca921dc8833a6a8cf506fe0a71f"
  },
  {
    "url": "assets/js/60.d0014cc8.js",
    "revision": "10663b2b824178cd133dcbc12058a04e"
  },
  {
    "url": "assets/js/61.2ddf4f72.js",
    "revision": "1b0b70bab4f2d18d7e23c3bdfeebf42f"
  },
  {
    "url": "assets/js/62.9d0259a6.js",
    "revision": "31a4c02aaeee496442616a65f9bbab80"
  },
  {
    "url": "assets/js/63.66bd62a8.js",
    "revision": "f9ea5d545e2057a7c6e0472b70138361"
  },
  {
    "url": "assets/js/64.29971755.js",
    "revision": "a0aa17f53279db4e6159721639515e83"
  },
  {
    "url": "assets/js/65.9bab57fb.js",
    "revision": "eec0b9cb8a40eef8e30eb7d0e9169c29"
  },
  {
    "url": "assets/js/66.a831ecd6.js",
    "revision": "d220aa3f65d58274b615e8e3559ef2e1"
  },
  {
    "url": "assets/js/67.8a359635.js",
    "revision": "7bc8d5ba12114158fb69cf37974cee0a"
  },
  {
    "url": "assets/js/68.878c5647.js",
    "revision": "c442f44bbbc818ff6f5a6604f3c7667e"
  },
  {
    "url": "assets/js/69.14db788b.js",
    "revision": "f0fb4bbc969548403f145877f4672a01"
  },
  {
    "url": "assets/js/7.1ccd5c4e.js",
    "revision": "973d123fd9ba0cf06ab9e68e704c4f7e"
  },
  {
    "url": "assets/js/70.a088d946.js",
    "revision": "10883cd934804ca115fa6db8463513c1"
  },
  {
    "url": "assets/js/71.f11f7e36.js",
    "revision": "0619bc45a50116034a13f68e7937c6cf"
  },
  {
    "url": "assets/js/72.17b986c2.js",
    "revision": "61f43426bc5fcd2cd2637129883ea60a"
  },
  {
    "url": "assets/js/73.5881e6b8.js",
    "revision": "789fbe94e304f05eb4ee43bf1f493a43"
  },
  {
    "url": "assets/js/74.d13173e4.js",
    "revision": "c58f71126d6f8fb9b01614159ac6e216"
  },
  {
    "url": "assets/js/75.3febb50b.js",
    "revision": "1556cee68b1c40c488c96cf7038130f4"
  },
  {
    "url": "assets/js/76.91b7313d.js",
    "revision": "37b0338f78c5858247a14327acffd078"
  },
  {
    "url": "assets/js/77.ad2c5087.js",
    "revision": "df240f4f25b901c369e2ffa0cfbd967c"
  },
  {
    "url": "assets/js/78.b10ad72a.js",
    "revision": "0b86e6c0aafa87ec35e18141d1441763"
  },
  {
    "url": "assets/js/79.a1e22d9e.js",
    "revision": "9843bb4d30612b4251421707797c4c59"
  },
  {
    "url": "assets/js/80.346fe426.js",
    "revision": "5555c9c4e0491e91640aca96f4d394c6"
  },
  {
    "url": "assets/js/81.8476db6a.js",
    "revision": "ba9a87c26c4ab9bf77a000ba77ca5cdc"
  },
  {
    "url": "assets/js/82.91061137.js",
    "revision": "3dab2c1675afff7be1dc2c3b29ec12f1"
  },
  {
    "url": "assets/js/83.7b6bceb5.js",
    "revision": "bedc130d1ba91397aa52860169446ebd"
  },
  {
    "url": "assets/js/84.d52e821e.js",
    "revision": "b2ed3f08e813e69e2e654aeb61ae4785"
  },
  {
    "url": "assets/js/85.eff4d33f.js",
    "revision": "c4eddeb9eb2b8c5330ed72886665dd83"
  },
  {
    "url": "assets/js/86.bc0c8606.js",
    "revision": "621e84e4a4549416f3b0b923174091d9"
  },
  {
    "url": "assets/js/87.d51386ca.js",
    "revision": "8630a8ceeee8d5bed30db6aa07593016"
  },
  {
    "url": "assets/js/88.3803ff88.js",
    "revision": "20332d5ba0a0449ca1715e0f99b50b4d"
  },
  {
    "url": "assets/js/89.9eacc9f0.js",
    "revision": "c6d557b17466344e5c9de49ad4384955"
  },
  {
    "url": "assets/js/90.1c738e1d.js",
    "revision": "f84c8480b4b112f3e3b0e6798da82fb1"
  },
  {
    "url": "assets/js/91.5bd50dcc.js",
    "revision": "3ad5bf5920b4965a7b7cac1fd4ef4e56"
  },
  {
    "url": "assets/js/92.68fa25d2.js",
    "revision": "77615b89aa73b485c044e907ed7e7ebe"
  },
  {
    "url": "assets/js/93.b5603aa5.js",
    "revision": "464bd617f2cc1cd317ffffc5329cbef0"
  },
  {
    "url": "assets/js/94.cb244236.js",
    "revision": "a5edb72c776c63a8250921b5b6d9accb"
  },
  {
    "url": "assets/js/95.c42a5410.js",
    "revision": "b5e10974b793ffcd0bf701687473f7be"
  },
  {
    "url": "assets/js/96.56438b02.js",
    "revision": "28c18f1976159891ad32403c6fff1e51"
  },
  {
    "url": "assets/js/97.de175dd5.js",
    "revision": "5bc1039d5d9afd4f16b8d67df2c9d61a"
  },
  {
    "url": "assets/js/98.963234f9.js",
    "revision": "5da7464dbfe4ee5fcf5eab915544f81e"
  },
  {
    "url": "assets/js/99.1e2fca3d.js",
    "revision": "dfcc745735d773c703fa0989eff61c33"
  },
  {
    "url": "assets/js/app.684606fc.js",
    "revision": "04548cc4fc19a53dc68b3b4bec4a6475"
  },
  {
    "url": "assets/js/vendors~docsearch.b2fec970.js",
    "revision": "d132455805ad0c3e561894795ad23d56"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "d230b3c179c275f09cbef8002474cfcf"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "3814e003ba54cfc6b21fa65098b3118b"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "115b18ec3840af08909a96f604f20a24"
  },
  {
    "url": "fontend/index.html",
    "revision": "6f29998592892be5b51b646b24656a1c"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "b093ea0f7c8bafcfe225e72abf376d50"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "1639787d76ff4aed4897d02249a6980a"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "89926c3669c0ec9a53c1b9e71cdac9ae"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "949008738874c436a677ce58f941a9f4"
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
    "revision": "07f34fb9ec620764a06eeee92fde71ce"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "308a3121b12d74f2506da8d4a38f3a99"
  },
  {
    "url": "interview/css/index.html",
    "revision": "6ede913c10a68b7d9e91c8e2ebb28a18"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "ef661e85d3de5f0f585aa92e62189f66"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "794f54016468e67b3ad0a38e4b5e2f4a"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "77f4f1942bff7d51fbdacab4353fbe74"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "83561713b0efa4138bb65ff9abac028c"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "36310f4aa79bda2d8a5183b351aa9cf1"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "0433a6ba0f614289a967f47ffa4919ac"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "8e050652a12cc305c91e1477afd7351d"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "43a180e150a152233329f310fee079d5"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "1d1fa80cb5d4a53cc92a8d554001efdd"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "96798225352a0c7277ef8145dd8e1acd"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "95761e4a2fefacc797473e3e379ca7f9"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "6bc66c98e3542e813a70a5eae5a4a763"
  },
  {
    "url": "interview/html/index.html",
    "revision": "9aec9d3f781230cb9c78f0381f0f4e6d"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "be89420b891a8aa54c1b2210a6f8e341"
  },
  {
    "url": "interview/http/index.html",
    "revision": "cfa572ba03fede13d86f13453c3fd4c5"
  },
  {
    "url": "interview/index.html",
    "revision": "7a773652a74208967007436d98e878b5"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "e57c8e77e3e262c69e3116f0008f0086"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "81e21a27da2122294ea6c16ce2a27a3f"
  },
  {
    "url": "interview/js/index.html",
    "revision": "5545853c140d5c7828813c33f7ef5cfd"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "147a144057c9e18303d8781fc43ce651"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "9f161d9115c2e4aec61c7bef06cfa698"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "31e8963f87411c2e634111091a4f63da"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "2f3ee5e59cfd116e80ea173eeb37575b"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "607fc3725657a577b7a3b83ea6faed08"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "6077d71411992a3699b0fd76ff5e96fe"
  },
  {
    "url": "interview/node/index.html",
    "revision": "e53fca94b9bcf48b1b493a17bd000a10"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "22985c38e22d410c8242e12a14d2bd27"
  },
  {
    "url": "interview/react/index.html",
    "revision": "9a9d5b1502fcc53f80aef64c902cf8ac"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "94e87aad5cdd1f2fb7d70441e0b39709"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "73c8e75b0560e15741975629556978d6"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "f696e448c571333817509dbd89a2c867"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "3e250a70bbb34613a0bf29f00b95eab1"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "0e35aa3956eee971110a9f129dd08480"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "3f764b89f8214e09d6dc000cbc38f09f"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "7de5f927ff52c878a9e960595ee11d5d"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "37b2a117932c6155ff6d2e70a804658a"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "d3c55ed2a5c4397e0ab017b629e62720"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "549c6c5e499470078d065d30b8ecfbff"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "472d49581c05b6a9ee43d1ae6bbd3379"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "64ee68e42ec2b73bc1905ec721d7456b"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "e0c6565560ade873b917e1609835bd7f"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "f4f22912e4342eb75a55cd64c73497c0"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "501f154154505a93a41da8bcf599cf3b"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "04998b748a6485a5a974519016b082e6"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "5f3071d1978fbfaf0b55b9b5fba9b1a9"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "f7de47e0f498d2c35a4ea63062cb133b"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "d035a31374f410300f8f557b84f0ec70"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "b26a4888b75e70355b35cb2e21017071"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "bff13750e26b2e64c4efd97dae4ad816"
  },
  {
    "url": "math/index.html",
    "revision": "b804c80036b2ff9d7aeb6e0af813fdc4"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "a5c70908d4a9ed54a54e5bbe293fdd3c"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "e45c940af7bbfb5e38ec935bb66f8ecf"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "544e88808f324297e432365707d8b6c4"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "6c6cd8464ee32c7a4963979aa06e6eb5"
  },
  {
    "url": "math/low/index.html",
    "revision": "21939d0173833a05fb37867b53a8f1c5"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "06d80641570e2adfc7dcc7f119b4df94"
  },
  {
    "url": "math/mid/index.html",
    "revision": "29d03346bd02837384b4a88db49b5ef7"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "2e2d7bf9037501fb94d1d1af5f3b789c"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "76c987b96ed72152a0424874c3ad0ef5"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "d82f34d02aec2704a51c2a10d8ab79bf"
  },
  {
    "url": "wechat/index.html",
    "revision": "234cf3ec87057c2e0b142d7ef3d9099d"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "fcf9738cc26d250835d70b97f7797740"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "3d7308391efbb22ae72ebd035acb5330"
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
