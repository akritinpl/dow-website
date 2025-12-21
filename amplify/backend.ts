import { defineBackend } from "@aws-amplify/backend";
import { defineFunction } from "@aws-amplify/backend";

// Define the Lambda function
const sendContactEmail = defineFunction({
  name: "sendContactEmail",
  entry: "./functions/send-contact-email.ts",
  environment: {
    COMPANY_EMAIL: "akritinpl@gmail.com", // replace with DOW email : hq@downepal.com
    SES_REGION: "us-east-1",
  },
});

// Define your backend
const backend = defineBackend({
  sendContactEmail,
});

// Add function URL to allow direct HTTP invocation
backend.sendContactEmail.resources.lambda.addFunctionUrl({
  authType: "NONE", // Public access - consider using AWS_IAM for production
  cors: {
    allowedOrigins: ["*"], // Update with your domain in production
    allowedMethods: ["POST"],
    allowedHeaders: ["*"],
  },
});

export default backend;
