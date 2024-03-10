const mongoose = require("mongoose");

const discountSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
        },
        discount_percent: {
            type: Number,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Delivery", discountSchema);