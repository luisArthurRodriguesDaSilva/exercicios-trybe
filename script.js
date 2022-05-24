
const dls = document.querySelector('.material-symbols-outlined');
if (localStorage.getItem('darkmode') == 'null'){
    localStorage.setItem('darkmode',false);
}
const bode =document.querySelector('body');

const darkLight = document.querySelector('#dark-light');

const changeBackgrounds = (gradient) =>{
    bode.style.backgroundImage= gradient;
    bode.style.MozBackground = gradient;
    bode.style.WebkitBackground = gradient;
    bode.style.background = gradient;
}

if(localStorage.getItem('darkmode') == 'true'){

    dls.innerText =  'dark_mode';
    gradient='black';
    dls.style.color = 'white';

    changeBackgrounds(gradient);
}

const changeDarkLightMode = (e) =>{
    console.log('passei');
    


    if(dls.innerText=='dark_mode') {
        dls.innerText= 'light_mode';
        changeBackgrounds('white');
        dls.style.color = 'black';
        localStorage.setItem('darkmode',false);
    }
    else {
        dls.innerText =  'dark_mode';
        changeBackgrounds('black');
        dls.style.color = 'white';
        localStorage.setItem('darkmode',true);
    }

    }


darkLight.addEventListener('click',changeDarkLightMode);