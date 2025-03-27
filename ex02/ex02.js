/* Challenge: Encrypt a text based on its position in the alphabet */

function criptografa(text) {
    const alfabeto = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    
    const textFormated = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    const textSplited = textFormated.split('')

    let cripto = textSplited.map(char => {
        if (char == ' ') return ' '
        return alfabeto.indexOf(char)
    })
    
    return console.log(cripto.join(''))
}

criptografa('arroz com feijão')