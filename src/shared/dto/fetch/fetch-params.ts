import { FetchFields } from "./fetch-fields";
import { FetchFilter } from "./fetch-filter";
import { FetchOrder } from "./fetch-order";
import { FetchPagination } from "./fetch-pagination";

export interface FetchParams {

  order?: FetchOrder;
  pagination?: FetchPagination;
  filter?: FetchFilter;
  fields?: FetchFields;

}
