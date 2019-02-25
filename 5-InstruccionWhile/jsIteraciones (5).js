function mostrar()
{

var sexo = prompt("ingrese f ó m .");
while (sexo !="m" && sexo !="f") 
{
   sexo = prompt ("ingresa m o f.")
}


document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN