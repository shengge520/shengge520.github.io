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
    "revision": "fad50f29aa22a7871344c98b17a635e2"
  },
  {
    "url": "about/about.html",
    "revision": "30bb31077f7c7783e10608663822677c"
  },
  {
    "url": "about/index.html",
    "revision": "fd8e4478cee63c87df5cf1852d268b16"
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
    "url": "assets/js/22.b6b82d93.js",
    "revision": "b20a858ca58b4a24c063139970267968"
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
    "url": "assets/js/3.c6760b06.js",
    "revision": "452cf4414c31744f9ce029301e4e445d"
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
    "url": "assets/js/37.b8cd0f0e.js",
    "revision": "b035101bfe334dcb5181b770efc05201"
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
    "url": "assets/js/40.e126cc4f.js",
    "revision": "6c1a911dedb3c93048b57061dce527b6"
  },
  {
    "url": "assets/js/41.33fdc0e7.js",
    "revision": "507158c2619ac289c4b9837f11be7a51"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.557f1ee5.js",
    "revision": "ab3384c591391dde7efd5a988ee97589"
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
    "url": "assets/js/53.cdb79bba.js",
    "revision": "a091c497bc44665057227eeb5e05e176"
  },
  {
    "url": "assets/js/54.78ab8495.js",
    "revision": "b455c66f9cc211781284647c716ed0c6"
  },
  {
    "url": "assets/js/55.4ddb18e3.js",
    "revision": "a1126625572c61ca87d8e01c973d8c82"
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
    "url": "assets/js/72.60e01c6d.js",
    "revision": "ea92ab0654d9d93dfad8f42932cebcff"
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
    "url": "assets/js/app.06620b8e.js",
    "revision": "da9e2ada98557b0002e2aef35121b2be"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "efb3347f3defc1c8b74fa9afaaa2d3d5"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "7d947fbfc19c640bd9004674db66b9e8"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "3be9a58a3fa8df19d70491d0fc68f789"
  },
  {
    "url": "fontend/index.html",
    "revision": "9920ddf726ae611aefbc988ebf8e76c4"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "77caeb966489992462ff9aebd34bc268"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "dd0850b15ead270ce687c105874fee0c"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "f56d16e30969dd8e5b699ce37059336c"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "f708797ca8c14d7f4801888441dd4d68"
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
    "revision": "ab975c0532e393a56412ec47fbfebcca"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "9037151c87a99dac71de41b64577e07a"
  },
  {
    "url": "interview/css/index.html",
    "revision": "977d54c2410be8ff7d1429a8130ad903"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "8403268d3077533d96791e4397abe06f"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "83d68497029d95d6f519cd9c8b8b8a8e"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "f93cfb3111fbd9c34846d7dccdbbe8dc"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "b0849dcb1cc7de8b40f670ba122a5d56"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "057941381ebf8c4afb9f63abdf8d743f"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "82578cef2a03d74bbe36f0ea4b46a2c6"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "f9e334a4bfd534f1331104f9e1d9c4d6"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "47145190988bf4b521c98d4061f2a010"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "d8fb1e1097296a4a7e3aa79700b010bf"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "50e6e77aa6c17d91b6dddb9d0dfb615f"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "9512427a5882e773dc5e72149460f501"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "cea72bfd9fc12ad23bb29cf547e24fe3"
  },
  {
    "url": "interview/html/index.html",
    "revision": "ab7f1448cba8875791ee57b2d728702b"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "35646832ee9e67e09552e3938545bce6"
  },
  {
    "url": "interview/http/index.html",
    "revision": "530f91cc434fabde4e6ccc5d3d260c78"
  },
  {
    "url": "interview/index.html",
    "revision": "fcf17c92b77fd095d0f3b9acab4ab5e5"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "2b0143952bf408a7e5c082208acfc739"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "5ce0d553999e517848cae75dc4112f1d"
  },
  {
    "url": "interview/js/index.html",
    "revision": "d19a5e503ab17d8384589f14a6107af4"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "f9422a3767df1dbb9807a136ee4f8541"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "77d20564c9aaeb42735f46fb259eda96"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "4906df63dc457d6064a008bccd13f5e7"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "7f0f83127fafc13a79bce1e0d866a0be"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "98e02546be9f1cf6521f67cccb7a2ce5"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "421f81ae7b8c7e4e698a4f93c7494f00"
  },
  {
    "url": "interview/node/index.html",
    "revision": "f7bf4b63ac463b7be4315526b4dfe883"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "bcebbb63b0989a658be54d236d4648a3"
  },
  {
    "url": "interview/react/index.html",
    "revision": "d3cef78f8cbc5061f723c2ff4030753a"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "92da2b4037aa8c3393a7e461bfa061aa"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "eb78d56055868f14e07a98f82c596e77"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "df08afd53d665d2051e94e73b58ae328"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "c1ced38a96660f54f803de9f88a73c0a"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "d147fe33ac1f203cd0a03fad37f75e76"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "0b42d9276c11a7c38c526b3e53531bb3"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "ea0d41f90076ea5002ab60b29689eba7"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "1e5c59d245b4ef8e518e1243fffac719"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "b92e2ed827f031b12fa5648c3faff0c3"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "f555610d18b2f7f6025d717a94c209b3"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "5447c223a4266b4826d1561c83a0e057"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "47976ed79dbacb028230060beac994ef"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "34926580604bf19c8f6618575a08d9e6"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "204e5fea21b95ad37464332bba11f0ae"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "7aaf30a6dd54736436be7d6494935785"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "598dc6ee5105edcb0604ff5db83a9f55"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "35c030d3ad04fd7dca127b8a0cb00605"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "dbd905a1d7132d0f58f31fbabe77ce4a"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "22725b4f75f948fdc35cf0764ebbfcef"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "19de655c4b04c0492406d084dc9c18bb"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "b016b20dc3df889cdbc5cb72a3d4f768"
  },
  {
    "url": "math/index.html",
    "revision": "c5fa5f3fa91e8d1c2132175a51f6ef4a"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "aaf665aad25b969abad81a9cf96fbb6e"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "3fccb8809cab2b16c06cac300feeaeb2"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "927b69e40bb6a71a7d9eff6864ca531d"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "f6a2f1c44fb5958a589310ed4b1f52b1"
  },
  {
    "url": "math/low/index.html",
    "revision": "d23fbdd4bfede9a5473463747723722f"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "f86f0478d383a07c20ad03ffd220b348"
  },
  {
    "url": "math/mid/index.html",
    "revision": "1921744b24b284d4b37e9b96264a5e0c"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "fc2a55fd8551195cf13c09a73346771c"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "b1e2d6aba362822752abd75ae69d1976"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "e83a22bc96afb7f48c9f82cb71f560b9"
  },
  {
    "url": "wechat/index.html",
    "revision": "be4d83dd3a761a426c26c9755e98024a"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "88c407cd23058441b5099fb5e63e0918"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "62cf9447017e087b96618ad71dce6479"
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
