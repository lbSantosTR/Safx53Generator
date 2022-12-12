const mascaraString = (length, texto) => {
    return texto + ' '.repeat(length - texto.length)
}

const mascaraNumber = (length, texto, decimal) => {
    if (typeof texto === 'number') {
        texto = String(texto)
    }

    texto = texto.replaceAll('.', '');

    return '0'.repeat(length - texto.length) + texto
}

module.exports = {mascaraString, mascaraNumber};