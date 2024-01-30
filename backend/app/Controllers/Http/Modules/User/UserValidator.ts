import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class UserValidator {
  public async RegisterUser(ctx: HttpContextContract) {
    const RegisterUserSchema = schema.create({
      name: schema.string(),
      email: schema.string([rules.unique({ table: 'users', column: 'email' }), rules.email()]),
      password: schema.string(),
    })
    const msg = {
      'name.required': 'name required check name',
      'email.required': 'check email format',
      'password.required': 'password required',
    }
    const payload = await ctx.request.validate({ schema: RegisterUserSchema, messages: msg })
    return payload
  }
  public async LoginUser(request) {
    const LoginUserSchema = schema.create({
      email: schema.string([rules.exists({ table: 'users', column: 'email' })]),
      password: schema.string(),
    })
    const msg = {
      'email.required': 'email does not match',
      'password.required': 'password does not match',
      'email.exists': 'email does not exists',
    }
    const payload = await request.validate({ schema: LoginUserSchema, messages: msg })
    // console.log('validated from validator', payload)
    return payload
  }
  public async Logout(request){
    const LogoutSchema =schema.create({
      id:schema.number([rules.exists({table:'users', column:'id'})])
    })
    const msg = {
      'id.exists':'id does not exists'
    }
    const payload = await request.validate({schema:LogoutSchema, messages:msg })
    return payload 
  }
  public async CreatePost(request) {
    const CreatePostSchema = schema.create({
      // userId: schema.number([rules.exists({ table: 'users', column: 'id' })]),
      content: schema.string(),
    })
    const msg = {
      'userId.required': 'id does not match',
      'userId.exists': 'id does not exists',
      'contetn.required': 'content required',
    }

    const payload = await request.validate({ schema: CreatePostSchema, messages: msg })
    console.log(payload)
    return payload
  }
}
