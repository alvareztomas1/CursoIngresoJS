function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var alerta;

switch (mesDelAño)
{
    case"Enero":
        alerta = ("que comiences bien el año!!!.");
        break;
    case"Marzo":
        alerta = ("a clases!!!.");
        break;
    case"Julio":
        alerta = ("se vienen las vacaciones!!!");
        break;
    case"diciembre":
        alerta = ("Felices fiestas!!!");
        break;
    default:
    alert = ("no entran en el rango");
        break;
}
alert (alerta);






}//FIN DE LA FUNCIÓN