import { CategoricModel } from "../models/CategoricModel.js";
import { ProductModel } from "../models/ProductModel.js";
export const getPro = async (req, res) => {
  try {
    const P = await ProductModel.findAll({
      attributes: ['id', 'product', 'code', 'production_date','expiration_date',],
      include: [{
        model: CategoricModel,
        attributes: ['categoric']
      }],
      order: [
        ['expiration_date', 'ASC'],
        [CategoricModel, 'categoric', 'ASC']
      ]
    },{where: {state:true}});
    res.status(200).json({P});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPro = async (req, res) => {
  try {
    const { product, code, production_date, expiration_date, categoric_id } = req.body;
    console.log("Datos recibidos:", req.body);

    if (!product || !Number || !production_date || !expiration_date || !categoric_id) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = await ProductModel.create({
      product,
      code,
      production_date,
      expiration_date,
      categoric_id
    });

    res.status(201).json({
      message: " created successfully",
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error creating record",
      details: error.message,
    }); 
  }
};

export const updatePro = async (req, res) => {
  const { product, code, production_date, expiration_date, categoric_id } = req.body;

  if (!product || !code || !production_date || !expiration_date || !categoric_id) {

    return res.status(400).json({ message: "All fields are required" });
    
  }

  try {
    const Product = await ProductModel.findOne({ where: { id: req.params.id } });

    if(Product){
      Product.set({
        ...product,
        product:product,
        code:code,
        production_date:production_date,
        expiration_date:expiration_date,
        categoric_id:categoric_id,
          });
        await Product.save();
        res.status(200).json({ message: "update" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred", error });
  }
};

export const deleteBus = async (req, res) => {
  const buss = await ProductModel.findOne({ where: { id: req.params.id } });
  if (buss) {
    buss.set({ ...buss, state: false });
    await user.save();
    res.status(200).json({ message: "delete" });
  } else {
    res.status(404).json({ message: "type not found" });
  }
};