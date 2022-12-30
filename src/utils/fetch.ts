import { FetchParams } from "src/shared/dto/fetch/fetch-params";

export const resolveFetchParams = (params: FetchParams, findParams?: any) => {
  findParams = findParams || {} as any
  if (!params) {
    return findParams;
  }
  if (params.order) {
    findParams.order = {
      ...(findParams.order || {}),
      ...(params.order || {})
    }
  }
  if (params.pagination) {
    findParams.order = {
      skip: (params.pagination.skip || findParams.pagination.skip || 0),
      size: (params.pagination.size || findParams.pagination.size || 0)
    }
  }
  if (params.filter) {
    findParams.where = {
      ...(findParams.filter || {}),
      ...(params.filter || {})
    }
  }
  if (params.fields) {
    findParams.fields = {
      ...(findParams.fields || {}),
      ...(params.fields || {})
    }
  }
  return findParams;
}
