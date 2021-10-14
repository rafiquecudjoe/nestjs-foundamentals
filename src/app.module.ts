import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffessController } from './coffees/coffess.controller';
import { CoffeesService } from './coffees/coffees.service';

@Module({
  imports: [],
  controllers: [AppController, CoffessController],
  providers: [AppService, CoffeesService],
})
export class AppModule {}
