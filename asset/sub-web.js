document.querySelector('.toggle-button').addEventListener('click',()=>{
    document.querySelector('nav').classList.toggle('menutranslate');
    document.querySelector('.menuline').classList.toggle('maintranslate');
    document.querySelector('.content').classList.toggle('maintranslate');
    document.querySelector('.menuButton').classList.toggle('active');
    document.querySelector('.global-title').classList.toggle('maintranslate');
});
document.querySelector('.menuButton').addEventListener('mouseover',()=>{
    document.querySelector('.menuButton').classList.add('hover');
})
document.querySelector('.menuButton').addEventListener('mouseout',()=>{
    document.querySelector('.menuButton').classList.remove('hover');
})
