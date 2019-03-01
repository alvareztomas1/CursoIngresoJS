function mostrar()
{
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
}
