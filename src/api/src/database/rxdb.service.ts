import RxDB, { RxDatabase } from 'rxdb';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RxDBService {
  private _db: RxDatabase;

  constructor() {
    RxDB.plugin(require('pouchdb-adapter-idb'));
  }

  async initDB(): Promise<RxDatabase> {
    return await RxDB.create({
      name: 'dmtooldb',
      adapter: 'idb',
      multiInstance: false,
      queryChangeDetection: false,
    });
  }

  async db(): Promise<RxDatabase> {
    if (!this._db) this._db = await this.initDB();
    return this._db;
  }
}
