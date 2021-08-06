const mongoose = require("mongoose");

const popularSneakers = new mongoose.Schema(
    {
        id: mongoose.Schema.Types.ObjectId,
        sneakerId: String,
    },
);

module.exports = mongoose.model("PopularSneakers", popularSneakers);
