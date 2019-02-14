function mostrar()
{
	var dato;
	dato = Math.random(0,1)*10;
	dato = parseInt(dato);
	alert ("su nota es " + dato);
	if (dato==10 || dato==9)
	{
		alert ("excelente");
	}
	else if (dato>=4)
	{
		alert ("aprobo");
	}
	else
	{
		alert ("Vamos, la proxima se puede");
	}	
	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN