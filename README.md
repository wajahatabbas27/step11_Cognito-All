# step11_Cognito-All

This Repo contains all the steps of the Cognito
For every operation of sign in and sign off cognito is scalable too , and aws service which we will use. its a very comprehensive solution Its the service which we will use to authenticate the user , when he comes to sign-in It also provides the Third-party authentication to us

there is user pool
We create User Pool and over there in the user , we tell the parameters to include; Jo chezein bhi user pool mein include kreinge , wo add krni zrori hngi user ko sign-up krne ke liye , aur is mein bht sari trhn ke features hain jo hm add krskte hn userpool mein. the way to sign in - either by the email or phone no All these attributes are those which user needs to signup , we tell it that whic things are required so they are necessary for the user to signup and to put that information Password - features are also over there (e.g uppercase Characters / lowercase Characters and numbers symbols etc) There is Multi factor authentication as well in cognito, There are so many parameters in the Cognito - which we will include by cdk as well

SES
another service of amazon to send messages

Lambda trigger
Its a pre Sign up process , which will send the request and the response back to the user pool so it tells whether this user is needed to be allowed or not , basically its a two way authentication. <3
