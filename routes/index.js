//Taking in all our JSON and rendering depending on section of the site
let featuresJson = require('../json/features.json');
let headingsJson = require('../json/headings.json');
let footerJson = require('../json/footer.json');
let ourworkJson = require('../json/ourwork.json');
let ourwork2Json = require('../json/ourwork2.json');
let siteInformationJson = require('../json/siteInformation.json');
let teknikJson = require('../json/teknikInformation.json');
let fordelarJson = require('../json/fordelar.json');


exports.home = function(req, res) {
	//making sure Json is avalible for rendering
	let features = featuresJson.features;
	let headings = headingsJson.headings;
	let footer = footerJson.footer;
	let ourwork = ourworkJson.ourwork;
	let ourwork2 = ourwork2Json.ourwork2;
	let siteInformation = siteInformationJson.siteInformation;

	res.render('home', {
		title: "SenseSec",
		features: features,
		headings: headings,
		footer: footer,
		ourwork: ourwork,
		ourwork2: ourwork2,
		siteInformation: siteInformation
	});
};

exports.teknik = function(req, res){
	let footer = footerJson.footer;
	let headings = headingsJson.headings;
	let technique = teknikJson.technique;

	res.render('teknik', {
		title: "SenseSec | Teknik",
		headings: headings,
		technique: technique,
		footer: footer
	});

};

exports.fordelar = function(req, res){
	let footer = footerJson.footer;
	let headings = headingsJson.headings;
	let fordelar = fordelarJson.fordelar;

	res.render('fordelar', {
		title: "SenseSec | Fördelar",
		headings: headings,
		fordelar: fordelar,
		footer: footer
	});
};
