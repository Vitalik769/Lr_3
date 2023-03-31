import { Injectable } from '@nestjs/common';
import { CreateMonPlanDto, CreateMonPlan_1Dto } from './dto/create-monplan.dto';
import { UpdateMonPlanDto, UpdateMonPlan_1Dto } from './dto/update-monplan.dto';
import { MonsException } from '../monplan/exception/note.exception/mon.exception';
import { uuid } from 'uuidv4';

@Injectable()
export class MonPlanService {
  private mons: CreateMonPlanDto[] = [];
  private mons1: CreateMonPlan_1Dto[] = [];

  create(createMonDto: CreateMonPlanDto): CreateMonPlanDto {
    createMonDto.monplan_id = uuid();
    this.mons.push(createMonDto);
    return createMonDto;
  }

  findAll() {
    if (this.mons.length == 0) {
      throw new MonsException('There are no mons');
    }
    return this.mons;
  }

  findOne(id: string) {
    for (const item of this.mons) {
      if (item.monplan_id == id) return item;
      throw new MonsException('Such id does not exist');
    }
  }

  update(id: string, updateMonPlanDto: UpdateMonPlanDto): void {
    const pid = this.mons.findIndex((p) => p.monplan_id == id);
    this.mons[pid] = {
      ...this.mons[pid],
      ...updateMonPlanDto,
    };
  }

  remove(id: string) {
    const result: CreateMonPlanDto[] = this.mons.filter((c) => c.monplan_id !== id);
    if (result.length === this.mons.length) {
      throw new MonsException('Such id does now exist');
    }

    this.mons = result;
  }
  create1(createMonDto: CreateMonPlan_1Dto): CreateMonPlan_1Dto {
    createMonDto.monplan1_id = uuid();
    this.mons1.push(createMonDto);
    return createMonDto;
  }

  findAll1() {
    if (this.mons1.length == 0) {
      throw new MonsException('There are no mons');
    }
    return this.mons1;
  }

  findOne1(id: string) {
    for (const item of this.mons1) {
      if (item.monplan1_id == id) return item;
      throw new MonsException('Such id does not exist');
    }
  }

  update1(id: string, updateMonPlanDto: UpdateMonPlan_1Dto): void {
    const pid = this.mons1.findIndex((p) => p.monplan1_id == id);
    this.mons1[pid] = {
      ...this.mons1[pid],
      ...updateMonPlanDto,
    };
  }

  remove1(id: string) {
    const result: CreateMonPlan_1Dto[] = this.mons1.filter((c) => c.monplan1_id !== id);
    if (result.length === this.mons1.length) {
      throw new MonsException('Such id does now exist');
    }

    this.mons1 = result;
  }
}
