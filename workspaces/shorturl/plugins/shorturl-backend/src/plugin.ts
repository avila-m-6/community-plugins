import {
  coreServices,
  createBackendPlugin,
} from '@backstage/backend-plugin-api';
import { createRouter } from './service/router';

/**
 * shorturlBackendPlugin backend plugin
 *
 * @public
 */
export const shorturlBackendPlugin = createBackendPlugin({
  pluginId: 'shorturl-backend',
  register(env) {
    env.registerInit({
      deps: {
        httpRouter: coreServices.httpRouter,
        logger: coreServices.logger,
        config: coreServices.rootConfig,
        database: coreServices.database,
      },
      async init({ httpRouter, logger, config, database }) {
        httpRouter.use(
          await createRouter({
            logger,
            config,
            database,
          }),
        );
        httpRouter.addAuthPolicy({
          path: '/health',
          allow: 'unauthenticated',
        });
      },
    });
  },
});
