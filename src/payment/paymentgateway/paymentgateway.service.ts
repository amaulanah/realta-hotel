import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentGateway } from 'output/entities/PaymentGateway';

@Injectable()
export class PaymentgatewayService {
  constructor(
    @InjectRepository(PaymentGateway)
    private serviceRepo: Repository<PaymentGateway>,
  ) {}
  public async getPaymentGateways() {
    return await this.serviceRepo.find({
      relations: {
        pagaEntity: true,
      },
    });
  }

  public async getPaymentGatewayById(id: number) {
    return await this.serviceRepo.findOne({
      where: { pagaEntityId: id },
      relations: {
        pagaEntity: true,
      },
    });
  }

  public async addPaymentGateway(
    pagaEntityId: number,
    pagaCode: string,
    pagaName: string,
  ) {
    try {
      const paymentGateway = await this.serviceRepo.save({
        pagaEntityId: pagaEntityId,
        pagaCode: pagaCode,
        pagaName: pagaName,
        pagaModifiedDate: new Date(),
      });
      return paymentGateway;
    } catch (error) {
      return error.message;
    }
  }

  public async updatePaymentGateway(
    id: number,
    pagaEntityId: number,
    pagaCode: string,
    pagaName: string,
  ) {
    try {
      const paymentGateway = await this.serviceRepo.update(id, {
        pagaEntityId: pagaEntityId,
        pagaCode: pagaCode,
        pagaName: pagaName,
        pagaModifiedDate: new Date(),
      });
      return paymentGateway;
    } catch (error) {
      return error.message;
    }
  }

  public async deletePaymentGateway(id: number) {
    try {
      const paymentGateway = await this.serviceRepo.delete(id);
      return paymentGateway;
    } catch (error) {
      return error.message;
    }
  }
}