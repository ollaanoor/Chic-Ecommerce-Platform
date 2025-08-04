import mongoose from "mongoose";

export interface Products extends mongoose.Document {
  title: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

const ProductSchema = new mongoose.Schema<Products>(
  {
    title: {
      type: String,
      required: [true, "Please provide a name for this product."],
      maxlength: [10, "Title cannot be more than 60 characters"],
    },

    description: {
      type: String,
      required: [true, "Please provide a description for this product."],
      maxlength: [60, "Description cannot be more than 60 characters"],
    },

    price: {
      type: Number,
    },

    category: {
      type: String,
    },

    imageUrl: {
      required: [true, "Please provide an image url for this product."],
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.models.Product || mongoose.model<Products>("Product", ProductSchema);

export default Product;
