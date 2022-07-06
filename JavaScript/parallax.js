function e(targetClass, offset, horizontal=false){
    const target = document.querySelector(targetClass);
    var scrolled = window.pageYOffset;
    var rate = scrolled * -offset;
    if (horizontal==false){
    target.style.transform = 'translate3d(0px, '+rate+'px, 0px)';
    }
    else{
    target.style.transform = 'translate3d('+rate+'px,0px, 0px)';
    }
}

window.addEventListener('scroll', ()=>{
    e('#stone', 0.6);
})

window.addEventListener('scroll', ()=>{
    e('.imgz', 0.1);
})

window.addEventListener('scroll', ()=>{
    e('#dominion', -0.4, true);
})

window.addEventListener('scroll', ()=>{
    e('#respect', 1);
})
window.addEventListener('scroll', ()=>{
    e('#jw1', 0.2);
})
window.addEventListener('scroll', ()=>{
    e('.box-2 img', 0.1);
})