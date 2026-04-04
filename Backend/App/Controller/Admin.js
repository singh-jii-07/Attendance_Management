import Admin from "../Models/Admin.js";
import bcrypt from "bcryptjs";
const register = async (req, res) => {
  try {
    const { name, password, email } = req.body;

    if (!name || !password || !email) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const userExisting = await Admin.findOne({ email });
    if (userExisting) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (err) {
    console.error("REGISTER ERROR ", err);

    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

export {register}