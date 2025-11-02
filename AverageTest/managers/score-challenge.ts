const average = (scores: number[]): number => {
    // nao preciso ordenar pois utilizaremos todas as notas
    const nota1 = scores[0]
    const nota2 = scores[1]
    const nota3 = scores[2]
    const nota4 = scores[3]

    return (nota1 + nota2 + nota3 + nota4) / 4
}

const category = (average: number): string => {
    if (average >= 0 && average <= 3) {
        return "reprovado"
    } else if (average <= 5) {
        return "de recuperação"
    } else if (average <= 7) {
        return "aprovado com pendencia"
    } else if (average <= 10) {
        return "aprovado"
    } else {
        return "nota inválida."
    }
}

export const Scores = {
    average: average,
    category: category
}