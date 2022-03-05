const menuBtn = document.querySelector('.menu-btn');
let mobileNav = document.querySelector('.mobile-nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        mobileNav.style.height = '85vh';
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        mobileNav.style.height = '0';
    }
});


// var prevScrollpos = window.pageXOffset;
// window.onscroll = function() {
//     var currentScrollpos = window.pageXOffset;
//     if(prevScrollpos > currentScrollpos) {
//         document.getElementById('nav-wrap').style.top = '0';
//     } else {
//         document.getElementById('nav-wrap').style.top = '-100px';
//     }

//     prevScrollpos = currentScrollpos;
// }