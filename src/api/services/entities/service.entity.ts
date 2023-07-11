import { ObjectType, Field } from '@nestjs/graphql';
import { ConsultEntity } from 'src/api/consults/entities/consult.entity';
import { PartnerEntity } from 'src/api/partners/entities/partner.entity';

@ObjectType()
export class ServiceEntity {

  @Field(() => String)
  id: string;
  
  @Field(() => Date)
  createdAt: string;

  @Field(() => String)
  name: string;

  @Field(() => PartnerEntity, { nullable: true })
  partner: PartnerEntity;

  @Field(() => [ ConsultEntity ], { nullable: true })
  consult: ConsultEntity[];

  @Field(() => String)
  description: string;

  @Field(() => String)
  price: string;

  @Field(() => String)
  partnerId: string;

  @Field(() => String)
  partnerEmail: string;

  @Field(() => String)
  partnerName: string;

  @Field(() => String)
  partnerPhoto: string;

  @Field(() => String)
  bannerImage: string;

  @Field(() => String)
  address: string;
   
  @Field(() => String)
  specialitie: string;

  @Field(() => String)
  startAt: string;

  @Field(() => String)
  endAt: string;
}
