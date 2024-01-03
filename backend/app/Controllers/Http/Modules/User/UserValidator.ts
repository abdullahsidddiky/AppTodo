import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
export default class UserValidator{
    public async RegisterUser(ctx:HttpContextContract){
      const RegisterUserSchema = schema.create({
        name:schema.string(),
        email:schema.string([
            rules.unique({table:'users', column:'email'}),
            rules.email(),

        ]),
        password:schema.string(),
      })
      const msg ={
        'name.required':'name required check name',
        'email.required': 'check email format',
        'password.required':'password required',
      }
      const payload = await ctx.request.validate({schema:RegisterUserSchema, messages:msg})
      return payload
     
    }
    public async LoginUser(ctx:HttpContextContract){
        const LoginUserSchema = schema.create({
            email:schema.string([
                rules.exists({table:'users', column:'email'})
            ]),
            password:schema.string()
        })
        const msg = {
            'email.required': 'email does not match',
            'password.required': 'password does not match'
        }
        const payload = await ctx.request.validate({schema:LoginUserSchema,messages:msg})
        return payload

    }
   
}
