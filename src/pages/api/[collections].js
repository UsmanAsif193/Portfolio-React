const { connectToDatabase } = require("../../lib/mongodb");

const collections = ["Projects", "Skills", "Work", "Social"];

export default async function handler(req, res) {
  collections.map((singleCollection) => {
    return getPosts(req, res, singleCollection);
  });
}

async function getPosts(req, res, singleCollection) {
  try {
    let { db } = await connectToDatabase();
    let posts = await db.collection(singleCollection).find({}).toArray();
    return res.json(JSON.parse(JSON.stringify(posts)));
  } catch (error) {
    return res.json({
      message: new Error(error).message,
    });
  }
}
