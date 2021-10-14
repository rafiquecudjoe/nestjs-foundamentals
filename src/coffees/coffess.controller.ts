import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffess')
export class CoffessController {
    constructor(private readonly coffeesServive: CoffeesService) { }

    @Get()
    findAll(@Query() pagination) {
        //   const {limit,number} = pagination
        return this.coffeesServive.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.coffeesServive.findOne(id)

    }

    @Post()
    @HttpCode(HttpStatus.ACCEPTED)
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        
        return this.coffeesServive.create(createCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id') id: number, updateCoffeeDTo:UpdateCoffeeDto) {
        return this.coffeesServive.update(id, updateCoffeeDTo)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.coffeesServive.remove(id)
    }

}
