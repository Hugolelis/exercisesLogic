/* Challenge: remove words in text */
function filterText(text, ...params) {
    const words = params;
    const wordsUpperCase = words.map(char => char.toUpperCase().replace(/[^a-zA-ZÀ-ÿ\s]/g, ''))

    const textFormated = text.replace(/[.,!?]/g, '').toUpperCase();
    const textSplited = textFormated.split(' ')

    const removeWords = textSplited.filter(char => wordsUpperCase.indexOf(char) == -1)

    console.log(removeWords.join(' '))
}

const text = "Esse é meu texto teste para minha função"

filterText(text, 'Esse', 'Teste')