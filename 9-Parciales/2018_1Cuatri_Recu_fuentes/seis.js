function mostrar()
{
    var tipoPago;
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
}
