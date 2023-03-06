export default function initialize(numOfNumbers) {
    let numbers = [0, 1];
    let numberOfNumbers = numOfNumbers;
    let numberOfNumbersCorrected = numberOfNumbers - 2

    for (let i = 0; i < numberOfNumbersCorrected; i++) {
        numbers.push(numbers[numbers.length - 1] + numbers[numbers.length - 2]);
    }
    return numbers;
}