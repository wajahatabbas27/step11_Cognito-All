# Cognito with frontend Amplify

We always need a userpool-Client to connect to the frontend application always so here in the stack we are creating the userpool-clent so that we can use it in the front-end of the application so that the user can access it from the frontend of the application

We require the Id and the Client , when we connect to the Client side of the Application.

## Cognito with Amplify

The Amplify Framework uses Amazon Cognito as the main authentication provider. Amazon Cognito is a robust user directory service that handles user registration, authentication, account recovery & other operations.

Amplify makes it very easy to use your user pool that you defined in your cdk stack.

There are two ways to add authentication capabilities to your application.

Use pre-built UI components
Call Authentication APIs manually
We are only going to cover the pre-build UI components in this step.

## Amplify Pre build components

we can use the Amplify Pre build components - widgets in the frontend by directly importing them from the web of Amplify.

like here in the frontend code we will be using the Auth and AmplifySignOut components from the web by directly importing them.

## frontend

we can connect our frontend with the userpool by aws-export.js file by giving userpoolId and the userPoolClient overthere and used the prebuild components of the amplify by just importing the components inside.

using amplify Authenticator we get the frontend form with only fields it gives - but if we want to have other fields as well so we need to include them using the custom fields

Here whatever the Things we are using are to sign in using the custom user ID and password - with in the application by using the cdk-stack for the fields and by creating the frontend by using the amplify frontend tools
