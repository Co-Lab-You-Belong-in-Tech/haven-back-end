# haven-back-end
Express server for Haven project


- API endpoints so far: 

- POST /auth/login (Payload: email, password) //Login 
- POST /auth/register (Payload: username, email, password) //Register

- GET /activities //Get all activities 
- POST /activities (Payload: FK user_id, content, budget, people_amount) //post activity
- DELETE /activities/:id    //delete an activity 

- GET /activities/:id/replies    //Get all replies for an activity 
- POST /activities/:id/replies   //Post a reply to activity
- DELETE /activities/:id/replies/:reply_id //Delete a reply of an activity
- Heroku:

https://haven-nodejs.herokuapp.com/
