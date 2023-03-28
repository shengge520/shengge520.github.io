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
    "revision": "24b16d18dc8c08d92278c5ec02479cbf"
  },
  {
    "url": "about/about.html",
    "revision": "6ef56792bbf8724e0bca6fc34a312998"
  },
  {
    "url": "about/index.html",
    "revision": "7c18be13c0332872a651f452c4014e95"
  },
  {
    "url": "assets/css/0.styles.84d4ba23.css",
    "revision": "75e3a3a666428e153dbfcd4e9e54554d"
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
    "url": "assets/js/11.8e7084f5.js",
    "revision": "0fd4e90a90231011e9701e2092651594"
  },
  {
    "url": "assets/js/12.b19e8911.js",
    "revision": "60b5bc12899b7090e76ea5acde5f1d54"
  },
  {
    "url": "assets/js/13.961227b9.js",
    "revision": "6b8afb3afc7a49b2a5db46755bf3ac4d"
  },
  {
    "url": "assets/js/14.47397780.js",
    "revision": "b8d64bd361bb4510ec917386575d4c33"
  },
  {
    "url": "assets/js/15.4268ced1.js",
    "revision": "4071fbc9182549b9b950989efb347569"
  },
  {
    "url": "assets/js/16.746f7e16.js",
    "revision": "d99ffe1df70e0eafc2193b6c7c128647"
  },
  {
    "url": "assets/js/17.99582b53.js",
    "revision": "8e90a7464c3fe59df9863b0b763b7ba8"
  },
  {
    "url": "assets/js/18.e15fbe6a.js",
    "revision": "d5c8ae5c75f7f8b0d23ce91dd114184e"
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
    "url": "assets/js/22.bf39f5aa.js",
    "revision": "6183a3697de8846c5f931122ff20b270"
  },
  {
    "url": "assets/js/23.590f846f.js",
    "revision": "8fc9ce2d96aba5e74a5f9af58fc3ca0b"
  },
  {
    "url": "assets/js/24.a06c6503.js",
    "revision": "5781e8e1ac56384a14fadae9554640d4"
  },
  {
    "url": "assets/js/25.b308dfd3.js",
    "revision": "9fbc5e8b201514c9e6e5f6f265c0b3b2"
  },
  {
    "url": "assets/js/26.f1973d10.js",
    "revision": "aa6bdac01f001a2b877a39852b10fc0b"
  },
  {
    "url": "assets/js/27.e4d85a00.js",
    "revision": "059364e7b5584f2747ea1e4d9fee206f"
  },
  {
    "url": "assets/js/28.f5c0deeb.js",
    "revision": "483ca04a08bfbfdf8db70903834914e7"
  },
  {
    "url": "assets/js/29.f4a6d93b.js",
    "revision": "a588ef6093f3dcd22ec9309c1271a8ec"
  },
  {
    "url": "assets/js/3.a5594c29.js",
    "revision": "5b0b5707bfc4f9900e504a8f136e0596"
  },
  {
    "url": "assets/js/30.f52d5e07.js",
    "revision": "c5435dfcab5c2c525039355a0981b966"
  },
  {
    "url": "assets/js/31.925578ce.js",
    "revision": "f07c03d695035fd5af39099e6e7c433e"
  },
  {
    "url": "assets/js/32.3dde4ac2.js",
    "revision": "1b2cd4257b2818e87ef128b8c6fda7b5"
  },
  {
    "url": "assets/js/33.feee1fd7.js",
    "revision": "bdc792b33dc11d494a09ec490758f3c6"
  },
  {
    "url": "assets/js/34.5619002f.js",
    "revision": "fcf225c7f5626058e9b23ddd023013bb"
  },
  {
    "url": "assets/js/35.afeb073a.js",
    "revision": "98184311ca41ab7e736fc879b6701f5a"
  },
  {
    "url": "assets/js/36.503f497e.js",
    "revision": "5e08ae600faad60e56558e7810a945fd"
  },
  {
    "url": "assets/js/37.00bb89e6.js",
    "revision": "c11fe665e2000e049535ba7a1941e359"
  },
  {
    "url": "assets/js/38.fe506769.js",
    "revision": "652b8b6d979f5d297e0dbe4ff3e27fe8"
  },
  {
    "url": "assets/js/39.7a98cf59.js",
    "revision": "1fb63dc5ca0a43e9c41da7d651f4c0f6"
  },
  {
    "url": "assets/js/4.1169c5b8.js",
    "revision": "bb080edb48652c4cc3eb8da354a1d9c3"
  },
  {
    "url": "assets/js/40.f1f41bc9.js",
    "revision": "987efdea9afbf9e3435316bc709c18cb"
  },
  {
    "url": "assets/js/41.e81c8b5c.js",
    "revision": "fe27e3dfefbe1879780801a0b7213db3"
  },
  {
    "url": "assets/js/42.53683d1c.js",
    "revision": "3e2962377ff3836c51d02fc4246d0758"
  },
  {
    "url": "assets/js/43.cf1e91e6.js",
    "revision": "42491710aa24c176312372d9d2425935"
  },
  {
    "url": "assets/js/44.43894e3b.js",
    "revision": "ec14fc9a26573beae40c5091da1ba0a9"
  },
  {
    "url": "assets/js/45.3b03ac46.js",
    "revision": "23ceebc42633b3aca91615ddc787d0a9"
  },
  {
    "url": "assets/js/46.ea1abdc8.js",
    "revision": "8a75ce819df8a5bada0eae5951f1f8c9"
  },
  {
    "url": "assets/js/47.79a47e11.js",
    "revision": "5e7040b1d5fe06d309c69e0514f3d1fb"
  },
  {
    "url": "assets/js/48.ddcb372a.js",
    "revision": "fe1c26d6765ddf6cf33c983795df3c8c"
  },
  {
    "url": "assets/js/5.351a98e5.js",
    "revision": "b5c8c4083591f5c92f30694447b2bc7f"
  },
  {
    "url": "assets/js/6.43d1cec7.js",
    "revision": "cfc4424539141804cad027332b74cf6f"
  },
  {
    "url": "assets/js/7.490397ed.js",
    "revision": "9e06d3492512094717b1910f531e1689"
  },
  {
    "url": "assets/js/8.cd961958.js",
    "revision": "9d6f2283ddd1eff2c60ff81cc5a86a9a"
  },
  {
    "url": "assets/js/9.70fbd1d7.js",
    "revision": "2c6710c6e07972e0c6ff0afef1febde9"
  },
  {
    "url": "assets/js/app.9cd53366.js",
    "revision": "679509e2ae7a4b3c69bd3ff9149c2057"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "5bf49304b64ddea22ae2d97bf9112a2a"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "2a8fbd2a1ae4e7be586f1aa2f7c94d33"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "d0bc0765987004f9ea23a2112c9a45d5"
  },
  {
    "url": "fontend/index.html",
    "revision": "f042e770e71b6d13ffe0f9abdfe6e7e5"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "534ae692e41b14f9802a6af826861b75"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "0d4d8f7f33389d609d2417fb5401f0a9"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "f548a15329a11206008f08e692a5522a"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "4af8902e8f2b59dfdbefa57540a23e44"
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
    "revision": "d036a9df99b5e34ad9b3b28127522441"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "6d7061229c5aa03072b4e15858262d5d"
  },
  {
    "url": "interview/css/index.html",
    "revision": "283bccb86c8ffea7ab1b5c4fda671461"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "a0b97d2b74ab29daefc717d796100d5d"
  },
  {
    "url": "interview/html/index.html",
    "revision": "c7ff3a8fce54b4fb5813b67a7b0f05f9"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "aed475d7c6eb6d16091b78d1df52ddf4"
  },
  {
    "url": "interview/http/index.html",
    "revision": "f99603b377678b71ef069d73f1dbac80"
  },
  {
    "url": "interview/index.html",
    "revision": "3d1157b64fe26c32cf7b819f7601dc70"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "21e5746f5bb2b032436fc7e3e45d06c2"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "4bfd4fc52fb0fd440e16e2d9b1719301"
  },
  {
    "url": "interview/js/2-interview-js.html",
    "revision": "f6f4b851ec85cb513d75d418d227aa34"
  },
  {
    "url": "interview/js/index.html",
    "revision": "aca9571309ef982b3e8c60c131693451"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "38aa97213d7d8a414520adb443643e0a"
  },
  {
    "url": "interview/node/index.html",
    "revision": "0ab8652a806a3bc1962859c82034dcfa"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "2750609bf4617b34c5b9f096027a7f58"
  },
  {
    "url": "interview/react/index.html",
    "revision": "00999a7451743659cef9c82e46790a6d"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "1d2f3e4d4ce0207c9fa4181e269e4d71"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "ceef731daf92ef46a49534e5c1898275"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "f8cd34800839e0966c211124e80eda9b"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "5149fb9a66b3db761bf7149da9324143"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "eeeea02c7a3fefc75a70ef67b7843d5b"
  },
  {
    "url": "math/index.html",
    "revision": "7ab68b7fb61945a7f66b9f56e2f6a131"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "b00a5fea13c884b3ef95e96d609c7a7e"
  },
  {
    "url": "math/low/index.html",
    "revision": "4678b897759bbe3144a3a6e01f8d4137"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "dadfdd4f7380bd8faeec9d83f573055f"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "01d6864e30a940fcb1176236337c13b2"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "44a18b54eb9c1054300f701da3e9ff18"
  },
  {
    "url": "wechat/index.html",
    "revision": "25225e7a8b126605e7c3a37cef08c5b7"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "057d822ae5a5d6190cef9cab47801d13"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "93e1e61713e555732d5c3b4e95c7ca34"
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
