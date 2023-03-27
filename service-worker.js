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
    "revision": "7e41a06f8f8707f3922126b3002bb603"
  },
  {
    "url": "about/about.html",
    "revision": "a306aa5a028626f4e6ad163005e10f23"
  },
  {
    "url": "about/index.html",
    "revision": "d4fbfb62f7f023dbf1515b7d748e9768"
  },
  {
    "url": "assets/css/0.styles.79b87b26.css",
    "revision": "de246e796e8cec7e4cabe6200459e33d"
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
    "url": "assets/js/11.7b2991bc.js",
    "revision": "83443167d54383f1b75f8fdd1de92307"
  },
  {
    "url": "assets/js/12.d944bbe1.js",
    "revision": "d315d9e100304bbc15b031f9b3924433"
  },
  {
    "url": "assets/js/13.ee1e97bd.js",
    "revision": "c846cf158f563749986009fd51afb444"
  },
  {
    "url": "assets/js/14.ae491d2c.js",
    "revision": "7e030c7d2ea40aa1966bf1c3a9367008"
  },
  {
    "url": "assets/js/15.6e67d48b.js",
    "revision": "b1b0bfbe8da490ef7a8d9c888774fdcc"
  },
  {
    "url": "assets/js/16.579616b0.js",
    "revision": "958d5900c4fdeb22994a104a537f30f7"
  },
  {
    "url": "assets/js/17.9b2a0804.js",
    "revision": "d90ed32697275a23a0e613c03a90600f"
  },
  {
    "url": "assets/js/18.a2c4f047.js",
    "revision": "dcd03865a2dcee249ad6cc4af5408f59"
  },
  {
    "url": "assets/js/19.e096c7ee.js",
    "revision": "588d3d57927f127d3c6bbe2afe99d500"
  },
  {
    "url": "assets/js/2.9560d7c0.js",
    "revision": "d19b4cf833fa184340962ae0c2de72a1"
  },
  {
    "url": "assets/js/20.24c7da3d.js",
    "revision": "8c8ac9833086e60e667ee9f8e1055911"
  },
  {
    "url": "assets/js/21.7e73ecf0.js",
    "revision": "f70d837b3a8dfa8da868524c87a0e855"
  },
  {
    "url": "assets/js/22.4bf59185.js",
    "revision": "f2a70803366a9a299f55d2f26e332a76"
  },
  {
    "url": "assets/js/23.590f846f.js",
    "revision": "8fc9ce2d96aba5e74a5f9af58fc3ca0b"
  },
  {
    "url": "assets/js/24.2416285d.js",
    "revision": "0701247722945d4809f05eb967244577"
  },
  {
    "url": "assets/js/25.c827a555.js",
    "revision": "bc82f39f522bc64c9b9c7099582d84e1"
  },
  {
    "url": "assets/js/26.90af9e96.js",
    "revision": "31f9a3b58106a51fe062248193dc6862"
  },
  {
    "url": "assets/js/27.2bc29f15.js",
    "revision": "0d60eba2e19abf9ee024b343df9890a3"
  },
  {
    "url": "assets/js/28.867d6a4c.js",
    "revision": "312bb3aafad1532ea0a6192741457434"
  },
  {
    "url": "assets/js/29.d85dd949.js",
    "revision": "9d6fd7b04faff8dacd46720ae6c0f088"
  },
  {
    "url": "assets/js/3.a5594c29.js",
    "revision": "5b0b5707bfc4f9900e504a8f136e0596"
  },
  {
    "url": "assets/js/30.38f0e7d8.js",
    "revision": "83f6e9b5fbc7d65713c7a4d8e8316de3"
  },
  {
    "url": "assets/js/31.bcec1099.js",
    "revision": "ab802048889706621edbc74e6c10f019"
  },
  {
    "url": "assets/js/32.f7addba0.js",
    "revision": "d44da3fbd051f32f0c9caf8bfdbb4386"
  },
  {
    "url": "assets/js/33.915d8746.js",
    "revision": "b1fc427853d4de35d0d2b30d41bbd30e"
  },
  {
    "url": "assets/js/34.9f23aadd.js",
    "revision": "80bd53d40e29ee0cf30f86bec9bdf3a1"
  },
  {
    "url": "assets/js/35.d2f3973c.js",
    "revision": "df3e8afd591f00813bbb82cef942a123"
  },
  {
    "url": "assets/js/36.b7cac46b.js",
    "revision": "42f0fbd14424f7ba0050b4033b5f436a"
  },
  {
    "url": "assets/js/37.de18a42f.js",
    "revision": "5cb60fad2a41b0ac22486290bb626f23"
  },
  {
    "url": "assets/js/38.fb237906.js",
    "revision": "32569f05c9b630c027c886de03df0504"
  },
  {
    "url": "assets/js/39.2658c654.js",
    "revision": "d92d17daeabbadcaccc37dae3b6da542"
  },
  {
    "url": "assets/js/4.1169c5b8.js",
    "revision": "bb080edb48652c4cc3eb8da354a1d9c3"
  },
  {
    "url": "assets/js/40.491ee8ca.js",
    "revision": "c47eb3fc5b32e4d74f5fc2da75ce4d22"
  },
  {
    "url": "assets/js/41.019f0732.js",
    "revision": "6b38b6053c3f23d88ed3b43b6e7f44f8"
  },
  {
    "url": "assets/js/42.00e58291.js",
    "revision": "040593d182cf3b728f185f504d173fc9"
  },
  {
    "url": "assets/js/43.a50b15e4.js",
    "revision": "d804fdc8f9671d269d1bf4f008adb48d"
  },
  {
    "url": "assets/js/44.f6006d7d.js",
    "revision": "b47edd81437b124a64ef7abb62dbd99f"
  },
  {
    "url": "assets/js/45.7c7ce459.js",
    "revision": "05f165a0851306b241179217a5f16656"
  },
  {
    "url": "assets/js/46.f8b75214.js",
    "revision": "c84b8cf0efb8320aa8f79beab8bfc9f4"
  },
  {
    "url": "assets/js/47.99052c59.js",
    "revision": "2f36db010b55477145d6689ad4617fe7"
  },
  {
    "url": "assets/js/5.282a3810.js",
    "revision": "2fd7676cecb1e911964469efb542795a"
  },
  {
    "url": "assets/js/6.5e9d1b20.js",
    "revision": "626e33ee005b1d9e99e69a5b42b8713c"
  },
  {
    "url": "assets/js/7.142000ff.js",
    "revision": "b7ae3f7f99b9f7451764a6d3d6c79ad5"
  },
  {
    "url": "assets/js/8.cd961958.js",
    "revision": "9d6f2283ddd1eff2c60ff81cc5a86a9a"
  },
  {
    "url": "assets/js/9.6316f2c2.js",
    "revision": "550ed5615977e0738252cddc7a854913"
  },
  {
    "url": "assets/js/app.b18a48c5.js",
    "revision": "76d22fa83f3e4f7abbaa9eec247abc0a"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "34d5b106163e8bcfb498ff76c7e752d6"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "c45d9222c0a5016a9aff19385ffb3bad"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "bcea09a35ce27bb959aebac6ad555884"
  },
  {
    "url": "fontend/index.html",
    "revision": "9e7f66ad5d57f921c3a3731264dfc60a"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "bb9d498f58e43e6d2be7613bf71df4eb"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "10b1f0034a0a4cc1c8e65f93c29193a7"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "7fbff3b2d1fd61238173ac710ef5626b"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "e962352f2dca29f2b4c1b16891a1600f"
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
    "revision": "8035529ad67e9f2cdee63f75293071bb"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "5587c97f6b6471ca5c028523a56cedd7"
  },
  {
    "url": "interview/css/index.html",
    "revision": "3326ab40473a83e6b332937377c06958"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "1f135060d798ee7a1ca1245b289e407e"
  },
  {
    "url": "interview/html/index.html",
    "revision": "0764755ecb58363ac70a21e2b592434c"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "ef876cb431e016760e09420da26396f7"
  },
  {
    "url": "interview/http/index.html",
    "revision": "b8d905a33c0cecf805facc84b34027fd"
  },
  {
    "url": "interview/index.html",
    "revision": "43b0c1181f4c0d44212dce34d55fe696"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "df74a237f59492cc10d970dae223c7e9"
  },
  {
    "url": "interview/js/2-interview-js.html",
    "revision": "84797e22d3ecbc03e6836d2cfac8c3bb"
  },
  {
    "url": "interview/js/index.html",
    "revision": "2f548ec16f318309607464c8234960ab"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "6c1c08928a7729d00dbb97f0b0de965b"
  },
  {
    "url": "interview/node/index.html",
    "revision": "ec24809d562416da2e531289d4f7da08"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "69000e2b09c86b344f2e34c3c0adcd53"
  },
  {
    "url": "interview/react/index.html",
    "revision": "13b0852216fc924c713c248595b0b716"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "81f94418867b3df2aafdde0a18c8204d"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "0464fbbc4257470a07b0beb2f273b8a3"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "936cd63f58877d3f6baed177346e1e30"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "d3b2975c54d9ed56458bec5ac2ab1f19"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "788706e1ebfc9fd190ba523897253a7c"
  },
  {
    "url": "math/index.html",
    "revision": "433ebd2a3755471ae5a93eb93802e90c"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "eefa10d4d10438cf2ffbd0545a586bab"
  },
  {
    "url": "math/low/index.html",
    "revision": "5ceadc3f76717d043aa2229bb4b1d221"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "8d32a37a9544dcffc1f3039e5b85ead1"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "64c3067476dcb233ca6e52fb9559cbdb"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "11eaa6547e2c572fbf0ee6b32770ba92"
  },
  {
    "url": "wechat/index.html",
    "revision": "b89a145f59a12d9c591f07e4005d0212"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "5c83bcd035bbae4025ac90b91351c796"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "0f9db6df2d39947264c9e0626b9ac88c"
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
