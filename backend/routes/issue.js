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
	app.get('/issues/:id', (req, res) => {
		Issue.findById(req.params.id, (err, issue) => {
			if (err) {
				console.log(err);
			} else {
				res.json(issue);
			}
		});
	});

	//add new issue
	app.post('/issues/add', (req, res) => {
		let add_issue = new Issue(req.body);
		add_issue.save((err) => {
			if (err) {
				res.status(400).json({ 'issue': 'Unable to Add!' });
			} else {
				res.status(200).json({ 'issue': 'Added Successfully!' });
			}
		});
	});

	// update an issue:
	app.post('/issues/update/:id', (req, res) => {
		let existing_issue = Issue.findById(req.params.id, (err, issue) => {
			if (err) {
				res.status(400).json({ 'issue': 'can\'t find the issue' });
			} else {
				issue.title = ( (req.body.title != "") ? req.body.title : issue.title );
				issue.responsible = ( (req.body.responsible != "") ? req.body.responsible : issue.responsible );
				issue.description = ( (req.body.description != "") ? req.body.description : issue.description );
				issue.severity = ( (req.body.severity != "") ? req.body.severity : issue.severity );
				issue.status = ( (req.body.status != "") ? req.body.status : issue.status );

				issue.save((err) => {
					if (err) {
						res.status(400).json({ 'issue': 'Unable to update!' });
					} else {
						res.status(200).json({ 'issue': 'Updates successfully!' });
					}
				});
			}
		});
	});

	// delete an issue: 
	app.get('/issues/delete/:id', (req, res) => {
		Issue.findByIdAndRemove({ _id: req.params.id }, (err, issue) => {
			if (err) {
				res.json({'issue': 'unable to remove!'});
			} else {
				res.json({'issue': 'removed successfully!'});
			}
		});
	});
}