import { Sequelize } from 'sequelize-typescript';
import { User } from '../../components/users/entities/user.entity';
import config from '../../config';
import { Contact } from '../../components/users/contacts/entities/contact.entity';
import { UserChats } from '../../components/user-chats/entities/user-chats.entity';

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
      });
      sequelize.addModels([User, Contact, UserChats]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
