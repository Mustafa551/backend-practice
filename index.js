import express from "express";
import joi from "joi";
import { userSchema } from "./schema/index.js";
import router from "./routes/index.js";
import mongoose from "./db/index.js";

const app = express();

app.use(express.json());

mongoose.connection.on("open", () => {
  console.log("Database Connected");
});

mongoose.connection.on("error", (err) => {
  console.log("Database error", err);
});

app.use("/api", router);
// let users = [];

// app.get("/", (req, res) => {
//   res.send(new Date().toString());
// });

// app.post("/user", async (req, res) => {
//   try {
//     await userSchema.validateAsync(req.body);
//     users.push({ ...req.body, id: Date.now().toString(36) });
//     res
//       .status(201)
//       .send({ status: 201, user: req.body, message: "successfully created" });
//   } catch (error) {
//     res
//       .status(400)
//       .send({ error: error.details || "something went wrong", status: 400 });
//   }
// });

// app.get("/users", (req, res) => {
//   res.send({ users: users });
// });

// app.delete("/user/:id", (req, res) => {
//   const id = req.params.id;
//   console.debug("🚀 ~ app.delete ~ id:", id);
//   // const index = users.findIndex((user) => user.id === Number(id));
//   // console.debug("🚀 ~ app.delete ~ index:", index);
//   // users.splice(index, 1);

//   users = users.filter((user) => user.id !== id);
//   res.send({ message: "user deleted successfully" });
// });

// app.put("/users/:id", (req, res) => {
//   const { id } = req.params;

//   const findIndex = users.findIndex((user) => user.id === id);
//   users.splice(findIndex, 1, { ...users[findIndex], ...req.body });
//   res.send({ message: "successfully updated" });
// });

app.listen(4000, () => {
  console.log("server is listening");
});
