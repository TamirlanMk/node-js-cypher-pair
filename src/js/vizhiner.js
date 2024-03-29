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

    encrypt(text, key, type = 'ru') {
        text = text.toLowerCase();
        let encryptedText = '';
        let alphabet = this.alphabet[type]['lowercase'];

        for (let char in text) {
            let charIndex = alphabet.split('').findIndex(c => c === text[char]);
            let keyIndex = alphabet.split('').findIndex(c => c === key[char % key.length]);

            encryptedText += alphabet[(charIndex + keyIndex + 1) % alphabet.length];
        }

        return encryptedText;
    }

    decrypt(text, key, type = 'ru') {
        text = text.toLowerCase();
        let encryptedText = '';
        let alphabet = this.alphabet[type]['lowercase'];

        for (let char in text) {
            let charIndex = alphabet.split('').findIndex(c => c === text[char]);
            let keyIndex = alphabet.split('').findIndex(c => c === key[char % key.length]);

            encryptedText += alphabet[(alphabet.length + charIndex - keyIndex - 1) % alphabet.length];
        }

        return encryptedText;
    }
}