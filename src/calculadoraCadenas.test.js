import calculadora from "./calculadoraCadenas.js";

describe("Calculadora de Cadenas", () => {
  it("debería retornar 0 para una cadena vacía", () => {
    expect(calculadora("")).toEqual(0);
  });
});