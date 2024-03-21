import {Buffer} from "buffer";

type XOrProps = {
    text: string,
    key: string,
}
export default class XOrCypher {
    encrypt({text, key}: XOrProps): string {
        const inputBuffer = Buffer.from(text, 'utf-8');
        const keyBuffer = Buffer.from(key, 'utf-8');
        const outputBuffer = Buffer.alloc(inputBuffer.length);

        for (let i = 0; i < inputBuffer.length; i++) {
            outputBuffer[i] = inputBuffer[i] ^ keyBuffer[i % keyBuffer.length];
        }

        return outputBuffer.toString('base64');
    }

    decrypt({text, key}: XOrProps): string {
        const inputBuffer = Buffer.from(text, 'base64');
        const keyBuffer = Buffer.from(key, 'utf-8');
        const outputBuffer = Buffer.alloc(inputBuffer.length);

        for (let i = 0; i < inputBuffer.length; i++) {
            outputBuffer[i] = inputBuffer[i] ^ keyBuffer[i % keyBuffer.length];
        }

        return outputBuffer.toString('utf-8');
    }
}