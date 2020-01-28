const config = {
	"gatsby": {
		"pathPrefix": "/cs-gy-6613",
		"siteUrl": "https://github.com/patelis/cs-gy-6613/tree/master/content",
		"gaTrackingId": null
	},
	"header": {
		"logo": "https://engineering.nyu.edu/sites/default/files/2019-01/tandon_stacked_white.png",
		"logoLink": "https://www.nyu.edu",
		"title": "CS-GY-6613",
		"githubUrl": "https://github.com/pantelis",
		"slackUrl": "https://join.slack.com/t/csgy6613sprin-vwk3759/shared_invite/enQtODg3NDA2Nzc3NDg4LTBkYzQ2M2ViNDAxOTUxNDA1OWY5ODA4YmM5M2RlMDcyMDQzMWVlZDc5MWVkOTg1NDE1YmMyMDc4ZmQ2MTAyMmE",
		"helpUrl": "",
		"tweetText": "@monogioudis",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/syllabus/index",
			"/lectures/ai-intro",
			"/lectures/ml-math",
			"/lectures/ml-frameworks",
			// "/lectures/regression",
			// "/lectures/classification",
			// "/lectures/dnn",
			// "/lectures/cnn",
			// "/lectures/search",
			// "/lectures/pgm",
			// "/lectures/mdp",
			"/projects/"
		],
    	// "collapsedNav": [
		// 	"/lectures/ai-intro",
		// 	"/lectures/ml-math",
		// 	"/lectures/ml-frameworks",
		// 	"/lectures/regression",
		// 	"/lectures/classification",
		// 	"/lectures/dnn",
		// 	"/lectures/cnn",
		// 	"/lectures/search",
		// 	"/lectures/pgm",
		// 	"/lectures/mdp",
		// 	"/projects/",
    	// ],
		"links": [
			{ "text": "Colab", "link": "https://colab.research.google.com"},
			{ "text": "Kaggle", "link": "https://www.kaggle.com"}
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "CS-GY-6613",
		"description": "NYU AI Course",
		"ogImage": null,
		"docsLocation": "https://github.com/patelis/cs-gy-6613/tree/master/content",
		"favicon": "",
		"slackUrl": "https://join.slack.com/t/csgy6613sprin-vwk3759/shared_invite/enQtODg3NDA2Nzc3NDg4LTBkYzQ2M2ViNDAxOTUxNDA1OWY5ODA4YmM5M2RlMDcyMDQzMWVlZDc5MWVkOTg1NDE1YmMyMDc4ZmQ2MTAyMmE"

	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "CS-GY-6613",
			"short_name": "AI",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
