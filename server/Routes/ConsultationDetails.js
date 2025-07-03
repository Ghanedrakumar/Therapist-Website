import express from 'express';
import Consultation from '../Models/Consultation.js'; // Adjust the path as necessary
import cors from 'cors';
// import { router } from 'express';
import bodyParser from 'body-parser';
const router = express.Router();
router.use(express.json());
router.use(bodyParser.json());
router.use(cors());
router.use(express.urlencoded({ extended: true }));

router.post('/consultation', async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log('Received consultation form data:', req.body);
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const newConsultation = new Consultation({ name, email, phone, message });
    console.log('Saving consultation:', newConsultation);
    await newConsultation.save();
    res.status(201).json(newConsultation);
  } catch (error) {
    res.status(500).json({ message: 'Error saving consultation' });
  }
});
export default router;