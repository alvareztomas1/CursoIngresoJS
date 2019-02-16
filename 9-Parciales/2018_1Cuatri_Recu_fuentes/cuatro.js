function mostrar() {
    var libros, precio, tarjeta, resultado, resultado1, resultado2, resultado3, resultado4, resultado5, resultado6, resultado7;
    libros = prompt("cuantos libros va a comprar");
    precio = prompt("cual es el total");
    tarjeta = prompt("paga con tarjeta?");
    if (libros > 2 && tarjeta == "no" && precio > 2000) {
        resultado = (precio - (precio * 25) / 100);
        alert("su precio es " + resultado);
    }

    if (libros > 2 && tarjeta == "si" && precio > 2000) {
        resultado1 = (precio - (precio * 15) / 100);
        alert("su precio es " + resultado1);
    }
    if (libros > 2 && tarjeta == "no" && precio < 2000) {
        resultado2 = (precio - (precio * 10) / 100)
        alert("su precio es " + resultado2);
    }
    if (libros > 2 && tarjeta == "si" && precio < 2000) {

        alert("tu precio es " + precio)
    }



    if (libros < 2 && tarjeta == "no" && precio > 2000) {
        resultado4 = (precio - (precio * 25) / 100);
        alert("su precio es " + resultado4);
    }

    if (libros < 2 && tarjeta == "si" && precio > 2000) {
        resultado5 = (precio - (precio * 15) / 100);
        alert("su precio es " + resultado5);
    }
    if (libros < 2 && tarjeta == "no" && precio < 2000) {
        resultado6 = (precio - (precio * 10) / 100)
        alert("su precio es " + resultado6);
    }
    if (libros < 2 && tarjeta == "si" && precio < 2000) {
        resultado7 = (precio - (precio * 15) / 100)
        alert("tu precio es " + resultado7)
    }




















}

