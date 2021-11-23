const string = '  Mohammad Sujon           Islam.'

function whiteSpace(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == ' ' && str[i - 1] !== ' ') {
            count ++
        }
    }

    return count;
}

console.log(whiteSpace(string));