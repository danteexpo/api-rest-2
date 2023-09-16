import express, { urlencoded } from "express";
import router from "./routes";

const app = express();

const PORT = 8080;

// middleware
app.use(express.json());
app.use(urlencoded({ extended: false }));

app.use(router);

app.listen(PORT, () => {
	console.log(`Server listening on PORT ${PORT}`);
});
