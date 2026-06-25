import express from "express";
import cors from "cors";
import graphRoutes from "./routes/graph";
import pathRoutes from "./routes/path";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/graph", graphRoutes);
app.use("/path", pathRoutes);

app.get("/", (_, res) => {
  res.json({ status: "ok" });
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});