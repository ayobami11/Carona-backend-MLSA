import mongoose from "mongoose";

const tripSchema = new mongoose.Schema({
    pickupPoint: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        enum: ["pending", "ongoing", "completed"],
        default: "pending"
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Trip", tripSchema);