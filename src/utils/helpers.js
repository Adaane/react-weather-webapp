var daysMap = {
  "0":"Dimanche",
  "1":"Lundi",
  "2":"Mardi",
  "3":"Mercredi",
  "4":"Jeudi",
  "5":"Vendredi",
  "6":"Samedi"
};

var monthsMap = {
  "0":"Janvier",
  "1":"Février",
  "2":"Mars",
  "3":"Avril",
  "4":"Mai",
  "5":"Juin",
  "6":"Juil",
  "7":"Août",
  "8":"Septembre",
  "9":"Octobre",
  "10":"Novembre",
  "11":"Décembre"
};


function getDate(unixTimestmap) {
  var date  = new Date(unixTimestmap * 1000);
  var day   = daysMap[date.getDay()]
  var month =  date.getDate()+ ' ' +monthsMap[date.getMonth()] ;
  return day + ' ' + month;
}


export default { getDate } ;
