import HTTP_STATUS from 'http-status-codes';
import { Request, Response } from 'express';

export class Signout {
  public async update(req: Request, res: Response): Promise<void> {
    req.session = null;
    res
      .status(HTTP_STATUS.OK)
      .json({ message: 'Logout successfully', user: {}, token: '' });
  }
}
