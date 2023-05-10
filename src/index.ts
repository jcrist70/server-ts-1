import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
// import morgan from 'morgan';

import router from "./routes/login.routes";
import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";
import "./controllers/RootController";
import "./controllers/TestController";

const app = express();
// app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["1wdfgt52334trg"] }));
app.use(router);
app.use(AppRouter.getInstance());

const PORT = 4040;
app.listen(PORT, () => {
  console.log(`Seerver listening on port ${PORT}`);
});
