const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
        },
        SKU: {
            type: String,
            required: true,
            unique: true
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
        },
        inventory_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Inventory",
            required: true,
        },
        discount_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Discount",
            required: true,
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Product", productSchema);