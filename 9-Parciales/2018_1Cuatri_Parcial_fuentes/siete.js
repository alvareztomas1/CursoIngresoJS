function mostrar()
{
   var nota;
   var sexo;
   var contador;
   var sumaNotas;
   var notaMaxima;

   contador=0;
   sumaNotas= 0;
   notaMinima=9999;
   

   while (contador<5)
   {   

       nota = prompt ("ingrese su nota y su sexo");
       nota=parseInt(nota);
       sexo=prompt ("ingrese m o f segun su sexo");

       if (nota>0 && nota<=10)
       {
        sumaNotas = (sumaNotas+nota);
        
       }
       if (nota<notaMinima)
       {
           notaMinima=nota
           
       }
       if (sexo=="m" && nota>=6)       
       {
        contador2=contador+1;
       }

       contador++;
   }
   alert ("el promedio es "+sumaNotas/contador)
   alert ("la nota minima es "+notaMinima+" y su sexo es "+sexo);
   alert ("hubo "+contador2+" varones con mas de 6")
    
}
