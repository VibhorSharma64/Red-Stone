function animateOnScroll(target, triggerPosition, activeClass, reversible = false){
    let targetEl = document.querySelectorAll(target);
    targetEl.forEach(el=>{
      let targetElTop = el.getBoundingClientRect().top;
      let windowHeight = window.innerHeight;
      if (targetElTop <= windowHeight * triggerPosition) {
        el.classList.add(activeClass);
      }
      else if (targetElTop >= windowHeight* triggerPosition && reversible) {
        el.classList.remove(activeClass);
        // el.classList.add('changed-2');
      }
    })
  }



window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-2', -0.5, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-3', 0.1, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-4', 0.2, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-5', 0.3, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-6', 0.4, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-7', 0.5, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-8', 0.6, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-9', 0.7, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-10', 0.8, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-11', 0.9, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-12', 1.1, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-13', 1.2, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-14', 1.3, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-15', 1.4, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-16', 1.5, 'changed', true)
})
window.addEventListener('scroll', ()=>{
    animateOnScroll('.first-17', 1.6, 'changed', true)
})

