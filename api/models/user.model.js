import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avtar: {
      type: String,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0fJFTSSoMia3RIhygxt6Ac-MI68maxxU8d2i6jF1cRZ6sSgBwjkVNhzrWxQ&s",
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;