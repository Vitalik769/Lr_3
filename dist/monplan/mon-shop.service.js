"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonPlanService = void 0;
const common_1 = require("@nestjs/common");
const mon_exception_1 = require("../monplan/exception/note.exception/mon.exception");
const uuidv4_1 = require("uuidv4");
let MonPlanService = class MonPlanService {
    constructor() {
        this.mons = [];
        this.mons1 = [];
    }
    create(createMonDto) {
        createMonDto.monplan_id = (0, uuidv4_1.uuid)();
        this.mons.push(createMonDto);
        return createMonDto;
    }
    findAll() {
        if (this.mons.length == 0) {
            throw new mon_exception_1.MonsException('There are no mons');
        }
        return this.mons;
    }
    findOne(id) {
        for (const item of this.mons) {
            if (item.monplan_id == id)
                return item;
            throw new mon_exception_1.MonsException('Such id does not exist');
        }
    }
    update(id, updateMonPlanDto) {
        const pid = this.mons.findIndex((p) => p.monplan_id == id);
        this.mons[pid] = Object.assign(Object.assign({}, this.mons[pid]), updateMonPlanDto);
    }
    remove(id) {
        const result = this.mons.filter((c) => c.monplan_id !== id);
        if (result.length === this.mons.length) {
            throw new mon_exception_1.MonsException('Such id does now exist');
        }
        this.mons = result;
    }
    create1(createMonDto) {
        createMonDto.monplan1_id = (0, uuidv4_1.uuid)();
        this.mons1.push(createMonDto);
        return createMonDto;
    }
    findAll1() {
        if (this.mons1.length == 0) {
            throw new mon_exception_1.MonsException('There are no mons');
        }
        return this.mons1;
    }
    findOne1(id) {
        for (const item of this.mons1) {
            if (item.monplan1_id == id)
                return item;
            throw new mon_exception_1.MonsException('Such id does not exist');
        }
    }
    update1(id, updateMonPlanDto) {
        const pid = this.mons1.findIndex((p) => p.monplan1_id == id);
        this.mons1[pid] = Object.assign(Object.assign({}, this.mons1[pid]), updateMonPlanDto);
    }
    remove1(id) {
        const result = this.mons1.filter((c) => c.monplan1_id !== id);
        if (result.length === this.mons1.length) {
            throw new mon_exception_1.MonsException('Such id does now exist');
        }
        this.mons1 = result;
    }
};
MonPlanService = __decorate([
    (0, common_1.Injectable)()
], MonPlanService);
exports.MonPlanService = MonPlanService;
//# sourceMappingURL=mon-shop.service.js.map