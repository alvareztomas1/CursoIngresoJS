function mostrar()
{

	var contador;
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	var bandera;	

	// declarar variables
	contador=0;
	respuesta='si';
	/*numeroMaximo=-9999;
	numeroMinimo=9999;*/
	bandera=0;

	while(respuesta!='no')
	{
		numeroIngresado=prompt("ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(contador==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
		
		}
		else
		{
			if(numeroMaximo<numeroIngresado)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroMinimo>numeroIngresado)
			{
				numeroMinimo=numeroIngresado;
			}	
		}

		contador ++;
		respuesta=prompt("ingrese no para salir");
	}

	console.log("el numero maximo es "+numeroMaximo);
	console.log("el numero minimo es "+numeroMinimo);



}//FIN DE LA FUNCIÓN