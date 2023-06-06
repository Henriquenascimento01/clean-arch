import { FindAllClientsUseCase } from "../../../../src/application/usecases/client/find-all-client.usecase";
import { FindAllClientsController } from "../../../../src/infra/controllers/client/find-all-clients.controller";
import { ClientInMemoryGateway } from "../../../../src/infra/gateways/client/client-inmemory.gateway";
import { FindAllClientsOutputDto } from "../../../../src/infra/presenters/client/find-all-clients.presenter";
import { HttpResponse } from "../../../../src/infra/web/http";

test("Deve retornar resposta http com status code 200 e o body com a lista de clientes", async () => {
  const gateway = new ClientInMemoryGateway();
  const usecase = new FindAllClientsUseCase(gateway);
  const controller = new FindAllClientsController(usecase);

  const expectedResponse: HttpResponse<FindAllClientsOutputDto[]> = {
    statusCode: 200,
    body: [
      {
        first_name: "Teste",
        last_name: "Teste",
        email: "teste@email.com",
        cpf: "12345678910",
      },
    ],
  };

  const actualResponse = await controller.execute({ body: {} });

  expect(actualResponse).toEqual(expectedResponse);
});
