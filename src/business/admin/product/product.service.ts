import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from '../../../shared/dto/admin/product/create-product.dto';
import { UpdateProductDto } from '../../../shared/dto/admin/product/update-product.dto';
import { Product } from '../../../shared/entity/product/product';
import { CrudService } from '../../../business/abstracts/crud-service';

@Injectable()
export class ProductService extends CrudService<Product, CreateProductDto, UpdateProductDto> {

  constructor(
    @InjectRepository(Product)
    private repository: Repository<Product>,
  ) {
    super(repository)
  }

  getInstance() {
    return new Product();
  }
}
