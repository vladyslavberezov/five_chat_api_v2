import { CreateOptions } from 'sequelize/types/model';
import { Model } from 'sequelize-typescript';
import { DestroyOptions, FindOptions } from 'sequelize';
import { BaseModel } from './base-sequelize.model';

/**
 * BaseSequelizeRepository - using for wrapping repositories and implement base sequelize methods
 */
class BaseSequelizeRepository<T = typeof BaseModel, M = BaseModel> {
  /**
   * BaseSequelizeRepository
   * @param model - inject sequelize Model
   */
  constructor(protected readonly model: typeof BaseModel) {}

  /**
   * create func
   * @param data
   * @param options
   * @returns return created objects
   */
  async create(data: Partial<M>, options?: CreateOptions<T>) {
    return this.model.create<Model<T>>(data as any, options);
  }

  /** delete - deletes objects
   * @param  data - any param, which is the body for getting the document
   * @param  options?: - destroy options
   * @returns  number of destroy rows
   */
  async delete<T>(data: Partial<M>, options?: DestroyOptions<T>) {
    return this.model.destroy(data);
  }

  findOne(data: FindOptions<Partial<M>>) {
    return this.model.findOne<Model<T>>(data as any);
  }
  findAll(data: FindOptions<Partial<M>>) {
    return this.model.findAll<Model<T>>(data as any);
  }

  getByPk(id: number) {
    return this.model.findByPk<Model<T>>(id);
  }

  // /**
  //  * findAll func
  //  * @param {<FindOptions>} opts - optional param
  //  * @returns return found objects
  //  */
  // findAll<T>(opts?: FindOptions): Promise<T> {
  //   const options = { ...opts };
  //
  //   return this.model.findAll(options).catch(e => new HttpException(e.message, e.status));
  // }

  // /**
  //  * create func
  //  * @param {<T>} body - any param, which is the body for creating the document
  //  * @param {<ICreateOptions>} opts - optional param
  //  * @returns {Promise<T>} - return created object
  //  */
  // create<T>(body: any, opts?: ICreateOptions): Promise<T> {
  //   const options = { ignoreDuplicates: false, ...opts };
  //
  //   return this.Model.create(body).catch(e =>
  //     options.ignoreDuplicates ? Promise.resolve(e) : new HttpException(e.message, e.status),
  //   );
  // }
  //
  // /**
  //  * insertMany func
  //  * @param {<T>} body - any param, which is the body for creating the document
  //  * @param {<IInsertManyOptions>} opts - optional param
  //  * @returns {Promise<T>} - return array of created objects
  //  */
  // insertMany<T>(body: any[], opts?: IInsertManyOptions): Promise<T[]> {
  //   const options = { ignoreDuplicates: true, batchTransform: true, ...opts };
  //   const data = options.batchTransform ? body.map(e => new this.Model(e)) : body;
  //
  //   return Array.isArray(data) && !!data.length
  //     ? this.Model.insertMany(data, { ordered: !options.ignoreDuplicates }).catch(e =>
  //         options.ignoreDuplicates && e.code === 11000
  //           ? Promise.resolve(parseBulkWriteError(e, data))
  //           : Promise.reject(e),
  //       )
  //     : Promise.resolve([]);
  // }
  //
  // /**
  //  * getOne func
  //  * @param {FilterQueryType<T>} filter - any param, which is the body for getting the document
  //  * @param {QueryFindBaseOptions} options - optional param
  //  * @returns {Promise<T>} - return got object
  //  */
  // getOne<T>(filter: FilterQueryType<T>, options?: QueryFindBaseOptions): Promise<T> {
  //   const opts: QueryFindBaseOptions = { lean: true, ...options };
  //   return this.Model.findOne(filter, undefined, opts);
  // }
  //
  // /**
  //  * getBy func
  //  * @param {FilterQueryType<T>} filter - any param, which is the body for getting the document
  //  * @param projection? - selection of fields
  //  * @param {QueryFindOptions} options
  //  * @returns {Promise<T[]>} - return array of objects
  //  */
  // getBy<T>(filter: FilterQueryType<T>, projection?: OptionsType<T>, options?: QueryFindOptions): Promise<T[]> {
  //   return this.Model.find(filter, projection, options);
  // }
  //
  // /**
  //  * findOneAndUpdate func
  //  * @param {FilterQueryType<T>} filter - any param, which is the body for finding the document
  //  * @param {UpdateQueryType<T>} data - fields for update
  //  * @param options - optional parameter
  //  * @returns {MongoosePromise<T>} - return updated object
  //  */
  // findOneAndUpdate<T>(filter: FilterQueryType<T>, data: UpdateQueryType<T>, options?): Promise<T> {
  //   return this.Model.findOneAndUpdate(filter, data, { new: true, ...options });
  // }
  //
  // /**
  //  *  updateOne - updates one object
  //  * @param {FilterQueryType<T>} filter - any param, which is the body for getting the document
  //  * @param {UpdateQueryType} data - update data
  //  * @param {IUpdateOptions} options - optional param
  //  * @returns {MongoosePromise<T>} - return {ok: number, nModified: number, n: number} object
  //  */
  // updateOne<T>(
  //   filter: FilterQueryType<T>,
  //   data: UpdateQueryType<T>,
  //   options?: IUpdateOptions,
  // ): Promise<CommonUpdateResDto> {
  //   return this.Model.updateOne(filter, data, {
  //     runValidators: true,
  //     omitUndefined: true,
  //     context: 'query',
  //     ...options,
  //   }).exec();
  // }
  //
  // /**
  //  *  updateMany - updates many object
  //  * @param {FilterQueryType<T>} filter - any param, which is the body for getting the document
  //  * @param {UpdateQueryType} data - update data
  //  * @param {IUpdateOptions} options - optional param
  //  * @returns {MongoosePromise<T>} - return {ok: number, nModified: number, n: number} object
  //  */
  // updateMany<T>(
  //   filter: FilterQueryType<T>,
  //   data: UpdateQueryType<T>,
  //   options?: IUpdateOptions,
  // ): Promise<CommonUpdateResDto> {
  //   return this.Model.updateMany(filter, data, {
  //     runValidators: true,
  //     omitUndefined: true,
  //     context: 'query',
  //     ...options,
  //   }).exec();
  // }
  //
  // /**
  //  * delete - deletes objects
  //  * @param { FilterQueryType<T>} filter - any param, which is the body for getting the document
  //  * @param {ModelOptions} options
  //  * @returns {Promise<CommonDeleteResDto>} - return { ok: number, n: number }
  //  */
  // async delete<T>(filter: FilterQueryType<T>, options?: ModelOptions): Promise<CommonDeleteResDto> {
  //   return this.Model.deleteMany(filter, options);
  // }
  //
  // /**
  //  * basePagination - using for pagination
  //  * @param { IPaginationList} queryReq - query for pagination
  //  * @param { IPaginationQueryOptions} options - options for pagination
  //  * @returns {Promise<IPaginationRes<T>>} - return results of pagination and totalCount of objects
  //  */
  // async basePagination<T>(
  //   queryReq: IPaginationList,
  //   options: IPaginationQueryOptions = {},
  // ): Promise<IPaginationRes<T>> {
  //   const globalAddPipeline = options.addGlobalAgg || [];
  //   const queryAddPipeline = options.addQueryAgg || [];
  //   const queryAggSorting = options.addQueryAggSorting || {};
  //   const queryCountAgg = options.countAgg || null;
  //   const optionsType = options.type || {};
  //
  //   const { query, sorting, pagination, queryOptions } = formatQueryFilter(queryReq, optionsType);
  //
  //   const activeQuery = this.aggregate(globalAddPipeline.pipeline ? globalAddPipeline.pipeline() : []);
  //
  //   if (queryOptions.isSearchable && Object.keys(query).length) {
  //     activeQuery.match(query);
  //   }
  //
  //   if (!!queryReq.perPage && queryReq.perPage !== 10000) {
  //     const totalCountQuery = isNumber(options.countAgg)
  //       ? options.countAgg
  //       : this.countDocuments(this.aggregate(queryCountAgg ? queryCountAgg.pipeline() : activeQuery.pipeline()));
  //     activeQuery.append(queryAddPipeline.pipeline ? queryAddPipeline.pipeline() : []);
  //
  //     if (queryOptions.isPaginate) {
  //       activeQuery.skip(pagination.skip).limit(pagination.limit);
  //     }
  //
  //     if (queryOptions.isSort) {
  //       activeQuery.sort({ ...queryAggSorting, ...sorting });
  //     }
  //
  //     return Promise.all([activeQuery, totalCountQuery]).then(([results, totalCount]) => ({
  //       results,
  //       totalCount,
  //     }));
  //   } else {
  //     activeQuery.append(queryAddPipeline.pipeline ? queryAddPipeline.pipeline() : []);
  //     return Promise.all([activeQuery]).then(([results]) => ({
  //       results,
  //       totalCount: results.length,
  //     }));
  //   }
  // }
  //
  // /**
  //  * aggregate - using for aggregation queries
  //  * @param {any} pipeline - any aggregation query
  //  */
  // aggregate(pipeline = []) {
  //   return this.Model.aggregate(pipeline);
  // }
  //
  // /**
  //  * toId - using for adduction string to mongo object
  //  * @param {string} idStr - id in string
  //  * @returns - mongo object id
  //  */
  // toId(idStr: string) {
  //   return Types.ObjectId(idStr);
  // }
  //
  // /**
  //  * countDocuments - counts the documents;
  //  * @param {Aggregate} aggregation;
  //  * @returns {Promise<number>} - amount of documents;amount
  //  */
  // async countDocuments(aggregation: Aggregate<any>): Promise<number> {
  //   const [amount] = await aggregation.group({ _id: null, count: { $sum: 1 } });
  //   return amount?.count || 0;
  // }
}

export { BaseSequelizeRepository };
