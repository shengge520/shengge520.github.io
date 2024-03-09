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
    "revision": "a05e41af5a3d2be122ea1a6195574834"
  },
  {
    "url": "about/about.html",
    "revision": "e49a76e05e53e8033f8041f829492621"
  },
  {
    "url": "about/index.html",
    "revision": "0ffce5b98287c9b4267ab5bcfde61b87"
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
    "url": "assets/js/17.9b2a0804.js",
    "revision": "d90ed32697275a23a0e613c03a90600f"
  },
  {
    "url": "assets/js/18.e71c274d.js",
    "revision": "444ce503b8c289822ba8099d72df1ec3"
  },
  {
    "url": "assets/js/19.980eabeb.js",
    "revision": "b9dcb59e9b25c55d43b250e3442bd74c"
  },
  {
    "url": "assets/js/2.9560d7c0.js",
    "revision": "d19b4cf833fa184340962ae0c2de72a1"
  },
  {
    "url": "assets/js/20.24c7da3d.js",
    "revision": "8c8ac9833086e60e667ee9f8e1055911"
  },
  {
    "url": "assets/js/21.01796f91.js",
    "revision": "deb9172086582054f7838fe312b62ff8"
  },
  {
    "url": "assets/js/22.6afef43b.js",
    "revision": "d480a16b2fd9dd2a7d41396127fd9da0"
  },
  {
    "url": "assets/js/23.718a8f77.js",
    "revision": "654444b4bbdc05e47ba7f0adc40de200"
  },
  {
    "url": "assets/js/24.039db294.js",
    "revision": "100205e05b0dd8e3510d5e42620ba148"
  },
  {
    "url": "assets/js/25.eb7ab6e4.js",
    "revision": "a3d1981570157bbc51e628f441071b2f"
  },
  {
    "url": "assets/js/26.9b301804.js",
    "revision": "a91260d835deb792ee221b18d78ff3b4"
  },
  {
    "url": "assets/js/27.89cd44ab.js",
    "revision": "ebfdaeeef477cde01ec65f06ec1e0822"
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
    "url": "assets/js/3.b2182916.js",
    "revision": "6b6ce6524307ce42276faf5382b76dd5"
  },
  {
    "url": "assets/js/30.3f2528f2.js",
    "revision": "cc79ab5d0a2377b588bd26a3ed4687d4"
  },
  {
    "url": "assets/js/31.4464af93.js",
    "revision": "fc40e162589e01626cecbffe942ae0d0"
  },
  {
    "url": "assets/js/32.2384069a.js",
    "revision": "47ee74008d7d5706a359640b17a5f867"
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
    "url": "assets/js/35.3937129d.js",
    "revision": "128e90812ba264fdf23474f96acc70bd"
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
    "url": "assets/js/38.7be5f639.js",
    "revision": "63a332af2be7f83fe40a16d0650bc445"
  },
  {
    "url": "assets/js/39.8261f05a.js",
    "revision": "a284d6c6bc5a6267a57ed900c5dde53b"
  },
  {
    "url": "assets/js/4.1169c5b8.js",
    "revision": "bb080edb48652c4cc3eb8da354a1d9c3"
  },
  {
    "url": "assets/js/40.cb002ff4.js",
    "revision": "8fee01f2a591418087758e0249f3a0fd"
  },
  {
    "url": "assets/js/41.e13c831a.js",
    "revision": "6eda7d69b0ae44c8af975d6f990fb6ff"
  },
  {
    "url": "assets/js/42.d24b7ba8.js",
    "revision": "d73c1f5e07ade61cd76c6d904d838cf9"
  },
  {
    "url": "assets/js/43.c433c83a.js",
    "revision": "12351983f92240da3b9a527b7f8982b8"
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
    "url": "assets/js/49.d295c7c6.js",
    "revision": "2d7c2cd0ac41c31dc317cbabfa490545"
  },
  {
    "url": "assets/js/5.725ae5e5.js",
    "revision": "69b47a370058655095708c571b388af4"
  },
  {
    "url": "assets/js/50.e7a6b10f.js",
    "revision": "101c19c48eac51517240352fdc31ae4f"
  },
  {
    "url": "assets/js/51.ac63d75c.js",
    "revision": "749036076f16337e949228faf720cbef"
  },
  {
    "url": "assets/js/52.65b84612.js",
    "revision": "bd5aed32928f831bd1b0518cc1ee30e8"
  },
  {
    "url": "assets/js/53.803f1031.js",
    "revision": "c68bd5f21034ce4fa1270e26ee485e35"
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
    "url": "assets/js/56.26b32b8f.js",
    "revision": "dfcfc4a833397542412decec8df02bc3"
  },
  {
    "url": "assets/js/57.29893ea7.js",
    "revision": "ed666236cc6cf2cfb9c5a2e9348597a1"
  },
  {
    "url": "assets/js/58.28e858cc.js",
    "revision": "b5f8ef196ff548a330446ac0dd5d44df"
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
    "url": "assets/js/60.4941aed8.js",
    "revision": "73506052ae4a19abcd17553432614ee3"
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
    "url": "assets/js/67.3f136b62.js",
    "revision": "d412555069d708cc61949fd041566522"
  },
  {
    "url": "assets/js/68.3dda5a20.js",
    "revision": "3bd4e0701af1aab9c10b7563ac9d34d0"
  },
  {
    "url": "assets/js/69.468a7eea.js",
    "revision": "66af8346bee9c078e7b6802c4b268eb6"
  },
  {
    "url": "assets/js/7.142000ff.js",
    "revision": "b7ae3f7f99b9f7451764a6d3d6c79ad5"
  },
  {
    "url": "assets/js/70.fdbd092c.js",
    "revision": "5599f1be91ff9012b7521a2acdc61eab"
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
    "url": "assets/js/73.6c2bb137.js",
    "revision": "fd80df4fd9e93c805e9a6d6b27bb0b2f"
  },
  {
    "url": "assets/js/74.c79afa3d.js",
    "revision": "1eb74b3303f8eb94d5bb858d6ae57013"
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
    "url": "assets/js/77.c1ee250e.js",
    "revision": "3ec43b70706d50f95670bfb267e3db50"
  },
  {
    "url": "assets/js/78.499668cf.js",
    "revision": "a569675dc6a083a354b896d427c9577e"
  },
  {
    "url": "assets/js/79.bf34c9dd.js",
    "revision": "3d21ab74458c99472f7066381a12a9b2"
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
    "url": "assets/js/82.6ed5def0.js",
    "revision": "3389d518ab2a42da76e1231a0d61746b"
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
    "url": "assets/js/9.cde4e5d8.js",
    "revision": "d52a15d348c88897a5e4d155227cc615"
  },
  {
    "url": "assets/js/app.b7a6c775.js",
    "revision": "f275f004e4888b80b3d376268a67e32f"
  },
  {
    "url": "css/style.css",
    "revision": "9496c4f3d4f817b3fd1655953827daa2"
  },
  {
    "url": "fontend/css/1-center.html",
    "revision": "3952a416a5566c4d6e0da50eba8fccb1"
  },
  {
    "url": "fontend/css/2-flex-box.html",
    "revision": "bce8034e4d42c01d8a890cb3e0a55fd4"
  },
  {
    "url": "fontend/css/index.html",
    "revision": "4ba763ab03516eb0ddffe9a76e86abf1"
  },
  {
    "url": "fontend/index.html",
    "revision": "1151a8b9f05510b69579364f08a62bee"
  },
  {
    "url": "fontend/js/1-scope.html",
    "revision": "626eeb337398132780d232ac04860e09"
  },
  {
    "url": "fontend/js/index.html",
    "revision": "87a8d92b771955b89c516d6256fd8c7e"
  },
  {
    "url": "fontend/tools/1-vuepress-build-blog.html",
    "revision": "150e8e83e6decd58651e69b8bfaa44a4"
  },
  {
    "url": "fontend/tools/index.html",
    "revision": "32d3fa8030357581e425b4f0085135d1"
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
    "revision": "e97a9277bdb61c523352070b3719628b"
  },
  {
    "url": "interview/css/1-interview-css.html",
    "revision": "e9f9038746e717cbe70648bb5db13adc"
  },
  {
    "url": "interview/css/index.html",
    "revision": "e8865f29d31e9b0cc9870125c9ba2bd6"
  },
  {
    "url": "interview/css/一般/1-inter-css.html",
    "revision": "0702e7b63c34ddd90b5ce297aa2ccfd6"
  },
  {
    "url": "interview/css/一般/10-inter-css.html",
    "revision": "a5716c57b81b93a2f34148c163092cb7"
  },
  {
    "url": "interview/css/一般/11-inter-css.html",
    "revision": "1348f45ec3a01cfb029147f5ea7d69e8"
  },
  {
    "url": "interview/css/一般/2-inter-css.html",
    "revision": "2c6b498be7566cdd102f3e24f5877125"
  },
  {
    "url": "interview/css/一般/3-inter-css.html",
    "revision": "8e5cb645119db935eb78dec83a4efaa8"
  },
  {
    "url": "interview/css/一般/4-inter-css.html",
    "revision": "930df59586a596f41966688488cfe057"
  },
  {
    "url": "interview/css/一般/5-inter-css.html",
    "revision": "a218f8eb64d55a880c3113e3776a35f4"
  },
  {
    "url": "interview/css/一般/6-inter-css.html",
    "revision": "70f4601b99742278907e9647d7484a28"
  },
  {
    "url": "interview/css/一般/7-inter-css.html",
    "revision": "1a9ac0b849e02d2c749e93b77eaa81a0"
  },
  {
    "url": "interview/css/一般/8-inter-css.html",
    "revision": "d7261a171678d4abe14a05003478b2b9"
  },
  {
    "url": "interview/css/一般/9-inter-css.html",
    "revision": "a4d12d9f8941a587a91af5be878cf456"
  },
  {
    "url": "interview/html/1-interview-html.html",
    "revision": "2215c0e6085307a0907f51c2e82ceeac"
  },
  {
    "url": "interview/html/index.html",
    "revision": "b31c2e785731d6280f38f985a4e02147"
  },
  {
    "url": "interview/http/1-interview-http.html",
    "revision": "905051989b4deb962dd123155b655229"
  },
  {
    "url": "interview/http/index.html",
    "revision": "71f8e0479eb1d42253d0d6be39f78849"
  },
  {
    "url": "interview/index.html",
    "revision": "b83053af399de6733705d0c7d133f167"
  },
  {
    "url": "interview/js/1-interview-js.html",
    "revision": "cbcf91a9562707923df8a1bd7042d649"
  },
  {
    "url": "interview/js/1-num-js.html",
    "revision": "b37f004425bf323e26577efb3ba978da"
  },
  {
    "url": "interview/js/index.html",
    "revision": "8cdb3ee6c2de998d6780feccb4aff558"
  },
  {
    "url": "interview/js/数据结构/1-data-js.html",
    "revision": "a82db27f00086e7dd9f492dd52644891"
  },
  {
    "url": "interview/js/高频五星/1-num-js.html",
    "revision": "f981ce761612d0e4018e59b5f9609dbd"
  },
  {
    "url": "interview/js/高频五星/2-num-js.html",
    "revision": "7a094954f90ae050b69029a9b9f3f1d2"
  },
  {
    "url": "interview/js/高频五星/3-num-js.html",
    "revision": "ffcdf69666d18dfb55c056add6a2aee9"
  },
  {
    "url": "interview/js/高频五星/4-num-js.html",
    "revision": "c4e3ad08ef99cac73258f7b15a2e44a2"
  },
  {
    "url": "interview/node/1-interview-node.html",
    "revision": "77cb74a5f8802a4c26d56fb71cb656b9"
  },
  {
    "url": "interview/node/index.html",
    "revision": "78acc4a8e8ca3fa7d4e32403f9c94a00"
  },
  {
    "url": "interview/react/1-interview-react.html",
    "revision": "e97342b284a6a7f2a9fbc750e65a4554"
  },
  {
    "url": "interview/react/index.html",
    "revision": "8d5e79a1db7373d98262ed08dcce3d6a"
  },
  {
    "url": "interview/react/一般/1-inter-react.html",
    "revision": "2fc932b843aa223ec462a4fc738bbdea"
  },
  {
    "url": "interview/react/一般/2-inter-react.html",
    "revision": "58c342bbd78b4e561e9ac421fec500dc"
  },
  {
    "url": "interview/react/一般/3-inter-react.html",
    "revision": "f2ac6740ed6973003bfbde4a65e1cd00"
  },
  {
    "url": "interview/react/一般/4-inter-react.html",
    "revision": "8ae9f1d4118000634995e9c8e2786f6a"
  },
  {
    "url": "interview/react/一般/5-inter-react.html",
    "revision": "be1c04e4f95b56b15f8c8d9a890c944f"
  },
  {
    "url": "interview/react/一般/6-inter-react.html",
    "revision": "3a22142c71b452c5e1c79e91354d9da6"
  },
  {
    "url": "interview/react/一般/7-inter-react.html",
    "revision": "f4a27a1f3b0bbad6914f3bbe76ed838f"
  },
  {
    "url": "interview/react/高频/1-inter-react.html",
    "revision": "0c6803b22f7879fcbdc253f05fb74084"
  },
  {
    "url": "interview/vue/1-interview-vue.html",
    "revision": "b6472c654f7f4f1d3f8e4e6735819dbe"
  },
  {
    "url": "interview/vue/index.html",
    "revision": "adf1be5a4dd18617d38764b9fa0abd06"
  },
  {
    "url": "interview/vue/Vue2/高频/1-high.html",
    "revision": "651e998e4c43dcb13083311fbf7fc73e"
  },
  {
    "url": "interview/vue/Vue3/1-vue3.html",
    "revision": "d806b019df54bfa2d7d38513a3415107"
  },
  {
    "url": "interview/vue/一般/1-inter-vue.html",
    "revision": "1d4268a08e517d693877d4c42f4b411b"
  },
  {
    "url": "interview/vue/一般/2-inter-vue.html",
    "revision": "38dbcef6dbec54a7c965b855f3758542"
  },
  {
    "url": "interview/vue/一般/3-inter-vue.html",
    "revision": "debfaa9a65403183aa0d68d1b6d01cf2"
  },
  {
    "url": "interview/vue/一般/4-inter-vue.html",
    "revision": "8a57d3e4fea5fb8fe825cbe3071d0706"
  },
  {
    "url": "interview/vue/一般/5-inter-vue.html",
    "revision": "828bfdeccf4e8fc9a26606d1107ae49e"
  },
  {
    "url": "interview/vue/一般/6-inter-vue.html",
    "revision": "59e41045bcecfb7acffad7f7f3ce7427"
  },
  {
    "url": "js/btwplugin.js",
    "revision": "96527627c36ff6932f4b9af7f2becc1c"
  },
  {
    "url": "math/cloudev/1-first-cloudev.html",
    "revision": "4426238697dbf22439210af2093e763f"
  },
  {
    "url": "math/cloudev/cloudfunctions/1-first-function.html",
    "revision": "74d57176f004df008b3f40b4a98ef77f"
  },
  {
    "url": "math/cloudev/index.html",
    "revision": "7c3d79eddf348118ca85a20c3d3798ea"
  },
  {
    "url": "math/index.html",
    "revision": "d299abcdcd4edce9ba679c3bea8655a3"
  },
  {
    "url": "math/low/1-first-low - 副本.html",
    "revision": "869eccf9428849566b396ee93fb5e4ad"
  },
  {
    "url": "math/low/1-first-low.html",
    "revision": "fa37ca110830452489d87654e45f1023"
  },
  {
    "url": "math/low/2-first-low.html",
    "revision": "a32375923d19286a2911f34878b6e13c"
  },
  {
    "url": "math/low/3-first-low.html",
    "revision": "5bcf4a74a708dc7efea3c911470d11ea"
  },
  {
    "url": "math/low/index.html",
    "revision": "222815a65e11f59001c3a0289833832c"
  },
  {
    "url": "math/mid/1-first-mid.html",
    "revision": "c248e984e3f7cf07f5af3cf83e5fd1d6"
  },
  {
    "url": "math/mid/index.html",
    "revision": "7d30a3198a196664d7bf673aa4313973"
  },
  {
    "url": "wechat/cloudev/1-first-cloudev.html",
    "revision": "4b3569718ca535623d0380dd7be83c7d"
  },
  {
    "url": "wechat/cloudev/cloudfunctions/1-first-function.html",
    "revision": "b2ce362031207ccdb08032728e74cc07"
  },
  {
    "url": "wechat/cloudev/index.html",
    "revision": "6c5550f1861ddbdb18567106411a0474"
  },
  {
    "url": "wechat/index.html",
    "revision": "8ab555ec389466befedb0667a7408c63"
  },
  {
    "url": "wechat/minprogram/1-first-minprogram.html",
    "revision": "01ce9ad8794c840eef43b6732b638fec"
  },
  {
    "url": "wechat/minprogram/index.html",
    "revision": "61e3f8d9ac31d222cfc43695eb67ce3c"
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
