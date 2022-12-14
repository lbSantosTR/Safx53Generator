const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ramdomValues = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1) + min) * 100);

}

const randomValueFromArray = (list) => {
    return random(0, list.length - 1);
}

const randomCnpjRaiz = () => {
    let cnpj = '';

    for (let i = 0; i < 8; i++){
        cnpj += random(1,9);
    }

    return cnpj + '0001';
}

module.exports = {random, ramdomValues, randomValueFromArray, randomCnpjRaiz};