# Cognito with External Sources of Login - like Google

Its Similar to the custom Login but here what we have to do ,is to have the provider like google and we need to register the identity provider here that is google and then created the client and also it requires to work with the Google Developer Console from where we bring the credentials and we send the domain credentials there , that shows the place where we are going to be redirected all the way

## User-pool code - similar to previous steps

const userPool = new cognito.UserPool(this, "eruGoogleUserPool", {
selfSignUpEnabled: true,
accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
userVerification: {
emailStyle: cognito.VerificationEmailStyle.CODE,
},
autoVerify: {
email: true,
},
standardAttributes: {
email: {
required: true,
mutable: true,
},
},
});

Created the User by this code here just

## Added Provider - Google as a Provider used to signin externally with Google

const provider = new cognito.UserPoolIdentityProviderGoogle(this,"googleProvider",
{
userPool: userPool,
clientId: "xxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com", // Google Client id
clientSecret: "xxxxxx123123xxxxxxxxxxxxxx", // Google Client Secret
attributeMapping: {
email: cognito.ProviderAttribute.GOOGLE_EMAIL,
givenName: cognito.ProviderAttribute.GOOGLE_GIVEN_NAME,
phoneNumber: cognito.ProviderAttribute.GOOGLE_PHONE_NUMBERS,
},
scopes: ["profile", "email", "openid"],
}
);

## Combining both the UserPool and the Provider

userPool.registerIdentityProvider(provider);

## creating UserPool Client to be used in the frontend Client

const userPoolClient = new cognito.UserPoolClient(this, "amplifyClient", {
userPool,
oAuth: {
callbackUrls: ["http://localhost:8000/"], // This is what user is allowed to be redirected to with the code upon signin. this can be a list of urls.
logoutUrls: ["http://localhost:8000/"], // This is what user is allowed to be redirected to after signout. this can be a list of urls.
},
});

## Creating Domain to be used there in the Developer Console to connect to the Stack

const domain = userPool.addDomain("domain", {
cognitoDomain: {
domainPrefix: "eru-test-pool", // SET YOUR OWN Domain PREFIX HERE
},
});

## Creating Outputs - to be used in the frontend

new cdk.CfnOutput(this, "aws_user_pools_web_client_id", {
value: userPoolClient.userPoolClientId,
});

new cdk.CfnOutput(this, "aws_project_region", {
value: this.region,
});

new cdk.CfnOutput(this, "aws_user_pools_id", {
value: userPool.userPoolId,
});

new cdk.CfnOutput(this, "domain", {
value: domain.domainName,
});
