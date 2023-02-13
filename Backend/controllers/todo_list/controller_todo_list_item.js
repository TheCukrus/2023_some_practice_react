import express from "express";
import model_todo_list_item from "../../models/todo_list/model_todo_list_item.js";

const router_todo_list_items = express.Router();



//Get all Todos
router_todo_list_items.get("/", async (req, res) =>
{
    try
    {
        const result1 = await model_todo_list_item.find();
        res.json(result1);

        res.status(200);
        res.end();
    }
    catch (err)
    {
        res.status(500).json({ message: err.message });
        res.end();
    }
})

//Get one Todo
router_todo_list_items.get("/:id", async (req, res) =>
{
    try
    {
        res.json(res.router_todo_list_items);
        res.status(200);
        res.end();
    }
    catch (err)
    {
        res.status(500).json({ message: err.message });
        res.end();
    }
})

//Create one Todo
router_todo_list_items.post("/", async (req, res) =>
{
    try
    {

        const result1 = await model_todo_list_item.findOne({ "task": req.body.task })

        if (result1 !== null)
        {
            res.status(200).json({ message: "that task exist already" });
            res.end();
            return;
        }



        const result2 = await model_todo_list_item.create(
            {
                "task": req.body.task,
                "completed": req.body.completed
            }
        )
        res.status(200).json({ message: "New post created" });
        res.end();
        return;
    }
    catch (err)
    {
        res.status(400).json({ message: err.message });
        res.end();
    }
})

//Update one Todo
router_todo_list_items.patch("/:task", async (req, res) =>
{
    try
    {
        const result1 = await model_todo_list_item.findOneAndUpdate(
            {
                "task": req.params.task
            },
            {
                "task": req.body.task,
                "completed": req.body.completed
            })

        res.status(200).json({ message: "Todo updated!" });
        res.end();
    }
    catch (err)
    {
        res.status(400).json({ message: err.message });
        res.end();
    }
})

//delete one Todo
router_todo_list_items.delete("/:task", async (req, res) =>
{
    try
    {
        const resultt1 = await model_todo_list_item.findOneAndDelete({ "task": req.params.task });
        res.status(200).json({ message: "Todo deleted" });
        res.end();
    }
    catch (err)
    {
        res.status(400).json({ message: err.message });
        res.end();
    }
})

export default router_todo_list_items;