function mostrar()
{
   var nota;
   var sexo;
   var contador;
   var sumaNotas;
   var promedio;
   var sexoDeLaNota;
   var contadorVarones;

   contador=0;
   sumaNotas= 0;
   notaMinima=0;
   contadorVarones=0;
   

   while (contador<5)
   {   

       nota = prompt ("ingrese su nota");
       nota=parseInt(nota);

       if (nota<0 || nota>10)
       {
            alert ("la nota tiene que ser entre 0 y 10");
            break;
       }

       sexo = prompt ("ingrese m o f segun su sexo");
       if (sexo != "m" && sexo != "f")
       {
           alert ("el sexu debe ser m para masculino y f para femenino. reingrese")
           break;
       }
       if (nota<=notaMinima || contador==0)
       {
           notaMinima=nota;
           sexoDeLaNota=sexo;
       }
       sumaNotas = (sumaNotas + nota);
       contador++;
       if (sexo=="m" && nota>=6)
       {
           contadorVarones++;
       }

   }
   promedio = (sumaNotas/contador);
   alert ("el promedio de los alumnos es "+ promedio);
   alert ("la nota mas baja de los alumnos es "+notaMinima+ " y su sexo es "+sexoDeLaNota);
   alert ("hubo "+contadorVarones+" que se sacaron mas de 6");
    
}
