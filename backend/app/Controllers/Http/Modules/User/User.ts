import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  
    Route.post('register',"Modules/User/UsersController.RegisterUser")
    Route.post('login',   "Modules/User/UsersController.LoginUser")
    
    Route.group(() => {
      Route.post('addTodo','Modules/User/UsersController.CreateTodo')
      Route.get('getTodo','Modules/User/UsersController.GetData')
      Route.post('logout','Modules/User/UsersController.Logout')

    }).middleware('auth')

    
  }).prefix('users')