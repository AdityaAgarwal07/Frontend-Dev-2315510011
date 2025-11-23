
function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const nums = [1,2,3,4];

console.log("Double:", applyOperation(nums, n => n * 2));
console.log("Square:", applyOperation(nums, n => n * n));
