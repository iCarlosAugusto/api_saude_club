import { Injectable } from "@nestjs/common";
import { Admin, Partner } from "@prisma/client";
import { CreateAdminInput } from "../dto/create-admin.input";
import { PrismaService } from "src/api/users/services/prima.service";

@Injectable()
export class AdminRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateAdminInput): Promise<Admin> {
        const admin = await this.prisma.admin.create({
            data: {
                identification: data.identification,
                email: data.email,
                name: data.name,
                password: data.password,
                phoneNumber: data.phoneNumber,
                photo: data.phoneNumber
            }
        })
        return admin;
    }
}