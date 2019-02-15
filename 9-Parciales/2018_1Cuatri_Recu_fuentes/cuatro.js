function mostrar()
{
    var libros,precio,tarjeta,resultado,resultado1,resultado2;
    libros = prompt ("cuantos libros va a comprar");
    precio = prompt ("cual es el total");
    tarjeta = prompt ("paga con tarjeta?");
    if (libros>2 && tarjeta=="no") 
            {resultado = (precio-(precio*10)/100);
            alert ("su precio es "+resultado);}
        else
        {
            if (precio>2000 && tarjeta=="no")
                {resultado1 = (precio-(precio*15)/100);
                alert ("su precio es "+ resultado1);}
                
        }
        
        
    

            

    
    }

