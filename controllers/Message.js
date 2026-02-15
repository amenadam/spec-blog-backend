import Message from "../models/Message.js";

export const sendMessage = async (req, res) => {
  try {
    const { fullName, email, message } = req.body;

    let newMessage = await Message.create({
      fullName,
      email,
      message,
    });

    res.json({ success: true, message: "Message sent!", newMessage });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message || "Error sending message",
    });
  }
};

export const getMessages = async (req, res) => {
  try {
    let messages = await Message.find().sort({ createdAt: -1 });

    if (!messages)
      return res.json({ success: false, message: "No message found!" });

    res.json({ success: true, message: "Messages fetched", messages });
  } catch (error) {
    res.json({
      success: false,
      message: error?.message || "Error sending message",
    });
  }
};
