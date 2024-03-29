// ==UserScript==
// @name          Google Plus - Wide screen - GExtend
// @namespace     http://userstyles.org
// @description	  Removes white space from Google plus. Stretches content feed to optimally fill space. 
// @author        3D_VIPER
// @homepage      http://userstyles.org/styles/78506
// @include       http://plus.google.com/*
// @include       https://plus.google.com/*
// @include       http://*.plus.google.com/*
// @include       https://*.plus.google.com/*
// @run-at        document-start
// ==/UserScript==
(function() {
var css = ".BZa{display:table;}.Cac{display:table-row;}div.Cac div.AZa{display:table-cell;width:100%!important;}div.Nj{width:100%!important;margin-right:-320px!important;}div.Fq.l8{width:auto!important;margin-right:320px;}.Uf > div.Fq.l8{margin-right:0;}.aw{margin-right:310px!important;}.Nr{min-height:130px!important;}.MFb{float:left!important;margin-left:10px!important;}.Ag{max-width:none!important;background-color:#2E2E2E!important;}.Rqa{text-align:left!important;}div.m-la-tl > div.m-la-tl{width:auto!important;margin-right:300px!important;}.l-Gy{margin-right:300px;}div.Vka{left:auto!important;right:30px!important;}div.SEb.job{width:auto!important;float:none;margin-right:40px;}.Fg{max-width:none!important;background-color:#585858!important;}div.Q8a{width:auto !important!important;margin-right:320px!important;}div.Ylb{float:left!important;}div.BEb{margin-right:10px!important;}div.O0b{float:none!important;margin-left:10px;}.GCb{padding-right:300px!important;}div.zda{width:auto!important;margin-right:20px;}.Spa{margin-right:100px!important;z-index:1000!important;}.aGb{margin-left:10px!important;float:none!important;}div.Knb{width:auto!important;margin-right:330px!important;}.r4CFE{margin-right:50px!important;}.Cgb{width:100%!important;margin-right:-300px!important;}.Iub{margin-right:550px!important;}.Yia{max-width:none!important;}div.a6.zR img.CI5GWc,.wFb,div.Sb,.vcard,div.Vra,.Eha,.DLb,div.he > div > div.Nj > div.l8,div.he > div > div.Nj > div.Q8a,div.y0b,.Fga,.ez,div.Nj > div[style=\"width: 570px\"]{width:auto!important;}div.Bac div.Fq.l8,.Lq.h8.H2 > .aw,div.Dca,div.Hhc > div.Fq.l8{margin-right:0!important;}.Q9,.n-M-We > .n-M-We,div.Hnb,div.Inb,div.Nq.ev.a-f-e.OT > div{width:100%!important;}.dNa,.Foa{width:auto!important;margin-right:320px!important;}.i5,.Nub{margin-right:300px!important;}div.H0 div.m-la-tl div.m-la-tl,div.bga div.m-la-tl{width:auto!important;margin-right:0!important;}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();
