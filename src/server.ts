import server from "./app";
import "dotenv/config";

const port = process.env.PORT || 3333;

server.listen(port, () => {
	console.log(`Server running in port ${port}`);
});
