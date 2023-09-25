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
    "revision": "7bdc5a826c786e5b3fdeb2afd27d017b"
  },
  {
    "url": "about/about.html",
    "revision": "436c9a82a8a1579030e2fe91173f420e"
  },
  {
    "url": "about/index.html",
    "revision": "7974bfad66bcc91c1d4dea30e56ce548"
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
    "url": "assets/js/10.f9ca1139.js",
    "revision": "33ee81f3cbc71eda3ea6924bf3ac9baf"
  },
  {
    "url": "assets/js/11.7b2991bc.js",
    "revision": "83443167d54383f1b75f8fdd1de92307"
  },
  {
    "url": "assets/js/12.b885fc62.js",
    "revision": "82c183eba44592637880424faf2ebb84"
  },
  {
    "url": "assets/js/13.ee1e97bd.js",
    "revision": "c846cf158f563749986009fd51afb444"
  },
  {
    "url": "assets/js/14.7413730f.js",
    "revision": "e2fe7a1577929728ddbf33138895360b"
  },
  {
    "url": "assets/js/15.b9c653f5.js",
    "revision": "0339a86f6047e37f7e21ef4ff31a1a97"
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
    "url": "assets/js/22.7efe2fe3.js",
    "revision": "1f690780eedadd1ba47504371132fe35"
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
    "url": "assets/js/25.0c91780d.js",
    "revision": "0eec79449cdaf2c7de6002f35099b488"
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
    "url": "assets/js/3.704df541.js",
    "revision": "c96e238fa016f86ae9346e766251cd9e"
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
    "url": "assets/js/37.975323ba.js",
    "revision": "7a8bb43d24b387a24c2152126eb4b98d"
  },
  {
    "url": "assets/js/38.d4f8d5b7.js",
    "revision": "bed86cb6bc79f3c52cee346cca47e214"
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
    "url": "assets/js/43.29c7963a.js",
    "revision": "bd42009c653eec39844d62a5c31274e3"
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
    "url": "assets/js/49.a5fe8b55.js",
    "revision": "60dcb6b961dddfd1c01adbbd6ed8d371"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.d03faec7.js",
    "revision": "966206c51248d16ef60a7f1455582308"
  },
  {
    "url": "assets/js/51.6cda0830.js",
    "revision": "46c1704a4dbbe1a3a7a6b7f0d34dffb8"
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
    "url": "assets/js/55.6dcc4c45.js",
    "revision": "078b06888a853dc9ba55fc83ab4b178e"
  },
  {
    "url": "assets/js/56.3b108c5c.js",
    "revision": "eba9845032c9ee25549996837cca7fd0"
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
    "url": "assets/js/64.c154466d.js",
    "revision": "7f16bb7e6d5fe7e89c6ff490879ffa0b"
  },
  {
    "url": "assets/js/65.093928b2.js",
    "revision": "7b0dab07b77eded8d3a85247ea7ee4a7"
  },
  {
    "url": "assets/js/66.f67bf1a3.js",
    "revision": "ff209a660e0094bb2d39af641fa14724"
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
    "url": "assets/js/7.142000ff.js",
    "revision": "b7ae3f7f99b9f7451764a6d3d6c79ad5"
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
    "url": "assets/js/76.e235ea51.js",
    "revision": "5c94a65c900a5169fb9b6c87cecc8a42"
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
    "url": "assets/js/9.79236837.js",
    "revision": "4263677eed42be4c47d281bf188cf7ae"
  },
  {
    "url": "assets/js/app.a7af4c23.js",
    "revision": "dbfda15cb984ddba72f4532d1c7d8a53"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "4e84bda8e9f9959fac40b6096fb95ce9"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "cc64a20d5bf5118446f0a78247730b0e"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "818b8c37eccd0198c9b1fd58ca0a9bb1"
  },
  {
    "url": "fontend/index.html",
    "revision": "64be91395ad4d9a61b9e2c2a9e4528dc"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "fdc28b4b0cec55cdfa4f812ce5cbbd00"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "7523909092baa5a79a434807906d0024"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "560b07218308228fc48473bdeff41c44"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "ed31cede429b1bc7a2faee3e6e91e9d6"
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
    "revision": "0090852a2fd6b27d22076e626b598f6b"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "99ab1959dd81bec188877be2ec2627b5"
  },
  {
    "url": "interview/css/index.html",
    "revision": "2ee4a4ff75b48448396b654c0b0a53fe"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "ef93becb537e031f9209a4610f47add8"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "98a1f49d480d90f4f4bf5aa4bf2afc89"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "ce59b37da9e70602479e3727e750b2af"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "9fe509357c96d406cbf2aaee08541904"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "059dc96a9cfa17466430d96debacd7c9"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "923a850b0a5a7d3c1cf39c21de11bf3d"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "d0020bd05a5c0481c17966d60385cb56"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "11eeb7e7e1754015b9e42999f5825c06"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "aa5765d5e99396211d360f53f56785eb"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "c67b6952a8d585e366751f45cec04424"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "6d31293f8634b79e0f3bacb8517f23c7"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "20af907741725a48044726f2f3019518"
  },
  {
    "url": "interview/html/index.html",
    "revision": "e5f31ad302595fd165eb53d4b2bf45ef"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "deafc68653e68fe14d39bea8b000be58"
  },
  {
    "url": "interview/http/index.html",
    "revision": "fc2f7d17a29ac542c9f347e8fa265e44"
  },
  {
    "url": "interview/index.html",
    "revision": "da1b3cf97b17efacd5215df7fb8cc963"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "08259ab44625e26cff1107d2c57beaad"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "828593ac5e16d50aa96c99b339dc4401"
  },
  {
    "url": "interview/js/index.html",
    "revision": "48a20f8e87938214425cedbacf1e564f"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "22f36964cae4fee6ee8a092e13424d67"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "e099fcf8d725f60c5af2e393e3453e6c"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "67ee84b2a24d8fd97d2f60fb072d514b"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "e16a9653306b3f4bb054703b30238ed4"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "13aea3c97397ad1625ac90dc72285b86"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "5f95795d620fe97c0e5b6cfad27e934e"
  },
  {
    "url": "interview/node/index.html",
    "revision": "a40410ff15b7539ac1c55c3fe3e5f84d"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "0aca6efc46d42a538b6fca62dd589875"
  },
  {
    "url": "interview/react/index.html",
    "revision": "831a25eb8f35ec2c75a43dcd79564e8c"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "561d716a6070f908323e0d4c3e02254c"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "9c18d4c5e96c1c9b5003c38d031bacd4"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "ce39936dd919d3b55f2e2136afb2cf58"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "3fb1acda849eca69ef3e56d68ded2eea"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "860612dfad697bfc9e3346e500327d13"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "687a79f2b22c3a2c50d497ef6aa917bb"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "daa2d55026462c8bbaa1e63ce07e2a4b"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "7a9ce3280166e0ae0eb883309d6ef894"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "e628972a928d8916d96a1bb3cf69a865"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "2f5096fff6a560a8d4cfec70aedfb1e0"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "9794e2a4fe1c0f7cc09fd4e666c86cd8"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "580c09b4279175e7913ca5a14bdc7338"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "8bc7a7e64b075266848c020b78c6b08d"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "13ad287f76aa4557dda0cbab71299a81"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "6f8d0d43674b54e7768faaf5982bc3b1"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "94642f402d01ba3c1e0f4fb31ecf7bf2"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "d5c7d5d89dead3fb2fe54f6b302796c1"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "ba199c366635b22670d4d927ee340384"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "6bbee07048a1d3d225003ae8f5d95847"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "9dd3c14f44ab6e0cd6ce2f6ba0d5ef2a"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "ee506a1dde789eaeb982edcd01799da7"
  },
  {
    "url": "math/index.html",
    "revision": "e34fc06098f34e0d4e416890d86b8b77"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "393da5e137e483dc58e5c1d389610bcf"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "c3466c50d87664a296ae29dc054d72de"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "872a143f2649fc4c937c2418328bea05"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "b00455dd5f1e4d7071d70b9b0c5a3a76"
  },
  {
    "url": "math/low/index.html",
    "revision": "cab88bcd220c991690445b8bf681d1c0"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "6d74a9d2a15786d1b626a1698d755014"
  },
  {
    "url": "math/mid/index.html",
    "revision": "8ada00e1654a0b83d9ea6efd749e3e7c"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "bbb6c1e035d85bb35db7d2de1ac574c3"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "df490ea05ab463b0226b8a2c6280fe8d"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "e6f12c3b1192b3ded72dce5ceb117143"
  },
  {
    "url": "wechat/index.html",
    "revision": "797ee484d2a7b140ec95d83d14b08a99"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "052f1e624dcb839ef492befc4f82fda5"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "71065dc177f54c085b9ce174a6627a63"
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
