import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import userService from './UserService'
import UserValidator from './UserValidator'
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
  public async CreateTodo(ctx: HttpContextContract) {
    try {
      const payload = await this.Validator.CreatePost(ctx)
      console.log(payload)
      return this.Service.CreatePost(payload)
    } catch (error) {
      return {
        status: 404,
      }
    }
  }
}
