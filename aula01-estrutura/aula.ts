// sum
function sum(a:number, b:number):number {
    return a + b
}

let result_sum = sum(10, 5)
console.log(result_sum)

// sub
function sub(a:number, b:number):number {
    return a - b
}

let result_sub = sub(10, 5)
console.log(result_sub)

// mult
function mult(a:number, b:number):number {
    return a * b
}

let result_mult = mult(10, 5)
console.log(result_mult)

// div
function div(a:number, b:number):number | string{
    if (b === 0) {
        return "Não é possível dividir por zero."
    }
    return a / b
}

let result_div = div(10, 0)
console.log(result_div)

// uma outra forma de fazer funcoes
const sum_dois = (a:number, b:number) => {
    let result = a + b // Esta 'result' é local, não causa conflito.
    if (!result) {
        return null
    }
    return result;
}

// **CORRIGIDO:** Variável renomeada para 'result_sum_dois' para evitar conflito com qualquer outra 'result' que possa existir.
let result_sum_dois = sum_dois(5, 10)
console.log(result_sum_dois)


// **SOLUÇÃO FINAL:** Adicionando 'export {}' no final, você transforma este arquivo
// em um módulo TS, isolando o escopo de todas as variáveis (result_sum, result_sub, etc.)
// e eliminando a possibilidade de re-declaração.
export {}