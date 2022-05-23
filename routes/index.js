import express from 'express';

const router = express.Router();

// @desc Login/ Landing Page
// @route GET /
router.get('/',(req, res) => {
    return res.send('Login');
});

// @desc Dashboard
// @desc GET dashboard
router.get('/dashboard',(req, res) => {
    return res.send('Dashboard');
});

export default router;