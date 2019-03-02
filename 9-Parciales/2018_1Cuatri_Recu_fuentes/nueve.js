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

//--------------------------------------------------------------------
    contador=0;
    temperatura=0;
    peso=0;
    contadorPares=0;
    productoPesado=0;
//--------------------------------------------------------------------
    while (respuesta!="no")
    {
        if (temperatura%2==0 && temperatura!=0)
        {
            contadorPares++;
        }
        if (peso>productoPesado || contador==0)
        {
            productoPesado=peso;
            marcaPesada=marca;
        }


        contador++;
        respuesta = prompt ("ingrese no para continuar")
    }
    alert ("las temperaturas pares son "+contadorPares);
    alert ("el producto mas pesado es "+productoPesado+" y su marca es "+marcaPesada);
}
