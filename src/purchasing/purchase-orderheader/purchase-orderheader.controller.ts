import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { PurchaseOrderheaderService } from './purchase-orderheader.service';

@Controller('purchasing')
export class PurchaseOrderheaderController {
  constructor(private purchaseOrderHeaderService: PurchaseOrderheaderService) {}

  @Get('/listOrder/:page')
  public async listPurchaseOrderHeader(@Param('page') page: number) {
    return this.purchaseOrderHeaderService.listPurchaseOrderHeader(page);
  }

  @Get('/listOrder')
  public async findAllPurchaseHeader() {
    return this.purchaseOrderHeaderService.findAllPurchaseHeader();
  }

  @Get('/listOrder/search')
  public async findPurchaseOrderByName(
    @Query('poheNumber') poheNumber: string,
  ) {
    return this.purchaseOrderHeaderService.findPurchaseOrderByName(poheNumber);
  }

  @Post('/listOrder')
  public async createPurchaseOrder(
    @Body('poheStatus') poheStatus: number,
    @Body('poheOrderDate') poheOrderDate: any,
    @Body('poheSubtotal') poheSubtotal: string,
    @Body('poheTax') poheTax: string,
    @Body('poheTotalAmount') poheTotalAmount: string,
    @Body('poheRefund') poheRefund: string,
    @Body('poheArrivalDate') poheArrivalDate: any,
    @Body('pohePayType') pohePayType: string,
    @Body('empId') empId: number,
    @Body('vendorId') vendorId: number,
  ) {
    return this.purchaseOrderHeaderService.createPurchaseOrder(
      poheStatus,
      poheOrderDate,
      poheSubtotal,
      poheTax,
      poheTotalAmount,
      poheRefund,
      poheArrivalDate,
      pohePayType,
      empId,
      vendorId,
    );
  }

  @Put('/listOrder/:poheId')
  public async editStock(
    @Param('poheId') poheId: number,
    @Body('poheStatus') poheStatus: number,
  ) {
    return this.purchaseOrderHeaderService.editPurchaseOrder(
      poheId,
      poheStatus,
    );
  }

  @Delete('/listOrder/:poheId')
  public async deletePurchaseOrder(@Param('poheId') poheId: number) {
    return this.purchaseOrderHeaderService.deletePurchaseOrder(poheId);
  }
}
