const Tour = require('../controllers/tour');

module.exports = function(app) {
    app.route('/tours').get(async (req, res, next) => {
        try {
            return res.json(await Tour.getAllTours());
        } catch (err) {
            return next(err);
        }
    });
    
    app.route('/tour/matches').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await Tour.getMatchesByTourName(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    /*
     * For testing purpose.
     */
    app.route('/tour/insert').get(async (req, res, next) => {
        try {
            return res.json(await Tour.insertTours());
        } catch (err) {
            return next(err);
        }
    });
}