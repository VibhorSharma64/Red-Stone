function animateOnScroll(target, triggerPosition, activeClass, reversible = false) {
    let targetEl = document.querySelectorAll(target);
    targetEl.forEach(el => {
        let targetElTop = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (targetElTop <= windowHeight * triggerPosition) {
            el.classList.add(activeClass);
        }
        else if (targetElTop >= windowHeight && reversible) {
            el.classList.remove(activeClass);
        }
    })
}

window.addEventListener('scroll', () => {
    animateOnScroll('.section-2', 0, 'change', true)
})
window.addEventListener('scroll', () => {
    animateOnScroll('#juju', 1, 'jojo', true)
})
window.addEventListener('scroll', () => {
    animateOnScroll('.box-1 h1', 1, 'joji', true)
})
window.addEventListener('scroll', () => {
    animateOnScroll('#qwq', 1, 'hera', true)
})
window.addEventListener('scroll', () => {
    animateOnScroll('.peeche', 1, 'peeche-1', true)
})
window.addEventListener('scroll', () => {
    animateOnScroll('#shin', 1, 'megashin', true)
})
// window.addEventListener('scroll', () => {
//     animateOnScroll('.left-side', 0.4, 'ucolor', true)
// })
// window.addEventListener('scroll', () => {
//     animateOnScroll('.right-side', 0.4, 'ucolor', true)
// })
// window.addEventListener('scroll', () => {
//     animateOnScroll('.l-left-side', 0.4, 'ucolor', true)
// })

