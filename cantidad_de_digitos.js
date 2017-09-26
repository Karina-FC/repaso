/* 
Calcular sueldo semanal de un
trabajador con base en las horas que 
trabaja
EJ: Carol gana 10.000 por hora y 
trabaja 20 horas a la semana
*/

function salaryWeek(hours, payment){
/*var salary = hours * payment
*/
	return hours * payment;
}


/* Calcular la cantidad de digitos de un 
número, por ejemplo: 1986, deberá retornar 4
*/

funtion numberOfDigist(number){
	var counter = 0;
	var digits = number.toString(); //
	"1986"//
	for(var i = 0; i < digits.lenght; i++){
	counter ++;
	}
	return counter;
}