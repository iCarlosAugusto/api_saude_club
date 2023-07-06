import { Injectable } from '@nestjs/common';
import { CreateCompanyInput } from 'src/api/company/dtos/create-company.input';
import { FindCompaniesByDateInput } from 'src/api/company/dtos/find-companies-by-date.input';
import { FindCompanyByPartnerIdInput } from 'src/api/company/dtos/find-company-by-id.input';
import { UpdateCompanyInput } from 'src/api/company/dtos/update-company.input';
import { PrismaService } from 'src/api/users/services/prima.service';

@Injectable()
export class CompanyRepository {
  constructor(private prisma: PrismaService) {}

  async create({ name, availableDay, bannerImage, partnerId }: CreateCompanyInput) {
    return await this.prisma.company.create({
      data: {
        name,
        availableDay,
        bannerImage,
        partnerId 
      }
    })
  }

  async update(data: UpdateCompanyInput){
    return await this.prisma.company.update({
      where: {
        id: data.id
      },
      data: {
        ...data
      }
    })
  }

  async findAll() {
    return await this.prisma.company.findMany();
  }

  async findByPartnerId({ partnerId }: FindCompanyByPartnerIdInput) {
    return await this.prisma.company.findMany({
      where: {
        partnerId
      }
    })
  }

  async findByDate({ date, partnerId }: FindCompaniesByDateInput) {
    return this.prisma.company.findMany({
      where: {
        availableDay: {
          has: date
        },
        partnerId
      }
    })
  }

  async findOneById(id: string){
    return await this.prisma.company.findUnique({
      where: {
        id
      }
    });
  }
}
