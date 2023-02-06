import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import app from "./App.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: `${__dirname}/.env` });

const listening_port = process.env.LISTENING_PORT;
const listening_network_card_adress = process.env.LISTENING_NETWORK_CARD_ADRESS;

app.listen(listening_port, listening_network_card_adress, () =>
{
    console.log(`http://${listening_network_card_adress}:${listening_port}`);
})

