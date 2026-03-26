function findMin(arr) {
    return Math.min(...arr);
}

function findMax(arr) {
    return Math.max(...arr);
}

function findAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }
    const sum = arr.reduce((acc, currentValue) => acc + currentValue, 0);
    return sum / arr.length;
}







export function analyzeArray(arr) {

    const obj = {
        min: findMin(arr),
        max: findMax(arr),
        average: findAverage(arr),
        length: arr.length
    };
    return obj;
}



