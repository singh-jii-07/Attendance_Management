import Admin from "../Models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const register = async (req, res) => {
  try {
    const { name, password, email, role } = req.body;

    if (!name || !password || !email || role) {
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
      role,
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

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!password || !email) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  const checkAdmin = await Admin.findOne({ email });
  if (!checkAdmin) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  const ismatch = await bcrypt.compare(password, checkuser.password);
  try {
    if (!ismatch) {
      return res.status(400).json({
        message: "password is wrong",
      });
    }

    const token = jwt.sign(
      { id: checkAdmin._id, role: checkAdmin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );

    return res.status(200).json({
      message: "User login successful",
      token,
    });
  } catch (err) {
    console.error("Login Error", err);

    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

export { register,login };
