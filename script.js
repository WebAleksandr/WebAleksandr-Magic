let btnSk = document.querySelector('#sk-btn');
let sex = document.querySelector('.after-btn');
let btnMg = document.querySelector('#ram-btn');
let magicContainer = document.querySelector('.magic');
let sketchContainer = document.querySelector('.sketch');

const firstImage = (e) => {
    e.preventDefault();
    let reader = new FileReader();

    reader.readAsDataURL(btnMg.files[0]);

    reader.onload = () => {
        magicContainer.setAttribute('src', reader.result);
    }
}

btnMg.addEventListener('change', firstImage);
// =========================================================


const secondImage = (e) => {
    e.preventDefault();

    let reader = new FileReader();

    reader.readAsDataURL(btnSk.files[0]);

    reader.onload = () => {
        sketchContainer.setAttribute('src', reader.result);
    }
}

btnSk.addEventListener('change', secondImage);

// modal===========================
let modal = document.querySelector('.modal-window');
let section = document.querySelector('.section');
let fill = document.querySelector('.fill');
let counter = document.querySelector('.counter');
let magicContaine = document.querySelector('.magic-container');
let magicSketch = document.querySelector('.sketch');
sex.addEventListener('click', () => {
    // section.style.display = 'none';
    modal.style.display = 'block';
    let a = 0;
    let run = setInterval(frames, 50);

    function frames() {
        a = a + 1;
        if (a == 101) {
            clearInterval(run);
        } else {
            counter.textContent = a + "%";
            fill.style.width = a + '%';
        }

        if (a >= 101) {
            section.style.display = 'block';
            modal.style.display = 'none';
            magicContaine.style.width = 100 + '%';
            magicSketch.style.opacity = 0;

        }

    }

});
