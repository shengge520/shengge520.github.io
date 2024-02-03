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
    "revision": "8cbb6bd6341e4a90bcca3fbfb2f0f7d1"
  },
  {
    "url": "about/about.html",
    "revision": "aab7e021d8a390d60b077757ae39ba6f"
  },
  {
    "url": "about/index.html",
    "revision": "17ac6c64e2315a49ff8bed60433ad186"
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
    "url": "assets/js/22.41b716b7.js",
    "revision": "0fcd64367938fb9c9f5213f6d547370f"
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
    "url": "assets/js/26.0711698d.js",
    "revision": "bd972c20cbd1c3c5cf510ad2709dbfef"
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
    "url": "assets/js/43.59fd9467.js",
    "revision": "812971ba8e6fe5a721ab7d3b411b9ba0"
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
    "url": "assets/js/50.eafdddfc.js",
    "revision": "e3e4d88288e81b00b960def89b26a4e7"
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
    "url": "assets/js/55.a49b93cf.js",
    "revision": "78100029dab7d66b6e4d8fb153e0f795"
  },
  {
    "url": "assets/js/56.901177ef.js",
    "revision": "ba4dcdd5be504c0f351dcce0073f2ece"
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
    "url": "assets/js/70.b4ff6cbb.js",
    "revision": "a8b899c63b67ca8a4104215c428cc5f5"
  },
  {
    "url": "assets/js/71.6ca9f668.js",
    "revision": "72091b89800e3d29c4e9f776f4b87193"
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
    "url": "assets/js/75.e8bdeaeb.js",
    "revision": "dfb3a3c3d0137e0133bb2e15efc7ff1a"
  },
  {
    "url": "assets/js/76.a6d9eb4f.js",
    "revision": "1d387b90d4de63d7e5503b2711576354"
  },
  {
    "url": "assets/js/77.46ca6511.js",
    "revision": "cd2d1e143b17b7cd0436b7a6353e663c"
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
    "url": "assets/js/9.73a7b492.js",
    "revision": "dc58d5c54682b3efad366f27fd84ce42"
  },
  {
    "url": "assets/js/app.2cee5857.js",
    "revision": "8f46e501254e219e672b0143d9c75b8d"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "a04883742df49884d89f174904fee96c"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "f9cf6c44fba743ebc22246fd6de4f6f7"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "30ddaeeca3a8dde95af09e20347474c5"
  },
  {
    "url": "fontend/index.html",
    "revision": "d17b0d53e9f6057005f518fa60ffb03b"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "a9145186903919af27405daedbbeb2c2"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "ec01d7e7a0b7ecf5aca7c28ca713bff1"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "21ceaa1ad0a09155163cee73c4ae4abc"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "3f0831afcf51c8f2d4bbfb26f9ace8a4"
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
    "revision": "4763a4b3c2ca7d8f2b32c88a451fd0d5"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "0fa64215fd454e8aa758361186dce06a"
  },
  {
    "url": "interview/css/index.html",
    "revision": "f93ecc3623b2183ad91df250547acc15"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "40768f88753e82b157243a0e70b7af47"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "8c1acfde9acab3375d6449b595b4d610"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "9a09f4a840ec8d2cdedd3b04ea47c2db"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "a8c04e3dd99153b5ba836435d5dce4ee"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "9095852f39b8b069c2b020a0830c9c1e"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "c92abd3ce017b7f9c3cb50af81ef55d5"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "00eeb3c5940f94620e3a4de9039be2c3"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "a57b4b5feac07cc9590145cc85402284"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "4346f52bc0a76d934d22c443923ed135"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "f43ea6d07a3a13cc5c873524f0ff1114"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "5842704d038e67abc6b91a48a0cbd943"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "80a022012d1023d9aab8f2c029696918"
  },
  {
    "url": "interview/html/index.html",
    "revision": "888d05b1a90eeac13784014b534046e8"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "1f1cc9d242671c858b6bf2ab5a22b720"
  },
  {
    "url": "interview/http/index.html",
    "revision": "cdb31bd1859323bbfdc5b898caea7efc"
  },
  {
    "url": "interview/index.html",
    "revision": "2dcad3cf1e34bfc3b17f1755d2cde598"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "c9918ac7d423226c6e7d49eb279153d8"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "f9bdb59eee1f3971eea36fdd6c9c3102"
  },
  {
    "url": "interview/js/index.html",
    "revision": "e7ff944951c36749148d0f95a6eecc95"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "ca9d23229ad01d47c1eea2952a24cbb1"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "7f444101721ede56e67d508c11d65c97"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "c6759cca2d0b7dbead8f84505e33710a"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "3967f477976760b9d3d2e33e145f7e26"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "5bdd660dba7e7e0990e0fa9e7edaa876"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "9b2b76afd62bbc049cb0d3e75912cffa"
  },
  {
    "url": "interview/node/index.html",
    "revision": "39ece97a69a9e029152a22634b3ad98b"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "187d75e70b6ad09760128a2c95b6d121"
  },
  {
    "url": "interview/react/index.html",
    "revision": "f9c88452194063dfbec37036bbddcbe9"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "75f7d3981152474bdaab319dc5cfbf87"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "1dd52dd04c7633982bf8ee5b23bdec8a"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "57f24152e6f68b8903bef015bbc525b7"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "17e35ffffb1da2d5e1c658c274a0cf6d"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "791577a59a3e8fc2fdfc4d4147c61bfd"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "bcbe5149365ab91192131fb9159f259a"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "5e8b70cbf38e3b8fb08212de214030a5"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "9d4d43ffd154da4a3c8f11401930bc5c"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "6c7e8b4391dabd298e9dd2caa83793d5"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "e4b311f7acebbaa30b15d04d10d8a8f1"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "2e72b65d9486c8da5defa238944963c9"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "ac00775f08065e5d55b1c35b76cbcd23"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "2451ac099bedd6426b6a6845f5f59e24"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "5a0802d881fe34a45f377de2f4312509"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "7510d6d81633dd26ab63591f47d4f30e"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "b6e67150d8ce62bf0b316b574ae57ab3"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "a07fdcdb20b329b85cdba6f83f924852"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "0d6b56efda9a1ea98a2fbdbc55e10f29"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "9243cd62cf3fb5acc39c06fe83ff29e4"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "dd6b0d7992564e0a434f00ff614840dd"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "a1e06a304d6f18cdf4aa884346c8dad9"
  },
  {
    "url": "math/index.html",
    "revision": "39a5df66e6b2c59b6817b96eb8f38a73"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "77b2826d9e087e4f845ea4a148e12020"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "3064aee8a9040988c7d7f3c5e949cabf"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "1587b3b44b01f0dec126410918b3b083"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "0bbe96dc16e5e8ec4d267e9783ba9969"
  },
  {
    "url": "math/low/index.html",
    "revision": "0e90071bc8652e62347b3aa6139f6dba"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "de8f8fdda3a7d4523eefe756273668f1"
  },
  {
    "url": "math/mid/index.html",
    "revision": "9a8a2eb6f2004557444cfe0ff0d8709e"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "8fb709b2d40388a1f4760ac98f483e07"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "5293c2292b493988cbceb980d6a5d473"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "4c442373dfc835d60cc4ec3d6a9b409d"
  },
  {
    "url": "wechat/index.html",
    "revision": "b07aac375e160b1e8cd5a05c76ad926e"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "be3d3f90ffa235d08e099c1a11cbfbac"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "8220b28a5f4c7d66cd2179290a0953a2"
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
