/* Challenge: take an integer and return a sorted list */

function listOrd(num) {
    const numSplited = num.toString().split('')
    const ordenate = numSplited.sort((a, b) => a - b)

    return console.log(ordenate)
}

listOrd(12032929)