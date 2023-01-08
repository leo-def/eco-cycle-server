import { EnvVarsEnum } from "src/enums/env-vars.enum";

export const configuration = () => ({
  [EnvVarsEnum.NODE_ENV]: process.env.NODE_ENV,
  [EnvVarsEnum.PORT]: parseInt(process.env.PORT, 10) || 3000,
  [EnvVarsEnum.DATABASE_CONFIG]: {
    type: process.env.DATABASE_TYPE,
    database: (process.env.DATABASE_URL || process.env.DATABASE_NAME),
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
  } as EnvVarsDatabaseConfig,
  [EnvVarsEnum.DATABASE_DATATIME_TYPE]: process.env.DATABASE_DATATIME_TYPE
});

export interface EnvVarsDatabaseConfig {
  type?: string;
  database?: string;
  host?: string;
  port?: string;
  username?: string;
  password?: string;
}