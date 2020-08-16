const admin = require("firebase-admin");

const serviceAccount = require("./classroots-hack20-firebase-adminsdk-df788-c34517a810.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://classroots-hack20.firebaseio.com"
});

const db = admin.firestore();

module.exports = db;