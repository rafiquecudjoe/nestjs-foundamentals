import { Module } from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CoffessController } from './coffess.controller';

@Module({controllers:[CoffessController],providers:[CoffeesService]})
export class CoffeesModule {}
