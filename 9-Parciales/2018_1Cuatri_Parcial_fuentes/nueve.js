function mostrar()
{
    var marca;
    var peso;
    var temperatura;
    var contador;
    var respuesta;
    var temperaturaPar;
    var pesoMaximo;
    var marcaMaxima;
    var contadorProductos;
    var sumaProductos;
    var pesoMinimo;
//----------------------------------------------------------------------------------------------------    

    peso=0;
    contador=0;
    temperaturaPar=0;
    pesoMaximo=0;
    contadorProductos=0;
    sumaProductos=0;
    pesoMinimo=0;
    
//----------------------------------------------------------------------------------------------------
    while (respuesta!="no")
    {
        marca = prompt ("ingrese la marca del producto");
        peso = prompt ("ingrese el peso");
        peso = parseInt (peso);
        if (peso<1 || peso>100)
        {
            alert ("el peso debe estar entre 1 y 100.")
            break;
        }
        temperatura = prompt ("Ingrese la temperatura");
        temperatura = parseInt(temperatura);
        if (temperatura<-30 || temperatura>30)
        {
            alert ("la temperatura tiene que estar entre -30 y 30")
            break;
        }
        if (temperatura%2==0 && temperatura!=0)
        {
            temperaturaPar++;
        }
        if (peso>=pesoMaximo || contador==0)
        {
            pesoMaximo=peso;
            marcaMaxima=marca;
        }
        if (temperatura<0)
        {
            contadorProductos++;
        }
        if (peso<pesoMinimo || contador==0)
        {
            pesoMinimo=peso;
        }
        sumaProductos=(sumaProductos+peso);
        contador++;
        respuesta = prompt ("ingrese no para continuar");
    }
    promedio=(sumaProductos/contador);
//----------------------------------------------------------------------------------------------------
    alert ("las temperaturas pares fueron: "+temperaturaPar);
    alert ("el mas pesado fue "+pesoMaximo+" y la marca es "+marcaMaxima);
    alert ("los productos que se mantienen a menos 0 grados son: "+contadorProductos);
    alert ("el promedio de los pesos es "+promedio);
    alert ("el peso minimo fue "+pesoMinimo+" el peso maximo fue "+pesoMaximo);
//----------------------------------------------------------------------------------------------------
}


































/*
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
    */