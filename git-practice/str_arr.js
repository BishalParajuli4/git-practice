const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];

function getSumOfArrays(arrayOne, arrayTwo) {
  let sum = 0;

  const combinedArray = [...arrayOne, ...arrayTwo]; // spread operator

  for (let i = 0; i < combinedArray.length; i++) {
    sum = sum + combinedArray[i];
  }

  return sum;
}
document.write (getSumOfArrays(arrayOne, arrayTwo));