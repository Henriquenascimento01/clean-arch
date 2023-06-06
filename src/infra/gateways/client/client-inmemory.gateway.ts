import { ClientGateway } from "../../../application/gateways/client/client.gateway";
import { Client } from "../../../enterprise/entities/client/client.entity";

export class ClientInMemoryGateway implements ClientGateway {
  private static clients: Client[] = [
    new Client("Teste", "Teste", "teste@email.com", "12345678910"),
  ];

  async findAll(): Promise<Client[]> {
    let clonedClients: Client[] = [];

    ClientInMemoryGateway.clients.forEach((client) =>
      clonedClients.push(
        new Client(client.fistName, client.lastName, client.email, client.cpf)
      )
    );
    return clonedClients;
  }
}
