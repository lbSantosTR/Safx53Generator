const fs = require('fs');
const path = require('path');
const { COD_FIS_JUR_OBJECT } = require('./regrasCampos.json');
const safx53Reinf = require('./safx53_model.js');
const safx531Reinf = require('./safx531_model.js');
const safx532Reinf = require('./safx532_model.js');

const formatDayLessThenTen = (dia) => {
    if (dia < 10){
        return '0' + dia;
    }
    return dia;
}

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


const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ramdomValues = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1) + min) * 100);

}

const randomValueFromArray = (list) => {
    return random(0, list.length - 1);
}

const exportObject = (object, fileName) => {
        const allLinesFromObject = Object.values(object);
        let line = '';
        allLinesFromObject.forEach((value,index)=>{
            
            if (index === allLinesFromObject.length - 1) {
                line += value;
                return;
            }
            line += value + '\t'
        })
        fs.appendFileSync(path.join(__dirname, 'output',fileName + '.txt'),line + '\r','utf8');
      
        
}

const rules = (empresa, estab, mesAno) => {
    const espacoVazio = ' ';
    const zero = '0';
    
    let docNumber = 1;

    for (let FIS_JUR of COD_FIS_JUR_OBJECT) {
        safx53Reinf.COD_EMPRESA = empresa;
        safx53Reinf.COD_ESTAB = mascaraString(6, estab);
        safx53Reinf.DATA_MOVTO = mesAno.substring(2, 6) + mesAno.substring(0, 2) + formatDayLessThenTen(random(1, 30));
        safx53Reinf.IND_FIS_JUR = FIS_JUR.IND_FIS_JUR;
        safx53Reinf.COD_FIS_JUR = mascaraString(14,FIS_JUR.COD_FIS_JUR);
        safx53Reinf.NUM_DOCFIS = mascaraString(12, docNumber);
        safx53Reinf.COD_DARF = FIS_JUR.COD_DARF.darf;
        safx53Reinf.ANO_COMPETENCIA = mesAno.substring(2, 6);
        safx53Reinf.MES_COMPETENCIA = mesAno.substring(0, 2);
        safx53Reinf.VLR_BRUTO = mascaraNumber(17, ramdomValues(100, 900));
        safx53Reinf.ALIQUOTA = mascaraNumber(5, FIS_JUR.COD_DARF.aliq * 100);
        safx53Reinf.VLR_IR_RETIDO = mascaraNumber(17, ((Number(safx53Reinf.VLR_BRUTO) / 100) * (Number(safx53Reinf.ALIQUOTA) / 100) / 100).toFixed(2));
        safx53Reinf.COD_NAT_REND = FIS_JUR.COD_NAT_REND;
        exportObject(safx53Reinf, 'safx53');

        safx531Reinf.COD_EMPRESA = empresa;
        safx531Reinf.COD_ESTAB = mascaraString(6, estab);
        safx531Reinf.DATA_MOVTO = safx53Reinf.DATA_MOVTO;
        safx531Reinf.IND_FIS_JUR = FIS_JUR.IND_FIS_JUR;
        safx531Reinf.COD_FIS_JUR = mascaraString(14,FIS_JUR.COD_FIS_JUR);
        safx531Reinf.NUM_DOCFIS = mascaraString(12, docNumber);
        safx531Reinf.COD_DARF = FIS_JUR.COD_DARF.darf;
        safx531Reinf.VLR_DESP_JUD = mascaraNumber(17, ramdomValues(100, 900));
        safx531Reinf.VLR_DESP_ADVOGADO = mascaraNumber(17, ramdomValues(100, 900));
        safx531Reinf.VLR_N_RETIDO_IR = mascaraNumber(17, ramdomValues(100, 900));
        if (safx531Reinf.IND_TIPO_REND === '3'){
            safx531Reinf.VLR_DEP_JUD_IR = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf.VLR_COMP_ANO_CAL_IR = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf.VLR_COMP_ANO_ANT_IR = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf.VLR_REND_EXIG_SUSP_IR = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf. VLR_BASE_SUSP_IR = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf.VLR_BASE_SUSP_CSLL = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf. VLR_N_CSLL = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf.VLR_DEP_CSLL = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf.VLR_BASE_SUSP_COFINS = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf.VLR_N_COFINS = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf.VLR_DEP_COFINS = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf.VLR_BASE_SUSP_PIS_PASEP = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf.VLR_N_PIS_PASEP = mascaraNumber(17, ramdomValues(100, 900));
            safx531Reinf.VLR_DEP_PIS_PASEP = mascaraNumber(17, ramdomValues(100, 900));
        }
        exportObject(safx531Reinf, 'safx531');

        safx532Reinf.COD_EMPRESA = empresa;
        safx532Reinf.COD_ESTAB = mascaraString(6, estab);
        safx532Reinf.DATA_MOVTO = safx53Reinf.DATA_MOVTO;
        safx532Reinf.IND_FIS_JUR = FIS_JUR.IND_FIS_JUR;
        safx532Reinf.COD_FIS_JUR = mascaraString(14,FIS_JUR.COD_FIS_JUR);
        safx532Reinf.NUM_DOCFIS = mascaraString(12, docNumber);
        safx532Reinf.IND_TIPO_REND = safx531Reinf.IND_TIPO_REND;
        safx532Reinf.IND_TP_PROC_ADJ = safx531Reinf.IND_TP_PROC_ADJ;
        safx532Reinf.NUM_PROC_ADJ = safx531Reinf.NUM_PROC_ADJ;
        safx532Reinf.COD_SUSP = safx531Reinf.COD_SUSP;

        exportObject(safx532Reinf, 'safx532');

        docNumber++
    }

}

rules('076', 'ALINE', '122022');
