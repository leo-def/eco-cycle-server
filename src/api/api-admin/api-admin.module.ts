import { Module } from '@nestjs/common';
import { AdminModule } from '../../business/admin/admin.module';
import { GroupModule } from '../../business/admin/group/group.module';
import { MeasurementUnitModule } from '../../business/admin/measurement-unit/measurement-unit.module';
import { PhysicalQuantityModule } from '../../business/admin/physical-quantity/physical-quantity.module';
import { ProductModule } from '../../business/admin/product/product.module';
import { UserModule } from '../../business/admin/user/user.module';
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
