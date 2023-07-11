import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClassInput } from './dtos/create-class.input';
import { BookClassInput } from './dtos/book-class.input';
import { FindNextClientClassInput } from './dtos/find-next-client-class.input';
import { CancelClientClassInput } from './dtos/cancel-client-class.input';
import { ClassRepository } from 'src/repositories/class.repository';
import { ClientRepository } from 'src/repositories/client.repository';
import { FindAllClassesByDateInput } from './dtos/find-classes_by_date.input';
import { FindAllClassesInput } from './dtos/find-all-classes.input';
import { CompanyRepository } from 'src/repositories/company.repository';
import { UpdateClassInput } from './dtos/update-class.input';
import { DeleteClassInput } from './dtos/delete-class.input';

@Injectable()
export class ClassService {
  constructor(
    private companyRepository: CompanyRepository,
    private classRepository: ClassRepository,
    private clientRepository: ClientRepository,
  ) {}

  async createClass(data: CreateClassInput) {
    console.log("aqi2")
    const company = await this.companyRepository.findOneById(data.companyId);

    if (!company) {
      throw new HttpException(
        'Não foi possível criar a aula pelo id de companhia fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }

    const classFound = await this.classRepository.createClass(data);

    return classFound;
  }
  
  async update(data: UpdateClassInput) {
    const classExists = this.classRepository.findClassById(data.classId);
    if (!classExists) throw new HttpException('Companhia não existente', 404);
    const classUpdated = await this.classRepository.update(data);
    return classUpdated;
  }

  async delete(data: DeleteClassInput) {
    const classExists = this.classRepository.findClassById(data.classId);
    if (!classExists) throw new HttpException('Companhia não existente', 404);
    await this.classRepository.delete(data);
    return 'Deletado com sucesso!';
  }

  async findAllClassses(data: FindAllClassesInput) {
    const company = await this.companyRepository.findOneById(data.companyId);
    if (!company) throw new HttpException('Companhia não existente', 404);
    const classes = await this.classRepository.findAllClasses(data);
    return classes;
  }

  async findAllClassesByDate({ companyId, date }: FindAllClassesByDateInput) {
    const classes = await this.classRepository.findAllClassesByDate({
      companyId,
      date,
    });
    return classes;
  }

  async bookClass({ classId, clientId }: BookClassInput) {
    const classFound = await this.classRepository.findClassById(classId);
    const client = await this.clientRepository.findOne(clientId);

    if (!classFound || !client) {
      throw new HttpException(
        'Não foi possível criar a aula pelo id de companhia fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }

    const classBooked = await this.classRepository.bookClass({
      classId,
      clientId,
    });
    return classBooked;
  }

  async findNextClientClass({ clientId }: FindNextClientClassInput) {
    const client = await this.clientRepository.findOne(clientId);

    if (!client) {
      throw new HttpException(
        'Não foi possível encontrar a aula pelo id do cliente fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const classFound = await this.classRepository.findNextClientClass({
      clientId,
    });
    return classFound;
  }

  async cancelClass({ classId, clientId }: CancelClientClassInput) {
    const client = await this.clientRepository.findOne(clientId);
    const classFound = await this.classRepository.findClassById(classId);
    if (!client || !classFound) {
      throw new HttpException(
        'Não foi possível criar a aula pelo id de companhia fornecido',
        HttpStatus.BAD_REQUEST,
      );
    }
    const classCanceled = await this.classRepository.cancelClass({
      classId,
      clientId,
    });
    return classCanceled;
  }
}
