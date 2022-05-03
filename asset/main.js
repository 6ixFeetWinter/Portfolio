
const winH = window.innerHeight;
const arrow = document.querySelector('.scroll-down');
let arrowpos = arrow.getBoundingClientRect().top + window.pageYOffset;
window.addEventListener('resize',()=>{
    let arrowpos = arrow.getBoundingClientRect.top + window.pageYOffset; 
    console.log(arrowpos);
});
window.addEventListener('scroll',()=>{
    const scroll = window.scrollY
    if(scroll > (arrowpos - (winH / 1.1))){
        arrow.classList.remove('scroll-active');
    }
    else{
        arrow.classList.add('scroll-active');
    }    
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