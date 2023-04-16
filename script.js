const logo = document.querySelector('#logo');

const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        const { width } = entry.contentRect;

        if(width < 715){
            logo.src = './assets/icons/logo-white.svg';
        }else{
            logo.src = './assets/icons/logo.svg';
        }
    }
});

observer.observe(document.body);