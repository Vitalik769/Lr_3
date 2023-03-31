import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Header,
  UseFilters,
} from '@nestjs/common';
import { MonPlanService } from './mon-shop.service';
import { CreateMonPlanDto, CreateMonPlan_1Dto } from './dto/create-monplan.dto';
import { UpdateMonPlanDto, UpdateMonPlan_1Dto } from './dto/update-monplan.dto';
import { MonsExceptionFilter } from './filter/note-exception/mon-exception.filter';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse,ApiTags } from '@nestjs/swagger';

@Controller('monplan')
@UseFilters(new MonsExceptionFilter())
export class MonPlanController {
  constructor(private readonly MonPlanService: MonPlanService) {}


  @ApiTags("MonPlan API")
  @ApiOperation({summary: "Створюємо monplan" })
  @ApiResponse({status:200,type:[CreateMonPlanDto] })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() mon: CreateMonPlanDto) {
    return this.MonPlanService.create(mon);
  }

  @ApiTags("MonPlan API")
  @ApiOperation({summary: "Отримуємо всі записи monplan" })
  @ApiResponse({status:200,type:[CreateMonPlanDto] })
  @Get()
  findAll() {
    return this.MonPlanService.findAll();
  }
  @ApiTags("MonPlan API")
  @ApiOperation({summary: "Отримуємо один запиc з monplan" })
  @ApiResponse({status:200,type:[CreateMonPlanDto] })
  @Get(':monplan_id')
  findOne(@Param('monplan_id') id: string) :CreateMonPlanDto {
    return this.MonPlanService.findOne(id);
  }
  @ApiTags("MonPlan API")
  @ApiOperation({summary: "Оновлюємо один запис в monplan" })
  @ApiResponse({status:200,type:[CreateMonPlanDto] })
  @Patch(':monplan_id')
  update(@Param('monplan_id') id: string, @Body() updateMonPlanDto: UpdateMonPlanDto) {
    return this.MonPlanService.update(id, updateMonPlanDto);
  }
  @ApiTags("MonPlan API")
  @ApiOperation({summary: "Видаляємо один запис в monplan" })
  @ApiResponse({status:200,type:[CreateMonPlanDto] })
  @Delete(':monplan_id')
  remove(@Param('monplan_id') id: string) {
    return this.MonPlanService.remove(id);
  }


  @ApiTags("MonPlan_1 API")
  @ApiOperation({summary: "Отримуємо всі записи в monplan1" })
  @ApiResponse({status:200,type:[CreateMonPlan_1Dto] })
  @Get(":monplan_id/monplan1")
  getAll_2():CreateMonPlan_1Dto[]{
    console.log("1")
    return this.MonPlanService.findAll1();
  }

  @ApiTags("MonPlan_1 API")
  @ApiOperation({summary: "Створюємо monplan1" })
  @ApiResponse({status:200,type:[CreateMonPlan_1Dto] })
  @Get(':monplan_id/monplan1/:monplan1_id')
  findOne_2(@Param('monplan1_id') id: string) :CreateMonPlan_1Dto {
    return this.MonPlanService.findOne1(id);
  }

  @ApiTags("MonPlan_1 API")
  @ApiOperation({summary: "Створюємо monplan1" })
  @ApiResponse({status:200,type:[CreateMonPlan_1Dto] })
  @Post(':monplan_id/monplan1') 
  create_2(@Body() mon: CreateMonPlan_1Dto) {
    return this.MonPlanService.create1(mon);
  }

  @ApiTags("MonPlan_1 API")
  @ApiOperation({summary: "Оновлюємо один запис в monplan1" })
  @ApiResponse({status:200,type:[CreateMonPlan_1Dto] })
  @Patch(':monplan_id/monplan1/:monplan1_id')
  update_2(@Param('monplan1_id') id: string, @Body() updateMonPlanDto: UpdateMonPlan_1Dto) {
    return this.MonPlanService.update1(id, updateMonPlanDto);
  }

  @ApiTags("MonPlan_1 API")
  @ApiOperation({summary: "Видаляємо один запис в monplan1" })
  @ApiResponse({status:200,type:[CreateMonPlan_1Dto] })
  @Delete(':monplan_id/monplan1/:monplan1_id')
  remove_2(@Param('monplan1_id') id: string) {
    return this.MonPlanService.remove1(id);
  }
}
