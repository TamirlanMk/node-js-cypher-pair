import Caesar from "./ciphers/caesar";
import Vizhiner from "./ciphers/vizhiner";
import XOrCypher from "./ciphers/xor";
import Permutation from "./ciphers/permutation";

const CYPHER: HTMLInputElement = document.querySelector('#cypher');
const TEXT_INPUT: HTMLInputElement = document.querySelector('#text');
const RES_OUTPUT: HTMLInputElement = document.querySelector('#result');

const KEY_INPUT: HTMLInputElement = (<HTMLInputElement>document.querySelector('#key'));
const SHIFT_INPUT: HTMLInputElement = (<HTMLInputElement>document.querySelector('#shift'));
const VARIANT_RADIOBUTTON: NodeListOf<HTMLInputElement> = document.querySelectorAll('[name="variant"]');

const BTN: HTMLElement = document.querySelector('#action-btn');

const CAESAR_CYPHER_INDEX: number = 1,
    VIZHINER_CYPHER_INDEX: number = 2,
    XOR_CYPHER_INDEX: number = 3,
    PERMUTATION_SIMPLE_CYPHER_INDEX: number = 4,
    PERMUTATION_CYPHER_INDEX: number = 5;

const ENCODE_INDEX: number = 0,
    DECODE_INDEX: number = 1;

console.log('App ts connected...')

BTN.onclick = () => {
    let type: number = +(document.querySelector('[name="type"]:checked') as HTMLInputElement).value
    let language: string = (document.querySelector('[name="variant"]:checked') as HTMLInputElement).value
    const key: string = KEY_INPUT.value;
    const text: string = TEXT_INPUT.value;
    const shift: number = +SHIFT_INPUT.value;

    switch (parseInt(CYPHER.value)) {
        case CAESAR_CYPHER_INDEX:
            const caesarCypher: Caesar = new Caesar();

            if (isEncode(type)) {
                RES_OUTPUT.value = caesarCypher.encrypt(text, shift, language)
            } else {
                RES_OUTPUT.value = caesarCypher.decrypt(text, shift, language)
            }
            break;
        case VIZHINER_CYPHER_INDEX:
            const vizhinerCypher: Vizhiner = new Vizhiner();

            if (isEncode(type)) {
                RES_OUTPUT.value = vizhinerCypher.encrypt(text, key, language)
            } else {
                RES_OUTPUT.value = vizhinerCypher.decrypt(text, key, language)
            }
            break;
        case XOR_CYPHER_INDEX:
            const xOrCypher: XOrCypher = new XOrCypher();

            if (isEncode(type)) {
                RES_OUTPUT.value = xOrCypher.encrypt(text, key)
            } else {
                RES_OUTPUT.value = xOrCypher.decrypt(text, key)
            }
            console.log(key)
            console.log(xOrCypher.encode(text, key))
            console.log(xOrCypher.decode(xOrCypher.encode(text, key), key))
            break;
        case PERMUTATION_SIMPLE_CYPHER_INDEX:
            const permutationSimple: Permutation = new Permutation();

            if (isEncode(type)) {
                RES_OUTPUT.value = permutationSimple.encryptSimple(text, key)
            } else {
                RES_OUTPUT.value = permutationSimple.encryptSimple(text, key)
            }
            break;
        case PERMUTATION_CYPHER_INDEX:
            const permutation: Permutation = new Permutation();

            if (isEncode(type)) {
                RES_OUTPUT.value = permutation.encrypt(text, key)
            } else {
                RES_OUTPUT.value = permutation.encrypt(text, key)
            }
            break;
    }
}

CYPHER.onchange = (e) => {
    let value: number = parseInt((e.target as HTMLInputElement).value);

    switch (value) {
        case CAESAR_CYPHER_INDEX:
            makeHiddenAddBlock(KEY_INPUT)
            makeVisibleAddBlock(SHIFT_INPUT)
            makeVisibleAddBlock(VARIANT_RADIOBUTTON[0])
            break;
        case VIZHINER_CYPHER_INDEX:
            makeHiddenAddBlock(SHIFT_INPUT)
            makeVisibleAddBlock(KEY_INPUT)
            makeVisibleAddBlock(VARIANT_RADIOBUTTON[0])
            break;
        case XOR_CYPHER_INDEX:
            makeVisibleAddBlock(KEY_INPUT)
            makeHiddenAddBlock(SHIFT_INPUT)
            makeHiddenAddBlock(VARIANT_RADIOBUTTON[0])
            break;
        case PERMUTATION_SIMPLE_CYPHER_INDEX:
            makeVisibleAddBlock(KEY_INPUT)
            makeHiddenAddBlock(SHIFT_INPUT)
            makeHiddenAddBlock(VARIANT_RADIOBUTTON[0])
            break;
        case PERMUTATION_CYPHER_INDEX:
            makeVisibleAddBlock(KEY_INPUT)
            makeHiddenAddBlock(SHIFT_INPUT)
            makeHiddenAddBlock(VARIANT_RADIOBUTTON[0])
            break;
        default:
            makeHiddenAddBlock(KEY_INPUT)
            makeHiddenAddBlock(SHIFT_INPUT)
            makeHiddenAddBlock(VARIANT_RADIOBUTTON[0])
            break
    }
}

function isEncode(typeIndex: number): boolean {
    if (typeIndex === ENCODE_INDEX) {
        return true;
    } else if (typeIndex === DECODE_INDEX) {
        return false;
    }
}

function makeVisibleAddBlock(el: HTMLElement | Element): void {
    el.closest('.block-wrapper').classList.add('inline-block')
    el.closest('.block-wrapper').classList.remove('hidden')
}

function makeHiddenAddBlock(el: HTMLElement | Element): void {
    el.closest('.block-wrapper').classList.add('hidden')
    el.closest('.block-wrapper').classList.remove('inline-block')
}