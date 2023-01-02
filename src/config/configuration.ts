import { EnvVarsEnum } from "src/enums/env-vars.enum";

export const configuration = () => ({
    [EnvVarsEnum.NODE_ENV]: process.env.NODE_ENV,
    [EnvVarsEnum.PORT]: parseInt(process.env.PORT, 10) || 3000,
    [EnvVarsEnum.DATABASE_TYPE]: process.env.DATABASE_TYPE,
    [EnvVarsEnum.DATABASE_URL]: process.env.DATABASE_URL
  });