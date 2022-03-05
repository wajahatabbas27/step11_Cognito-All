"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example04CognitoIdentityProviderWithoutAmplifyStack = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const cognito = require("aws-cdk-lib/aws-cognito");
class Example04CognitoIdentityProviderWithoutAmplifyStack extends aws_cdk_lib_1.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        //userpool
        const userPool = new cognito.UserPool(this, "myuserpool", {
            selfSignUpEnabled: true,
            userVerification: {
                emailSubject: "Verify your email for our awesome app!",
                emailBody: "Hello, Thanks for signing up to our awesome app! Your verification code is {####}",
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
                callbackUrls: [`http://localhost:8000/dashboard`],
                logoutUrls: [`http://localhost:8000`],
            },
        });
        //domain name
        const domain = userPool.addDomain("CognitoDomain", {
            cognitoDomain: {
                domainPrefix: "my-awesome-app",
            },
        });
        //Its the sign-in url that the page takes us to
        const signInUrl = domain.signInUrl(client, {
            redirectUri: `http://localhost:8000/dashboard`,
        });
    }
}
exports.Example04CognitoIdentityProviderWithoutAmplifyStack = Example04CognitoIdentityProviderWithoutAmplifyStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZTA0X2NvZ25pdG9faWRlbnRpdHlfcHJvdmlkZXJfd2l0aG91dF9hbXBsaWZ5LXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhhbXBsZTA0X2NvZ25pdG9faWRlbnRpdHlfcHJvdmlkZXJfd2l0aG91dF9hbXBsaWZ5LXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUFnRDtBQUVoRCxtREFBbUQ7QUFFbkQsTUFBYSxtREFBb0QsU0FBUSxtQkFBSztJQUM1RSxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQWtCO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLFVBQVU7UUFDVixNQUFNLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN4RCxpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLGdCQUFnQixFQUFFO2dCQUNoQixZQUFZLEVBQUUsd0NBQXdDO2dCQUN0RCxTQUFTLEVBQ1AsbUZBQW1GO2dCQUNyRixVQUFVLEVBQUUsT0FBTyxDQUFDLHNCQUFzQixDQUFDLElBQUk7YUFDaEQ7WUFDRCxhQUFhLEVBQUU7Z0JBQ2IsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNELFVBQVUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDM0IsbUJBQW1CLEVBQUUsS0FBSztZQUMxQixrQkFBa0IsRUFBRTtnQkFDbEIsUUFBUSxFQUFFO29CQUNSLFFBQVEsRUFBRSxJQUFJO29CQUNkLE9BQU8sRUFBRSxJQUFJO2lCQUNkO2dCQUNELEtBQUssRUFBRTtvQkFDTCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxPQUFPLEVBQUUsS0FBSztpQkFDZjthQUNGO1lBQ0QsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsVUFBVTtTQUNwRCxDQUFDLENBQUM7UUFFSCx5SkFBeUo7UUFDekosTUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7WUFDNUQsUUFBUSxFQUFFLFFBQVE7WUFDbEIsY0FBYyxFQUFFLElBQUk7WUFDcEIsS0FBSyxFQUFFO2dCQUNMLEtBQUssRUFBRTtvQkFDTCxzQkFBc0IsRUFBRSxJQUFJO2lCQUM3QjtnQkFDRCxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztnQkFDN0QsWUFBWSxFQUFFLENBQUMsaUNBQWlDLENBQUM7Z0JBQ2pELFVBQVUsRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3RDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsYUFBYTtRQUNiLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFO1lBQ2pELGFBQWEsRUFBRTtnQkFDYixZQUFZLEVBQUUsZ0JBQWdCO2FBQy9CO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsK0NBQStDO1FBQy9DLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3pDLFdBQVcsRUFBRSxpQ0FBaUM7U0FDL0MsQ0FBQyxDQUFDO0lBR0wsQ0FBQztDQUNGO0FBNURELGtIQTREQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YWNrLCBTdGFja1Byb3BzIH0gZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSAnY29uc3RydWN0cyc7XG5pbXBvcnQgKiBhcyBjb2duaXRvIGZyb20gJ2F3cy1jZGstbGliL2F3cy1jb2duaXRvJztcblxuZXhwb3J0IGNsYXNzIEV4YW1wbGUwNENvZ25pdG9JZGVudGl0eVByb3ZpZGVyV2l0aG91dEFtcGxpZnlTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBTdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICAvL3VzZXJwb29sXG4gICAgY29uc3QgdXNlclBvb2wgPSBuZXcgY29nbml0by5Vc2VyUG9vbCh0aGlzLCBcIm15dXNlcnBvb2xcIiwge1xuICAgICAgc2VsZlNpZ25VcEVuYWJsZWQ6IHRydWUsXG4gICAgICB1c2VyVmVyaWZpY2F0aW9uOiB7XG4gICAgICAgIGVtYWlsU3ViamVjdDogXCJWZXJpZnkgeW91ciBlbWFpbCBmb3Igb3VyIGF3ZXNvbWUgYXBwIVwiLFxuICAgICAgICBlbWFpbEJvZHk6XG4gICAgICAgICAgXCJIZWxsbywgVGhhbmtzIGZvciBzaWduaW5nIHVwIHRvIG91ciBhd2Vzb21lIGFwcCEgWW91ciB2ZXJpZmljYXRpb24gY29kZSBpcyB7IyMjI31cIixcbiAgICAgICAgZW1haWxTdHlsZTogY29nbml0by5WZXJpZmljYXRpb25FbWFpbFN0eWxlLkNPREUsXG4gICAgICB9LFxuICAgICAgc2lnbkluQWxpYXNlczoge1xuICAgICAgICB1c2VybmFtZTogdHJ1ZSxcbiAgICAgICAgZW1haWw6IHRydWUsXG4gICAgICB9LFxuICAgICAgYXV0b1ZlcmlmeTogeyBlbWFpbDogdHJ1ZSB9LFxuICAgICAgc2lnbkluQ2FzZVNlbnNpdGl2ZTogZmFsc2UsXG4gICAgICBzdGFuZGFyZEF0dHJpYnV0ZXM6IHtcbiAgICAgICAgZnVsbG5hbWU6IHtcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICBtdXRhYmxlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgIG11dGFibGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGFjY291bnRSZWNvdmVyeTogY29nbml0by5BY2NvdW50UmVjb3ZlcnkuRU1BSUxfT05MWSxcbiAgICB9KTtcblxuICAgIC8vSGVyZSBpcyBldmVyeXRoaW5nIHdoaWNoIHJlZGlyZWN0cyB1cyB0byB0aGUgcGFnZSBvZiBzaWdudXAgd2hpY2ggaXMgdGhlIGZlYXR1cmUgb2YgdGhlIGNvZ25pdG8gaXQgdGFrZXMgdXMgdG8gYSBwYWdlIHRvIHNpZ24gaW4gYW5kIHRoZW4gdGFrZXMgdXMgYmFja1xuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBjb2duaXRvLlVzZXJQb29sQ2xpZW50KHRoaXMsIFwiYXBwLWNsaWVudFwiLCB7XG4gICAgICB1c2VyUG9vbDogdXNlclBvb2wsXG4gICAgICBnZW5lcmF0ZVNlY3JldDogdHJ1ZSxcbiAgICAgIG9BdXRoOiB7XG4gICAgICAgIGZsb3dzOiB7XG4gICAgICAgICAgYXV0aG9yaXphdGlvbkNvZGVHcmFudDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVzOiBbY29nbml0by5PQXV0aFNjb3BlLk9QRU5JRCwgY29nbml0by5PQXV0aFNjb3BlLkVNQUlMXSxcbiAgICAgICAgY2FsbGJhY2tVcmxzOiBbYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kYXNoYm9hcmRgXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGFrZSB1cyB0byB0aGlzIHBhcnRpY3VsYXIgcGFnZVxuICAgICAgICBsb2dvdXRVcmxzOiBbYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMGBdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9hZnRlciBsb2dvdXQgdGFrZSB1cyBiYWNrIHRvIHRoaXMgcGFydGljdWxhciBwYWdlXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy9kb21haW4gbmFtZVxuICAgIGNvbnN0IGRvbWFpbiA9IHVzZXJQb29sLmFkZERvbWFpbihcIkNvZ25pdG9Eb21haW5cIiwge1xuICAgICAgY29nbml0b0RvbWFpbjoge1xuICAgICAgICBkb21haW5QcmVmaXg6IFwibXktYXdlc29tZS1hcHBcIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvL0l0cyB0aGUgc2lnbi1pbiB1cmwgdGhhdCB0aGUgcGFnZSB0YWtlcyB1cyB0b1xuICAgIGNvbnN0IHNpZ25JblVybCA9IGRvbWFpbi5zaWduSW5VcmwoY2xpZW50LCB7XG4gICAgICByZWRpcmVjdFVyaTogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9kYXNoYm9hcmRgLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG11c3QgYmUgYSBVUkwgY29uZmlndXJlZCB1bmRlciAnY2FsbGJhY2tVcmxzJyB3aXRoIHRoZSBjbGllbnRcbiAgICB9KTtcblxuXG4gIH1cbn1cbiJdfQ==