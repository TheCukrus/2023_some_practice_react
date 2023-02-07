import mongoose from "mongoose";
import config from "../../utils/config";

const mongoose_connection = mongoose.createConnection(config.mongoose_url);
const schema_todo_list_item = new mongoose.Schema(
    {
        "task": { type: String, required: true },
        "completed": { type: Boolean, default: false },
        "date": { type: Date, default: Date.now }
    }
)

const model_todo_list_item = mongoose_connection.model("item", schema_todo_list_item, "item");

export default model_todo_list_item;