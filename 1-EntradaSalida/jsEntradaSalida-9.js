/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    dato = document.getElementById ("sueldo").value;
    
    dato = parseInt (dato);

    multiplicar = (dato * 1.10);
    
    document.getElementById ("resultado").value = multiplicar;
    
    

	
}
