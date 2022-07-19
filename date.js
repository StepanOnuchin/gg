let writeDate = document.getElementById('date');

writeDate.addEventListener('click', function(e){
	e.preventDefault();
})

let today = new Date(); {
	Year = today.getFullYear();
	Month = today.getMonth();
	Day = today.getDate();
	WeekDay = today.getDay();

switch (Month) {
	case 0: fMonth="янв."; break;
	case 1: fMonth="фев."; break;
	case 2: fMonth="мар."; break;
	case 3: fMonth="апр."; break;
	case 4: fMonth="мая"; break;
	case 5: fMonth="июня"; break;
	case 6: fMonth="июля"; break;
	case 7: fMonth="авг."; break;
	case 8: fMonth="сен."; break;
	case 9: fMonth="окт."; break;
	case 10: fMonth="нояб."; break;
	case 11: fMonth="дек."; break;
}
switch (WeekDay) {
	case 0: wd="вс."; break;
	case 1: wd="пн."; break;
	case 2: wd="вт."; break;
	case 3: wd="ср."; break;
	case 4: wd="чт."; break;
	case 5: wd="пт."; break;
	case 6: wd="сб."; break;
}

document.getElementById('date').innerHTML = (wd + " " + Day + "   " + fMonth);
}

