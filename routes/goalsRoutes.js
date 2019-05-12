const treningGoals = require('../models/db');

const getAllGoals = (req, res, next) => {
	res.send(treningGoals);
};

module.exports = (app) => {
	app.get('/api/goals', getAllGoals);
};
