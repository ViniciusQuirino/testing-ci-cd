import app from "./app";
import "dotenv/config";

let port = process.env.PORT || 3333;

app.listen(+port, "0.0.0.0", () => {
  console.log("Server running in port 3333");
});
