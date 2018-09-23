module.exports = function (app, Issue) {
	
	// get all issues:
	app.get('/issues', (req, res) => {
		Issue.find((err, issues) => {
			if (err) {
				console.log(err);
			} else {
				res.json(issues);
			}
		});
	});

	//get single issue:
	app.get('/issues:id', (req, res) => {
		Issue.findById(req.params.id, (err, issue) => {
			if (err) {
				console.log(err);
			} else {
				res.json(issue);
			}
		});
	});
}