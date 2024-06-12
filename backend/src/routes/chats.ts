import { Router, Request, Response } from 'express';

const router = Router();


router.post('/send', async (req: Request, res: Response) => {
    const { message } = req.body;
    console.log(message);
    res.json({ message: `Response: ${message}` });
});

export default router;
