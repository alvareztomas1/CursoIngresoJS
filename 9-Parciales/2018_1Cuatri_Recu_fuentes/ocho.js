function mostrar()
{
   var libro;
   var paginas;
   var tema;
   var ventas;
   var respuesta;
   var contador;
   var contadorPares;
   var contadorImpares;
   var contadorCeros;
   var sumaVentas;
   var promedio;
   var sumaPaginas;
//--------------------------------------------------------------------------------------------------------------------------------------
   contador=0;
   contadorPares=0;
   contadorImpares=0;
   contadorCeros=0;
   sumaVentas=0;
   sumaPaginas=0;
//--------------------------------------------------------------------------------------------------------------------------------------   
   while (respuesta!="no")
   {
    libro = prompt ("ingrese el nombre del libro");
    paginas = prompt ("Ingrese la cantidad de paginas");
    paginas = parseInt (paginas);
    ventas = prompt ("ingrese la cantidad de ventas (deben ser mayores a 0)")
    ventas = parseInt (ventas);
    tema = prompt ("ingrese un tema");

    if (ventas<0)
    {
        alert ("las ventas son mayores a 0")
    }

    if (paginas%2==0 && paginas !=0)
    {
        contadorPares++;
    }
    else
    {
        contadorImpares++;
    }
    if (ventas==0)
    {
        contadorCeros++;
    }
    if (tema=="programacion")
    {
        sumaPaginas=(sumaPaginas+paginas);
    }
        sumaVentas=(sumaVentas+ventas);
        respuesta = prompt ("ingrese no para continuar");
        contador++;
   }
//--------------------------------------------------------------------------------------------------------------------------------------
   promedio=(sumaVentas/contador);
   alert ("la cantidad de libros con paginas pares son: "+contadorPares+" y la cantidad de impares: "+contadorImpares);
   alert ("la cantidad de libros con cero ventas fueron: "+contadorCeros);
   alert ("el promedio de ventas fue "+promedio);
   alert ("la suma de paginas con tema de programacion da "+sumaPaginas);
//--------------------------------------------------------------------------------------------------------------------------------------   
}












































/*
var nombre;
    var tema;
    var paginas;
    var ventas;
    var contador;
    var respuesta;
    var contadorImpares;
    var contadorCeros;
    var sumaVentas;
    var promedio;
    var sumaProgramacion;
//--------------------------------------------------------
    contador=0;
    paginas=0;
    contadorPares=0;
    contadorImpares=0;
    ventas=0;
    contadorCeros=0;
    sumaVentas=0;
    sumaProgramacion=0;
//--------------------------------------------------------
    while (respuesta!="no")
    {   
        nombre = prompt ("ingrese el nombre del libro");
        paginas = prompt ("ingrese la cantidad de paginas del libro");
        paginas = parseInt(paginas);
        ventas = prompt ("ingrese la cantidad de ventas");
        ventas = parseInt(ventas);
        tema = prompt ("de que tema es el libro");

        if (paginas%2==0 && paginas!=0)
        {
            contadorPares++;
        }
        if (paginas%3==0 && paginas!=0)
        {
            contadorImpares++;
        }
        if (ventas==0)
        {
            contadorCeros++;
        }
        if (tema=="programacion")
        {
            sumaProgramacion=(sumaProgramacion+paginas);
        }
        sumaVentas=(sumaVentas+ventas);
        contador++;
        respuesta=prompt("ingrese no par salir");
    }
//--------------------------------------------------------
    promedio = (sumaVentas/contador);
    alert ("los libros con paginas pares son: "+contadorPares);
    alert ("los libros con paginas impares son: "+contadorImpares);
    alert ("los libros que tuvieron cero ventas fueron: "+contadorCeros);
    alert ("el promedio de ventas fue "+promedio);
    alert ("los libros de programacion suman "+sumaProgramacion+" paginas");
*/



















/*var pais;
    var superficie
    var respuesta;
    var cantidadImpar;
    var contadorMenor100;
    var contadorMayor100;
    var sumaSuperficie;
    var primerPais;
    var contadorPrimerPais;
    var superficieBaja;
    var paisBajo;

    contador=0;
    cantidadImpar=0;
    contadorMenor100=0;
    contadorMayor100=0;
    sumaSuperficie=0;
    contadorPrimerPais=0;
    superficieBaja=0;
    primerPais="";

    while (respuesta!="no")
    {
        pais = prompt ("ingrese el pais");  
        superficie = prompt ("ingrese la superficie");
        superficie = parseInt (superficie);
        
        if (superficie%3==0 && superficie!=0)
        {
            cantidadImpar++;
        }
 //--------------------------------------------------        
        if (superficie<100)
        {
            contadorMenor100++;
        }
        if (superficie==100)
        {
            contadorMayor100++;
        }
  //--------------------------------------------------        
        if (superficie>100 && primerPais == "")
        {
            primerPais=pais;
        }   
 //--------------------------------------------------       
        if (superficie<superficieBaja || contador==0)
        {
            superficieBaja=superficie;
            paisBajo=pais;
        }
 //--------------------------------------------------         
        sumaSuperficie= (sumaSuperficie+superficie);
        contador++;
        respuesta=prompt("ingrese no para salir");
 //--------------------------------------------------         
    }
    promedio = (sumaSuperficie/contador);
    alert ("hubo "+cantidadImpar+" de superficies impares");
    alert ("hubo "+contadorMenor100+ " paises con superficie menor a 100");
    alert ("el primer pais que supero 100 de superficie fue "+primerPais);
    alert ("el promedio de las superficies es "+promedio);
    alert ("el pais con menor superficie es "+ paisBajo+" , con "+superficieBaja);
    */