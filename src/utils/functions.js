export const isArrayOfNumbers = (variable) => {
    return Array.isArray(variable) && variable.every(item => typeof item === 'number');
};