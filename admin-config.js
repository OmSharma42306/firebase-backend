var admin = require("firebase-admin");

var serviceAccount = require("./firebase-admin-key/streamx-94412-firebase-adminsdk-m4tko-630099bf99.json");
console.log(serviceAccount);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin