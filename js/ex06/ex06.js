/* Challenge: return all even numbers in range of numbers */

function par(range) {
    const arrPar = []

    for(let i = 0;i <= range; i++) {
        if(i % 2 == 0) arrPar.push(i)
    }

    return console.log(arrPar)
}

par(20)