//Taking in all our JSON
let featuresJson = require('../json/features.json');
let headingsJson = require('../json/headings.json');
let footerJson = require('../json/footer.json');


exports.home = function(req, res) {
	//making sure Json is avalible for rendering
	let features = featuresJson.features;
	let headings = headingsJson.headings;
	let footer = footerJson.footer;

	res.render('home', {
		title: "SenseSec",
		features: features,
		headings: headings,
		footer: footer
	});
};
