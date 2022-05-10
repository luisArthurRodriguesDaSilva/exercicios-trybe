const roman_numbers={
    'i':1,
    'v':5,
    'x':10,
    'l':50,
    'c':100,
    'd':500,
    'm':1000,
    'v':5000,
    'x_':1000,
    'l_':50000,
    'c_':100000,
}
const number='xxxx'

const somar = (i)=>{somatorio+=roman_numbers[i]}

const translater=(number)=>{
    let somatorio=0;
    for(let i=0;i<=number.lenght;i++){
        somar(i);

        console.log(i);
        console.log(roman_numbers[i]);
        console.log(somatorio);
    }
    return somatorio;

}

console.log(translater(number));
console.log(roman_numbers['x']);