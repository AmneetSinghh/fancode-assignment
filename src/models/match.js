const mysql = require('../lib/mysql');

const getAllMatches = async () => {
    const statement = 'select * from matches;';
    const parameters = [];
    let data = await mysql.query(statement, parameters);
    return data
}

module.exports = {
    getAllMatches: getAllMatches
}