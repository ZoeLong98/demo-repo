import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// todo: import cats data
const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// todo: invoke the static middle ware

// todo: set up view engine for ejs template


// todo: fill in any paths

// todo: fill in any views

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});