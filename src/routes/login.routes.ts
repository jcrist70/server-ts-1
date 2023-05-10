import {
  RequestHandler,
  Request,
  Response,
  NextFunction,
  Router,
} from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn === true) {
    next();
    return;
  }
  res.status(403);
  res.send(`Not Permitted`);
}

router.get<RequestHandler>("/nondec", (req, res) => {
  if (req.session && req.session.loggedIn === true) {
    res.send(`
        <div>
            <div>You are logged in.</div>
            <a href='/auth/logout'>Logout</a>
        </div>
        `);
  } else {
    res.send(`
        <div>
            <div>You are not logged in.</div>
            <a href='/auth/login'>Login</a>
        </div>
        `);
  }
});
router.get<RequestHandler>("/clear-session", (req, res) => {
  req.session = { loggedIn: false };
  res.send(`cleared session`);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email === "jcrist70@gmail.com" && password === "1234") {
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.status(404).send(`Invalid Request`);
  }
});
router.get<RequestHandler>("/nondec/logout", (req, res) => {
  req.session = undefined;
  res.redirect(`/`);
});
router.get("/nondec/protected", requireAuth, (req, res) => {
  res.send(`Welcome to protected route as a logged in user.`);
});

export default router;
