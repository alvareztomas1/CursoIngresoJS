function mostrar()
{
    var precio;
    var descuento;
    var precioFinal;

    precio = prompt ("ingrese el precio");
    precio = parseInt (precio);
    descuento = prompt ("Ingrese el descuento");
    descuento = parseInt (descuento);

    precioFinal = (precio-(descuento*precio)/100);
    
    document.getElementById("elPrecioFinal").value = precioFinal;
}
