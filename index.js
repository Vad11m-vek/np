
const jsonReqNP = require("./apiNP/fetch.js");
const admin = require("firebase-admin");
const serviceAccount = require("./JXqcs2syEPMNdAfb6Q87sZ8v4A0r/HFZl059XX15bTSw6D68Ct4i6icXs.json");
//admin.initializeApp({
  //              credential: admin.credential.cert(serviceAccount),
    //            databaseURL: "https://auditnp-4dee7.firebaseio.com"
//});
const db = admin.database();
const ref =db.ref("auditEN/allData");
//function allTime (){
//	const jsonReqNP = require("./apiNP/fetch.js");
//}
ref.once("value", function(snapshot) {
 console.log( snapshot.val());
});
//setInterval( ()=>{
//const jsonReqNP = require("./apiNP/fetch.js");

//} , 43200000 );

setInterval( ()=>{
let currentDate  = require('./apiNP/t.js');
console.log(currentDate.time)
} , 100000 );
