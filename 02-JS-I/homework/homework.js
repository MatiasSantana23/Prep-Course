// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
<<<<<<< HEAD
const nuevaString = "hola";
=======
const nuevaString = 'hola';
>>>>>>> c950690c540fc41bcdb34bb30a99d32fbfa7b265

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
<<<<<<< HEAD
const nuevoBool = true;
=======
const nuevoBool = false;
>>>>>>> c950690c540fc41bcdb34bb30a99d32fbfa7b265

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
<<<<<<< HEAD
const nuevoModulo = ((21 % 5 )== 1);
=======
const nuevoModulo = 21 % 5 === 1;
>>>>>>> c950690c540fc41bcdb34bb30a99d32fbfa7b265


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {return str
  // "Return" la string provista: str
<<<<<<< HEAD
  // Tu código:no cambies los nombres de las funciones

=======
  // Tu código: 
>>>>>>> c950690c540fc41bcdb34bb30a99d32fbfa7b265
  
}

function suma(x , y) {
  var resultado = x + y
  return resultado
  
  
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  
}

function resta(x, y) {
  var resultado = x - y
  return resultado
  // Resta "y" de "x" y devuelve el valor
  // Tu código: 
  
  
}

function multiplica(x, y) {
  var resultado = x * y
  return resultado 
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  
}

function divide(x, y) {
  var resultado = x / y
  return resultado
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  
}

function sonIguales(x, y) {
  if (x == y) {return true}
 else
{return false}
   // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function tienenMismaLongitud(str1, str2) 
    // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  {
    if (str1.length == str2.length){return true} 
    
    else
     {return false}
  
}

function menosQueNoventa(num) 
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código: 
  {
    if (num < 90) {return true} 
  else
  {return false}
  
}

function mayorQueCincuenta(num){
  if (num > 50) 
  {return true} 
  else 
  {return false}
}
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  


function obtenerResto(x, y)
 {
   var resto = x % y;
    return resto

  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  
}

function esPar(num) {
  if (num % 2 == 0)
   {return true}
    return false
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function esImpar(num) {
  if (num % 2 == 1)
   {return true} 
   return false
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

function elevarAlCuadrado(num) 
{return Math.pow(num, 2)

  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  
}

function elevarAlCubo(num) {return Math.pow(num,3)
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  
}

function elevar(num, exponent) {return Math.pow(num,exponent)
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
}

function redondearNumero(num) {return Math.round(num)
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  
}

function redondearHaciaArriba(num) {return Math.ceil(num)
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  
}

function numeroRandom() {return(Math.random());
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
}

function esPositivo(numero) {
  if (numero  >0){
    return "Es positivo"
  }
  else if (numero <0){
    return "Es negativo"
  }
  else {return false}
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  let nuevaString = str + "!"
  return nuevaString
}

function combinarNombres(nombre, apellido) {
  let unNombre = nombre + " "+ apellido 
  return unNombre
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  
}

function obtenerSaludo(nombre) {
  let unSaludo = "Hola " + nombre + "!"
  return unSaludo 
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

function obtenerAreaRectangulo(alto, ancho) {
  return alto * ancho 
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}


function retornarPerimetro(lado){
  return  (lado*4)
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}


function areaDelTriangulo(base, altura){
  return (base * altura) /2
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}


function deEuroAdolar(euro){
  var dolarValue = 1.20
  return euro * dolarValue
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}


function esVocal(letra){
  if ((letra == "a"||letra == "e"|| letra == "i"||letra == "o"|| letra == "u")&& letra.length <=1)
  {return "Es vocal"}
  return "Dato incorrecto"

  
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
