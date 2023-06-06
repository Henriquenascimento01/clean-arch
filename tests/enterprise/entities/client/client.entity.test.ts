import { Client } from "../../../../src/enterprise/entities/client/client.entity";

test("Deve lançar um erro quando nome for invalido", () => {
  const exec = () => new Client("A", "Teste", "teste@email.com", "0000000000");
  expect(exec).toThrow(Error);
});

test("Deve lançar um erro quando sobrenome for invalido", () => {
    const exec = () => new Client("Teste", "A", "teste@email.com", "0000000000");
    expect(exec).toThrow(Error);
  });
