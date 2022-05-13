
const winH = window.innerHeight;
const arrow = document.querySelector('.scroll-down');
let arrowpos = arrow.getBoundingClientRect().top + window.pageYOffset;
window.addEventListener('resize',()=>{
    let arrowpos = arrow.getBoundingClientRect.top + window.pageYOffset; 
    console.log(arrowpos);
});
window.addEventListener('scroll',()=>{
    const scroll = window.scrollY
    if(scroll > (arrowpos - (winH / 1.5))){
        arrow.classList.remove('scroll-active');
    }
    else{
        arrow.classList.add('scroll-active');
    }    
});
const label01 = document.querySelector('.label01');
const label02 = document.querySelector('.label02');
const label03 = document.querySelector('.label03');
label01.addEventListener('click',()=>{
    label01.classList.add('tabActive');
    label02.classList.remove('tabActive');
    label03.classList.remove('tabActive');
});
label02.addEventListener('click',()=>{
    label01.classList.remove('tabActive');
    label02.classList.add('tabActive');
    label03.classList.remove('tabActive');
});
label03.addEventListener('click',()=>{
    label01.classList.remove('tabActive');
    label02.classList.remove('tabActive');
    label03.classList.add('tabActive');
});
document.querySelector('.toggle-button').addEventListener('click',()=>{
    document.querySelector('nav').classList.toggle('menutranslate');
    document.querySelector('.menuline').classList.toggle('maintranslate');
    document.querySelector('.content').classList.toggle('maintranslate');
    document.querySelector('.menuButton').classList.toggle('active');
    document.querySelector('.global-title').classList.toggle('maintranslate');
    document.querySelector('.bg').classList.toggle('maintranslate');
});
document.querySelector('.menuButton').addEventListener('mouseover',()=>{
    document.querySelector('.menuButton').classList.add('hover');
})
document.querySelector('.menuButton').addEventListener('mouseout',()=>{
    document.querySelector('.menuButton').classList.remove('hover');
})
