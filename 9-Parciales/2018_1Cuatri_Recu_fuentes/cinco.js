function mostrar()
{
    var valor1;
    var valor2;
    var valor3;
    var valor4;
    var suma;
    var desc;
    var resultado;
    var valores;
    valor1 = prompt ("ingrese valor 1");
    valor2 = prompt ("ingrese valor 2");
    valor3 = prompt ("ingrese valor 3");
    valor4 = prompt ("ingrese valor 4");
    valor1 = parseInt (valor1);
    valor2 = parseInt (valor2);
    valor3 = parseInt (valor3);
    valor4 = parseInt (valor4);

    if (valor1>valor2 && valor1>valor3 && valor1>valor4)
    {
        alerta = ("el valor mayor es "+valor1);
    }   
     else
    {
        if (valor2>=valor1 && valor2>=valor3 && valor2>=valor4)
        {
            alerta = ("el valor mayor es "+valor2);
        }
        else
        {
            if (valor3>=valor1 && valor3>=valor2 && valor3>=valor4)
            {
                alerta = ("el valor mayor es "+valor3);
            }     
            else   
            {
                alerta = ("el valor mayor es "+valor4);
            }
        }
    }
    alert (alerta);
    
    suma = (valor1+valor2+valor3+valor4)
    if (suma>100)
    {
        desc=0.10
    }
    else{
        if (suma>50)
        {
            desc=0.5    
        }else
        {
            if (suma<50)
            {
                desc=-0.15
            }
        }
       
        
    }
    resultado = (suma-(suma*desc));
    alert ("su precio es "+resultado);
    
}

