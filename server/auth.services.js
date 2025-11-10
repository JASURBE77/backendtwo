import usersdatabase from "../models/user.model.js";
import bcrypt from "bcrypt"
import UserDto from "../dtos/user.dto.js";
class AuthService {
    async register (name, email, password) {
        const existUser = await usersdatabase.findOne({email})
        if (existUser) {
            throw new Error(`User already ${email} exists`)
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const user = await usersdatabase.create({name, email, password: hashPassword})

        const userDTOv = new UserDto(user)

        return userDTOv
    }

    async activation(userID) {
        const user = await usersdatabase.findById(userID)
        if(!user) throw new Error("User not found")

            user.isAcitve = true
            await user.save()
    }
}

export default new AuthService();