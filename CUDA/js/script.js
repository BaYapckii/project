let menuItem = document.querySelectorAll('.menu__item')
let section = document.querySelectorAll('.section')

window.addEventListener('scroll', function(event) {
    let scrollDistion = window.scrollY
    // e.scrollTop
    // e.innerHeight
    let centerWindow = (window.innerHeight / 2) + window.scrollY
    // if(window.scrollY <= centerWindow) {
    //     menuItem[2].classList.add('menu__about')
    // }
    for (let i = 0; i < 6; i++) {
        let scrollOffSet = section[i].offsetTop
        if (centerWindow >= scrollOffSet) {
            for (let j = 0; j < 6; j++) {
                menuItem[j].classList.remove('menu__item_purple');
                section[i].style.opacity = '1'
                }
            menuItem[i].classList.add('menu__item_purple');
        }else{
            if(window.innerHeight > scrollOffSet) {
                menuItem[i].classList.remove('menu__item_purple');
            }
        }
    }
});