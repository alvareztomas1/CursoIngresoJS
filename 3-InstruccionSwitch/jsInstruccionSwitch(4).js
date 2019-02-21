function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var alerta;
switch (mesDelAño)
{
    case"Febrero":
        alerta=("tiene 28 dias");
    break;
    
    case"Abril":
    case"Junio":
    case"Septiembre":
    case"Noviembre":
        alerta=("tiene 30 dias");
    break;

    default:
    alerta=("tiene 31 dias");
    break;
}//switch (mesDelAño)
alert (alerta);

}//FIN DE LA FUNCIÓN