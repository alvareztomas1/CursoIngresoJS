function mostrar()
{
    var precio1,descuento;
    precio1 = document.getElementById("elNombre").value;
    precio1 = parseInt (precio1);
    descuento = (precio1-(precio1*10)/100);
    iva = ((descuento*21)/100+descuento)
    alert ("tu compra es de "+"$"+precio1+" tenes un descuento del 10% "+" queda en"+" $"+descuento+" mas el iva es "+"$ "+iva);
  
}
