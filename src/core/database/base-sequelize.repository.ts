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
   * @param  options?: - destroy options
   * @returns  number of destroy rows
   */
  async delete(options?: DestroyOptions<Partial<M>>) {
    return this.model.destroy(options);
  }

  /** findOne - find model
   * @param  data - finding data
   * @returns finding model
   */
  findOne(data: FindOptions<Partial<M>>) {
    return this.model.findOne<Model<T>>(data as any);
  }

  /** findAll - find all model
   * @param  data - finding data
   * @returns [] models
   */
  findAll(data: FindOptions<Partial<M>>) {
    return this.model.findAll<Model<T>>(data as any);
  }

  getByPk(id: number) {
    return this.model.findByPk<Model<T>>(id);
  }
}

export { BaseSequelizeRepository };
