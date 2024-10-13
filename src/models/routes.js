import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startPoint: {
    type: String,
    required: true,
  },
  endPoint: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
  distance: { 
    type: Number, 
    required: true 
},
  duration: { 
    type: Number, 
    required: true 
},
  createdAt: { 
    type: Date, 
    default: Date.now 
},
  updatedAt: { 
    type: Date, 
    default: Date.now 
},
});

const Routes = mongoose.model('Route', routeSchema);
export default Routes ;