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
    "revision": "526a8e66de5148eb364737330b86bbc5"
  },
  {
    "url": "about/about.html",
    "revision": "d2940f623e49f88023b2f28840af18c4"
  },
  {
    "url": "about/index.html",
    "revision": "26c953ec2a38ad5b87510543967256f5"
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
    "url": "assets/js/13.d1f38b92.js",
    "revision": "f54d1b5f4e2c8aefbc9d6bdb8a3f7cb6"
  },
  {
    "url": "assets/js/14.ae491d2c.js",
    "revision": "7e030c7d2ea40aa1966bf1c3a9367008"
  },
  {
    "url": "assets/js/15.b8e4b359.js",
    "revision": "8f14ca0b88e0c56c82dbaeb804a02530"
  },
  {
    "url": "assets/js/16.579616b0.js",
    "revision": "958d5900c4fdeb22994a104a537f30f7"
  },
  {
    "url": "assets/js/17.92107c7b.js",
    "revision": "31ea73e3d150420c55827299ba9713cb"
  },
  {
    "url": "assets/js/18.e114705f.js",
    "revision": "e9ef56afb35b03c1694ad24cfbc09f51"
  },
  {
    "url": "assets/js/19.2379244b.js",
    "revision": "e0461ded0fa51539a83872278f61d4cb"
  },
  {
    "url": "assets/js/2.9560d7c0.js",
    "revision": "d19b4cf833fa184340962ae0c2de72a1"
  },
  {
    "url": "assets/js/20.11dbbbae.js",
    "revision": "a1ea9a446112ce4cbc0a1ad0ecbe2393"
  },
  {
    "url": "assets/js/21.47b3483d.js",
    "revision": "80a61e0e01bc002355242cfa07be789e"
  },
  {
    "url": "assets/js/22.32d22837.js",
    "revision": "4380ba2a48215f3fa5a828722298aaaa"
  },
  {
    "url": "assets/js/23.715ca182.js",
    "revision": "12ce2632aa074fac5162e30211af5a6f"
  },
  {
    "url": "assets/js/24.f52c974b.js",
    "revision": "a1bf6cda6eccc553c36c620b6ba1edaf"
  },
  {
    "url": "assets/js/25.2af1215d.js",
    "revision": "aee9197777b8dafb2e816f0dac802e69"
  },
  {
    "url": "assets/js/26.d11042b2.js",
    "revision": "3734b22ec77ba46a622a122ab19146a4"
  },
  {
    "url": "assets/js/27.7857b139.js",
    "revision": "fd8b94fc10f58a6a89c937a064bd3764"
  },
  {
    "url": "assets/js/28.7a60fef5.js",
    "revision": "c1e7cd8c926a66c29639ac4b2db64c75"
  },
  {
    "url": "assets/js/29.6aacb3e5.js",
    "revision": "1cbd6d44e3d8e7f9693598d66446c11a"
  },
  {
    "url": "assets/js/3.44370360.js",
    "revision": "0ae9e85b59ccc327c645aeeb1d7159ef"
  },
  {
    "url": "assets/js/30.10afab8e.js",
    "revision": "c1bc8b92db00eb45fe8157c65e322f61"
  },
  {
    "url": "assets/js/31.41769199.js",
    "revision": "59f0c5e54e3a22b953b75ab36cf82261"
  },
  {
    "url": "assets/js/32.2fe6b916.js",
    "revision": "a2220a871949724dc16edb8c44f42e6c"
  },
  {
    "url": "assets/js/33.02dd2b6b.js",
    "revision": "904d8ae3b2db1bb2bf9e6abbc34401b9"
  },
  {
    "url": "assets/js/34.01823ee7.js",
    "revision": "9b4735f1ad75b6330f6421d6b5716d33"
  },
  {
    "url": "assets/js/35.f15ea31b.js",
    "revision": "3d6464ac916e696ed48305f49e26e78b"
  },
  {
    "url": "assets/js/36.02e89828.js",
    "revision": "485038e07c3fd4189446548e8146a243"
  },
  {
    "url": "assets/js/37.b74976a5.js",
    "revision": "5bbc0898794b901f89bafb02fff10255"
  },
  {
    "url": "assets/js/38.e1e738f3.js",
    "revision": "d09097f05a487f729198c5697b103967"
  },
  {
    "url": "assets/js/39.caaa9357.js",
    "revision": "ed28df845cb88314c432f8438e454aa2"
  },
  {
    "url": "assets/js/4.1169c5b8.js",
    "revision": "bb080edb48652c4cc3eb8da354a1d9c3"
  },
  {
    "url": "assets/js/40.078ced67.js",
    "revision": "a1de59936f4f388501bb04a964eace64"
  },
  {
    "url": "assets/js/41.e24db4a0.js",
    "revision": "0213e91d43f3d3cac255c63bbce28a4c"
  },
  {
    "url": "assets/js/42.b1e1fc4e.js",
    "revision": "a865082e346a04530eed8f38e82f3bdc"
  },
  {
    "url": "assets/js/43.75caf680.js",
    "revision": "45fadcceffb5ff40ce1a822fb07c61df"
  },
  {
    "url": "assets/js/44.068cda08.js",
    "revision": "9fa65b70db15e9082485614f9e0c95dc"
  },
  {
    "url": "assets/js/45.1dc653c1.js",
    "revision": "f582141c05cccaa6da1ef877ee02a708"
  },
  {
    "url": "assets/js/46.2f3e9f27.js",
    "revision": "31f923bba429a6218ce8ecdde1f50397"
  },
  {
    "url": "assets/js/5.cdfa7c2d.js",
    "revision": "0e4cd1faf8571a42b342a7c906e1e144"
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
    "url": "assets/js/9.d34968fc.js",
    "revision": "54a53a787b5c7b7f674ed358b2b810f5"
  },
  {
    "url": "assets/js/app.8467a85c.js",
    "revision": "d5ae9126dbb0d38461d8ca9281f0a10f"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "fb03587aa66d1e88bac87e972f00b47a"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "70cabb7a5187b2e96e1cb801f5d67f82"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "d031cd9641c81d039aa64c962c72d120"
  },
  {
    "url": "fontend/index.html",
    "revision": "84f8471712a674d94141849b98294c15"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "36e75b1a0c6af583e528ad41b53b573b"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "62222637da231e7addccbea4fad27f38"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "d3417d19080f21541252f952022cfa1d"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "85eb98f7071c5cf7b83b6d1ade953746"
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
    "revision": "ef00cfb46a9e5c0c49a9cddddb864da4"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "87c3e2c9a740a2210f008d5c9294aecb"
  },
  {
    "url": "interview/css/index.html",
    "revision": "18835ed03007313c5c9a4ae59e5fbce0"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "bd5a6461b8cdb998f8affe4cfa6b4209"
  },
  {
    "url": "interview/html/index.html",
    "revision": "0e2fc9d6d279d5066f5fe8b81456bcaa"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "6e0573209ac178c7d2df7fc8f19612ce"
  },
  {
    "url": "interview/http/index.html",
    "revision": "46774c621495323e807da2ae37d57c81"
  },
  {
    "url": "interview/index.html",
    "revision": "aab54f99858d4bfc0c7d8ce49b157f67"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "3ddefbf3857c8b109f5ade974f5d86a2"
  },
  {
    "url": "interview/js/index.html",
    "revision": "aea8c91fd6363733df7f94c649c096c3"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "312f9301bad2beeb874514e30ac475a1"
  },
  {
    "url": "interview/node/index.html",
    "revision": "655ba0db90fea15434076527da735421"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "6c183b6d589f06d19762e4941d364e55"
  },
  {
    "url": "interview/react/index.html",
    "revision": "a71530c92d5f245235da8d41812fb248"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "37022f7ee21978edf06ee1bdaf0d1e24"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "5d4d136c88322c82decc863250237ceb"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "95f9404f329f33e63275edc608f2cf8b"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "823593de8ed6ba9756bf37e051e36a3f"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "29bc6f082fc8944d31c914a866ed6612"
  },
  {
    "url": "math/index.html",
    "revision": "8bb164f65e131f13a3da7ddba87c5f1e"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "cfd9b3320dbd76003017515a627adaa9"
  },
  {
    "url": "math/low/index.html",
    "revision": "137aaf5ca807a93061c662f2dbd9e4f8"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "918bd3e83998d391a03e3826c806e9a7"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "e21247a37ec8a94f1c677eb11e59fa63"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "30988e2fa588a77a1da256fb1e8a0dee"
  },
  {
    "url": "wechat/index.html",
    "revision": "77444f5870b5ca096267fbb649f296f0"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "0ff951bb8ba37f07717b42c45c41949e"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "9ceba1f288b7a3c87c060ec1862d4651"
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
