if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let t={};const c=e=>i(e,d),f={module:{uri:d},exports:t,require:c};s[d]=Promise.all(a.map((e=>f[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-33d91895"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-f8mHPHhj.js",revision:"0b3381d259b82326e30bcff0b0d8881f"},{url:"assets/404.html-k4bNDpfy.js",revision:"400da2812a7e19e6637165bb812849e5"},{url:"assets/app-G5hzYldR.js",revision:"7ec3fe49dba81eebc2a14256faba1764"},{url:"assets/config-change.html--2MVr9Ss.js",revision:"159aba885165f9a63896b28d2d603f3d"},{url:"assets/config-change.html-HiXultWa.js",revision:"6b12e81ede9184e141e84d83b63ac43e"},{url:"assets/custom-tp-setting.html-AsXvpiox.js",revision:"953399084a491f50326faab899bf6500"},{url:"assets/custom-tp-setting.html-D0UpE_Ep.js",revision:"1b83a11416ba334261ef833e9591b815"},{url:"assets/docsearch-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/donate.html-SVm5kCZS.js",revision:"953ad84fd17428e2dd4566d720e4443f"},{url:"assets/donate.html-wuwuf8CY.js",revision:"baef3b336793d36f95c7d244290f4f9d"},{url:"assets/download.html--CLRlNw8.js",revision:"a8c9259ac889573b9cc7894e0603c113"},{url:"assets/download.html-2GMJ6Dcj.js",revision:"d9b1fd8bcafbcaec429d1c001a87ba48"},{url:"assets/download.html-aMusVEt4.js",revision:"023807b014f2c948c96a1bef6c488705"},{url:"assets/download.html-e2wpRpXi.js",revision:"a6c2e92e37d79e620dc036d9328b9c63"},{url:"assets/download.html-JsO2pC_t.js",revision:"fb5c4809d355e083f55a50cfaf5e3934"},{url:"assets/download.html-Mjv84arT.js",revision:"6efac22850499bec8fbb0e78940c493f"},{url:"assets/download.html-nh6hc5gf.js",revision:"5b7568bc85cf5e2265ddde76f058713e"},{url:"assets/download.html-O59pQGbF.js",revision:"d7f9cfed981dba32831d323971effdf4"},{url:"assets/download.html-TwMFZFMV.js",revision:"2a77c937cd9360b896840ea5fe8fbba6"},{url:"assets/download.html-u6F_n9yA.js",revision:"2b2532115f74462d675548473a4b6404"},{url:"assets/download.html-uBRdRFVC.js",revision:"882e871e9686a71f60cb5c2a7122f587"},{url:"assets/download.html-UgXaKmL5.js",revision:"08cfe886937a6008e76adde6ff5dd475"},{url:"assets/esp-setting.html-2WYrwoVh.js",revision:"61ccf7e75022739ad42099fca99be64f"},{url:"assets/esp-setting.html-hHtzJUli.js",revision:"96ec930c92e579f8ffbc64826f9e3443"},{url:"assets/giscus-unEZQsJ0.js",revision:"34c4288ad53e7d9be8d0f44c9fdba069"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/kit.svg",revision:"a3663a205654213e974cfc9ef73a68c0"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-QOy62Fup.js",revision:"fa112b5cda5ee3c969c504c6a3080b4c"},{url:"assets/index.html-0XPp2wGs.js",revision:"a6ffcd0430cfe6aa255e60e5e11caaaa"},{url:"assets/index.html-1EsdN9ID.js",revision:"45d54b9326ab2624cf9f4f7790c91747"},{url:"assets/index.html-5tr3oT7R.js",revision:"caa1995aa932ae536ae6a6f05b43a508"},{url:"assets/index.html-B5otamAU.js",revision:"5a377b4d3768c9e7f08c4609d9ea21ba"},{url:"assets/index.html-bQMDjuUx.js",revision:"62ead6271dbcfc4388afc04f98ff1169"},{url:"assets/index.html-CGFIMPu_.js",revision:"3e1f3829e8e6d39c9dee7ecc9aaf582d"},{url:"assets/index.html-ECzzD_v1.js",revision:"c4ad5ae9393398e7c817e5df19f9443f"},{url:"assets/index.html-EgC8qmWx.js",revision:"d8b94c132cd66a113018e0cdc2632a71"},{url:"assets/index.html-F9qCTVt2.js",revision:"f451e47053c62d6f79a4f11cd32b424d"},{url:"assets/index.html-faxkVj-z.js",revision:"7e6cc41cd67bb56d5138ab1ab2d0860d"},{url:"assets/index.html-foIlV2XG.js",revision:"409e7d0d56de865a034b8354477ecfaa"},{url:"assets/index.html-fXuMhVWD.js",revision:"2d5172b5a153d060f3d7335694257a97"},{url:"assets/index.html-Gg6BXPUG.js",revision:"5e86c51bd2967e56a9c3d1739e9d2372"},{url:"assets/index.html-gonyaX3r.js",revision:"45d54b9326ab2624cf9f4f7790c91747"},{url:"assets/index.html-h2eGVQyY.js",revision:"9997821370e6f2a404b9ad0461f392e0"},{url:"assets/index.html-hcjmf63y.js",revision:"7147df1b9a9d8bef5a0208434d693b12"},{url:"assets/index.html-hcQcGujB.js",revision:"cc1f347d073e5ddd4dedb005d8524a63"},{url:"assets/index.html-HN4LwEzR.js",revision:"69e88893d47fcf5ae3248b07c1391ac0"},{url:"assets/index.html-iHvqDZ5_.js",revision:"45d54b9326ab2624cf9f4f7790c91747"},{url:"assets/index.html-JK4uK95U.js",revision:"759f892923ae8ee4baaa7cd08d9693a3"},{url:"assets/index.html-K5k0T0fc.js",revision:"49225a44a60943f8165524af1d2b1bf2"},{url:"assets/index.html-knoYThHV.js",revision:"a194e44dac13145cf3ec2f888759098c"},{url:"assets/index.html-l39ArcLR.js",revision:"2d5172b5a153d060f3d7335694257a97"},{url:"assets/index.html-lMGEWDQI.js",revision:"45d54b9326ab2624cf9f4f7790c91747"},{url:"assets/index.html-LMKNC9xf.js",revision:"a39a9d4488688099959a797e6b720a16"},{url:"assets/index.html-M_g8FvWM.js",revision:"5d23394cf7312cc87e71cde51938bc9f"},{url:"assets/index.html-mtkSo39y.js",revision:"0f3f5357ef2895b7c6f056a63eddcb44"},{url:"assets/index.html-NIFmzNLp.js",revision:"cc6a86f6ddfb193f2fade362898f8c77"},{url:"assets/index.html-nvWhGQZ5.js",revision:"68ac000caf050d207532356300bf995e"},{url:"assets/index.html-osSQYztB.js",revision:"0c2483b5bdeb2343871cabe826e5d52b"},{url:"assets/index.html-p_r2StTa.js",revision:"1a649134c363a36dbd7693fd1ba0db3b"},{url:"assets/index.html-ppZ7Q0ru.js",revision:"9c75c9692d8c900a40036c861575c06f"},{url:"assets/index.html-r917pqMf.js",revision:"b657f4050ad700a5a6923026e7a6071b"},{url:"assets/index.html-vRa2LxHw.js",revision:"024658280445173c173de8b11d94df96"},{url:"assets/index.html-WZJVwJXx.js",revision:"57212375894a3405fa67f04aaa768913"},{url:"assets/index.html-X5P8gpic.js",revision:"45d54b9326ab2624cf9f4f7790c91747"},{url:"assets/index.html-xLwWF2Yw.js",revision:"8461ebbe8b233c4e51d7a46b300430b9"},{url:"assets/index.html-XpMQtWr1.js",revision:"67a81dffa26e9fd80b70db986382ed8d"},{url:"assets/index.html-yONKSGQ2.js",revision:"5250e38941acf30fc9767198d90dd55e"},{url:"assets/index.html-zJRaHbN_.js",revision:"45d54b9326ab2624cf9f4f7790c91747"},{url:"assets/join.html-_rxy4Oj5.js",revision:"a685f468b2ef1e337340d70d2af938ba"},{url:"assets/join.html-AysU3uVM.js",revision:"6e60187a66098ecf13a0075d3b72a2cb"},{url:"assets/join.html-BhjoxNPO.js",revision:"f74cef41c80d01545be51c581473d156"},{url:"assets/join.html-EXdJ_1ZX.js",revision:"89f82a8d85f55d74d955b0744b5e4af5"},{url:"assets/join.html-fB_BKGcl.js",revision:"e2dd8b519e92b7d4febbd3c1ef1c2620"},{url:"assets/join.html-i8Do3JzZ.js",revision:"68ed7be396d8adb3d31220c74050693c"},{url:"assets/join.html-iJX--O8X.js",revision:"b0bdb23899798304f287c047029bc884"},{url:"assets/join.html-iZLsNUJq.js",revision:"411c7368ecf8793560d9a3c59e2f81bb"},{url:"assets/join.html-lHmTopqy.js",revision:"3578d70d721c32ff9ae3512e330b6ac3"},{url:"assets/join.html-OApvutiJ.js",revision:"8018a5a09decd1523ae4d01880c9f168"},{url:"assets/join.html-rKI_v1he.js",revision:"d5b0794dceb6d5e5902b8a40fb006194"},{url:"assets/join.html-V__HTp2D.js",revision:"e632e9c2785b933ef7f5d2001becba38"},{url:"assets/multi-instance.html--pIWpo9a.js",revision:"cd227bc58796d328a8c95a43f2f613b6"},{url:"assets/multi-instance.html-c69jgnSI.js",revision:"4f78ddc340e45759d718db31b0b04995"},{url:"assets/multi-instance.html-EivDMxAA.js",revision:"2c94cfc2a31b262a300e9305243853fe"},{url:"assets/multi-instance.html-JYL0_EPS.js",revision:"d643d7ecc4dad7bc5235d8581dc735b4"},{url:"assets/multi-instance.html-Knqb5Rrv.js",revision:"45f96999930d1e19141acb79758dd070"},{url:"assets/multi-instance.html-pGd9s7IO.js",revision:"481425d7c4fd4adab0616f46439f270a"},{url:"assets/page.html-0n--zkH_.js",revision:"5eb859f8aee354e5bcd9d881decfff0f"},{url:"assets/page.html-aEAVtLk3.js",revision:"7641c77944757551fc09e62e34c5d36f"},{url:"assets/page.html-AYVfoL2A.js",revision:"eacda98f05a277325ec1793f141dc73f"},{url:"assets/page.html-b46cJiA2.js",revision:"5eb859f8aee354e5bcd9d881decfff0f"},{url:"assets/page.html-jAGwWtqb.js",revision:"0b8833ec71f67554a000247cefc6c3aa"},{url:"assets/page.html-mfgkQM1o.js",revision:"6fc8985ec9085b65f2b6bd484faa223d"},{url:"assets/photoswipe.esm-mC0Qcr12.js",revision:"3a72d9823ffa5943f03c5e884d0f66d8"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/resethwid.html-_p0mnnXa.js",revision:"19954119e5e6efcec5cbcf3d0965dafe"},{url:"assets/resethwid.html-1ChufXUd.js",revision:"8aca9527f60507375a38dccd9b4712e5"},{url:"assets/resethwid.html-HLAcSLaq.js",revision:"47e0a2ca8f4fb2239c8cb728bc3e4163"},{url:"assets/resethwid.html-M4aqYeYx.js",revision:"0e8e35cc15d8c2b45b93ee9b48522101"},{url:"assets/resethwid.html-nRNGkdpe.js",revision:"d65c49aa63aaa7c0a86535a00534a920"},{url:"assets/resethwid.html-QgyO0kZY.js",revision:"c244ba2e028965eb03bcba12ade66f6f"},{url:"assets/sign-in.html-1_qW4uXS.js",revision:"5e26c2eec2a30648734e3838fc88334d"},{url:"assets/sign-in.html-9YzSked4.js",revision:"007e6f15899a0d04fe866b2a0b1f717e"},{url:"assets/sign-in.html-e35-Rg64.js",revision:"26b6311fa4158978bb1418c97266df6d"},{url:"assets/sign-in.html-hQOdvOOT.js",revision:"12f0f61eac1ab8442a2ee17cfd2472d0"},{url:"assets/sign-in.html-ioTyDBoK.js",revision:"70def0cfb273358a6a0d0b12a6094524"},{url:"assets/sign-in.html-JgmKDJtX.js",revision:"18e029523eaed4606b59a2ef2384297f"},{url:"assets/sign-in.html-jL88g8n0.js",revision:"334d6411a49e320c96edfa65bc77a505"},{url:"assets/sign-in.html-MsLjb4W4.js",revision:"d11ddc7d18a98af213db915db4d1507b"},{url:"assets/sign-in.html-pMmMjaPW.js",revision:"cebb810d4a5b53d9b85cf36d6ff6c965"},{url:"assets/sign-in.html-QhuVWxkn.js",revision:"4e8ae8f8fff4baa815eb46673abc87fb"},{url:"assets/sign-in.html-UBnR0cJy.js",revision:"9d59285e04dd3333e79f307d96439adb"},{url:"assets/sign-in.html-VvGSj12G.js",revision:"c56b4306d90c9bc0f0c7fc6025e07ef1"},{url:"assets/sponsor-exclusive.html-0X2SZRFU.js",revision:"e1d03c9f2d71a8ac4ca05bffb81324b0"},{url:"assets/sponsor-exclusive.html-9KG_I8EA.js",revision:"78aef66f2701ad73b05c82c6cafd8ab7"},{url:"assets/sponsor-exclusive.html-C3RHfgPJ.js",revision:"78aef66f2701ad73b05c82c6cafd8ab7"},{url:"assets/sponsor-exclusive.html-GGsGrhfU.js",revision:"5893e2246039b9bc612d1938d48e5089"},{url:"assets/sponsor-exclusive.html-I1Q3RMgS.js",revision:"f999e96e30f16efec9b2732d4bd4afb1"},{url:"assets/sponsor-exclusive.html-VrQq1Kek.js",revision:"74a9834c460f81d75d2b2e4eea75cebe"},{url:"assets/sponsor.html--icrUsCn.js",revision:"f76b22be4d3c47f4b28cd2f8a2c086b9"},{url:"assets/sponsor.html-ARLD_LhM.js",revision:"e2369902abf2380f66e41e73f9957f83"},{url:"assets/sponsor.html-H7Xv-zOS.js",revision:"88502682ef9b0c48d2e6f5ae3d4e23e5"},{url:"assets/sponsor.html-mi00moNw.js",revision:"1aa1bef713be3c324b291789bb3e4d2e"},{url:"assets/sponsor.html-MwbZHK90.js",revision:"c2bb5381ee85181c3747b84123f47f35"},{url:"assets/sponsor.html-My1wFfdq.js",revision:"a43f844a71c939862811453ed7a7f16a"},{url:"assets/sponsor.html-Ro6eLdVe.js",revision:"7e34334722abd96b25fdfc73121e0411"},{url:"assets/sponsor.html-v_F1Jwir.js",revision:"9752d3b6ca500a7954310799da35cb1b"},{url:"assets/sponsor.html-xiyXwN4h.js",revision:"c9899418a38e010baa3481eeb8e03999"},{url:"assets/sponsor.html-zRGz7_FO.js",revision:"a95b6269cd5eec1b905ea7852d7eeec4"},{url:"assets/style-jZJT948h.css",revision:"b47ab0ea8950cdac3be891db2e417c13"},{url:"assets/style-w40geAFS.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"assets/verify.html-__r5PRzU.js",revision:"91f3545850d784dedf1f0003a6209eb5"},{url:"assets/verify.html-8ZYz19rI.js",revision:"a43a6a65865332b62202c44619d2d56e"},{url:"assets/verify.html-bssVMSKW.js",revision:"65d4fd1168dae9992606688326dac3fc"},{url:"assets/verify.html-GrvJE2hH.js",revision:"1e6f68437c0db8ec4466dc2a8ad871e4"},{url:"assets/verify.html-gwO0RbNS.js",revision:"68c4d0b5c5f208e0406cacee01aa6552"},{url:"assets/verify.html-j3n_uQVl.js",revision:"ef2aa9f444a55550a1ecbae5575ae876"},{url:"assets/verify.html-Sn5ueOCl.js",revision:"9ebbe9f672b1db2c94749fa213b2df3f"},{url:"assets/verify.html-XDZZqF8t.js",revision:"bd2541b3ef91fa3f183257a04e1b9ad4"},{url:"assets/verify.html-YMyhMTay.js",revision:"2e4bc2b767ed0ff55a1bc3a1cd171b89"},{url:"assets/verify.html-Yt7sA-RH.js",revision:"37598eabc74f506c457b56f2d432727e"},{url:"assets/verify.html-Z23moOKD.js",revision:"c8dfeb541277512fdbc3ed8416ea4914"},{url:"assets/verify.html-ZjgQxMMn.js",revision:"394f6c6717b18c65a6d1224a2aaec461"},{url:"logo.svg",revision:"910db88668e6e1cf75a5927b4ce217aa"},{url:"logo2.svg",revision:"12955c1ee6894e906370acafe76a8971"},{url:"404.html",revision:"8f3060cb8f94b97c1091c50afb32f9ad"},{url:"en/guide/index.html",revision:"af416dc45042efd24005fcdb59206f08"},{url:"en/guide/multi-instance.html",revision:"d618f88d6304cca7e116f2da2834ee85"},{url:"en/guide/resethwid.html",revision:"cbdb1d4bcf6772da1b25269d3529ebdc"},{url:"en/index.html",revision:"f0fc553a1e9f711f31ce0d6dfb5c173f"},{url:"en/start/download.html",revision:"b5b54f9b08bd0c3227a5dff090c4717a"},{url:"en/start/index.html",revision:"f3d266b6f617fb75103582ca6d566817"},{url:"en/start/join.html",revision:"6223f53cdaaae1d2e7f66d90b1ea317e"},{url:"en/start/sign-in.html",revision:"84e920dedc1e397e474e84d42fcb64c7"},{url:"en/start/sponsor-exclusive.html",revision:"650d95c37d3698294b0d549a6cce9837"},{url:"en/start/sponsor.html",revision:"aeae52cc7d84e06061227dd6552d3aca"},{url:"en/start/verify.html",revision:"60829321401dfad632f1a47236eb92f7"},{url:"es/guide/index.html",revision:"b86d70bac207893a9009e8552327b08a"},{url:"es/guide/multi-instance.html",revision:"e44f050b967e7a5bca7725049b373855"},{url:"es/guide/resethwid.html",revision:"23721778410284c25b709173601e7f41"},{url:"es/index.html",revision:"e16c1c0a48216d11cafbf6ba9302d518"},{url:"es/start/download.html",revision:"a898037670abc2b3c10464af4a57d654"},{url:"es/start/index.html",revision:"29f69fbaf43b7e9f0fa39574cb048453"},{url:"es/start/join.html",revision:"7d7dfa0632cb1a229df6bcdf283d0afc"},{url:"es/start/sign-in.html",revision:"7a8b74a75ba4641084924b5dc7f595c9"},{url:"es/start/sponsor-exclusive.html",revision:"f5b9f070f25d73a7304c7badfc661507"},{url:"es/start/sponsor.html",revision:"36e4833a3c857b549e2061129d487831"},{url:"es/start/verify.html",revision:"fdd5cbcfa33fbd6663a6824ce378f646"},{url:"id/guide/index.html",revision:"4cdbc6e0d3257e71f33c8c6e8e89e99d"},{url:"id/guide/multi-instance.html",revision:"853414b3f4acee4e8fb80c4a1dcf6653"},{url:"id/guide/resethwid.html",revision:"b2e5da432d56628cd37a6820bb14c65b"},{url:"id/index.html",revision:"fbfcebf64eeafef755c2dee7ac0a11bb"},{url:"id/start/download.html",revision:"e4427a3f5305f4719227ae9638aa8643"},{url:"id/start/index.html",revision:"89ef2ce759d8a84cc62c1bb912dab134"},{url:"id/start/join.html",revision:"c77f800cce06dbdfece04c8347477a2d"},{url:"id/start/sign-in.html",revision:"114b849a2ba245549449bf73514f1d4f"},{url:"id/start/sponsor-exclusive.html",revision:"15c4b58a958fd9a6587d8106843a2a77"},{url:"id/start/sponsor.html",revision:"8af46d4d6380cab26a07ed51b2136012"},{url:"id/start/verify.html",revision:"64392dbb7a507bf8a3ed4e88c36543b4"},{url:"index.html",revision:"398bb33e3343f00d857a9003fb5ab75d"},{url:"ru/guide/index.html",revision:"a5b3cc5df54b317c422f3912f9c99a18"},{url:"ru/guide/info/index.html",revision:"25f6f67f3242fdae46490fb7df6dc730"},{url:"ru/guide/info/page.html",revision:"17a136eebbbfdd9f41ee69bc9769d97c"},{url:"ru/guide/page.html",revision:"d2869c9275dc547ea423ed48abe320e0"},{url:"ru/index.html",revision:"fbdb1229c8ef05d8af4b173af66c41e9"},{url:"ru/start/download.html",revision:"85571d30dd56e6335522bfa9ee11f280"},{url:"ru/start/index.html",revision:"1d2e31eecfe3a042ee658fd74905925f"},{url:"ru/start/join.html",revision:"68188d2006584da976f742ce154e93d9"},{url:"ru/start/sign-in.html",revision:"1c45ac7e04c424cf0a68a59a4b7f51fd"},{url:"ru/start/sponsor.html",revision:"2a5731008a20dee6efeee04984f8cf02"},{url:"ru/start/verify.html",revision:"739e9134f289ed4ade66d7d8eb0e0113"},{url:"vi/guide/index.html",revision:"9af003de372bbe4e787c878b52c69127"},{url:"vi/guide/page.html",revision:"c254877937af6caea907961048fca931"},{url:"vi/index.html",revision:"ec884552bde404e86d948e082b31e46c"},{url:"vi/start/download.html",revision:"fe08e931cd7955ef56ed509837f9b4ca"},{url:"vi/start/index.html",revision:"5f88f8757c1bba3d5acab6dcb82d57d1"},{url:"vi/start/join.html",revision:"6f784c3ffa0ef3bf0ffac84717bc9706"},{url:"vi/start/sign-in.html",revision:"0194da97daceb66c59dee6a80065864f"},{url:"vi/start/sponsor.html",revision:"42556e8904d9e3154d4ba842cfa1ac1f"},{url:"vi/start/verify.html",revision:"e0c1f3980f430868f0d4aea3a01e58c7"},{url:"zh/guide/config-change.html",revision:"9bd017d9ced7501afae092341f2ae087"},{url:"zh/guide/custom-tp-setting.html",revision:"5f05ea8850aeb72189a9320645c18e24"},{url:"zh/guide/esp-setting.html",revision:"3308b3d7821293fd92d2d276a41647e2"},{url:"zh/guide/index.html",revision:"85acc1f5aeb3ec478e00ea349be5f371"},{url:"zh/index.html",revision:"611854256e76b9c70eb5d16cc93daef7"},{url:"zh/start/donate.html",revision:"3d3a5f8d42802f97a57722472bbb03e4"},{url:"zh/start/download.html",revision:"b6788f0b5751439967fcf13a4416cead"},{url:"zh/start/index.html",revision:"41b5071204912d34d2fd7e5d8680b637"},{url:"zh/start/join.html",revision:"5bc9b78398926ab3a6132709b8bf4403"},{url:"zh/start/sign-in.html",revision:"ec57688c353b3f63ade3319d8fd92d70"},{url:"zh/start/verify.html",revision:"532dba6623e4deeeb7e04b7729729ca2"},{url:"assets/config-change-1-9dlGHBCV.png",revision:"232f2777bcf08053f58f87ecbff3073f"},{url:"assets/config-change-2-b5Q2csj0.png",revision:"02d04e047970d18302e88fa8391e4c76"},{url:"assets/custom-tp-1-_dJRa9pI.png",revision:"e613699150f47b76e8d0992f2d7793ea"},{url:"assets/custom-tp-2-3H78Bwve.png",revision:"14085266899f605c2a7d7a0fc6e3de2d"},{url:"assets/esp-change-cNeWe6NH.png",revision:"4b5a02ddb17f7681bf9dcbf130949e5f"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/image-1-FV6oGkZb.png",revision:"84c4107dc9f19a62a5b812c69b4ce6ac"},{url:"assets/image-2-KpoO4MGE.png",revision:"957882169bf28c8a379b0ede724ca749"},{url:"assets/image-Ib5u8se7.png",revision:"35e50a5a0652f82dd1eeed791ba9fa69"},{url:"assets/micah-bot-skypKLlp.png",revision:"86581a7b06921d77c53fb8b0737cc16b"},{url:"assets/micah-checkin-CsNz_PRW.png",revision:"d2a11b7112618b5861f1161890e288c0"},{url:"assets/verify-6QHy0tB4.png",revision:"88e9863ea6470e4f26733cbbf7260584"},{url:"korepi.png",revision:"36977c6af17471338477971462b79073"},{url:"logo.png",revision:"36977c6af17471338477971462b79073"},{url:"logo2.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map