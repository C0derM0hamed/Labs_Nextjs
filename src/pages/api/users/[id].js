import connectMongo from "@/lib/db";
import User from "@/models/User";

export default async function handler(req, res) {
  const { id } = req.query;
  await connectMongo();

  if (req.method === "GET") {
    try {
      const user = await User.findById(id);
      if (!user) return res.status(404).json({ error: "user not found" });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: "failed to fetch user" });
    }
  }

  if (req.method === "PUT") {
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedUser) return res.status(404).json({ error: "user not found" });
      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(500).json({ error: "failed to update user" });
    }
  }

  if (req.method === "DELETE") {
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) return res.status(404).json({ error: "user not found" });
      return res.status(200).json({ message: "user deleted" });
    } catch (error) {
      return res.status(500).json({ error: "failed to delete user" });
    }
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
