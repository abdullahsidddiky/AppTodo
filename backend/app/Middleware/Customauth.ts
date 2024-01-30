// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Customauth {
  async handle({ request, response, auth }, next) {
    try {
      // Extract email and password from the request
      const { email, password } = request.only(['email', 'password']);

      // Authenticate the user
      const token = await auth.attempt(email, password);

      // Attach the user's ID and email to the request for further use
      request.user = {
        id: auth.user.id,
        email: auth.user.email,
      };

      // Pass the control to the next middleware or route handler
      await next();
    } catch (error) {
      // Handle authentication failure
      return response.status(401).json({ error: 'Invalid credentials' });
    }
  }
}

module.exports = Customauth;