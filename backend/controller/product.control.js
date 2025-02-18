import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const getProductControl = async(req,res)=>{
    const products = await Product.find({})
    try {
        res.status(200).json({success:true, data:products});
        console.log("displys all products")
    } catch (error) {
        res.status(500).json({success:false, message:"no products available"})
    }
}

export const putProductControl = async(req,res)=>{
    const {id} = req.params;
    const product = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid product Id"})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updatedProduct})
    } catch (error) {
        res.status(500).json({success: false, message:'product is not updated'})
        console.log('product not updated')
    }
}

export const postProductControl = async(req,res)=>{
    const product = req.body;
    if(!product.name || !product.price || !product.image){
       return res.status(400).json({success:false,message:"provide correct inputs"})
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save()
        res.status(201).json({success:true, data:newProduct})
        console.log(`product created successfully`)
    } catch (error) {
        console.error(`error occured while creating product ${error.message}`)
        res.status(500).json({success: false, message: "server Error"})
    }
}

export const deleteProudctControl = async(req,res)=>{
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"invalid id"})
    }
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true, message:"product deleted"})
    } catch (error) {
        res.status(404).json({success: false, message:"product not found"})
    }
}