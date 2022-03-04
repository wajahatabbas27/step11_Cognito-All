"use strict";
const aws = require('aws-sdk');
exports.handler = (event, context, callback) => {
    console.log(event);
    event.response.autoConfirmUser = true;
    ///If email exists marked it as verified
    if (event.request.userAttributes.hasOwnProperty("email")) {
        event.response.autoVerifyEmail = true;
    }
    ///If phone exists marked it as verified
    if (event.request.userAttributes.hasOwnProperty("phone_number")) {
        event.response.autoVerifyPhone = true;
    }
    // Return to Amazon Cognito
    callback(null, event);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRS9CLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFVLEVBQUUsT0FBWSxFQUFFLFFBQWEsRUFBRSxFQUFFO0lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFbkIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBRXRDLHdDQUF3QztJQUN4QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUN0RCxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7S0FDekM7SUFFRCx3Q0FBd0M7SUFDeEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7UUFDN0QsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0tBQ3pDO0lBRUQsMkJBQTJCO0lBQzNCLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXdzID0gcmVxdWlyZSgnYXdzLXNkaycpO1xuXG5leHBvcnRzLmhhbmRsZXIgPSAoZXZlbnQ6IGFueSwgY29udGV4dDogYW55LCBjYWxsYmFjazogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuXG4gICAgZXZlbnQucmVzcG9uc2UuYXV0b0NvbmZpcm1Vc2VyID0gdHJ1ZTtcblxuICAgIC8vL0lmIGVtYWlsIGV4aXN0cyBtYXJrZWQgaXQgYXMgdmVyaWZpZWRcbiAgICBpZiAoZXZlbnQucmVxdWVzdC51c2VyQXR0cmlidXRlcy5oYXNPd25Qcm9wZXJ0eShcImVtYWlsXCIpKSB7XG4gICAgICAgIGV2ZW50LnJlc3BvbnNlLmF1dG9WZXJpZnlFbWFpbCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8vSWYgcGhvbmUgZXhpc3RzIG1hcmtlZCBpdCBhcyB2ZXJpZmllZFxuICAgIGlmIChldmVudC5yZXF1ZXN0LnVzZXJBdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KFwicGhvbmVfbnVtYmVyXCIpKSB7XG4gICAgICAgIGV2ZW50LnJlc3BvbnNlLmF1dG9WZXJpZnlQaG9uZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRvIEFtYXpvbiBDb2duaXRvXG4gICAgY2FsbGJhY2sobnVsbCwgZXZlbnQpO1xufSJdfQ==