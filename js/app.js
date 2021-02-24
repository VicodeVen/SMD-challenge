const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('click', (e) => {
    if(checkbox.checked === true) {
        document.querySelector('.circle').classList.add("translatecero");
        document.body.classList.remove('light-mode')
        document.body.classList.add('dark-mode');
    }else {
        document.querySelector('.circle').classList.remove("translatecero");
        document.body.classList.add("light-mode");
        document.body.classList.remove('dark-mode');
    }
});