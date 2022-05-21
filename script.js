const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,01,02];
const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const divOfHolydaysBtn = document.querySelector('.buttons-container');
//const allnumbersdays = document.querySelectorAll('.day'); //aqui n
function createDaysOfTheWeek() {
  
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function createDaysOfThedaysOfTheWeek() {
  const position = document.querySelectorAll('.week-days li'); 
  for (let i of position){
    const create_ul = document.createElement('ul');
    i.appendChild(create_ul)
}

const position2 = document.querySelectorAll('.week-days li ul');

for (let i in position2){
  for(let k in dezDaysList){
    if(typeof dezDaysList[parseInt(k)*7+parseInt(i)] == 'number'){

      const create_li = document.createElement('li');
      create_li.innerHTML=dezDaysList[parseInt(k)*7+parseInt(i)];
      create_li.classList = 'day';
      let parada =  dezDaysList[parseInt(k)*7+parseInt(i)];
      if(parseInt(i) == 5) {create_li.classList += ' friday';}
      if(parseInt(parada) == 24 || parseInt(parada)== 25 || parseInt(parada) == 31) {create_li.classList += ' holiday';}
      position2[parseInt(i)].appendChild(create_li);
    
    }
  }
}

numeros = document.querySelectorAll('.week-days li ul li');
for (let num  of numeros){num.style.display = "block";}
}

const createBtnCalled= (nome,classe) =>{

  const create_btn = document.createElement('button')
  create_btn.classList = classe;
  create_btn.innerText = nome;
  divOfHolydaysBtn.appendChild(create_btn);

}

const verifyExistence = (thing,arraio) =>{
  for (let i of arraio){
    if(thing == i) return true
  }
  return false
}

const changeHolydaysColor = () =>{
  const holydays = document.querySelectorAll('.holiday');
  for (let i of holydays){
    if (verifyExistence('activholy',i.classList) )i.classList.remove('activholy');
    else i.classList.add('activholy');}
}


const changeFridaysColor = () =>{
  const fridays = document.querySelectorAll('.friday');
  for (let i of fridays){
    if (verifyExistence('activfri',i.classList) )i.classList.remove('activfri');
    else i.classList.add('activfri');}
}

const makeItBigger = (e) => {
  e.target.style.transform = 'scale(2.0)'
}
const makeItsNormal = (e) => {
  e.target.style.transform = 'scale(1)'
}

createDaysOfTheWeek();
createDaysOfThedaysOfTheWeek();
createBtnCalled('Feriados','btn-holiday');
createBtnCalled('sextou','btn-friday');


const btnOfHolidays = document.querySelector(".btn-holiday");
btnOfHolidays.addEventListener("click",changeHolydaysColor);

const btnOfFridays = document.querySelector(".btn-friday");
btnOfFridays.addEventListener("click",changeFridaysColor);

const allnumbersdays = document.querySelectorAll('.day'); //colocar aqui funciona
for(let i of allnumbersdays){
  i.addEventListener('mouseover',makeItBigger);
  i.addEventListener('mouseleave',makeItsNormal);
}

const addTask = (task) => {

  const createtask = document.createElement('a');
  createtask.innerText=task;
  createtask.classList = 'task';  
  document.querySelector('.my-tasks').appendChild(createtask);

}

const changeColorOfTasks = (e) =>{
  if(verifyExistence('selected',e.target.classList)) e.target.classList.remove('selected');
  else e.target.classList.add('selected');
}

addTask('acordar');
addTask('dormir');

const tasks= document.querySelectorAll('.task');

for(let i of tasks){
  i.addEventListener('click',changeColorOfTasks);
}



