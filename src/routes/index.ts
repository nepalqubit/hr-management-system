import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
  res.json({
    message: 'Welcome to HR Management System API',
    version: '1.0.0',
    status: 'running'
  });
});

export default router;