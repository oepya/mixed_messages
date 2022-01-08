const animalArray = ['a pack of dogs', 'a bear', 'a wolf', 'ostriches', 'a honey badger', 'kitty cats', 'a dingo', 'kangaroos', 'crocodiles', 'baboons', 'a football team', 'the rockettes', 'Santa and his reindeer'];

const verbArray = ['eat', 'poop on', 'auction off', 'make fun of', 'run off with', 'tap dance all over', 'insult', 'fart in the general direction of', 'set fire to'];

const nounArray = ['face', 'children', 'car', 'wife', 'high school yearbook photo', 'life savings', 'underwear', 'mother', 'house', 'cherished memories', 'nose'];

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

let mainContent = document.querySelector('main');

let mainElements = mainContent.children;

const elementsArray = Array.from(mainElements);


icons.forEach(element => {
    element.addEventListener('click', function () {
        elementsArray.forEach(element => {
            element.style.display = "none";
        })
        let signImage = this.cloneNode(true);
        signImage.style.all = 'unset';
        signImage.querySelector('p').innerHTML = '';
        let signName = signImage.querySelector('h3');
        let astroIcon = signImage.querySelector('img');
        signImage.insertBefore(signName, astroIcon);
        signName.style.fontSize = 'clamp(1.5rem, 1.75vw, 1.9rem)';
        signImage.style.height = '170px';
        signImage.style.marginBottom = '40px';

        mainContent.style.alignItems = 'center';
        mainContent.style.padding = '0';

        const yourHoroscope = document.getElementById('your-horoscope');
        yourHoroscope.style.animation = null;
        yourHoroscope.style.display = 'flex';

        let horoscopeSentence = document.getElementById('horoscope-sentence');
        horoscopeSentence.innerHTML = `Today ${randoAnimal()} will ${randoVerb()} your ${randoNoun()}.`;
        yourHoroscope.insertBefore(signImage, horoscopeSentence);
        
        let retryButton = document.getElementById('retry-button');
        retryButton.addEventListener('click', function () {
            yourHoroscope.style.animation = 'fadeIn 1s ease-in 0s 1 reverse both paused';
            yourHoroscope.style.animationPlayState = 'running';
            yourHoroscope.addEventListener('animationend', function resetDom() {
                signImage.remove();
                elementsArray.forEach(element => {
                    element.style.display = null;
                })
                mainContent.style.padding = null;
                mainContent.style.alignItems = null;
                document.getElementById('main-text').style.animation = 'fadeIn 1s ease-in 0s 1 normal both';
                icons.forEach(el => {
                    el.style.animation = 'fadeIn 1s ease-in 0s 1 normal both';
                })
                yourHoroscope.removeEventListener('animationend', resetDom);
            })
        });
    })
});


//Below was me trying to figure out how to assign a variable to a DOM property value
        //let signId = this.getAttribute('id');
        //let signSrc = this.getAttribute('src');
        //let resultImage = yourHoroscope.querySelector('img');
        //resultImage.setAttribute('alt', signId);
        //resultImage.setAttribute('src', signSrc);




        // let yourHoroscope = document.createElement('p');
        // yourHoroscope.id = 'your-horoscope';
        // yourHoroscope.innerHTML = `Your horoscope:<br/><br/>Today ${randoAnimal()} will ${randoVerb()} your ${randoNoun()}.`;
        // mainContent.appendChild(yourHoroscope);
        // let retryButton = document.createElement('button');
        // retryButton.id = 'retry-button';
        // retryButton.type = "button";
        // retryButton.innerHTML = `Try Again`;
        // mainContent.appendChild(retryButton);
        // retryButton.addEventListener('click', function() {
        //     yourHoroscope.style.display = 'none';
        //     retryButton.style.display = 'none';
        //     elementsArray.forEach(element => {
        //         element.style.display = null;
        //     })