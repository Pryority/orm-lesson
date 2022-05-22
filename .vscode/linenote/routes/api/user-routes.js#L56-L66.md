We queried the User table using the findOne() method for the email entered by the user and assigned it to req.body.email.

If the user with that email was not found, a message is sent back as a response to the client. However, if the email was found in the database, the next step will be to verify the user's identity by matching the password from the user and the hashed password in the database.
