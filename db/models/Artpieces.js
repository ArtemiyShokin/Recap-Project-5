import mongoose from "mongoose";

const { Schema } = mongoose;
const artpieceSchema = new Schema({
  slug: { type: "String", required: true },
  artist: { type: "String", required: true },
  name: { type: "String", required: true },
  imageSource: { type: "String", required: true },
  comments: { type: "Array" },
  year: { type: "String" },
  genre: { type: "String" },
  colors: { type: "Array" },
  dimensions: { type: "Object" },
});

const Artpieces =
  mongoose.models.Artpieces || mongoose.model("Artpieces", artpieceSchema);

export default Artpieces;
