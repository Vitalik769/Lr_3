import { CreateMonPlanDto, CreateMonPlan_1Dto } from './create-monplan.dto';
declare const UpdateMonPlanDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMonPlanDto>>;
export declare class UpdateMonPlanDto extends UpdateMonPlanDto_base {
    monplan_id: string;
    monplan_Name: string;
    monplan_Sex: string;
    monplan_Age: string;
    monplan_Price: string;
    monplan_arendTime: string;
}
declare const UpdateMonPlan_1Dto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateMonPlan_1Dto>>;
export declare class UpdateMonPlan_1Dto extends UpdateMonPlan_1Dto_base {
    monplan1_id: string;
    monplan1_Name: string;
    monplan1_Sex: string;
    monplan1_Age: string;
    monplan1_Price: string;
    monplan1_arendTime: string;
}
export {};
