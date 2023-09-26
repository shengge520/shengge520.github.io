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
    "revision": "db2704c3982de81c65cea59a978a68ce"
  },
  {
    "url": "about/about.html",
    "revision": "beb4d2da738a06b9bb94f1eb244cc129"
  },
  {
    "url": "about/index.html",
    "revision": "090e5a6270eda7337a2b20ca723b7578"
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
    "url": "assets/js/13.961227b9.js",
    "revision": "6b8afb3afc7a49b2a5db46755bf3ac4d"
  },
  {
    "url": "assets/js/14.7413730f.js",
    "revision": "e2fe7a1577929728ddbf33138895360b"
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
    "url": "assets/js/22.3a0e9b7f.js",
    "revision": "c44e4d8906203b44b8d4a94c1cd830c2"
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
    "url": "assets/js/50.b89f28f9.js",
    "revision": "91413f55b707486abf313ada59df293f"
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
    "url": "assets/js/53.7c67aace.js",
    "revision": "ca9abb2187daeb9997d77f3dba000ac1"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.eccafe0e.js",
    "revision": "65bc91de5164e2a4664f9478823ea46b"
  },
  {
    "url": "assets/js/56.9bef3140.js",
    "revision": "4fcf8c76f0bdd86cfbce83f4e4a3897a"
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
    "url": "assets/js/62.20268382.js",
    "revision": "0dc2a2fb871cafd7a1e05169cd9622e4"
  },
  {
    "url": "assets/js/63.c5c92a28.js",
    "revision": "3f58130d4c80646688e615bf739f6e49"
  },
  {
    "url": "assets/js/64.bcc22084.js",
    "revision": "f620a37e55c2a7afc8a564ee447a1055"
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
    "url": "assets/js/72.d85f3ac6.js",
    "revision": "3b0f4b93de65b6a3e40fb64994358ba6"
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
    "url": "assets/js/9.c61f000a.js",
    "revision": "ddfb959a743b901defa95d9a631c4b0f"
  },
  {
    "url": "assets/js/app.4212449f.js",
    "revision": "81590afb5e7add91c73de398992f5437"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "8345aca94e0ea00f47c981585a9bb565"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "b317c6a27c5e70c675080a75f6857efc"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "d5d784538879fbeea56a1843e38a1b6b"
  },
  {
    "url": "fontend/index.html",
    "revision": "8e605e525c68c911c69fe634a2ee4285"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "e477d6d5217d206934e56dff48a4c995"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "31b8c28609231788cb7c463686d5bb53"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "e49f82212e46e6c93181661440657189"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "4c8df5e1d49df03b89feca6a853ed66b"
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
    "revision": "ed398720fc315018ac76988f5ac36513"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "91110b351aff203393cd84d4ce38393b"
  },
  {
    "url": "interview/css/index.html",
    "revision": "94304a3cebc63064c135bf623c7558c1"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "e26cf65238c302febeaf9e318c7312c0"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "e0b8f76090439a63de83f06b092ac68b"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "d50976a43dc57e020c3663c8c4902c0e"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "06493b19079d6d9f807d9d4396fc305c"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "432e6d50239f2646437a2580ec907e1c"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "7920041612ef3e72ee1630b520da06a8"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "85a3cb8d72df4db33dcf5d37a20e690a"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "afd0750e3006cfd5871e149990968c77"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "46ffc38b4e879d3c2d0a8bccafe5e402"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "8690aae1dc313114dbf84b5cf52394c7"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "91b0fbc7dbdf80b9e59b5b938aaaf24c"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "9d1b928d870c4453bdae61377204969a"
  },
  {
    "url": "interview/html/index.html",
    "revision": "22918c6c1f0b374699c578d0858008ed"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "fe1d58f8cf3a208762c516f9c63c25bc"
  },
  {
    "url": "interview/http/index.html",
    "revision": "469cf0d62b069109f6bc125071a53ff6"
  },
  {
    "url": "interview/index.html",
    "revision": "7391b58eb40bbe642168cc2203050542"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "d7e310331f3d6603777ac0525f9204ef"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "56df8f3a2f9aade66c7c82ee2c464686"
  },
  {
    "url": "interview/js/index.html",
    "revision": "6b2d249e45ca923a50107151e5c5fad5"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "ff40610d45511aef8b8876caf1de34cb"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "29d77de5d35b1f91c7f504c9b85fb5db"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "fa6fdc6253ab483d08f6e7f392774c87"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "c51e9e80f65ce52ef44243d563c30d70"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "50ad46e101ae5f50baf98e2640c4058d"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "373cd29ddc09cbf2782823660f07019e"
  },
  {
    "url": "interview/node/index.html",
    "revision": "23b543ad1e8545ad1e991b7038b7222c"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "88ff97ff8e58a0c53a21a7343131e5ad"
  },
  {
    "url": "interview/react/index.html",
    "revision": "7396577e4043bac3f98443542d51c8f3"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "f5fb472ade9ddfbd1be899dae52c368d"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "352c28c6b80f58365a3ebb6b2166a44f"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "85c0f98b0ee8076f4bbe5dd8167fdabf"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "99613c434b755c38b676453f7842542c"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "615e3057ec74ed8a7f80eee3312dcbbe"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "3868cedb2f7035e256c11cdade523624"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "29fcd48bfbe7c6fa91b35f4e4ecf0a2f"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "f2ee81cf641a335e316b54cf52385bcd"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "159acb8ef67296637f488a63770fcf88"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "9b2063462de35e268de8e8d8d0625a32"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "4d87d19faf3e33f5e7334af045fd3dfe"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "44d2b25ec8848196aa0f96e7569db6f5"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "68f9b2e81b289cf1e4072570c99172ff"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "9677d0a7bf49a62bbd5c93e779064883"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "bea9542f16937323c985e7fae94b2fa0"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "f61968090fb82bdc8ef264e6e90fe344"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "cb6ed7d96d82342bcfac494cede8cd5e"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "5b2bbc72a2048e3369ee8f85e9bfd73c"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "3bdba32c24253c82aa86d79217b8d6a1"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "ed64540909e94de77a3560df24a93a41"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "f8433f68ad0b2b561d45c11f87723bdb"
  },
  {
    "url": "math/index.html",
    "revision": "74b24b776fdbdf1aa3b351ed5e6ffd21"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "81f974b3a955d6f5f650e1939766ab78"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "d33852704ef73b62c7a8fe5b5c55ea38"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "45f6d60b18f29b61156f15bf0817e22b"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "d82eb4b6aefcdbf5f8cbff3f8f6753ba"
  },
  {
    "url": "math/low/index.html",
    "revision": "dc4b086faf2a2f60262935559f82181a"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "38c2f015baca051f881dcae16a1cc2f6"
  },
  {
    "url": "math/mid/index.html",
    "revision": "5c776b59e2fd0ef18e2ea42fdc17ddc6"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "40b85a1b9411491f24757c1372ccc61b"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "eced29df37c58f0f494934a907597355"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "b2c76e96d8f7784af19317a686022afc"
  },
  {
    "url": "wechat/index.html",
    "revision": "4c8d12319a9aa3aacd601fe3d0bc2696"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "8b42dced40132c4bc7aa7334c21b904d"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "c94af546f91f448255d6f6190f842eee"
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
