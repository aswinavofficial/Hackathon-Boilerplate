var MongoClient = require('mongodb').MongoClient;
const config = require('../config');


var dbCon;


let connect = () => {

    return new Promise((resolve, reject) => {

        MongoClient.connect(config.mongoUrl, function (err, dbInstance) {
            if (err) {
                return reject(new connectionError([err.name + " : " + err.message], {
                    message: `Connection to MongoDB at ${url}`
                }
                ))
            } else {
                dbCon = dbInstance;
                resolve(`Mongo connected at ${url}`);
            }
        })

    });
};


let insert = (data,targetCollection) => {
    return new Promise((resolve, reject) => {
        let collection = dbCon.collection(targetCollection);
        collection.insert(data, (err, result) => {
            if (err) return reject({ message: "DB Insert Failed" });
            return resolve({ message: "Data Inserted" });
        })
    })
};


let update = (query,newValue,targetCollection) => {
    return new Promise((resolve, reject) => {
        let collection = dbCon.collection(targetCollection);
        collection.updateOne(query,newValue, (err, result) => {
            if (err) return reject({ message: "DB Updated Failed" });
            return resolve({ message: "Data Updated" });
        })
    })
};

let get = (query, targetCollection) => {
    return new Promise((resolve, reject) => {
        let collection = dbCon.collection(targetCollection);
        collection.find(query).toArray((err, result) => {
            if (err) return reject({ message: "DB query Failed" });
            return resolve(result);
        })
    })
}



module.exports = {
    connect,
    insert,
    get,
    update
}