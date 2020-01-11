import express from 'express';
import routUserController from '../../controllers/managerControllerClass';


const ManagerRoute = express.Router({ mergeParams: true });

ManagerRoute.post('/auth/signup', routUserController.signupPost);
ManagerRoute.post('/auth/login', routUserController.loginPost);

export default ManagerRoute;
