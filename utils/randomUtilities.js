const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const ramdomValues = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1) + min) * 100);

}

const randomValueFromArray = (list) => {
    return random(0, list.length - 1);
}

module.exports = {random, ramdomValues, randomValueFromArray};