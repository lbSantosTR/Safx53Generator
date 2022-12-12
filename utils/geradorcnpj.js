const {randomCnpjRaiz} = require('./randomUtilities')

const geraDigitoVerificador = () => {
    let cnpj = randomCnpjRaiz();
    const multiplicador = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;
    let digito = 0;
    for(let i = 0; i <  cnpj.length; i++){
        //console.log(`${cnpj[i]} x ${multiplicador[i]} : ${cnpj[i] * multiplicador[i]}`)
        soma += (Number(cnpj[i]) * multiplicador[i+1]);
    }
    digito = soma%11 < 2? 0:11 - soma%11;
    cnpj = String(cnpj) + (digito === 10? '0':String(digito));
    soma = 0;
    digito = 0;
    for(let i = 0; i <  cnpj.length; i++){
        soma += (Number(cnpj[i]) * multiplicador[i]);
    }
    digito = (soma%11 < 2? 0: 11 - soma%11);
    cnpj = String(cnpj) + (digito === 10? '0':String(digito));
    return cnpj;
}

module.exports = geraDigitoVerificador;