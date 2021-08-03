import { NextFunction, Request, Response } from 'express';
import CargosExService from '@/services/oracleBacksVD.service';


class CarcosExController {
  public cargosExService = new CargosExService();

  public insertPG = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      
      const resp:boolean=await this.cargosExService.insert();

      res.status(200).json({ data: resp, message: 'insertados' });
    } catch (error) {
      next(error);
    }
  };
}

export default CarcosExController;
