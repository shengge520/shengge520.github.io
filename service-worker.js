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
    "revision": "97cce356852ba45d662d5797dc6845f0"
  },
  {
    "url": "about/about.html",
    "revision": "b8eec260b9e7815bed02b7f96fb74c8b"
  },
  {
    "url": "about/index.html",
    "revision": "2914a927b3f8b3ae9d975acaf13d9b16"
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
    "url": "assets/js/20.7cd560c5.js",
    "revision": "e39114416fa25d39cefc229c3552824f"
  },
  {
    "url": "assets/js/21.8219a72b.js",
    "revision": "b6a36bd68cd48b1cab23c725e06f9cae"
  },
  {
    "url": "assets/js/22.680a3a14.js",
    "revision": "c18bb75f1f8c8b094b4e81a8f3168cbd"
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
    "url": "assets/js/25.8ca0c049.js",
    "revision": "5acd61acd96cf8a929082d98e80c6a0f"
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
    "url": "assets/js/3.f9d6563f.js",
    "revision": "fd1f7f82270617397c69bb9a30eab6a4"
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
    "url": "assets/js/37.038ff15e.js",
    "revision": "8035d662d3fdd1247346db4458eae6f3"
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
    "url": "assets/js/41.e13c831a.js",
    "revision": "6eda7d69b0ae44c8af975d6f990fb6ff"
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
    "url": "assets/js/49.a3c42e88.js",
    "revision": "048a968cc9663f0bacea261f96e1e356"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.1a1855e9.js",
    "revision": "24ed6529358627cd76ae9f14f35979bb"
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
    "url": "assets/js/53.90f2ea47.js",
    "revision": "17fb40244921a80ca7ab1b8fd8fe7d8f"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.f929d7bf.js",
    "revision": "3f12035e78dd0515729e8e88a900d906"
  },
  {
    "url": "assets/js/56.700953e8.js",
    "revision": "06e9fb67eab3f4d4636a3330dc1b8e8d"
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
    "url": "assets/js/66.70646fa8.js",
    "revision": "d2784820790e6a404c29f5242f5447f6"
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
    "url": "assets/js/72.05115e34.js",
    "revision": "d0d496414e57ea1eb9673c827d93ce2d"
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
    "url": "assets/js/app.bd11f182.js",
    "revision": "c938077b103b25f9c597ff4f64c54e0c"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "271015d2fb210eac87a575a77d700638"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "717051b7f8490ecac9a06ed3ef161f83"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "f606e65a5f50e457fa671c6e5c951838"
  },
  {
    "url": "fontend/index.html",
    "revision": "f5fc59bdc4838ded9e654fa5989de83f"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "c15fb48276059375c2beede3eded7061"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "50d0bb7d4f4da1445423ef0dc3ce68f2"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "caecbc2d68433dbfe4545634c8aa0835"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "6c71d4a083db34caef6500cdaf42600a"
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
    "revision": "af3a91e0ed1bbff5d035c655bc86d99e"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "6177c5c0d5572c73ccb78a8750c2a665"
  },
  {
    "url": "interview/css/index.html",
    "revision": "47c3fae2fd94c4eb875d02e419101103"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "3f99761e75fee5090959888afe88d724"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "3ec61f59412f98fa1742c3d87aac8146"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "c0de507b2dda3887430e83a66eeb52f2"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "00e34c19f2a849ef6cb93833392828ae"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "4d2381e66b4ead9252e785177fe1d0c3"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "caf01dd71378d13e5c2436bb934bb0ef"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "0f73315a47c2e7866986452018ae57f6"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "067e33f0f344142a8ce29031930b73a0"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "a4426c07e6b3edc8a5d53aac343a67e8"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "72a425381e6f1e0f3083c625d4bd8d74"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "eb65fb56d874c8e68bbe01a833cb6bc5"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "9747d22610e64b65ff010c79b322b7b1"
  },
  {
    "url": "interview/html/index.html",
    "revision": "51a030c2e229ea24d9e011ff43b5d7d5"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "27fe39af47ada519824489cc50105c07"
  },
  {
    "url": "interview/http/index.html",
    "revision": "75c144c1355e99b2e847e748dda72664"
  },
  {
    "url": "interview/index.html",
    "revision": "3bd456f6bc781839174b441daf1d8b74"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "f27e02120cdf5345e7846d39bd48454e"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "97675814e26e3beef0aed5f77683e883"
  },
  {
    "url": "interview/js/index.html",
    "revision": "c55f1de1e2e916e8c98d55451acf5bde"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "1e935b55700c055c3d0772f2278ec4c1"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "1a8dc23b6b753c017360542c09440279"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "520b502e4d1d9ec02bb0ea2aaa7ae2b0"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "3d2c17a3e7cc3513c1e56ef19db88961"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "ac039ade9fccbbba36bbcf94a6a97446"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "ffdaf2bf2d3edb87fc3f1bc08d1d4e16"
  },
  {
    "url": "interview/node/index.html",
    "revision": "032bfba2d449e2f01f7260057d72c153"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "0d07927c51710642daabae8cb18d3589"
  },
  {
    "url": "interview/react/index.html",
    "revision": "4843072817812dd3a6cb9f3becc93dc6"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "951c0e11ec51444c9f4741f995628c38"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "8e93c99b9e2d88a7a2e8e8ffe2abd45e"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "9ab7e8619f6eeb5fbf7e2f1e0d2255ac"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "5a374f6d04141bd410048fc9f251d26b"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "919aa7feecd20d88d0f134af9aebee87"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "f09704e378735ed20d42897eb2813908"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "39a334b678c7ad97de344c9c0c11e077"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "f11dec21418a9ef54138580f7a6cd4bf"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "1d635b37f049ff14dbd3fdee82389b81"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "84074a428138653efaa4ffaf5908bdc5"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "52b5c8cb0307bbdd73d29a7387a7d01f"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "65d9fd3cd93a2d78bf5ef21cc602b49f"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "414d15bb47f85eb01995267c328aef20"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "95b4bb416bd06ff7a20baab6e6e0351b"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "a75af94b7053f03b3da2b3b21f814812"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "a2d394dcb1b04d7f756a5420575f3ec3"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "a6edb0cbb614f16ac1df8bf65870cdbb"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "335a3f6864245f326828413b11f6598b"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "2771ea2e17dfb34ce85d1a6c8d302f5e"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "cec7405fab2d1f80aab2cbdd3e9b158a"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "44e55c2c1f631257c5958327dd72b263"
  },
  {
    "url": "math/index.html",
    "revision": "700a58ccf866031fcf23ecc2796e0297"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "28f1bb4573470788faad03280e43cf10"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "92c34506a69f3784d39f50dae8402011"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "f039ed2ee1e123b8f1f96fc031c1f2c1"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "f3804fabc11d53a20c82098dd8a52665"
  },
  {
    "url": "math/low/index.html",
    "revision": "95f544bf2d58bb93aa528ebfe9c4c831"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "c686ab053f6bfffc3282fe575c77118f"
  },
  {
    "url": "math/mid/index.html",
    "revision": "0edf5791f06661b6f0c6fc282e760ec0"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "c12028db66d7f510e502622f57ca51d3"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "1b36e01f3c7faf0559b47947a28762c2"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "9a6dfae9aed1875fa7f4b30fac54c5ea"
  },
  {
    "url": "wechat/index.html",
    "revision": "e5fc4ff7a5751067008a2e8856f9b2ec"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "4cd056cf8c824ecccbda93c85f9cc278"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "79e97603a6e1e9d3c121248642b2cd90"
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
