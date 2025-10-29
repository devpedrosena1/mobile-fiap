const average = (score: number[]): number => {
    const sortedNumbers = score.sort((a, b) => a - b) // ordenando a lista
    const majorNumber = sortedNumbers[score.length - 1] 
    const secondMajorNumber = sortedNumbers[score.length - 2] // obter os 2 maiores valores da lista
    return (majorNumber + secondMajorNumber) / 2 // calcular a media
}

const category = (average: number): string => {
    if (average >= 0 && average < 3) {
        return "reprovado."
    } else if (average < 6) {
        return "de recuperação."
    } else if (average <= 10) {
        return "aprovado."
    } else {
        return "nota inválida."
    }
}

export const Score = {
    average: average,
    category: category
}