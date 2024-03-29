export default class Permutation {

    encryptSimple(text, key) {
        let matrix = this.makeMatrix(text, key);
        let encryptedText = '';

        for (let col of matrix) {
            for (let index in col) {
                encryptedText += col[+key[index] - 1]
            }
        }

        return encryptedText
    }

    encrypt(text, key) {
        let matrix = this.makeMatrix(text, key)
        let encryptedText = '';
        let encryptedMatrix = this.columnStack(matrix);

        encryptedMatrix.map(col => {
            col.map(char => {
                encryptedText += char
            })
        })

        return encryptedText
    }

    encryptHard(plaintext, permutationKey) {
        const length = permutationKey.length;
        const numOfRows = Math.ceil(plaintext.length / length);
        const matrix = [];

        let index = 0;
        for (let i = 0; i < numOfRows; i++) {
            matrix[i] = [];
            for (let j = 0; j < length; j++) {
                if (index < plaintext.length)
                    matrix[i][j] = plaintext[index++];
                else
                    matrix[i][j] = ' ';
            }
        }

        let ciphertext = "";
        permutationKey.split('').forEach(column => {
            for (let row = 0; row < numOfRows; row++) {
                ciphertext += matrix[row][column - 1];
            }
        });

        return ciphertext;
    }

    decryptHard(ciphertext, permutationKey) {
        const length = permutationKey.length;
        const numOfRows = ciphertext.length / length;
        const matrix = [];

        let index = 0;
        permutationKey.split('').forEach(column => {
            for (let row = 0; row < numOfRows; row++) {
                if (!matrix[row]) matrix[row] = [];
                matrix[row][column - 1] = ciphertext[index++];
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

    makeMatrix(text, key) {
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

    columnStack(matrix) {
        // Проверяем, является ли входной массив массивом
        if (!Array.isArray(matrix)) {
            throw new Error('Input must be an array of arrays');
        }

        // Проверяем, все ли элементы массива являются массивами
        const allArrays = matrix.every(arr => Array.isArray(arr));
        if (!allArrays) {
            throw new Error('All elements must be arrays');
        }

        // Проверяем, все ли массивы имеют одинаковую длину
        const lengths = matrix.map(arr => arr.length);
        const sameLength = lengths.every((val, i, arr) => val === arr[0]);
        if (!sameLength) {
            throw new Error('All arrays must have the same length');
        }

        // Создаем новый массив, объединяя элементы из оригинальных массивов по столбцам
        const result = [];
        for (let i = 0; i < matrix[0].length; i++) {
            const newRow = matrix.map(arr => arr[i]);
            result.push(newRow);
        }

        return result;
    }

}