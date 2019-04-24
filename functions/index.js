const admin = require("firebase-admin");
const functions = require("firebase-functions");
const createUser = require("./create_user");
const verifyPassword = require("./verify_password");
const serviceAccount = require("./service_account.json");
const requestPassword = require("./request_password");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://otp-auth-flow.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestPassword = functions.https.onRequest(requestPassword);
exports.verifyPassword = functions.https.onRequest(verifyPassword);
