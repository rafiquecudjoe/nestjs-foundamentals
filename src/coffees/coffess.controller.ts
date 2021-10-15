import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffess')
export class CoffessController {
    constructor(private readonly coffeesServive: CoffeesService) { }

    @Get()
    findAll(@Query() paginationQuery:PaginationQueryDto) {
        //   const {limit,number} = pagination
        return this.coffeesServive.findAll(paginationQuery)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.coffeesServive.findOne(id)

    }

    @Post()
    @HttpCode(HttpStatus.ACCEPTED)
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        console.log(createCoffeeDto)
        return this.coffeesServive.create(createCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id') id: string,@Body() updateCoffeeDTo: UpdateCoffeeDto) {
        return this.coffeesServive.update(id, updateCoffeeDTo)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesServive.remove(id)
    }

}
