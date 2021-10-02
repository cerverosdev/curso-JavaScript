//Codigo del cuadrado
console.group("cuadrados");


function perimetroCuadrado(lado){
    return lado*4;
}
perimetroCuadrado();


 function areaCuadrado(lado){
    return lado*lado;
 }
 areaCuadrado()


console.groupEnd();
//Codigo del triangulo
console.group("Triángulos");



function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}
perimetroTriangulo();


function areaTriangulo(base, altura){
    return (base*altura)/2
}
areaTriangulo();


console.groupEnd();

// Circulos
console.group("Circulos");
//const radio= 4;

//diametro

function diametroCirculo(radio){
    return radio*2;
}
diametroCirculo();


//perimetro
const pi= Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro*pi;
}

//Área
function areaCirculo(radio){
    return radio*radio*pi;
}
areaCirculo();


console.groupEnd();

//interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);

}


