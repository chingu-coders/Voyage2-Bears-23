/**
 * Voyage-2 Team-Bears-23
 * @date 26/09/2017
 *
 * @ticket SLNKR-002
 * @link https://github.com/chingu-coders/Voyage2-Bears-23/projects/1#card-4811806
 *
 * @flow
 */
import fs from 'fs';

export default (server: Object, app: Function, port: string) => {
  try {
    const env = process.env.APP_ENVIRONMENT;

    if (typeof env !== 'undefined' && env === 'development') {
      const httpsPort = port || 3000;
      const options = {
        key: fs.readFileSync(__dirname + '/../key.pem'),
        cert: fs.readFileSync(__dirname + '/../cert.pem')
      };

      server.createServer(options, app).listen(httpsPort);
    } else {
      throw new Error('SSL server is only supported in development env. Stage / Prod provide SSL via ZXTM');
    }
  } catch (err) {
    throw new Error(err);
  }
}
