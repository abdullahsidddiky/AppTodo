import UserQuery from './UserQuery'

export default class userService {
  private Query: UserQuery

  constructor() {
    this.Query = new UserQuery()
  }
  public async RegisterUser(payload) {
    return this.Query.RegisterUser(payload)
  }
  public async LoginUser({ auth, payload }) {
    return this.Query.LoginUser({ auth, payload })
  }
  public async CreatePost(payload) {
    return this.Query.CreatePost(payload)
  }
}
