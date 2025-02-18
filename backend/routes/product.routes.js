import express from "express";

const router = express.Router();

import { getProductControl,postProductControl,putProductControl,deleteProudctControl } from "../controller/product.control.js";


router.get('/',getProductControl);
router.post('/',postProductControl);
router.put('/:id',putProductControl);
router.delete('/:id',deleteProudctControl);



export default router;