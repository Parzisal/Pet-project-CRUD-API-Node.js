const MONGO_USERNAME = 'Touka';
const MONGO_PASSWORD = 'p0eTpX0d54PbFJsv';
const MONGO_DB = 'MDB';

module.exports = {
  mongoURI: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.qkcya.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`
};
