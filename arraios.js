const arraio = [2, 3, 6, 7, 10, 1];

const maior = (arai) =>{
    let indexOfMajor = 0;
    for(let i in arai){
        if(arai[i]>= arai[indexOfMajor]) {indexOfMajor=i;}
        console.log(i);
        console.log(indexOfMajor + "aa");
    }
    return indexOfMajor;
}

console.log(maior(arraio))