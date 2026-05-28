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


});