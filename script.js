const logo = document.querySelector('#logo'); 
const img_second = document.querySelector('#img_second'); 

const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        const { width } = entry.contentRect;

        if(width < 715){
            logo.src = './assets/icons/logo-white.svg';
            img_second.src = './assets/imgs/mobile/secundaria-rosa.png';
        }else{
            logo.src = './assets/icons/logo.svg';
            img_second.src = './assets/imgs/web/secundária-rosa.png';
        }


    }
});

observer.observe(document.body);