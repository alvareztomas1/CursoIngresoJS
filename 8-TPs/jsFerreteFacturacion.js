/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1, precio2, precio3;
    precio1 = document.getElementById ("PrecioUno").value;
    precio1 = parseInt (precio1);
    precio2 = document.getElementById ("PrecioDos").value;
    precio2 = parseInt (precio2);
    precio3 = document.getElementById ("PrecioTres").value;
    precio3 = parseInt (precio3);
    resultado = (precio1+precio2+precio3);
    alert (resultado);

    


	
}
function Promedio () 
{
    var precio1, precio2, precio3;
    precio1 = document.getElementById ("PrecioUno").value;
    precio1 = parseInt (precio1);
    precio2 = document.getElementById ("PrecioDos").value;
    precio2 = parseInt (precio2);
    precio3 = document.getElementById ("PrecioTres").value;
    precio3 = parseInt (precio3);
    resultado = (precio1+precio2+precio3);
    promedio = (resultado/3)
    alert (promedio);
	
}
function PrecioFinal () 
{
    var precio1, precio2, precio3;
    precio1 = document.getElementById ("PrecioUno").value;
    precio1 = parseInt (precio1);
    precio2 = document.getElementById ("PrecioDos").value;
    precio2 = parseInt (precio2);
    precio3 = document.getElementById ("PrecioTres").value;
    precio3 = parseInt (precio3);
    resultado = (precio1+precio2+precio3);
    iva = (21*resultado/100)
    preciofinal = (resultado+iva);
    alert (preciofinal);

	
}