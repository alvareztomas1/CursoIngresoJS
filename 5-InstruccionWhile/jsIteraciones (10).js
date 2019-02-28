function mostrar()
{

	var contador;
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	var bandera;
	var sumaNegativos;	
	var contadorNegativos;
	var contadorPositivos;
	var contadorPares;

	//declarar contadores y variables 

	contador=0;
	respuesta='si';
	sumaNegativos=0;
	sumaPositivos=0;
	contadorNegativos=0;
	contadorPositivos=0;
	contadorCeros=0;
	contadorPares=0;
	
	while(respuesta!="no")
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if (numeroIngresado<0)
		{
			sumaNegativos = (sumaNegativos+numeroIngresado)
			contadorNegativos++;	
			
		}
		if (numeroIngresado>0)
		{
			sumaPositivos = (sumaPositivos+numeroIngresado)
			contadorPositivos++;
			
		}
		if (numeroIngresado==0)
		{
			contadorCeros++;
		}
		if(numeroIngresado%2==0 && numeroIngresado!=0)
		{
			contadorPares++
		}

		contador ++;
		respuesta=prompt("ingrese no para salir");
	}
	
	console.log("el resultado es "+sumaNegativos);
	console.log("el resultado es "+sumaPositivos);
	console.log("pusiste "+contadorNegativos + " numeros negativos");
	console.log("pusiste "+contadorPositivos + " numeros positivos");
	console.log("pusiste "+contadorCeros + " ceros");
	console.log ("hay "+contadorPares+" numeros pares");
	console.log ("el promedio de positivos es "+ sumaPositivos/contadorPositivos);
	console.log ("el promedio de los negativos es "+sumaNegativos/contadorNegativos)
	console.log ("la diferencia es "+sumaPositivos-sumaNegativos);
}//FIN DE LA FUNCIÓN