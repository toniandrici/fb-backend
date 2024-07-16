import { SignIn } from '@auth/controllers/signin';
import { Signout } from '@auth/controllers/signout';
import { Signup } from '@auth/controllers/signup';
import express, { Router } from 'express';
class AuthRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.post('/signup', Signup.prototype.create);
    this.router.post('/signin', SignIn.prototype.read);
    return this.router;
  }

  public signoutRoute(): Router {
    this.router.get('/signout', Signout.prototype.update);
    return this.router;
  }
}

export const authRoutes: AuthRoutes = new AuthRoutes();
