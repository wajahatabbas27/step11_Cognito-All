# Cognito_identity_provider_without_amplify

In this example we are using cognito as its own identity provider , In the last step i used the provider that is google and connected it to the frontend of the application
Here all the working should be with the Client it self as we are not redirected to any of the page as in the previous step , we git directed to the page of sign in with google.

Here is userpool first for us , after that we are creating client , overthere we are telling it to create the client for us and to taht particular client will have the callbackUrls and the logoutUrls , which will take us to te place where we will sign in and logout

Moreover we have the domain name as well and the signIn url where we will be redirected

## Clientside

By using this technique we only have a login button on the clientside whic redirects to the page which we have mentioned in the configs of the frontend and in the code of the client as well

When we login to the homepage and we are redirected to the page and we return back to the page as well
In this example we are not using Amplify here , we are doing everything manually.

## Cognito own identity provider

Here we have used the own identity provider of cognito , which redirects the user to a particular domain by requesting and by responsing it back to the page , It is redirected.

## Console Settings

After Deploying , we will have all the settings in the App Client setting , where we will use to see the UI and other keys to configure the client as well.
