const { onRequest} = require("firebase-functions/v2/https");
const functions = require("firebase-functions");

const app = require ("Api/Serve");
exports.api = functions.https.onRequest(app)