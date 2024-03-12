import {Buffer} from "buffer/";

export default class XOrCypher {
    encrypt(input, key) {
        const inputBuffer = Buffer.from(input, 'utf-8');
        const keyBuffer = Buffer.from(key, 'utf-8');
        const outputBuffer = Buffer.alloc(inputBuffer.length);

        for (let i = 0; i < inputBuffer.length; i++) {
            outputBuffer[i] = inputBuffer[i] ^ keyBuffer[i % keyBuffer.length];
        }

        return outputBuffer.toString('base64');
    }

     decrypt(input, key) {
        const inputBuffer = Buffer.from(input, 'base64');
        const keyBuffer = Buffer.from(key, 'utf-8');
        const outputBuffer = Buffer.alloc(inputBuffer.length);

        for (let i = 0; i < inputBuffer.length; i++) {
            outputBuffer[i] = inputBuffer[i] ^ keyBuffer[i % keyBuffer.length];
        }

        return outputBuffer.toString('utf-8');
    }

}