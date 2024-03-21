import Caesar from "./ciphers/caesar";
import Vizhiner from "./ciphers/vizhiner";
import XOrCypher from "./ciphers/xor";
import Permutation from "./ciphers/permutation";
import {changeVisibleForBlockWrapper} from "./helpers";

console.log('App connected...')

const textInput: HTMLInputElement = document.querySelector('#text');
const resultInput: HTMLInputElement = document.querySelector('#result');

const cypherSelect: HTMLInputElement = document.querySelector('#cypher');

const keyInput: HTMLInputElement = (<HTMLInputElement>document.querySelector('#key'));
const shiftInput: HTMLInputElement = (<HTMLInputElement>document.querySelector('#shift'));

const languageInput: HTMLInputElement = (<HTMLInputElement>document.querySelector('[name="language"]'))

const encryptBtn: HTMLElement = document.querySelector('#action-btn-encrypt');
const decryptBtn: HTMLElement = document.querySelector('#action-btn-decrypt');

enum Cyphers {
    caesar = 1,
    vizhiner = 2,
    xOr = 3,
    permutationSimple = 4,
    permutation = 5,
}

encryptBtn.onclick = () => {
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
        default:
            changeVisibleForBlockWrapper({el: keyInput, hide: true})
            changeVisibleForBlockWrapper({el: shiftInput, hide: true})
            changeVisibleForBlockWrapper({el: languageInput, hide: true})
            break
    }
}