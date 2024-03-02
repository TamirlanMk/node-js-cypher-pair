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

const BTN = document.querySelector('#action-btn');

const CAESAR_CYPHER_INDEX = 1,
    VIZHINER_CYPHER_INDEX = 2,
    XOR_CYPHER_INDEX = 3,
    PERMUTATION_SIMPLE_CYPHER_INDEX = 4,
    PERMUTATION_CYPHER_INDEX = 5;

const ENCODE_INDEX = 0,
    DECODE_INDEX = 1;

console.log('App js connected...')

BTN.onclick = (e) => {
    let TYPE = document.querySelector('[name="type"]:checked')
    let VARIANT = document.querySelector('[name="variant"]:checked')

    switch (parseInt(CYPHER.value)) {
        case CAESAR_CYPHER_INDEX:
            const caesarCypher = new Caesar();

            if (parseInt(TYPE.value) === +ENCODE_INDEX) {
                RES_OUTPUT.value = caesarCypher.encrypt(TEXT_INPUT.value, +SHIFT_INPUT.value, VARIANT.value)
            } else if (parseInt(TYPE.value) === +DECODE_INDEX) {
                RES_OUTPUT.value = caesarCypher.decrypt(TEXT_INPUT.value, +SHIFT_INPUT.value, VARIANT.value)
            }
            break;
        case VIZHINER_CYPHER_INDEX:
            const vizhinerCypher = new Vizhiner();

            if (parseInt(TYPE.value) === +ENCODE_INDEX) {
                RES_OUTPUT.value = vizhinerCypher.encrypt(TEXT_INPUT.value, KEY_INPUT.value, VARIANT.value)
            } else if (parseInt(TYPE.value) === +DECODE_INDEX) {
                RES_OUTPUT.value = vizhinerCypher.decrypt(TEXT_INPUT.value, KEY_INPUT.value, VARIANT.value)
            }
            break;
        case XOR_CYPHER_INDEX:
            const xOrCypher = new XOrCypher();

            if (parseInt(TYPE.value) === +ENCODE_INDEX) {
                RES_OUTPUT.value = xOrCypher.encrypt(TEXT_INPUT.value, KEY_INPUT.value)
            } else if (parseInt(TYPE.value) === +DECODE_INDEX) {
                RES_OUTPUT.value = xOrCypher.decrypt(TEXT_INPUT.value, KEY_INPUT.value)
            }

            console.log(xOrCypher.encode(TEXT_INPUT.value, KEY_INPUT.value))
            console.log(xOrCypher.decode(xOrCypher.encode(TEXT_INPUT.value, KEY_INPUT.value), KEY_INPUT.value))
            break;
        case PERMUTATION_SIMPLE_CYPHER_INDEX:
            const permutationSimple = new Permutation();

            if (parseInt(TYPE.value) === +ENCODE_INDEX) {
                RES_OUTPUT.value = permutationSimple.encryptSimple(TEXT_INPUT.value, KEY_INPUT.value)
            } else if (parseInt(TYPE.value) === +DECODE_INDEX) {
                RES_OUTPUT.value = permutationSimple.encryptSimple(TEXT_INPUT.value, KEY_INPUT.value)
            }
            break;
        case PERMUTATION_CYPHER_INDEX:
            const permutation = new Permutation();

            if (parseInt(TYPE.value) === +ENCODE_INDEX) {
                RES_OUTPUT.value = permutation.encrypt(TEXT_INPUT.value, KEY_INPUT.value)
            } else if (parseInt(TYPE.value) === +DECODE_INDEX) {
                RES_OUTPUT.value = permutation.encrypt(TEXT_INPUT.value, KEY_INPUT.value)
            }
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