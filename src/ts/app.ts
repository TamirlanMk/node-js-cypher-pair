import Caesar from "./ciphers/caesar";
import Vizhiner from "./ciphers/vizhiner";
import XOrCypher from "./ciphers/xor";
import Permutation from "./ciphers/permutation";
import {changeVisibleForBlockWrapper} from "./helpers";
import Hash from "./hash/hash";
import Steganography from "./steganography/steganography";

console.log('App connected...')
const textInput: HTMLInputElement = document.querySelector('#text'),
    resultInput: HTMLInputElement = document.querySelector('#result'),
    cypherSelect: HTMLInputElement = document.querySelector('#cypher'),
    keyInput: HTMLInputElement = (<HTMLInputElement>document.querySelector('#key')),
    shiftInput: HTMLInputElement = (<HTMLInputElement>document.querySelector('#shift')),
    languageInput: HTMLInputElement = (<HTMLInputElement>document.querySelector('[name="language"]')),
    encryptBtn: HTMLElement = document.querySelector('#action-btn-encrypt'),
    encryptImgBtn: HTMLElement = document.querySelector('#action-btn-encrypt-img'),
    decryptBtn: HTMLElement = document.querySelector('#action-btn-decrypt'),
    decryptImgBtn: HTMLElement = document.querySelector('#action-btn-decrypt-img');


enum Cyphers {
    caesar = 1,
    vizhiner = 2,
    xOr = 3,
    permutationSimple = 4,
    permutation = 5,
    hash = 6,
}

encryptBtn.onclick = async () => {
    const key: string = keyInput.value;
    const text: string = textInput.value;
    const language: string = (<HTMLInputElement>document.querySelector('[name="language"]:checked')).value;

    switch (parseInt(cypherSelect.value)) {
        case Cyphers.caesar:
            const shift: number = +shiftInput.value;
            const caesarCypher: Caesar = new Caesar();

            resultInput.value = caesarCypher.encrypt({text, shift, language})
            break;
        case Cyphers.vizhiner:
            const vizhinerCypher: Vizhiner = new Vizhiner();

            resultInput.value = vizhinerCypher.encrypt({text, key, language})
            break;
        case Cyphers.xOr:
            const xOrCypher: XOrCypher = new XOrCypher();

            resultInput.value = xOrCypher.encrypt({text, key})
            break;
        case Cyphers.permutationSimple:
            const permutationSimple: Permutation = new Permutation();

            resultInput.value = permutationSimple.encryptSimple({text, key})
            break;
        case Cyphers.permutation:
            const permutation: Permutation = new Permutation();

            resultInput.value = permutation.encryptHard({text, key})
            break;
        case Cyphers.hash:
            const hash: Hash = new Hash();

            resultInput.value = await hash.encrypt({text, key})
            break;
    }
}

decryptBtn.onclick = () => {
    const key: string = keyInput.value;
    const text: string = textInput.value;
    const language: string = (<HTMLInputElement>document.querySelector('[name="language"]:checked')).value;

    switch (parseInt(cypherSelect.value)) {
        case Cyphers.caesar:
            const shift: number = +shiftInput.value;
            const caesarCypher: Caesar = new Caesar();

            resultInput.value = caesarCypher.decrypt({text, shift, language})
            break;
        case Cyphers.vizhiner:
            const vizhinerCypher: Vizhiner = new Vizhiner();

            resultInput.value = vizhinerCypher.decrypt({text, key, language})
            break;
        case Cyphers.xOr:
            const xOrCypher: XOrCypher = new XOrCypher();

            resultInput.value = xOrCypher.decrypt({text, key})
            break;
        case Cyphers.permutationSimple:
            const permutationSimple: Permutation = new Permutation();

            resultInput.value = permutationSimple.encryptSimple({text, key})
            break;
        case Cyphers.permutation:
            const permutation: Permutation = new Permutation();

            resultInput.value = permutation.decryptHard({text, key})
            break;
    }
}

cypherSelect.onchange = (e) => {
    let cypher: Cyphers = parseInt((e.target as HTMLInputElement).value);

    switch (cypher) {
        case Cyphers.caesar:
            changeVisibleForBlockWrapper({el: keyInput, hide: true})
            changeVisibleForBlockWrapper({el: shiftInput, hide: false})
            changeVisibleForBlockWrapper({el: languageInput, hide: false})
            break;
        case Cyphers.vizhiner:
            changeVisibleForBlockWrapper({el: keyInput, hide: false})
            changeVisibleForBlockWrapper({el: shiftInput, hide: true})
            changeVisibleForBlockWrapper({el: languageInput, hide: false})
            break;
        case Cyphers.xOr:
            changeVisibleForBlockWrapper({el: keyInput, hide: false})
            changeVisibleForBlockWrapper({el: shiftInput, hide: true})
            changeVisibleForBlockWrapper({el: languageInput, hide: true})
            break;
        case Cyphers.permutationSimple:
            changeVisibleForBlockWrapper({el: keyInput, hide: false})
            changeVisibleForBlockWrapper({el: shiftInput, hide: true})
            changeVisibleForBlockWrapper({el: languageInput, hide: true})
            break;
        case Cyphers.permutation:
            changeVisibleForBlockWrapper({el: keyInput, hide: false})
            changeVisibleForBlockWrapper({el: shiftInput, hide: true})
            changeVisibleForBlockWrapper({el: languageInput, hide: true})
            break;
        case Cyphers.hash:
            changeVisibleForBlockWrapper({el: keyInput, hide: false})
            changeVisibleForBlockWrapper({el: shiftInput, hide: true})
            changeVisibleForBlockWrapper({el: languageInput, hide: true})
            break;
        default:
            changeVisibleForBlockWrapper({el: keyInput, hide: true})
            changeVisibleForBlockWrapper({el: shiftInput, hide: true})
            changeVisibleForBlockWrapper({el: languageInput, hide: true})
            break
    }
}

const imageInput: HTMLInputElement = (<HTMLInputElement>document.getElementById('image'));
const imageOutput: HTMLImageElement = (<HTMLImageElement>document.getElementById('output-img'));
const selectedImage: HTMLImageElement = (<HTMLImageElement>document.getElementById('input-img'));

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}

imageInput.addEventListener('change', function (event: HTMLInputEvent) {
    let reader = new FileReader();

    reader.onload = e => {
        selectedImage.setAttribute('src', e.target.result);
    }

    reader.readAsDataURL(event.target.files[0]);
});


encryptImgBtn.onclick = () => {
    let steg = new Steganography();
    steg.hideMessage(selectedImage.getAttribute('src'), (document.getElementById('text-steg') as HTMLInputElement).value)
        .then(data => {
            if(data) {
                imageOutput.src = data
            } else {
                console.log('Произошла ошибка')
            }
        });
}

decryptImgBtn.onclick = () => {
    let steg = new Steganography();
    steg.extractMessage(selectedImage.getAttribute('src'))
        .then(data => {
            if(data) {
                (document.getElementById('text-steg') as HTMLInputElement).value = data
            } else {
                console.log('Произошла ошибка')
            }
        });
}