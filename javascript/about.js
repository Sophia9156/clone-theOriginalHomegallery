
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const section = document.querySelectorAll('.sec');

const topBtn = document.querySelector('.top-button');

let num = 1;

let pos = {y:0,dy:0,state:true}
let scrollState = function(){
    pos.y = window.scrollY;
    pos.state = pos.y > pos.dy;
    pos.dy = pos.y;
}

section[0].style = `height: 100vh; visibility: visible`;

let exe;
window.onscroll = function(){
    scrollState();

    clearTimeout(exe);
    exe = setTimeout(function(){
        if(pos.state){
            if(num < section.length-1) num++;
            section.forEach(function(){
                section[num-1].style = `height: 0vh; visibility: hidden`;
                section[num].style = `height: 100vh; visibility: visible`;
            })
        }else{
            if(num > 1) num--;
            section.forEach(function(){
                section[num+1].style = `height: 0vh; visibility: hidden`;
                section[num].style = `height: 100vh; visibility: visible`;
            })
        }
        

    },100);
    
}

topBtn.onclick = function(){
    main.style = `transform: translateY(0vh)`;
    footer.style = `transform: translateY(0vh)`;
    num = 0;

    window.scrollTo({
        left: 0,
        top: 0
    });
}