import managerRoutes from './ManagerRoutes/ManagerRoute';
import activitiesRoutes from './activitiesroute/activitiesRoute';

export default (app) => {
  app.use('/api/v1', managerRoutes);
  app.use('/api/v1', activitiesRoutes);
};
