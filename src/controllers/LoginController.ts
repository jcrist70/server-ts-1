import { NextFunction, Request, Response } from "express";
import { get, controller, use, post, bodyValidator } from "./decorators";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function logger(req: Request, res: Response, next: NextFunction): void {
  console.log("Logger request was made");
  next();
}

@controller("/auth")
export class LoginController {
  // @get('/wrongtype')
  // add(x:number, y:number): number {
  //   return x+y;
  // }

  @get("/login")
  @use(logger)
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: RequestWithBody, res: Response) {
    const { email, password } = req.body;
    if (email === "jcrist70@gmail.com" && password === "1234") {
      req.session = { loggedIn: true };
      res.redirect("/");
    } else {
      res.status(404).send(`Invalid Request`);
    }
  }

  @get("/logout")
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect(`/`);
  }
}
