import express from 'express';
import Contact from '../Models/Contact.js'; // Adjust the path as necessary
import { router } from 'express';
const router = Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const newContact = new Contact({ name, email, message });
    console.log('Saving contact:', newContact);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact' });
  }
});