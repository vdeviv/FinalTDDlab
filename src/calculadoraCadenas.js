function calculadora(cadena) {
  if (cadena === "") return 0;
  const numeros = cadena.split(/,|\-/); 

  return numeros.reduce((suma, num) => suma + parseInt(num), 0);
}
export default calculadora;