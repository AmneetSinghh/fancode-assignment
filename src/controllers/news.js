const News = require('../models/news');
const Match = require('../controllers/match');
const Tour = require('../controllers/tour');
const { NEWSTYPE } = require('../constant/NewsConstant');


const createNews = async params => {
    validateNewsParams(params)
    const { title, description, id, type } = params;
    const data = type === NEWSTYPE.MATCH
    ? await Match.getTourAndSportByMatchId(id)
    : await Tour.getSportByTourId(id);

    if (data.length === 0) {
        return type === NEWSTYPE.MATCH ? 'Match not present' : 'Tour not present';
    }
    params = {
        title,
        description,
        matchId: type === NEWSTYPE.MATCH ? id : null,
        tourId: type === NEWSTYPE.MATCH ? data[0].tourId : id,
        sportId: data[0].sportId,
    };
    await News.createNews(params);
    return 'News created successfully';
}

function validateNewsParams(params) {
    const requiredParams = ['title', 'description', 'id', 'type'];
    requiredParams.forEach(param => {
        if (!params[param]) {
            throw new Error(`Missing required parameter: ${param}`);
        }
    });
    if (![NEWSTYPE.MATCH, NEWSTYPE.TOUR].includes(params.type)) {
        throw new Error('Invalid type');
    }
}

const getNewsByMatchId = async id => {
    return await News.getNewsByMatchId(id)
}

const getNewsByTourId = async id => {
    return await News.getNewsByTourId(id)
}

const getNewsBySportId = async id => {
    return await News.getNewsBySportId(id)
}

module.exports = {
    createNews: createNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId
}