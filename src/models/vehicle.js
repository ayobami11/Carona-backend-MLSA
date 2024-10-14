import mongoose from "mongoose"

const vehicleSchema = new mongoose.Schema({
    carName: {
        type: String,
    },

    driver: {
        type: String,
        required: true
    },

    model: {
        type: String
    },

    colour: {
        type: String
    },

    plateNumber: {
        type: String,
        required: true,
        unique: true
    },

    numberOfSeats: {
        type: Number
    },

    AC: {
        type: Boolean
    },

    isLicenced: {
        type: Boolean
    }

})

export const Vehicle = mongoose.model("vehicle", vehicleSchema)