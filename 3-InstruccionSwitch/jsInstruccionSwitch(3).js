function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var alerta;
switch (mesDelAño)
{
    case "Febrero":
        alerta = ("este mes no tiene mas de 29 dias");
        break;
    default:
        alerta = ("este mes tiene mas de 29 dias");
        break;
}
alert (alerta);

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN