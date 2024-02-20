export default class XOrCypher {
    encrypt(text, key) {
        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
            encryptedText += String.fromCharCode(charCode);
        }
        return encryptedText;
    }

    // Метод для дешифрования текста
    decrypt(encryptedText, key) {
        let decryptedText = '';
        for (let i = 0; i < encryptedText.length; i++) {
            const charCode = encryptedText.charCodeAt(i) ^ key.charCodeAt(i % key.length);
            decryptedText += String.fromCharCode(charCode);
        }
        return decryptedText;
    }
}