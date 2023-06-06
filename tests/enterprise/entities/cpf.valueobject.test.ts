import { Cpf } from "../../../src/enterprise/entities/cpf.valueobject";

test("Deve lançar erro quando tiver menos que 11 caracteres", () => {
  const exec = () => new Cpf("123");
  expect(exec).toThrow(Error);
});
