/*0*/const mobileNav = () => {  

const headerBtn = document.querySelector('.header__bars');  /* 1 */
const mobileNav = document.querySelector('.mobile-nav');    /* 2 */
const mobileLinks = document.querySelectorAll('.mobile-nav__link');  /* 12 */

// state
let isMobileNavOpen = false;  /* 6- since mobile-nav display is orignially set to none */

/*3*/headerBtn.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;  /* 7- this negates to true once clicked and false if clicked again */
/*8*/if (isMobileNavOpen === true) {     
    mobileNav.style.display = 'flex';  /* 4 */
    document.body.style.overflowY = 'hidden';  /* 5-prevent body from showing, only menu links shows once clicked */
/*9*/} else {
    mobileNav.style.display = 'none';
    doocument.body.style.overflowY = 'auto';
}
});

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            isMobileNavOpen = false ;
            mobileNav.style.display = 'none';
            document.body.style.overflowY = 'auto'; /*allows scroll */
        })
    })

};

export default mobileNav; /* 10 */
