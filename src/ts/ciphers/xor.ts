import {Buffer} from "buffer/";

export default class XOrCypher {
    encrypt(text, key) {
        let encryptedText = '';
        for (let i = 0; i < text.length; i++) {
            const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
            encryptedText += String.fromCharCode(charCode);
        }
        return encryptedText;
    }


    encode (key, data) {
        return Buffer.from(this.xorStrings(key, data),'utf8').toString('base64');
    }
    decode(key, data) {
        data = Buffer.from(data,'base64').toString('utf8');
        return this.xorStrings(key, data);
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

     xorStrings(key,input){
        var output='';
        for(var i=0;i<input.length;i++){
            var c = input.charCodeAt(i);
            var k = key.charCodeAt(i%key.length);
            output += String.fromCharCode(c ^ k);
        }
        return output;
    }

}