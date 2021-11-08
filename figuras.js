//Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrao es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

// Código del triángulo

console.group("Triángulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("El primer lado del triángulo mide: " + ladoTriangulo1 + "cm.\n" +
"El segundo lado del triángulo mide: " + ladoTriangulo2 + "cm.\n" +
"La base del triángulo mide: " + baseTriangulo + "cm."
);

console.log("La altura del triángulo es: " + alturaTriangulo + "cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código círculo

console.group("Círculos");

const radioCirculo = 4;
console.log("El rádio del círculo es: " + radioCirculo + "cm.");

const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm.");

const PI = Math.PI;
console.log("El número PI que nos da la clase Math es: " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferencia del círculo es: " + perimetroCirculo + "cm.");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm^2.");

console.groupEnd();
