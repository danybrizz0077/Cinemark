import { Schema, model } from "mongoose";

const employeesSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      maxLength: 100,
    },


    
    email: {
        type: String,
        require: true,
        maxLength: 100,
    },
    password: {
        type: String,
        require: true,
        maxLength: 100,
    },
    telephone: {
        type: String,
        require: true,
        min: 0,
    },
    address: {
        type: String,
        require: true,
    },
    chargue:{
        type: String,
        require: true,
    },
    hireDate:{
        type: Date,
        require: true,
    },
    salary:{
        type: String,
        require: true,
    },
    status:{
        type: Boolean,
        require: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Employees", employeesSchema);