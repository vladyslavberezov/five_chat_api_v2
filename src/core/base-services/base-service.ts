import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'sequelize-typescript';
import { CreateOptions } from 'sequelize/types/model';
import { BaseModel } from '../database/base-sequelize.model';

import { BaseSequelizeRepository } from '../database/base-sequelize.repository';

/** base service */
@Injectable()
export class BaseService<T = typeof BaseModel, M = BaseModel> {
  /**
   * BaseService
   * @param {BaseSequelizeRepository} baseRepository - inject;
   * @param {string} name - inject;
   */
  constructor(protected readonly baseRepository: BaseSequelizeRepository<T, M>, protected readonly name: string) {}

  /**
   * create func - create any item
   * @param data - data for create
   * @param options
   * @returns - created item
   */
  create(data: Partial<M>, options?: CreateOptions<T>): Promise<Model<T, T>> {
    return this.baseRepository.create(data, options);
  }

  /**
   * validation - validating item;
   * @returns {Promise<T>}
   * @param data
   * @param exists
   * @param customMessage
   */
  async validation(data: Partial<T>, exists?: boolean, customMessage?: string): Promise<Model<T, T>> {
    const item = await this.getOne<T>(data);

    if (item && exists) {
      throw new ForbiddenException(customMessage || `${this.name} is already created`);
    } else if (!item && !exists) {
      throw new NotFoundException(customMessage || `${this.name} not found`);
    }

    return item;
  }

  /**
   * getOne - get one item;
   * @param {K} query - search an item by query;
   * @returns {Promise<T>} - item from db;
   */
  getOne<T, K = Partial<T>>(query: K) {
    return this.baseRepository.findOne(query);
  }

  // findOne(data: Partial<M>): Promise<Model<T, T>> {
  //   return this.baseRepository.findOne({
  //     where: {},
  //     attributes: {
  //       include: ['password'],
  //     },
  //     raw: true,
  //   });
  // }

  // /**
  //  * insertMany func - insert many any items
  //  * @param {K[]} data - data for create
  //  * @returns {Promise<T[]>} - created items array
  //  */
  // insertMany<T, K = Partial<T>>(data: K[]): Promise<T[]> {
  //   return this.baseRepository.insertMany<T>(data);
  // }
  //
  // /**
  //  * getOne - get one item;
  //  * @param {K} query - search an item by query;
  //  * @param {QueryFindBaseOptions} options - base find options
  //  * @returns {Promise<T>} - item from db;
  //  */
  // getOne<T, K = Partial<T>>(query: K, options?: QueryFindBaseOptions): Promise<T> {
  //   return this.baseRepository.getOne<T>(query, options);
  // }
  //
  // /**
  //  * getBy - get item array;
  //  * @param {K} query - search items by query;
  //  * @param {OptionsType<T>} projection - projection
  //  * @param {QueryFindOptions} options - find options
  //  * @returns {Promise<T>} - item array from db;
  //  */
  // getBy<T, K = Partial<T>>(query: K, projection?: OptionsType<T>, options?: QueryFindOptions): Promise<T[]> {
  //   return this.baseRepository.getBy<T>(query, projection, options);
  // }
  //
  // /**
  //  * validation - validating item;
  //  * @returns {Promise<T>}
  //  * @param data
  //  * @param exists
  //  */
  // async validation<T>(data: Partial<T>, exists?: boolean, customMessage?: string): Promise<T> {
  //   const item = await this.getOne<T>(data);
  //
  //   if (item && exists) {
  //     throw new ForbiddenException(customMessage || `${this.name} is already created`);
  //   } else if (!item && !exists) {
  //     throw new NotFoundException(customMessage || `${this.name} not found`);
  //   }
  //
  //   return item;
  // }
  //
  // /**
  //  * findOneAndUpdate - find one item and update it;
  //  * @param data
  //  * @param updateData
  //  * @param options
  //  * @returns {Promise<T>};
  //  */
  // findOneAndUpdate<T, K = Partial<T>, F = Partial<T>, W = IUpdateOptions>(
  //   data: K,
  //   updateData: F,
  //   options?: W,
  // ): Promise<T> {
  //   return this.baseRepository.findOneAndUpdate<T>(data, updateData, options);
  // }
  //
  // /**
  //  * updateOne - update item;
  //  * @param data
  //  * @param updateData
  //  * @param options
  //  * @returns {Promise<CommonUpdateResDto>};
  //  */
  // updateOne<T, K = Partial<T>, F = Partial<T>, W = IUpdateOptions>(
  //   data: K,
  //   updateData: F,
  //   options?: W,
  // ): Promise<CommonUpdateResDto> {
  //   return this.baseRepository.updateOne<T>(data, updateData, options);
  // }
  //
  // /**
  //  * updateMany - update items;
  //  * @param data
  //  * @param updateData
  //  * @param options
  //  * @returns {Promise<CommonUpdateResDto>};
  //  */
  // updateMany<T, K = Partial<T>, F = Partial<T>, W = IUpdateOptions>(
  //   data: K,
  //   updateData: F,
  //   options?: W,
  // ): Promise<CommonUpdateResDto> {
  //   return this.baseRepository.updateMany<T>(data, updateData, options);
  // }
  //
  // /**
  //  * delete - delete items;
  //  * @param data
  //  * @returns {Promise<CommonDeleteResDto>};
  //  */
  // delete<T, K = Partial<T>>(data: K): Promise<CommonDeleteResDto> {
  //   return this.baseRepository.delete<T>(data);
  // }
  //
  // /**
  //  * validateObjectAndObjectId func - validate object-objectId combination
  //  * @param { object,  objectId}
  //  * @returns {void}
  //  */
  // validateObjectAndObjectId({ object, objectId }: CommonObjectDataReqDto): void {
  //   if (!objectId && (object === UserEntityTypes.SPACE || object === UserEntityTypes.PROJECT)) {
  //     throw new HttpException('Need objectId', HttpStatus.FORBIDDEN);
  //   }
  // }
}
