import { Request, Response, NextFunction } from "express";
import { get, controller, use } from "./decorators";

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send("Not permitted");
}

@controller("/test")
export class TestController {
  @get("/")
  getRoot(req: Request, res: Response) {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
          <div>You are accessing the test router as a logged in user</div>\
        </div>
      `);
    } else {
      res.send(`
        <div>
          <div>YYou are accessing the test router without being logged in</div>
        </div>
      `);
    }
  }

  @get("/protected")
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send("Test router protected routes");
  }
}
