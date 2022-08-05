module.exports = function check(str, bracketsConfig) {
    let array = [];
    let brackets = Object.fromEntries(bracketsConfig);
    let arrStr = str.split('');
    for (let item of arrStr) {
        if (array[0] === item) {
            array.shift();
        } else if (brackets[item]) {
            array.unshift(brackets[item]);
        } else {
            return false;
        }
    }
    if (array.length === 0) return true;
    else return false;
}