function addOne() {
  let numberElement = document.getElementById("number");
  let number = parseInt(numberElement.textContent, 10);
  number++;
  numberElement.textContent = number;
  console.log(number);
}
