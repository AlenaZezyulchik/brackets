module.exports = function check(str, bracketsConfig) {
    var bracketsConfig = { '[': ']', '(': ')', '<': '>', '{': '}' };

    var result = str.split('').reduce(function(acc, curr) {

        if (~Object.keys(bracketsConfig).indexOf(curr)) {
            acc.push(curr)
        }
        if (~Object.values(bracketsConfig).indexOf(curr) && bracketsConfig[acc[acc.length - 1]] === curr) {
            acc.length = --acc.length;
        }
        return acc;
    }, []);
    return !Boolean(result.length);
}