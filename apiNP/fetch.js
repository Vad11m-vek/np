const fetch = require('node-fetch');
//const url = require("./JXqcs2syEPMNdAfb6Q87sZ8v4A0r/url.json");
const url = 'https://api.novaposhta.ua/v2.0/json/';
//let answerObj = {};
const keyObj = {
	"apiKey": "bf9184305646fc07dfee4e2c2f6826e7",
	"modelName": "InternetDocument",
	"calledMethod": "getDocumentList",
	"methodProperties": {
		"DateTimeFrom": "01.06.2020",
		"DateTimeTo": "15.08.2020",
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
//console.log(data)
	dataProcessor(data)
});
function dataProcessor(answer){
	for (let i in answer.data) {
		console.log('ЕН', answer.data[i].IntDocNumber);
	}
//	console.log(data.IntDocNumber);
}
