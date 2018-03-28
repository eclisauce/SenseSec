let featuresJson = require('../json/features.json');
let headingsJson = require('../json/headings.json');


exports.home = function(req, res) {
	let features = featuresJson.features;
	let headings = headingsJson.headings;

	res.render('home', {
		title: "SenseSec",
		features: features,
		headings: headings
	});
};
