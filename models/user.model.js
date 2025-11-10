    import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    email: { type: String, required:true, unique: true },
    password: {type: String, required: true},
    isAcitve: {type: Boolean,   default: false}
}, {timestamps: true}
)

const usersdatabase = mongoose.model("User", UserSchema);

export default usersdatabase