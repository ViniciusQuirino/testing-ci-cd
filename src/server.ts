import app from "./app";
import "dotenv/config";

app.listen(3333, () => {
	console.log("Server running in port 3333");
});
