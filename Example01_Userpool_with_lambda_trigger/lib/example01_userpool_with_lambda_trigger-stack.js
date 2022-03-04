"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example01UserpoolWithLambdaTriggerStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const lambda = require("aws-cdk-lib/aws-lambda");
const cognito = require("aws-cdk-lib/aws-cognito");
class Example01UserpoolWithLambdaTriggerStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        //creating lambda to trigger 
        const authEmailFunction_forLambdaTrigger = new lambda.Function(this, "LambdaFunction", {
            runtime: lambda.Runtime.NODEJS_12_X,
            code: lambda.Code.fromAsset('lambda'),
            handler: 'index.handler'
        });
        const userpool = new cognito.UserPool(this, "LambdaTriggerPool", {
            userPoolName: "LambdaTriggerUserPool",
            selfSignUpEnabled: true,
            autoVerify: { email: true },
            signInAliases: { email: true },
            userVerification: {
                emailSubject: 'Verify your email for our awesome app!',
                emailBody: 'Hello {username}, Thanks for signing up to our awesome app! Your verification code is {####}',
                emailStyle: cognito.VerificationEmailStyle.CODE,
                smsMessage: 'Hello {username}, Thanks for signing up to our awesome app! Your verification code is {####}',
            },
            lambdaTriggers: {
                preSignUp: authEmailFunction_forLambdaTrigger //function for lambda trigger - lambda name 
            }
        });
    }
}
exports.Example01UserpoolWithLambdaTriggerStack = Example01UserpoolWithLambdaTriggerStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZTAxX3VzZXJwb29sX3dpdGhfbGFtYmRhX3RyaWdnZXItc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGFtcGxlMDFfdXNlcnBvb2xfd2l0aF9sYW1iZGFfdHJpZ2dlci1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBZ0Q7QUFFaEQsaURBQWlEO0FBQ2pELG1EQUFtRDtBQUduRCxNQUFhLHVDQUF3QyxTQUFRLG1CQUFLO0lBQ2hFLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBa0I7UUFDMUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsNkJBQTZCO1FBQzdCLE1BQU0sa0NBQWtDLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRTtZQUNyRixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ25DLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7WUFDckMsT0FBTyxFQUFFLGVBQWU7U0FDekIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxRQUFRLEdBQUcsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUMvRCxZQUFZLEVBQUUsdUJBQXVCO1lBQ3JDLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsVUFBVSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUMzQixhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQzlCLGdCQUFnQixFQUFFO2dCQUNoQixZQUFZLEVBQUUsd0NBQXdDO2dCQUN0RCxTQUFTLEVBQUUsOEZBQThGO2dCQUN6RyxVQUFVLEVBQUUsT0FBTyxDQUFDLHNCQUFzQixDQUFDLElBQUk7Z0JBQy9DLFVBQVUsRUFBRSw4RkFBOEY7YUFDM0c7WUFDRCxjQUFjLEVBQUU7Z0JBQ2QsU0FBUyxFQUFFLGtDQUFrQyxDQUFvQyw0Q0FBNEM7YUFDOUg7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0Y7QUEzQkQsMEZBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2ssIFN0YWNrUHJvcHMgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdhd3MtY2RrLWxpYi9hd3MtbGFtYmRhJztcbmltcG9ydCAqIGFzIGNvZ25pdG8gZnJvbSAnYXdzLWNkay1saWIvYXdzLWNvZ25pdG8nO1xuXG5cbmV4cG9ydCBjbGFzcyBFeGFtcGxlMDFVc2VycG9vbFdpdGhMYW1iZGFUcmlnZ2VyU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuXG4gICAgLy9jcmVhdGluZyBsYW1iZGEgdG8gdHJpZ2dlciBcbiAgICBjb25zdCBhdXRoRW1haWxGdW5jdGlvbl9mb3JMYW1iZGFUcmlnZ2VyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkxhbWJkYUZ1bmN0aW9uXCIsIHtcbiAgICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xMl9YLFxuICAgICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCdsYW1iZGEnKSxcbiAgICAgIGhhbmRsZXI6ICdpbmRleC5oYW5kbGVyJ1xuICAgIH0pO1xuXG4gICAgY29uc3QgdXNlcnBvb2wgPSBuZXcgY29nbml0by5Vc2VyUG9vbCh0aGlzLCBcIkxhbWJkYVRyaWdnZXJQb29sXCIsIHtcbiAgICAgIHVzZXJQb29sTmFtZTogXCJMYW1iZGFUcmlnZ2VyVXNlclBvb2xcIixcbiAgICAgIHNlbGZTaWduVXBFbmFibGVkOiB0cnVlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9BbGxvdyB1c2VycyB0byBTaWdudXBcbiAgICAgIGF1dG9WZXJpZnk6IHsgZW1haWw6IHRydWUgfSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9WZXJpZnkgZW1haWwgYnkgc2VuZGluZyBhIHZlcmlmaWNhdGlvbiBjb2RlXG4gICAgICBzaWduSW5BbGlhc2VzOiB7IGVtYWlsOiB0cnVlIH0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9BbGlhcyBraSBqYWdhIGVtYWlsIGxpa2hlaW5nZSB1c2VybmFtZSBtZWluIGJoaVxuICAgICAgdXNlclZlcmlmaWNhdGlvbjogeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3loIG1zZyBrcmVpbmdlIGhtIHVzZXIgVmVyaWZpY2F0aW9uIG1laW4gdXNlciBrb1xuICAgICAgICBlbWFpbFN1YmplY3Q6ICdWZXJpZnkgeW91ciBlbWFpbCBmb3Igb3VyIGF3ZXNvbWUgYXBwIScsXG4gICAgICAgIGVtYWlsQm9keTogJ0hlbGxvIHt1c2VybmFtZX0sIFRoYW5rcyBmb3Igc2lnbmluZyB1cCB0byBvdXIgYXdlc29tZSBhcHAhIFlvdXIgdmVyaWZpY2F0aW9uIGNvZGUgaXMgeyMjIyN9JyxcbiAgICAgICAgZW1haWxTdHlsZTogY29nbml0by5WZXJpZmljYXRpb25FbWFpbFN0eWxlLkNPREUsXG4gICAgICAgIHNtc01lc3NhZ2U6ICdIZWxsbyB7dXNlcm5hbWV9LCBUaGFua3MgZm9yIHNpZ25pbmcgdXAgdG8gb3VyIGF3ZXNvbWUgYXBwISBZb3VyIHZlcmlmaWNhdGlvbiBjb2RlIGlzIHsjIyMjfScsXG4gICAgICB9LFxuICAgICAgbGFtYmRhVHJpZ2dlcnM6IHtcbiAgICAgICAgcHJlU2lnblVwOiBhdXRoRW1haWxGdW5jdGlvbl9mb3JMYW1iZGFUcmlnZ2VyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mdW5jdGlvbiBmb3IgbGFtYmRhIHRyaWdnZXIgLSBsYW1iZGEgbmFtZSBcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=