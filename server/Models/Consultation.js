import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

const Consultation = mongoose.model("Consultation", consultationSchema);

export default Consultation;
