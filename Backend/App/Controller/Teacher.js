import bcrypt from "bcryptjs";
import Teacher from "../Models/Teacher.js";

const register = async (req, res) => {
  try {
    const { teacherId, name, email, password, subject, assignedClasses } =
      req.body;
    if (
      !teacherId ||
      !name ||
      !email ||
      !password ||
      !subject ||
      !assignedClasses
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const teacherExisting = await Teacher.find({ email });
    if (userExisting) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newTeacher = await Teacher.create({
      teacherId,
      name,
      email,
      password: hashedPassword,
      subject,
      assignedClasses,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: newTeacher,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
};

export {register}
