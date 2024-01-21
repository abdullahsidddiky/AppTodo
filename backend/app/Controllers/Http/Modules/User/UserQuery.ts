import User from "App/Models/User";

export default class UserQuery{
    public async RegisterUser(payload){
         await User.create(payload)
         return{
            status:200
         }

    }
    public async LoginUser(payload){
        const user = await User.query().where('email',payload.email).andWhere('password', payload.password).select(['id','name'])
        if(!user.length){
            return {
                status:404
        }   
    }
    return {
        status:200,
        user:user
    }
    
    }
}