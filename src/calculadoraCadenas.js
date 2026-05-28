function calculadora(cadena) {
  if (cadena === "") return 0;
 const numeros = cadena.split(/,|\-/);
  
  return numeros
    .map(num => parseInt(num))
    .filter(num => num <= 1000)
    .reduce((suma, num) => suma + num, 0);
}
export default calculadora;