import { Client } from "@prisma/client";
import { CreateClientInput } from "../dto/create-client.input";
import { UpdateClientInput } from "../dto/update-client.input";

interface IClientRepository {
  create(data: CreateClientInput): Promise<Client>;
  findOne(id: string): Promise<Client>;
  update(data: UpdateClientInput): Promise<Client>;
}

export { IClientRepository }