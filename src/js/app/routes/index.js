// We only need to import the modules necessary for initial render
import RoutesData from '../models/routes_data';
import CoreLayout from '../layouts/CoreLayout';
import SimpleLayout from '../layouts/SimpleLayout';
import Page from '../views/Page';
import NotFound from '../views/NotFound';

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

const routesData = RoutesData.getInstance();


export const createRoutes = (store) => (
  {
    path: '/',
    childRoutes: [
      {
        component: CoreLayout,
        indexRoute: {
          component: Page
        }
      },
      {
        path: '/*',
        component: SimpleLayout,
        indexRoute: {
          component: NotFound
        }
      }
    ]
  }
);

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes;
