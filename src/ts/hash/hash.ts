type HashProps = {
    key: string,
    text: string,
}

export default class Hash {
    async encrypt({text, key}: HashProps) {
        // Преобразование текстового сообщения в буфер массива
        const buffer = new TextEncoder().encode(text);

        // Импорт ключа для использования в алгоритме HMAC
        const importedKey = await crypto.subtle.importKey(
            'raw',
            new TextEncoder().encode(key),
            {name: 'HMAC', hash: {name: 'SHA-256'}},
            false,
            ['sign']
        );

        const signature = await crypto.subtle.sign('HMAC', importedKey, buffer);
        const signatureArray = Array.from(new Uint8Array(signature));

        return signatureArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    }
}