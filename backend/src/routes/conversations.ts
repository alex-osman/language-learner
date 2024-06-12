import { Router, Request, Response } from 'express';

const router = Router();

// Mock conversation data
const conversations = [
    { id: 1, title: 'Talking at the bar!' },
    { id: 2, title: 'Walking into the coffee shop' },
];

router.get('/', (req: Request, res: Response) => {
    // grab from database
    res.json(conversations);
});

export default router;
