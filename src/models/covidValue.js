import mongoose from "mongoose";
const covidValueSchema = new mongoose.Schema({
    createdAt: Date,
    confirmedCase:Number,
    humidity:Number,
    temprature:Number,
    vaue:Number,
  });
  
  const Value = mongoose.model("Value", covidValueSchema);
  export default Value;