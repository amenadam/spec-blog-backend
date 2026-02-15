import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.json({ success: false, message: "Access denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRETE);
    req.user = decoded;
    next();
  } catch (error) {
    res.json({ success: false, message: "Invalid token" });
  }
};
