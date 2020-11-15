const admin = require("firebase-admin");
const dateName = require('./t.js')
const serviceAccount = require("../JXqcs2syEPMNdAfb6Q87sZ8v4A0r/HFZl059XX15bTSw6D68Ct4i6icXs.json");
	admin.initializeApp({
        	credential: admin.credential.cert(serviceAccount),
        	databaseURL: "https://auditnp-4dee7.firebaseio.com"
});
var db = admin.database();
var ref =db.ref("auditEN/allData");
var usersRef = ref.child("users"+1234);
usersRef.set({
  author: "gracehop",
  title: "Announcing COBOL, a New Programming Language"
});
//ref.set("I'm writing data", function(error) {
//  if (error) {
//    console.log("Data could not be saved." + error);
//  } else {
//    console.log("Data saved successfully.");
//  }
//});
ref.on("value", function(snapshot) {
  console.log(snapshot.val());
});

