const pc = document.querySelector('.pc-button');
const sp = document.querySelector('.sp-button');
const desgin = document.querySelector('.desgin');
pc.addEventListener('click',()=>{
    pc.classList.add('switch-active');
    sp.classList.remove('switch-active');
    desgin.innerHTML='<picture> <source src="../images/Works/pasta/pcFull-pasta.avif"> <img src="../images/Works/pasta/pcFull-pasta.webp" alt="制作したデザイン"></picture>';
    desgin.classList.remove('sp-size');
});
sp.addEventListener('click',()=>{
    sp.classList.add('switch-active');
    pc.classList.remove('switch-active');
    desgin.innerHTML='<picture> <source src="../images/Works/pasta/spFull-pasta.avif"> <img src="../images/Works/pasta/spFull-pasta.webp" alt="制作したデザイン"></picture>';
    desgin.classList.add('sp-size');
});


