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
    "revision": "7db2e163c91407b13c209217133d60f4"
  },
  {
    "url": "about/about.html",
    "revision": "0c579a0215a7e2c8155c96b0919d03de"
  },
  {
    "url": "about/index.html",
    "revision": "f86014709d08266ba0952e7fb93f26e9"
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
    "url": "assets/js/15.01d12901.js",
    "revision": "90a91ab53b90a7d42888528a0873b182"
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
    "url": "assets/js/24.c2edcc45.js",
    "revision": "df723475f4426b3a23233ad6ff818e1a"
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
    "url": "assets/js/31.13ab2b04.js",
    "revision": "f5468bb702d229f761e67a7188066f04"
  },
  {
    "url": "assets/js/32.a054aa86.js",
    "revision": "965554015c79b34f5ae5cb31814e763b"
  },
  {
    "url": "assets/js/33.d4f75f3d.js",
    "revision": "be25ec5240fb60bc5567f8216d8bb231"
  },
  {
    "url": "assets/js/34.ec8791dd.js",
    "revision": "e0b8b154b4a4926a5dea1891814cd17e"
  },
  {
    "url": "assets/js/35.c2089872.js",
    "revision": "385c9a5a464402e235f457f976eb6f31"
  },
  {
    "url": "assets/js/36.195f9b3f.js",
    "revision": "9281d841d7856ea82e97cf04aadeffbd"
  },
  {
    "url": "assets/js/37.cfd93265.js",
    "revision": "c96740319479124a547c7b21da74bff1"
  },
  {
    "url": "assets/js/38.eb038822.js",
    "revision": "8a390785ef744aac771daf735129014b"
  },
  {
    "url": "assets/js/39.45cbb0bc.js",
    "revision": "4c4342e6de68bae19c1820df3d3dfe87"
  },
  {
    "url": "assets/js/4.36786160.js",
    "revision": "a2642e1739d5ad6e091e00f15b427221"
  },
  {
    "url": "assets/js/40.3a4198c0.js",
    "revision": "d3368a5ad166cce892ab51db76ee4f49"
  },
  {
    "url": "assets/js/41.c83e2461.js",
    "revision": "22bf49bb127f1c40bb8bb7095ebf8636"
  },
  {
    "url": "assets/js/42.0e5b6685.js",
    "revision": "6f8ed4b0f5d3e01120df094e442c3702"
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
    "url": "assets/js/50.95cbd3c2.js",
    "revision": "cf6fdb5327db1387e72ec8caf7c45a2c"
  },
  {
    "url": "assets/js/51.25cf23fb.js",
    "revision": "4e7e66ecd7fd8c5a618c31f439a17444"
  },
  {
    "url": "assets/js/52.cdd3b9b1.js",
    "revision": "e0cd28b7633d271d63cdc56397e2a9e5"
  },
  {
    "url": "assets/js/53.e9f67a68.js",
    "revision": "46f1429a863eabc1d3b1b9d2ebc8fdf6"
  },
  {
    "url": "assets/js/54.4a909b9c.js",
    "revision": "f2663bc86589329b5e33d4e22f43f3c0"
  },
  {
    "url": "assets/js/55.d3e2365a.js",
    "revision": "551683a3c4dbea4975cf4d5071796af6"
  },
  {
    "url": "assets/js/56.ffb04294.js",
    "revision": "994b88e3d4962a6f67b0932826c6cc31"
  },
  {
    "url": "assets/js/57.64b541ee.js",
    "revision": "8844a54568fd6b5ade658fedd5fea277"
  },
  {
    "url": "assets/js/58.374903f9.js",
    "revision": "eeb76a73af29a69a22bdc39e1d4df05f"
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
    "url": "assets/js/60.fce0e2d2.js",
    "revision": "97b659ac4f9842280442a6399778d150"
  },
  {
    "url": "assets/js/61.2ddf4f72.js",
    "revision": "1b0b70bab4f2d18d7e23c3bdfeebf42f"
  },
  {
    "url": "assets/js/62.0cc750ad.js",
    "revision": "5c2a3506d041bd4a10be5b854c313e48"
  },
  {
    "url": "assets/js/63.8c08b37f.js",
    "revision": "9befcb173f049e8343baa9fe1ab2b427"
  },
  {
    "url": "assets/js/64.792835e6.js",
    "revision": "937202c25af244886584e1b8dcf61841"
  },
  {
    "url": "assets/js/65.9bab57fb.js",
    "revision": "eec0b9cb8a40eef8e30eb7d0e9169c29"
  },
  {
    "url": "assets/js/66.b3021f69.js",
    "revision": "4957326edcaf2b4a412e9e91f8b1e915"
  },
  {
    "url": "assets/js/67.8a359635.js",
    "revision": "7bc8d5ba12114158fb69cf37974cee0a"
  },
  {
    "url": "assets/js/68.c196eb30.js",
    "revision": "8af69eb20de2eab2c4d2e77580ac7e55"
  },
  {
    "url": "assets/js/69.a803bedf.js",
    "revision": "9acfb0ec7bcaf3dab192c21a8c7f14b1"
  },
  {
    "url": "assets/js/7.1ccd5c4e.js",
    "revision": "973d123fd9ba0cf06ab9e68e704c4f7e"
  },
  {
    "url": "assets/js/70.5ac4cd00.js",
    "revision": "508146a30b0f36a70b06e04877839f2c"
  },
  {
    "url": "assets/js/71.f4630a7b.js",
    "revision": "57a5d452c0479c216acd08299a752e41"
  },
  {
    "url": "assets/js/72.b72f45b8.js",
    "revision": "731502ac55390677f0392f7c3b661139"
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
    "url": "assets/js/76.682fcfec.js",
    "revision": "d7dca50e2ca53e71e1f0b7d2635d009a"
  },
  {
    "url": "assets/js/77.c8cb4cd6.js",
    "revision": "3e27d22a29537a95d047583bfe77ebb3"
  },
  {
    "url": "assets/js/78.f258d3b2.js",
    "revision": "071b6a099b0f02fd428ecda4d19d58ac"
  },
  {
    "url": "assets/js/79.594cde86.js",
    "revision": "fdc0d038696a07b3282f79ac9d480a4d"
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
    "url": "assets/js/82.11f57a6e.js",
    "revision": "6599df7b97523f9c2f1f043aa4e45fae"
  },
  {
    "url": "assets/js/83.176a71ca.js",
    "revision": "37aade3ae9c38fb74e785396cec36575"
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
    "url": "assets/js/87.316230e5.js",
    "revision": "543b492bd3f0ef26ac9749197463238e"
  },
  {
    "url": "assets/js/88.690acca8.js",
    "revision": "4d257a273a059af6184fa9e1f5645632"
  },
  {
    "url": "assets/js/89.9a9ad4a2.js",
    "revision": "f49f90dc498b51786bc3e554bde89642"
  },
  {
    "url": "assets/js/90.08d5bf84.js",
    "revision": "84b81853e2b8269b90f73689081339d9"
  },
  {
    "url": "assets/js/91.4462375e.js",
    "revision": "c86c4b190d5aae01e87b77bf51c7138c"
  },
  {
    "url": "assets/js/92.68fa25d2.js",
    "revision": "77615b89aa73b485c044e907ed7e7ebe"
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
    "url": "assets/js/95.dfe0303b.js",
    "revision": "f9e47f5b4f9e59a959d34e393021fbbe"
  },
  {
    "url": "assets/js/96.8261aec8.js",
    "revision": "4404bbb5ed02da490a9bdb662ca62859"
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
    "url": "assets/js/app.7394fb10.js",
    "revision": "2b8092db2d5540953ed3d970562cc266"
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
    "revision": "7386349dacf23d56d4c11f58ced014e1"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "ae8aa656f2b536c9de2a6dbf85949567"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "4055c435f37f387891f0471eccecbf32"
  },
  {
    "url": "fontend/index.html",
    "revision": "68cd67f49f0505bb5ef9f3cfc4965b78"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "794cd3659e735bc3539c2435146af81f"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "b7b751ec193c74ec657707f7c73f5f42"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "387eb92bba6b9f9c0bc9a9247cc3d0bc"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "cf4a8f54fccc5a693056ebdc8e3bbcac"
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
    "revision": "ef70dffe5f744198488887edd1e00790"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "54a200cfeed121b1eb6802761109cadf"
  },
  {
    "url": "interview/css/index.html",
    "revision": "b61035a4c595ff0c4b5a7a8fda96036c"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "9be8939859fba77aa1e458e5b7c8de5b"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "d482bf462a7eb802819ace755c8bdfdf"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "aa0d827f2b3bddbd766ecd6d110d47a4"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "7956b3e8a143bae66e5d14ddb1b2a323"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "ccd130b90978804b9ce876116703cdcf"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "9377ea2e561ce2365bd00e02ccb0848f"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "0e2f2a4f7afd63079b1719630b1ee15b"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "ffed73e48105fb06adeec7e8a4b0494a"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "af54735ce9e041e7cfcc9a6020e08dec"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "183ee98b50bbd2a147e0d8c5863c55f5"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "3c777e228c4990e70aceccd67263b336"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "8bf28249a1f069c445324dc8392b1b28"
  },
  {
    "url": "interview/html/index.html",
    "revision": "81e782672abf915190980e2c0113ba32"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "5a1d96e23436cc904aa609e8aa2a1840"
  },
  {
    "url": "interview/http/index.html",
    "revision": "c618874c404a31a1eed1220466ef1529"
  },
  {
    "url": "interview/index.html",
    "revision": "5bd3f8de185187abc64e1c8ada19e9c2"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "0201f7b8a8ead7bd6786487ff86065d1"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "bdf32aa9b026565e29b22d04d473e85a"
  },
  {
    "url": "interview/js/index.html",
    "revision": "293a849ebf90ef3ab8626eb953bf9851"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "d97a58e06bd5f268b5889e22de089665"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "edea4a687f1c9b42f2b7848d9ce58d98"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "ea836506394cdb99d09bf54ad9338352"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "2a30db5b440703fcf9226e2670e04148"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "c03cca2f15d89689a78c4b65ef0133a2"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "decd7d64b476aaf567b51de576330ae5"
  },
  {
    "url": "interview/node/index.html",
    "revision": "cd1bc764c20c8281781f5500ad2da8a4"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "819e72f19d96e507e15fb3044f37822e"
  },
  {
    "url": "interview/react/index.html",
    "revision": "443ad568c67fec83f4add345942c04ec"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "b278d662e0a8af317ad52f8afb9114dc"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "e842d9ea6e48e7c3d4239f0a700f2ac7"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "73287cb816767b290612b76495e8a9e8"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "355e367981941f68339a0c007bbf6119"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "7d80fc9ef56c8247b04ad03c3ca15755"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "e0468fc1786b3d021b4358ffd6d9cf17"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "30a2f361ce6c61f117bd8d7e26527a02"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "3fad3575b3ed15b5229a025969932d75"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "8205a8f872f4d68a37ab0839041ad88e"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "20edc08aaeff9111f37efe58537e9399"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "2855e7bbc9ea5b3cf00fac914f56c8c1"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "507b9201c45a1e4b67b2e52ef60b0a99"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "84b6e9ad42fa0f57d5fa79cd6a98c731"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "4df0ab90df381f52d6d1dc085c232093"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "3cc43d357ed87c227abeea4307c67531"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "32a1cbd8ff5537f51fadbdbb4dee19a0"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "6bc3ac938b22990d3a2202fe3ff54fcd"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "c45da86819409624f482092f4cad79ae"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "0703305c2e38abc4b806a0c7df40032c"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "d93688df3627629dba4b810902d1c568"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "0a0a6575928c1dd5042dec387f467e7c"
  },
  {
    "url": "math/index.html",
    "revision": "22c291d5d9c10e32c300def970346c99"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "e028d1e8133e89ad5a7f576897b28bc8"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "738f3bd021a879fb0c6b79e671bd8310"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "cd408409147a4da27a2ffc5603785a71"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "431591cd10535658a9712a9ec87ac11d"
  },
  {
    "url": "math/low/index.html",
    "revision": "d430747839cb923f697eddd3e6769e4d"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "37c1b1ba8ed43b4ee0ace643e0f9518a"
  },
  {
    "url": "math/mid/index.html",
    "revision": "6971afb2a564efe634b38881ceca5e88"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "ed52ed01c4bb752c46975a27301dbe3a"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "0510c56bfc99a57ffe138900672011b7"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "a9ce8c3413e39dc21dc94d679e1fa63f"
  },
  {
    "url": "wechat/index.html",
    "revision": "35d32d487f2202a8ba2abd3e2db86d50"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "c0db0e35bccf2c9e0365852cff9d06c7"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "28e6b7d7c0a7a002d3500468b196ac23"
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
