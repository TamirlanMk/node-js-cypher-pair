export const changeVisibleForBlockWrapper = (props: { el: HTMLElement | Element, hide: Boolean }): void => {
    props.el.closest('.block-wrapper').classList.add(props.hide ? 'hidden' : 'inline-block')
    props.el.closest('.block-wrapper').classList.remove(props.hide ? 'inline-block' : 'hidden')
};

export const isAlphaNumeric = (str) => {
    let code, i, len;
    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123) && // lower alpha (a-z)
            !(code > 1039 && code < 1104)) { // upper and lower alpha (А-Я, а-я)
            return false;
        }
    }
    return true;
}

export const columnStack = (matrix: Array<Array<string>>) => {
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