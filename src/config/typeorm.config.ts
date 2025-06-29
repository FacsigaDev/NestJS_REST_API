import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Szemely } from '../entities/szemely.entity';
import { Esemeny } from '../entities/esemeny.entity';
import { Feliratkozas } from '../entities/feliratkozas.entity';
import { Hir } from '../entities/hir.entity';
import { Cim } from '../entities/cim.entity';
import { Telepules } from '../entities/telepules.entity';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: join(__dirname, '..', '..', 'database', 'esemenyre-feliratkozas.sqlite'),
  entities: [Szemely, Esemeny, Feliratkozas, Hir, Cim, Telepules],
  synchronize: true,
  logging: false,
  logger: 'simple-console',
};
