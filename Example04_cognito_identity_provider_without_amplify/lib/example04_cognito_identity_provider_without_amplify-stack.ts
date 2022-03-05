import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cognito from 'aws-cdk-lib/aws-cognito';

export class Example04CognitoIdentityProviderWithoutAmplifyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    //userpool
    const userPool = new cognito.UserPool(this, "myuserpool", {
      selfSignUpEnabled: true,
      userVerification: {
        emailSubject: "Verify your email for our awesome app!",
        emailBody:
          "Hello, Thanks for signing up to our awesome app! Your verification code is {####}",
        emailStyle: cognito.VerificationEmailStyle.CODE,
      },
      signInAliases: {
        username: true,
        email: true,
      },
      autoVerify: { email: true },
      signInCaseSensitive: false,
      standardAttributes: {
        fullname: {
          required: true,
          mutable: true,
        },
        email: {
          required: true,
          mutable: false,
        },
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
    });

    //Here is everything which redirects us to the page of signup which is the feature of the cognito it takes us to a page to sign in and then takes us back
    const client = new cognito.UserPoolClient(this, "app-client", {
      userPool: userPool,
      generateSecret: true,
      oAuth: {
        flows: {
          authorizationCodeGrant: true,
        },
        scopes: [cognito.OAuthScope.OPENID, cognito.OAuthScope.EMAIL],
        callbackUrls: [`http://localhost:8000/dashboard`],                                         //take us to this particular page
        logoutUrls: [`http://localhost:8000`],                                                     //after logout take us back to this particular page
      },
    });

    //domain name
    const domain = userPool.addDomain("CognitoDomain", {
      cognitoDomain: {
        domainPrefix: "my-awesome-app3",
      },
    });

    //Its the sign-in url that the page takes us to
    const signInUrl = domain.signInUrl(client, {
      redirectUri: `http://localhost:8000/dashboard`,                                    // must be a URL configured under 'callbackUrls' with the client
    });


  }
}
