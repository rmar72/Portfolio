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