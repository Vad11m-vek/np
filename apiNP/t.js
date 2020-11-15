let today;
//let dd;
//let mm;
//let yyyy;
//let seconds;
//let minutes;
//let hour;
//today = dd+'.'+mm+'.'+yyyy;
exports.dayNameFile = refreshDayNameFile();
function refreshDayNameFile(){
        let day = refreshTime ();
	let dayNameFiles = '';
	return dayNameFiles =  chekerZero(day.getDate()) +''+ parseInt(chekerZero(day.getMonth()+1))+'' +  day.getFullYear();
}
console.log(refreshDayNameFile());
exports.toDay = refreshToDate();
function refreshToDate(){
	let day = refreshTime ();
	return today = chekerZero(day.getDate()) +'.'+ parseInt(chekerZero(day.getMonth()+1)) +'.'+ day.getFullYear();
};
console.log(refreshToDate());
exports.time =  refreshDayTime ();
function refreshDayTime (){
         let day = refreshTime ();
        return time  = day.getHours() +'.'+ day.getMinutes() +'.'+ day.getSeconds();
}
console.log(refreshDayTime ());
function refreshTime (){
	 today = new Date();
//	 dd = today.getDate();	
//	 mm = today.getMonth()+1;
//	 yyyy = today.getFullYear();
//	 seconds = today.getSeconds();
//	 minutes = today.getMinutes();
//	 hour = today.getHours();
	return today;
}
function chekerZero(zeroPlus){
if(zeroPlus<10)
	{
    		zeroPlus='0'+zeroPlus;
	}
return zeroPlus;
}
