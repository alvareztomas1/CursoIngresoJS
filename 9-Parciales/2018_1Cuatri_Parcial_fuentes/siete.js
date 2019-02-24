function mostrar()
{
    var nota;
    nota = prompt ("ingrese su nota");
    nota = parseInt (nota)
    switch (nota)
    {
        case 0:
        case 1:
        case 2:
        case 3:
            alerta = ("la proxima se puede");
            break;
        case 4:
        case 5:
        case 6:
            alerta = ("raspando");
        if (nota<5)
        {
            alert ("debe preocuparse mas")
        }
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            alerta = ("aprobo");
        if (nota>8)
        {
            alert ("muy bien");
        }
            break;
        default:
        alerta = ("eso no es una nota");
        
        
    }
    alert (alerta);
}
