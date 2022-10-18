import { Injectable } from '@nestjs/common';
import { PersonDatabase} from './interfaces/person.interface';
import fakeData from "../fakeData.json";

@Injectable()
export class CrudService {
  private data: PersonDatabase[] = fakeData;

  read(): PersonDatabase[] {
    return this.data;
  }

  readById(id: number): PersonDatabase {
    return this.data[id];
  }

  create(person: PersonDatabase): void {
    person.id = this.data.length;
    this.data.push(person);
  }

  update(id: number, person: PersonDatabase): void {
    const index = this.data.findIndex(person => person.id === id);
    this.data[index] = person;
  }

  delete(id: number): PersonDatabase[] {
    return this.data = this.data.filter(person => person.id !== id);
  }
}
