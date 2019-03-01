function mostrar()
{
    var letra;
    var numero;
    var contador;
    var respuesta;
    var contadorPares;
    var contadorImpares;
    var contadorCero;
    var sumaPositivos;
    var contadorPositivos;
    var promedioPositivos;
    var sumaNegativos;
    var numeroMinimo;
    var letraMinima;
//--------------------------------------------------------------------------------
    numero=0;
    contador=0;
    contadorPares=0;
    contadorImpares=0;
    contadorCero=0;
    sumaPositivos=0;
    contadorPositivos=0;
    sumaNegativos=0;
    numeroMinimo=0;
    
//--------------------------------------------------------------------------------
    while (respuesta!="no")
    {
    numero = prompt ("ingrese un numero entre -100 y 100");
    numero = parseInt (numero);
    letra = prompt ("ingrese una letra");
//--------------------------------------------------------------------------------
    if (numero<-100 || numero>100)
    {
        alert ("el numero tiene que ser entre -100 y 100. Reingrese");
    }
//--------------------------------------------------------------------------------
    if (numero%2==0 && numero!=0)
    {
        contadorPares++;
    }
//--------------------------------------------------------------------------------
    if (numero%3==0 && numero!=0)
    {
        contadorImpares++;
    }
//--------------------------------------------------------------------------------
    if (numero==0)
    {
        contadorCero++;
    }
//--------------------------------------------------------------------------------
    if (numero>0)
    {
        sumaPositivos=(sumaPositivos+numero);
        contadorPositivos++;
    }
//--------------------------------------------------------------------------------
    if (numero<0)
    {
        sumaNegativos=(sumaNegativos+numero);
    }
//--------------------------------------------------------------------------------
    if (numero<numeroMinimo || contador==0)
    {
        numeroMinimo=numero;
        letraMinima=letra;
    }



    respuesta = prompt ("ingrese no para continuar");
    }
//--------------------------------------------------------------------------------
    promedioPositivos = (sumaPositivos/contadorPositivos);
    alert ("se ingresaron "+ contadorPares+" numeros pares");
    alert ("se ingresaron "+ contadorImpares+" numeros pares");
    alert ("se ingresaron "+contadorCero+" ceros");
    alert ("el promedio de los numeros positivos es "+promedioPositivos);
    alert ("la suma de los numeros negativos es "+sumaNegativos);

    alert ("el numero minimo fue "+numeroMinimo+" y su letra fue "+letraMinima);

}
