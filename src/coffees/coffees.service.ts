import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: "Rafique Adam Cujdoe",
            brand: "Buddy Brew",
            flavors: ["chocolate", 'vanilla']
        },
    ];

    findAll() {
        return this.coffees
    }

    findOne(id: number) {
        return this.coffees.find(item => item.id === +id)
        
    }

    create(createCoffeeDto: any) {
        return this.coffees.push(createCoffeeDto)
    }

    update(id: number, updateCoffeeDTo: any) {
        const existingCoffee = this.findOne(id)
        if (existingCoffee) {
            //update existing entry
        }
    }

    remove(id: number) {
        const coffeeIndex = this.coffees.findIndex(item => item.id === +id)
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex,1)
        }
        
    }



}
