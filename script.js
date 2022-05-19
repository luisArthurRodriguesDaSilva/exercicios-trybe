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
  for (i in weekDays){
  const sday = document.createElement('ul');
  sday.classList='sday';
  const wday = document.querySelectorAll('.week-days li');
  wday[i].appendChild(sday);
  } 
  for (i in weekDays){
    for (let k=0;k<4;k+=1){
    const nwday = document.querySelectorAll('.week-days li .sday');

    if(typeof dezDaysList[i+(k*7)] == 'number'){
    
    const dday=document.createElement('li');
    dday.classList = 'day';  
    dday.style.display = 'block';
    dday.innerHTML =  dezDaysList[i+(k*7)];
    nwday[k].appendChild(dday);
      }
    }
  }
}


createDaysOfTheWeek();
createDaysOfThedaysOfTheWeek();
// Escreva seu código abaixo.