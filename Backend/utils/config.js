import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: `${__dirname}/.env` });

const { MONGOOSE_URL, LISTENING_PORT, LISTENING_NETWORK_CARD_ADRESS } = process.env;

export default
    {
        MONGOOSE_URL,
        LISTENING_PORT,
        LISTENING_NETWORK_CARD_ADRESS
    }