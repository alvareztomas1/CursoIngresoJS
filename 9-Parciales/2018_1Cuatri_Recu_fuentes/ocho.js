function mostrar()
{
    var pais;
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
}
