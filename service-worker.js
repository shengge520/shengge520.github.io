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
    "revision": "c8ce9eae03b72e59ab36ed6a98b61e65"
  },
  {
    "url": "about/about.html",
    "revision": "2637e0ea6772d2a899e8e3fdce146b28"
  },
  {
    "url": "about/index.html",
    "revision": "8205325f2e5e119a85d3eade495afbbb"
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
    "url": "assets/js/3.5b7ad2e3.js",
    "revision": "f68ab62af20207c6997d3c81fca2979c"
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
    "url": "assets/js/37.ab2d0e1c.js",
    "revision": "e7ecc7d8f3772b3f3a28f65086579ca0"
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
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
  },
  {
    "url": "assets/js/50.9a832101.js",
    "revision": "70452b856a970c023460c6a9f20cb0af"
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
    "url": "assets/js/53.421aa832.js",
    "revision": "edc74860b79e46d940660bee686e0a2f"
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
    "url": "assets/js/6.5e9d1b20.js",
    "revision": "626e33ee005b1d9e99e69a5b42b8713c"
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
    "url": "assets/js/76.c006b218.js",
    "revision": "a0854a3cfb328af03e3f88c7d504ee66"
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
    "url": "assets/js/app.cfc7af82.js",
    "revision": "bcdb80caffb4f09d33579cb2e8db173c"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "fb4c99d00c0c04bb60bb6dbe8a23aa21"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "bb1eda1fedc82b1c102c0ae9406d3ee0"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "0d9c7cfa92a737610370196ca1bf395b"
  },
  {
    "url": "fontend/index.html",
    "revision": "62ffb8f9a340340fd6ea2af2a1d25fa7"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "930a619ee804d4aa587d53331f3c83d0"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "2ea6eb68a2ab27e56651fdc3208ba91a"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "fc35f48651375804ceed66fe5999bf6c"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "dfec599e4e935300c6c857d3ebded2d6"
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
    "revision": "9ad8228a628b9722581ea839eb7da55a"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "e78a39b765e4246241c317806cacc313"
  },
  {
    "url": "interview/css/index.html",
    "revision": "1d37b2173ebcd17e26084e0c0a496257"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "9a2adac8fe95cc175ae3533dd7feae1c"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "0a53da4d6a09823bd6b36844d3b7cb08"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "3a966976228983dcf28af77d74f6f75b"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "372da13ce8b6e95abe8d3bf5ab79653f"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "290072732fb0ef6d3230738b9f3c4ce0"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "a1f5ba8b44c1597af6f5596fc155bca1"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "d32e2cd2b49e4f390ebfaa1b99494d0f"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "6ff157688524a6d535da0a79ad60ed70"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "639dca4e1ad90f80815563c9c04822d2"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "01a0904182a0b0dee70eae05112936f7"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "ef7d2dfeb15d627e1c90d9b76b57c5bc"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "252820a3ca79106fe772b1ca4c3815ca"
  },
  {
    "url": "interview/html/index.html",
    "revision": "5b44081e4ebd2814d3192aadacc76331"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "b5d9aeed9ef9e4c76bc3e474748403c4"
  },
  {
    "url": "interview/http/index.html",
    "revision": "c73cc2711819884f26f7358691dc1b36"
  },
  {
    "url": "interview/index.html",
    "revision": "35b99069860ad7816a27f9f7745d867f"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "d5c010cea27bf805faaeeee81cbe6c16"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "342cb3489848ae9d0c00995de27249bf"
  },
  {
    "url": "interview/js/index.html",
    "revision": "ef4fc6c8d67d57a0abc162ac25fe7a27"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "3f03c82a468629783300b20ea6e9c752"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "6bcd94eb15934e944bb1a1e2006812cd"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "cd60d74ffeafb1596346c2274dd05574"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "82c5df50a88fc5c063c427967e10eed8"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "74018dca7cf0bc10a1b629f91d47d3b3"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "1024cf2388f9c978445722d291ac8846"
  },
  {
    "url": "interview/node/index.html",
    "revision": "8612409dddd8b401736f68f4b9a53b7b"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "e54a0f05f5db1e117e352a5ccb1ad90e"
  },
  {
    "url": "interview/react/index.html",
    "revision": "db6284f73b12e3a0dad27ce96815a0ea"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "6ffdaf93df9e069b0b00822e66d14624"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "3f558ba4b64fb5ad88258fdbfda4fc31"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "ba79649781d687c39e1b8caa3a3c3eee"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "08cf6940f3964f1590599cec9d0ec180"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "bde467ec6657e99985050a0743a39ee9"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "de89a659595d15130e73e6db0c9764d9"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "44126a4a13d43af5fc5b41cf55fbca7d"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "954dc02d22538f412ebdea1445f2589d"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "4f6074e46c5b07ab972ecfef5bbd3fe8"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "02ed1f95b858b322dc9acd976ff982c9"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "be477cd5d4eaad3af78cf4cd9e635814"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "a43560a1c0ac53d271b3abd254740b30"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "7ed87706fa3c41d169d3695505e0eae0"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "62857269bded83490dbd243c9485bccc"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "18dd5f9c88d3043a509fc7ff0e16c48b"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "98b11cef22b691bac29283ca56ec73eb"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "f71adde3e6e64759ce656f97161c0295"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "807008573bea8b3cd950565f0bbd9edc"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "d34665a2e86ed5422d9f685c726479d1"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "03b341202f4ae3985726a0505afa34af"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "f99286d8c831aef16cd273aa9d0a4566"
  },
  {
    "url": "math/index.html",
    "revision": "bacef26958ec52f42ca02af3706eafd0"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "aa2f4eb7fd5fe5e90c0e6ab112671ec8"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "2d3f0033c1173b835e2414ca276ea9a2"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "4ae45388c8345a430640d309bcc2c7ae"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "d2a6d067a771efe7801000b15e6f81ce"
  },
  {
    "url": "math/low/index.html",
    "revision": "63566999c3ec2e16688b01ad489dfea9"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "d0d40dc7cd2dd76f5e0bffac72bc967c"
  },
  {
    "url": "math/mid/index.html",
    "revision": "2ded7811ca77d947567799713e3a8040"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "417b7c15da83ba0dca0e9f43c8670506"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "d77439204d12d5efc4e1f672ab3ea219"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "212da0235b79b851ebe1d5b01a29e9ae"
  },
  {
    "url": "wechat/index.html",
    "revision": "645acab418a8da49c84410e473504ad2"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "b577612463f9563a7e8dce949ee6becd"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "b4b85874cf8e0774cfa7e8946253e692"
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
