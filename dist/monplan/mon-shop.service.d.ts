import { CreateMonPlanDto, CreateMonPlan_1Dto } from './dto/create-monplan.dto';
import { UpdateMonPlanDto, UpdateMonPlan_1Dto } from './dto/update-monplan.dto';
export declare class MonPlanService {
    private mons;
    private mons1;
    create(createMonDto: CreateMonPlanDto): CreateMonPlanDto;
    findAll(): CreateMonPlanDto[];
    findOne(id: string): CreateMonPlanDto;
    update(id: string, updateMonPlanDto: UpdateMonPlanDto): void;
    remove(id: string): void;
    create1(createMonDto: CreateMonPlan_1Dto): CreateMonPlan_1Dto;
    findAll1(): CreateMonPlan_1Dto[];
    findOne1(id: string): CreateMonPlan_1Dto;
    update1(id: string, updateMonPlanDto: UpdateMonPlan_1Dto): void;
    remove1(id: string): void;
}
