import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// Save contact info
router.post("/", async (req, res) => {
  try {
    const { email, number } = req.body;

    if (!email || !number) {
      return res.status(400).json({ message: "Email and number are required" });
    }

    const newContact = new Contact({ email, number });
    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
