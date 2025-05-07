import express from 'express';
import { submitContactForm } from '../controllers/contactController';
import { validateContactForm } from '../middlewares/validators';

const router = express.Router();

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post('/', validateContactForm, submitContactForm);

export default router;