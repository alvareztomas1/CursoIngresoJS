function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var contador;
    var respuesta;
    var contadorPares;
    var productoPesado;
    var marcaPesada;
    var contadorTemperatura;
    var sumaPeso;
    var promedio;
    var pesoMinimo;
    var pesoMaximo;

//--------------------------------------------------------------------
    contador=0;
    temperatura=0;
    peso=0;
    contadorPares=0;
    productoPesado=0;
    contadorTemperatura=0;
    sumaPeso=0;
    pesoMinimo=0;
    pesoMaximo=0;
//--------------------------------------------------------------------
    while (respuesta!="no")
    {
        peso = prompt ("ingrese un peso entre 1 y 100");
        peso = parseInt (peso);
        marca = prompt ("ingrese la marca");
        temperatura = prompt ("ingrese la temperatura entre -30 y 30");
        temperatura = parseInt (temperatura);
//--------------------------------------------------------------------
        if (peso <1 || peso>100)
        {
            alert ("el peso tiene que ser entre 1 y 100. Reingrese");
        }
//--------------------------------------------------------------------
        if (temperatura<-30 || temperatura>30)
        {
            alert ("la temperatura tiene que estar entre -30 y 30. Reingrese");
        }
//--------------------------------------------------------------------
        if (temperatura%2==0 && temperatura!=0)
        {
            contadorPares++;
        }
//--------------------------------------------------------------------
        if (peso>productoPesado || contador==0)
        {
            productoPesado=peso;
            marcaPesada=marca;
        }
//--------------------------------------------------------------------
        if (temperatura<0)
        {
            contadorTemperatura++;
        }
//--------------------------------------------------------------------
        if(peso<pesoMinimo ||contador==0)
        {
            pesoMinimo = peso;
        }
        if(peso>pesoMaximo ||contador==0)
        {
            pesoMaximo = peso;
        }
//--------------------------------------------------------------------
        contador++;
        respuesta = prompt ("ingrese no para continuar")
        sumaPeso = (sumaPeso+peso);
    }
    promedio = (sumaPeso/contador);

    alert ("las temperaturas pares son "+contadorPares);
    alert ("el producto mas pesado es "+productoPesado+" y su marca es "+marcaPesada);
    alert ("las temperaturas que se mantienen menor a 0 son "+contadorTemperatura)
    alert ("el promedio de los pesos es "+promedio);
    alert ("el peso minimo fue "+pesoMinimo+" el peso maximo fue "+pesoMaximo);
}
