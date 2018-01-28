import { InMemoryDbService } from 'angular-in-memory-web-api';
import { heroes } from './heros-data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    return { heroes };
  }
}
