
const mongoose = require("mongoose");

const tradeSchema = new mongoose.Schema({
  id: { type: Number },
  type: { type: String, required: true },
  user_id: { type: Number, required: true },
  symbol: { type: String, required: true },
  shares: { type: Number, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Trade", tradeSchema);
