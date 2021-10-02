const animalArray = ['a pack of dogs', 'a bear', 'a wolf', 'ostriches', 'the honey badger', 'kitty cats', 'the dingo', 'kangaroos', 'crocodiles', 'baboons', 'a football team', 'the rockettes', 'Santa and his reindeer'];

const verbArray = ['eat', 'poop on', 'auction off', 'make fun of', 'run off with', 'tap dance all over', 'insult', 'fart in the general direction of', 'set fire to'];

const nounArray = ['face', 'baby', 'car', 'wife', 'high school yearbook photo', 'life savings', 'panties', 'mother', 'house', 'cherished memories'];

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


icons.forEach(element => {
    element.addEventListener('click', function() {
        elementsArray.forEach(element => {
            element.style.display = "none";
        })
        let yourHoroscope = document.createElement('p');
        yourHoroscope.id = 'your-horoscope';
        yourHoroscope.innerHTML = `Your horoscope:<br/><br/>Today ${randoAnimal()} will ${randoVerb()} your ${randoNoun()}.`;
        galaxyContainer.appendChild(yourHoroscope);
        let retryButton = document.createElement('button');
        retryButton.id = 'retry-button';
        retryButton.type = "button";
        retryButton.innerHTML = `Try Again`;
        galaxyContainer.appendChild(retryButton);
        retryButton.addEventListener('click', function() {
            yourHoroscope.style.display = 'none';
            retryButton.style.display = 'none';
            elementsArray.forEach(element => {
                element.style.display = null;
            })
        })
        })        
    });