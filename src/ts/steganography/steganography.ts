import {decode, encode} from 'ts-steganography';

export default class Steganography {
    async hideMessage(imagePath: string, message: string): Promise<string> {
        try {
            console.log('Сообщение успешно скрыто в изображении.');
            return await encode(message, imagePath);
        } catch (error) {
            console.error('Ошибка:', error);
            return null
        }
    }

    async extractMessage(imagePath: string): Promise<string> {
        try {
            return await decode(imagePath);
        } catch (error) {
            console.error('Ошибка:', error);
            return null;
        }
    }
}