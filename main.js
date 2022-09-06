const modal = document.querySelector('.modal');
const buttonSpidey = document.querySelector('#button-spidey');
const buttonBatman = document.querySelector('#button-batman');
const buttonRobin = document.querySelector('#button-robin');
const closeButton = document.querySelector('.modal__container--close');

const cards = document.querySelector('.cards');
buttonBatman.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    cards.innerHTML = `
        <label for="radio-1" id="card-1" class="card">
            <img src="https://lego-superheroes.netlify.app/assets/images/batman-1.png" alt="spiderman1"/>
        </label>
        <label for="radio-2" id="card-2" class="card">
            <img src="https://lego-superheroes.netlify.app/assets/images/batman-2.png" alt="spiderman2">
        </label>
        <label for="radio-3" id="card-3" class="card">
            <img src="https://lego-superheroes.netlify.app/assets/images/batman-3.png" 
        </label>
        `;
});
buttonSpidey.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    cards.innerHTML = `
        <label for="radio-1" id="card-1" class="card">
            <img src="https://static.platzi.com/media/public/uploads/spider-man_db8af43d-b692-4986-a385-e645d286e142.png" alt="spiderman1"/>
        </label>
        <label for="radio-2" id="card-2" class="card">
            <img src="https://static.platzi.com/media/public/uploads/spider-man-2_b24c96b3-6d59-496f-815d-32b25eba0141.png" alt="spiderman2">
        </label>
        <label for="radio-3" id="card-3" class="card">
            <img src="https://static.platzi.com/media/public/uploads/spider-man-3_19f5c510-8059-4477-abf8-42249a5445b7.png" 
        </label>
        `;
});
buttonRobin.addEventListener('click', () => {
    modal.classList.remove('inactive');
    modal.classList.add('visible');
    cards.innerHTML = `
        <label for="radio-1" id="card-1" class="card">
            <img src="https://jeanpaulyps.github.io/LegoLanding/Assets/robin-3.png" alt="spiderman1"/>
        </label>
        <label for="radio-2" id="card-2" class="card">
            <img src="https://jeanpaulyps.github.io/LegoLanding/Assets/robin.png" alt="spiderman2">
        </label>
        <label for="radio-3" id="card-3" class="card">
            <img src="https://jeanpaulyps.github.io/LegoLanding/Assets/robin-2.png" 
        </label>
        `;
});

closeButton.addEventListener('click', () => {
    // modal.style.display = 'none';

    modal.classList.remove('visible');
    modal.classList.add('inactive');
});