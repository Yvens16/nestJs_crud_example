import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PersonDatabase } from './interfaces/person.interface';
import { CrudService } from './crud.service';

@Controller('crud')
export class CrudController {
  constructor(private crudService: CrudService) { }


  @Get()
  getEverybody(): PersonDatabase[] {
    return this.crudService.read();
  }

  @Get(":id")
  GetOnePerson(@Param("id") id: string): PersonDatabase {
    return this.crudService.readById(parseInt(id));
  }

  @Post()
  AddOnePerson(@Body() person: PersonDatabase): string {
    this.crudService.create(person);
    return "Person added to db successfully";
  }

  @Put(':id')
  updatePerson(@Body() person: PersonDatabase, @Param('id') id: string): string {
    this.crudService.update(parseInt(id), person);
    return 'Person updated successfully';
  }
  @Delete(':id')
  deleteOnePerson(@Param("id") id: string): PersonDatabase[] {
    this.crudService.delete(parseInt(id));
    return this.crudService.read();
  }
}
