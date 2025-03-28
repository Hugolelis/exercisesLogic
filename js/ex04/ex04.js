/* challenge: Return hour in seconds */

function hourInSeconds(hours) {
    const [h, m, s] = hours.split(':').map(Number)
    
    const result = (3600 * h) + (60 * m) + s

    return console.log(result)
}

const hours = "11:04:10"

hourInSeconds(hours)

