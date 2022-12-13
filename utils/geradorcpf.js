const { randomCnpjRaiz } = require('./randomUtilities');

const geraDigitoVerificadorCpf = () => {
    let cpf = randomCnpjRaiz('cpf');
    //let cpf = '384927876';
    
    const multiplicador = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    let soma = 0;
    let digito = 0;

    for(let i = 0; i <  cpf.length; i++){
        //console.log(`${cnpj[i]} x ${multiplicador[i]} : ${cnpj[i] * multiplicador[i]}`)
        soma += (Number(cpf[i]) * multiplicador[i+1]);
    }

    digito = (soma%11 >= 10 ? 0:11 - soma%11);
    cpf = String(cpf) + (digito >= 10 ? 0:digito);

    soma = 0;
    for(let i = 0; i <  cpf.length; i++){
        soma += (Number(cpf[i]) * multiplicador[i]);
    }
    digito = (soma%11 >= 10 ? 0:11 - soma%11);
    cpf = String(cpf) + (digito >= 10 ? 0:digito);

    return cpf;

}

module.exports = geraDigitoVerificadorCpf;