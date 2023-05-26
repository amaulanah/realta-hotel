/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
    Delete,
  } from '@nestjs/common';
  import { InjectRepository } from '@nestjs/typeorm'
  import { Repository, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
  import { Shift } from 'output/entities/Shift';
  import { ShiftService } from './shift.service';

@Controller('shift')
export class ShiftController {
    constructor(private shiftService: ShiftService) {}

    @Get()
    public async findAllShift() {
      return await this.shiftService.findAllShift();
    }
    
    @Get(':id')
    public async findOneShift(@Param('id') id: number) {
      return await this.shiftService.findOneShift(id);
    }
 
    @Post()
    public async createShift(
    @Body('shiftName') shiftName: string,
    @Body('shiftStartTime') shiftStartTime: string,
    @Body('shiftEndTime') shiftEndTime: string,
    ) { 
    return await this.shiftService.createShift(
      shiftName, 
      shiftStartTime,
      shiftEndTime
    );
    } 

    @Put(':id')
    public async updateShift(
    @Param('id') id: number,
    @Body('shiftName') shiftName: string,
    @Body('shiftStartTime') shiftStartTime: string,
    @Body('shiftEndTime') shiftEndTime: string,
    ) {
    return await this.shiftService.updateShift(
      id,
      shiftName,
      shiftStartTime,
      shiftEndTime
    );
    }

    @Delete(':id')
    public async deleteShift(@Param('id') id: number) {
    return await this.shiftService.deleteShift(id);
    }
}
 