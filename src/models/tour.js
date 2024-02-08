const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getSportByTourId = async id => {
    const statement = 'select sportId from tours where id = ?';
    const parameters = [ id ];
    return await mysql.query(statement, parameters);
}

/*
* index on tourName  ( fast )
* for offset using match's primary key : indexed ( fast )
*/

const getMatchesByTourName = async params => {
    const statement = 'select m.*, t.name as tourName from matches m left join tours t on m.tourId = t.id where t.name = ? and m.id > ? limit 2';
    const parameters = [ params.name,params.offset ];
    return await mysql.query(statement, parameters);
}

// for testing purpose.
const insertTours = async () => {
    for (let i = 1; i <= 1000000; i++) {
        const statement = 'INSERT IGNORE INTO mydb.tours (name, sportId, startTime, endTime) VALUES (?, 1, ?, ?)';
        const parameters = [
            `Tour ${i}`,
            '2023-01-01 00:00:00',
            '2023-12-31 23:59:59'
        ];
        await mysql.query(statement, parameters);
    }
};

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName,
    insertTours : insertTours,
    getSportByTourId: getSportByTourId
}