const text = document.querySelector('#respect');
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = '';

for( let i=0;i<splitText.length;i++){
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(() => {
    setInterval(onTick, 40)
}, 4000); ;

function onTick(){
    const span = text.querySelectorAll("span")[char];
    span.classList.add('fade');
    char++;
    if(char=== splitText.length){
        complete();
        return;
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}