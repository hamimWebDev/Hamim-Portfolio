import { Request, Response, NextFunction } from 'express';

export const validateContactForm = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, subject, message } = req.body;
  
  // Check if all fields are provided
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Please provide a valid email address' });
  }
  
  // Check message length
  if (message.length < 10) {
    return res.status(400).json({ message: 'Message must be at least 10 characters long' });
  }
  
  next();
};