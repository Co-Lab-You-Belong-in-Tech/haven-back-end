# haven-back-end
Express server for Haven project


- API endpoints so far: 

  **Auth**
- POST /auth/login (Payload: email, password)              **===> Login**
- POST /auth/register (Payload: username, email, password) **===> Register**
- 
  **Activities**
- GET /activities **===> Get all activities**
- POST /activities (Payload: FK user_id, content, budget, people_amount) **===> Post activity**
- DELETE /activities/:id    //delete an activity
- 
  **Replies**
- GET /activities/:id/replies    **===> Get all replies for an activity**
- POST /activities/:id/replies   **===> Post a reply to activity**
- DELETE /activities/:id/replies/:reply_id **===> Delete a reply of an activity**
- 
  **Users**
  
  -GET /users **===> Get all users**
  -GET /users/profile **===> Get users profile**
  -GET /users/me **===> Get your own profile**
  
  **Onboarding**
  
  -PUT /onboarding/name **===> Takes variables *first_name*, *last_name* updates first name and last name of the user**
  -PUT /onboarding/location **===> Takes a variable *location* updates the location of the user**
  -PUT /onboarding/pronouns **===> Takes a variable *pronouns* updates user's pronouns**
- **Heroku:**

https://haven-nodejs.herokuapp.com/
