import {isAlphaNumeric} from "../helpers";

type CaesarProps = {
    text: string,
    shift: number,
    language?: string
}

export default class Caesar {
    alphabet: { [key: string]: { uppercase: string; lowercase: string } } = {
        'en': {
            'uppercase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'lowercase': 'abcdefghijklmnopqrstuvwxyz'
        },
        'ru': {
            'uppercase': 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
            'lowercase': 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
        }
    }

    encrypt({text, shift, language = 'ru'}: CaesarProps) {
        let encryptedText = '';

        text.split('').map(char => {
            if (isAlphaNumeric(char)) {
                let alphabet = this.alphabet[language][char.toUpperCase() === char ? 'uppercase' : 'lowercase']
                let encryptedCharIndex = (alphabet.length + alphabet.indexOf(char) + shift) % alphabet.length

                encryptedText += alphabet[encryptedCharIndex]
            } else {
                encryptedText += char;
            }
        })
        return encryptedText;
    }

    decrypt({text, shift, language = 'ru'}: CaesarProps) {
        let decryptedText = '';

        text.split('').map(char => {
            if (isAlphaNumeric(char)) {
                let alphabet = this.alphabet[language][char.toUpperCase() === char ? 'uppercase' : 'lowercase']
                let encryptedCharIndex = (alphabet.length + alphabet.indexOf(char) - shift) % alphabet.length

                decryptedText += alphabet[encryptedCharIndex]
            } else {
                decryptedText += char;
            }
        })
        return decryptedText;
    }
}

