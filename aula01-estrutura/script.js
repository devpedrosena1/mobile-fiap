let userName = 'Paulo'; // string
userName = 10; // number
console.log(userName);

function sum(a, b) {
  return a + b;
}

let result = sum(5, 10);
console.log(result);

// funcao subtracao
function sub(a, b) {
  return a - b;
}

let result_sub = sub(10, 5);
console.log(result_sub);

// funcao multiplicacao
function mult(a, b) {
  return a * b;
}

let result_mult = mult(10, 5)
console.log(result_mult)

// funcao divisao
function div(a, b) {
  return a / b
}

let result_div = div(10, 5)
console.log(result_div)

// callback
function some(callback) {
  callback()
}

function consoleCallback() {
  console.log("Callback") // callback
}

function console2Callback() {
  console.log("Callback2")
}

some(console2Callback)

// exercicio
// function onSucess(a, b) {
//   return a / b
// }

// function onError() {
//   return "Não é possível dividir por zero."
// }

// function div(a, b, onSucess, onError) {
//   if (b === 0) {
//     return onError()
//   }
//   onSucess(a, b)
// }

// let resultadoSucesso = div(10, 5, onSucess, onError)
// console.log(resultadoSucesso)

// let resultadoErro = div(10, 5, onSucess, onError)
// console.log(resultadoErro)

function div(a, b, onSucess, onError) {
  if (b === 0) {
    onError("Erro na divisao por 0.")
    return
  } 
  onSucess(a / b)
}

div(5, 0, (result) => console.log(result), (error) => console.log(error))