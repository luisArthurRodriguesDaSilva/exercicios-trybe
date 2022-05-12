const roman_numbers={
    'i':1,
    'v':5,
    'x':10,
    'l':50,
    'c':100,
    'd':500,
    'm':1000,
    'v_':5000,
    'x_':1000,
    'l_':50000,
    'c_':100000,
}
const numbero='ix'

let somatorio=0;
const sumer = (x,i)=>{somatorio+=roman_numbers[x[i]]; return somatorio;}

const transcribe = (number)=>{
    console.log(number)
    for(let i=0;i<=number.length-1;i++){

        var act_let = roman_numbers[number[i]];
        if(i==0){sumer(number,i);}
        else {
            var ant_let = roman_numbers[number[i-1]];
            if(act_let > ant_let){
                sumer(number,i);
            somatorio-=2*ant_let;
            console.log("ant_let=" + ant_let);
            }else{sumer(number,i); console.log("im here bro");}
        }
    }
    return somatorio;
}

console.log(roman_numbers['x']);
console.log(transcribe('xiv'));