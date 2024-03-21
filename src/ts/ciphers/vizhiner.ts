import {isAlphaNumeric} from "../helpers";

type VizhinerProps = {
    text: string,
    key: string,
    language?: string
}

export default class Vizhiner {
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

    encrypt({text, key, language}: VizhinerProps) {
        const alphabet = this.alphabet[language]['lowercase'].split('');
        const splittedText = text.toLowerCase().split('');
        const splittedKey = key.toLowerCase().split('');

        let encryptedText = '';
        splittedText.forEach((char, index) => {
            if (isAlphaNumeric(char)) {
                let charIndex = alphabet.indexOf(char);
                let keyIndex = alphabet.indexOf(splittedKey[index % key.length]);

                encryptedText += alphabet[(charIndex + keyIndex + 1) % alphabet.length];
            } else {
                encryptedText += char;
            }
        })

        return encryptedText;
    }

    decrypt({text, key, language}: VizhinerProps) {
        const alphabet = this.alphabet[language]['lowercase'].split('');
        const splittedText = text.toLowerCase().split('');
        const splittedKey = key.toLowerCase().split('');

        let encryptedText = '';
        splittedText.forEach((char, index) => {
            if (isAlphaNumeric(char)) {
                let charIndex = alphabet.indexOf(char);
                let keyIndex = alphabet.indexOf(splittedKey[index % key.length]);

                encryptedText += alphabet[(alphabet.length + charIndex - keyIndex - 1) % alphabet.length];
            } else {
                encryptedText += char;
            }
        })

        return encryptedText;
    }
}