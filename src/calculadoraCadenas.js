function calculadora(cadena) {
  if (cadena === "") return 0;
  let cadenaDeNumeros = cadena;
  let separadores = [",", "-"];

  if (cadena.startsWith("//")) {
    const partes = cadena.split(" ");
    const encabezado = partes[0]; 
    cadenaDeNumeros = partes.slice(1).join(" "); 

    const iguales = encabezado.match(/\[(.*?)\]/g);
    
    if (iguales) {
      iguales.forEach(c => {
        const delim = c.slice(1, -1);
        const delimEscapado = delim.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        separadores.push(delimEscapado);
      });
    }
  }

  const regex = new RegExp(separadores.join("|"));
  const numeros = cadenaDeNumeros.split(regex);
  
  return numeros
    .map(num => parseInt(num))
    .filter(num => !isNaN(num) && num <= 1000)
    .reduce((suma, num) => suma + num, 0);
}
export default calculadora;