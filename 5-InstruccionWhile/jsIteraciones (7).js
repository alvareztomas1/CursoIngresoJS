function mostrar()
{

	var contador;
	var acumulador;
	var respuesta;
	var numero;
	var sumaNumero;

	respuesta="si";
	sumaNumero=0;
	contador=0
	

	while (respuesta!="no")
	{
		numero = prompt ("ingrese un valor");
		numero = parseInt (numero);

		sumaNumero = (numero+sumaNumero);
		
		respuesta = prompt ("ingrese no para continuar");

		contador++;
	}
	console.log ("la suma es "+sumaNumero);

document.getElementById('suma').value=sumaNumero;
document.getElementById('promedio').value=sumaNumero/contador;

}//FIN DE LA FUNCIÓN