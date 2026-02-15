import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    let newMessage = await Message.create({
      fullName,
      email,
      message,
    });

    res.json({ success: false, message: "Message sent!", newMessage });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message || "Error sending message",
    });
  }
};
