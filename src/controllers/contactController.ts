import { Request, Response } from 'express';
import { sendEmail } from '../services/emailService';

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;
    
    // In a real application, you would send an email here
    // For now, we'll just simulate success
    await sendEmail({
      to: process.env.ADMIN_EMAIL || 'admin@example.com',
      subject: `Portfolio Contact: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `
    });
    
    res.status(200).json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error instanceof Error ? error.message : 'An error occurred' });
  }
};