const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fixe: {
      type: Number,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    adresse: String,
  },
  { timestamps: true }
)

PostSchema.index({ name: 1, fixe: 1 }, { unique: true })

module.exports = mongoose.model("Post", PostSchema)
