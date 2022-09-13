import { createRouter, createWebHistory } from 'vue-router';

import { createBaseRoutes } from 'router/modules/base';

const router = createRouter({
  routes: createBaseRoutes(),
  history: createWebHistory(),
});

export default router;
