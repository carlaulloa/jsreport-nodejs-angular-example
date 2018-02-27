import { initDI } from './di';
import * as db from '../db';
import * as services from '../../services';
import * as controllers from '../../controller';
/*
  you should import index.ts from models, controllers and schemas directory
*/
const container = initDI.bind(null, { db, controllers, services });
export { container };