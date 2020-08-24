const fetch = require('node-fetch');
let currentDate  = require('./t.js');
const apiKey = require('../JXqcs2syEPMNdAfb6Q87sZ8v4A0r/keys.js');

//fetch
const url = 'https://api.novaposhta.ua/v2.0/json/';
const keyObj = {
	"apiKey": apiKey,
	"modelName": "InternetDocument",
	"calledMethod": "getDocumentList",
	"methodProperties": {
		"DateTimeFrom": "01.01.2020",
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
	for (let i in answer.data) {
//console.log(answer.data[i]);

		console.log('ЕН', answer.data[i].IntDocNumber);
//		console.log('Payer', answer.data[i].PayerType);
//		console.log('ScheduledDate', answer.data[i].ScheduledDeliveryDate);
//		console.log('StateName', answer.data[i].StateName);
//		console.log('lastUpDate', answer.data[i].DateLastUpdatedStatus);
	}
}
