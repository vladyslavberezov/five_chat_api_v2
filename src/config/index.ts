import * as _ from 'lodash';
import * as nconf from 'nconf';
import { staticConfig } from './static/config';

nconf.env().argv();

/**
 * depending on
 * @param {string} NODE_ENV - environment
 * exports config
 */
const environment = nconf.get('NODE_ENV') || 'development';
export default _.extend(
  {
    environment,
  },
  staticConfig,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require(`${__dirname}/env/${environment}`),
  nconf.get(),
);
