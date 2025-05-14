import { Schema, model } from "mongoose";

const moviesSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      maxLength: 100,
    },

    
    description: {
        type: String,
        require: true,
        maxLength: 100,
    },
    director: {
        type: String,
        require: true,
        maxLength: 100,
    },
    gender: {
        type: String,
        require: true,
        min: 0,
    },
    year: {
        type: Number,
        require: true,
    },
    duration:{
        type: String,
        require: true,
    },
    image:{
        type: String,
        require: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("Movies", moviesSchema);