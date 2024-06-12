import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Pool } from 'pg';
import authRoutes from './routes/auth';
import chatRoutes from './routes/chats';
import conversationRoutes from './routes/conversations';

const app = express();
const port = process.env.PORT || 4200;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/conversations', conversationRoutes);
app.use('/api/chats', chatRoutes);

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default pool;
