document.addEventListener('DOMContentLoaded', function() {
    const trailer = document.getElementById('trailer');
    const playButton = document.getElementById('playButton');
    const textoSobre = '"Chamam ele de Baba Yaga (que significa Bicho-papão). Bom, mas ele não é exatamente o bicho-papão, ele era o homem que nós mandávamos para matar o bicho-papão. Ele é um homem concentrado, dedicado, e com uma maldita força de vontade. Uma vez eu já o vi matar três homens usando apenas um lápis, a porcaria de um lápis! Quem faz isso ?!"';
    const sobreContainer = document.getElementById('sobreContainer');
    const audioFundo = document.getElementById('audioFundo');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const audioModal = document.getElementById('audioModal');
    let index = 0;
    audioFundo.volume = 0.5;

    audioModal.style.display = 'block';

    yesButton.addEventListener('click', function(){
        audioFundo.play();
        audioModal.style.display = 'none';
    })

    noButton.addEventListener('click', function(){
        audioModal.style.display = 'none';
    })

    playButton.addEventListener('click', function() {
        trailer.play();
        audioFundo.pause();
        playButton.style.display = 'none';
    });

    trailer.addEventListener('click', function() {
        playButton.style.display = 'block';
        trailer.pause();
        audioFundo.play();
    });

    trailer.addEventListener('ended', function(){
        if (audioFundo.paused){
            audioFundo.play();
        }
    })

    function efeitoDigitando() {
        if (index < textoSobre.length) {
            document.getElementById('textoContainer').innerHTML += textoSobre.charAt(index);
            index++;
            setTimeout(efeitoDigitando, 35);
        }
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener('scroll', () => {
        if (isElementInViewport(sobreContainer) && index === 0) {
            efeitoDigitando();
        }
    });
});
