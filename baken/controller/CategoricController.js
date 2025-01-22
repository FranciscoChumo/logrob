import { CategoricModel } from "../models/CategoricModel.js";

export const getCat = async (req, res) => {
  try {
    const categoric = await CategoricModel.findAll({ where: { state: true } });
    res.status(200).json(categoric);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCat = async (req, res) => {
  try {
    const { categoric } = req.body;
    if (!categoric) {
      res.status(400).json({ message: "categoric is required" });
    }
    const types = await CategoricModel.create(req.body);
    res.status(201).json({ message: "create", types });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateTypeUsers = async (req, res) => {
  if (!req.body.type) {
    res.status(400).json({ message: "type is required" });
  }
  const type = await CategoricModel.findOne({ where: { id: req.params.id } });
  if (type) {
    type.set(req.body);
    await type.save();
    res.status(200).json({ message: "update" });
  } else {
    res.status(404).json({ message: "type not found" });
  }
};
export const deleteTypeUsers = async (req, res) => {
  const type = await CategoricModel.findOne({ where: { id: req.params.id } });
  if (type) {
    type.set({ ...type, state: false });
    await type.save();
    res.status(200).json({ message: "delete" });
  } else {
    res.status(404).json({ message: "type not found" });
  }
};
