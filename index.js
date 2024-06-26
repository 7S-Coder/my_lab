// Fonction qui met à jour le nombre
function updateNumber(updateFunc) {
  let numberElement = document.getElementById("number");
  let number = parseInt(numberElement.textContent, 10);
  number = updateFunc(number);
  numberElement.textContent = number;
}

// Fonction pour incrémenter le nombre de 1
function addOneAtJouons() {
  updateNumber((number) => number + 1);
}

// Fonction pour incrémenter le nombre de 10
function addTenAtJouons() {
  updateNumber((number) => number + 10);
}

// Fonction pour réinitialiser le nombre à 0
function resetJouons() {
  updateNumber(() => 0);
}
