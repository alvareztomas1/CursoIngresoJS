function mostrar()
{
    var precio;
    var descuento;
    var descuento1;
    var descuento2;
    var descuento3;
    var iva;
    var precioFinal;

    precio = prompt ("Ingrese el precio");
    precio = parseInt (precio);
    descuento = prompt ("Ingrese el descuento");
    descuento = parseInt (descuento);

    descuento1 = ((descuento*precio)/100);
    descuento2 = (precio-(descuento*precio)/100);
    iva = ((21*precio)/100);
    descuento3 = (descuento2-iva);
    

    alert ("el precio del descuento es "+descuento1+" el precio con descuento es "+descuento2)+" el iva es del 21%";

    document.getElementById("elPrecioFinal").value = descuento3;
}
