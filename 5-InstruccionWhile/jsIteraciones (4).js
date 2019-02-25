function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt (numero);
	while (numero<0 || numero>9)
	{
		numero = prompt("tiene que ser entre 0 y 9");
	}
	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN