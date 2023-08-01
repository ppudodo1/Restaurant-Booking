import Restaurant from "../models/Restaurant.js";



export const createRestaurant = async (req,res)=>{
    const newRestaurant = new Restaurant(req.body);
    try {
        const savedRestaurant = await newRestaurant.save();
        res.status(200).json(savedRestaurant);
    } catch (error) {
        throw error;
    }

}
export const getRestaurant = async (req,res)=>{
    try {
        const rest = await Restaurant.findById(req.params.id);
        res.status(200).json(rest);
    } catch (error) {   
        throw error;
    }
}
export const getRestaurants = async (req,res)=>{
    const {min,max,...others} = req.query;
    try {
        const rests = await Restaurant.find({
            ...others,
            cheapestPrice:{$gt:min | 1, $lt:max ||999}

        });
        res.status(200).json(rests);
    } catch (error) {
        throw error;
    }

}
