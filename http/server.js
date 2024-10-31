import express from "express";
import path from "path";

const app = express();

// 
app.get("/cars", (req, resp) => {
  resp.send("Hello from cars");
});

app.post("/cars", (req, resp) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// invoke the static middleware
app.use(express.static(path.join(__dirname, "public")));