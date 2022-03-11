//common.js



$('header').load('inc.html header > div',headerFun);
$('footer').load('inc.html footer > div');

function headerFun(){
    const btnBurger = document.querySelector('.burger');
    const elBurger1 = document.querySelector('.burger1');
    const elBurger2 = document.querySelector('.burger2');
    const elHiddenMenu = document.querySelector('.hidden-menu');
    const subMenuTitle = document.querySelector('.sub-menu-title');
    const subMenu = document.querySelector('.sub-menu');

    const nav = document.querySelector('nav');
    const header = document.querySelector('header>div');
    const logo = document.querySelector('#logo');


    logo.src = './img/logo_ty2.png';
    nav.addEventListener('mouseenter',function(){
        header.style = 'background-color: #fff; ';
    });
    nav.addEventListener('mouseleave',function(){
        header.style = 'background-color: transparent ';
    });

    btnBurger.onclick = function(){
        elHiddenMenu.classList.toggle('hidden-menu-inactive');
        elHiddenMenu.classList.toggle('hidden-menu-active');
        elBurger1.classList.toggle('active');
        elBurger2.classList.toggle('active');

    };
    subMenuTitle.addEventListener('mouseenter', function(){
        subMenu.style = "visibility: visible"
    });
    subMenuTitle.addEventListener('mouseleave', function(){
        subMenu.style = "visibility: hidden"
    });
    subMenu.addEventListener('mouseenter', function(){
        subMenu.style = "visibility: visible"
    });
    subMenu.addEventListener('mouseleave', function(){
        subMenu.style = "visibility: hidden"
    });

    let pos = {y:0,dy:0,state:true}
    let scrollState = function(){
        pos.y = window.scrollY;
        pos.state = pos.y > pos.dy;
        pos.dy = pos.y;
    }

    window.addEventListener('scroll',function(){
        scrollState();
        if(pos.state){
            header.style = `transform: translateY(-100%)`;
        }else{
            header.style = `transform: translateY(0)`;
        }                        
    });

}



