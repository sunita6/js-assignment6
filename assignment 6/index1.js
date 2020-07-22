let  arrColor=['blue','red','green','pink'];
let bg=document.getElementById('bg');
function changeBg(){
  const arrColorLength=arrColor.length;
  let random=Math.trunc(Math.random()*arrColorLength);
  console.log(arrColor[random]);
  bg.style.background=arrColor[random];
}
setInterval(changeBg,5000);