
    /* функция получения текущей даты и времени */
    window.onload = function() {
    {
        var current_datetime = new Date();
        var day = current_datetime.getDate();
        var month = current_datetime.getMonth()+1;
        var year = current_datetime.getFullYear();

        if (day < 10) {
        	day = "0" + day;
        }
        if (month < 10) {
        	month = "0" + month;
        }
    }

    /* выводим текущую дату и время на сайт в блок с id "date_js" */
    document.getElementByClassName('date_js')[0].innerHTML = day+"."+month+"."+year; 
}