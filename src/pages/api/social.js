const { connectToDatabase } = require("../../lib/mongodb");

async function handler(req, res) {
  try {
    let { db } = await connectToDatabase();
    let posts = await db.collection("Social").find({}).toArray();
    return res.status(200).json(posts).end();
  } catch (error) {
    return res.status(500).end();
  }
}

export default handler;
