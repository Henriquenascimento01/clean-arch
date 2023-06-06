import { FindAllClientsUseCase } from "../../../../src/application/usecases/client/find-all-client.usecase";
import { ClientInMemoryGateway } from "../../../../src/infra/gateways/client/client-inmemory.gateway";
import { Client } from "../../../../src/enterprise/entities/client/client.entity";

test("Deve retornar a lista de clientes", async () => {
  const clientGateway = new ClientInMemoryGateway();
  const findAllClientsUseCase = new FindAllClientsUseCase(clientGateway);

  const expectedClients = [
    new Client("Teste", "Teste", "teste@email.com", "12345678910"),
  ];

  const actualClients = await findAllClientsUseCase.execute();

  expect(actualClients).toEqual(expectedClients);
});
