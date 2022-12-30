import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/shared/entity/product/product';
import { AdminModule } from '../admin.module';
import { ProductService } from './product.service';

@Module({
    imports: [TypeOrmModule.forFeature([Product]), AdminModule],
    providers: [ProductService],
    exports: [ProductService]
})
export class ProductModule {}
