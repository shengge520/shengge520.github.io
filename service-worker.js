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
    "revision": "41798605c2030770accc5e91c8da281f"
  },
  {
    "url": "about/about.html",
    "revision": "90a1017270f66af74bd862ae28c9db6a"
  },
  {
    "url": "about/index.html",
    "revision": "5745a64d504a2a2820fc939dffa69972"
  },
  {
    "url": "assets/css/0.styles.a3296ad5.css",
    "revision": "a3d198e2c922d8a974c4cf8a674f38f9"
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
    "url": "assets/js/10.f5588094.js",
    "revision": "a845334adfb11bf30e25c9e36842f82c"
  },
  {
    "url": "assets/js/11.1bb044dc.js",
    "revision": "839f0cebe0198582e46a6e67c957f5d8"
  },
  {
    "url": "assets/js/12.ac1c9bfe.js",
    "revision": "6af3e8495f3d141a190a8d029710a84c"
  },
  {
    "url": "assets/js/13.c9d95537.js",
    "revision": "a7db1059b1d3453bba1cc92628a512bd"
  },
  {
    "url": "assets/js/14.4fa5bdeb.js",
    "revision": "a5f6f10405a00ae6ecade51bc9e2dd1e"
  },
  {
    "url": "assets/js/15.d64df5cd.js",
    "revision": "4e1f586dd09b786fb218e2e9224e243a"
  },
  {
    "url": "assets/js/16.078edf49.js",
    "revision": "73fc025e87e776c9c233a517bf262acf"
  },
  {
    "url": "assets/js/17.ad332fe4.js",
    "revision": "8202e44dd3f725874be4c9babaa968e0"
  },
  {
    "url": "assets/js/18.bc0a5a1e.js",
    "revision": "3463ef53d68d145dcffb4840aba6b26d"
  },
  {
    "url": "assets/js/19.67ba5ba7.js",
    "revision": "72e11c91a844d988b1bda6a1e2732e98"
  },
  {
    "url": "assets/js/2.acc8da17.js",
    "revision": "b5fc048ef801123240b3eb1f95ecb99e"
  },
  {
    "url": "assets/js/20.bbbd34c7.js",
    "revision": "d9c1f7971d0f7c5a3d82aa0fcd74ec28"
  },
  {
    "url": "assets/js/21.9ffe51bb.js",
    "revision": "12428dbf4efee9bec7e5f90e0b5c7359"
  },
  {
    "url": "assets/js/22.5c9a01c1.js",
    "revision": "6e889950b88dc72e415a583e8a7f6c54"
  },
  {
    "url": "assets/js/23.3b57e1ca.js",
    "revision": "63c1b35bcf0b46c043ad61d7c273315f"
  },
  {
    "url": "assets/js/24.205d9e79.js",
    "revision": "b177dca124579faa91e04d53a9eae14b"
  },
  {
    "url": "assets/js/25.7b79f00b.js",
    "revision": "6897963375d377636fd7710eeadcce3b"
  },
  {
    "url": "assets/js/26.0f724145.js",
    "revision": "036f633425883a96455492105bbe23f6"
  },
  {
    "url": "assets/js/27.0c7e57a1.js",
    "revision": "e5d9ae4a5761c3ac9a5836b647910856"
  },
  {
    "url": "assets/js/28.9e1a1f7d.js",
    "revision": "d77f6e631b323752de79b7307d2c607d"
  },
  {
    "url": "assets/js/29.f1852538.js",
    "revision": "a80e9a3202ec9cefc9654d08b5660e08"
  },
  {
    "url": "assets/js/3.9e02105f.js",
    "revision": "8e2bf79d1f254818d7fb06f0d5fc1c86"
  },
  {
    "url": "assets/js/30.eac77d2d.js",
    "revision": "64dd4a88820f9bd2e8a851adb4bfc632"
  },
  {
    "url": "assets/js/31.84322c7a.js",
    "revision": "517a32ac440f3c484d1c48bc68cd3384"
  },
  {
    "url": "assets/js/32.b6e4343c.js",
    "revision": "d01e59ecf00af54e488f5681a5ffc7a0"
  },
  {
    "url": "assets/js/33.a1385d0f.js",
    "revision": "9842cbe718921ce044aef1f75cd08ff9"
  },
  {
    "url": "assets/js/34.954cd014.js",
    "revision": "3b7135f32c40d1a2a245544bcfb55c41"
  },
  {
    "url": "assets/js/35.24920764.js",
    "revision": "912c718cde6e158aa9d4a91e1339de88"
  },
  {
    "url": "assets/js/36.494b5abb.js",
    "revision": "843eeb15f1a70849f0e8325bfeed6ec3"
  },
  {
    "url": "assets/js/37.9b27b766.js",
    "revision": "4a453ab3fc41aad37405201c8d3ec2e9"
  },
  {
    "url": "assets/js/38.47d6dadb.js",
    "revision": "8eef84bf42843f5aea689a08f595530d"
  },
  {
    "url": "assets/js/39.4d2c70a7.js",
    "revision": "9b8d0c0ad5e9bb313c7a4f120af6b089"
  },
  {
    "url": "assets/js/4.228bba68.js",
    "revision": "28f7f055b24554c26d5fdc77de7131cd"
  },
  {
    "url": "assets/js/40.cd33d7d7.js",
    "revision": "68063af644059f770743d571ec4ae7df"
  },
  {
    "url": "assets/js/41.ec8ba0b6.js",
    "revision": "b0d8b39af46f327c3d12e97ee3811be0"
  },
  {
    "url": "assets/js/42.71cc1089.js",
    "revision": "45ed361bf073fdd9780b970798496df0"
  },
  {
    "url": "assets/js/43.1d786f62.js",
    "revision": "232c63691f3ef1ce0d4e9db89bb85fc2"
  },
  {
    "url": "assets/js/5.342a208c.js",
    "revision": "8813316c2c0e60bf859ef9aa97dd9fbb"
  },
  {
    "url": "assets/js/6.e7d3571d.js",
    "revision": "438176d0a770260f488d1b582d0990db"
  },
  {
    "url": "assets/js/7.4ac56d97.js",
    "revision": "19686a275d2d43101c33c7a0d9dfca01"
  },
  {
    "url": "assets/js/8.c4eb8b0e.js",
    "revision": "5fb205b54d984163e26e7db9d75a3a2c"
  },
  {
    "url": "assets/js/9.36658cc3.js",
    "revision": "26be4888ae20704c65da0240c7a73a3e"
  },
  {
    "url": "assets/js/app.e03ee125.js",
    "revision": "6a125caf47e41c238b13389ec2a95309"
  },
  {
    "url": "css/style.css",
    "revision": "be10e077c03070061f62ce57b451639a"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "b904fd256f846b8932422ddccf640304"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "84482a8ccbcd1ef783759a729d56a90e"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "ca0fc17346e9daa29077942928381d9a"
  },
  {
    "url": "fontend/index.html",
    "revision": "1fe00e59ff40669e4f306b5d4c250b0a"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "a559c7f1757d6ebf2eb46665c429cded"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "298f2501d42d343a2e68aef03860e5ae"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "0e3b2d4807af3720fec52f642ed96b8c"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "e1fac89a890f50548f056bdca6185684"
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
    "revision": "88bc081a4374f146feae74a98f4533ea"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "665ff06d387b841b540550418be0710c"
  },
  {
    "url": "interview/css/index.html",
    "revision": "fda98d2952009d1e89c135badeee8090"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "24437546c624e423f5739a420dd45244"
  },
  {
    "url": "interview/html/index.html",
    "revision": "ccf2261c74a1a745ed00295bb63db7bb"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "c7e22cfc6433020d5aa26c18b9584241"
  },
  {
    "url": "interview/http/index.html",
    "revision": "7f9f474c66fb36d4c9b5c12e99b51319"
  },
  {
    "url": "interview/index.html",
    "revision": "7aaa744d42a6644088cfffb8d397c655"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "6359e304b59e9154853645b0e8a584df"
  },
  {
    "url": "interview/js/index.html",
    "revision": "4a893e45a134af57a0c797b0b3a996b2"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "2d0b10433bb9d60c32529b2f1b052334"
  },
  {
    "url": "interview/node/index.html",
    "revision": "3e8e0c04a7b0923081327f4cd2601a08"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "8ab28da74c691fbd5032f3aac58704cb"
  },
  {
    "url": "interview/react/index.html",
    "revision": "55067d7d6779da2545008e5139c1f3c9"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "1bc30c211074f35effba8b589eb27fc1"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "37099af072ff3fd3b30a5ab92df85aad"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "2aea10a1fe2047d30c19d366b5d193ee"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "0ff6e7310ba1b1dc8449c83cd4c7f904"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "17d9a50f33fa6ccbfac2c85ae8444238"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "afce0d8e0c6596d8372238a9e3473feb"
  },
  {
    "url": "wechat/index.html",
    "revision": "cc7f595259dd02c08599276a9eae7fb0"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "40cd4edeb930cfaefc4a67438e3b1a1a"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "ce378ef0e05880e304fb86d4883b89c2"
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
