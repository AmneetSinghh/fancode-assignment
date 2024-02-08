const News = require('../controllers/news');

module.exports = function(app) {

    app.route('/news/create').post(async (req, res, next) => {
        try {
            console.log(req.body)
            return res.json(await News.createNews(req.body));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match/:matchId').get(async (req, res, next) => {
        try {
            const matchId = req.params.matchId;
            const result = await News.getNewsByMatchId(matchId);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour/:tourId').get(async (req, res, next) => {
        try {
            const tourId = req.params.tourId;
            const result = await News.getNewsByTourId(tourId);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport/:sportId').get(async (req, res, next) => {
        try {
            const sportId = req.params.sportId;
            const result = await News.getNewsBySportId(sportId);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

}