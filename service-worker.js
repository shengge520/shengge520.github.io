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
    "revision": "83c816988f4077e0f8989faa6dda81d4"
  },
  {
    "url": "about/about.html",
    "revision": "2f3af902b51beaecf093a3dfd5a40b3b"
  },
  {
    "url": "about/index.html",
    "revision": "4f2b1a68805817b4eb00152fef2716e9"
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
    "url": "assets/js/11.7b2991bc.js",
    "revision": "83443167d54383f1b75f8fdd1de92307"
  },
  {
    "url": "assets/js/12.b885fc62.js",
    "revision": "82c183eba44592637880424faf2ebb84"
  },
  {
    "url": "assets/js/13.a065e8b5.js",
    "revision": "df0e28afaa3a1aa5b720e22e07a64cc0"
  },
  {
    "url": "assets/js/14.aa32187d.js",
    "revision": "2082877bffbe524e399de6ddc30fef9f"
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
    "url": "assets/js/19.163a4664.js",
    "revision": "34221d2c54ba6d19d6a64d8e2b29d4f2"
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
    "url": "assets/js/21.133a6dbf.js",
    "revision": "26507d700cc11df112ae595bd68fb136"
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
    "url": "assets/js/26.0711698d.js",
    "revision": "bd972c20cbd1c3c5cf510ad2709dbfef"
  },
  {
    "url": "assets/js/27.89cd44ab.js",
    "revision": "ebfdaeeef477cde01ec65f06ec1e0822"
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
    "url": "assets/js/3.196f56b8.js",
    "revision": "da0c04d6e30a76e5f54130b0c6b13cbb"
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
    "url": "assets/js/37.d077f015.js",
    "revision": "bd1c9deb0d39a627b70cac29c69717b9"
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
    "url": "assets/js/43.c433c83a.js",
    "revision": "12351983f92240da3b9a527b7f8982b8"
  },
  {
    "url": "assets/js/44.d5a40010.js",
    "revision": "0c609add0ba242e066be743d96189130"
  },
  {
    "url": "assets/js/45.a4ffe794.js",
    "revision": "118d4527ce6267252c27e549b518b3f2"
  },
  {
    "url": "assets/js/46.6a9cc358.js",
    "revision": "4ca4d381ab5ff9830bb77942d7649bf3"
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
    "url": "assets/js/49.6a9dfcd5.js",
    "revision": "68e9c3683d243718256e92c65c971359"
  },
  {
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
  },
  {
    "url": "assets/js/50.eafdddfc.js",
    "revision": "e3e4d88288e81b00b960def89b26a4e7"
  },
  {
    "url": "assets/js/51.03aea9bc.js",
    "revision": "952490cbbfe2995d55b5e7a18eb19e6c"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.f66739ea.js",
    "revision": "34efa762270c7212e419498088718e67"
  },
  {
    "url": "assets/js/54.473160e2.js",
    "revision": "7a3cf884a766bdc33a3598c0bd921db0"
  },
  {
    "url": "assets/js/55.5890f64b.js",
    "revision": "a64a9774e80e31d09ae88bffeda731e3"
  },
  {
    "url": "assets/js/56.ef234e30.js",
    "revision": "0ec6e35ff7fa81129976b5f02d67473d"
  },
  {
    "url": "assets/js/57.c08def0c.js",
    "revision": "7d94f028d62ae8a2d9cc2a5e3aa8b452"
  },
  {
    "url": "assets/js/58.a6a1ae31.js",
    "revision": "4b61438be5640675ede5be75714c834b"
  },
  {
    "url": "assets/js/59.657048f4.js",
    "revision": "b19cfc11a179d7df31a2807d56829d97"
  },
  {
    "url": "assets/js/6.5e9d1b20.js",
    "revision": "626e33ee005b1d9e99e69a5b42b8713c"
  },
  {
    "url": "assets/js/60.d41be4b7.js",
    "revision": "8f8bd579cf5d5fe7a492bfaec533cf7a"
  },
  {
    "url": "assets/js/61.4f8c2498.js",
    "revision": "a85c1631631e71de81d26626c7de3bae"
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
    "url": "assets/js/66.261a0db3.js",
    "revision": "bce0a7c5f4b4782703a54773b60460b1"
  },
  {
    "url": "assets/js/67.71958da6.js",
    "revision": "06c518b6fff95d82c1d5afab4f44b538"
  },
  {
    "url": "assets/js/68.a2596fa3.js",
    "revision": "83ad103bd262490c572b969eae5f5249"
  },
  {
    "url": "assets/js/69.468a7eea.js",
    "revision": "66af8346bee9c078e7b6802c4b268eb6"
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
    "url": "assets/js/72.60e01c6d.js",
    "revision": "ea92ab0654d9d93dfad8f42932cebcff"
  },
  {
    "url": "assets/js/73.c17124d7.js",
    "revision": "a1fa5761e8eeb66ced5b079dcf0755e0"
  },
  {
    "url": "assets/js/74.ee93d98f.js",
    "revision": "f16db7b691d02f22dd0b9fbadff388ea"
  },
  {
    "url": "assets/js/75.fc61e731.js",
    "revision": "c2bfa4dd898636b0365cb20a859dff7b"
  },
  {
    "url": "assets/js/76.db49177a.js",
    "revision": "3a7f9e1993783c7fc2e6219eeffee079"
  },
  {
    "url": "assets/js/77.9b030405.js",
    "revision": "8cfcf28767f988010c7ebf0006354936"
  },
  {
    "url": "assets/js/78.499668cf.js",
    "revision": "a569675dc6a083a354b896d427c9577e"
  },
  {
    "url": "assets/js/79.5176564a.js",
    "revision": "11828926b98297fa851ba7270d10d6aa"
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
    "url": "assets/js/9.b95573e9.js",
    "revision": "bbae3c3ffd594475d6fa693ff2b25e56"
  },
  {
    "url": "assets/js/app.478734a8.js",
    "revision": "f44825182e6bfa409fbf14589ac86479"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "85bdda5d1a33d8a621df3b8d9228f32a"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "bc8f6accbd7e47104d7e3d5355a08353"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "2ef3c8d61c7d308b647e2e8825c7cac9"
  },
  {
    "url": "fontend/index.html",
    "revision": "16774fbd33c71b34e085ee7a287aab8c"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "73aaf95c4309e3937d9fb51ee93002a3"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "24c8846c64904256101572fd57bb199a"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "2d1aecf97f3b12379a5fa5bc81bb8418"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "01600f5bd610eca04ad7c0aeada0e7c2"
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
    "revision": "fce7f044fabc0a5a838308615921436d"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "53f00e7fe929a9c8f954b6f529787c83"
  },
  {
    "url": "interview/css/index.html",
    "revision": "2d0a739410474aba38f9a120d8fc39a6"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "631b1eeaf57311eb5c0d4bd86f388be5"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "3532d80564d24b6393b71bd7c4a5842a"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "2d2ca8768560af30521c3c527196d048"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "dc42b08a0d4ffcd08ab9087f3ca67c32"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "21d6e8152c81ca1128fea87338a2b8dd"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "948c0bcf7c922b32f062f171714eb7e7"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "1c8854f2c38739d4a14af2f4f1cc55ce"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "8e1dea461756f510ad3ebe931b44e438"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "ece1e5b54b4df10f278af84e4d34d407"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "bfa5385b374c012753e887cd814af63d"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "76158a1645f223ba59d1350c0a2cd4e6"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "bdaa4fece4e5a37995291723fbd04c46"
  },
  {
    "url": "interview/html/index.html",
    "revision": "1d97546371e995dfda642260eb6e28b3"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "10b46d4bca8e48fbea7b65af9861a285"
  },
  {
    "url": "interview/http/index.html",
    "revision": "a09919616bd6ae1670bc76478e27bcc0"
  },
  {
    "url": "interview/index.html",
    "revision": "e7c9b006110bd10d429b4259a86f5419"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "5d8091948a7ea0546a4b42f958982a46"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "b61497f833981ff9031373aeaf6ac220"
  },
  {
    "url": "interview/js/index.html",
    "revision": "97e9232646cb41f01c536d79584ea984"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "0e71830c7b4e86466467b3ae2308273d"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "914b2d874310c05f377d8bee167fa7bb"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "57d39ba76dda1882ae7db7b6fdf29769"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "8e9eb65fac64784914880c36483b4f1e"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "f72c18df805342076fe98380eeab1c2c"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "2379686585cfa9d2dcadbb6a2259ce69"
  },
  {
    "url": "interview/node/index.html",
    "revision": "1d848e5960fc6b915656d52fa5ec039d"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "6e9219d8750035966dfb1a1aae1129ff"
  },
  {
    "url": "interview/react/index.html",
    "revision": "56a35f9ecbcbcde9ef9d35c3f051626d"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "038323ad01b5dfe5e126243f771b7a98"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "3720fcbf2fb0fea1f4ead3b751fe8b61"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "85be3963b7336b9deffcf42b90c7432d"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "4a408cb93a77fedb8d5344745432f754"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "b87b9507607167dfe2d15f7a6d2834b1"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "f042aa12d6a2f2f1d2940b443725bb7f"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "44cce92ced7e1d628ea848c361667035"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "53255b764e62b967d196ebc4d73831fc"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "568340f8a504756e7f584ba28b9a1f4a"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "508b3711a14f85a0809316222366e5b4"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "e6edef52310af520c2860aae5828c0ba"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "51125628d48cbf5e52d47680ad54547a"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "7a3447acc040f45bd5899c19347aff2a"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "f0567691cab0d441fd9b6bb1d89da590"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "75348d036f0cc639e975115babe21103"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "5dbe5140e7f6a91487275a409d2382fb"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "038ed2447a0fdb89bad2edefca8bd17c"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "4df8702c04fd099deea418f8edf87e7e"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "77611855681cdcb5cd0c5a131e1a5c71"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "6a451c9d6beb638146af18354bbaa83f"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "1f2a2c0c98b582af9fcb4e91fa183bf3"
  },
  {
    "url": "math/index.html",
    "revision": "8e2de2099627f774c923c96049933971"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "4c178052575dc9bcfae8b38aaa75fe5c"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "ff957a5a0ab104364067f1c7f0c39683"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "463ccff4a49e97ac3996c3d35273c849"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "e0c3356b6d344be99f330436b5e1e9b9"
  },
  {
    "url": "math/low/index.html",
    "revision": "2a514239d3c63db9e1bc419a70838ca8"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "0a7ceadc29d3ae63b4c6acbd7d5ee15d"
  },
  {
    "url": "math/mid/index.html",
    "revision": "8966ffd7b0d8b525c9a49a1377cde5a6"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "b8416f38f5117681d5a81da114d9b8bd"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "c4db9948e355fef6a8729971fe10bb33"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "7c7864b66a71ed1faaa0d4b4e740dfce"
  },
  {
    "url": "wechat/index.html",
    "revision": "c1130530956780f6064feacab94b402e"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "202b3e23ecc85546f580a49eb5458b47"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "680e6e594d0364d5c4f7d34058c927c4"
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
