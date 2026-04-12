import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
    teacherId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    assignedClasses: [{
        type: String,
        required: true
    }]
}, { timestamps: true });

const Teacher = mongoose.model("Teacher", teacherSchema);

export default Teacher;