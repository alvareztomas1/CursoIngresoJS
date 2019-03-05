function mostrar()
{
    var dato1;
    var dato2;
    var alerta;
    var resta;

    dato1 = prompt ("ingrese el primer numero");
    dato1 = parseInt (dato1);

    dato2 = prompt ("ingrese el segundo numero");
    dato2 = parseInt (dato2);

    resta=(dato1-dato2);
    suma=(dato1+dato2);

    if (dato1==dato2)
    {
        alerta = ("los numeros son "+dato1+" y "+dato2);
    }
    else
    {
        if (dato1>dato2)
        {
            alerta = ("la resta es "+resta);
        }
        else
        {
            alerta = ("la suma es "+suma);
        }
        if (suma>10)
        {
            alerta = ("la suma es "+suma+" y supero los 10");
        }
    }

    alert (alerta);
}
    