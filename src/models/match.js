const mysql = require('../lib/mysql');

const getAllMatches = async () => {
    const statement = 'select * from matches;';
    const parameters = [];
    let data = await mysql.query(statement, parameters);
    return data
}

const getTourAndSportByMatchId = async id => {
    const statement = 'select m.tourId, t.sportId from matches m left join tours t on m.tourId = t.id where m.id = ?';
    const parameters = [ id ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllMatches: getAllMatches,
    getTourAndSportByMatchId : getTourAndSportByMatchId
}