import express from 'express';
import Contact from '../Models/Contact.js'; // Adjust the path as necessary
import cors from 'cors';
// import { router } from 'express';
import bodyParser from 'body-parser';
const router = express.Router();
router.use(express.json());
router.use(bodyParser.json());
router.use(cors());
router.use(express.urlencoded({ extended: true }));

router.post('/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log('Received contact form data:', req.body);
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const newContact = new Contact({ name, email, phone, message });
    console.log('Saving contact:', newContact);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: 'Error saving contact' });
  }
});
export default router;