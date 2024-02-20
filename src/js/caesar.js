import {isAlphaNumeric} from "./helpers.js";

export default class Caesar {
    alphabet = {
        'en': {
            'uppercase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'lowercase': 'abcdefghijklmnopqrstuvwxyz'
        },
        'ru': {
            'uppercase': 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
            'lowercase': 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
        }
    }

    encrypt(text, shift, type) {
        let encryptedText = '';

        text.split('').map(char => {
            console.log(isAlphaNumeric(char))
            if (isAlphaNumeric(char)) {
                let alphabet = this.alphabet[type][char.toUpperCase() === char ? 'uppercase' : 'lowercase']
                let encryptedCharIndex = (alphabet.split('').findIndex((c) => c === char) + +shift) % alphabet.length
                encryptedText += alphabet[encryptedCharIndex]
            }
        })
        return encryptedText;
    }

    decrypt(text, shift, type) {
        let encryptedText = '';

        text.split('').map(char => {
            if (isAlphaNumeric(char)) {
                let alphabet = this.alphabet[type][char.toUpperCase() === char ? 'uppercase' : 'lowercase']
                let encryptedCharIndex = (alphabet.split('').findIndex((c) => c === char) - +shift) % alphabet.length

                encryptedText += alphabet[encryptedCharIndex]
            }
        })

        return encryptedText;
    }
}

