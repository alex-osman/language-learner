// src/server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Pool } from 'pg';
import authRoutes from "./routes/auth";

const app = express();
const port = process.env.PORT || 4200;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

const pool = new Pool({
    user: 'your-db-username',
    host: 'localhost',
    database: 'your-db-name',
    password: 'your-db-password',
    port: 5432,
});

app.get('/', (req: Request, res: Response) => {
    res.send('API is running... !!!!');
});

app.post('/api/chat/send', async (req: Request, res: Response) => {
    const { message } = req.body;
    console.log(message);
    res.json({ message: `Response: ${message}` });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

export default pool;
