import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import { UserPool } from 'aws-cdk-lib/aws-cognito';

export class Example02CognitoWithFrontendAmplifyStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    //Created the backend userpool to be used in the clientside 
    const userPool = new cognito.UserPool(this, "userPool-Amplify", {
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
        phoneNumber: {
          required: true,
          mutable: true
        }

      },
    });


    //Creating the UserPool Client to be used here in the clientside
    const userPoolClient = new cognito.UserPoolClient(this, "UserPoolClient", {
      userPool                                                                              //created the userpool client by using this userpool created above
    });

    //output the userpool ID and the client
    new CfnOutput(this, "UserPoolId", {
      value: userPool.userPoolId
    })

    new CfnOutput(this, "UserPoolClient", {
      value: userPoolClient.userPoolClientId                                                //getting the userPool Client id from the userpool client
    })

  }
}
