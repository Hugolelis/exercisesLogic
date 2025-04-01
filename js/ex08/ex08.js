/* Challenge: calculate IMC */
function imc(peso, altura) {
    const calculate = peso / (altura ** 2)
    const calculateFixed = calculate.toFixed(2)
    let state

    if (calculateFixed < 20) state = 'abaixo do peso'
    else if (20 <= calculateFixed && calculateFixed <= 25) state = 'peso normal'
    else if (25 < calculateFixed && calculateFixed <= 30) state = 'excesso de peso'
    else state = 'Obesidade mórbida'
    
    console.log(`Seu imc é ${calculateFixed} e seu estado é ${state}`)
}

imc(140, 1.80)
