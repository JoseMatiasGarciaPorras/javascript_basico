//Código del cuadrado
//console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

//console.log("El perímetro del cuadrao es: " + perimetroCuadrado(ladoCuadrado) + "cm");

function areaCuadrado(lado){
    return lado * lado;
}

//console.log("El área del cuadrado es: " + areaCuadrado(ladoCuadrado) + "cm^2");

//console.groupEnd();

// Código del triángulo

//console.group("Triángulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

/*console.log("El primer lado del triángulo mide: " + ladoTriangulo1 + "cm.\n" +
"El segundo lado del triángulo mide: " + ladoTriangulo2 + "cm.\n" +
"La base del triángulo mide: " + baseTriangulo + "cm."
);*/

//console.log("La altura del triángulo es: " + alturaTriangulo + "cm.");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

//console.log("El perímetro del triángulo es: " + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

//console.log("El área del triángulo es: " + areaTriangulo(baseTriangulo, alturaTriangulo) + "cm^2");

//console.groupEnd();

//Código círculo

//console.group("Círculos");

//const radioCirculo = 4;
//console.log("El rádio del círculo es: " + radioCirculo + "cm.");

function diametroCirculo(radio){
    return radio * 2;
}

//console.log("El diámetro del círculo es: " + diametroCirculo(radioCirculo) + "cm.");

const PI = Math.PI;
//console.log("El número PI que nos da la clase Math es: " + PI);

function perimetroCirculo(radio){
    return diametroCirculo(radio) * PI;
}

//console.log("La circunferencia del círculo es: " + perimetroCirculo(radioCirculo) + "cm.");

function areaCirculo(radio){
    return (radio ** 2) * PI;
}

//console.log("El área del círculo es: " + areaCirculo(radioCirculo) + "cm^2.");

//console.groupEnd();

//Eventos formularios HTML

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAlturaTriangulo(tipo, lado1, lado2, base){
    if (tipo == "Rectángulo"){
        return (lado1 * lado2) / base;
    }
    else if(tipo == "Isóceles"){
        return Math.sqrt((lado1 ** 2) - ((base ** 2) / 4) );
    }
    else if (tipo == "Equilatero"){
        return (Math.sqrt(3 * lado1)) / 2;
    }

}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLado1");
    const lado1 = parseInt(input1.value);
    const input2 = document.getElementById("inputLado2");
    const lado2 = parseInt(input2.value);
    const input3 = document.getElementById("inputBase");
    const lado3 = parseInt(input3.value);
    const perimetro = perimetroTriangulo(lado1, lado2, lado3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputLado1");
    const lado1 = parseInt(input1.value);
    const input2 = document.getElementById("inputLado2");
    const lado2 = parseInt(input2.value);
    const input3 = document.getElementById("inputBase");
    const lado3 = parseInt(input3.value);
    const input4 = document.getElementById("listTriangulos");
    const tipo = input4.value;
    const altura = calcularAlturaTriangulo(tipo,lado1, lado2, lado3);
    const area = areaTriangulo(lado3, altura);
    alert(area);

}

function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = parseInt(input.value);
    const diametro = diametroCirculo(radio);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = parseInt(input.value);
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const radio = parseInt(input.value);
    const area = areaCirculo(radio);
    alert(area);
}
