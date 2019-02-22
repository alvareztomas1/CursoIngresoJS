/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;


function comenzar()
{
	
	numeroSecreto = Math.floor((Math.random() * 100) + 1);
	console.log(numeroSecreto);
	contadorIntentos=0
	//Genero el número RANDOM entre 1 y 100

}

function verificar()
{
	var numeroIngresado;
	var alerta;
	numeroIngresado = document.getElementById("numero").value;
	numeroIngresado = parseInt (numeroIngresado);
	contadorIntentos=contadorIntentos+1;
	
	console.log(contadorIntentos);
	
	
	if (numeroIngresado == numeroSecreto)
	{
	switch (contadorIntentos)
	{
		case 1:
			alerta = ("usted es un psiquico");
			break;
		case 2:
			alerta = ("buena percepcion");
			break;
		case 3:
			alerta = ("pura suerte");
			break;
		case 4:
			alerta = ("excelente tecnica")
			break;
		case 5:
			alerta = ("usted esta en la media")
			break;
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
			alerta = ("falta tecnica");
			break;
		default:
			alerta = ("afortunado en el amor!!");
			break;
		}
		
	}
	else
	{
		if (numeroIngresado>numeroSecreto)
		{
			alerta = ("se paso");
		}
		else
		{
			alerta = ("le falta");
		}
	}
	alert(alerta)
	document.getElementById("intentos").value= contadorIntentos;
	
}