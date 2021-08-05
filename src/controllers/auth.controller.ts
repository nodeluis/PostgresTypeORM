import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { RequestWithUser} from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';
import { UserEVDto } from '@/dtos/VirtualDescktop/userEV.dto';
import { SessionData } from 'express-session';

class AuthController {
  public authService = new AuthService();

  /*public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDto = req.body;
      const signUpUserData: User = await this.authService.signup(userData);

      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };*/

  /*public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDto = req.body;
      const { cookie, findUser } = await this.authService.login(userData);

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: findUser, message: 'login' });
    } catch (error) {
      next(error);
    }
  };*/

  public getSession = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const data=req.session.dataSession;
      res.status(200).json({ data:data?data:{} , message: 'Session' });
    } catch (error) {
      next(error);
    }
  };

  public loginDescktop = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: UserEVDto = req.body;
      const { cookie, findUserEv} = await this.authService.loginDescktop(userData);

      const dataSs={
        keyempleado:findUserEv.keyempleado,
        id:findUserEv.id,
        avatar:'',
        cite2:findUserEv.cite2,
        login:findUserEv.login,
        jefe:findUserEv.jefe
      }
      req.session.dataSession=dataSs;

      req.session.save();      

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: dataSs, message: 'login' });
    } catch (error) {
      next(error);
    }
  };


  /*
  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: User = req.user;
      const logOutUserData: User = await this.authService.logout(userData);

      req.session.destroy(()=>{});

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
  */

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      /*const userData: User = req.user;
      const logOutUserData: User = await this.authService.logout(userData);*/

      req.session.destroy(()=>{});

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
