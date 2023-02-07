import express from "express";
import router_todo_list_items from "./controllers/todo_list/controller_todo_list_item.js";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const app = express();


//middleware
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const path_1 = path.resolve(__dirname, "..", "Frontend", "build");

app.use(express.static(path_1));
app.use(express.json());
app.use(cors());



//routes
app.use("/api/v1/todo", router_todo_list_items);

export default app;
