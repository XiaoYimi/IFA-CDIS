import { RouteRecordRaw } from 'vue-router';

/** Loaded App Modules */
import RouteViews from 'router/route-views';

/**
 * @description create base routes of all router
 * @param {}
 * @return {RouteParamValueRaw[]}
 */
export const createBaseRoutes = () =>
  [
    {
      name: 'layout',
      path: '/',
      component: () => RouteViews['templates-layout'],
      redirect: '/workbench-homepage',
      children: [
        {
          name: 'workbench-homepage',
          path: '/workbench-homepage',
          component: () => RouteViews['workbench-homepage'],
        },
      ],
    },
    {
      name: 'blank',
      path: '/',
      component: () => RouteViews['templates-blank'],
      redirect: '/account-login',
      children: [
        {
          name: 'account-login',
          path: '/account-login',
          component: () => RouteViews['account-login'],
        },
      ],
    },
  ] as RouteRecordRaw[];
