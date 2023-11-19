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
    "revision": "0f454702810dde7343b332d829375cb3"
  },
  {
    "url": "about/about.html",
    "revision": "644ff3e0800429ac1d10cf098903febd"
  },
  {
    "url": "about/index.html",
    "revision": "232fca9ae28973484f977a33082f792f"
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
    "url": "assets/js/17.06b829e2.js",
    "revision": "b43a4b88c50e23ab005938c13bc8d17d"
  },
  {
    "url": "assets/js/18.e71c274d.js",
    "revision": "444ce503b8c289822ba8099d72df1ec3"
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
    "url": "assets/js/38.0800e1ce.js",
    "revision": "55bb2bad9e27a27d583c34eeeb60d6f6"
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
    "url": "assets/js/5.9278f44f.js",
    "revision": "7c2ef49a5c7e8f8e1ddf213d8329694f"
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
    "url": "assets/js/56.6d412378.js",
    "revision": "90cac6ec1b464e51e50dd1fd7665f1b9"
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
    "url": "assets/js/66.8a110c0a.js",
    "revision": "2be0994054cbdb0b4e13c3c750007c27"
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
    "url": "assets/js/76.e14d9f75.js",
    "revision": "f1d9df0b1b20d751c9ea7ecade5b6299"
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
    "url": "assets/js/app.ebc9d906.js",
    "revision": "dbb911544b99de2f952b450f72668b48"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "0a97dd5b3ccb508d7aa43ee098766a31"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "1bd4f9b1410a364a8c9f985e057614a0"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "b9e532520adb33fff1902ccc04f9d176"
  },
  {
    "url": "fontend/index.html",
    "revision": "821059aa7001f904dff92b6189cbfa24"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "fd64311a929fcd2c79aa3a523816a171"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "29bbce038660e4f1484bc4ff63a05646"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "99054bb1e4165612ab8ba148d3ff0af6"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "a074a51ae5db09b40b315d6fbe9fc473"
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
    "revision": "0fe1db9ed704a561fe3a15cd6be19c8e"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "58a69dca12b5f0a129835cf1af3aee12"
  },
  {
    "url": "interview/css/index.html",
    "revision": "17c9d80e5d98781d8922dfb6de54c0b1"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "785acac39fa83b8cba43dfc174228b0f"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "a5e6d84bb0a95bee8c7c9cab5f024c79"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "80a6e452dc52e6449456147b2d63031f"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "41ced89beea77ea1afeda88c67049486"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "57b1a57a9be0d3ed80a64e6727b135da"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "c9317b31fcf9eea4165d669478e65273"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "e147d5a396404ba0cd9a5e21aa747546"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "eeb33a9cc33f918578fb1dbea83ef0e7"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "a971962865a64cd41c812e620c039400"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "4ec7ca3bf05e37428f8d879a7faec253"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "2ad12321df66cbbc5d14b18c6c88a054"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "d5b15eb8f331adb19c7109da157337f5"
  },
  {
    "url": "interview/html/index.html",
    "revision": "f09e6da379dc5f5e4c28149a4500bc0f"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "deaee43bd0944020eee71c0f069ce532"
  },
  {
    "url": "interview/http/index.html",
    "revision": "af06216eb682606707ebe83c1ce7944d"
  },
  {
    "url": "interview/index.html",
    "revision": "266887a88b810f208d5ca5d5183cb2c3"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "657aee4494178fe238b6737f5b102014"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "75480332f013c2f4f86d6bda6ce1bfbe"
  },
  {
    "url": "interview/js/index.html",
    "revision": "8194baaee49c6abd36b037ff76ed72b9"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "1012ffeefc52e35d65ac56649054ad69"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "8b8ba6951fc778e1dad374fa314122df"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "75a4f04265686936fc28516ecf527a87"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "a58350680521767b1989bf199bab4396"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "c73ecc985f921c4533a66c13d0399606"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "a85e6df346ffee8d171f68c842ed3bf4"
  },
  {
    "url": "interview/node/index.html",
    "revision": "b2b907d954ca2f4d80ad8dcbfe8477bc"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "0f0824b35f6e3cde04db077697358d11"
  },
  {
    "url": "interview/react/index.html",
    "revision": "d995ab69af495be1f26c8dfccf5d82b5"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "db2f9fca72debe2014b15e441418fe0c"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "49841ba77af037c3de69927410993f6d"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "16fb1b3563665916d343bc56ae16c054"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "4a7687fb9ac5cfffe194e0ee8798da03"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "1afe9d4ea79fa33bb036e7b48ea70917"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "265a70511a35f0dc6dc899aeedb9354c"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "59447dca5436930480805b7b0ed80165"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "a2fa947051e6b3579978db025d80415a"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "ba21c4c6e75842b5b6bc3f71971affec"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "4d36363df8e4c8fe261d4f629eb45386"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "76356ca9bf2aceeb20dfcf4d2441f5a4"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "256f5cc90ed203d812dc3a2007e4d18b"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "8cc79d0fe4797330173c25a5b30f7362"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "f4c258d7a5486d0a83e9e4c8821e03ce"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "e69311bf20a576143d680b8f230b59cc"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "4b9abc5694c66c464526e3db522308e4"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "46a6c682f46bd682c5b5983463252f87"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "8a1f05ee05b6bd8d4f16e1689906e958"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "02d15925526ff9856fcd2d13660bcde1"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "5a33eb7cddd57f1e21216b0bb3e1a619"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "b5e5b7cdcd559342359021f146f07ce1"
  },
  {
    "url": "math/index.html",
    "revision": "dc04d1dd013713885e336258acc94afe"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "f15e29e57964ce59929b79974ec2de8f"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "d934eac5077de3f02f9715bcad4f1fc2"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "8a30473505b55173b433742c38e69ccb"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "0d128f70aa61b64dead6c3cb2d7c68ba"
  },
  {
    "url": "math/low/index.html",
    "revision": "5ce6d5ab22ad5de3c76fc2ddc963252f"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "ffa2da2f8300e0b694a689674e2db290"
  },
  {
    "url": "math/mid/index.html",
    "revision": "457371ac157cd5d87a0fb2af40455440"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "14451d2dce4c503f8974b902b9888239"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "89151efbbf5ffda5f274e674549c5cca"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "63d6123c94f336eaa5de082f17d9a0e8"
  },
  {
    "url": "wechat/index.html",
    "revision": "1fbf0d9586e06965cb853709ab477d8b"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "cdb66a68aa57f9c55c5916c6783c0e53"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "5e942504e308615c4ca26b7fba2fdee9"
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
