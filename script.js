const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const liOfMain = document.querySelectorAll('main ul li');

const resetText = (event) =>{
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}
// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?

// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
const selecting = (e) =>{
    if(e.target.classList=='tech'){e.target.classList=''; }
    else
    {
    for(let i of e.target.parentNode.childNodes)i.classList='';
    e.target.classList='tech';
    }

const selecionado= document.querySelector('.tech');
selecionado.addEventListener('dblclick', resetText);
}
    
for(let i of liOfMain){
i.addEventListener('click',selecting);
}
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
const changeTextOfTech= (e) => {
    document.querySelector('.tech').innerText=e.target.value;
}
input.addEventListener('input',changeTextOfTech);
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
const goToMyPage = () =>{
  window.open('https://github.com/luisArthurRodriguesDaSilva')
}
myWebpage.addEventListener('dblclick',goToMyPage)
//myWebpage.addEventListener('dblclick',goToMyPortfolio)
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
const changeColor = (e) =>{
  e.target.style.color='red';
}
const returnColor = (e) =>{
  e.target.style.color='white';
}
myWebpage.addEventListener('mouseover',changeColor);
myWebpage.addEventListener('mouseleave',returnColor);
// Segue abaixo um exemplo do uso de event.target:




// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.