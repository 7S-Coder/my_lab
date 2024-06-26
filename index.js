function addOneAtJouons() {
  let numberElement = document.getElementById("number");
  let number = parseInt(numberElement.textContent, 10);
  number++;
  numberElement.textContent = number;
}
