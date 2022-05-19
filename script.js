const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

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

for (let i of position2){
  for(let k of dezDaysList){
      const create_li = document.createElement('li');
      create_li.innerHTML=k;
      i.appendChild(create_li)
  }  
}
numeros = document.querySelectorAll('.week-days li ul li')
for (let num  of numeros){num.style.display = "block"}
  
}


createDaysOfTheWeek();
createDaysOfThedaysOfTheWeek();
// Escreva seu código abaixo.