import { Module } from '@nestjs/common';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ApiAdminModule } from './api/api-admin/api-admin.module';
import { ApiClientModule } from './api/api-client/api-client.module';
import { ApiSharedModule } from './api/api-shared/api-shared.module';
import { ApiGroupModule } from './api/api-group/api-group.module';
import { ApiPublicModule } from './api/api-public/api-public.module';
import { ApiModule } from './api/api.module';
import { JwtAuthGuard } from './api/guards/jwt-auth/jwt-auth.guard';
import { entities } from './shared/entity'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { EnvVarsEnum } from './enums/env-vars.enum';
import { configuration, EnvVarsDatabaseConfig } from './config/configuration';

@Module({
  imports: [
    ApiModule,
    ApiAdminModule,
    ApiClientModule,
    ApiSharedModule,
    ApiGroupModule,
    ApiPublicModule,
    ConfigModule.forRoot({
      envFilePath: process.env.NODE_ENV ? `env/${process.env.NODE_ENV.toLowerCase().trim()}.env` : undefined,
      isGlobal: true,
      load: [configuration]
    }),
    RouterModule.register([
      {
        path: 'api',
        module: ApiModule,
        children: [

          {
            path: 'admin',
            module: ApiAdminModule,
          },
          {
            path: 'client',
            module: ApiClientModule,
          },
          {
            path: 'shared',
            module: ApiSharedModule,
          },
          {
            path: 'group/:group',
            module: ApiGroupModule
          },
          {
            path: '/',
            module: ApiPublicModule
          }
        ]
      },
    ]),
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: (config: ConfigService) => {
        return ({
          ...config.get<EnvVarsDatabaseConfig>(EnvVarsEnum.DATABASE_CONFIG),
        // dropSchema: true,
        entities: entities,
        synchronize: true,
        logging: false,
      }) as TypeOrmModuleOptions
    },
      inject: [ConfigService],
    })
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ]
})
export class AppModule { }
