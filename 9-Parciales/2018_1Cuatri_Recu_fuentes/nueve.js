function mostrar()
{
   var nombre;
   var peso;
   var temperatura;
   var contador;
   var respuesta;
   var contadorPar;
   var pesoMaximo;
   var tempPesada;
   var nombrePesado;
   var contadorTemp;
   var sumaPeso;
   var promedio;
   var pesoMinimo;
   

   contador=0;
   contadorPar=0;
   pesoMaximo=0;
   contadorTemp=0;
   sumaPeso=0;
   pesoMinimo=1001;
   pesoMaximo1=0;

   

   while (respuesta !="no")
   {
    nombre=prompt("ingrese el nombre del animal");
    peso=prompt("ingrese el peso entre 1 y 1000");
    peso=parseInt(peso);
    temperatura=prompt("ingrese la temperatura de habitat (entre -30 y 30");
    temperatura=parseInt(temperatura);
    
    if (temperatura<-30 || temperatura>30)
    {
        alert ("la temperatura debe estar entre -30 y 30")
        break;
    }
    if (peso<1 || peso>1000)
    {
       alert ("el peso debe ser entre 1 y 1000");
    }
    if (temperatura%2==0 && temperatura!=0)
    {
        contadorPar++;
    }
    if (peso>pesoMaximo || contador==0)
    {
        pesoMaximo=peso;
        tempPesada=temperatura;
        nombrePesado=nombre;
    }
    if (temperatura<0)
    {
        contadorTemp++;
    }
    if (temperatura<0 && peso>pesoMaximo1)
    {
        pesoMaximo1=peso;
    }
    if (temperatura<0 && peso<pesoMinimo)
    {
        pesoMinimo=peso;
    }
        sumaPeso = (sumaPeso+peso);
        respuesta = prompt ("ingrese no para continuar");
        contador++; 
   }
   
   promedio=(sumaPeso/contador);
   alert ("las temperaturas pares son "+contadorPar);
   alert ("el nombre del mas pesado es "+nombrePesado+" y si temperatura es "+tempPesada);
   alert ("los animales que viven a menos 0 grados son "+contadorTemp);
   alert ("el promedio de los pesos es "+promedio);
   alert ("los pesos de los que viven bajo cero son "+pesoMaximo1+" y "+pesoMinimo);
}

































/* var marca;
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
    */