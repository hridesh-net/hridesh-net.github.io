/* ####### Menu Show Y Hidden ####### */
const navMenu = document.getElementById('nav-menu');
const navTog = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* ####### MENU SHOW ####### */
// Validation if constant exists
if (navTog) {
    navTog.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
/* ####### MENU HIDDEN #######*/
// Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/* ####### REMOVE MENU MOBILE #######*/
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // when we click on each nav_link, we remove the show-menu class 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


// ############ ACCORDION SKILLS ##############
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills_content skills_close'
    }
    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})


/* ########### QUALIFICATION TABS ########### */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active')
        })
        target.classList.add('qualification_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active')
        })
        tab.classList.add('qualification_active')
    })
})


/* ################# PORTFOLIO SWIPER ############## */
let swiper = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

// ############# PAGE THEME #############
// const pallet = document.getElementsByClassName('color_pallet');

// function toggleThemes() {
//     let colorClass = this.parentNode.className

//     for (i = 0; i < pallet.length; i++) {
//         pallet[i].className = 'color_pallet nav_icon'
//     }
//     if (colorClass === 'color_pallet nav_icon') {
//         this.parentNode.className = 'color_pallet nav_icon active_color'
//     }
// }

// pallet.forEach((elem) => {
//     elem.addEventListener('click', toggleThemes)
// })