function mostrar()
{

	var contador=0;
	var acumulador=0;
	acumulador = prompt ("ingrese el valor")
	while (contador<5)
	{
		acumulador = prompt ("ingrese el valor");
	}
	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN