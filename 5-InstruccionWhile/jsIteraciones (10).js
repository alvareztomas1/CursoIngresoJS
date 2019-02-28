function mostrar()
{

	var contador;
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	var bandera;
	var sumaNegativos;	

	//declarar contadores y variables 
	contador=0;
	respuesta='si'
	sumaNegativos=0
	sumaPositivos=0

	while(respuesta!="no")
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if (numeroIngresado<0)
		{
			sumaNegativos = (sumaNegativos+numeroIngresado)
			
		}
		if (numeroIngresado>0)
		{
			sumaPositivos = (sumaPositivos+numeroIngresado)
			
		}
		
	
		contador ++;
		respuesta=prompt("ingrese no para salir");
	}
	
	console.log("el resultado es "+sumaNegativos);
	console.log("el resultado es "+sumaPositivos);


}//FIN DE LA FUNCIÓN