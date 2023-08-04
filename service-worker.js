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
    "revision": "7bcd90f8678d773925e3ad2b489b0834"
  },
  {
    "url": "about/about.html",
    "revision": "06d7144d1a9270bd33ca4cb58d543e4c"
  },
  {
    "url": "about/index.html",
    "revision": "bef5d13e9e3d02321ad102318e9d24a9"
  },
  {
    "url": "assets/css/0.styles.2a7fd736.css",
    "revision": "96fd8331f4209ba928063667cd0ef67f"
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
    "url": "assets/js/10.74c7dc15.js",
    "revision": "ef0b5290070f2a2f6e9fe424f5313287"
  },
  {
    "url": "assets/js/11.0359d8f4.js",
    "revision": "fb28ce05d645823d1325b042e1273b5b"
  },
  {
    "url": "assets/js/12.514a8c88.js",
    "revision": "d315d9e100304bbc15b031f9b3924433"
  },
  {
    "url": "assets/js/13.b196e366.js",
    "revision": "bbb946597f760b6cd5935afd587ffa6e"
  },
  {
    "url": "assets/js/14.da190eca.js",
    "revision": "7e030c7d2ea40aa1966bf1c3a9367008"
  },
  {
    "url": "assets/js/15.424e298b.js",
    "revision": "b1b0bfbe8da490ef7a8d9c888774fdcc"
  },
  {
    "url": "assets/js/16.dcc48553.js",
    "revision": "958d5900c4fdeb22994a104a537f30f7"
  },
  {
    "url": "assets/js/17.6638589b.js",
    "revision": "d90ed32697275a23a0e613c03a90600f"
  },
  {
    "url": "assets/js/18.802b10a1.js",
    "revision": "dcd03865a2dcee249ad6cc4af5408f59"
  },
  {
    "url": "assets/js/19.c2f9768b.js",
    "revision": "ea92a999eb44d8685b3e6d83c6a8fe8c"
  },
  {
    "url": "assets/js/2.af22ff36.js",
    "revision": "d19b4cf833fa184340962ae0c2de72a1"
  },
  {
    "url": "assets/js/20.8be8a7d2.js",
    "revision": "8c8ac9833086e60e667ee9f8e1055911"
  },
  {
    "url": "assets/js/21.d841e9ce.js",
    "revision": "f70d837b3a8dfa8da868524c87a0e855"
  },
  {
    "url": "assets/js/22.f81cf503.js",
    "revision": "26e382be5c931e209a91c7d716f3e33a"
  },
  {
    "url": "assets/js/23.302b7b5c.js",
    "revision": "339e2a1ea01c70a55a16e15d1425c38b"
  },
  {
    "url": "assets/js/24.a1293d20.js",
    "revision": "2ceabb0ebb37c887d80b75c9c1991882"
  },
  {
    "url": "assets/js/25.edaa9f8b.js",
    "revision": "1a66836ff7833002a6a0d808ce7d01f8"
  },
  {
    "url": "assets/js/26.7818c143.js",
    "revision": "913fce0cec23a652238a9c9bb50fd953"
  },
  {
    "url": "assets/js/27.ecefd437.js",
    "revision": "67d4444500e2656ab6f5c06d2ffb57d7"
  },
  {
    "url": "assets/js/28.42a0ab72.js",
    "revision": "b62d501fe0b79c561a81de36c65bbdef"
  },
  {
    "url": "assets/js/29.c41f0c49.js",
    "revision": "2e5bda7ac617404f3fe4e485500899b7"
  },
  {
    "url": "assets/js/3.85e67ce0.js",
    "revision": "5b0b5707bfc4f9900e504a8f136e0596"
  },
  {
    "url": "assets/js/30.3a598562.js",
    "revision": "876590ed7c60f7a4b7bcf93fd9bfb4cb"
  },
  {
    "url": "assets/js/31.72528ffd.js",
    "revision": "6388e7382d66814b7e34a03e46863291"
  },
  {
    "url": "assets/js/32.4d81e757.js",
    "revision": "2132f720905440aab8365242e3e39595"
  },
  {
    "url": "assets/js/33.99082735.js",
    "revision": "13f7bb7d224a469513f9839b5903c9a3"
  },
  {
    "url": "assets/js/34.0f069aea.js",
    "revision": "398eb56b398c01ea5f3fd8eeff047482"
  },
  {
    "url": "assets/js/35.ece86973.js",
    "revision": "525700595a7d3c376f2d9e9020a2f38b"
  },
  {
    "url": "assets/js/36.3f82c8be.js",
    "revision": "9d1a0b749377aa3adeafee3a5ce04796"
  },
  {
    "url": "assets/js/37.9b874921.js",
    "revision": "44673bc820aaa92104fccf185e0563c7"
  },
  {
    "url": "assets/js/38.7f772318.js",
    "revision": "f31659d9e3e2c96bd984476bbd3b4ea1"
  },
  {
    "url": "assets/js/39.68b1c13e.js",
    "revision": "1117beebd1fb7651b4dfd8e9598a720f"
  },
  {
    "url": "assets/js/4.bdda43e5.js",
    "revision": "2a04a1a39975fa3088d773e62b4f1561"
  },
  {
    "url": "assets/js/40.ce71876a.js",
    "revision": "e85817ac2e2c5f0622694738abdeb7d7"
  },
  {
    "url": "assets/js/41.0c8ee12b.js",
    "revision": "6eda7d69b0ae44c8af975d6f990fb6ff"
  },
  {
    "url": "assets/js/42.576f51b3.js",
    "revision": "96538f2c902e82b186b33384dd27a63f"
  },
  {
    "url": "assets/js/43.0df6f848.js",
    "revision": "d19576244ee1eb61731b7123ec654f8f"
  },
  {
    "url": "assets/js/44.fd82faf1.js",
    "revision": "30a86dae63caddf9ba9920e070b1043b"
  },
  {
    "url": "assets/js/45.636515dc.js",
    "revision": "12304e35bdc0dfa25082e5c26a8daf06"
  },
  {
    "url": "assets/js/46.5a40f295.js",
    "revision": "281965bcd1bdc3e3198f35436fc48c4e"
  },
  {
    "url": "assets/js/47.0474d4b3.js",
    "revision": "9d5d3a2b36f3675ad8eca7a96f2bdbf6"
  },
  {
    "url": "assets/js/48.493641d8.js",
    "revision": "591655dc897595b8920d4a865318ffdf"
  },
  {
    "url": "assets/js/49.3e2adf50.js",
    "revision": "7e5508aef9c6d255f1923e1d6dfebd31"
  },
  {
    "url": "assets/js/5.7078fd2b.js",
    "revision": "d757d42aea224dcec29bc3d18f73cee1"
  },
  {
    "url": "assets/js/50.bd611e6e.js",
    "revision": "101c19c48eac51517240352fdc31ae4f"
  },
  {
    "url": "assets/js/51.a41d7588.js",
    "revision": "41ea56c712695a643cbf61cd3b05c7eb"
  },
  {
    "url": "assets/js/52.55da1d42.js",
    "revision": "9e285c1ec4ec887dc892f7fadfde85d5"
  },
  {
    "url": "assets/js/53.d77b243e.js",
    "revision": "0c107d17688cda60e3a7f08926afefce"
  },
  {
    "url": "assets/js/54.c87221b3.js",
    "revision": "cd42fb53b012b5754088c1425bc8dd6e"
  },
  {
    "url": "assets/js/55.764485aa.js",
    "revision": "4c46ce9cc655d4c29f7f0758edb641df"
  },
  {
    "url": "assets/js/56.9051ef2d.js",
    "revision": "7adbd9af19fa277fe60efdf9a34fc711"
  },
  {
    "url": "assets/js/57.59944576.js",
    "revision": "43577b4f47b4a9507358c2a01525a1de"
  },
  {
    "url": "assets/js/58.287a00f9.js",
    "revision": "52a3de806cfc2fbb869c8ea12bb7b896"
  },
  {
    "url": "assets/js/59.e2e07ca2.js",
    "revision": "86fcc7a879c085d73ee2ab2e5adf3c44"
  },
  {
    "url": "assets/js/6.455f43cb.js",
    "revision": "9fb5f23aa7c4b23a771b97556335bf1b"
  },
  {
    "url": "assets/js/60.f9a65031.js",
    "revision": "edea0f8be05cc982b198263edaa90821"
  },
  {
    "url": "assets/js/61.62013939.js",
    "revision": "95a0d59503d45ca7ee63aec476d3de9b"
  },
  {
    "url": "assets/js/62.102ef8a0.js",
    "revision": "0ffe3cf9233095175f32c4375f620968"
  },
  {
    "url": "assets/js/63.2dd0cc4f.js",
    "revision": "0d9deba72aef5eed5f26c04c93003f37"
  },
  {
    "url": "assets/js/64.da63d33f.js",
    "revision": "ffe64baf92d4750511309746337e347c"
  },
  {
    "url": "assets/js/65.038fa451.js",
    "revision": "f8d4d174094a012f405788c9d9ba61eb"
  },
  {
    "url": "assets/js/66.fc6bb988.js",
    "revision": "76b1bd2711c21d2911556cacdaa96612"
  },
  {
    "url": "assets/js/67.3903cdd7.js",
    "revision": "dfbeff469bf144e41b4f70a47c2a56cd"
  },
  {
    "url": "assets/js/68.72a99030.js",
    "revision": "83ad103bd262490c572b969eae5f5249"
  },
  {
    "url": "assets/js/69.36f5c626.js",
    "revision": "98873154e1f57e214b77e249305ee0b7"
  },
  {
    "url": "assets/js/7.2ddf3fc2.js",
    "revision": "f03e602f234e639fedd77af6c13f65d6"
  },
  {
    "url": "assets/js/70.30235b83.js",
    "revision": "a8b899c63b67ca8a4104215c428cc5f5"
  },
  {
    "url": "assets/js/71.af8dbb90.js",
    "revision": "8b7bce30c077e5e135971009b8897e52"
  },
  {
    "url": "assets/js/72.8b67bd95.js",
    "revision": "778b6074589ee78f2cf984b30990ea3c"
  },
  {
    "url": "assets/js/73.e2219709.js",
    "revision": "b9b71f4b5a5203dcc301ec56373fc4f2"
  },
  {
    "url": "assets/js/74.2cc952fc.js",
    "revision": "f16db7b691d02f22dd0b9fbadff388ea"
  },
  {
    "url": "assets/js/75.cc93f266.js",
    "revision": "680e439c6f93b90bdbe4b1f748224486"
  },
  {
    "url": "assets/js/76.b4fb0293.js",
    "revision": "a0854a3cfb328af03e3f88c7d504ee66"
  },
  {
    "url": "assets/js/77.589854f2.js",
    "revision": "e155f9eee8f613ff2e52cf562172f8cf"
  },
  {
    "url": "assets/js/78.34f7c8a4.js",
    "revision": "1035472ec21963fa81d70998501b41b6"
  },
  {
    "url": "assets/js/79.413a660d.js",
    "revision": "7c003226bc2c8719f71f94a3606749af"
  },
  {
    "url": "assets/js/8.71869f86.js",
    "revision": "9d6f2283ddd1eff2c60ff81cc5a86a9a"
  },
  {
    "url": "assets/js/80.2468c609.js",
    "revision": "c216eb3ac29000bcd6dbdf9027eb4987"
  },
  {
    "url": "assets/js/81.826c379a.js",
    "revision": "eec88ebb7b52374e30e9c8c580b1e147"
  },
  {
    "url": "assets/js/82.a50bec82.js",
    "revision": "e80c103267f11a8a2f827b93615c0d98"
  },
  {
    "url": "assets/js/83.d152a5b4.js",
    "revision": "0610c679380b707ff9554d7806900716"
  },
  {
    "url": "assets/js/84.d18eb385.js",
    "revision": "6b3722ab88c34e6975ccc7d664b77380"
  },
  {
    "url": "assets/js/9.151f5681.js",
    "revision": "550ed5615977e0738252cddc7a854913"
  },
  {
    "url": "assets/js/app.2ae24f2b.js",
    "revision": "d2859d1b7c986411862ffc57902b89bd"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "536293d499b1ed320c4b5ae63436d3d9"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "a93a6d1dfb4afbee0c323513e26fcfa6"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "ad264d1900f6b53a37661f38cbc8a3e5"
  },
  {
    "url": "fontend/index.html",
    "revision": "e672577385100c32438755432498bbcd"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "2b41c672a64b7049f8788fc659edfcb2"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "f0aadc2fc42789d0d44fd60bbe5edaae"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "0ab50953ecfdad7423414ba987f5c09c"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "5847db976e6402941f82dffb4f48fb63"
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
    "revision": "553c6fd359377d643dd0ba01348852c5"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "5f14bd12b4ba3e83f4e3f08a0e81ec39"
  },
  {
    "url": "interview/css/index.html",
    "revision": "239693daaaee0852154e54c6a5a30245"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "a9d49597c097431045757a1448a2e865"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "16e5237b4501e47805ac89fe616f090e"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "5bcf4660fb88b4a3a3a5677a3536c1e8"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "8426c85bd3164488e9ccc95a60c29036"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "f1373c428117d53c996a8c497dd8dc4b"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "241c87fcff7f994fa1b13daf7f842146"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "4b115d2cfd9d913053b02adce7a0971d"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "6bef99dde5759b3094effb1f63968af6"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "faf45525425e7ae0d4af169444589751"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "67c7abaf0de2e9f73ee6f0778d5e7615"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "09d96abbd691e04f1556061e7cb1cef9"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "a030dc5e8719c5395da74783809e091f"
  },
  {
    "url": "interview/html/index.html",
    "revision": "ec7a65f4aad1c893cb287a390af39cd7"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "3261532dc20fd89f83556c6bf678c665"
  },
  {
    "url": "interview/http/index.html",
    "revision": "451806dad5f3080dae4f3c7bee4bff80"
  },
  {
    "url": "interview/index.html",
    "revision": "5913f98749d9b53c79532def21963576"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "f67e768e4e144ed3a34027e059f2e683"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "0cbfd25cbe4476296a1c4bacbe9da6fa"
  },
  {
    "url": "interview/js/index.html",
    "revision": "ad9deb93a620be70792f6a5485634353"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "90b04f8a8d20dd0cb35d6ec9fc518aa6"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "6ea25ef55263be6daba53ee4883e49df"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "4596e5ca2ab2238d9b9782c1ed944261"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "9ca978269dd0852c454a85a97b84ff86"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "33d57c828ef87d8cf0a9d99ec1547e01"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "b7985354de1825a1b06cc6fb44df2352"
  },
  {
    "url": "interview/node/index.html",
    "revision": "db53cd35f36c98ea4be51d0ed8bd7e62"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "79defeebd5a9351096d503d92eb330f2"
  },
  {
    "url": "interview/react/index.html",
    "revision": "04a3d4af91d9e6872a5384db1a1b46fe"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "dc4b6a4106eb16adaf8d3d183e21be11"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "d65225e2021f337209439cf4b3936370"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "ca89cc2a60eef1de887eb8fa5c53799c"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "d8e96a6823cde5448efc9662c6f8ead3"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "e51190b53dc1cab3e400f049b117af1c"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "e5b60e4606521e9e9403bad3a83b35cf"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "891f0a543473ffd5279f8500dd22fa3b"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "a300c41b97ba1836360180c7c9c12d91"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "e360e0e1de4c04f478db55b000b637ae"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "a4bf374a18e8fd87066837ff69f84cee"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "429140995ea56a4d9b53566070a24dee"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "4b8be0378ed5bea0e74c80689fadb7ad"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "a13b6cb9c75c58125460ab0626914a5e"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "b329f9127fbb7c962a1408ea19fb1311"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "dc87c5652e158c483f60b4129710c1dd"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "0be744b3d96ad2dd45ff07c6d2946d80"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "6ce836fc0ee659aa7b825699c0e82a6d"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "73208e3cad447ea6d1acd903be908d61"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "53845ea08b17ae204463fd0122482078"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "51fcb8e94512b1d11fb70ab0c52f8189"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "7eb30ddc2f965e112e4786e1fd76824d"
  },
  {
    "url": "math/index.html",
    "revision": "c4f7db2ead8fce44fe66d02d7fc22545"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "3be0548e258277120df0c137107837b8"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "345d25212105308bab04402f4b55d1da"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "a9be36c6468b866f8b54e689f5afe5bc"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "95185843b494676e8919fd28516cbbc6"
  },
  {
    "url": "math/low/index.html",
    "revision": "22add3cfea494e459cc1427f1ac14db4"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "77d5bc2f0f073bf8bf1dcb39d0edc8b3"
  },
  {
    "url": "math/mid/index.html",
    "revision": "7720d8f0cb0f8773eaa0bb92f22370f0"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "ad73caa29669344af122d7059d6f207b"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "2e98865cd6a9a15d342ab76bc12db830"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "d83e44301f1abd3a4671b8a9ff8a712b"
  },
  {
    "url": "wechat/index.html",
    "revision": "50b470bd873a4be24efe1db5ac3492aa"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "89c81f222b917eab53fd9133450512ad"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "a5a0202ddcf8698a794ff328eb39edc8"
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
