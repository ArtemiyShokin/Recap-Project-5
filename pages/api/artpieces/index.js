import dbConnect from "@/db/connect";
import Artpieces from "@/db/models/Artpieces";

export default async function handler(request, response) {
  await dbConnect();
  try {
    if (request.method === "GET") {
      const artpieces = await Artpieces.find();
      return response.status(200).json(artpieces);
    }
    response.status(405).json({ status: "Method not allowed." });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ status: "Internal server error." });
  }
}
