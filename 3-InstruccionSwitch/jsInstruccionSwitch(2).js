function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var alerta;
switch (mesDelAño)
{   
    case"Septiembre":
    case"Octubre":
    case"Noviembre":
    case"Diciembre":
        alerta = ("Ya pasaste el invierno");
        break
    case"Julio":
        alerta = ("Abrigate que hace frio");
        break;
    default:
        alerta = ("Falta poco para el invierno");
        break;
        
}

alert (alerta);




}//FIN DE LA FUNCIÓN