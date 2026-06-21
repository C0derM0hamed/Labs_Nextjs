import connectMongo from "@/lib/db";
import User from "@/models/User";

export default async function handler(req, res) {
  await connectMongo();

  if (req.method === "GET") {
    try {
      const users = await User.find({});
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: "failed to fetch users" });
    }
  }

  if (req.method === "POST") {
    try {
      const newUser = await User.create(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: "failed to create user" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
