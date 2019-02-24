function mostrar()
{
    var planeta;
    planeta = prompt ("ingrese un planeta");

    switch (planeta)
    {
        case "tierra":
            alert ("aca vivimos");
            break;
        case "mercurio":
        case "venus":
            alert ("esta mas cerca del sol");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert ("acá hace más frio");
            break;
        default:
            alert ("eso no es un planeta");
            break;
    }

}
