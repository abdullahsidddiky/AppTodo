import UserQuery from "./UserQuery";

export default class userService{
    private Query: UserQuery

    constructor(){
        this.Query= new UserQuery()
    }
    public async RegisterUser(payload){
      
        return this.Query.RegisterUser(payload)
    }
    public async LoginUser(payload){
        return this.Query.LoginUser(payload)
    }
}