import express from 'express'
import { addItem, edit, find, findById } from '../controllers/itemControllers';

const router = express.Router()
 
router.post("/add", addItem);
router.get("/showitems", find);
router.get("/findItembyid/:id",findById);
router.patch("/update/:id",edit)



  export default router

  