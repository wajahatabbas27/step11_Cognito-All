import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as cognito from 'aws-cdk-lib/aws-cognito';

export class Example00DefineUserpoolStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const userPool = new cognito.UserPool(this, "UserPool", {
      userPoolName: "My_first_user_pool_using_cdk",
      selfSignUpEnabled: true, // Allow users to sign up
      autoVerify: { email: true }, // Verify email addresses by sending a verification code
      signInAliases: { email: true }, // Set email as an alias
      userVerification: {
        emailSubject: 'Verify your email for our awesome app!',
        emailBody: 'Hello {username}, Thanks for signing up to our awesome app! Your verification code is {####}',
        emailStyle: cognito.VerificationEmailStyle.CODE,
        smsMessage: 'Hello {username}, Thanks for signing up to our awesome app! Your verification code is {####}',
      },                                ///customize email and sms
      standardAttributes: {
        fullname: {
          required: true,
          mutable: false,
        },
      },                                ////Attributes already define by cognito 
      customAttributes: {
        'myappid': new cognito.StringAttribute({ minLen: 5, maxLen: 15, mutable: false }),
      },                                ////Custom Attributes defined according to the application needs
      passwordPolicy: {
        minLength: 12,
        requireLowercase: true,
        requireUppercase: true,
        requireDigits: true,
        requireSymbols: true,
        tempPasswordValidity: Duration.days(3),
      },                                                        ///Password Policy
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,      ///Account Recovery email
    });
  }
}
