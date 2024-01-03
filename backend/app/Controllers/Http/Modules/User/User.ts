import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
  
    Route.post('register',"Modules/User/UsersController.RegisterUser")
    Route.post('login',   "Modules/User/UsersController.LoginUser")
    
  }).prefix('users')