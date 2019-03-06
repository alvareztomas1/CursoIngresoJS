function mostrar() 
{
    var dato;
    var dato1;
    var division;
    var suma;

    dato = prompt ("ingrese el primer numero");
    dato = parseInt (dato);
    dato1 = prompt ("ingrese el segundo numero");
    dato1 = parseInt (dato1);

    division=(dato/dato1);
    suma=(dato+dato1)

    if (dato==dato1)
    {
        alerta = ("los numeros son "+dato+" , "+dato1);
    }
    else
    {
        if (dato>dato1)
        {
            alerta = ("la division es "+division);
        }
        else
        {
            alerta = ("la suma es "+suma);
            
            if (suma<50)
            {
                alerta = ("la suma es "+suma+" y es menor a 50");
            }
        }  
    }
    alert (alerta);

}

