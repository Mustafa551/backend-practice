import mongoose from "mongoose";

const url =
  "mongodb+srv://muhammadmustafa:admin123@cluster0.zwmge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url);

export default mongoose;
