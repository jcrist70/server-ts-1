import express from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
// import morgan from 'morgan';
import 'dotenv/config';

import router from "./routes/login.routes";
import { AppRouter } from "./AppRouter";
import "./controllers/LoginController";
import "./controllers/RootController";
import "./controllers/TestController";

import { getWeatherData } from './apis/weather.api';

const app = express();
// app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["1wdfgt52334trg"] }));
app.use(router);
app.use(AppRouter.getInstance());

const PORT = 4040;
app.listen(PORT, async () => {
  console.log(`Server listening on port ${PORT}, ${process.env.WEATHER_API_KEY}`);
  // only uncomment when .env is present
  // const response = await getWeatherData(-122.45479146186135, 37.77224173139603);
  // const keys = Object.keys(response);
  // console.log(`getWeatherData:`,keys, response.data );
});
