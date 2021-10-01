//Codigo del cuadrado
console.group("cuadrados");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden "+ ladoCuadrado +" cm");

const perimetroCuadrado= ladoCuadrado*4;
console.log("el perimetro del cuadrado es "+ perimetroCuadrado +" cm");

const areaCuadrado= ladoCuadrado*ladoCuadrado;
console.log("el Area del cuadrado es "+ areaCuadrado +" cm^2");

console.groupEnd();
//Codigo del triangulo
console.group("Triángulos");
const ladoTriangulo1= 6;
const ladoTriangulo2= 6;
const ladoTriangulo3= 4;
const alturaTriangulo= 5.5;
console.log("los lados del triángulo miden "
    + ladoTriangulo1 
    +" cm, "
    +ladoTriangulo2 
    +" cm," 
    + ladoTriangulo3 
    + " cm"
);

console.log("La altura del triangulo es  "+ alturaTriangulo +" cm");
const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+ladoTriangulo3;
console.log("el perimetro del triangulo es "+ perimetroTriangulo +" cm");
console.groupEnd();
const areaTriangulo = (ladoTriangulo3*alturaTriangulo)/2;
console.log("el Area del triangulo es "+ areaTriangulo +" cm^2");
console.groupEnd();

// Circulos
console.group("Circulos");
const radio= 4;
//diametro
const diametroCirculo= radio*2;
console.log("El diametro del circulo  es  "+ diametroCirculo +" cm");
//perimetro
const pi= Math.PI;
const perimetroCirculo= diametroCirculo*pi;
console.log("El perimetro  del circulo  es  "+ perimetroCirculo +" cm");
//Área
const AreaCirculo= Math.round ((radio*radio)*pi);
console.log("El Área del circulo  es  "+ AreaCirculo +" cm");

console.groupEnd();

