const animalArray = ['a pack of dogs', 'a bear', 'a wolf', 'ostriches', 'the honey badger', 'kitty cats'];

const verbArray = ['eat', 'poop on', 'serenade', 'auction off', 'laugh at'];

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

console.log(`Your horoscope: Today ${randoAnimal()} will ${randoVerb()} your ${randoNoun()}.`)