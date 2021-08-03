import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import CarcosExController from '@/controllers/oracleBacksVD.controller';

class CargosExRoute implements Routes {
  public path = '/oracle';
  public router = Router();
  public cargosExService = new CarcosExController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.cargosExService.insertPG);
  }
}

export default CargosExRoute;
