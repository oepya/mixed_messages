const animalArray = ['a pack of dogs', 'a bear', 'a wolf', 'ostriches', 'the honey badger', 'kitty cats', 'the dingo', 'kangaroos', 'crocodiles', 'baboons'];

const verbArray = ['eat', 'poop on', 'serenade', 'auction off', 'laugh at', 'run off with', 'tap dance all over'];

const nounArray = ['face', 'baby', 'car', 'wife', 'high school yearbook photo', 'life savings'];

function randoAnimal() {
    return animalArray[Math.floor(Math.random() * animalArray.length)];
}

function randoVerb() {
    return verbArray[Math.floor(Math.random() * verbArray.length)];
}

function randoNoun() {
    return nounArray[Math.floor(Math.random() * nounArray.length)];
}


let icons = document.querySelectorAll('.icon-container');

let galaxyContainer = document.getElementById('galaxy-container');

let mainElements = galaxyContainer.children;

const elementsArray = Array.from(mainElements);

// let mainHeader = document.

// function hideIcons() {
//     icons.style.display = 'none';
// }

icons.forEach(element => {
    element.addEventListener('click', function() {
        elementsArray.forEach(element => {
            element.style.display = "none";
        })
        //galaxyContainer.replaceChildren();
        let yourHoroscope = document.createElement('p');
        yourHoroscope.id = 'your-horoscope';
        yourHoroscope.innerHTML = `Your horoscope:<br/><br/>Today ${randoAnimal()} will ${randoVerb()} your ${randoNoun()}.`;
        galaxyContainer.appendChild(yourHoroscope);
        let retryButton = document.createElement('button');
        retryButton.id = 'retry-button';
        retryButton.type = "button";
        retryButton.innerHTML = `Try Again`;
        galaxyContainer.appendChild(retryButton);
        })        
    });

const yourHoroscope = document.getElementById('your-horoscope');
const retryButton = document.getElementById('retry-button');

retryButton.addEventListener('click', function() {
    yourHoroscope.style.display = none;
    retryButton.style.display = none;
    elementsArray.forEach(element => {
        element.style.display = "block";
    })
})

    // "Your horoscope: <br><br> Today " + randoAnimal() + " will " + randoVerb() + " your " + randoNoun() + "."



// console.log(`Your horoscope: Today ${randoAnimal()} will ${randoVerb()} your ${randoNoun()}.`)

// let horoscopeButton = document.getElementById('horoscope-button');

// horoscopeButton.onclick = showHoroscope;

// function showHoroscope() {
//     let yourHoroscope = document.getElementById('your-horoscope');
//     yourHoroscope.innerHTML = `Your horoscope: Today ${randoAnimal()} will ${randoVerb()} your ${randoNoun()}.`;
// }


