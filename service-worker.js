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
    "revision": "96e2baf922f5868ecb14e00f00942f1b"
  },
  {
    "url": "about/about.html",
    "revision": "f37ddc7260b0afca2a3bf42f4bed3576"
  },
  {
    "url": "about/index.html",
    "revision": "43768d4be5dba84af0f01874aa9a80e5"
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
    "url": "assets/js/50.2f6c83b9.js",
    "revision": "b08fa63b8f8adee16ad60cb3beec7a4e"
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
    "url": "assets/js/55.5890f64b.js",
    "revision": "a64a9774e80e31d09ae88bffeda731e3"
  },
  {
    "url": "assets/js/56.47aabd34.js",
    "revision": "86f8676b459b3b6beb5e1c3e8b22b2db"
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
    "url": "assets/js/72.200a9c9c.js",
    "revision": "fa7461235b1f42c3d0c07dac0353cf56"
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
    "url": "assets/js/app.29308ff1.js",
    "revision": "d4df5add1664d20c13f00c43eeedf79c"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "71f6ddd4f9aac25c6b24da310c4b5a38"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "a8037102e4afac31128c88452047b8b0"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "0e53fe70f1efbe6175096f00ef252ea1"
  },
  {
    "url": "fontend/index.html",
    "revision": "2ae451b65797bf8b12fde84296404602"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "52bfe2eafbea67943f20f0a5ebb270a7"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "333af70eecb6418e525cde39e94ba010"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "109fa1eeeccae97908c5e7580b2271d6"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "197be7274c425d7308b88a0e09046637"
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
    "revision": "723f385857aa6fd949c8e4eefd0eba9c"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "9de295d6d976eba4858ba5172ddfe416"
  },
  {
    "url": "interview/css/index.html",
    "revision": "cecbc161fd2011eecbec1f71c4d52e01"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "3a5ca3eba3c90b852521eef3ecebc46f"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "ada06c520eeca1dc8681d5bf7cd647dd"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "c5e4d101e53c330f56ac75bc3ce62a68"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "39f1c22f2e4f5440b803acfb168dc790"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "2dd0c2e48e3018aa9ec9a73cabdcdfea"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "9996918409a62573160ca1939818882b"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "bd84044bc5100a39e8b2501327941e82"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "87395a2240be7bb28af782e737ec43ea"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "d63085a2ee049bc4888e440e4da1c403"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "76e01ce8a595b51c178d40686458e5ce"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "d0197d45427ea4f8b037571cd570d274"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "42e1462cd54897b1c7dcadc25d3ea62c"
  },
  {
    "url": "interview/html/index.html",
    "revision": "e5b45060b3cebdc8275b57c88226dfc2"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "2c6f7f0468e44c7ad582e426830e3dca"
  },
  {
    "url": "interview/http/index.html",
    "revision": "dca48bd97c867c0350bc68ee581b43b0"
  },
  {
    "url": "interview/index.html",
    "revision": "dc1850577bc688dc7485dbecdc421c80"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "4293e8e0c8ee3249cb5426fad60a1431"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "feed245170c156f9e2999ad428082ed9"
  },
  {
    "url": "interview/js/index.html",
    "revision": "532663b0e1e0ccb9552a4f4807812f9e"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "e533cdbe53c20ba64e877bb2eb375bd9"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "c36555ab3f62ddae80b399d04dd4e54b"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "daf2e9803b77c475c5ee74cd1c245e02"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "cfa71af2f8b6a4cdf4cc9b23c9babf6f"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "f331fbc9cef5cfdf92202ec8e4932115"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "92cd220b76a910fe6175ea61ab89b177"
  },
  {
    "url": "interview/node/index.html",
    "revision": "9b6a18fafdabc6c39fe962d2fb42c2b5"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "0278c5a005de6c12cf6c7ea3ed334017"
  },
  {
    "url": "interview/react/index.html",
    "revision": "85d80be5b47a73bcc5be235a8591e98b"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "dabbb24bcc9290ebfb3b99e414ed39f8"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "b134988727f7a399a0227ccaff837ef5"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "fb722e90afb34325c4cf656ac070a61b"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "cedd295ce0dad24cebfda6c76da7a1df"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "462353e534122545bf9fc7a5fcd6dce3"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "cdd9f89aa5ecd8728ff7ad00f6ded578"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "751f36f9e0678115029a7f2294059de1"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "27d527008ed076d055542218e36682f3"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "43fa178dda08d43a80dc0db01eee2c62"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "8a02154d9ee26be25354611ada89dcd6"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "092a425c1d34d251496f2ef2348b64e7"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "01e91f933c2f30c3bfc29d4e81a596bf"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "bf12db03946a710458e89828ce1e006e"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "21d2196c093e0163f8aea674022a13bb"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "3626a9bbe6009cb171cb93e13c223fb7"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "1f37d2d17e783c07543aab531f9133e5"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "58afb5b29bb0ad1441691659bcccb212"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "36b1c02f17e2e100b1106b0c9c6ed1a0"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "3694cbe45f2859d63b7ef45d5b652f38"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "20b23271cdec5fb0482e48df39d2e7c1"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "a42ba28ae7fb8b630b378a0bc585bef4"
  },
  {
    "url": "math/index.html",
    "revision": "ab1a54e94177245c12a9730cb780f051"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "d6dc5487b5b9a19dae73f3f14c68ef02"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "682dfc35c2a2e7f9ab47505d6e2146d8"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "e24c058eaa5fe67b0eb2ee2a510ded94"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "8818fb1bb47a3e7b0f1070dea0609fd1"
  },
  {
    "url": "math/low/index.html",
    "revision": "d97e3e50139f3109d728be4e04759b1c"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "57e18ee546763acbde2b9a5c782e83cb"
  },
  {
    "url": "math/mid/index.html",
    "revision": "ad90059f3df96b50b11bf59458f1ad11"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "7e7f8d65ac28e391e61919a95bf5753c"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "2c32e642edf10e4c809d904b6c5d858a"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "10826458cd093002115992d9ec4df8fa"
  },
  {
    "url": "wechat/index.html",
    "revision": "f2f163aa64acd9265a7eff0fb3eb529e"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "4a248c49a0a9a59ee9e363a44ce8f196"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "7bf14dec7fdfdaf7c107ed2ce4ba58cb"
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
