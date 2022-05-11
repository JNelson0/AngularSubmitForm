import express from "express";
import routes from "./routes";
import morgan from "morgan";
import cors from "cors";
const PORT = 8080;

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`);
});
