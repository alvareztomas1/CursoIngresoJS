function mostrar()
{
    var nota;
    var sexo;
    var edad;
    var contador;
    var sumaNota;
    var promedio;
    var notaMinima;
    var sexoDeLaNota;
    var contadorVarones;
    var edadMinima;
    var primerMujer;
    var edadPrimera;
    var notaPrimera;
//-------------------------------------------------------------------
    contador=0;
    sumaNota=0;
    notaMinima=0;
    contadorVarones=0;
    edadMinima=0;
    primerMujer="";
//-------------------------------------------------------------------
    while (contador<5)
    {
        nota = prompt ("ingrese su nota");
        nota = parseInt (nota);
        sexo = prompt ("ingrese m o f segun su sexo");
        edad = prompt ("ingrese su edad");
        edad = parseInt (edad);

        if (nota>10 || nota <0)
        {
            prompt ("las notas deben estar entre 10 y 0. Reingrese");
        }
        if (nota<notaMinima || contador==0)
        {
            notaMinima=nota;
            sexoDeLaNota=sexo;
        }
        if (edad>18 && nota>=6)
        {
            contadorVarones++;
        }
        if (edad<edadMinima || contador==0)
        {
            edadMinima=edad;
            sexoJoven=sexo;
            notaJoven=nota;
        }
        if (sexo=="f" && primerMujer=="")
        {
            primerMujer=sexo;
            edadPrimera=edad;
            notaPrimera=nota;
        }
        




        sumaNota = (sumaNota+nota);
        contador++;
    }
//-------------------------------------------------------------------
    if (sexo!="f")
    {
        alert ("no hubo ninguna mujer");
    }

    promedio = (sumaNota/5);
    alert ("el promedio de las notas es "+promedio);
    alert ("la nota mas baja fue "+notaMinima+" y el sexo es "+sexoDeLaNota);
    alert ("la nota del mas joven fue "+notaJoven+" y su sexo es "+sexoJoven);
    alert ("la primer mujer se saco "+notaPrimera+" y tiene "+edadPrimera+" años");
}


















/* 
var velocidad;
var combustible;
var contador;
var promedio;
var sumaVelocidad;
var velocidadBaja;
var contadorVelocidad;


contador=0;
sumaVelocidad=0;
velocidadBaja=0;
contadorVelocidad=0;
velocidadAlta=0;



while (contador<5)
{
    velocidad = prompt ("ingrese la velocidad entre 0 y 250");
    velocidad = parseInt (velocidad);
    
    if (velocidad<0 || velocidad>250)
    {
        alert ("las velocidades tienen que ser entre 0 y 250");
    }
    combustible = prompt ("ingrese l o s segun el tipo de combustible");
    if (combustible != "l" && combustible != "s")
    {
        alert ("el combustible tiene que ser s o l");
    }
    if (velocidad<=velocidadBaja || contador==0)
    {
        velocidadBaja=velocidad;
        combustibleBajo=combustible;
    }
    if (combustible=="l" && velocidad>100)
    {
        contadorVelocidad++;
    }
    if (velocidad>=velocidadAlta && combustible=="s" || contador==0)
    {
        velocidadAlta=velocidad;
    }


    sumaVelocidad= (sumaVelocidad+velocidad);
    contador++;
}
promedio=(sumaVelocidad/5)

alert ("el promedio de velocidades es "+promedio);
alert ("la velocidad mas baja fue "+velocidadBaja+" y su tipo de combustible fue "+combustibleBajo);
alert ("hubo "+contadorVelocidad+" combustibles liquidos que superaron los 100 km");
alert ("la velocidad mas alta de combustible solido es "+velocidadAlta);
*/