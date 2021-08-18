function areaCuadrado(lado){
    return lado*lado;
}
function perimetroCuadrado(lado){
    return lado*4;
}

function calcularPerimetroCuadrado(){
   
    const perimetro = perimetroCuadrado(document.getElementById("InputCuadrado").value)
    document.getElementById("resultado").innerText="El perimetro es "+ perimetro;
}


let numberArray = [40, 1, 5, 200];


function compareNumbers(a, b) {
    console.log("primero "+a);
    console.log("segundo "+b);
    console.log(a-b);
  return a - b;
}

numberArray.sort(compareNumbers); // [1, 5, 40, 200]