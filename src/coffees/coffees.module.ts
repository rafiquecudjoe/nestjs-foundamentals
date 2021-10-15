import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeesService } from './coffees.service';
import { CoffessController } from './coffess.controller';
import { Coffee, CoffeeSchema } from './entities/coffees.entity';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Coffee.name,
                schema: CoffeeSchema,
            }
        ])
    ],
    controllers: [CoffessController], providers: [CoffeesService]
})
export class CoffeesModule {}
