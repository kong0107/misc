/**
 * Backup issues and their comments of one of your own GitHub repository.
 *
 * No pagination. Need more work to crawl those having more than 100 issues or comments.
 */
var fs = require("fs");
var prompt = require("prompt");
var GitHubApi  = require("github");

var github = new GitHubApi({
    version: "3.0.0",
    debug: true, // optional
    protocol: "https",
    host: "api.github.com",
    timeout: 5000,
    headers: {"User-Agent": "kong0107"}
});

prompt.start();

var schema = {
	properties: {
		username: { required: true },
		password: { hidden: true },
		repository: { required: true }
	}
};

prompt.get(schema, function(err, result) {
	if(err !== null) {
		console.log(err);
		return;
	}

	github.authenticate({
		type: "basic",
		username: result.username,
		password: result.password
	});

	var params = {
		user: result.username,
		repo: result.repository,
		per_page: 100
	};

	github.issues.repoIssues(params, function(err, issues) {
		for(var i = 0; i < issues.length; ++i) {
			delete issues[i].url;
			delete issues[i].labels_url;
			delete issues[i].comments_url;
			delete issues[i].events_url;
			delete issues[i].html_url;
			delete issues[i].user;
			if(!issues[i].labels.length) delete issues[i].labels;
			if(issues[i].milestone) {
				var ms = issues[i].milestone;
				delete ms.url;
				delete ms.html_url;
				delete ms.labels_url;
				delete ms.creator;
				for(var j in ms)
					if(ms[j] == null) delete ms[j];
				issues[i].milestone = ms;
			}
			for(var j in issues[i])
				if(issues[i][j] == null) delete issues[i][j];

		}
		fs.writeFileSync(repo + ".issues.json", JSON.stringify(issues), "utf8");
	});

	github.issues.repoComments(params, function(err, comments) {
		for(var i = 0; i < comments.length; ++i) {
			delete comments[i].user;
			delete comments[i].url;
			delete comments[i].html_url;
		}
		fs.writeFileSync(repo + ".comments.json", JSON.stringify(comments), "utf8");
	});
});
