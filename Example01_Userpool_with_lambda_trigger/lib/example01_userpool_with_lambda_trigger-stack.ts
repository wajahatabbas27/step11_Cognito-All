import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as cognito from 'aws-cdk-lib/aws-cognito';


export class Example01UserpoolWithLambdaTriggerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    //creating lambda to trigger 
    const authEmailFunction_forLambdaTrigger = new lambda.Function(this, "LambdaFunction", {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'index.handler'
    });

    const userpool = new cognito.UserPool(this, "LambdaTriggerPool", {
      userPoolName: "LambdaTriggerUserPool",
      selfSignUpEnabled: true,                                            //Allow users to Signup
      autoVerify: { email: true },                                           //Verify email by sending a verification code
      signInAliases: { email: true },                                       //Alias ki jaga email likheinge username mein bhi
      userVerification: {                                                 //yh msg kreinge hm user Verification mein user ko
        emailSubject: 'Verify your email for our awesome app!',
        emailBody: 'Hello {username}, Thanks for signing up to our awesome app! Your verification code is {####}',
        emailStyle: cognito.VerificationEmailStyle.CODE,
        smsMessage: 'Hello {username}, Thanks for signing up to our awesome app! Your verification code is {####}',
      },
      lambdaTriggers: {
        preSignUp: authEmailFunction_forLambdaTrigger                                    //function for lambda trigger - lambda name 
      }
    })
  }
}
