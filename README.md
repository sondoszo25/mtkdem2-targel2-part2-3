# mtkdem2-targel2-part2

in this part we build a server,our server is running in port 8080,  which can gives responses to these:
a) http://localhost:8080/Chats :

    1)in POST: it creates an new Chat
    2)in GET: it gives us all the chats of the current user
b)http://localhost:8080/Tokens : in POST it creates a jwt for the user who want to log in

c)http://localhost:8080/Users : in POST: creates a new user

d)http://localhost:8080/Users/:id : in GET returns all the details about the user with the id in the link.

e)http://localhost:8080/api/Chats/:id/Messages/ : 
    1)in GET: returns all the masseges between the users which are
    talking in the chat with this id.

    2)in POST: to send the massege which it should be in the chat with the id in the link.


we are saving all the data we get from the users in Mongodb, which is running in port 27017.

*to run this code first you must make sure that mongodb is connected to this port and after that in the terminal
of this project write npm start and in the browser go to localhost:8080*