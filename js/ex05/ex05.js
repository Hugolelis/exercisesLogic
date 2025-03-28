/* challenger: create a right triangle using * given its base */

const createTriangle = (base) => {
    const icon = '*'
    const repeatString = (char, times) => char.repeat(times);

    for(let i = 0; i <= base; i++) {
        console.log(repeatString(icon, i))
    }
}

createTriangle(15)