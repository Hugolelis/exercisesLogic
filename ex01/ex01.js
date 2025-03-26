/* Challenge: Read an indefinite amount of numbers and line them up in ascending order */
function numbersSort(...number) {
    console.log(number.sort((a, b) => b - a))
}

numbersSort(133, 33, 17, 28)