const text=document.querySelector('.text'),
        deBtnClick=document.querySelector('#de-btn'),
        ruBtnClick=document.querySelector('#ru-btn'),
        textDe=document.querySelector('.text-de'),
        textRu=document.querySelector('.text-ru'),
        textEng=document.querySelector('.eng-text');

//hide(textRu)
//hide(textDe)

/* deBtnClick.onclick=function(){
    console.log('btnDE')
hide(textEng)
hide(textRu)
show(textDe)
ruBtnClick.style.color='black';
deBtnClick.style.color='yellow';
}

ruBtnClick.onclick=function(){
    console.log('btnRU')
    hide(textEng)
    hide(textDe)
    show(textRu)
    deBtnClick.style.color='black';
    ruBtnClick.style.color='yellow';
} */

function hide(element) {
    element.style.display = "none"
}
        
function show(element) {
    element.style.display = "block";
    element.classList.add('transition');
}

