import { Module } from '@nestjs/common';
import { AdminModule } from 'src/business/admin/admin.module';
import { GroupModule } from 'src/business/admin/group/group.module';
import { MeasurementUnitModule } from 'src/business/admin/measurement-unit/measurement-unit.module';
import { PhysicalQuantityModule } from 'src/business/admin/physical-quantity/physical-quantity.module';
import { ProductModule } from 'src/business/admin/product/product.module';
import { UserModule } from 'src/business/admin/user/user.module';
import { ApiAdminGroupController } from './controllers/api-admin-group.controller';
import { ApiAdminMeasurementUnitController } from './controllers/api-admin-measurement-unit.controller';
import { ApiAdminPhysicalQuantityController } from './controllers/api-admin-physical-quantity.controller';
import { ApiAdminProductController } from './controllers/api-admin-product.controller';
import { ApiAdminUserController } from './controllers/api-admin-user.controller';
import { ApiAdminController } from './controllers/api-admin.controller';

@Module({
  controllers: [
    ApiAdminController,
    ApiAdminGroupController,
    ApiAdminMeasurementUnitController,
    ApiAdminPhysicalQuantityController,
    ApiAdminProductController,
    ApiAdminUserController
  ],
  imports: [
    AdminModule,
    MeasurementUnitModule,
    PhysicalQuantityModule,
    GroupModule,
    ProductModule,
    UserModule
  ]
})
export class ApiAdminModule { }
