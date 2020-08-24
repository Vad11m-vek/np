const admin = require("firebase-admin");
const fetch = require('node-fetch');
const serviceAccount = require("./JXqcs2syEPMNdAfb6Q87sZ8v4A0r/HFZl059XX15bTSw6D68Ct4i6icXs.json"); 
	admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://auditnp-4dee7.firebaseio.com"
});
var db = admin.database();
const jsonReqNP = require("./apiNP/fetch.js");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});

//console.log(jsonReqNP.variableName);
