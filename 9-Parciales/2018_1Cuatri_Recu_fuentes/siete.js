function mostrar()
{
    var nota;
    var sexo;
    var edad;
    var contador;
    var notaMinima;
    var sexoDeLaNota;

    contador=0;
    notaMinima=0;
    sexoDeLaNota=0;
    promedio=0;
    sumaNotas=0

    while (contador<5)
    {
        nota = prompt ("ingrese su nota");
        nota = parseInt (nota);
        if (nota<0 || nota>10)
        {
            alert ("la nota tiene que ser entre 0 y 10");
        }

        sexo=prompt("ingrese m o f segun su sexo")
        if (sexo!="m" && sexo!="f")
        {
            alert ("sexo masculino m y femenino f. reingrese")
        }
        if (nota<=notaMinima || contador==0)
        {
            notaMinima=nota;
            sexoDeLaNota=sexo;
        }

        sumaNotas= (nota+sumaNotas)
        contador++;
    } 
    promedio = (sumaNotas/contador);
    alert ("el promedio de las notas es "+promedio);
    alert ("la nota mas baja es "+notaMinima+" y el sexo es "+sexoDeLaNota);
}
