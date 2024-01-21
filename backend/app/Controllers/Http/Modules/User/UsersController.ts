import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import userService from "./UserService";
import UserValidator from "./UserValidator";
export default class UsersController{
    //  validator = new UserValidator()
    private Validator : UserValidator
    private Service : userService
    constructor(){
        this.Validator = new UserValidator()
        this.Service = new userService()

    }
    public async RegisterUser(ctx:HttpContextContract){
        try{
           const payload= await this.Validator.RegisterUser(ctx)
           return this.Service.RegisterUser(payload)
        }catch(error){
            return {
                status:404
            }
        }
    }
    public async LoginUser(ctx:HttpContextContract){
        try{
            const payload = await this.Validator.LoginUser(ctx)
            return this.Service.LoginUser(payload)
        }catch(error){
            return {
                status:404
            }
        }
    }

}