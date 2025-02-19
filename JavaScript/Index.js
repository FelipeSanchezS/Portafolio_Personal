//Carrusel de imagenes
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

//siguiente imagen
next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
//antetior imagen
prev.onclick = function(){
    if(active - 1 > lengthItems){
        active = 0;
    }else{
        active = active - 1;
    }
    reloadSlider();
}

function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = - checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
}

//Scroll
function scrollToSection(sectionId){
    document.getElementById(sectionId).scrollIntoView({behavior:"smooth"})
}

.dots.forEach(list, key)=>{
    list.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
}