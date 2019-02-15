function mostrar()
{
    var precioFinal,propina,resultado,chicos;
    
    chicos = prompt ("cuantos chicos son")
    precioFinal = document.getElementById("elPrecioFinal").value;
    precioFinal = parseInt (precioFinal);

    propina = ((precioFinal*10)/100);
    propina = parseInt (propina);
    
    precio = (precioFinal+propina);
    precio = parseInt (precio);

    resultado = ((precioFinal+propina)/chicos);
    

    alert ("el precio es de "+precioFinal+"$ "+" mas la propina que son "+propina+"$"+" el precio seria "+precio+"$ "+" cada uno tiene que poner "+resultado+" pesos");
}
