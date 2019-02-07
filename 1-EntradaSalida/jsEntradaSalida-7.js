/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    dato = document.getElementById ("numeroUno").value;
    dato1 = document.getElementById ("numeroDos").value;
    dato = parseInt (dato);
    dato1 = parseInt (dato1);
    suma = (dato + dato1);
    alert ("la suma es " + suma);

	
}

function restar()

{
    dato = document.getElementById ("numeroUno").value;
    dato1 = document.getElementById ("numeroDos").value;
    dato = parseInt (dato);
    dato1 = parseInt (dato1);
    resta = (dato - dato1);
    alert ("la resta es " + resta);
	
}

function multiplicar()
{
    dato = document.getElementById ("numeroUno").value;
    dato1= document.getElementById ("numeroDos").value;
    dato = parseInt (dato);
    dato1 = parseInt (dato1);
    multiplicar = (dato * dato1);
    alert ("la multiplicacion da " + multiplicar);

	
}

function dividir()
{
    dato = document.getElementById ("numeroUno").value;
    dato1= document.getElementById ("numeroDos").value;
    dato = parseInt (dato);
    dato1 = parseInt (dato1);
    dividir = (dato / dato1);
    alert ("el resultado es " + dividir);
	
}

