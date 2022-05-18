function converterParaDecimal() {

  let base = document.getElementById("bases").value;
  let numero = document.getElementById("numereco").value;
  let array = numero.split("").reverse(); // IMPORTANTE torna em array, e inverte para a potenciação pegar a posição correta
  let resultado = 0;

  if (base == 2 || base == 8) {
    for (let index = 0; index < array.length; index++) {
      resultado += array[index] * Math.pow(base, index);
    }
  } else if (base == 10) {
    resultado = numero
  }
  else if (base == 16) {
    for (let index = 0; index < array.length; index++) {
      switch (array[index]) {
        case "A":
          resultado += 10 * Math.pow(base, index);
          break;
        case "B":
          resultado += 11 * Math.pow(base, index);
          break;
        case "C":
          resultado += 12 * Math.pow(base, index);
          break;
        case "D":
          resultado += 13 * Math.pow(base, index);
          break;
        case "E":
          resultado += 14 * Math.pow(base, index);
          break;
        case "F":
          resultado += 15 * Math.pow(base, index);
          break;
        default:
          resultado += array[index] * Math.pow(base, index);
      }
    }
  }

  todasBases(resultado)

}