import { Module } from '@nestjs/common';
import { AuthModule } from '../../business/auth/auth.module';
import { AuthController } from './controllers/auth/auth.controller';

@Module({
    controllers: [
        AuthController,
    ],
    imports: [
        AuthModule,
    ]
})
export class ApiPublicModule {
    
}
