
function mostrar()
{
    var dato1,dato2,peso1,peso2,resultado;
    dato1 = prompt ("nombre mascota1")
    dato2 = prompt ("nombre mascota2")
    peso1= prompt ("peso1");
    peso2= prompt ("peso2");
    peso1 = parseInt (peso1);
    peso2 = parseInt (peso2);
    resultado = (peso1+peso2);
    alert ("tenes dos mascotes "+dato1+" y "+dato2+" , que pesan "+peso1+" y "+peso2+" kilos "+", la suma de los kilos es "+resultado);
    

}
