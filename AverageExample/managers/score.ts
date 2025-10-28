const average = (score: number[]): number => {
    const sortedNumbers = score.sort((a, b) => a - b) // ordenando a lista
    const majorNumber = sortedNumbers[score.length - 1] 
    const secondMajorNumber = sortedNumbers[score.length - 2] // obter os 2 maiores valores da lista
    return (majorNumber + secondMajorNumber) / 2 // calcular a media
}