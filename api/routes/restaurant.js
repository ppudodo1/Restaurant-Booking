import express from "express";
import { createRestaurant, getRestaurant, getRestaurants } from "../controllers/restaurant.js";

const router = express.Router();

router.post("/createRestaurant",createRestaurant);
router.get("/getRestaurant/:id",getRestaurant);
router.get("/",getRestaurants);


export default router;