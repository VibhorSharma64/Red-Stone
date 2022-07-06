function animateOnScroll(target, triggerPosition) {
    let targetEl = document.querySelectorAll('.section-2');
    targetEl.forEach(el => {
        let targetElTop = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        let targetEf = document.querySelectorAll(target);  
        if (targetElTop <= windowHeight * triggerPosition) {
            change(target)
        }
        // else if (targetElTop >= windowHeight* triggerPosition && reversible) {
        //     el.classList.remove(activeClass);
        // }
    })
}

function change(target){
    let targetEff = document.querySelectorAll(target);
    targetEff.classList.add('ucolor');

}
window.addEventListener('scroll', () => {
    animateOnScroll('.left-side', 0)
})
// window.addEventListener('scroll', () => {
//     animateOnScroll('.right-side', 0, 'ucolor', true)
// })
// window.addEventListener('scroll', () => {
//     animateOnScroll('.l-left-side', 0, 'ucolor', true)
// })
