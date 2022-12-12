const formatDayLessThenTen = (dia) => {
    if (dia < 10){
        return '0' + dia;
    }
    return dia;
}

module.exports = formatDayLessThenTen;