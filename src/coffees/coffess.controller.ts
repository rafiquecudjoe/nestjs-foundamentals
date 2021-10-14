import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';

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
    create(@Body() body) {
        return this.coffeesServive.create(body)
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() body) {
        return this.coffeesServive.update(id, body)
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.coffeesServive.remove(id)
    }

}
