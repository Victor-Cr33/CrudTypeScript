import express  from "express";
import postController from "../controllers/postController";

const router = express.Router();

router.get('/:id', postController.getPostById);
router.get('/', postController.getPosts);
router.post('/', postController.createPost);
router.put('/:id', postController.putPost);
router.delete('/:id', postController.deletePost);

export default router;