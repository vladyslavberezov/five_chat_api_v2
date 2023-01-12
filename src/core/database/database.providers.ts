import { Sequelize } from 'sequelize-typescript'
import { User } from '../../components/users/entities/user.entity'
import config from '../../config'

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: config.dbDialect,
        host: config.host,
        port: config.dbPort,
        username: config.dbUserEntry,
        password: config.dbPassword,
        database: config.dbName,
      })
      sequelize.addModels([User])
      await sequelize.sync()
      return sequelize
    },
  },
]