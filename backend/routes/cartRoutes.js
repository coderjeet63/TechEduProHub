
import express from 'express'
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";
import Cart from  '../models/cartModel.js'

router.post("/save", protect, async (req, res) => {
  try {
    const { cart, total, userDetails } = req.body;
    const userId = req.user.id; // from JWT

    const newCart = new Cart({
      userId,
      userDetails,
      items: cart,
      totalAmount: total,
    });

    await newCart.save();
    res.status(201).json({ message: "Cart saved successfully", cart: newCart });
  } catch (error) {
    res.status(500).json({ message: "Error saving cart", error });
  }
});

export default router 
