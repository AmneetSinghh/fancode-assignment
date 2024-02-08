const Match = require('../models/match');

const getAllMatches = async () => {
    return await Match.getAllMatches();
}

const getTourAndSportByMatchId = async id => {
    return await Match.getTourAndSportByMatchId(id)
}

module.exports = {
    getAllMatches: getAllMatches,
    getTourAndSportByMatchId: getTourAndSportByMatchId
}