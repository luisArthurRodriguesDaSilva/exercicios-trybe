const cores=['red','green','blue'];
var i=0
const div_de_cima = document.querySelector(".emergency-tasks div");
function change_color(){
    div_de_cima.style.background=cores[i%3]
    i+=1;
}
window.setInterval(change_color,10000);