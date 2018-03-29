//Taking in all our JSON and rendering depending on section of the site
let featuresJson = require('../json/features.json');
let headingsJson = require('../json/headings.json');
let footerJson = require('../json/footer.json');
let ourworkJson = require('../json/ourwork.json');
let siteInformationJson = require('../json/siteInformation.json');


exports.home = function(req, res) {
	//making sure Json is avalible for rendering
	let features = featuresJson.features;
	let headings = headingsJson.headings;
	let footer = footerJson.footer;
	let ourwork = ourworkJson.ourwork;
	let siteInformation = siteInformationJson.siteInformation;

	res.render('home', {
		title: "SenseSec",
		features: features,
		headings: headings,
		footer: footer,
		ourwork:ourwork,
		siteInformation: siteInformation
	});
};

exports.teknik = function(req, res){
	let footer = footerJson.footer;

	res.render('teknik', {
		title: "SenseSec| Teknik",
		footer: footer
	});

};

exports.fordelar = function(req, res){
	let footer = footerJson.footer;

	res.render('fordelar', {
		title: "SenseSec| Fördelar",
		footer: footer
	});
};
