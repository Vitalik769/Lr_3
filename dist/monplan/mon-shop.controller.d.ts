import { MonPlanService } from './mon-shop.service';
import { CreateMonPlanDto, CreateMonPlan_1Dto } from './dto/create-monplan.dto';
import { UpdateMonPlanDto, UpdateMonPlan_1Dto } from './dto/update-monplan.dto';
export declare class MonPlanController {
    private readonly MonPlanService;
    constructor(MonPlanService: MonPlanService);
    create(mon: CreateMonPlanDto): CreateMonPlanDto;
    findAll(): CreateMonPlanDto[];
    findOne(id: string): CreateMonPlanDto;
    update(id: string, updateMonPlanDto: UpdateMonPlanDto): void;
    remove(id: string): void;
    getAll_2(): CreateMonPlan_1Dto[];
    findOne_2(id: string): CreateMonPlan_1Dto;
    create_2(mon: CreateMonPlan_1Dto): CreateMonPlan_1Dto;
    update_2(id: string, updateMonPlanDto: UpdateMonPlan_1Dto): void;
    remove_2(id: string): void;
}
