// Fonction qui met à jour le nombre
function updateNumber(updateFunc) {
  let numberElement = document.getElementById("number");
  let number = parseInt(numberElement.textContent, 10);
  number = updateFunc(number);
  numberElement.textContent = number;
  return number; // Retourner le nombre mis à jour
}

// Fonction pour réinitialiser le nombre à 0
function resetJouons() {
  let numberElement = document.getElementById("number");
  numberElement.textContent = 0;
}

// Vérifier si le nombre dépasse une limite et le réinitialiser
function checkAndReset(number) {
  let limit = 25;
  if (number >= limit || number <= -limit) {
    resetJouons();
  }
}

// Fonction pour incrémenter le nombre de 1
function addOneAtJouons() {
  let updatedNumber = updateNumber((number) => {
    return number + 1;
  });
  checkAndReset(updatedNumber);
}

// Fonction pour incrémenter le nombre de 1
function deleteOneAtJouons() {
  let updatedNumber = updateNumber((number) => {
    return number - 1;
  });
  checkAndReset(updatedNumber);
}

// Fonction pour incrémenter le nombre de 10
function addTenAtJouons() {
  let updatedNumber = updateNumber((number) => {
    return number + 10;
  });
  checkAndReset(updatedNumber);
}

// Fonction pour décrémenter le nombre de 10
function deleteTenAtJouons() {
  let updatedNumber = updateNumber((number) => {
    return number - 10;
  });
  checkAndReset(updatedNumber);
}
