const Tour = require('../models/tour');

const getAllTours = async () => {
    return await Tour.getAllTours();
}

const getMatchesByTourName = async params => {
    const { name, offset } = params;
    if (!name) {
        throw new Error('Missing required parameter: name');
    }
    if (!offset) {
        console.log('Missing required parameter: offset, it will be considered as zero');
        params.offset = 0
    }

    return await Tour.getMatchesByTourName(params);
}

const getSportByTourId = async id => {
    return await Tour.getSportByTourId(id);
}

const insertTours = async () => {
    return await Tour.insertTours();
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName,
    insertTours: insertTours,
    getSportByTourId: getSportByTourId
}