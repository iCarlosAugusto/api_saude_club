import { Injectable } from '@nestjs/common';
import { CreateServiceInput } from './dto/create-service.input';
import { UpdateServiceInput } from './dto/update-service.input';
import { ServiceRepository } from './repositories/ServiceRepository';
import { FindAllServicesInput } from './dto/find-all-services.input';

@Injectable()
export class ServicesService {
  
  constructor(
    private serviceRepository: ServiceRepository 
  ) {}

  create(createServiceInput: CreateServiceInput) {
    return this.serviceRepository.create(createServiceInput);
  }

  findAll(findAllServicesInput: FindAllServicesInput) {
    return this.serviceRepository.findAll(findAllServicesInput)
  }

  findOne(id: number) {
    return `This action returns a #${id} service`;
  }

  update(id: number, updateServiceInput: UpdateServiceInput) {
    return `This action updates a #${id} service`;
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
