import authServices from "../server/auth.services.js";

class AuthController {

    async register(req, res ,next) {
        try {
            const {name, email, password} = req.body
            const user = await authServices.register(name, email, password)
            return res.json(user)
        } catch (error) {
            console.error(error);
            
        }
    }

    async activation(req, res ,next) {
        try {
            const userID = req.params.id
            await authServices.activation(userID)
            return res.json("Account activated")
        } catch (error) {
            console.log(error);
            
        }
    }
}

export default new AuthController()