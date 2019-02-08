function mostrar()
{
    var precio;
    var descuento;
    precio = prompt ("precio");
    precio = parseInt (precio);
    descuento = prompt ("porcentaje de descuento");
    descuento = parseInt (descuento);
    resultado = (precio * descuento /100)
    resultado1 = (precio-resultado)
    document.getElementById ("elPrecioFinal").value = resultado1;
}
