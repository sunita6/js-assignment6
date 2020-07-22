let username=prompt("enter the name");
let bodybg=document.getElementById('bodybg');
let h2name=document.getElementById('h2name');
let h2clock=document.getElementById('clock');
let btn=document.getElementById('btn');
h2name.innerText='WELCOME ${username}';
btn.onClick=()=>{
  bodybg.classList.toggle('bg');
}
function clock(){
  let date=new Date();
  let time=date.toLocaleTimeString();
  h2clock.innerText=time;
}
setInterval(clock,1000)