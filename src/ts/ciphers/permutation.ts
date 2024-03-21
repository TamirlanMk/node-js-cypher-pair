type PermutationParams = {
    text: string,
    key: string,
}

export default class Permutation {
    encryptSimple({text, key}: PermutationParams) {
        const matrix = this.makeMatrix(text, key);

        let encryptedText = '';
        matrix.map(col => {
            col.map((char: string, index: number) => {
                encryptedText += col[+key[index] - 1]
            })
        })

        return encryptedText
    }

    encryptHard({text, key}: PermutationParams) {
        const length = key.length;
        const numOfRows = Math.ceil(text.length / length);
        const matrix = [];

        let index = 0;
        for (let i = 0; i < numOfRows; i++) {
            matrix[i] = [];
            for (let j = 0; j < length; j++) {
                if (index < text.length)
                    matrix[i][j] = text[index++];
                else
                    matrix[i][j] = ' ';
            }
        }

        let ciphertext = "";
        key.split('').forEach((column) => {
            for (let row = 0; row < numOfRows; row++) {
                console.log(column);
                ciphertext += matrix[row][+column - 1];
            }
        });

        return ciphertext;
    }

    decryptHard({text, key}: PermutationParams) {
        const length = key.length;
        const numOfRows = text.length / length;
        const matrix = [];

        let index = 0;
        key.split('').forEach((column) => {
            for (let row = 0; row < numOfRows; row++) {
                if (!matrix[row]) matrix[row] = [];
                matrix[row][+column - 1] = text[index++];
            }
        });

        let plaintext = "";
        for (let i = 0; i < numOfRows; i++) {
            for (let j = 0; j < length; j++) {
                plaintext += matrix[i][j];
            }
        }

        return plaintext.trim();
    }

    private makeMatrix(text: string, key: string) {
        let matrix = [];
        let currentLetter = 0;

        for (let i = 0; i < Math.ceil(text.length / key.length); i++) {
            let newCol = [];
            for (let j = 0; j < key.length; j++) {
                let char = currentLetter < text.length ? text[currentLetter] : " "
                newCol.push(char)
                currentLetter++
            }
            matrix.push(newCol)
        }
        return matrix
    }
}