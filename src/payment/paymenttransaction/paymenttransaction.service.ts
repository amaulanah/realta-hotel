import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentTransaction } from 'output/entities/PaymentTransaction';

@Injectable()
export class PaymenttransactionService {
  constructor(
    @InjectRepository(PaymentTransaction)
    private serviceRepo: Repository<PaymentTransaction>,
  ) {}
  public async getPaymentTransactions() {
    return await this.serviceRepo.find();
  }
  public async getPaymentTransactionById(id: number) {
    return await this.serviceRepo.findOne({
      where: { patrId: id },
    });
  }
  public async addPaymentTransaction(
    patrId: number,
    patrTrxId: string,
    patrDebet: string,
    patrCredit: string,
    patrType: string,
    patrNote: string,
    patrOrderNumber: string,
    patrSourceId: string,
    patrTargetId: string,
    patrTrxNumberRef: string,
    patrUserId: number,
  ) {
    try {
      const paymentTransaction = await this.serviceRepo.save({
        patrId: patrId,
        patrTrxId: patrTrxId,
        patrDebet: patrDebet,
        patrCredit: patrCredit,
        patrType: patrType,
        patrNote: patrNote,
        patrModifiedDate: new Date(),
        patrOrderNumber: patrOrderNumber,
        patrSourceId: patrSourceId,
        patrTargetId: patrTargetId,
        patrTrxNumberRef: patrTrxNumberRef,
        patrUserId: patrUserId,
      });
      return paymentTransaction;
    } catch (error) {
      return error.message;
    }
  }
  public async updatePaymentTransaction(
    id: number,
    patrId: number,
    patrTrxId: string,
    patrDebet: string,
    patrCredit: string,
    patrType: string,
    patrNote: string,
    patrOrderNumber: string,
    patrSourceId: string,
    patrTargetId: string,
    patrTrxNumberRef: string,
    patrUserId: number,
  ) {
    try {
      const paymentTransaction = await this.serviceRepo.update(id, {
        patrId: patrId,
        patrTrxId: patrTrxId,
        patrDebet: patrDebet,
        patrCredit: patrCredit,
        patrType: patrType,
        patrNote: patrNote,
        patrModifiedDate: new Date(),
        patrOrderNumber: patrOrderNumber,
        patrSourceId: patrSourceId,
        patrTargetId: patrTargetId,
        patrTrxNumberRef: patrTrxNumberRef,
        patrUserId: patrUserId,
      });
      return paymentTransaction;
    } catch (error) {
      return error.message;
    }
  }
  public async deletePaymentTransaction(id: number) {
    try {
      const paymentTransaction = await this.serviceRepo.delete(id);
      return paymentTransaction;
    } catch (error) {
      return error.message;
    }
  }
}