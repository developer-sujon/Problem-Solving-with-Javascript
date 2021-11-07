const str = 'Mohammad Sujon';

let strLengthCount = 0;

for(; ;){
    if (str.charAt(strLengthCount) === '') {
        break
    }else{
        strLengthCount++;
    }
}

console.log(strLengthCount);