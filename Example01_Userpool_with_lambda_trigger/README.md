# Creating UserPool using Lambda Trigger

After signing up from the userpool , what lambda trigger does is , it basically run the function , whatever the logic is there inside the lambda e.g of the authentication , allow particular user to signup
Thus whatever the logic , It allows the lambda to generate the logic , and it is called after the userpool has been created.

In the Parameter what we have to write just the lambdaTrigger
and at what case or logic , we want to call the lambda trigger - as here it is called on preSignedUp and forward we have called the function here as well by giving the name of the function.

## pre Signup process

Here lambda function will be triggered before the signup process as its pre-signup
what it does here it sends the request here to the pre-signed-up lambda and when the response comes back , it creates the signup on that basis particularly

### Lambda trigger logic

Here the logic is basically that is created it is basilly it auto confirms users by doing confirmation by sending mails and messages to te user and then sending back the response

### We can also check the logs and check whether the lambda trigger is working or not
