const mysql = require('../lib/mysql');

const createNews = async params => {
    const statement = 'INSERT INTO mydb.news (title, description, matchId, tourId, sportId) VALUES (?, ?, ?, ?, ?)';
    const parameters = [params.title, params.description, params.matchId, params.tourId, params.sportId];
    await mysql.query(statement, parameters);
}

const getNewsByMatchId = async id => {
    const statement = 'select n.title,n.description,n.tourId,n.sportId from news n where n.matchId= ? ';
    const parameters = [ id];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async id => {
    const statement = 'select n.title,n.description,n.tourId,n.sportId from news n where n.tourId= ? ';
    const parameters = [ id];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async id => {
    const statement = 'select n.title,n.description,n.tourId,n.sportId from news n where n.sportId= ? ';
    const parameters = [ id];
    return await mysql.query(statement, parameters);
}

module.exports = {
    createNews: createNews,
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId : getNewsByTourId,
    getNewsBySportId: getNewsBySportId
}