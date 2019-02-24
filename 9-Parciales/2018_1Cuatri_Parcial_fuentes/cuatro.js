function mostrar()
{
    var valor1;
    var valor2;
    valor1 = prompt ("ingrese el primer valor");
    valor1 = parseInt (valor1);
    valor2 = prompt ("ingrese el segundo valor");
    valor2 = parseInt (valor2);

    if (valor1==valor2)
    {
        alerta = ("los valores ingresados son "+valor1+" y "+valor2);
    }
    else
    {
        if (valor1>valor2)
        {
            resultado = (valor1-valor2);
            alerta = ("la resta es "+resultado);
        }
        else
        {
            if (valor2>valor1)
            {
                resultado2 = (valor2+valor1);
                alerta = ("la suma es "+resultado2);
            }
                if (resultado2>10)
                {
                    alerta = ("la suma es "+resultado2+" y "+"supero el 10");
                }
        }    
    }

    alert (alerta);
}
