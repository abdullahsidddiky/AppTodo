import Todo from 'App/Models/Todo'
import User from 'App/Models/User'

export default class UserQuery {
  public async RegisterUser(payload) {
    await User.create(payload)
    return {
      status: 200,
    }
  }
  public async LoginUser({ auth, payload }) {
    try {
      const user = await auth.use('web').attempt(payload.email, payload.password)
      return {
        status: 200,
        data: user,
      }
    } catch (error) {
      return {
        status: 405,
      }
    }
  }
  public async CreatePost(payload) {
    console.log(payload)
   

    //   await Todo.create(payload)
      try{
    }catch(error){
        return{
            status:405
        }
    }
    // return payload
  }
}
