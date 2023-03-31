"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMonPlan_1Dto = exports.UpdateMonPlanDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const swagger_1 = require("@nestjs/swagger");
const create_monplan_dto_1 = require("./create-monplan.dto");
class UpdateMonPlanDto extends (0, mapped_types_1.PartialType)(create_monplan_dto_1.CreateMonPlanDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "0", description: "Id" }),
    __metadata("design:type", String)
], UpdateMonPlanDto.prototype, "monplan_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Vitaliy", description: "Name" }),
    __metadata("design:type", String)
], UpdateMonPlanDto.prototype, "monplan_Name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Male ", description: "Sex" }),
    __metadata("design:type", String)
], UpdateMonPlanDto.prototype, "monplan_Sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "18", description: "Age" }),
    __metadata("design:type", String)
], UpdateMonPlanDto.prototype, "monplan_Age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1000", description: "Price" }),
    __metadata("design:type", String)
], UpdateMonPlanDto.prototype, "monplan_Price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "74", description: "arendTime" }),
    __metadata("design:type", String)
], UpdateMonPlanDto.prototype, "monplan_arendTime", void 0);
exports.UpdateMonPlanDto = UpdateMonPlanDto;
class UpdateMonPlan_1Dto extends (0, mapped_types_1.PartialType)(create_monplan_dto_1.CreateMonPlan_1Dto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "0", description: "Id" }),
    __metadata("design:type", String)
], UpdateMonPlan_1Dto.prototype, "monplan1_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Vitaliy", description: "Name" }),
    __metadata("design:type", String)
], UpdateMonPlan_1Dto.prototype, "monplan1_Name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "Male ", description: "Sex" }),
    __metadata("design:type", String)
], UpdateMonPlan_1Dto.prototype, "monplan1_Sex", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "18", description: "Age" }),
    __metadata("design:type", String)
], UpdateMonPlan_1Dto.prototype, "monplan1_Age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1000", description: "Price" }),
    __metadata("design:type", String)
], UpdateMonPlan_1Dto.prototype, "monplan1_Price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "74", description: "arendTime" }),
    __metadata("design:type", String)
], UpdateMonPlan_1Dto.prototype, "monplan1_arendTime", void 0);
exports.UpdateMonPlan_1Dto = UpdateMonPlan_1Dto;
//# sourceMappingURL=update-monplan.dto.js.map