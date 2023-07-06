import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CompanyEntity } from './entities/company.entity';
import { CompanyService } from './company.service';
import { CreateCompanyInput } from './dtos/create-company.input';
import { FindCompaniesByDateInput } from './dtos/find-companies-by-date.input';
import { FindCompanyByPartnerIdInput } from './dtos/find-company-by-id.input';
import { UpdateClassInput } from '../classes/dtos/update-class.input';
import { UpdateCompanyInput } from './dtos/update-company.input';

@Resolver(() => CompanyEntity)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Mutation(() => CompanyEntity)
  createCompany(
    @Args('createCompanyInput') createCompanyInput: CreateCompanyInput,
  ) {
    return this.companyService.create(createCompanyInput);
  }

  @Mutation(() => CompanyEntity)
  updateCompany(
    @Args('updateCompanyInput') updateCompanyInput: UpdateCompanyInput
  ){
    return this.companyService.update(updateCompanyInput);
  }

  @Query(() => [ CompanyEntity ])
  findCompaniesByPartnerId(
    @Args('findCompanyByPartnerId') findCompanyByPartnerId: FindCompanyByPartnerIdInput
  ) {
    return this.companyService.findByPartnerId(findCompanyByPartnerId);
  }

  @Query(() => [CompanyEntity])
  findAllCompanies() {
    return this.companyService.findAll();
  }


  @Query(() => [CompanyEntity])
  findCompaniesByDate(
    @Args('findCompaniesByDate') findCompaniesByDate: FindCompaniesByDateInput,
  ) {
    return this.companyService.findByDate(findCompaniesByDate);
  }
}
