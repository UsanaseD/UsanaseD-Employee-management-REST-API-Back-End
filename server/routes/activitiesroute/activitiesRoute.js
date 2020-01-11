import express from 'express';
import authMidleware from '../../midleware/authMidleware';
import actControllerClass from '../../controllers/EmpControllerClass';

const activitiesRoute = express.Router({ mergeParams: true });

activitiesRoute.post('/employees', authMidleware, actControllerClass.employeeCreation);
activitiesRoute.delete('/employees/:id',authMidleware, actControllerClass.deleteEmp);
activitiesRoute.patch('/employees/:id',authMidleware, actControllerClass.PatchEmployee);
activitiesRoute.patch('/employees/:id/suspend',authMidleware, actControllerClass.offstatus);
activitiesRoute.get('/employees/search/:id',authMidleware, actControllerClass.employeeSearch);

export default activitiesRoute;
