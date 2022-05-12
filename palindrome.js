const palavra = 'ovo'

const reverter = (word)=>{
    return word.split("").reverse().join("");
}
console.log(reverter(palavra))

if (palavra == reverter(palavra)){console.log('true');}
else console.log('não kct')