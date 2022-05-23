import express from 'express';

const router = express.Router();

// @desc Login/ Landing Page
// @route GET /
router.get('/', (req, res) => {
    console.log('login page');
    return res.render('login', {layout: 'login'});
});

// @desc Dashboard
// @desc GET dashboard
router.get('/dashboard', (req, res) => {
    console.log('dashboard page');
    return res.render('dashboard');
});

export default router;