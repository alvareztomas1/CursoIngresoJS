function mostrar()
{
    var hora;
    var alerta;
    hora = document.getElementById("laHora").value;
    hora = parseInt (hora);

    switch (hora)
    {
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            alerta = ("es de mañana");
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            alerta = ("es de tarde");
            break;
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
            alerta = ("es de noche");
            if (hora<24)
            {
                alerta = ("a dormir");
            }
            break;
    }
    
    alert (alerta);
}

