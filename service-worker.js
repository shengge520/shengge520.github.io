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
    "revision": "ec304d7bea06442a2d58754893fecdf3"
  },
  {
    "url": "about/about.html",
    "revision": "184f7e30317ed2768f8c1be6e25e7dc9"
  },
  {
    "url": "about/index.html",
    "revision": "9a272d517ed99ec2e72937e1b6dbc9d3"
  },
  {
    "url": "assets/css/0.styles.b2391334.css",
    "revision": "d6cb02168b0732e3e7839c2947cc9359"
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
    "url": "assets/js/13.961227b9.js",
    "revision": "6b8afb3afc7a49b2a5db46755bf3ac4d"
  },
  {
    "url": "assets/js/14.aa32187d.js",
    "revision": "2082877bffbe524e399de6ddc30fef9f"
  },
  {
    "url": "assets/js/15.70a6b9e3.js",
    "revision": "958eb27299ea29a0ec37f7f6d092caf8"
  },
  {
    "url": "assets/js/16.68ff088d.js",
    "revision": "69a848899afc4c89923355f61ac657fb"
  },
  {
    "url": "assets/js/17.413dfa1f.js",
    "revision": "f0eb172ddb9f76aadafc654cb477e8d7"
  },
  {
    "url": "assets/js/18.cee12c9b.js",
    "revision": "be8e49671442a8b2addff2420747d975"
  },
  {
    "url": "assets/js/19.c66fa1c6.js",
    "revision": "288e50bd7d8f1a66d3740c19cf87f9bd"
  },
  {
    "url": "assets/js/2.9560d7c0.js",
    "revision": "d19b4cf833fa184340962ae0c2de72a1"
  },
  {
    "url": "assets/js/20.d7514f4e.js",
    "revision": "5bb060296eaca1cf005b40d840674330"
  },
  {
    "url": "assets/js/21.133a6dbf.js",
    "revision": "26507d700cc11df112ae595bd68fb136"
  },
  {
    "url": "assets/js/22.b4a00a30.js",
    "revision": "61b18c6b8a2e4c4fffbddd570b6d31c3"
  },
  {
    "url": "assets/js/23.a6d3f5e6.js",
    "revision": "e3f668d8a60d646570017b353f1b6eb7"
  },
  {
    "url": "assets/js/24.83c134de.js",
    "revision": "6b22b82ba2b7b580c719160e0b160512"
  },
  {
    "url": "assets/js/25.e8551a30.js",
    "revision": "8d3caad2affcb87c8a09de5c29d8fcaa"
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
    "url": "assets/js/28.3ef06582.js",
    "revision": "38e9c25f3c95dd5a9a71c261b389fb6f"
  },
  {
    "url": "assets/js/29.759ef927.js",
    "revision": "3850adf747b02d9115aa1f6d00d69616"
  },
  {
    "url": "assets/js/3.555f9bd8.js",
    "revision": "ee93c69d8484aa253c5cd1e1c4b6331d"
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
    "url": "assets/js/34.49d4d81b.js",
    "revision": "398eb56b398c01ea5f3fd8eeff047482"
  },
  {
    "url": "assets/js/35.4bc85d7d.js",
    "revision": "525700595a7d3c376f2d9e9020a2f38b"
  },
  {
    "url": "assets/js/36.84ae00d2.js",
    "revision": "7058f2bcc462a5b01878d3766f1b22ab"
  },
  {
    "url": "assets/js/37.af6bf9c6.js",
    "revision": "463337813519cbf293efa459802af6f8"
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
    "url": "assets/js/41.ec2e5e03.js",
    "revision": "36642adbc70806cf1c36bccf07b35953"
  },
  {
    "url": "assets/js/42.8e1a6430.js",
    "revision": "b8b952ad3e962957cff012e68de6891c"
  },
  {
    "url": "assets/js/43.d50421ad.js",
    "revision": "ed6ddf2706c2fa224920ddfe82ec930c"
  },
  {
    "url": "assets/js/44.d5a40010.js",
    "revision": "0c609add0ba242e066be743d96189130"
  },
  {
    "url": "assets/js/45.e24808dd.js",
    "revision": "dc240bb752f912e046bae14f78be4020"
  },
  {
    "url": "assets/js/46.6a9cc358.js",
    "revision": "4ca4d381ab5ff9830bb77942d7649bf3"
  },
  {
    "url": "assets/js/47.98734a09.js",
    "revision": "d15aa763d45eba83fc02155235f337c3"
  },
  {
    "url": "assets/js/48.2d66ac69.js",
    "revision": "f99b700ad3ff849b2df9705aa0313017"
  },
  {
    "url": "assets/js/49.d493aa44.js",
    "revision": "142ade99132b052534d6dcb1d7b59b9d"
  },
  {
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
  },
  {
    "url": "assets/js/50.6810f7a4.js",
    "revision": "997f2b5ab52bc998616ece8ea613f941"
  },
  {
    "url": "assets/js/51.d342db47.js",
    "revision": "b774a04728118eb6831b6aa8c61df88f"
  },
  {
    "url": "assets/js/52.c42f84e8.js",
    "revision": "44fd036060391f7997f930be4f0f6332"
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
    "url": "assets/js/66.defaabe5.js",
    "revision": "6bcbbe564e75a9eecab8845b0013d203"
  },
  {
    "url": "assets/js/67.64e62117.js",
    "revision": "2da3677f8d591841cb6de3810910919b"
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
    "url": "assets/js/7.5f7fcddd.js",
    "revision": "fe5ab34006b88fb09226df2cb158835b"
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
    "url": "assets/js/9.79236837.js",
    "revision": "4263677eed42be4c47d281bf188cf7ae"
  },
  {
    "url": "assets/js/app.2f8e8bf4.js",
    "revision": "e60f33701b2285dde008464ff4d05c81"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "afd061555e2f998f4465deb45185e82d"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "9923c173bd07a2631affe052efcff37b"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "edd39b20072431b2e0fcc120c14bf261"
  },
  {
    "url": "fontend/index.html",
    "revision": "b0a439115f610644ff39ad889df3ed93"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "0818d70a615636a0c01c009b30af42b1"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "ca6a2ed2202bf611ec89c63f8f2cf9cc"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "49f316cbf18ab11bebee0c55e74d5c80"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "396472be1eb7f0e0c5cb0a76cbf5696b"
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
    "revision": "8f09574b9eb91b4c1932839cf921fa21"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "f4016a1ba3123d041106e1eb982393c2"
  },
  {
    "url": "interview/css/index.html",
    "revision": "9c786be50a9d456ecd14ba21931d062d"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "edb842faa097d3d28029df4df7e98119"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "faf22bb85b18c201c5d2c074ce64239c"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "d07b888a9f55210db8a6e825ef1aea84"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "d562561aeade004e93ad703f12e34732"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "7b5d423298f310e1189b329f92d8d21d"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "a659d247c45e33a86fd5f1e56b7ec011"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "20244253336ab0f7a2464cc8647e20ff"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "7e15ba5dc46605937c94cbc74a5e8922"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "882214bb55bb3fa77bf3773f0828ccf8"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "1e7d44eabcebc5394f292531964aebb4"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "cf6201eee0c19672997bbd6d5ee5ddbf"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "f4bb4a82d9bf3bbb1975ced93340b915"
  },
  {
    "url": "interview/html/index.html",
    "revision": "e1c3be7aa97218f9f202040e9f7c486c"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "13547aaeb3e2bcf7a87479f55367e6db"
  },
  {
    "url": "interview/http/index.html",
    "revision": "b14525877bc5e370caaa70eec4b2eb2b"
  },
  {
    "url": "interview/index.html",
    "revision": "98f24ce2a1780d44299fd7a0b007a242"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "a3d31f46a799f0e185e113360dd66891"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "405bf4c842203e5145191092762549bc"
  },
  {
    "url": "interview/js/index.html",
    "revision": "69dd2ebdd9c74f6d192e173c81ebd4bc"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "b57d2864045fd93fcdd73ef2acac8331"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "95be096c7111b3d7edb39f6fa2548710"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "4af4ccc1eba9380279ea4b3ad5aaee76"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "f376b9f899ba901692e3ddb563e00c7c"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "d0d3e68672d78c363fbc276b6a766046"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "4609ca28a60b42ddbbccf6723dc1d6b3"
  },
  {
    "url": "interview/node/index.html",
    "revision": "89f4a13686ed7da815cf94e480f21962"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "6197bcfca4d0de737f6cf57a790e57a9"
  },
  {
    "url": "interview/react/index.html",
    "revision": "7e256a87a5d9e01711b8273f64d29962"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "c44c60ac06f92c184443b3097228f883"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "c051b831fa48f4b8fc62aa5423afe3b1"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "7d4512d8bd089fff0ee6b8c463f9da03"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "06ecb62c563e0c6de84ddb71b0a354e1"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "78e20dc054c62d1055f776f8f8c9a38f"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "f9a2cd3f95d29f0cc20184800670fae4"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "feab1c71162f71e1e8cb8dcc5c706d8e"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "bec81fbc5caee93f4cc5e3ab739992b7"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "ab3c5755032f24948adc6e7df8bcc06e"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "a0d255b4c8e0ca5f2176751ab08b85ea"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "7e082464b451faf08f57cd63b8f436b9"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "c96a7f538ccb51af172bc61fc99a3f3b"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "dbfe210455bf8ba122c7faf8d90efb75"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "7a4ddaf359e9c748df76751371a89d0d"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "d1f9be2e247f314feea35722e0a93ad8"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "4980d82dfe20d5a1a009390a6489c08b"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "ea7a90f270fb086a570e4d2048974398"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "8a10a7a0792de31ab4fd5ef9cc819bf9"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "92027841bbf8f6537e3f0af96c568e9d"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "5bca4bb96a5bd84b462afdf0e6362d80"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "8c810d6d3742771b9f725d016fbcb176"
  },
  {
    "url": "math/index.html",
    "revision": "318e3324466728c4c6810e2bcd50978b"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "a79a48c40859c6cd36654e47acd50eae"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "318e0ee95dd3e9b60ef5de5057329eea"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "0731b2bbc69419662b68e7d42a1583c2"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "4bb3eb63594b792e0b973fdb8257fd82"
  },
  {
    "url": "math/low/index.html",
    "revision": "c24239625469b7f052cb3bf7430f3402"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "9e9895b4928e5a0c234d2f7e13543fa9"
  },
  {
    "url": "math/mid/index.html",
    "revision": "88735bc876480e95a556f41cfd8bdc6b"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "acac7022c53e1a006fa4c2d465758906"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "786b905be6f675488f6cbc8fed962b0c"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "c652ad6a8f29c255ce42ae21be5fd836"
  },
  {
    "url": "wechat/index.html",
    "revision": "e34acb0770b6e1d7fd6cff56bc99bbf2"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "21912e368768a8824d8700982e70ca14"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "0231871cfcd7c041828d32435137b228"
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
