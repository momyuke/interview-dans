const UserServices = new (require('../services/user.services'))();
const ResponeHandler = require('../utils/ResponeHandler');

class UserController{
    async loginController(req, res){
        try{
            const {username, password} = req.body;
            if(!username || !password) {
                const resultError = new ResponeHandler(null, 'Username & Password must be fill', 401);
                res.status(resultError.status).send(resultError);
                return
            }
            const result = await UserServices.login(username, password);
            res.status(result.status).send(result);
            
        }catch(err){
            const resultError = new ResponeHandler(null, err.message, 500);
            res.status(resultError.status).send(resultError);
        }
    }
}

module.exports = UserController;