table.onmouseover = function(event) {
    let target = event.target;
    target.style.background = 'pink';
};
  
  table.onmouseout = function(event) {
    let target = event.target;
    target.style.background = '';
};

let ne=document.querySelector('.NE').innerHTML="DIRECTION";
ne.addEventListener('click',()=>{
    console.log('northEast');
})