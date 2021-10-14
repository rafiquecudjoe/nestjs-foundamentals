import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffess')
export class CoffessController {
     
    @Get('flavours')
    findAll() {
      return "This action returns all coffess"
    }
    
    @Get(':id')
    findOne(@Param('id') id: String ){
    return `The id of the request is ${id}`
        
    }

    @Post()
    create(@Body() body) {
        return body
    }

}
