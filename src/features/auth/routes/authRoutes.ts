import { Password } from '@auth/controllers/password';
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
    this.router.post('/forgot-password', Password.prototype.create);
    this.router.post('/reset-password/:token', Password.prototype.update);
    return this.router;
  }

  public signoutRoute(): Router {
    this.router.get('/signout', Signout.prototype.update);
    return this.router;
  }
}

export const authRoutes: AuthRoutes = new AuthRoutes();
