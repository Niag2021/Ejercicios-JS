/*
En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el 
perímetro del cuadrado. El area la calculas como lado multiplicado por lado. El perímetro es la suma 
de los cuatro lados. 
*/

function calcular(){
    let lado=40;
    
    let area=lado*lado;
    console.log("El area es :", area);

    let perimetro=lado*4;
    console.log("El perimetro es :", perimetro);    
}

calcular();
