import { Sequelize } from 'sequelize';

const databaseConfig = require('../config/database');

import Category from '../models/Category';
import Image from '../models/Image';

const connection = new Sequelize(databaseConfig);

Category.init(connection);
Image.init(connection);
Image.associate(connection.models);

export { connection };