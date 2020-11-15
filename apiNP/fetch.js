const fetch = require('node-fetch');
let currentDate  = require('./t.js');
const apiKey = require('../JXqcs2syEPMNdAfb6Q87sZ8v4A0r/keys.js');
const admin = require("firebase-admin");
const serviceAccount = require("../JXqcs2syEPMNdAfb6Q87sZ8v4A0r/HFZl059XX15bTSw6D68Ct4i6icXs.json");
        admin.initializeApp({
                credential: admin.credential.cert(serviceAccount),
                databaseURL: "https://auditnp-4dee7.firebaseio.com"
});
const db = admin.database();
const ref =db.ref("auditEN/allData");
//fetch
const url = 'https://api.novaposhta.ua/v2.0/json/';
const keyObj = {
	"apiKey": apiKey,
	"modelName": "InternetDocument",
	"calledMethod": "getDocumentList",
	"methodProperties": {
		"DateTimeFrom": currentDate.toDay,
		"DateTimeTo": currentDate.toDay,
		"Page": "1",
		"GetFullList": "1"
	},
}
//stringify
function  stringifyKeyObj(keyObj){ return JSON.stringify(keyObj)};
const response = fetch(url, {
		method: 'POST',
		body: stringifyKeyObj(keyObj),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then(res=>res.json()
		).then(data=>{
	dataProcessor(data);
});
function dataProcessor(answer){
	var usersRef = ref.child("data"+currentDate.dayNameFile);
		usersRef.set({
			answer
		});
};
