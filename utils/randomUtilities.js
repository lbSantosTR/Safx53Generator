const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ramdomValues = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1) + min) * 100);

}

const randomValueFromArray = (list) => {
    return random(0, list.length - 1);
}

const randomCnpjRaiz = (type) => {
    let campo = '';

    for (let i = 0; i < 8; i++){
        campo += random(1,9);
    }

    if (type === 'cpf'){
        //Irá sempre retornar o digito da UF de SP;
        return campo + '6';
    }
    if (type === 'cnpj'){
        return campo + '0001';
    }
    return null;
    
}

module.exports = {random, ramdomValues, randomValueFromArray, randomCnpjRaiz};