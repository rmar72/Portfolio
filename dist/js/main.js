//Select DOM List Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener( 'click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach( (item) => item.classList.add('show'));

        //Set Menu State
        showMenu = true;
    }else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach( (item) =>item.classList.remove('show'));
        //Set Menu State
        showMenu = false;
    }
}

// =====  read more/less script  =====
edu_descriptions = [
    `Apprenticeship completion for Information Technologist in accordance and established by the Secretary of Labor of Colorado.`,
    `Received a certificate for Web Development where I applied my knowledge and competed for a spot against another 14 professionals with degrees. Being the little fish among the group I surprised myself and made it to the top ranks.`,
    `In 2016 I took the self taught route and embarked on learning web development from zero. Since then, I have received numerous certificates from different online learning platforms. My main focus has always been to learn from the best. Nowadays, I'm more caught up with my own projects and the open source community.`
];

let cards = document.querySelectorAll('.card');

function addToggler(card, txt){
    const paragraph = card.querySelector('span');
    const node = document.createElement('a');
    node.className = 'anchorToggler';
    card.appendChild(node);
    paragraph.innerText = txt.substring(0, 125);

    if(txt.length > 125)
        node.innerText = '...Read More';

    node.addEventListener('click', function(){
        if(this.textContent == '...Read More'){
            paragraph.innerText = txt;
            this.textContent = "^ Less";
        } else {
            paragraph.innerText = txt.substring(0, 125);
            this.textContent = '...Read More';
        }
    });
}

cards.forEach((card, i) => addToggler(card, edu_descriptions[i]) );





// =====  project items script  =====

//const pItem = document.querySelector('.pItem');
//const pImg = document.querySelector('.pImg');
//const proDeet = document.querySelector('.pro-details');


// ------------------------ 1
// ------------------------ attempting to change visibility, but no luck! ---------------
// pItem.addEventListener('mouseover', ()=>{
//     pItem.querySelector('h2').style.visibility = "visible";
//     pItem.querySelector('.ingo').style.visibility = "hidden";
// });

// pItem.addEventListener('mouseout', ()=>{
//     pItem.querySelector('h2').style.visibility = "hidden"
//     pItem.querySelector('.ingo').style.visibility = "visible";
// });


// ------------------------ 2
// ------------------------ learning to use  MutationObserver to listen for style changes
// ------------------------ 
// const img = document.querySelector(".pImg");
// img.addEventListener('transitionend', () => {
//     img.style.zIndex = -1;
// })

// img.addEventListener('transitionstart', () => {
//     img.style.zIndex = 1;
// })

// var observer = new MutationObserver(function(mutations) {
//     mutations.forEach(function(mutationRecord) {
//         console.log('style changed!');
//     });    
// });

// var target = document.querySelector(".pImg");
// console.log(target)
// observer.observe(target, { attributes : true, attributeFilter : ['style'] });





// ------------------------ 3
// ------------------------ learning too use transition delay ---------
// proDeet.addEventListener('mouseover', function(){
//     pItem.querySelector('img').style.opacity = 0;
//     // pItem.querySelector('img').style.transitionDelay = "2s";
//     // console.log(this.querySelector('img').style)
// });

// proDeet.addEventListener('mouseout', function(){
//     pItem.querySelector('img').style.opacity = 1;
//     // pItem.querySelector('img').style.transitionDelay = "1ms";
//     // console.log(this.querySelector('img').style)
// });





// ------------------------ 4
// ------------------------jquery fading attempts, but flickering on hover-----------------------
// $(document).ready(function(){
//     // $(".pImg").hover(function(){
//     //     $(this).fadeOut("slow", 0);
//     //     $(".pro-details").fadeIn("slow", 0)
//     // });
//     // $(".pro-details").mouseout(function(){
//     //     $(this).fadeOut("slow", 0)
//     //     $(".pImg").fadeIn("slow", 0)
//     // });


//     $(".pItem").hover(function(){
//         $(".pro-details").fadeIn("slow", 0)
//     });

// });




// ------------------------ 5
// ------------------------ attempting to change opacity with interval, but still flickering on hover
// pItem.addEventListener('mouseover', unfade(proDeet))

// function unfade(element) {
//     var op = 0.1;  // initial opacity
//     element.style.display = 'block';
//     var timer = setInterval(function () {
//         if (op >= 1){
//             clearInterval(timer);
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op += op * 0.1;
//     }, 10);
// }

//pItem.addEventListener('mouseout', unfade( pItem.querySelector('img')))



// ------------------------ 6
// ------------------------ trying interval to change opacity, but no luck
// ------------------------ trying manual loopfor same ^ but no luck
// ------------------------ trying to see if sync code order I'd be able to see a transition but no luck
// proDeet.addEventListener('mouseover', ()=>{
//     var op = 0.1;
    // if(op< 1){

        // for(var i = 1; i<10; i++){
        //     console.log(i)
        //     proDeet.style.opacity += op;
        // }

        // proDeet.style.opacity = 0.2;
        // proDeet.style.opacity = 0.3;
        // proDeet.style.opacity = 0.4;
        // proDeet.style.opacity = 0.5;
        // proDeet.style.opacity = 1;


        // var timer = setInterval(function(){
        //     if(op >= 1)
        //         clearInterval(timer)
            
        //     proDeet.style.opacity = op;
        //     proDeet.style.filter = 'alpha(opacity=' + op * 100 + ")";
        //     op += op * 0.1;
        //     console.log(proDeet.style.opacity)
        // }, 1)
    // }

        
// });
// proDeet.addEventListener('mouseout', ()=>{
//     proDeet.style.opacity = 0;
// });



// ------------------------ 7
// ------------------------ attempting to use css + this js code to handle opacity, but still flickering
// pImg.addEventListener('mouseover', ()=>{
//     console.log(1)
//     proDeet.style.opacity = 1;
// });
// pImg.addEventListener('mouseout', ()=>{
//     proDeet.style.opacity = 0;
// });