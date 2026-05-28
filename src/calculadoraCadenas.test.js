import calculadora from "./calculadoraCadenas.js";

describe("Calculadora de Cadenas", () => {
   it("debería retornar 0 para una cadena vacía", () => {
    expect(calculadora("")).toEqual(0);
  });

  it("debería retornar el mismo número si es que la cadena tiene un solo número", () => {
    expect(calculadora("3")).toEqual(3);
  });

  it("debería retornar la suma de dos números separados por coma", () => {
    expect(calculadora("2,2")).toEqual(4);
  });

  it("debería sumar varios números usando comas y guiones como separadores", () => {
    expect(calculadora("2-2,5,5")).toEqual(14);
  });

   it("debería ignorar los números mayores a 1000", () => {
    expect(calculadora("3,1001,3")).toEqual(6);
  });

  it("debería soportar un delimitador personalizado de cualquier longitud", () => {
    expect(calculadora("//[;] 10;7;3")).toEqual(20);
    expect(calculadora("//[***] 5***2***3")).toEqual(10);
  });


});