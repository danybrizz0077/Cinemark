import express from "express";

import multer from "multer";

import moviesController from "../controllers/moviesController.js"

const router = express.Router();

const upload = multer({dest: "public/"})

router.route("/")

.get(moviesController.getAllPosts)
.post(upload.single("image"), moviesController.createPost);

export default router;