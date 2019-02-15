function mostrar()
{
    var precioFinal,propina;
    precioFinal = document.getElementById("elPrecioFinal").value;
    precioFinal = parseInt (precioFinal);
    propina = ((precioFinal*10)/100);
    resultado = ((precioFinal/3)+propina);
    alert ("el precio es de "+precioFinal+"$ "+" mas la propina que son "+propina+"$"+" cada uno tiene que poner "+resultado+" pesos");
}
