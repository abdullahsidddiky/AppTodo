import User from "App/Models/User";

export default class UserQuery{
    public async RegisterUser(payload){
        return await User.create(payload)
    }
    public async LoginUser(payload){
        const user = await User.query().where('email',payload.email).andWhere('password', payload.password)
        return user
   
    }
    
}