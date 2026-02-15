import jwt from "jsonwebtoken";
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({ success: false, message: "All fields are required!" });
    }

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASS
    ) {
      return res.json({ success: false, message: "Invalid creditentials" });
    }

    const token = jwt.sign({ role: "admin" }, process.env.JWT_SECRETE);
    res.json({
      success: true,
      token,
      message: "Login success",
      user: { email },
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message || "Error logging user",
    });
  }
};
