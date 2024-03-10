const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema(
    {
        quantity: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Inventory", inventorySchema);