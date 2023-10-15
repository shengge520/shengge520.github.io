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
    "revision": "f8e7c8638fe52281f441cf21dd682eca"
  },
  {
    "url": "about/about.html",
    "revision": "a99cfc885014049c96151d6f282fefa7"
  },
  {
    "url": "about/index.html",
    "revision": "9b3cfc10ff5e11d0669858aa9dda28d6"
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
    "url": "assets/js/22.8b2dc226.js",
    "revision": "75fb0fe2faebafe51c0ca3b03668595a"
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
    "url": "assets/js/3.6e2a0165.js",
    "revision": "f267567f957adb8ebe7d9b2558c20800"
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
    "url": "assets/js/37.72002827.js",
    "revision": "b26afd14cd010e83c9266f2a1e050a78"
  },
  {
    "url": "assets/js/38.7be5f639.js",
    "revision": "63a332af2be7f83fe40a16d0650bc445"
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
    "url": "assets/js/43.74aae4b2.js",
    "revision": "5302653c5151b559ef1bfd3cf18e071a"
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
    "url": "assets/js/49.6a9dfcd5.js",
    "revision": "68e9c3683d243718256e92c65c971359"
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
    "url": "assets/js/51.a4a6691c.js",
    "revision": "a511729efe3173dd511e545101414518"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.d98e947f.js",
    "revision": "f9551c80f8ef25999f3124ee96ec6022"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.138b5f4f.js",
    "revision": "d5ef4635c01e21c1e5889f4b06b86583"
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
    "url": "assets/js/66.9ea267ad.js",
    "revision": "370670b1d55763e7cabc1ffe0d35ddc4"
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
    "url": "assets/js/72.066e5ddd.js",
    "revision": "2b6d992afb993ad735f1436183e34886"
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
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.a168e5d6.js",
    "revision": "702ef6d28b8bac1463e5f9703a45611c"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "d1c57cf78eb373ade10d64149810f8e8"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "a4c2a8de1742cec173d363c28efb9854"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "0dfdadbcc8f79a878664e3e7063d3c75"
  },
  {
    "url": "fontend/index.html",
    "revision": "977885adf73d8e4a48baa0b0efa4182e"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "2fe667607e2990526ad2cbcb645a1160"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "6de0f2ded34143416b30162874d0e6ee"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "208bd98a9f7ebe41642d834ac08a0f10"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "a9a2f1ae0cb1311882799dd57d0dee0f"
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
    "revision": "a90e5dbc8b8002dfd909d84b1ac42c9d"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "9028c87162526b1b0a922ae9783b6f58"
  },
  {
    "url": "interview/css/index.html",
    "revision": "3d85f0f85b1efccc805233fadc08580f"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "61b88c63a14159cf07b1cb87b7d89f1b"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "cc2fdcfb9fc53945bee7730038cd221c"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "2b61c9ee53a512d86b364ca1bf570385"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "4cf981f9c03b9e6a774559f1c57ef132"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "929d14b89fd8a3cafd47e78cb6e9180f"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "6569635d7e6dfe485e6c20dbe75b214d"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "cea11e77b29a57e881f17714bdb636c1"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "edec5a179d3c171bb3772c77def23048"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "ed83e5106a1863aec46ee9b75b884905"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "01f33a839839b600b60ee76491ba1112"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "6147e64ae8be62ce93d1074087199225"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "8a8357e76c6ea9bfbbbbab20c81d3f47"
  },
  {
    "url": "interview/html/index.html",
    "revision": "809feb7b2724c2288bebea574fec4ef6"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "00524bbc418cf16ef114429383f87ebb"
  },
  {
    "url": "interview/http/index.html",
    "revision": "7ffd949571b353f1442ae606eeeb81cf"
  },
  {
    "url": "interview/index.html",
    "revision": "b7454d5a43b81e1bf64673e6c12d5ba4"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "e810f888fcd70b155fe7627ffcaea3c1"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "a56e238c675422e59b5dee7b88c74344"
  },
  {
    "url": "interview/js/index.html",
    "revision": "6dca6f782062a489319fe71eb58bbee8"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "fdcab4de39b3b34d757727f4b471d9d3"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "3948cc0817316adbadc6402b8c7277ea"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "ef7eadb368a34ed1dc7516bfe676b436"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "a20a755d09df8c014b35f57f5a35641e"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "906df4040f2fe163f3cd37d48c8acf42"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "eb6ab0f078c59e47c536b030fcaae51f"
  },
  {
    "url": "interview/node/index.html",
    "revision": "ebdbb6b52b23e0c0200a5760c89184bd"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "ab347e441399cd4fdc8177340e80e1a6"
  },
  {
    "url": "interview/react/index.html",
    "revision": "51bc84432d37c34a50fcdfcc95c6ae06"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "e899eb7fd2e2cf30f143d0c6bce8e9be"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "a48bb19b4cba83c4d4d4efb70a04b3bf"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "b6a4b3d259e865ea42a90e2b91d2e585"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "4a818d28bf087ee0822d26d5d358bbb4"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "1e520e9f1b5f66a4d9550895b3b206d8"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "3740b4eec3a257ca844aabdf68c21a41"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "31750fbc16f328b9d75eababaf5b5696"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "9a181432b5c1a98a64a5bf7d911cbced"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "2fde81e28a382e2d356d4c8106502189"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "4099cd51f7898ec3340426758908dcae"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "8e7726dab0d1c1f9427664cbc717c90b"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "e06f21c0347038fdec038373f8def192"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "a096166b24c01ec6d1777dc696530ef1"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "16dec31b1a4ae32ffab664b3d844c805"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "35e98a7ade97be3c8a856ab71e0c918d"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "07f8448519aeadcfc550d499fbbfe110"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "59617f038653784c7c3cd9230896ce8b"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "8481bbd81d0b42de6d806f16501017c0"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "e0083a8c498ef138b1beb2aaf6b39923"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "3350e153dd258a79c02b34184e4e669b"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "47532092365b3e59f8fa28a66c1ce453"
  },
  {
    "url": "math/index.html",
    "revision": "79b08b84b046c946539a4e8fbc0ff246"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "a643b47b20971465645dab3557dec547"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "4b143141256993120b62aa09652c5740"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "ab6b0b5c19e92082b9ad0ac58b7f82f7"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "ffa975524bdafe219433bf19ea7d0806"
  },
  {
    "url": "math/low/index.html",
    "revision": "0befd0ca907255f33f157143197f3803"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "18d1e3d96bed481f4acc87d89bb90a2e"
  },
  {
    "url": "math/mid/index.html",
    "revision": "eb9f841265b4efe2f9a96aee850c5611"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "544c9390f1020f9a8145f2f5bffaa3a6"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "81ead31e837835f8078470ed6682abe9"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "fccdb9e2adc9443f0434e9c2140fc7fd"
  },
  {
    "url": "wechat/index.html",
    "revision": "a2be94313d99f306c6b47d023eaf3556"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "dabbe318085de6d71ec4753ccf135a82"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "4c2324f42126e051a1cbdfc956c87a7b"
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
