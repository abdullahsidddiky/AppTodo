import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import userService from './UserService'
import UserValidator from './UserValidator'
import User from 'App/Models/User'
export default class UsersController {
  private Validator: UserValidator
  private Service: userService
  constructor() {
    this.Validator = new UserValidator()
    this.Service = new userService()
  }
  public async RegisterUser(ctx: HttpContextContract) {
    try {
      const payload = await this.Validator.RegisterUser(ctx)
      return this.Service.RegisterUser(payload)
    } catch (error) {
      return {
        status: 404,
      }
    }
  }
  public async LoginUser({ request, auth }: HttpContextContract) {
    try {
      const payload = await this.Validator.LoginUser(request)
      return this.Service.LoginUser({ auth, payload })
    } catch (error) {
      console.log('error')
      return {
        status: 404,
      }
    }
  }
  public async Logout({request, auth}:HttpContextContract){
    try{
      const payload = await this.Validator.Logout(request)
      return this.Service.Logout({auth, payload})
    }catch(error){
      return {
        status:404
      }
    }
  }
  public async CreateTodo({request, auth}: HttpContextContract) {
    
    // console.log(ctx)
 console.log('ON CONTROLLER')
    try {
      const payload = await this.Validator.CreatePost(request)
     
      return this.Service.CreatePost({auth, payload})
    } catch (error) {
      return {
        status: 404,
      }
    }
  }

}