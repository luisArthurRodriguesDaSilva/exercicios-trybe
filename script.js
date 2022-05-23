
if (localStorage['darkmode'] == 'undefined'){
    
}
const bode =document.querySelector('body');

const darkLight = document.querySelector('#dark-light');

const changeDarkLightMode = (e) =>{
    console.log('passei');
    const dls = document.querySelector('.material-symbols-outlined');
    if(dls.innerText=='dark_mode') {
        dls.innerText= 'light_mode';
        gradient='white';
        dls.style.color = 'black';
    }
    else {
        dls.innerText =  'dark_mode';
        gradient='black';

        dls.style.color = 'white';
    }
    
    bode.style.backgroundImage= gradient;
                bode.style.MozBackground = gradient;
                bode.style.WebkitBackground = gradient;
                bode.style.background = gradient;
    }


darkLight.addEventListener('click',changeDarkLightMode);