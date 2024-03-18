import Caesar from "./caesar.js";
import Vizhiner from "./vizhiner.js";
import XOrCypher from "./xor.js";
import Permutation from "./permutation.js";

const TEXT_INPUT = document.querySelector('#text');
const RES_OUTPUT = document.querySelector('#result');
const CYPHER = document.querySelector('#cypher');

const TYPE_RADIOBUTTONS = document.querySelectorAll('[name="type"]');

const SHIFT_INPUT = document.querySelector('#shift');
const KEY_INPUT = document.querySelector('#key');
const VARIANT_RADIOBUTTONS = document.querySelectorAll('[name="variant"]');

const BTN_ENCRYPT = document.querySelector('#action-btn-encrypt');
const BTN_DECRYPT = document.querySelector('#action-btn-decrypt');

const CAESAR_CYPHER_INDEX = 1,
    VIZHINER_CYPHER_INDEX = 2,
    XOR_CYPHER_INDEX = 3,
    PERMUTATION_SIMPLE_CYPHER_INDEX = 4,
    PERMUTATION_CYPHER_INDEX = 5;

console.log('App js connected...')

BTN_ENCRYPT.onclick = (e) => {
    let TYPE = document.querySelector('[name="type"]:checked')
    let VARIANT = document.querySelector('[name="variant"]:checked')

    switch (parseInt(CYPHER.value)) {
        case CAESAR_CYPHER_INDEX:
            const caesarCypher = new Caesar();

            RES_OUTPUT.value = caesarCypher.encrypt(TEXT_INPUT.value, +SHIFT_INPUT.value, VARIANT.value)
            break;
        case VIZHINER_CYPHER_INDEX:
            const vizhinerCypher = new Vizhiner();

            RES_OUTPUT.value = vizhinerCypher.encrypt(TEXT_INPUT.value, KEY_INPUT.value, VARIANT.value)
            break;
        case XOR_CYPHER_INDEX:
            const xOrCypher = new XOrCypher();

            RES_OUTPUT.value = xOrCypher.encrypt(TEXT_INPUT.value, KEY_INPUT.value)
            break;
        case PERMUTATION_SIMPLE_CYPHER_INDEX:
            const permutationSimple = new Permutation();

            RES_OUTPUT.value = permutationSimple.encryptSimple(TEXT_INPUT.value, KEY_INPUT.value)
            break;
        case PERMUTATION_CYPHER_INDEX:
            const permutation = new Permutation();

            RES_OUTPUT.value = permutation.encryptHard(TEXT_INPUT.value, KEY_INPUT.value)
            break;
    }
}

BTN_DECRYPT.onclick = (e) => {
    let TYPE = document.querySelector('[name="type"]:checked')
    let VARIANT = document.querySelector('[name="variant"]:checked')

    switch (parseInt(CYPHER.value)) {
        case CAESAR_CYPHER_INDEX:
            const caesarCypher = new Caesar();

            RES_OUTPUT.value = caesarCypher.decrypt(TEXT_INPUT.value, +SHIFT_INPUT.value, VARIANT.value)
            break;
        case VIZHINER_CYPHER_INDEX:
            const vizhinerCypher = new Vizhiner();

            RES_OUTPUT.value = vizhinerCypher.decrypt(TEXT_INPUT.value, KEY_INPUT.value, VARIANT.value)
            break;
        case XOR_CYPHER_INDEX:
            const xOrCypher = new XOrCypher();

            RES_OUTPUT.value = xOrCypher.decrypt(TEXT_INPUT.value, KEY_INPUT.value)
            break;
        case PERMUTATION_SIMPLE_CYPHER_INDEX:
            const permutationSimple = new Permutation();

            RES_OUTPUT.value = permutationSimple.encryptSimple(TEXT_INPUT.value, KEY_INPUT.value)
            break;
        case PERMUTATION_CYPHER_INDEX:
            const permutation = new Permutation();

            RES_OUTPUT.value = permutation.decryptHard(TEXT_INPUT.value, KEY_INPUT.value)
            break;
    }
}


CYPHER.onchange = (e) => {
    switch (parseInt(e.target.value)) {
        case CAESAR_CYPHER_INDEX:
            makeHiddenAddBlock(KEY_INPUT)
            makeVisibleAddBlock(SHIFT_INPUT)
            makeVisibleAddBlock(VARIANT_RADIOBUTTONS[0])
            break;
        case VIZHINER_CYPHER_INDEX:
            makeHiddenAddBlock(SHIFT_INPUT)
            makeVisibleAddBlock(KEY_INPUT)
            makeVisibleAddBlock(VARIANT_RADIOBUTTONS[0])
            break;
        case XOR_CYPHER_INDEX:
            makeVisibleAddBlock(KEY_INPUT)
            makeHiddenAddBlock(SHIFT_INPUT)
            makeHiddenAddBlock(VARIANT_RADIOBUTTONS[0])
            break;
        case PERMUTATION_SIMPLE_CYPHER_INDEX:
            makeVisibleAddBlock(KEY_INPUT)
            makeHiddenAddBlock(SHIFT_INPUT)
            makeHiddenAddBlock(VARIANT_RADIOBUTTONS[0])
            break;
        case PERMUTATION_CYPHER_INDEX:
            makeVisibleAddBlock(KEY_INPUT)
            makeHiddenAddBlock(SHIFT_INPUT)
            makeHiddenAddBlock(VARIANT_RADIOBUTTONS[0])
            break;
        default:
            makeHiddenAddBlock(KEY_INPUT)
            makeHiddenAddBlock(SHIFT_INPUT)
            makeHiddenAddBlock(VARIANT_RADIOBUTTONS[0])
            break
    }
}

function makeVisibleAddBlock(el) {
    el.closest('.block-wrapper').classList.add('inline-block')
    el.closest('.block-wrapper').classList.remove('hidden')
}

function makeHiddenAddBlock(el) {
    el.closest('.block-wrapper').classList.add('hidden')
    el.closest('.block-wrapper').classList.remove('inline-block')
}