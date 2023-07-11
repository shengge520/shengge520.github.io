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
    "revision": "aad54d8ae450cdb9968fbc1a43656b4e"
  },
  {
    "url": "about/about.html",
    "revision": "4a5f7a948e105ab94d80eafd1ccc8683"
  },
  {
    "url": "about/index.html",
    "revision": "b22a6a1d1eaf9f0dbcc380fb85a04d00"
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
    "url": "assets/js/10.7e661623.js",
    "revision": "ef0b5290070f2a2f6e9fe424f5313287"
  },
  {
    "url": "assets/js/11.ae627b6d.js",
    "revision": "504f3c03575d50673a5fe3f1cd4f2735"
  },
  {
    "url": "assets/js/12.b19e8911.js",
    "revision": "60b5bc12899b7090e76ea5acde5f1d54"
  },
  {
    "url": "assets/js/13.156e181f.js",
    "revision": "e06d02218c7ad40a4a1b7ea7cfbdec26"
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
    "url": "assets/js/16.746f7e16.js",
    "revision": "d99ffe1df70e0eafc2193b6c7c128647"
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
    "url": "assets/js/20.2a2e7fc2.js",
    "revision": "67baef0eebbfb0ebc31e76261668aa61"
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
    "url": "assets/js/23.4d4ea4b8.js",
    "revision": "fda164df6601a06ab04ec6d8f67918cb"
  },
  {
    "url": "assets/js/24.920d1019.js",
    "revision": "f216fe390925e9b13489ad9d0c134dc5"
  },
  {
    "url": "assets/js/25.a9a06371.js",
    "revision": "c3ef459bac1f04c9c643f1d2b26847b4"
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
    "url": "assets/js/3.ef57ec99.js",
    "revision": "dd6b35169209757449402046c9e214cd"
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
    "url": "assets/js/35.33e4fcb7.js",
    "revision": "87a17f4f777a62fa11cf7ab90b83a5de"
  },
  {
    "url": "assets/js/36.7a7ce9b6.js",
    "revision": "820971d644ff3d0d125a2de6cf799508"
  },
  {
    "url": "assets/js/37.8f1964b2.js",
    "revision": "44673bc820aaa92104fccf185e0563c7"
  },
  {
    "url": "assets/js/38.fa008da3.js",
    "revision": "8572c8b15a918baf7bd04d1b5ecd074f"
  },
  {
    "url": "assets/js/39.8cd90797.js",
    "revision": "1117beebd1fb7651b4dfd8e9598a720f"
  },
  {
    "url": "assets/js/4.1169c5b8.js",
    "revision": "bb080edb48652c4cc3eb8da354a1d9c3"
  },
  {
    "url": "assets/js/40.e51bb879.js",
    "revision": "ed153587e22d2b7c6e979b20f29f5d32"
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
    "url": "assets/js/43.5c321158.js",
    "revision": "3a17f93e16bb64c832448ba1509e21e6"
  },
  {
    "url": "assets/js/44.d5a40010.js",
    "revision": "0c609add0ba242e066be743d96189130"
  },
  {
    "url": "assets/js/45.30c593aa.js",
    "revision": "064b623e22c00fd9538c84a757a68cfc"
  },
  {
    "url": "assets/js/46.6a9cc358.js",
    "revision": "4ca4d381ab5ff9830bb77942d7649bf3"
  },
  {
    "url": "assets/js/47.cd289475.js",
    "revision": "bd7f6c0a3aa3caef2592efb4e43d03dc"
  },
  {
    "url": "assets/js/48.1ab7a676.js",
    "revision": "fe99ff3649e32d3ca604a25dc5c455f7"
  },
  {
    "url": "assets/js/49.93da5a52.js",
    "revision": "16c44a807b8b6c132ff98b8e91e3ed8a"
  },
  {
    "url": "assets/js/5.3518dc0f.js",
    "revision": "da64c5cefeebdb0c60e0364c62c4b099"
  },
  {
    "url": "assets/js/50.806a544e.js",
    "revision": "10bc93775fc63615f08529d97b299d4f"
  },
  {
    "url": "assets/js/51.9030e74f.js",
    "revision": "358057371b9539429952337c9962db52"
  },
  {
    "url": "assets/js/52.c42f84e8.js",
    "revision": "44fd036060391f7997f930be4f0f6332"
  },
  {
    "url": "assets/js/53.eebe35d4.js",
    "revision": "7c634ae277135cca9ac95a7d4983bbf7"
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
    "url": "assets/js/71.4336f4a9.js",
    "revision": "8b7bce30c077e5e135971009b8897e52"
  },
  {
    "url": "assets/js/72.a396281c.js",
    "revision": "2a048028fc53f81152bf53837d71b053"
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
    "url": "assets/js/77.9b030405.js",
    "revision": "8cfcf28767f988010c7ebf0006354936"
  },
  {
    "url": "assets/js/78.92e66db9.js",
    "revision": "0ae4a23ff0fc4e46ed1a69ae5966eb90"
  },
  {
    "url": "assets/js/79.8622fbaf.js",
    "revision": "2671051456f79330eab5022944e75389"
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
    "url": "assets/js/81.f5a7ecc4.js",
    "revision": "d985f69a50a57cd9f846d1b2513d1a96"
  },
  {
    "url": "assets/js/82.4ef67cf1.js",
    "revision": "7164ae7e3b2014e89b3c6f1b7da0b4d1"
  },
  {
    "url": "assets/js/83.3fa683d1.js",
    "revision": "d99b928e8361ee07491e060e9886aed0"
  },
  {
    "url": "assets/js/84.d18eb385.js",
    "revision": "6b3722ab88c34e6975ccc7d664b77380"
  },
  {
    "url": "assets/js/9.7b6a8526.js",
    "revision": "727ad4f4bfc53cfd9fb0f4b89878d7e3"
  },
  {
    "url": "assets/js/app.a4fefc8b.js",
    "revision": "73109d7295292f7e1ec11230cfe02ca8"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "0491f8b1015f680e98c9217d5a57408a"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "f17429f8e879a0e4013858ad813ad4dd"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "14681c8e83184ed9c5b319fdc87d277f"
  },
  {
    "url": "fontend/index.html",
    "revision": "5629b87a35975db31da389e12e5dbb0d"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "667b085284f19ad04b88493e376a6869"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "1afddde7aa9adf222ae5e71c01403e46"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "66b62d019915df1a5b321e58a3b9bd5e"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "62a1d729cfd553f8f5e7a31b01b41747"
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
    "revision": "8cdfd51ae7989209f949ce72231c3be4"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "661130755525c853637fe79922d2e1d5"
  },
  {
    "url": "interview/css/index.html",
    "revision": "4768545d7359ad3196181dfd3cbc5bf2"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "ef59a0a5b3e610fb793de0021fc62f31"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "3ae60df86fa870ffdbf3265d606423a2"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "a1f49e0c8ab0f3ffc349f5e9780657f9"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "f2ac68b3ff99ea6bdc65b2c7f2c396d9"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "95b04e3e802eb6ad0aa01a7834bb9316"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "556cd3025925b259343680ed35952978"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "1eb176bf7cf7bdf30c0b94e61c8bb9b3"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "5f587635609797edf5e2b210c6f23e67"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "1026c714e136bc8c3fe26f278df42a62"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "4ec4accb7d8b0ef976a115f431395a92"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "f8a2c624a22e78d1bc33ed92b9d29aef"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "251089feb39b10bfed37f36bc42abfad"
  },
  {
    "url": "interview/html/index.html",
    "revision": "19433ef90649e0313f4fcd8ee35e8046"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "5d3838dcb9999a7747e6754b557a14f0"
  },
  {
    "url": "interview/http/index.html",
    "revision": "edf6c0d7c97f36514a40c6ebfa844196"
  },
  {
    "url": "interview/index.html",
    "revision": "0d206e8f822a3b4dd2d65040e849acaf"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "1c2def06b81e97b49fda2780d761a099"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "85b972e3877637af3c885c7bbed3f3c4"
  },
  {
    "url": "interview/js/index.html",
    "revision": "fd5127b2516aa4d590f09fc39e998195"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "be451960018fe3149d4ba3b6f72e0475"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "95e909230aaa5beb2e1ac34d22237032"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "7bbd3bad172ba232fb6dcbaac8c42c45"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "d86f11e5e4c98d7404d95f4c80c6a819"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "47df614554fa43e5b5d1d02bd66568eb"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "8b6776248f7f7b073f3131b0192752c0"
  },
  {
    "url": "interview/node/index.html",
    "revision": "b4112be96adc690477632d7d9134a3bd"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "0fa54101388a46b388b2e9a30334bff3"
  },
  {
    "url": "interview/react/index.html",
    "revision": "c09e10790a9963eade884a7892a31322"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "b5e34b20efa5ea8515b2548af475375f"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "9ae09bd4a5d157234ac91ea741fc7e5c"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "1d22f73157d8bbed8f4a7ce67b8e1aec"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "966ba404d047a21b14469b4e06630a16"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "208a1cf552e5fa1693293086f43bcfdc"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "dd29ad033be67eda9211f199f249c5d4"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "bb21e87fba9356a0bf52633601583c15"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "57ebe7147fda694e07d71768d0d4eb53"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "67e0063713fbcb4efb90f095d7aeb4ba"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "4ba3f4f0b73d4b4ebb114b07f0455222"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "805d4749ef4476afe0759451cfeea153"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "c38e9840be6ea60ad4a2bb5d87c80263"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "a2b8480a095e8626373850f68b4d6456"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "5a848128104a18324ba1161743bb6ba9"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "90e619ce8e432602176e8c215255fd52"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "c4f86ec9026d4a21234aed0ddfc28456"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "1a312033fb89a16a8ee878fb20a15414"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "9d4fa94d1acd614f885a92367412ccdd"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "8bf95e2a14fd2a225f513d1b75c0ecaa"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "4695ba685382c953ebf79fa2b25249d7"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "10faad0af074fd878dd2e4cc079beaee"
  },
  {
    "url": "math/index.html",
    "revision": "5c0d87993b812515c78eb19ea15518af"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "36e1abc5809df2902468c9c5ec3de3b3"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "db7b36a46fb293f5a61285e295d4f8cb"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "982d477c46f538fc0232cb466058efbc"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "cebdfbafee8aa249df799d6f330269ee"
  },
  {
    "url": "math/low/index.html",
    "revision": "0c699591b3673575d239e808a3665c1f"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "5dbf1bd675622c7c0ee6ae5eeaec2bd6"
  },
  {
    "url": "math/mid/index.html",
    "revision": "c62a312159564207d9d11e1142ce2e8c"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "ec3c72ddd09432dce8ae3ebab7b1ba45"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "ee676a208f9698ef2266b597fc0aaebe"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "417e0690c59e377d766fa6917d71a448"
  },
  {
    "url": "wechat/index.html",
    "revision": "b23c0b0ae3b9465494b82808f19ad105"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "05063fb012a9ae176b67b2b40bad90e3"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "e8ed6c5d88d86abd8423e0fce179b615"
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
