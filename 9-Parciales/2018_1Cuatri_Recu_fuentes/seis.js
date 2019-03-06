function mostrar()
{
   var nota;

   nota = document.getElementById("laHora").value;
   nota = parseInt (nota);

   switch (nota)
   {
        case 0:
        case 1:
        case 2:
        case 3:
            alerta = ("la proxima se puede");
            break;
        case 4:
        case 5:
        case 6:
            alerta = ("pasa raspando");
            if (nota<5)
                {
                    alert ("debes preocuparte mas")
                }
            break;
        default:
            alerta = ("aprobo")
            if (nota>10)
            {
                alerta = ("ingrese una nota valida");
            }
            else
            {
                if (nota>8)
                {
                    alert  ("muy bien");
                }
                
            }
            break;

   }
   alert (alerta);
}






























/* var tipoPago;
    var precio;
    var tipo;
    var paquete;
    var paquete1;
    precio = 1000
    tipo = prompt ("con que metodo paga?")
    
    
    switch (tipo)
    {
        case "tarjeta visa":
            desc=0.10
            break;
        case "mercadopago":
            desc=0.10
            break;
        case "paypal":
        paquete = prompt ("compras todo incluido?")
            if (paquete=="si")
            {
                desc=0.25
            }
            else
            {
                desc = 0.15
            }
            break;
        case "efectivo":
            paquete1 = prompt ("compras paquete desayunos?")
            if (paquete1=="si")
            {
                 desc=0.30
            }
            else
            {
                if (paquete1=="no")
                {
                    paquete = prompt ("compras todo incluido?")
                }
                if (paquete=="si")
                {
                    desc=0.35
                }
                else
                {    
                    desc=0.20
                } 

            }
            break;
        default:
            desc=0.05
        break;
    }
    resultado=(precio-(precio*desc));
    alert ("su precio es "+resultado);
    */