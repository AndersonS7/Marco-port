const logo = document.querySelector('#logo');
const img_second = document.querySelector('#img_second');

const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        const { width } = entry.contentRect;

        if (width <= 768) {
            logo.src = './assets/icons/logo-white.svg';
            img_second.src = './assets/imgs/mobile/secundaria-rosa.png';
        } else {
            logo.src = './assets/icons/logo.svg';
            img_second.src = './assets/imgs/web/secundária-rosa.png';
        }
    }
});

function menuShow() {
    let menuMobile = document.querySelector('.menu_mobile');
    console.log(menuMobile)
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

observer.observe(document.body);