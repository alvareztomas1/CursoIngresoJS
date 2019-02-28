function mostrar()
{

	var contador;
	var positivo;
	var negativo;
	var respuesta;

	contador=0;
	positivo=0;
	negativo=1;
	respuesta='si';

	var queresContinuar;

	queresContinuar="si";
	while(queresContinuar!="no")
	{


		queresContinuar=prompt("para salir ingrese no");
	}

	var contadorDeVueltas;
	contadorDeVueltas=0

	while(contadorDeVueltas<5)
	{
		contadorDeVueltas ++;
	
	}

	var contadorAlumnos;
	var edad;
	contadorAlumnos=0
	while(true)
	{
		edad=prompt("ingrese edad");
		edad=parseInt(edad);
		if(edad==66)
		{
			break;
		}
		if(contadorAlumnos==100)
		{
			break;
		}
		contadorAlumnos++;
	
	}

	if(contadorAlumnos==100)
	{

	}
	
document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN