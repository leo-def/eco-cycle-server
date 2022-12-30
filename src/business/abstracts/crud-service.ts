import { FetchParams } from "src/shared/dto/fetch/fetch-params";
import { resolveFetchParams } from "src/utils/fetch";
import { Repository } from "typeorm";

export abstract class CrudService<T, C, U> {

  constructor(
    private _repository: Repository<T>,
  ) { }

  abstract getInstance(): T

  async search(params?: FetchParams, findParams?: any) {
    const resolvedFetchParams = resolveFetchParams(params, findParams);
    const [items, count] = await this._repository.findAndCount(resolvedFetchParams);
    return ({ items, count, params });
  }

  async create(dto: C) {
    const item = this.getInstance();
    Object.assign(item, dto);
    return await this._repository.save(item)
  }

  async findAll() {
    return await this._repository.find();
  }

  async findOne(id: string) {
    return await this._repository.findOneBy({ id } as any);
  }

  async update(id: string, dto: U) {
    const item = await this._repository.findOneBy({ id } as any)
    Object.assign(item, dto);
    return await this._repository.save(item)
  }

  async remove(id: string) {
    return await this._repository.delete(id);
  }
}
