import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import 'dotenv/config';

const typeormConfig = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || '',
  entities: [
    __dirname + '/../**/*.entity{.ts,.js}',
  ],
  synchronize: false,
  migrationsTableName: 'migrations',
  migrations: [
    __dirname + '/migrations/**/*{.ts,.js}'
  ],
  namingStrategy: new SnakeNamingStrategy(),
});

export default typeormConfig;