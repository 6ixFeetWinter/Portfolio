const pc = document.querySelector('.pc-button');
const sp = document.querySelector('.sp-button');
const desgin = document.querySelector('.desgin');
pc.addEventListener('click',()=>{
    pc.classList.add('switch-active');
    sp.classList.remove('switch-active');
    desgin.innerHTML='<picture><img src="../images/Works/Scnav/PC SS.png" alt="Scnavのファーストビュー"></picture>';
    desgin.classList.remove('sp-size');
});
sp.addEventListener('click',()=>{
    sp.classList.add('switch-active');
    pc.classList.remove('switch-active');
    desgin.innerHTML='<picture><img src="../images/Works/Scnav/SP SS.png" alt="Scnavのファーストビュー"></picture>';
    desgin.classList.add('sp-size');
});


