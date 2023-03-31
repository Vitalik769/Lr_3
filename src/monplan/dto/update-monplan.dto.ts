import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateMonPlanDto, CreateMonPlan_1Dto } from './create-monplan.dto';

export class UpdateMonPlanDto extends PartialType(CreateMonPlanDto) {
    @ApiProperty({example:"0", description:"Id"})
    monplan_id: string;
    @ApiProperty({example:"Vitaliy", description:"Name"})
    monplan_Name: string;
    @ApiProperty({example:"Male ", description:"Sex"})
    monplan_Sex: string;
    @ApiProperty({example:"18", description:"Age"})
    monplan_Age: string;
    @ApiProperty({example:"1000", description:"Price"})
    monplan_Price: string;
    @ApiProperty({example:"74", description:"arendTime"})
    monplan_arendTime: string;
}
export class UpdateMonPlan_1Dto extends PartialType(CreateMonPlan_1Dto) {
    @ApiProperty({example:"0", description:"Id"})
    monplan1_id: string;
    @ApiProperty({example:"Vitaliy", description:"Name"})
    monplan1_Name: string;
    @ApiProperty({example:"Male ", description:"Sex"})
    monplan1_Sex: string;
    @ApiProperty({example:"18", description:"Age"})
    monplan1_Age: string;
    @ApiProperty({example:"1000", description:"Price"})
    monplan1_Price: string;
    @ApiProperty({example:"74", description:"arendTime"})
    monplan1_arendTime: string;
}
