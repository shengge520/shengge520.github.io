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
    "revision": "e7052d9cca51d60d4f8ce30fd6222b84"
  },
  {
    "url": "about/about.html",
    "revision": "bffb9c011072b3cad86cbe48bcc2f281"
  },
  {
    "url": "about/index.html",
    "revision": "3c1083cfa079d05d741bcc1cad34c3bc"
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
    "url": "assets/js/15.50c8adc8.js",
    "revision": "6719b1abf2b110769f224055dcdd8513"
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
    "url": "assets/js/24.35209d74.js",
    "revision": "19a7683a494fa9c08d9b9392f1774c38"
  },
  {
    "url": "assets/js/25.1f7617aa.js",
    "revision": "f8babf054cc2a022c910ced18fbff34a"
  },
  {
    "url": "assets/js/26.68785397.js",
    "revision": "c0bc6dd686a5dd766f054ab93953fe1c"
  },
  {
    "url": "assets/js/27.f6b83471.js",
    "revision": "6959602ca76f4a24ad35a0021e3eb2e9"
  },
  {
    "url": "assets/js/28.b7353298.js",
    "revision": "10f0c92d5e98ee6b131316582fd4ddbe"
  },
  {
    "url": "assets/js/29.844effcd.js",
    "revision": "39e7601509229e7b195eef842dd2b574"
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
    "url": "assets/js/31.894a22fc.js",
    "revision": "fa5ccc1d7c4ad9fc81365ef0f9d63fe9"
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
    "url": "assets/js/34.f765344d.js",
    "revision": "672035079ee14e5199cd2e0943d0e5e8"
  },
  {
    "url": "assets/js/35.2a54bf2a.js",
    "revision": "8af74a7e95a75c9c7554ee76ab5787c8"
  },
  {
    "url": "assets/js/36.095d7995.js",
    "revision": "8d1b22bb6a8dd57c047c4c3da0b03b96"
  },
  {
    "url": "assets/js/37.f4240526.js",
    "revision": "aa0f0e1066e8342342cba94169064260"
  },
  {
    "url": "assets/js/38.6c837734.js",
    "revision": "6b6b7be7e2d8b5f5641e0817e47da4ef"
  },
  {
    "url": "assets/js/39.a7430197.js",
    "revision": "daf8cfb71beee1e63545f13afccd70eb"
  },
  {
    "url": "assets/js/4.36786160.js",
    "revision": "a2642e1739d5ad6e091e00f15b427221"
  },
  {
    "url": "assets/js/40.d5a5e1d8.js",
    "revision": "97fe74c24b3c1b8a5678321fd2fc6705"
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
    "url": "assets/js/43.6f9f4a0e.js",
    "revision": "2e24b13b8ad6069cdd09ca2c70c8b4d0"
  },
  {
    "url": "assets/js/44.52a967ec.js",
    "revision": "5821cbcc9349f4f9a4f177ff49466336"
  },
  {
    "url": "assets/js/45.d1d44143.js",
    "revision": "f8c79209c6a782d117390dfbb164b229"
  },
  {
    "url": "assets/js/46.2ce1c242.js",
    "revision": "43e030e56e7bf3dc1f084abd17300412"
  },
  {
    "url": "assets/js/47.90865b2e.js",
    "revision": "c5e17c7069aec9337de78e8deccb5357"
  },
  {
    "url": "assets/js/48.99132ba9.js",
    "revision": "fd2811eb0361d15ea5d2d234021cc9d0"
  },
  {
    "url": "assets/js/49.1e3682cf.js",
    "revision": "f6d75c19202f4afd92633e1d9145c597"
  },
  {
    "url": "assets/js/5.e9697a71.js",
    "revision": "fe2f96c5486a9c13fcdf55425cfc4b57"
  },
  {
    "url": "assets/js/50.f6617dec.js",
    "revision": "963fc6aa1415f6436979c5ba983748cf"
  },
  {
    "url": "assets/js/51.aface244.js",
    "revision": "557d137fbe8d6b94355195afb888c0a2"
  },
  {
    "url": "assets/js/52.512eb6f2.js",
    "revision": "aa1607f1fe07ba3ea7cc63fe638b2f9c"
  },
  {
    "url": "assets/js/53.f7aa6858.js",
    "revision": "7193bd595db46425026930c23caee385"
  },
  {
    "url": "assets/js/54.d6a371ef.js",
    "revision": "dac09a7bcef1e276445ced8fe11d33bb"
  },
  {
    "url": "assets/js/55.38c46e97.js",
    "revision": "538931fa6ec1a13aa2bf1ae7436e905d"
  },
  {
    "url": "assets/js/56.d6898e51.js",
    "revision": "f3e91d6c825998b68d1ac119f549eba6"
  },
  {
    "url": "assets/js/57.5b28bb64.js",
    "revision": "a847e0307bc9d3600d94909835e4fa9d"
  },
  {
    "url": "assets/js/58.e1601d79.js",
    "revision": "348689582afff99f3214e435fbc481d8"
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
    "url": "assets/js/62.8392ae41.js",
    "revision": "923ac37e1ab01716ccc0b172afbef295"
  },
  {
    "url": "assets/js/63.34ed9b37.js",
    "revision": "e86f2e290e62815284b9eb08e6abaeb7"
  },
  {
    "url": "assets/js/64.29971755.js",
    "revision": "a0aa17f53279db4e6159721639515e83"
  },
  {
    "url": "assets/js/65.a15dcd5e.js",
    "revision": "05cefde4d2fb5c1f1706ac33046e2133"
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
    "url": "assets/js/71.9805a66d.js",
    "revision": "c802e59e90cc89de168e8536031a0998"
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
    "url": "assets/js/78.f258d3b2.js",
    "revision": "071b6a099b0f02fd428ecda4d19d58ac"
  },
  {
    "url": "assets/js/79.59680df9.js",
    "revision": "0c410979ab6be12a05e96d0468b6715a"
  },
  {
    "url": "assets/js/80.bac4547f.js",
    "revision": "975022981572e230acff5af8317dc45a"
  },
  {
    "url": "assets/js/81.8476db6a.js",
    "revision": "ba9a87c26c4ab9bf77a000ba77ca5cdc"
  },
  {
    "url": "assets/js/82.b32770df.js",
    "revision": "45abfd92a637078b134a48b6a6264334"
  },
  {
    "url": "assets/js/83.f4b405a2.js",
    "revision": "738e8c2e674b971e6b177c7324f94927"
  },
  {
    "url": "assets/js/84.43d82444.js",
    "revision": "e7fe7218e2fcc8531f6ce0ca595ff4b3"
  },
  {
    "url": "assets/js/85.dfe99ef8.js",
    "revision": "d8147669708fe5258231b718de5909d0"
  },
  {
    "url": "assets/js/86.a121edf8.js",
    "revision": "57ef6be1bf6207a9235aaab2ca3db3c8"
  },
  {
    "url": "assets/js/87.d34116f8.js",
    "revision": "8427ff048b868847f3d5d7f05ec21118"
  },
  {
    "url": "assets/js/88.8557a2ad.js",
    "revision": "7e52a8a3cdb25b798fed9dbbd4ac56d5"
  },
  {
    "url": "assets/js/89.9eacc9f0.js",
    "revision": "c6d557b17466344e5c9de49ad4384955"
  },
  {
    "url": "assets/js/90.90d428dc.js",
    "revision": "d7834b265fde72dfad2ce3fce3de80c8"
  },
  {
    "url": "assets/js/91.5bd50dcc.js",
    "revision": "3ad5bf5920b4965a7b7cac1fd4ef4e56"
  },
  {
    "url": "assets/js/92.30607d27.js",
    "revision": "4dd39419f791184a78c9c98fac08d104"
  },
  {
    "url": "assets/js/93.9432286b.js",
    "revision": "185896f1742c8bd9fb5f0ee8d211d488"
  },
  {
    "url": "assets/js/94.cb244236.js",
    "revision": "a5edb72c776c63a8250921b5b6d9accb"
  },
  {
    "url": "assets/js/95.72e0ae23.js",
    "revision": "1adb43b0a1939850a845e4e28083ce70"
  },
  {
    "url": "assets/js/96.56438b02.js",
    "revision": "28c18f1976159891ad32403c6fff1e51"
  },
  {
    "url": "assets/js/97.04c8ac3d.js",
    "revision": "a06eb89e6c3fdee3bbf7aece0dff1f3e"
  },
  {
    "url": "assets/js/98.df8311b2.js",
    "revision": "ca3e5f29007333015976e183d2d2be48"
  },
  {
    "url": "assets/js/99.1e2fca3d.js",
    "revision": "dfcc745735d773c703fa0989eff61c33"
  },
  {
    "url": "assets/js/app.cfd80bcb.js",
    "revision": "43235c0cebcb68788ba13da984906592"
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
    "revision": "5f8bdd567bf827724942281d4e2baa41"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "bef2dd1f0ad8a467de232ae0e4267b79"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "302eaa0347fd1b7cbf61dacfb62c7132"
  },
  {
    "url": "fontend/index.html",
    "revision": "223ab21c4e1d3dd4601eee6a948c1cb7"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "970b6d6c021d1263b4febb203715b368"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "3ed55c833b30cacb53a06a69dbe9d87a"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "0c3ad57ce06b06b3dfb8652326ed4d64"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "b25594eb5acf8f706d2245b39371993f"
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
    "revision": "68499efe5174b528cb0f2933eac4e15b"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "b5b04d570658bf22e1b2158b719a89f7"
  },
  {
    "url": "interview/css/index.html",
    "revision": "9e7b83b1d07e5c9708b4a873db53450d"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "22f8b163db65729d2e87fe03cec7eb41"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "52c568b6cf8b2044ec349b16b012d5e3"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "869e920930ba8b2282b31a75ad9162fd"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "f479cf6eef59e1623c1269f672ed07b0"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "d3c75e09bdeb4cae5beae24bffe766ff"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "88541f7efec18560410d8f61d7e738f6"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "1dc741378295853f7e63261dbd6fc13d"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "5ae6a71960e6eeda1c644d28035c318e"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "a2d146280e7e3f6cb81cf769d4218544"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "6abad376843425049ca622e1fc799cad"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "91053677e014e9eea8c4354c21f0727f"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "9137813324820c1583310f43c270b658"
  },
  {
    "url": "interview/html/index.html",
    "revision": "dbe4d690e08167f6b7d8ac490405320a"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "5a94d66b1d1126ac0667d0431875c051"
  },
  {
    "url": "interview/http/index.html",
    "revision": "d8520e1cbe3f8273360866f8af62c5c6"
  },
  {
    "url": "interview/index.html",
    "revision": "e13d39bb725efb4508d979dbe8faa8ca"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "062b14d505776f324e459e2e9f8e89ca"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "5117509afdfebef4285e2d6eab63afd9"
  },
  {
    "url": "interview/js/index.html",
    "revision": "4ba26f4f9231b8410e5244ac4601f393"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "b23ea1c52e5ca6b857437cf5fc7803f2"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "f2c9d88b9fe1189744ed0b581d33a0ed"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "a5c8616c1479333971b20fdace12d0d3"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "38704279407c53bd29bc4d3bac331fc4"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "e382f90d865d25824169c28660883ac1"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "523d8e229847b05298f53ebc519e1030"
  },
  {
    "url": "interview/node/index.html",
    "revision": "90014834044c7d314fac08235926cc8f"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "6bcf180272376073f799a655a741a04a"
  },
  {
    "url": "interview/react/index.html",
    "revision": "bfde64a0b50d050b97f4d864bc422d93"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "cad196e3a49f8f2f31f80a7194c214ce"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "43f11d1fcec322042adc2091bf0ada44"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "9527c43e2c4c16e5345069084df2059d"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "c7cc096451315920fa7f499029db82d6"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "00c64582e1186dfe4b67ed4edb245212"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "dc0c344edcbcd09649288bba8516c15f"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "652ff0d0972138215c17aeaf12105cbb"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "96066baa02ca5272ff2c8d62f6ef9f63"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "def36dea7656540bf7e260b7afe16086"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "c0a4a6cb06485d210695f74ad4599664"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "a684cbda656c559450a76ae27bca4ee7"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "012f602530558f930d3021de6c6da17e"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "f051f722e2c8faa599f729a2242bbc1d"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "2811c378cbb5a6bdfb2d148cc3d3452a"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "3408034da97eb381ee89951412f28721"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "a0554dddb1a3748b67065f39a702d403"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "102342a72f1c8adf139a513acb8b517f"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "3601a075c63ca71fce0ca6c4345066a4"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "dc71e2f72e1fefe5858a5d14908e9cc8"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "df6137e4660fbeb9653c295689d1471d"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "099dde51ef1ca47dbf3ae17c30af7b2e"
  },
  {
    "url": "math/index.html",
    "revision": "732b806ebe055c672914ff99c9761a06"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "5e0e8bb33aa3d20a2f68d94f5ff4407c"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "20b3149e32ecec82c3dc210e7685b0fa"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "5e0fbb78ac2a429665f3f255dcb96fa9"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "cb4f189fc28f3ed8501c321280c3f5ab"
  },
  {
    "url": "math/low/index.html",
    "revision": "5e840d4d8fbf2ababa8eb5b8bfb3d85e"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "89bc44719dfd2480e704551e89d1c794"
  },
  {
    "url": "math/mid/index.html",
    "revision": "6b226c95536932e13ffc581fe70ce3ea"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "e8ae123aa6767d34edc38b9d0e0f4c28"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "223b5aeb74ee1243d4b87831a9b04512"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "bc0043db833e6069e95c9610532ac30b"
  },
  {
    "url": "wechat/index.html",
    "revision": "15cd27eed9a6bcd8031b226122b1ef0f"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "241d34c5d4a778b004fc61a760f764a8"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "c4d36e223764d9ccfd9c31240abc11bf"
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
