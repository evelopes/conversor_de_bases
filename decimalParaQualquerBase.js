let resto = [];
let hexadecimal = ["A", "B", "C", "D", "E", "F"];
let novaBase = "";
let binario;
let decimal;
let octal;
let hex;


function todasBases(numero) {
  binario = dividir(numero, 2);
  decimal = dividir(numero, 10);
  octal = dividir(numero, 8);
  hex = dividir(numero, 16);

  let resultado = document.getElementById("resultado") ;
  resultado.style.display = "block";


  document.getElementById("resultadoBin").innerHTML = binario;
  document.getElementById("resultadoDec").innerHTML = decimal;
  document.getElementById("resultadoOct").innerHTML = octal;
  document.getElementById("resultadoHex").innerHTML = hex;
}




function dividir(valor, base) {
  while (resto.length) {
    resto.pop();
  }

  while (valor !== 0) {
    resto.push(valor % base);
    valor = parseInt(valor / base);
  }
  return converter(resto, base);
}

function converter(array, base) {
  if (base == 8) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] >= 8 && array[index] <= 17) {
        array[index] += 2;
      }
    }
  } else if (base == 16) {
    for (let index = 0; index < array.length; index++) {
      if (array[index] == 10) {
        array[index] = hexadecimal[0];
      } else if (array[index] == 11) {
        array[index] = hexadecimal[1];
      } else if (array[index] == 12) {
        array[index] = hexadecimal[2];
      } else if (array[index] == 13) {
        array[index] = hexadecimal[3];
      } else if (array[index] == 14) {
        array[index] = hexadecimal[4];
      } else if (array[index] == 15) {
        array[index] = hexadecimal[5];
      } else if (array[index] == 16) {
        array[index] = hexadecimal[6];
      } else if (array[index] == 17) {
        array[index] = hexadecimal[7];
      }
    }
  }
  return virarResultado(resto, base);
}

function virarResultado(valor, base) {
  return valor.reverse().join("");
}
