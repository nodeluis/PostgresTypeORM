import { Router } from 'express';
import AuthController from '@controllers/auth.controller';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import { UserEVDto } from '@/dtos/VirtualDescktop/userEV.dto';

class AuthRoute implements Routes {
  public path = '/auth';
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    //this.router.post(`${this.path}signup`, validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
    this.router.get(`${this.path}`, this.authController.getSession);
    this.router.post(`${this.path}/login`, validationMiddleware(UserEVDto, 'body'), this.authController.loginDescktop);
    this.router.post(`${this.path}/logout`/*, authMiddleware*/, this.authController.logOut);
  }
}

export default AuthRoute;
