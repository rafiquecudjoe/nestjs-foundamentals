import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffees.entity';

@Injectable()
export class CoffeesService {

    constructor(@InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>) { }

    findAll(PaginationQuery: PaginationQueryDto) {
        const { offset, limit } = PaginationQuery
        console.log(limit)
        return this.coffeeModel.find().skip(offset).limit(limit).exec();
    }

    async findOne(id: string) {
        const coffee = this.coffeeModel.findOne({ _id: id }).exec()
        if (!coffee) {
            throw new NotFoundException(`Cofee #${id} not found`)
        }

        return coffee

    }

    create(createCoffeeDto: CreateCoffeeDto) {
        const coffee = new this.coffeeModel(createCoffeeDto)
        console.log(coffee)
        return coffee.save()
    }

    async update(id: string, updateCoffeeDTo: UpdateCoffeeDto) {
        const existingCoffee = await this.coffeeModel.findOneAndUpdate({ _id: id }, { $set: updateCoffeeDTo }, { new: true }).exec()
        console.log(existingCoffee)
        if (!existingCoffee) {
            throw new NotFoundException(`Coffee #${id} not found`)
        }
        return existingCoffee
    }

    async remove(id: string) {
        const coffee = await this.findOne(id)
        return coffee.remove();

    }



}
